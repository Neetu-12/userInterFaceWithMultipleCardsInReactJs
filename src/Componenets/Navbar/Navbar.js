import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navMainContainer'>
            <div className="NavContainer">
                <span className='neetuSah'>Neetu Sah</span>
                <ul className='ulNav'>
                    <li className='liNav'><a href="./Home">Home</a></li>
                    <li className='liNav'><a href="./About">About</a></li>
                    <li className='liNav'><a href="./Services">Services</a></li>
                    <li className='liNav'><a href="./Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;