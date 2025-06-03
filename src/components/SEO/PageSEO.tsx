'use client';

interface PageSEOProps {
  structuredData?: object | object[];
}

export default function PageSEO({
  structuredData
}: PageSEOProps) {
  // This component now only handles structured data injection
  // The main SEO is handled by Next.js metadata API in layout.tsx

  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              Array.isArray(structuredData) ? structuredData : [structuredData]
            ),
          }}
        />
      )}
    </>
  );
}
