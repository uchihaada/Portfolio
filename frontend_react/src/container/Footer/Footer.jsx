import React from 'react'
import './Footer.scss'

import { useState } from 'react'
import { useEffect } from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import { images } from '../../constants'



const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loading, setloading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setloading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setloading(false);
        setisFormSubmitted(true);
      })
  }
  return (
    <>
      <h2 className='head-text'>Take a coffee &chat with me</h2>
      <div className='app__footer-cards'>

        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:abhijitadadas@gmail.com" className='p-text'>hello@Abhijit.com</a>


        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+91 8479821766" className='p-text'>+91 8479821766</a>


        </div>
      </div>

      {!isFormSubmitted ?

        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type="text" placeholder='Your Name' value={name} onChange={handleChangeInput} name="name" />
          </div>
          <div className='app__flex'>
            <input className='p-text' type="email" placeholder='Your Email' value={email} onChange={handleChangeInput} name="email" />
          </div>
          <div>
            <textarea className='p-text' placeholder='Your Message' value={message} name="message" onChange={handleChangeInput} />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit} >{loading ? 'sending' : 'Send Message'}</button>
        </div>

        : <div>
          <h3 className='head-text'>Thank you getting in touch </h3> 
        </div>}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg'
);
