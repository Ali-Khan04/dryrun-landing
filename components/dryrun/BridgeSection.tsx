import Link from 'next/link';
import { SectionLabel } from './SectionLabel';
import { Arrow } from './Arrow';
import { simulatorUrl } from '@/lib/dryrun-data';

export function BridgeSection() {
  return (
    <section className="bridge shell">
      <div className="bridge-inner">
        <SectionLabel>06 / The bridge</SectionLabel>
        <h2>
          From browser sandbox
          <br />
          to <em>real robotics.</em>
        </h2>
        <p>
          DryRun is not a replacement for ROS 2, Gazebo, Nav2, SLAM Toolbox, or
          real hardware. It focuses on intuition rather than research-grade
          simulation, a gentler first step before the full robotics environment.
        </p>
        <Link className="text-link" href={simulatorUrl}>
          Explore the sandbox <Arrow />
        </Link>
      </div>
    </section>
  );
}
