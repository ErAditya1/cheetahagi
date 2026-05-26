export const SITE = {
  name: 'BORN GOAT',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://borngoat.com',
  tagline: 'Born Greatest of All Time',
  description: 'An elite sports marketing house for athletes, leagues and brands engineered for legacy.',
  email: 'hello@borngoat.com',
  cities: ['Lucknow', 'Mumbai', 'Dubai'],
  founder: 'Yash Srivastava',
  founded: 2026
};

export const NAV_ITEMS = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'services', label: 'Practice', href: '/services' },
  { key: 'work', label: 'Work', href: '/case-studies' },
  { key: 'blog', label: 'Journal', href: '/blog' },
  { key: 'about', label: 'House', href: '/about' },
  { key: 'faq', label: 'FAQ', href: '/faq' }
];

export const FOOTER_LINKS = {
  practice: [
    { label: 'Narrative', href: '/services/narrative-engineering' },
    { label: 'Sports PR', href: '/services/sports-pr-editorial' },
    { label: 'Athlete Brand', href: '/services/athlete-league-brand' },
    { label: 'Sponsorship', href: '/services/sponsorship-strategy' },
    { label: 'Crisis Response', href: '/services/crisis-reputation' }
  ],
  house: [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Journal', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' }
  ],
  connect: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'hello@borngoat.com', href: 'mailto:hello@borngoat.com' }
  ]
};
