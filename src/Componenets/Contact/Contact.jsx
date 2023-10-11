import React from 'react';
import './contact.css'

const Contact = () => {
  let submit = ()=>{
    alert ("Submited Successfully !")
  }
  return (
    <div className='mainContact'>
      <div className="contactContainer">
        <h2 className='contactMe'>Contact Me</h2>
        Full Name<input type="text" placeholder='name' className='contactInput' required /><br />
        Phone<input type="text" placeholder='mobile number' className='contactInput' /><br />
        Email<input type="email" placeholder='name@example.com' className='contactInput' required/><br />
        Message <textarea cols="10" rows="5" className='contactTextarea' ></textarea><br />
        <button className='contactBtn' onClick={submit}>Submit form</button>
      </div>
    </div>
  )
}

export default Contact;