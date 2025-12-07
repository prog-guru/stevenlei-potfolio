import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Steven Lei",
  description: "Portfolio of projects showcasing AI/ML applications, full-stack development, and system architecture by Steven Lei",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

