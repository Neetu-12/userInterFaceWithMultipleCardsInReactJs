import React from 'react';
import './about.css'
import aboutPage1 from '../images/forabout.png';

const About = () => {
  return (
    <div className='aboutMainContainer'>
      <div className="aboutleftContainer">
        <span className='aboutleftSide'>Welcome to about page !</span>
        <p className='neetu'>Neetu Sah</p>
        <p>I am developer making websites !</p>
        <button className='aboutBtn'><a href="http://localhost:3000/Contact">Contact Here</a></button>
      </div>
      <div className="aboutrightContainer">
        <img src={aboutPage1} alt="something went wrong !" className='aboutrightimage' />
      </div>
    </div>
  )
}

export default About;