import React from 'react';

import {ReactComponent as Email} from './at.svg';
import {ReactComponent as Github} from './github.svg';
import {ReactComponent as Linkedin} from './linkedin.svg';

const Footer = () => {
    return <div className='footer'>
        <div className='footer-item'>
                <a href={`https://www.linkedin.com/in/szymon-dawidowicz`}
                    className='footer-button'
                >
                    <Linkedin />
                </a>
        </div>
        <div className='footer-item'>
                <a href={`https://github.com/mar1n/`}
                    className='footer-button'
                > 
                    <Github />
                </a>
        </div>
        <div className='footer-item'>
                <a href={`mailto:szym0nd4widowicz@gmail.com`}
                    className='footer-button'
                >
                    <Email />
                </a>
        </div>
    </div>
}

export default Footer;