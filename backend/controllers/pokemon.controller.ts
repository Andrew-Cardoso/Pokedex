import { Request, Response } from "express";
import { getCachedPokemon, getPokemonNames } from "../services/pokemon.service";


export const getPokemon = async ( { params: { key } }: Request, response: Response ) => {
    let pokemon = null;

    try {
        pokemon = await getCachedPokemon(key.toLowerCase());        
    } catch (error) {
        console.log(error);
    }
    return pokemon ? response.json(pokemon) : response.sendStatus(404);
}

export const listPokemon = async (_: Request, response: Response) => {
    const pokemonNames = await getPokemonNames();
    return response.json(pokemonNames);
}