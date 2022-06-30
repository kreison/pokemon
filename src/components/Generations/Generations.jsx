import React, {useEffect, useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { sortToGenerationThunk } from '../../redux/thunk/sortToGenerationThunk';

//предупреждение. из-за сортировки по поколениям не пагинация

const Generations = () => {
    const dispatch = useDispatch()
    const [currentGeneration, setCurrentGeneration] = useState('')   
    useEffect(()=>{
        dispatch(sortToGenerationThunk(currentGeneration));
    }, [currentGeneration])

    return (
        <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Поколение</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                
                onChange={ (e, value) => setCurrentGeneration(value) }
            >
                {
                    ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii'].map((item, index) => <FormControlLabel key={index} value={ item } control={ <Radio /> } label={`${index+1} Поколение` }/>)
                }
                
            </RadioGroup>
        </FormControl>
    );
};

export default Generations;