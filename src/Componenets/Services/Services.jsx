import React, { useState } from 'react';
import './services.css'
import Cards from '../images/Card.json'

const Services = () => {
  return (
    <div className="servicesContainer">
      <h2>Our services</h2>
      <div className="tableContainer">
        {Cards.map((elem) => {
          return (
            <div className="card">
              <img src={elem.url} alt="Something went wrong" className='servicesImg' />
              <h5>{elem.title}</h5>
              <p className='disc'>{elem.description}</p>
              <a href={`https://www.google.com/search?q=${elem.title}`} target='blank'>
                <button className='btntag'>Click Here</button></a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services;