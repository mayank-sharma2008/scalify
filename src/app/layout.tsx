import type { Metadata } from "next";
import { Inter, Syne, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300","400","500","600"] });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["700","800"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", style: ["italic"], weight: ["700","800"] });

export const metadata: Metadata = {
  title: "Scalify — Websites, done right.",
  description: "Fixed price. Fixed timeline. No agency drama.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}