import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Clarity Cuts by Charan | AI Video Editor & Photo Manipulation Specialist",
  description:
    "Award-winning AI Video & Photo Architecture studio. Transforming raw footage into scroll-stopping visual cinema using Runway Gen-3, DaVinci Resolve, ComfyUI, and precision cutting.",
  keywords: [
    "AI Video Editor",
    "AI Photo Manipulation",
    "Short Form Reels",
    "DaVinci Resolve",
    "Runway Gen-3",
    "Video Editor for hire",
    "Clarity Cuts",
    "Charan",
  ],
  openGraph: {
    title: "Clarity Cuts by Charan | AI Video & Photo Architecture",
    description:
      "Cinematic AI video editing & photo manipulation for brands, creators, and agencies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
