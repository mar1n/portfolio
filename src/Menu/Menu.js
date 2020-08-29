import React from 'react';
import './Menu.scss';
import LedScreen from '../LedScreen/LedScreen'
import { Link } from 'react-router-dom';

const Menu = () => {
    return <div className='menu'>
        <div className='item'>
            <div className='screen'>
                <div className='led-screen'><LedScreen /></div>
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
                <div className='menu-item middle'>
                    <Link to={`/aboutme`}>
                        <div className='about'>
                            About Me
                        </div>
                    </Link>
                </div>
                <div className='menu-item'>
                    <Link to={`/skills`} >
                        <div className='skill'>
                            Skills
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}

export default Menu;