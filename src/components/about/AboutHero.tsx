export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-container">
        {/* badge */}
        <div className="about-badge">
          🌾 Punjab, India • Self-Directed Student
        </div>

        {/* heading */}
        <h1>
          🎀 Building <span style={{ color: '#e26dff' }}>soft</span>ware systems while building my own path.
        </h1>

        {/* desc */}
        <p className="about-hero-description">
          I’m Manpreet, a self-taught developer and NIOS student
          currently preparing for my examinations in November 2027. 
          Once I turn 18 this November 22nd, 
          I will begin working as a Zomato Food Delivery Partner—putting in 11 hours a day, 
          6 days a week, with Mondays reserved to rest, build projects, and sharpen my skills. 
          It is all part of a calculated path to fund an affordable Computer Science degree abroad in Poland.
          <br />
          <br />
          After Leaving A School System That Cared More About
          Fees Than Actual Education, And Even More About Putting Me Into Arts. I started building my own
          structure and found nios as a way to continue my education in Non-Medical Stream with:
          PCM, English + CS, programming, software/backend engineering,
          and real-world software projects, Etc.
          <br />
          <br />
          Somewhere between solving calculus problems, deploying
          Node.js apps, and debugging things at 2AM, this slowly
          became more than “learning code.”
          <br />
          It became a long-term plan for independence.
        </p>
      </div>
    </section>
  );
}