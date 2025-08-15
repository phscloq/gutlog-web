import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GutLog - Track Your Bowel Health",
  description: "Monitor and track your bowel health with GutLog, the comprehensive iOS app for digestive wellness. Log entries, visualize trends, and generate doctor-ready PDF reports.",
  keywords: ["bowel health", "digestive wellness", "health tracking", "iOS app", "stool tracker", "IBS", "digestive health"],
  authors: [{ name: "GutLog Team" }],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "GutLog - Track Your Bowel Health",
    description: "Monitor and track your bowel health with GutLog, the comprehensive iOS app for digestive wellness.",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "GutLog App Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GutLog - Track Your Bowel Health",
    description: "Monitor and track your bowel health with GutLog, the comprehensive iOS app for digestive wellness.",
    images: ["/icon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} font-manrope antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
