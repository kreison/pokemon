import { types } from '../types';

export const rePage = (state = {page: 1}, action) => {
    switch(action.type){
        case types.RE_PAGE:
            return {...state, page: action.payload}
        default: 
            return state
    }
}
export const RE_PAGE_ACTION = (payload)=> ({type: types.RE_PAGE, payload: payload})