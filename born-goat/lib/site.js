export const SITE = {
  name: 'BORN GOAT',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://borngoat.com',
  tagline: 'Live Sports Hub & Real-time Analytics',
  description: 'Next-gen sports coverage, analytics, and live dashboards. Tracking the world’s elite leagues, teams, and athletes in real time.',
  email: 'hello@borngoat.com',
  cities: ['Lucknow', 'Mumbai', 'Dubai'],
  founder: 'Yash Srivastava',
  founded: 2026
};

export const NAV_ITEMS = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'services', label: 'Live Center', href: '/services' },
  { key: 'work', label: 'Leagues', href: '/case-studies' },
  { key: 'blog', label: 'Insights', href: '/blog' },
  { key: 'about', label: 'Platform', href: '/about' },
  { key: 'faq', label: 'FAQ', href: '/faq' }
];

export const FOOTER_LINKS = {
  practice: [
    { label: 'Live Scoreboards', href: '/services/narrative-engineering' },
    { label: 'Analytics Engine', href: '/services/sports-pr-editorial' },
    { label: 'Player Stats IP', href: '/services/athlete-league-brand' },
    { label: 'League Commercials', href: '/services/sponsorship-strategy' },
    { label: 'Real-time War Rooms', href: '/services/crisis-reputation' }
  ],
  house: [
    { label: 'The Platform', href: '/about' },
    { label: 'Leagues & Cups', href: '/case-studies' },
    { label: 'News Insights', href: '/blog' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Support', href: '/contact' }
  ],
  connect: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'hello@borngoat.com', href: 'mailto:hello@borngoat.com' }
  ]
};
