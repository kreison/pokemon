import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonList from './PokemonList/PokemonList';
import AboutPokemon from './aboutPokemons/AboutPokemon'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import PageNotFound from './PageNotFound';

const MainAppPages = () => {

    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route index element={ <PokemonList></PokemonList> }></Route>
                <Route path='pokemons' element={ <PokemonList></PokemonList> }></Route>
                <Route path='pokemons/:id' element={ <AboutPokemon></AboutPokemon> }></Route>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>

    );
};

export default MainAppPages;