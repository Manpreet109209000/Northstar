import "./CTASection.css";

import Button from "../Button";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>
          🙋💮Let’s build something meaningful.💐🌷
        </h2>

        <p>
          Interested in collaboration, engineering,
          backend systems, or creative work?
          Let’s connect.🌸
        </p>

        <div className="cta-button-wrapper">
          <Button
            href="/contact"
            variant="primary"
          >
            💐 Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
