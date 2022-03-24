export interface SpriteDetails {
  name: string;
  image: string;
}

export interface PokemonDto {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  weight: number;
  characteristics: string[];
  types: string[];
  sprites: SpriteDetails[];
}