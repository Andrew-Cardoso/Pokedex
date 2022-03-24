import pokeball from '/src/images/pokeball-classic.png';
import { Spinner } from "./PokeballSpinner.style";


export type Loading = {isLoading: boolean};
type SpinnerParams = Loading & {pokemonFound: boolean};
export const PokeballSpinner = ({isLoading, pokemonFound}: SpinnerParams) => {
    return (
        <Spinner src={pokeball} alt='spinner' isLoading={isLoading} pokemonFound={pokemonFound} />
    )
}