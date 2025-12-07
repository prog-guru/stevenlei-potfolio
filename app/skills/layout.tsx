import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Expertise | Steven Lei",
  description: "Technical skills and expertise in AI/ML, LLM, full-stack development, cloud infrastructure, and system architecture",
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

