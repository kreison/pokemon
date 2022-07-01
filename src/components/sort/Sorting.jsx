import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortingThunk } from '../../redux/thunk/sortingThunk';
import './Sorting.css'

const Sorting = () => {
    const dispatch = useDispatch();
    const p = useSelector(state => state.pokemons.pokemons);
    const returnPower =  ()=>{
        dispatch(sortingThunk('power', p))
    }
    const sortWeight =()=>{
        dispatch(sortingThunk('weight', p))
    }
    const sortHp = ()=>{
        dispatch(sortingThunk('hp', p))
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