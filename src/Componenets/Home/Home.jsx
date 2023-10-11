import React from 'react'
import './home.css'
import homePage2 from '../images/aboutPage1.png';

const Home = () => {
    return (
        <div className='homeMainContainer'>
            <div className="leftContainer">
                <span className='leftSide'>I am <span className='neetu'>Neetu sah</span>  !</span>
                <p>Student of IGNOU !</p>
                <p>I want to explore myself in the world !</p>
                <button className='homeBtn'><a href="http://localhost:3000/About">Get Started</a></button>
            </div>
            <div className="rightContainer">
                <img src={homePage2} alt="something went wrong !" className='rightHomeimage' />
            </div>
        </div>
    )
}

export default Home;