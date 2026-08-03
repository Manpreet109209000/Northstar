import { Link } from "react-router-dom";
import "./Navbar.css";

import Button from "../Button";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LEFT */}
        <Link to="/" className="navbar-logo">
          <div className="logo-circle">M</div>

          <div className="logo-text">
            <h2>Manpreet</h2>
            <p>Software Engineer</p>
          </div>
        </Link>

        {/* CENTER */}
        <nav className="navbar-links">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/skills">Skills</Link>

          <Link to="/projects">Projects</Link>

          <Link to="/experience">Experience</Link>

          <Link to="/visual-work">Visual Work</Link>

          <a
            href="https://github.com/Manpreet109209000"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>

        {/* RIGHT */}
        
        <div className="navbar-actions">
          <Link
            to="/contact"
            style={{ textDecoration: "none" }}
          >
            <Button variant="primary">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
