import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Steven Lei",
  description: "Professional experience and career timeline of Steven Lei, Senior Software Engineer and AI Specialist",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

