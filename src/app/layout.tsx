import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoTopButton from "@/components/GoTopButton";
import { Footer } from "@/components/Footer";

import { organizationSchema, websiteSchema } from '@/lib/structured-data';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deblocage-device.com'),
  title: {
    default: "Déblocage iPhone iCloud - Service Rapide et Fiable",
    template: "%s | Déblocage iPhone Rapide et Sécurisé"
  },
  description: "Service professionnel de déblocage iPhone iCloud. Rapide, sécurisé et garanti. Débloquez votre iPhone en moins de 24h avec notre équipe d'experts.",
  keywords: ["déblocage iPhone", "iCloud unlock", "déblocage iCloud", "iPhone unlock", "déblocage rapide", "service déblocage"],
  authors: [{ name: "Déblocage Device" }],
  creator: "Déblocage Device",
  publisher: "Déblocage Device",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
    shortcut: '/icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Déblocage iPhone iCloud - Service Rapide et Fiable',
    description: "Service professionnel de déblocage iPhone iCloud. Rapide, sécurisé et garanti. Débloquez votre iPhone en moins de 24h avec notre équipe d'experts.",
    siteName: 'Déblocage Device',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Déblocage iPhone iCloud - Service Professionnel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Déblocage iPhone iCloud - Service Rapide et Fiable',
    description: "Service professionnel de déblocage iPhone iCloud. Rapide, sécurisé et garanti.",
    images: ['/og-image.jpg'],
  },
  verification: {
    google: '', // Add your Google Search Console verification code
    yandex: '', // Add if needed
    yahoo: '', // Add if needed
  },
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <GoTopButton />
        <Footer />
      </body>
    </html>
  );
}
