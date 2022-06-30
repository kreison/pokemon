import { IS_LOADED_ACTION, IS_LOADING_ACTION } from "../reducers/isLoading";
import { RENDER_POKEMONS_ACTION } from "../reducers/renderPokemon";

export const sortPageThunk = (type = 'power', limit = 4, offset = 0) => {
    return async (dispath) => {
        dispath(IS_LOADING_ACTION())
        const pokemonsJson = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const pokemonss = await pokemonsJson.json();
        const pokemons = pokemonss.results
        const isSorting = [];
        // pokemons.map(async item => {
        for (let i = 0; i < pokemons.length; i++) {
            const power = await fetch(pokemons[i].url);
            const powerJson = await power.json()
            // console.log();
            switch (type) {
                case 'power':
                    isSorting.push({ power: powerJson.stats[1].base_stat, ...pokemons[i] })
                    break;
                case 'weight':
                    isSorting.push({ power: powerJson.weight, ...pokemons[i] })
                    break;
                case 'hp':
                    isSorting.push({ power: powerJson.stats[0].base_stat, ...pokemons[i] })
                    break;
                default:
                    isSorting.push({ power: powerJson.stats[1].base_stat, ...pokemons[i] })
                    
            }
            

        }
        const sorted = isSorting.sort((a, b) => b.power > a.power ? 1 : -1);

        for (let i = 0; i < sorted.length; i++) {
            delete sorted[i].power
        }
        dispath(RENDER_POKEMONS_ACTION(sorted));
        
        


        dispath(IS_LOADED_ACTION());
    }
}