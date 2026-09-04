import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dry-run.dev"),
  title: "DryRun: Learn Robot Navigation in Your Browser",
  description:
    "Explore robot sensing, mapping, A*, Dijkstra, and path planning directly in your browser — without ROS 2, Ubuntu, Gazebo, or physical hardware.",
  generator: "Next.js",
  openGraph: {
    title: "DryRun: Learn Robot Navigation in Your Browser",
    description:
      "A browser-based robotics sandbox for building intuition around sensing, mapping, and path planning.",
    url: "https://dry-run.dev",
    siteName: "DryRun",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DryRun — Learn Robot Navigation in Your Browser",
    description:
      "A browser-based robotics sandbox for learning robot navigation.",
  },
  alternates: { canonical: "https://dry-run.dev" },
  robots: { index: true, follow: true },
  icons: { icon: "/images/dryrun-logo.png" },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0d12",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
