import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "@/styles/globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Kundan Badhe | Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer specializing in FastAPI, React, Azure, and AI/LLM integrations. Building scalable backend systems and automation solutions.",
  keywords: [
    "Full Stack Developer",
    "Backend Engineer",
    "FastAPI",
    "React",
    "Python",
    "Azure",
    "AI Engineer",
    "LLM",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Kundan Badhe" }],
  creator: "Kundan Badhe",
  metadataBase: new URL("https://kundan.is-a.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kundan.is-a.dev",
    siteName: "Kundan Badhe Portfolio",
    title: "Kundan Badhe | Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer specializing in FastAPI, React, Azure, and AI/LLM integrations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kundan Badhe | Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer specializing in FastAPI, React, Azure, and AI/LLM integrations.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
