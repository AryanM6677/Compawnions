import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ComPAWnions | Pet Matchmaking Algorithm",
  description: "Minimalist luxury pet intelligence platform.",
};

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased relative min-h-screen flex flex-col`}>
        {/* Organic Coat Texture Overlay */}
        <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.03]">
          <svg className="w-full h-full">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
        
        <NuqsAdapter>
          <Navbar />
          <main className="flex-1 relative z-0">
            {children}
          </main>
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  );
}
