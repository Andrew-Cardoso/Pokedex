import axios, {AxiosResponse} from 'axios';

import {PokemonDto, SpriteDetails} from '../dtos/pokemon.dto';
import {redis} from '../redis';
import {Characteristic} from '../types/characteristic.type';
import {Pokemon, Type} from '../types/pokemon.type';
import {Stat} from '../types/stat.type';

const POKEMON_NAMES_LIST_KEY = 'pokemonNamesList';

const parseName = (key: string) => key.replaceAll('_', ' ');

const buildPokemonCharacteristics = (characteristics: Characteristic[]) =>
  characteristics
    .map(({descriptions}) => descriptions.find(({language}) => language.name === 'en')?.description)
    .filter(Boolean) as string[];

const buildTypes = (types: Type[]) => types.map(({type}) => type.name);

const buildSprites = (
  sprites: Record<string, unknown>,
  spriteDetails: SpriteDetails[] = [],
  currentKey: string | null = null,
): SpriteDetails[] => {
  const key = Object.keys(sprites)?.[0];
  if (!key) return spriteDetails;

  const sprite = sprites[key];
  delete sprites[key];

  if (!sprite) return buildSprites(sprites, spriteDetails, currentKey);

  const name = `${currentKey ?? ''} ${parseName(key)}`.trim();
  return typeof sprite === 'string'
    ? buildSprites(sprites, [...spriteDetails, {image: sprite, name}], currentKey)
    : buildSprites(sprites, [...spriteDetails, ...buildSprites(<Record<string, unknown>>sprite, undefined, name)]);
};

const buildPokemonDto = (
  {base_experience, height, id, is_default, location_area_encounters, name, order, sprites, weight, types}: Pokemon,
  characteristics: Characteristic[],
): PokemonDto => ({
  id,
  base_experience,
  name,
  height,
  weight,
  is_default,
  location_area_encounters,
  order,
  sprites: buildSprites(<any>sprites).sort((a, b) => a.name.localeCompare(b.name)),
  types: buildTypes(types),
  characteristics: buildPokemonCharacteristics(characteristics),
});
const parse = (jsonPokemon: string | null): PokemonDto => (jsonPokemon ? JSON.parse(jsonPokemon) : null);
const stringify = (pokemon: PokemonDto) => JSON.stringify(pokemon);

const fetchFromPokeApi = async (key: string): Promise<PokemonDto> => {
  const {data: pokemonResponse}: AxiosResponse<Pokemon> = await axios.get(`https://pokeapi.co/api/v2/pokemon/${key}`);
  const statsResponse: AxiosResponse<Stat>[] = await Promise.all(
    pokemonResponse.stats.map(({stat}) => axios.get(stat.url)),
  );
  const stats = statsResponse.map(({data}) => data);
  const characteristicsResponse: AxiosResponse<Characteristic>[] = await Promise.all(
    stats.flatMap(({characteristics}) => characteristics.map(({url}) => axios.get(url))),
  );
  const characteristics = characteristicsResponse.map(({data}) => data);

  const pokemon = buildPokemonDto(pokemonResponse, characteristics);

  await redis.set(key, stringify(pokemon));

  return pokemon;
};

export const getCachedPokemon = async (key: string): Promise<PokemonDto | null> => {
  try {
    const isCached = await redis.exists(key);
    if (isCached) return parse(await redis.get(key));
    const pokemon = await fetchFromPokeApi(key);
    return pokemon;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPokemonNames = async () => {
  const json = await redis.get(POKEMON_NAMES_LIST_KEY);
  const pokemonNames: string[] = JSON.parse(json!);
  return pokemonNames;
};

export const syncPokemonList = async () => {
  if (await redis.exists(POKEMON_NAMES_LIST_KEY)) return;

  const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${Number.MAX_SAFE_INTEGER}`);

  type ListResults = ReadonlyArray<{name: string; url: string}>;
  const list: ListResults = data.results;

  const namesList = list.map(({name}) => name);

  await redis.set(POKEMON_NAMES_LIST_KEY, JSON.stringify(namesList));
};
