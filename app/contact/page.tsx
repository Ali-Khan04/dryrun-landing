import Link from 'next/link';

const contacts = [
  {
    label: 'Email',
    value: 'alikhn2318@gmail.com',
    href: 'mailto:alikhn2318@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/aliahmedkhan04',
    href: 'https://www.linkedin.com/in/aliahmedkhan04',
  },
  {
    label: 'GitHub',
    value: 'github.com/Ali-Khan04',
    href: 'https://github.com/Ali-Khan04',
  },
];

export default function ContactPage() {
  return (
    <main className="legal-page contact-page mx-auto w-full max-w-[760px] px-6">
      <Link className="back-link" href="/">
        ← Back to DryRun
      </Link>
      <p className="section-label !mt-10">
        <span />
        Contact
      </p>
      <h1>Let&apos;s connect.</h1>
      <p className="legal-intro">
        Have a question, idea, or feedback about DryRun? Reach out through any
        of the channels below.
      </p>
      <div className="contact-list">
        {contacts.map((contact) => (
          <a
            className="contact-item"
            href={contact.href}
            key={contact.label}
            target={contact.label === 'Email' ? undefined : '_blank'}
            rel={contact.label === 'Email' ? undefined : 'noreferrer'}
          >
            <span>{contact.label}</span>
            <strong>{contact.value}</strong>
            <b aria-hidden="true">↗</b>
          </a>
        ))}
      </div>
      <footer className="legal-footer">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/">DryRun home</Link>
      </footer>
    </main>
  );
}
