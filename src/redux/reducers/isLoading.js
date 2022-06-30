
import { types } from '../types';

export const isLoading = (state={isLoading: true}, action) => {
    switch(action.type){
        case types.IS_LOADED:
            
            return {...state, isLoading: false }
        case types.IS_LOADING:
            
            return {...state, isLoading: true}
        default:
            return state
    }
}
export const IS_LOADED_ACTION = ()=> ({type: types.IS_LOADED})
export const IS_LOADING_ACTION = ()=> ({type: types.IS_LOADING})