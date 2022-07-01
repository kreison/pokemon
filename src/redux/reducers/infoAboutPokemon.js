import { types } from '../types';

export const infoAboutPokemon = (state={info: {stats: {}}, names: [], abilities: []}, action)=>{
    switch (action.type){
        case types.GET_INFO_ABOUT_POKEMON:
            return {...state, info: action.payload}
        case types.GET_NAMES:
            return {...state, names: action.payload}
        case types.GET_ABILITIES:
            return {...state, abilities: [...state.abilities, action.payload]}
        default: 
            return state
    }
}

export const INFO_ABOUT_POKEMON_ACTION = (payload)=> ({type: types.GET_INFO_ABOUT_POKEMON, payload});
export const GET_NAMES_ACTION = (payload)=> ({type: types.GET_NAMES, payload});
export const GET_ABILITIES_ACTION = (payload)=> ({type: types.GET_ABILITIES, payload});
