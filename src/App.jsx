/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className='flex-row index-page-container'>
      <div className='flex-column nav-items-container'>
        <div className='flex-column nav-links-upper'>
          <div className='nav-left-item'>
            <Link to="/" className='socials'>LI</Link>
          </div>
          <div className='nav-left-item'>
            <Link to="/" className='socials'>X</Link>
          </div>
          <div className='nav-left-item'>
            <Link to="/" className='socials'>GH</Link>
          </div>        
          <div className='border'></div>
        </div>
        <p className='copyright nav-left-item'>© / 2024</p>
      </div>
      <div className='flex-row main-info'>
        <div className='flex-column name-box'>
          <h1 className='name'>Victoria Kapelush</h1>
          <p className='occupation'>Software Developer / Website Designer </p>
          <p className='occupation'>Currently working freelance as a web developer</p>
        </div>
        <div>
          <Link to="/" className='links'>Work</Link>
          <Link to="/" className='links'>About</Link>
          <Link to="/" className='links'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default App
