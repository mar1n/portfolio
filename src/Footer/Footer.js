import React from 'react';
import './Footer.css';

const Footer = () => {
    return <div className='footer'>
        <div className='item'>
            <div className='linkedin'>
                <a href={`https://www.linkedin.com/in/szymon-dawidowicz`}> </a>
            </div>
        </div>
        <div className='item'>
            <div className='github'>
                <a href={`https://github.com/mar1n/`}> </a>
            </div>
        </div>
        <div className='item'>
            <div className='email'>
                <a href={`mailto:szym0nd4widowicz@gmail.com`}> </a>
            </div>
        </div>
    </div>
}

export default Footer;