import Link from 'next/link';
import { LogoMark } from './LogoMark';
import { Arrow } from './Arrow';
import { simulatorUrl } from '@/lib/dryrun-data';

export function Nav() {
  return (
    <nav className="nav shell" aria-label="Main navigation">
      <Link className="brand" href="#top">
        <LogoMark />
        <span>
          DryRun<small>ROBOTICS SANDBOX</small>
        </span>
      </Link>
      <div className="nav-links">
        <Link href="#how">How it works</Link>
        <Link href="#concepts">Concepts</Link>
      </div>
      <Link className="button button-small" href={simulatorUrl}>
        Launch simulator <Arrow />
      </Link>
    </nav>
  );
}
