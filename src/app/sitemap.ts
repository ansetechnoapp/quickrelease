import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deblocage-device.com';

// Function to get all MDX files from a directory
const getMdxFiles = (dir: string): string[] => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) return [];

  return fs.readdirSync(fullPath)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace('.mdx', ''));
};

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/demarrer`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Dynamic routes from MDX files
  const frPages = getMdxFiles('pages/fr').map(page => ({
    url: `${baseUrl}/fr/${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Important static pages
  const importantPages = [
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  return [...staticRoutes, ...frPages, ...importantPages];
}
