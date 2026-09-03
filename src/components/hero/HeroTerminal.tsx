const terminalLines = [
  "initializing developer...",
  "loading projects...",
  "WanderStay deployed ✔",
  "User Management System deployed ✔",
  "LazyTunes desktop app built ✔",
  "Completed the entire syllabus of NIOS 12th Grade in 2 months ✔",
  "NIOS board exams preparation in progress through pyqs...",
  "target: Computer Science abroad",
];

export default function HeroTerminal() {
  return (
    <div className="terminal-wrapper">
      <div className="terminal">
        {terminalLines.map((line) => (
          <p key={line}>{">"} {line}</p>
        ))}

        <div className="terminal-focus">
          <p className="terminal-focus-title">
            Current Focus
          </p>

          <p className="terminal-focus-text">
            Building stronger engineering fundamentals while preparing
            for NIOS board exams and long-term software engineering
            career abroad.
          </p>
        </div>
      </div>
    </div>
  );
}
