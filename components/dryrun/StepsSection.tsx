import { SectionLabel } from './SectionLabel';
import { STEPS } from '@/lib/dryrun-data';

export function StepsSection() {
  return (
    <section id="how" className="steps shell">
      <div className="section-intro">
        <SectionLabel>02 / The loop</SectionLabel>
        <h2>How DryRun works</h2>
        <p>Change a setting. Watch the consequence. Build intuition.</p>
      </div>
      <div className="step-grid">
        {STEPS.map(([num, title, copy]) => (
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
  );
}
