import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Steven Lei",
  description: "Get in touch with Steven Lei for opportunities, collaborations, or just to connect",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

