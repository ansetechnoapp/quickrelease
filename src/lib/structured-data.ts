import { seoConfig } from './seo';

// Define common types
interface Image {
  '@type': 'ImageObject';
  url: string;
  width: number;
  height: number;
}

// Define default images
const defaultImage: Image = {
  '@type': 'ImageObject',
  url: `${seoConfig.baseUrl}/footer-logo2.png`,
  width: 512,
  height: 512,
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${seoConfig.baseUrl}/#organization`,
  name: 'Déblocage Device',
  url: seoConfig.baseUrl,
  logo: defaultImage,
  image: defaultImage,
  description: 'Service professionnel de déblocage iPhone iCloud. Rapide, sécurisé et garanti.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['French'],
    areaServed: 'FR',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'FR',
    addressLocality: 'Paris',
    addressRegion: 'Île-de-France',
  },
  sameAs: [
    // Add your social media URLs here when available
    // 'https://www.facebook.com/deblocage-device',
    // 'https://twitter.com/deblocage_device',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${seoConfig.baseUrl}/#website`,
  url: seoConfig.baseUrl,
  name: 'Déblocage Device',
  description: 'Service professionnel de déblocage iPhone iCloud',
  publisher: {
    '@id': `${seoConfig.baseUrl}/#organization`,
  },
  potentialAction: [
    {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${seoConfig.baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  ],
  inLanguage: 'fr-FR',
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${seoConfig.baseUrl}/#business`,
  name: 'Déblocage Device',
  image: defaultImage,
  url: seoConfig.baseUrl,
  telephone: '', // Add when available
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'FR',
    addressLocality: 'Paris',
    addressRegion: 'Île-de-France',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '', // Add when available
    longitude: '', // Add when available
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
    ],
    opens: '09:00',
    closes: '18:00',
  },
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${seoConfig.baseUrl}/#service`,
  name: 'Déblocage iPhone iCloud',
  description: 'Service professionnel de déblocage iPhone iCloud. Rapide, sécurisé et garanti.',
  provider: {
    '@id': `${seoConfig.baseUrl}/#organization`,
  },
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de Déblocage iPhone',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Déblocage iCloud Standard',
          description: 'Service de déblocage iCloud pour iPhone en 24-48h',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Déblocage iCloud Express',
          description: 'Service de déblocage iCloud prioritaire en moins de 24h',
        },
      },
    ],
  },
};

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
