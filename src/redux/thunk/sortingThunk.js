import { sortingToGenerationFunc } from "../../utilities/SortingFunc";
import { IS_LOADED_ACTION, IS_LOADING_ACTION } from "../reducers/isLoading";
import { RENDER_POKEMONS_ACTION } from "../reducers/renderPokemon";

export const sortingThunk = (type = 'power', pokemons) => {
    return async (dispath) => {
        dispath(IS_LOADING_ACTION())
        sortingToGenerationFunc(pokemons, type)
            .then(sorted => {
                dispath(RENDER_POKEMONS_ACTION(sorted));
                dispath(IS_LOADED_ACTION());
            });
    }
}