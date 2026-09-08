import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { SectionLabel } from "./SectionLabel";
import { simulatorUrl } from "@/lib/dryrun-data";

export function FinalCta() {
  return (
    <section className="final-cta shell">
      <LogoMark large />
      <span
        style={{
          color: "#ea9366",
          fontFamily: "monospace",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "0.06em",
        }}
      >
        Ready when you are
      </span>
      <h2>Give it a DryRun</h2>
      <p>Start exploring robot navigation in your browser.</p>
      <Link className="button" href={simulatorUrl}>
        Launch simulator
      </Link>
    </section>
  );
}
