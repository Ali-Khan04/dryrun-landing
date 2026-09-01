import Link from 'next/link';

export default function TermsPage() {
  return (
    <main>
      <div className="legal-page mx-auto w-full max-w-[760px] px-6">
        <Link href="/" className="back-link">
          ← Back to DryRun
        </Link>

        <p className="section-label !mt-10">
          <span></span>Terms
        </p>

        <h1>Terms of use</h1>

        <p className="legal-intro">
          DryRun is an educational robotics sandbox designed for learning,
          experimentation, and building intuition around robot navigation.
        </p>

        <div className="legal-content">
          <h2>Educational purpose</h2>
          <p>
            DryRun is provided for educational and experimental use. It is
            intended to demonstrate concepts such as sensing, mapping, and path
            planning in a simplified simulation environment.
          </p>

          <h2>Not for real-world robot control</h2>
          <p>
            This is a simulator, not a controller. Paths, sensor behavior, and
            outcomes in DryRun may differ substantially from physical robots,
            autonomous machinery, or other safety-critical equipment.
          </p>
          <p className="!mt-4">
            Don&apos;t rely on DryRun output for safety decisions, engineering
            validation, or deploying real-world autonomous systems.
          </p>

          <h2>No guarantee of accuracy</h2>
          <p>
            The goal here is intuition, not research-grade or production-grade
            fidelity. Simulation behavior, path-planning results, and sensor
            models are not guaranteed to represent every real-world condition.
          </p>

          <h2>Acceptable use</h2>
          <p>
            You may use DryRun for lawful learning and experimentation. Do not
            attempt to disrupt the service, interfere with its operation, access
            systems without authorization, or use it for unlawful activity.
          </p>

          <h2>Third-party services</h2>
          <p>
            Links to third-party sites such as GitHub and LinkedIn are provided
            for convenience. Those services are operated independently and have
            their own terms, privacy policies, and availability.
          </p>

          <h2>Third-party technologies</h2>
          <p>
            DryRun may reference technologies and concepts associated with ROS,
            ROS 2, Gazebo, Open Robotics, and related projects. DryRun is an
            independent educational project and is not affiliated with,
            sponsored by, or endorsed by those organizations or their
            maintainers.
          </p>

          <h2>Availability and changes</h2>
          <p>
            DryRun is provided on an &ldquo;as available&rdquo; basis. Features
            may be changed, improved, removed, or temporarily unavailable as the
            project evolves.
          </p>
          <p className="!mt-4">
            These terms may also be updated if DryRun&apos;s functionality or
            legal requirements change.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to:
            <a href="mailto:alikhn2318@gmail.com"> alikhn2318@gmail.com</a>.
          </p>
        </div>

        <p className="hero-note" style={{ marginTop: 28 }}>
          Last updated:
          <span style={{ color: 'var(--teal)' }}>September 2026</span>
        </p>

        <div className="legal-footer">
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/">DryRun home</Link>
        </div>
      </div>
    </main>
  );
}
