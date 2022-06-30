import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.css'

const Header = () => {
    return (
        <div className={ classes.header }>
            <ul className={classes.headerList}>
                <li>
                    <Link className={classes.link} to={ '/pokemons' }>Все покемоны</Link>
                </li>
                <li>
                    <Link className={classes.link} to={ '/' }>Помощь</Link>
                </li>
                <li>
                    <Link className={classes.link} to={ '/' }>Контакты</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;