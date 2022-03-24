import {styled} from '@stitches/react';
import {useState} from 'react';
import {SearchBar} from './components/SearchBar/SearchBar';
import {Pokemon} from '../types/Pokemon';
import {Pokedex} from './components/Pokedex/Pokedex';

const Main = styled('main', {
  display: 'grid',
  placeItems: 'center',
  width: '100%',
  height: '100%',
});

const fetchPokemon = (key: string): Promise<Pokemon> =>
  fetch(`http://localhost:3434/pokemon/${key}`, {method: 'get'}).then(response => response.json());

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const searchPokemon = async (pokemonNameOrNumber: string) => {
    setPokemon(null);
    setLoading(true);
    try {
      const pokemon = await fetchPokemon(pokemonNameOrNumber);
      setPokemon(pokemon);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <Main>
      <SearchBar onSearchPokemon={searchPokemon} />
      <Pokedex pokemon={pokemon} loading={{isLoading: loading}} />
    </Main>
  );
};

export default App;
