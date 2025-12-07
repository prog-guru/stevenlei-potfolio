import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { personalInfo } from "@/data/personal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.summary,
  keywords: [
    "Steven Lei",
    "Software Engineer",
    "AI Specialist",
    "LLM",
    "RAG Systems",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.summary,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.summary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

