import React from 'react';
import './Menu.css';
import NeonText from '../neonText/NeonText'
import { Link } from 'react-router-dom';

const Menu = () => {
    return <div className='menu'>
        <div className='item'>
            <div className='neon-text'>
                <p class='neon-name'><NeonText/></p>
            </div>
        </div>
        <div className='item'>
            <div className='menu-container'>
                <div className='menu-item'>
                    <Link to={`/`} >
                    <div className='home'>

                    </div>
                    </Link>
                </div>
                <div className='menu-item'>
                    <Link to={`/aboutme`} className='test'>
                    <div className='about'>
                    
                    </div>
                    </Link>
                </div>
                <div className='menu-item'>
                    <div className='skills'>

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Menu;