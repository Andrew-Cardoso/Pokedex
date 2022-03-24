import {BaseSyntheticEvent, useState} from 'react';
import pokeball from '/src/images/pokeball.svg';
import {Section, Input, Button, Image} from './SearchBar.style';
import {Autocomplete} from './Autocomplete/Autocomplete';

type SearchBarArguments = {onSearchPokemon: (pokemonNameOrNumber: string) => Promise<void>};

export const SearchBar = ({onSearchPokemon}: SearchBarArguments) => {
	const [pokemonNameOrNumber, setPokemonNameOrNumber] = useState<string>('');
	const [showAutocomplete, setShowAutocomplete] = useState<boolean>(false);

	const onNameOrNumberChange = ({target: {value}}: BaseSyntheticEvent) =>
		setPokemonNameOrNumber(value);

	const setNameAndSearch = (name: string) => {
		setPokemonNameOrNumber(name);
		onSearchPokemon(name).finally(() => setShowAutocomplete(false));
	};

	const checkEnterKey = ({code}: any) =>
		['NumpadEnter', 'Enter'].includes(code) && onSearchPokemon(pokemonNameOrNumber);

	return (
		<Section>
			<Input
				autoComplete='off'
				type='text'
				name='pokemonSearch'
				id='pokemonSearch'
				placeholder='Search by number or name'
				value={pokemonNameOrNumber}
				onChange={onNameOrNumberChange}
				onKeyDown={checkEnterKey}
				onBlur={() => setShowAutocomplete(false)}
				onFocus={() => setShowAutocomplete(true)}
			/>
			<Button onClick={() => onSearchPokemon(pokemonNameOrNumber)}>
				<Image src={pokeball} alt='Pokeball' />
			</Button>
			<Autocomplete
				search={pokemonNameOrNumber}
				show={showAutocomplete}
				onAction={setNameAndSearch}
			></Autocomplete>
		</Section>
	);
};
