import Link from 'next/link';
import { LogoMark } from './LogoMark';
import { SectionLabel } from './SectionLabel';
import { simulatorUrl } from '@/lib/dryrun-data';

export function FinalCta() {
  return (
    <section className="final-cta shell">
      <LogoMark large />
      <SectionLabel>Ready when you are</SectionLabel>
      <h2>Give it a DryRun</h2>
      <p>Start exploring robot navigation in your browser.</p>
      <Link className="button" href={simulatorUrl}>
        Launch simulator
      </Link>
    </section>
  );
}
