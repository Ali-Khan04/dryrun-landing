import Link from 'next/link';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer shell md:!grid md:!grid-cols-[1fr_auto_1fr] md:!items-center">
      <span aria-hidden="true" className="hidden md:!block" />
      <div className="footer-links md:!justify-self-center">
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <a
          href="https://github.com/Ali-Khan04"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      <span className="copyright md:!justify-self-end">
        © {year} DryRun. All rights reserved.
      </span>
    </footer>
  );
}
