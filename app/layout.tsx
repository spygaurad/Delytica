import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://delytica.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Delytica | Continuity Growth for Medspas",
    template: "%s | Delytica",
  },
  description:
    "Delytica builds high-LTV patient acquisition and membership funnels for medspas.",
  keywords: [
    "med spa marketing",
    "medspa growth agency",
    "patient acquisition",
    "GLP-1 marketing",
    "HRT marketing",
    "medspa memberships",
    "patient continuity",
  ],
  icons: {
    icon: [
      { url: "/images/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/images/favicon_io/apple-touch-icon.png",
    shortcut: "/images/favicon_io/favicon.ico",
  },
  authors: [{ name: "Delytica MedSpa Growth Agency" }],
  creator: "Delytica MedSpa Growth Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Delytica MedSpa Growth Agency",
    title: "Delytica | Continuity Growth for Medspas",
    description:
      "High-LTV patient acquisition and continuity systems for medspas.",
    images: [
      {
        url: "/images/delytica_fb.png",
        width: 1200,
        height: 1200,
        alt: "Delytica MedSpa Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delytica | Continuity Growth for Medspas",
    description:
      "High-LTV patient acquisition and continuity systems for medspas.",
    images: ["/images/delytica_fb.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Delytica Continuity Growth",
  description:
    "High-LTV patient acquisition and continuity systems for med spas and aesthetic medicine practices.",
  url: siteUrl,
  email: "contact@delytica.com",
  areaServed: "US",
  serviceType: [
    "High-LTV Patient Acquisition",
    "Membership Program Growth",
    "Pre-Consultation Qualification",
    "Continuity Campaigns",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Core Patient Acquisition and Practice Visibility",
      price: "2500",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "High-LTV Care Continuity and Membership Program",
      price: "4500",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "High-LTV Care Continuity and Membership Program",
      price: "5000",
      priceCurrency: "USD",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-graphite antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
