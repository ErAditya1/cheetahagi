// Schema generators — output JSON-LD for AEO/GEO citation surfaces.

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.longDescription,
    provider: {
      '@type': 'Organization',
      name: 'Cheetah AGI',
      url: 'https://cheetahagi.com',
    },
    areaServed: 'Worldwide',
    serviceType: service.tagline,
  };
}

export function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Cheetah AGI' },
    publisher: {
      '@type': 'Organization',
      name: 'Cheetah AGI',
      logo: { '@type': 'ImageObject', url: 'https://cheetahagi.com/icon.png' },
    },
    mainEntityOfPage: `https://cheetahagi.com/blog/${post.slug}`,
  };
}

export function productSchema(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.description,
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      description: product.pricing,
    },
    operatingSystem: 'Web',
  };
}

export function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: `https://cheetahagi.com${c.href}`,
    })),
  };
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
