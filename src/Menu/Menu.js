import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Activity from '../Content/Portfolio';
import Aboutme from '../Aboutme/AboutMe';
import Skills from '../Skills/Skills';

const routes = [
    { path: '/', name: 'Home', Component: Activity},
    { path: '/aboutme', name: 'About', Component: Aboutme},
    { path: '/skills', name: 'Home', Component: Skills},
]

const Menu = () => {
    const [open, setOpen] = useState(false);
    const openMenu = () => setOpen(!open);
    return <div className='menu'>
            <Icon open={open} openMenu={openMenu} />
            <div onClick={openMenu} className={`menu-container ${open ? "open-container" : ""}`}>
                    <Link to={`/`} >
                            Home
                    </Link>
                    <Link to={`/aboutme`}>
                            About Me
                    </Link>
                    <Link to={`/skills`} >
                            Skills
                    </Link>
            </div>
    </div>
}

const Icon = ({ openMenu, open }) => {
    return (
      <div
        className={`menu-icon ${open ? "menu-icon-open" : ""}`}
        onClick={openMenu}
      ></div>
    );
  };

export default Menu;