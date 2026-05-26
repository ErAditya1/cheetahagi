import { services, caseStudies, blogPosts } from '@/lib/content';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://borngoat.com';

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/blog',
    '/faq',
    '/contact',
    '/consultation'
  ].map(path => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : 0.8
  }));

  const serviceRoutes = services.map(s => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  const caseRoutes = caseStudies.map(c => ({
    url: `${SITE_URL}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  const blogRoutes = blogPosts.map(p => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes, ...blogRoutes];
}
