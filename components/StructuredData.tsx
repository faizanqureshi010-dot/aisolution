export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'AI Solution Company',
          url: 'https://aisolutioncompany.com',
          logo: 'https://aisolutioncompany.com/logo.jpeg',
          email: 'info@aisolutioncompany.com',
        }),
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.label,
            item: item.href ? `https://aisolutioncompany.com${item.href}` : undefined,
          })),
        }),
      }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }),
      }}
    />
  );
}

export function SoftwareApplicationSchema({ name, description }: { name: string; description: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name,
          description,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
        }),
      }}
    />
  );
}
