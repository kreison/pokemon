import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AboutPokemon.css';
import PreviewOfPokemon from './PreviewOfPokemon';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoThunk } from '../../redux/thunk/getInfoThunk';


const AboutPokemon = () => {
    const dispatch = useDispatch()
    const params = useParams();
    const [url] = useState('https://pokeapi.co/api/v2/pokemon/' + params.id)

    const infoRedux = useSelector(state => state.info)

    useEffect(() => {
        dispatch(getInfoThunk(url));
        
    }, [])
    


    return (
        <div className="container aboutPokemon">
            <div style={ { textAlign: 'left' } } className='decriptionOfPokemon'>
                <p className='info'>
                    <span className='bold'>{ infoRedux.info.name }</span> (яп. フシギダネ Фусигиданэ, англ. { infoRedux.info.name }) — покемон двойного травяного ядовитого типа, представленный в первом поколении.
                    Эволюционирует в <span className='red'>Ивизавра</span> на 16 уровне, который затем эволюционирует в <span className='red'>Венузавра</span> на 32 уровне.
                    Наряду с <span className="red">Чармандером</span> и <span className="red">Сквиртлом</span>, это один из стартовых покемонов региона Канто.
                </p>
                {
                    infoRedux.abilities.slice(0,4).length > 0
                        ?
                        infoRedux.abilities.slice(0,4).map((a, i) => <div key={ i }>{ a }</div>)
                        :
                        <CircularProgress />
                }
                <div className="content">
                    <h3 className="contentH3">
                        Содержание
                    </h3>
                    <ul className="contentList">
                        <li>Внешность</li>
                        <li>Характер</li>
                        <li>Способности</li>
                        <li>Обитание</li>
                        <li>В аниме</li>
                        <li>Эволюция</li>
                    </ul>
                </div>

                <Card sx={ { minWidth: 275 } }>
                    <CardContent>

                        <Typography variant="h3" component="div">
                            LANGUAGES
                        </Typography>

                        <Typography className='langs' variant="body2">
                            {
                                infoRedux.names.length > 0
                                    ?
                                    infoRedux.names.map((a, i) => <li key={ i }>{ a.name }</li>)
                                    :
                                    <CircularProgress />
                            }
                        </Typography>
                    </CardContent>

                </Card>

                <div className="appearence stats">
                    <h2 className='AboutPokemonH2'>Внешность</h2>
                    <p>Вес - { infoRedux.info.weight } кг</p>
                    <p>Рост - { infoRedux.info.height }</p>

                </div>
                <div className="character stats">
                    <h2 className='AboutPokemonH2'>Характер</h2>
                    <p>
                        У Бульбазавра покладистый характер, благодаря чему он является хорошим выбором для начинающих тренеров. Это самый спокойный и миролюбивый из стартовых покемонов Канто. Бульбазавр хорошо ладит с другими покемонами и в случае необходимости может взять на себя роль лидера. Бульбазавр в аниме продемонстрировал заботливый инстинкт по отношению к маленьким, более слабым покемонам, один даже использовал свои виноградные лозы, чтобы поднять плачущего покемона, мягко раскачивая его взад и вперед по воздуху, напевая колыбельную.

                        Бульбазавр может быть очень преданным, как показано в серии «Таинственное чудовище», где Бульбазавр много лет ждал тренера, бросившего его. У диких Бульбазавров сложное сообщество со своими традициями и ритуалами, и они стоят горой за любого Бульбазавра, даже чужака. Это показано в серии «Таинственный сад Бульбазавров».
                    </p>
                </div>
                <div className="abilities stats">
                    <h2 className='AboutPokemonH2'>Способности</h2>
                    <p>Исследователи не уверены, следует ли классифицировать Бульбазавра и его развитые формы как растения или животные, поскольку они содержат в себе признаки и тех, и других. На спине Бульбазавра растёт крупная зелёная луковица: когда Бульбазавр появляется на свет, у него на спине есть зерно, которое позже в неё вырастает. Она обеспечивает его энергией в процессе фотосинтеза, а также содержит питательные вещества. Луковица также скрывает две тонкие, похожие на щупальца виноградные лозы. Она впитывает солнечные лучи и постепенно увеличивается в размерах. Поэтому, часто можно увидеть Бульбазавра дремлющим при ярком солнечном свете.

                        Бульбазавр, как и все стартовые покемоны Травяного типа обладают способностью Зарастание, что позволяет ему использовать атаки Травяного типа с дополнительным уроном в 50%, если его здоровье ниже 33%. Скрытая способность Бульбазавра Хлорофилл удваивает его скорость в бою при ярком солнечном свете.</p>
                </div>

                

            </div>
            <PreviewOfPokemon url={ url }></PreviewOfPokemon>
        </div>

    );
};

export default AboutPokemon;


