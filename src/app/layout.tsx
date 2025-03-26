import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoTopButton from "@/components/GoTopButton";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deblocage rapide de vos iPhone",
  description: "Libérez rapidement tout le potentiel de votre iPhone grâce à notre service de déblocage efficace et fiable. Que ce soit pour utiliser votre appareil avec n'importe quel opérateur ou simplement pour profiter d'une liberté totale, nous vous offrons une solution simple et rapide. Fini les tracas liés au blocage réseau – avec nous, votre iPhone est prêt à fonctionner où vous voulez, quand vous voulez !",
  icons: {
    icon: '/icon.png', 
    // Uncomment these lines if you have the corresponding favicon files
    // apple: '/apple-touch-icon.png',
    // shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Deblocage rapide de vos iPhone',
    description: "Libérez rapidement tout le potentiel de votre iPhone grâce à notre service de déblocage efficace et fiable. Que ce soit pour utiliser votre appareil avec n'importe quel opérateur ou simplement pour profiter d'une liberté totale, nous vous offrons une solution simple et rapide. Fini les tracas liés au blocage réseau – avec nous, votre iPhone est prêt à fonctionner où vous voulez, quand vous voulez !",
    type: 'website',
    locale: 'fr_FR',
  }
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
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Uncomment these lines if you have the corresponding favicon files */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <GoTopButton />
        <Footer />
      </body>
    </html>
  );
}
