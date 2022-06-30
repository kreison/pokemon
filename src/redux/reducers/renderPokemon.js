import { types } from '../types';

export const renderPokemon = (state={pokemons: []}, action)=>{
    switch (action.type){
        case types.ADD_POKEMONS:
            // console.log(action.payload);
            return {...state, pokemons: action.payload}
        
        default: 
            return state
    }
}

export const RENDER_POKEMONS_ACTION = (payload)=> ({type: types.ADD_POKEMONS, payload});
