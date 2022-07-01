import { sortingToGenerationFunc } from "../../utilities/SortingFunc";
import { IS_LOADED_ACTION, IS_LOADING_ACTION } from "../reducers/isLoading";
import { RENDER_POKEMONS_ACTION } from "../reducers/renderPokemon";

export const sortPageThunk = (type = 'power', limit = 4, offset = 0) => {
    return async (dispath) => {
        dispath(IS_LOADING_ACTION())

        const pokemonsJson = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const pokemonss = await pokemonsJson.json();
        const pokemons = pokemonss.results
        sortingToGenerationFunc(pokemons, type)
            .then(sorted => {
                dispath(RENDER_POKEMONS_ACTION(sorted));
                dispath(IS_LOADED_ACTION());
            });
        
        
    }
}