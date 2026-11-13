import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "./site-nav";

export const metadata: Metadata = {
  title: "Aminu Ibrahim — Accord",
  description: "Aminu Ibrahim’s proposal, working Accord product, customer portal and private feedback.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"><SiteNav/>{children}</body>
    </html>
  );
}
