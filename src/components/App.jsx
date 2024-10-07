/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex-row index-page-container">
      <div className="flex-column nav-items-container">
        <div className="flex-column nav-links-upper">
          <div className="nav-left-item">
            <Link
              to="https://www.linkedin.com/in/victoriakapelush/"
              target="_blank"
              className="socials"
            >
              LI
            </Link>
          </div>
          <div className="nav-left-item">
            <Link
              to="https://twitter.com/vicky_kape"
              target="_blank"
              className="socials"
            >
              X
            </Link>
          </div>
          <div className="nav-left-item">
            <Link
              to="https://github.com/victoriakapelush"
              target="_blank"
              className="socials"
            >
              GH
            </Link>
          </div>
          <div className="border"></div>
        </div>
        <div className="nav-left-item">
          <p className="copyright">© / 2024</p>
        </div>
      </div>
      <div className="flex-row main-info">
        <div className="flex-column name-box">
          <h1 className="name">Victoria Kapelush</h1>
          <p className="occupation">Software Developer / Website Designer</p>
          <p className="occupation">
            Growing my expertise through hands-on projects
          </p>
        </div>
        <div className="headers-container">
          <Link to="/work" className="links">
            Work
          </Link>
          <Link to="/about" className="links">
            About
          </Link>
          <Link to="/contact" className="links">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
