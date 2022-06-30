import { GET_NAMES_ACTION, INFO_ABOUT_POKEMON_ACTION, GET_ABILITIES_ACTION } from "../reducers/infoAboutPokemon";

export const getInfoThunk = (url) => {
    return async (dispath) => {
        const pokemon = await fetch(url);
        const pokemonJson = await pokemon.json();
        dispath(INFO_ABOUT_POKEMON_ACTION(pokemonJson));
        const namesFetch = await fetch(pokemonJson.abilities[0].ability.url);
        const namesFetchJson = await namesFetch.json();
        dispath(GET_NAMES_ACTION(namesFetchJson.names));
        pokemonJson.abilities.map(async (a) => {
            const abilityMap = await fetch(a.ability.url);
            const abilityMapJson = await abilityMap.json();
            abilityMapJson.effect_entries.map(effect => {
                dispath(GET_ABILITIES_ACTION(effect.effect));
            });
        });
    };
};