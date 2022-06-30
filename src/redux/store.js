import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { renderPokemon } from './reducers/renderPokemon';
import { isLoading } from './reducers/isLoading';
import { rePage } from "./reducers/pages";
import { infoAboutPokemon } from './reducers/infoAboutPokemon';

const rootReducer = combineReducers({
    pokemons: renderPokemon,
    isLoading: isLoading,
    page: rePage,
    info: infoAboutPokemon
})
export const store = createStore(rootReducer, applyMiddleware(thunk))