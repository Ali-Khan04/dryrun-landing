import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main>
      <div className="legal-page mx-auto w-full max-w-[760px]">
        <Link href="/" className="back-link">
          ← Back to DryRun
        </Link>

        <p className="section-label !mt-10">
          <span></span>Privacy
        </p>

        <h1>Privacy Policy</h1>

        <p className="legal-intro">
          DryRun is designed to be a simple educational robotics sandbox. We
          collect as little information as possible.
        </p>

        <div className="legal-content">
          <h2>Information we collect</h2>
          <p>
            DryRun does not require an account and does not ask you to provide
            personal information in order to use the simulator.
          </p>
          <p className="!mt-4">
            The simulator runs primarily in your browser. DryRun may use local
            browser storage for small application preferences or interface
            state. This information remains on your device and is not used to
            identify you.
          </p>

          <h2>Hosting and technical data</h2>
          <p>
            DryRun is hosted using Vercel. Like most web hosting providers,
            Vercel may process technical information necessary to deliver and
            protect the website, such as IP addresses, request information, and
            device or browser information.
          </p>
          <p className="!mt-4">
            DryRun does not currently use advertising trackers or third-party
            behavioral analytics.
          </p>

          <h2>How we use information</h2>
          <p>
            DryRun does not sell personal information. Technical information
            processed by our hosting infrastructure may be used to operate,
            secure, and diagnose problems with the website.
          </p>

          <h2>Third-party links</h2>
          <p>
            DryRun may contain links to third-party websites such as GitHub and
            LinkedIn. Those services have their own privacy policies and
            practices.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If DryRun later introduces features such as accounts, analytics,
            cloud storage, or other services that change how information is
            handled, this privacy policy will be updated accordingly.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about privacy can be sent to:
            <a href="mailto:alikhn2318@gmail.com"> alikhn2318@gmail.com</a>.
          </p>
        </div>

        <p className="hero-note" style={{ marginTop: 28 }}>
          Last updated:
          <span style={{ color: "var(--teal)" }}> September 2026</span>
        </p>

        <div className="legal-footer">
          <Link href="/contact">Contact</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/">Home</Link>
        </div>
      </div>
    </main>
  );
}
