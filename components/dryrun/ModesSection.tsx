import { SectionLabel } from "./SectionLabel";
import { MODES } from "@/lib/dryrun-data";

export function ModesSection() {
  return (
    <section className="modes shell">
      <div className="section-intro section-intro--stack">
        <SectionLabel>03 / Navigation modes</SectionLabel>
        <h2 className="section-heading">
          Three ways to think
          <br />
          about a map.
        </h2>
      </div>
      <div className="mode-list">
        {MODES.map((mode) => (
          <article
            className={`mode ${mode.active ? "active" : ""}`}
            key={mode.tag}
          >
            <div>
              <span className="mode-tag">{mode.tag}</span>
              <h3>{mode.title}</h3>
            </div>
            <p>{mode.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
