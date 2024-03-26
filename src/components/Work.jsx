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
          <a href="https://narrative-blog.onrender.com">Narrative</a>
          <div>Full-Stack MERN API blog</div>
          <a href="https://narrative-blog.onrender.com">ChatSphere</a>
          <div>Full-Stack MERN API blog</div>
          <a href="https://narrative-blog.onrender.com">Beauty Alchemy</a>
          <div>Full-Stack MERN API blog</div>
          <a href="https://narrative-blog.onrender.com">Insta Clone</a>
          <div>Full-Stack MERN API blog</div>
          <a href="https://narrative-blog.onrender.com">Narrative</a>
          <div>Full-Stack MERN API blog</div>
        </div>
      </div>
    </div>
  )
}

export default Work