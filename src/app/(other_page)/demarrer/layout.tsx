import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Débloquer iPhone iCloud - Commencer Maintenant',
  description: 'Commencez le processus de déblocage de votre iPhone iCloud. Service rapide, sécurisé et garanti. Formulaire simple et support expert.',
  openGraph: {
    title: 'Débloquer iPhone iCloud - Commencer Maintenant',
    description: 'Commencez le processus de déblocage de votre iPhone iCloud. Service rapide, sécurisé et garanti.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Déblocage iPhone iCloud - Commencer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Débloquer iPhone iCloud - Commencer Maintenant',
    description: 'Commencez le processus de déblocage de votre iPhone iCloud. Service rapide, sécurisé et garanti.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/demarrer',
  },
};

export default function DemarrerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
