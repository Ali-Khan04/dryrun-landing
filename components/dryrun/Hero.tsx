import Link from "next/link";
import { SectionLabel } from "./SectionLabel";
import { LogoMark } from "./LogoMark";
import { Arrow } from "./Arrow";
import { simulatorUrl } from "@/lib/dryrun-data";

export function Hero() {
  return (
    <section id="top" className="hero shell">
      {/* Left side */}
      <div className="hero-copy">
        <SectionLabel>Browser-based robotics sandbox</SectionLabel>

        <div className="hero-heading-row">
          <h1>
            Learn robot navigation.
            <br />
            <em>No ROS2/Ubuntu required.</em>
          </h1>

          <LogoMark large />
        </div>

        <p className="hero-lede">
          Explore sensing, mapping, and path planning directly in your browser
          without installing ROS 2, Ubuntu, Gazebo, or owning physical hardware.
        </p>

        <div className="hero-actions">
          <Link className="button" href={simulatorUrl}>
            Launch DryRun <Arrow />
          </Link>
        </div>

        <p className="hero-note">
          <span className="status-dot" />
          No installation required
        </p>
      </div>
      <div className="hero-simulation">
        <div className="hero-video-wrapper">
          <div className="hero-video-header">
            <span>simulator.preview</span>
            <span className="sim-state">● live</span>
          </div>
          <div className="hero-video-frame">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="DryRun robot mapping an environment using simulated LiDAR"
            >
              <source src="/demo/slam.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
