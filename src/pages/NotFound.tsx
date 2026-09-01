import "../styles/NotFound.css";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-container">
        {/* LEFT */}
        <div className="not-found-content">
          <div className="not-found-badge">🌸 ERROR 404</div>

          <h1 className="not-found-title">
            Lost somewhere
            <span> in the system?</span>
          </h1>

          <p className="not-found-description">
            The page you're looking for doesn't exist, moved somewhere else,
            or was never deployed in the first place.
            <br />
            <br />
            Don't worry. The rest of Northstar is still running perfectly.
            Humanity has survived worse routing errors.
          </p>

          <div className="not-found-buttons">
            <Button href="/" variant="primary">
              🏠 Back Home
            </Button>

            <Button href="/projects" variant="secondary">
              🗂️ View Projects
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="not-found-terminal-wrapper">
          <div className="not-found-terminal">
            <p>
              <span className="terminal-prompt">$</span> northstar route
            </p>

            <p className="terminal-command">/unknown</p>

            <p className="terminal-error">✕ Route not found</p>

            <div className="not-found-terminal-focus">
              <div className="not-found-terminal-focus-title">
                SYSTEM STATUS
              </div>

              <div className="not-found-terminal-focus-text">
                STATUS: <span>404</span>
                <br />
                ROUTE: UNKNOWN
                <br />
                NORTHSTAR: ONLINE
                <br />
                COFFEE: PROBABLY REQUIRED
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}