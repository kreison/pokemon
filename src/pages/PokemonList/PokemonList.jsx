import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Pagination } from '@mui/material';
import Pokemon from '../../components/Pokemon/Pokemon';
import './PokemonList.css'
import Sorting from '../../components/sort/Sorting';
import { sortPageThunk } from '../../redux/thunk/sortPageThunk'
import { RE_PAGE_ACTION } from '../../redux/reducers/pages';
import Filters from '../../components/Filters/Filters';

const PokemonList = () => {
    const dispath = useDispatch();
    const pokemons = useSelector(state => state.pokemons.pokemons);
    const isLoading = useSelector(state => state.isLoading.isLoading);
    const pageRedux = useSelector(state => state.page.page);
    const [pages, setPages] = useState(pageRedux)

    useEffect(() => {
        dispath(RE_PAGE_ACTION(pages))
    }, [pages]);


    useEffect(() => {
        setPages(pageRedux);
        switch (pageRedux) {
            case 1:
                dispath(sortPageThunk('power', 4, 0))
                // dispath(sortThunk('power', pokemons))
                break
            case 2:
                dispath(sortPageThunk('power', 4, 4))
                // dispath(sortThunk('power', pokemons ))
                break
            default:
                dispath(sortPageThunk('power', 4, pageRedux * 4))
                // dispath(sortThunk('power', pokemons))
        }
    }, [pageRedux])




    return (
        <div className="container main">
            <div className="options">
                <Filters />
            </div>

            <div className="pokemonList" >
                <Sorting></Sorting>
                <div className='pokemonRender'>
                    {
                        isLoading
                            ?
                            <CircularProgress />

                            :
                            pokemons.map((state, index) => <Pokemon url={ state.url } key={ index }></Pokemon>)

                    }

                </div>
                {
                    isLoading
                        ?
                        <CircularProgress />
                        :
                        <Pagination onChange={ (e, page) => setPages(page) } defaultPage={ pages } count={ pages + 10 } color="primary" />

                }

            </div >
        </div>


    );
};

export default PokemonList;