import React from 'react';
import './Skills.css';
import getskills from '../skills-get.js'
const Skill = () => 
<>
    <div className='skills'>
        {
            getskills().map((skill, i) => (
                <div className='skill-item' key={skill.name}>
                    <h3>{skill.name}</h3>
                <img src={skill.image} alt={skill.name}   />
                </div>
            ))
        }
    </div>
</>

export default Skill;