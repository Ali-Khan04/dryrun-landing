import { SectionLabel } from "./SectionLabel";
import { CONCEPTS } from "@/lib/dryrun-data";

export function ConceptsSection() {
  return (
    <section id="concepts" className="concepts shell split-section">
      <div>
        <SectionLabel>04 / Fundamentals</SectionLabel>
        <h2 className="section-heading">
          Explore the
          <br />
          <em>fundamentals.</em>
        </h2>
        <p className="section-body">
          A practical sandbox for building a mental model of what robots sense,
          know, and do.
        </p>
      </div>
      <div className="concept-list">
        {CONCEPTS.map((item, i) => (
          <span key={item}>
            <b>{String(i + 1).padStart(2, "0")}</b>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
