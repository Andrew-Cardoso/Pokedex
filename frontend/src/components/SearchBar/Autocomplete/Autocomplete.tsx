import {useEffect, useState} from 'react';
import {AutocompleteContainer, AutocompleteItem} from './Autocomplete.style';

type AutocompleteArguments = {search: string, show: boolean, onAction: (name: string) => void};

const fetchPokemonNames = (): Promise<string[]> =>
	fetch(`http://localhost:3434/pokemon/names-list`, {method: 'get'}).then((response) =>
		response.json(),
	);

export const Autocomplete = ({search, show, onAction}: AutocompleteArguments) => {
	const [pokemonNames, setPokemonNames] = useState<string[]>([]);
	const [filteredNames, setFilteredNames] = useState<string[]>([]);
	useEffect(() => {
		fetchPokemonNames().then(setPokemonNames);
	}, []);

	useEffect(() => {
		const names = pokemonNames.filter((name) => name.includes(search.toLowerCase()));
		setFilteredNames(names);
	}, [search, show, pokemonNames]);	

	return (
		<AutocompleteContainer show={show}>
			{filteredNames.map((name) => (
				<AutocompleteItem key={name} onClick={() => onAction(name)}>{name}</AutocompleteItem>
			))}
		</AutocompleteContainer>
	);
};
