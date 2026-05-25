import { PRODUCTS, CASE_STUDIES, BLOG_POSTS } from '@/lib/content';

const SITE = 'https://cheetahagi.com';

const SERVICES_SLUGS = [
  'ai-consulting',
  'automation',
  'funnel-building',
  'ai-agents',
  'geo-aeo',
  'outcome-engineering',
];

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { url: `${SITE}/`, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${SITE}/about`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${SITE}/services`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${SITE}/products`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${SITE}/blog`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${SITE}/case-studies`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${SITE}/faq`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${SITE}/contact`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${SITE}/consultation`, priority: 0.95, changeFrequency: 'monthly' },
  ].map((r) => ({ ...r, lastModified: now }));

  const serviceRoutes = SERVICES_SLUGS.map((slug) => ({
    url: `${SITE}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${SITE}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const caseRoutes = CASE_STUDIES.map((c) => ({
    url: `${SITE}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const blogRoutes = BLOG_POSTS.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...productRoutes, ...caseRoutes, ...blogRoutes];
}
