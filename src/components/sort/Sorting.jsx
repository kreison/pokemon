import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemonsThunk } from '../../redux/thunk/addPokemonsThunk';
import { sortingThunk } from '../../redux/thunk/sortingThunk';
import './Sorting.css'

const Sorting = () => {
    const dispatch = useDispatch();
    const pageRedux = useSelector(state => state.page.page);
    const p = useSelector(state => state.pokemons.pokemons);
    const returnPower =  ()=>{
        switch (pageRedux) {
            case 1:
                // dispatch(sortThunk('power', 4, 0))
                
                dispatch(sortingThunk('power', p ))
                break
            case 2:
                // dispatch(sortThunk('power', 4, 4))
                dispatch(sortingThunk('power', p))
                break
            default:
                // dispatch(sortThunk('power', 4, pageRedux * 4))
                dispatch(sortingThunk('power', p))
        }
    }
    
    const sortWeight =()=>{
        switch (pageRedux) {
            case 1:
                // dispatch(sortThunk('weight', 4, 0))
                dispatch(sortingThunk('weight', p))
                break
            case 2:
                // dispatch(sortThunk('weight', 4, 4))
                dispatch(sortingThunk('weight', p))
                break
            default:
                // dispatch(sortThunk('weight', 4, pageRedux * 4))
                dispatch(sortingThunk('weight',p ))
        }
    }
    const sortHp = ()=>{
        switch (pageRedux) {
            case 1:
                // dispatch(sortThunk('hp', 4, 0))
                dispatch(sortingThunk('hp', p))
                break
            case 2:
                // dispatch(sortThunk('hp', 4, 4))
                dispatch(sortingThunk('hp', p))
                break
            default:
                // dispatch(sortThunk('hp', 4, pageRedux * 4))
                dispatch(sortingThunk('hp', p))
        }
    }
    return (
        <div className='sortingContainer'>
            <h3 className='sortingH3'>Сортировать по</h3>
            <ul className='sortingList'>
                <li onClick={returnPower}>Силе</li>
                <li onClick={sortWeight}>Весу</li>
                <li onClick={sortHp}>По HP</li>
            </ul>
        </div>
    );
};

export default Sorting;