import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">

          {/* LEFT */}
          <div className="footer-brand">
            <Link to="/" className="navbar-logo">
            <div className="footer-logo">
              M
            </div></Link>

            <div>
              <h2>Manpreet Singh</h2>

              <p>
                Self-directed student and software engineer
                building production-focused systems from Punjab,
                India.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="footer-links">

            <div className="footer-column">
              <h4>Navigation</h4>

              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/work">Visual Work</a>
            </div>

            <div className="footer-column">
              <h4>Projects</h4>

              <a
                href="https://wanderstay-az1i.onrender.com/"
                target="_blank"
              >
                WanderStay
              </a>

              <a
                href="https://user-management-system-l8xd.onrender.com/"
                target="_blank"
              >
                User System
              </a>

              <a
                href="https://github.com/Manpreet109209/LazyTunes"
                target="_blank"
              >
                LazyTunes
              </a>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>

              <a
                href="https://github.com/Manpreet109209000"
                target="_blank"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/manpreet-se/"
                target="_blank"
              >
                LinkedIn
              </a>

              <a
                href="mailto:manpreet.singh.1092090@gmail.com"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Manpreet Singh. Built with React/Typescript,
            Node.js, Cold Milk, and long-term survival instincts.
          </p>

          <span>
            Punjab, India 🇮🇳
          </span>
        </div>
      </div>
    </footer>
  );
}
