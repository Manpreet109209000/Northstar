import "./Hero.css";

import Button from "../Button";
import HeroBadge from "./HeroBadge";
import HeroStats from "./HeroStats";
import HeroTerminal from "./HeroTerminal";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* LEFT */}
        <div className="hero-left">
          <HeroBadge />

          <h1 className="hero-title">
            🌸An <span style={{ color: '#ea81ff' }}>UNSHAKE-
              ABLE</span> Kid from a small room in Punjab Building
            <span> production-foc<span style={{ color: '#ea81ff' }} >us</span>ed </span>
            software systems.
          </h1>

          <p className="hero-description">
            I build full-stack applications with Node.js, React, MongoDB,
            MySQL, and Electron while preparing for Computer Science studies
            abroad.
            <br />
            <br />
            Focused on backend engineering, scalable architecture, and solving
            real problems instead of making another “AI startup landing page”
            with floating gradients. Humanity keeps inventing the same landing
            page every six minutes.
          </p>

          <div className="hero-buttons" >
            <Button 
            href="/projects"
            variant="primary"
            >🗂️ View Projects
            </Button>

            <Button 
            href="https://github.com/Manpreet109209000"
            target="_blank"
            variant="secondary"
            >🌱 GitHub
            </Button>

            <Button 
            href="https://drive.google.com/file/d/1swaMr2fYQFLXktx14HOHwxkCsQjxFFsW/view?usp=sharing"
            variant="secondary"
            target="_blank"
            >📜 CV/Resume
            </Button>
          </div>

          <HeroStats />
        </div>

        {/* RIGHT */}
        <HeroTerminal />
      </div>
    </section>
  );
}
