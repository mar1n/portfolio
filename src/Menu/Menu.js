import React from 'react';
import './Menu.css';

const Menu = () => {
    return <div className='menu'>
                <div className='item'>
                    <h1>Szymon Dawidwocicz</h1>
                </div>
                <div className='item'>
                    <a href='/'>Home</a>
                    <a href='/about-me'>About Me</a>
                    <a href='/skills'>Skills</a>
                    <a href='/portfoli'>My projects</a>
                </div>
            </div>
}

export default Menu;