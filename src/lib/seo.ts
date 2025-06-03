import { DefaultSeoProps } from 'next-seo';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deblocage-device.com';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | Déblocage iPhone Rapide et Sécurisé',
  defaultTitle: 'Déblocage iPhone iCloud - Service Rapide et Fiable',
  description: 'Service professionnel de déblocage iPhone iCloud. Rapide, sécurisé et garanti. Débloquez votre iPhone en moins de 24h avec notre équipe d\'experts.',
  canonical: baseUrl,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: baseUrl,
    siteName: 'Déblocage Device',
    title: 'Déblocage iPhone iCloud - Service Rapide et Fiable',
    description: 'Service professionnel de déblocage iPhone iCloud. Rapide, sécurisé et garanti. Débloquez votre iPhone en moins de 24h avec notre équipe d\'experts.',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Déblocage iPhone iCloud - Service Professionnel',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@deblocage_device',
    site: '@deblocage_device',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    {
      name: 'author',
      content: 'Déblocage Device',
    },
    {
      name: 'keywords',
      content: 'déblocage iPhone, iCloud unlock, déblocage iCloud, iPhone unlock, déblocage rapide, service déblocage',
    },
    {
      name: 'theme-color',
      content: '#2563eb',
    },
    {
      name: 'msapplication-TileColor',
      content: '#2563eb',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/icon.png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
  ],
};

export const seoConfig = {
  baseUrl,
  siteName: 'Déblocage Device',
  twitterHandle: '@deblocage_device',
  facebookAppId: '', // Add if you have one
  googleSiteVerification: '', // Add your Google Search Console verification code
  bingSiteVerification: '', // Add your Bing Webmaster verification code
};
