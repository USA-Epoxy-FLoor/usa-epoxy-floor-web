import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { ThemeProvider } from "@/components/themes/themes-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "USA EPOXY FLOOR",
  description:
    "Transform your space with premium epoxy flooring solutions for residential, commercial, and industrial properties throughout NY, CT, NJ, MA and PA. Free quotes available.",
  authors: [{ name: "Techwave LLC", url: "https://techwavellc.io" }],
  keywords:
    "epoxy flooring, epoxy floor, garage floor epoxy, commercial epoxy flooring, industrial epoxy floor, New York epoxy, New York flooring, epoxy flooring, commercial, industrial, residential, USA Epoxy Floor, NY, CT, NJ, MA, PA",
  icons: {
    icon: "/logo.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.usaepoxyfloor.com/",
    title:
      "USA Epoxy Floor | Professional Epoxy Flooring Services in Poughkeepsie, NY",
    description:
      "Transform your space with premium epoxy flooring solutions for residential, commercial, and industrial properties throughout NY, CT, NJ, MA and PA. Free quotes available.",
    siteName: "USA Epoxy Floor",
    images: [
      {
        url: "/epoxy/hero.png",
        width: 1200,
        height: 630,
        alt: "USA Epoxy Floor - Professional Epoxy Flooring Services",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,

  // Also supported by less commonly used
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-accent`}
      >
        <ThemeProvider>
          {children}
          <Toaster expand />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
