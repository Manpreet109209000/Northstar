export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-container">
        {/* badge */}
        <div className="contact-badge">
          📬 Open to Opportunities
        </div>

        {/* heading */}
        <h1>
          📬 Building systems,
          learn<span style={{ color: '#ea81ff' }}>in</span>g deeply,
          and slowly engineering a better future.
        </h1>

        {/* desc */}
        <p className="contact-description">
          I’m currently focused on backend engineering,
          scalable architecture, mathematics, and
          long-term Computer Science goals abroad.
          <br />
          <br />
          If you want to discuss projects, development,
          collaboration, or opportunities,
          feel free to reach out.
          <br />
          <br />
          Prefer thoughtful conversations over
          “bro let’s build the next billion-dollar AI app”
          messages written at 3AM by sleep-deprived startup cultists.
        </p>
      </div>
    </section>
  );
}