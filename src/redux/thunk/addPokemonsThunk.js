import { IS_LOADED_ACTION, IS_LOADING_ACTION } from "../reducers/isLoading";
import { RENDER_POKEMONS_ACTION } from "../reducers/renderPokemon";

export const addPokemonsThunk = (limit=4, offset=0)=>{
    return async (dispath) =>{
        dispath(IS_LOADING_ACTION());
        const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const pokemonsJson = await pokemons.json();
        
        dispath(RENDER_POKEMONS_ACTION(pokemonsJson.results));
        dispath(IS_LOADED_ACTION());
    }
}