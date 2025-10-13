import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Jucal's Portfolio",
  description: "Portfolio website of Jucal Asitok",
  keywords: "Jucal Asitok, jucal, Web Developer, Software Engineer, Next.js, React, JavaScript, TypeScript, Frontend Developer, Backend Developer, Fullstack Developer",
  creator: "Jucal Asitok",
  openGraph: {
    title: "Jucal's Portfolio",
    description: "Portfolio website of Jucal Asitok",
    url: "https://jucalasitok.vercel.app",
    siteName: "Jucal's Portfolio",
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'A picture of Jucal Asitok',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jucal's Portfolio",
    description: "Portfolio website of Jucal Asitok",
    images: ["/opengraph-image.png"],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
