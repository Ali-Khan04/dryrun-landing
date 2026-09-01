import { SectionLabel } from './SectionLabel';

const TRADITIONAL = [
  'Ubuntu',
  'ROS 2',
  'Gazebo',
  'Robot packages',
  'Configuration',
  'Start experimenting',
];
const DRY = ['Open browser', 'Start experimenting'];

export function ComparisonSection() {
  return (
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
          {TRADITIONAL.map((x, i) => (
            <div className="compare-line" key={x}>
              <span>{i === TRADITIONAL.length - 1 ? '→' : '↓'}</span>
              {x}
            </div>
          ))}
        </div>
        <div className="compare-card dry">
          <span className="mode-tag">DRYRUN</span>
          {DRY.map((x, i) => (
            <div className="compare-line" key={x}>
              <span>{i === DRY.length - 1 ? '→' : '↓'}</span>
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
  );
}
