import { PokemonTypesEnum } from '../../../../../types/Pokemon';
import {Type} from './PokemonType.style';

type PokemonTypeArguments = {type: PokemonTypesEnum};
export const PokemonType = ({type}: PokemonTypeArguments) => {
  return <Type type={type}>{type}</Type>;
};
