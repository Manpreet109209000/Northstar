import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "../Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <div className="logo-circle">M</div>

          <div className="logo-text">
            <h2>Manpreet</h2>
            <p>🎀 Software Engineer</p>
          </div>
        </Link>

        {/* HAMBURGER */}
        <button
          type="button"
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* MOBILE / DESKTOP NAVIGATION */}
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <nav
            id="main-navigation"
            className="navbar-links"
            aria-label="Main navigation"
          >
            <Link to="/" onClick={closeMenu}>
              🏠 Home
            </Link>

            <Link to="/about" onClick={closeMenu}>
              ℹ️ About
            </Link>

            <Link to="/skills" onClick={closeMenu}>
              🧠 Skills
            </Link>

            <Link to="/projects" onClick={closeMenu}>
              🗂️ Projects
            </Link>

            <Link to="/experience" onClick={closeMenu}>
              ⏳ Experience
            </Link>

            <Link to="/visual-work" onClick={closeMenu}>
              🎨 Visual Work
            </Link>

            <a
              href="https://github.com/Manpreet109209000"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              🌱 GitHub
            </a>
          </nav>

          {/* CONTACT */}
          <div className="navbar-actions">
            <Link
              to="/contact"
              onClick={closeMenu}
            >
              <Button variant="primary">
                📬 Contact
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}