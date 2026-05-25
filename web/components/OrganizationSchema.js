// Renders organization-level JSON-LD globally for Google Knowledge Graph + AEO citation.
export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cheetah AGI',
    legalName: 'Feeding Trends Media Pvt. Ltd.',
    url: 'https://cheetahagi.com',
    logo: 'https://cheetahagi.com/icon.png',
    description:
      'AI consulting, automation engineering, and funnel building for businesses transitioning to outcome-based operations.',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lucknow',
      addressRegion: 'UP',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'hello@cheetahagi.com',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://www.linkedin.com/company/cheetah-agi',
      'https://twitter.com/cheetahagi',
      'https://www.instagram.com/yashsrivastava_',
    ],
    areaServed: { '@type': 'Country', name: 'Worldwide' },
    knowsAbout: [
      'Artificial Intelligence',
      'Sales Automation',
      'AI Agents',
      'Funnel Engineering',
      'Generative Engine Optimization',
      'Answer Engine Optimization',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
