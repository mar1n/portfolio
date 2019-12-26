import React from 'react';
import './Menu.css';
import NeonText from '../neonText/NeonText'
import { Link } from 'react-router-dom';

const Menu = () => {
    return <div className='menu'>
        <div className='item'>
            <div className='neon-text'>
                <div className='neon-name'><NeonText /></div>
            </div>
        </div>
        <div className='item'>
            <div className='menu-container'>
                <div className='menu-item'>
                    <Link to={`/`} >
                        <div className='home'>
                            Home
                        </div>
                    </Link>
                </div>
                <div className='menu-item'>
                    <Link to={`/aboutme`} className='test'>
                        <div className='about'>
                            About Me
                        </div>
                    </Link>
                </div>
                <div className='menu-item'>
                    <Link to={`/skills`} >
                        <div className='skills'>
                            Skills
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}

export default Menu;