import { Pokemon } from "../../../types/Pokemon";
import { Loading, PokeballSpinner } from "./PokeballSpinner/PokeballSpinner";
import { PokedexContainer } from "./Pokedex.style";
import { PokedexSide } from "./PokedexSide/PokedexSide";
import { PokemonInfo } from "./PokemonInfo/PokemonInfo";

type PokedexParams = {pokemon: Pokemon | null, loading: Loading}

export const Pokedex = ({pokemon, loading}: PokedexParams) => {
    return (
        <PokedexContainer>
            <PokedexSide side="upper" open={!!pokemon} />
                <PokeballSpinner isLoading={loading.isLoading} pokemonFound={!!pokemon} />
                <PokemonInfo pokemon={pokemon} />
            <PokedexSide side="lower" open={!!pokemon} />
        </PokedexContainer>
    )
}