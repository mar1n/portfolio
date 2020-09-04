import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return <div className='menu'>
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