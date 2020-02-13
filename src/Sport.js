import React from 'react';
import { Link } from 'react-router-dom';
import './sport.css';
export default function Sport(props) {
    return (

        <Link to={`/${props.id}`} className='item-content'>
            <h2>{props.name}</h2>
            <div className='place'>
                <div className="box">
                    {/* <span></span>
                    <span></span>
                    <span></span>
                    <span></span> */}
                    <img src={props.picture} alt={`${props.name} + logo`} />
                </div>
            </div>
            {/* <div className='overlay'>
                <h1>{props.name}</h1>
            </div> */}
        </Link>
    );
}