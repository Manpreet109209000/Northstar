const terminalLines = [
  "Solving NIOS 12th-grade PYQs daily.",
  "Working as an Independent Software Developer",
  "Target: Computer Science abroad",
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
            Engineering scalable distributed systems and mastering production-grade architectures while preparing 
            for NIOS (Nov 2027) exams to secure a long-term software career.
          </p>
        </div>
      </div>
    </div>
  );
}
