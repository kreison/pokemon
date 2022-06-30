import { IS_LOADED_ACTION, IS_LOADING_ACTION } from '../reducers/isLoading';
import { RENDER_POKEMONS_ACTION } from "../reducers/renderPokemon";
import {RE_PAGE_ACTION} from '../reducers/pages'


export const sortToGenerationThunk = (cg, limit = 100, offset = 1) => {
    return async dispatch => {
        dispatch(IS_LOADING_ACTION());
        let localOffset = offset;
        let filtered = [];
        const re = async () => {
            const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${localOffset}`);
            const pokemonsJson = await pokemons.json()
            for (let i = 0; i < pokemonsJson.results.length; i++) {
                const moreInfo = await fetch(pokemonsJson.results[i].url);
                const moreInfoJson = await moreInfo.json()
                // console.log(moreInfoJson)
                const abilities = await fetch(moreInfoJson.abilities[0].ability.url);
                const abilitesJson = await abilities.json();
                if (abilitesJson.generation.name === `generation-${cg}`) {
                    // RENDER_POKEMONS_ACTION(pokemonsJson.results[i]);
                    // console.log(pokemonsJson.results[i])
                    filtered.push(pokemonsJson.results[i])
                }
            }
            console.log(filtered)
            if (filtered.length > 4) {
                dispatch(RENDER_POKEMONS_ACTION(filtered));
                dispatch(IS_LOADED_ACTION());
            }
            else {
                localOffset += 100;
                re();
            }
        }
        if (cg !== ''){
            re();
        }
    }
}