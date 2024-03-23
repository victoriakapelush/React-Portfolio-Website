/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';

function Work() {
  return (
    <div className='flex-row contact-index-page-container'>
      <div className='flex-column nav-items-container'>
        <div className='flex-column nav-links-upper'>
          <div className='nav-left-item'>
            <Link to="/" className='socials contact-page-font-color'>Home</Link>
          </div>
          <div className='border border-color'></div>
        </div>
        <p className='copyright nav-left-item contact-page-font-color'>© / 2024</p>
      </div>
      <div className='flex-column contact-main-info'>
        <h1>Hello.</h1>
        <p className='paragraph'>Need a beautiful, well-structured website that you can <br/>own and maintain yourself? Get in touch.</p>
        <p>Email: <span className='email'>victoriakapelush@gmail.com</span></p>
        <p>On the Internet: <a href="https://www.linkedin.com/in/victoriakapelush/" target='_blank' className='email'>LinkedIn</a> / <a className='email' href="https://twitter.com/vicky_kape" target='_blank'>Twitter</a> / <a className='email' href="https://github.com/victoriakapelush" target='_blank'>Github</a></p>
      </div>
    </div>
  )
}

export default Work