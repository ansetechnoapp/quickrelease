import { seoConfig } from './seo';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Déblocage Device',
  url: seoConfig.baseUrl,
  logo: `${seoConfig.baseUrl}/footer-logo2.png`,
  description: 'Service professionnel de déblocage iPhone iCloud. Rapide, sécurisé et garanti.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['French'],
    areaServed: 'FR',
  },
  sameAs: [
    // Add your social media URLs here
    // 'https://www.facebook.com/deblocage-device',
    // 'https://twitter.com/deblocage_device',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${seoConfig.baseUrl}/#business`,
  name: 'Déblocage Device',
  description: 'Service professionnel de déblocage iPhone iCloud. Rapide, sécurisé et garanti.',
  url: seoConfig.baseUrl,
  telephone: '+33-XXX-XXX-XXX', // Replace with actual phone number
  priceRange: '€€',
  openingHours: 'Mo-Su 00:00-23:59',
  serviceArea: {
    '@type': 'Country',
    name: 'France',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de déblocage',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Déblocage iPhone iCloud',
          description: 'Service de déblocage iCloud pour iPhone, rapide et sécurisé',
        },
      },
    ],
  },
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Déblocage iPhone iCloud',
  description: 'Service professionnel de déblocage iPhone iCloud. Rapide, sécurisé et garanti. Débloquez votre iPhone en moins de 24h.',
  provider: {
    '@type': 'Organization',
    name: 'Déblocage Device',
    url: seoConfig.baseUrl,
  },
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de déblocage iPhone',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Déblocage iCloud iPhone',
          description: 'Déblocage rapide et sécurisé de votre iPhone bloqué par iCloud',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'EUR',
          price: 'Sur devis',
        },
      },
    ],
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${seoConfig.baseUrl}/#website`,
  url: seoConfig.baseUrl,
  name: 'Déblocage Device',
  description: 'Service professionnel de déblocage iPhone iCloud',
  publisher: {
    '@id': `${seoConfig.baseUrl}/#business`,
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
