import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Steven Lei",
  description: "Learn about Steven Lei's journey, expertise, and passion for building innovative AI-powered solutions",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

