/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

function Work() {
  useEffect(() => {
    document.title = "Victoria Kapelush / Work";
  });

  return (
    <div className="flex-row contact-index-page-container">
      <div className="flex-column nav-items-container">
        <div className="flex-column nav-links-upper">
          <div className="nav-left-item">
            <Link to="/" className="socials contact-page-font-color">
              Home
            </Link>
          </div>
          <div className="border border-color"></div>
        </div>
        <p className="copyright nav-left-item contact-page-font-color">
          ©/2024
        </p>
      </div>
      <div className="flex-row contact-main-info work-container">
        <div className="flex-column work-paragraph">
          <h4>Work</h4>
          <p>
            This is a showcase of my top projects. <br />
            Over the past few years, I've seen the digital design <br /> and
            development scene change constantly, <br /> shaping my role along
            the way.{" "}
          </p>
          <br />
          <p>
            With my current experience as a full-stack developer, <br />
            I'm still learning and gaining new skills every day.
          </p>
        </div>
        <div className="flex-column work-links">
          <a
            className="link-work-name"
            href="https://narrative-blog.onrender.com"
            target="_blank"
          >
            "Narrative"
          </a>
          <a
            className="gh-link"
            href="https://github.com/victoriakapelush/Narrative"
            target="_blank"
          >
            Full-Stack MERN Blog App
          </a>
          <a
            className="link-work-name"
            href="https://resumebuilderbyvk.netlify.app"
            target="_blank"
          >
            Resume Builder
          </a>
          <a
            className="gh-link"
            href="https://github.com/victoriakapelush/CV-Application/tree/main"
            target="_blank"
          >
            React Application
          </a>
          <a
            className="link-work-name"
            href="https://x-social-jvsi.onrender.com"
            target="_blank"
          >
            Social Media
          </a>
          <a
            className="gh-link"
            href="https://github.com/victoriakapelush/Social-Butterfly"
            target="_blank"
          >
            Full-Stack MERN Social Media App
          </a>
          <a
            className="link-work-name"
            href="https://mksocials.com"
            target="_blank"
          >
            "MK Socials"
          </a>
          <a
            className="gh-link"
            href="https://github.com/victoriakapelush/Portfolio-Website"
            target="_blank"
          >
            CSS/JavaScript Portfolio Website
          </a>
          <a
            className="link-work-name"
            href="https://www.wooganyc.com"
            target="_blank"
          >
            "Wooga NYC"
          </a>
          <a className="gh-link">Website for a korean restaurant in NYC</a>
          <a
            className="link-work-name"
            href="https://photo-tagging-app-1.onrender.com"
            target="_blank"
          >
            "Where is Waldo?"
          </a>
          <a
            className="gh-link"
            href="https://github.com/victoriakapelush/Photo-Tagging-App"
            target="_blank"
          >
            React Photo Tagging App
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
