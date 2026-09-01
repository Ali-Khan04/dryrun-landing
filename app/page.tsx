const simulatorUrl = "https://app.dry-run.dev";

function LogoMark({ large = false }: { large?: boolean }) {
  return (
    <div
      className={`logo-mark ${large ? "logo-mark-large" : ""}`}
      aria-label="DryRun logo"
    >
      <img src="/images/dryrun-logo.png" alt="" />
      <span className="logo-dot" aria-hidden="true" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span />
      {children}
    </p>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Page() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top">
          <LogoMark />
          <span>
            DryRun<small>ROBOTICS SANDBOX</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#concepts">Concepts</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <a className="button button-small" href={simulatorUrl}>
          Launch simulator <Arrow />
        </a>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <SectionLabel>Browser-based robotics sandbox</SectionLabel>
          <div className="hero-heading-row">
            <h1>
              Learn robot navigation.
              <br />
              <em>No ROS2/Ubuntu required.</em>
            </h1>
            <LogoMark large />
          </div>
          <p className="hero-lede">
            Explore sensing, mapping, and path planning directly in your browser
            without installing ROS 2, Ubuntu, Gazebo, or owning physical
            hardware.
          </p>
          <div className="hero-actions">
            <a className="button" href={simulatorUrl}>
              Launch DryRun <Arrow />
            </a>
            <a
              className="text-link"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub <Arrow />
            </a>
          </div>
          <p className="hero-note">
            <span className="status-dot" /> No installation required
          </p>
        </div>
        <div className="sim-frame">
          <div className="sim-header">
            <span>LIVE SIMULATION</span>
            <span className="sim-state">● READY</span>
          </div>
          <div className="sim-image">
            <img
              src="/images/simulator-reference.png"
              alt="DryRun robotics simulator showing a dark occupancy grid and navigation controls"
            />
          </div>
        </div>
      </section>

      <section className="problem shell split-section">
        <div>
          <SectionLabel>01 / The starting point</SectionLabel>
          <h2>
            Robotics has a<br />
            <em>setup problem.</em>
          </h2>
        </div>
        <div className="section-body">
          <p>
            Learning autonomous navigation often starts with a long list of
            prerequisites: Ubuntu, ROS 2, Gazebo, robot packages, configuration,
            and hardware.
          </p>
          <p className="accent-copy">Start with the concepts, not the setup.</p>
          <p>
            DryRun gives you a focused place to experiment first. It is inspired
            by ideas used in real robotics navigation systems — not a
            replacement for the full stack.
          </p>
        </div>
      </section>

      <section id="how" className="steps shell">
        <div className="section-intro">
          <SectionLabel>02 / The loop</SectionLabel>
          <h2>How DryRun works</h2>
          <p>Change a setting. Watch the consequence. Build intuition.</p>
        </div>
        <div className="step-grid">
          {[
            [
              "01",
              "Build",
              "Draw walls and obstacles to create an environment.",
            ],
            [
              "02",
              "Sense",
              "Watch the robot perceive nearby space with simulated sensors.",
            ],
            [
              "03",
              "Map",
              "See unknown space become known as the robot explores.",
            ],
            [
              "04",
              "Plan",
              "Run A* or Dijkstra and visualize how routes are found.",
            ],
          ].map(([num, title, copy]) => (
            <article className="step" key={num}>
              <span className="step-num">{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="modes shell">
        <div className="section-intro">
          <SectionLabel>03 / Navigation modes</SectionLabel>
          <h2>
            Three ways to think
            <br />
            about a map.
          </h2>
        </div>
        <div className="mode-list">
          <article className="mode active">
            <div>
              <span className="mode-tag">GLOBAL</span>
              <h3>Full map known up front.</h3>
            </div>
            <p>
              A* and Dijkstra search an environment the robot already
              understands.
            </p>
          </article>
          <article className="mode">
            <div>
              <span className="mode-tag">REACTIVE</span>
              <h3>Senses and moves on its own.</h3>
            </div>
            <p>
              Navigate using live observations instead of receiving the full map
              beforehand.
            </p>
          </article>
          <article className="mode">
            <div>
              <span className="mode-tag">SLAM</span>
              <h3>Maps as it goes, then plans.</h3>
            </div>
            <p>
              Reveal the environment through sensing, then plan from the map
              discovered.
            </p>
          </article>
        </div>
      </section>

      <section id="concepts" className="concepts shell split-section">
        <div>
          <SectionLabel>04 / Fundamentals</SectionLabel>
          <h2>
            Explore the
            <br />
            <em>fundamentals.</em>
          </h2>
          <p className="section-body">
            A practical sandbox for building a mental model of what robots
            sense, know, and do.
          </p>
        </div>
        <div className="concept-list">
          {[
            "A*",
            "Dijkstra",
            "LiDAR",
            "Ultrasonic sensing",
            "Occupancy grids",
            "Known vs unknown",
            "Mapping",
            "Path planning",
            "Goal navigation",
          ].map((item, i) => (
            <span key={item}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="comparison shell">
        <SectionLabel>05 / Before the hardware</SectionLabel>
        <h2>
          Understand first.
          <br />
          <em>Go deeper later.</em>
        </h2>
        <div className="compare-grid">
          <div className="compare-card">
            <span className="mode-tag">TRADITIONAL SETUP</span>
            {[
              "Ubuntu",
              "ROS 2",
              "Gazebo",
              "Robot packages",
              "Configuration",
              "Start experimenting",
            ].map((x, i) => (
              <div className="compare-line" key={x}>
                <span>{i === 5 ? "→" : "↓"}</span>
                {x}
              </div>
            ))}
          </div>
          <div className="compare-card dry">
            <span className="mode-tag">DRYRUN</span>
            {["Open browser", "Start experimenting"].map((x, i) => (
              <div className="compare-line" key={x}>
                <span>{i === 1 ? "→" : "↓"}</span>
                {x}
              </div>
            ))}
          </div>
        </div>
        <p className="compare-note">
          When you&apos;re ready for the real stack, the concepts are already
          familiar.
        </p>
      </section>

      <section className="bridge shell">
        <div className="bridge-inner">
          <SectionLabel>06 / The bridge</SectionLabel>
          <h2>
            From browser sandbox
            <br />
            to <em>real robotics.</em>
          </h2>
          <p>
            DryRun is not a replacement for ROS 2, Gazebo, Nav2, SLAM Toolbox,
            or real hardware. It focuses on intuition rather than research-grade
            simulation — a gentler first step before the full robotics
            environment.
          </p>
          <a className="text-link" href={simulatorUrl}>
            Explore the sandbox <Arrow />
          </a>
        </div>
      </section>

      <section className="final-cta shell">
        <LogoMark large />
        <SectionLabel>Ready when you are</SectionLabel>
        <h2>Give it a DryRun.</h2>
        <p>Start exploring robot navigation in your browser.</p>
        <a className="button" href={simulatorUrl}>
          Launch simulator <Arrow />
        </a>
      </section>

      <footer className="footer shell">
        <div className="brand">
          <LogoMark />
          <span>
            DryRun<small>Educational robotics sandbox.</small>
          </span>
        </div>
        <div className="footer-links">
          <a href="https://github.com">GitHub</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href={simulatorUrl}>Launch simulator</a>
        </div>
        <span className="copyright">© 2026 DryRun. All rights reserved.</span>
      </footer>
    </main>
  );
}
