import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const PreviewOfPokemon = ({url}) => {
    const [img, setImg] = useState('#');
    const [response, setReponse] = useState('')
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setImg(json.sprites.other.dream_world.front_default);
                setReponse(json)
            })
    }, [])
    return (
        <div className='pokemon'>
            {/* <Link className='goback' to={'/pokemons'}>Go Back</Link> */}
            <div className='containerOfImage'>
                
                <img className='imageOfPokemon' src={ img } alt={<CircularProgress />} />
            </div>
            <h1 className='nameOfPokemon'>{ response.name }</h1>
        </div>
    );
};

export default PreviewOfPokemon;