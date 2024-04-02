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
        <p className='copyright nav-left-item contact-page-font-color'>©/2024</p>
      </div>
      <div className='flex-row contact-main-info work-container'>
        <div className='flex-column work-paragraph'>
          <h4>Work</h4>
          <p>This is a showcase of my top projects. <br />Over the past few years, I've seen the digital design <br /> and development scene change constantly, <br /> shaping my role along the way. </p>
          <br />
          <p>With my current experience as a full-stack developer, <br />I'm still learning and gaining new skills every day.</p>
        </div>
        <div className='flex-column work-links'>
          <a class="link-work-name" href="https://narrative-blog.onrender.com" target='_blank'>Narrative</a>
          <a className="gh-link" href="https://github.com/victoriakapelush/Narrative" target='_blank'>Full-Stack MERN API blog</a>
          <a class="link-work-name" href="https://chatsphere-3sxt.onrender.com" target='_blank'>Chatsphere</a>
          <a className="gh-link" href="https://github.com/victoriakapelush/ChatSphere" target='_blank'>Full-Stack MERN Messaging App</a>
          <a class="link-work-name" href="https://beauty-alchemy.netlify.app" target='_blank'>Beauty Alchemy</a>
          <a className="gh-link" href="https://github.com/victoriakapelush/Beauty-Alchemy" target='_blank'>React Online Store</a>
          <a class="link-work-name" href="https://narrative-blog.onrender.com" target='_blank'>Social Butterfly</a>
          <a className="gh-link" href="https://github.com/victoriakapelush/Social-Butterfly" target='_blank'>Full-Stack MERN Social Media App</a>
          <a class="link-work-name" href="https://mksocials.com" target='_blank'>Portfolio Website</a>
          <a className="gh-link" href="https://github.com/victoriakapelush/Portfolio-Website" target='_blank'>CSS/JavaScript Portfolio Website</a>
        </div>
      </div>
    </div>
  )
}

export default Work