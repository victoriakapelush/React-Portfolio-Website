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
          <a href="https://narrative-blog.onrender.com" target='_blank'>Narrative</a>
          <div>Full-Stack MERN API blog</div>
          <a href="https://chatsphere-3sxt.onrender.com" target='_blank'>Chatsphere</a>
          <div>Full-Stack MERN Messaging App</div>
          <a href="https://beauty-alchemy.netlify.app" target='_blank'>Beauty Alchemy</a>
          <div>React Online Store</div>
          <a href="https://narrative-blog.onrender.com" target='_blank'>Insta Clone</a>
          <div>Full-Stack MERN Social Media App</div>
          <a href="https://photo-tagging-app-1.onrender.com" target='_blank'>Where's Waldo?</a>
          <div>Full-Stack MERN Photo-tagging App</div>
        </div>
      </div>
    </div>
  )
}

export default Work