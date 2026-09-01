export function LogoMark({ large = false }: { large?: boolean }) {
  return (
    <div
      className={`logo-mark ${large ? 'logo-mark-large' : ''}`}
      aria-label="DryRun logo"
    >
      <svg
        viewBox="0 0 28 28"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="27"
          height="27"
          rx="7"
          fill="var(--raised)"
          stroke="var(--line)"
        />
        <path
          d="M6 20 L6 14 L14 14 L14 8 L22 8"
          stroke="var(--teal)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="22" cy="8" r="2.6" fill="var(--teal)" />
      </svg>
      <span className="logo-dot" aria-hidden="true" />
    </div>
  );
}
