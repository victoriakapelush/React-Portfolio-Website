/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import image from './assets/images/my-photo.jpg'

function About() {
  return (
    <div className='flex-row about-index-page-container'>
      <div className='flex-column nav-items-container'>
        <div className='flex-column nav-links-upper'>
          <div className='nav-left-item'>
            <Link to="/" className='socials'>Home</Link>
          </div>
          <div className='border'></div>
        </div>
        <p className='copyright nav-left-item'>© / 2024</p>
      </div>
      <div className='flex-row about-main-info'>
        <div className='about-content flex-column'>
            <h1>About</h1>
            <h2>I'm Victoria. A developer, designer and problem solver.</h2>
            <p>The cusp of art and technology has always fascinated me and I've never been afraid to just jump in and give it a go, whether it's Paint, Photoshop, Sketch or CSS. I've been designing with computers since the day I first opened Microsoft Paint. Fast forward to 2023 and I've tried it all, from Digital Campaign Design and Flash Actionscript to Web Design, Animation, HTML/CSS, No-Code Web Development, Product Design and Product Management. Everything I have done, small or big, has been a vital stepping stone for where I am today. What excites me most about being a Product Designer is being able to design and create things that have purpose and solve real problems. It goes beyond designing buttons and websites and involves having a passion for designing experiences and solutions that help people, whether it's helping them make better videos, market themselves online, or buy something online. Leaning into customer insight and understanding their needs, finding the right problems to solve, delivering solutions as quickly as possible, learning from those and then iterating and improving that value over time is the key to great product design.</p>
            <p>This is one of my favourite quotes (by Peter Drucker):</p>
            <q>There is nothing so useless as doing efficiently that which should not be done at all.</q>
            <p>This resonates so deeply with me because I have no desire to make pretty things just for the sake of it. Some people love that! But it's not for me. I only want to make, design or build ideas and products that are real, that matter and have an impact in the world.</p>
            <h4>Experience</h4>
            <p>- Master's Degree in Computer Science</p>
            <p>- 3 years experience in Digital Design, Web and Software Development</p>
            <h4>Skills</h4>
            <p>UI/UX Design / Strategy / Product Management / User Research / Agile Methodologies / Collaboration / Design Sprints / Design Systems / HTML and CSS / CMS Design & Architecture / Webflow Development / Framer Development / Photography / Graphic Design</p>
          <a href='/' className='cv'>My CV</a>
        </div>
        <img src={image}/>
      </div>
    </div>
  )
}

export default About