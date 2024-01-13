import type { Metadata } from "next";
import { Lato, Playfair } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import React from "react";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato"
});

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair"
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
      <body className={`${lato.variable} ${playfair.variable}`}>
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
