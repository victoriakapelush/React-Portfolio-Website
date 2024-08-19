/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Victoria Kapelush / About";
  });

  return (
    <div className="flex-row about-index-page-container">
      <div className="flex-column nav-items-container">
        <div className="flex-column nav-links-upper">
          <div className="nav-left-item">
            <Link to="/" className="socials">
              Home
            </Link>
          </div>
          <div className="border"></div>
        </div>
        <p className="copyright nav-left-item">©/2024</p>
      </div>
      <div className="flex-row about-main-info">
        <div className="about-content flex-column">
          <h1>About</h1>
          <h2>I'm Victoria. A developer, designer and problem solver.</h2>
          <p>
            One of the primary drivers of my choice on why I became a software
            developer was the ability to create. As a developer, I found an
            expressive outlet where my ideas could transcend the realm of
            imagination and materialize into tangible, functional solutions. The
            power to bring concepts to life through code fascinated me. It's the
            artistry of problem-solving, algorithms, and well-structured code
            that continually inspire my journey.
          </p>
          <p>This is one of my favourite quotes (by Chris Pine):</p>
          <q>
            Programming isn't about what you know; it's about what you can
            figure out.
          </q>
          <p>
            This resonates so deeply with me because it encapsulates the essence
            of programming as a dynamic field that prioritizes problem-solving
            abilities over static knowledge. As someone deeply passionate about
            software development, I firmly believe that the true essence of
            programming lies in the ability to creatively tackle new challenges
            and find innovative solutions, rather than relying solely on
            pre-existing knowledge.
          </p>
          <h4 className="ed-exp-header">Education and Experience</h4>
          <p className="ed-exp-line">
            - Bachelor's Degree in Financial Management
          </p>
          <p className="ed-exp-line">- Master's Degree in Computer Science</p>
          <p className="ed-exp-line">
            - 3 years experience in Digital Design, Web and Software Development
          </p>
          <h4>Skills</h4>
          <p>
            JavaScript / HTML and CSS / ReactJS / Node.js and Express / Graphic
            Design
          </p>
          <a href="/" className="cv">
            My CV
          </a>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default About;
