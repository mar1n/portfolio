import React from 'react';
import './Menu.css';
import NeonText from '../neonText/NeonText'

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
                    <div className='home'>

                    </div>
                </div>
                <div className='menu-item'>
                    <div className='about'>

                    </div>
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