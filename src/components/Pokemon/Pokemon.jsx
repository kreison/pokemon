import React, { useEffect, useState } from 'react';
import './pokemon.css'
import { Link } from 'react-router-dom';

const Pokemon = ({ name, url }) => {

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


            <Link to={ `/pokemons/${response.id}` }>
                <div className='containerOfImage'>
                    <div className="borderOfImage">

                    </div>
                    <img className='imageOfPokemon' src={ img } alt="" />
                </div>
            </Link>
            <div className='nameOfPokemon'>{ response.name }</div>

            {/* {response.id} */ }
        </div>
    );
};

export default Pokemon;