import React from 'react';
import { Link } from 'react-router-dom';
import './sport.css';
export default function Sport(props) {
    return (

        <Link to={`/${props.id}`} className='item-content'>
            <h2>{props.name}</h2>

                <div className="box">
                    <img src={props.picture} alt={`${props.name} + logo`} />
                </div>
            
        </Link>
    );
}