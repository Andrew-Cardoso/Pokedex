import {useEffect, useState} from 'react';
import {Pokemon, SpriteDetails} from '../../../../types/Pokemon';
import {
  PokemonContainer,
  NoContainer,
  Title,
  Sprite,
  SpriteContainer,
  NameContainer,
  Details,
  Text,
  Info,
  TypesContainer,
} from './PokemonInfo.style';
import { PokemonType } from './PokemonType/PokemonType';

type PokemonInfoParams = {pokemon: Pokemon | null};

let spriteIndex = 0;
export const PokemonInfo = ({pokemon}: PokemonInfoParams) => {
  const [currentSprite, setCurrentSprite] = useState<SpriteDetails | null>(null);

  useEffect(() => {
    if (!pokemon) return setCurrentSprite(null);

    setCurrentSprite(pokemon.sprites[0]);
    spriteIndex = 1;
    const setImagesInterval = setInterval(() => {
      const sprite = pokemon.sprites[spriteIndex] ?? pokemon.sprites[(spriteIndex = 0)];
      sprite && setCurrentSprite(sprite);
      spriteIndex++;
    }, 2000);

    return () => clearInterval(setImagesInterval);
  }, [pokemon]);

  return (
    <PokemonContainer pokemonFound={!!pokemon}>
      <NoContainer>
        <Title no='true'>No.</Title>
        <Text size={'lg'} no='true'>
          {pokemon?.id}
        </Text>
      </NoContainer>
      <NameContainer>
        <Text size={'lg'}>{pokemon?.name}</Text>
      </NameContainer>
      <SpriteContainer>
        <Title align="center" size="sm">{currentSprite?.name}</Title>
        <Sprite src={currentSprite?.image} alt={currentSprite?.name}></Sprite>
      </SpriteContainer>
      <Details>
        <Title size='md'>Height</Title>
        <Text size='sm'>{pokemon?.height}</Text>
        <Title size='md'>Weight</Title>
        <Text size='sm'>{pokemon?.weight}</Text>
        <Title size='md'>Exp.</Title>
        <Text size='sm'>{pokemon?.base_experience}</Text>
        <Title size='md'>Order</Title>
        <Text size='sm'>{pokemon?.order}</Text>
      </Details>
      <Info>
        <Title>Characteristics</Title>
        <Text size='sm' type='block'>
          {pokemon?.characteristics.join(', ')}
        </Text>
      </Info>
      <TypesContainer>
        {pokemon?.types.map(type => <PokemonType key={type} type={type}/>)}
      </TypesContainer>
    </PokemonContainer>
  );
};
