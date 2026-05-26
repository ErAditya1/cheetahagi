const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://borngoat.com';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Born GOAT',
    alternateName: 'BORN GOAT',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'An elite sports marketing house for athletes, leagues and brands engineered for legacy.',
    foundingDate: '2026',
    foundingLocation: 'Lucknow, India',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Feeding Trends Media Pvt. Ltd.'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'New business',
      email: 'hello@borngoat.com',
      availableLanguage: ['en', 'hi']
    },
    sameAs: []
  };
}

export function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title.replace(/<[^>]+>/g, ''),
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Born GOAT'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Born GOAT',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`
    },
    articleSection: post.category
  };
}

export function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Born GOAT',
      url: SITE_URL
    },
    areaServed: { '@type': 'Country', name: 'India' }
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`
    }))
  };
}

export function faqPageSchema(faqs) {
  // flatten section structure into mainEntity list
  const items = [];
  faqs.forEach(section => {
    section.items.forEach(item => {
      items.push({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a
        }
      });
    });
  });
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items
  };
}

export function caseStudySchema(cs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${cs.client} — Case Study`,
    description: cs.summary,
    author: { '@type': 'Organization', name: 'Born GOAT' },
    about: cs.client,
    dateCreated: cs.year
  };
}
