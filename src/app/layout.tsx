import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Lato, Playfair } from "next/font/google";
import React from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato"
});

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
  adjustFontFallback: false
});

export const metadata: Metadata = {
  title: "Hoopsy Daisy",
  description:
    "Polymer clay goodies🌷 | Sloooow made 🐌 | Tiny, tiny batches 👀"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("flex h-screen flex-col", [
          lato.variable,
          playfair.variable
        ])}
      >
        <Header />
        <main className="flex flex-grow flex-col items-center">{children}</main>
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
