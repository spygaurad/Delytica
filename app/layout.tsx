import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const siteUrl = "https://delytica.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Delytica | MedSpa AI & Growth Agency",
    template: "%s | Delytica",
  },
  description:
    "Delytica helps med spas eliminate no-shows, automate follow-ups, and fill their calendars with done-for-you AI automation and growth marketing.",
  keywords: [
    "med spa marketing",
    "med spa automation",
    "medspa growth agency",
    "no-show reduction",
    "patient retention",
    "aesthetic medicine marketing",
    "HIPAA automation",
    "GoHighLevel medspa",
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
    title: "Delytica | MedSpa AI & Growth Agency",
    description:
      "Done-for-you automation that eliminates no-shows, recovers missed calls, and reactivates dormant patients for med spas.",
    images: [
      {
        url: "/images/delytica_logo.png",
        width: 2000,
        height: 2000,
        alt: "Delytica MedSpa Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delytica | MedSpa AI & Growth Agency",
    description:
      "Done-for-you automation that eliminates no-shows, recovers missed calls, and reactivates dormant patients for med spas.",
    images: ["/images/delytica_logo.png"],
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
  name: "Delytica MedSpa Growth Agency",
  description:
    "Done-for-you AI automation and growth marketing agency for med spas and aesthetic medicine practices.",
  url: siteUrl,
  email: "contact@delytica.com",
  areaServed: "US",
  serviceType: [
    "MedSpa Marketing Automation",
    "Patient Retention Systems",
    "No-Show Reduction",
    "Reputation Management",
    "Digital Advertising",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Practice Essentials",
      price: "297",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Practice Growth",
      price: "697",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Full Partnership",
      price: "1800",
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
    <html lang="en" className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-eggshell text-ink antialiased">
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
