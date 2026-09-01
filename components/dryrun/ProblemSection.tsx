import { SectionLabel } from './SectionLabel';

export function ProblemSection() {
  return (
    <section className="problem shell split-section">
      <div>
        <SectionLabel>01 / The starting point</SectionLabel>
        <h2>
          Robotics has a<br />
          <em>setup problem.</em>
        </h2>
      </div>
      <div className="section-body">
        <p>
          Learning autonomous navigation often starts with a long list of
          prerequisites: Ubuntu, ROS 2, Gazebo, robot packages, configuration,
          and hardware.
        </p>
        <p className="accent-copy">Start with the concepts, not the setup.</p>
        <p>
          DryRun gives you a focused place to experiment first. It is inspired
          by ideas used in real robotics navigation systems — not a replacement
          for the full stack.
        </p>
      </div>
    </section>
  );
}
