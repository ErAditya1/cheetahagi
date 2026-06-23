export const SITE = {
  name: 'Born Goat',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://borngoat.com',
  tagline: 'Elite Athlete Management & Legacy Building',
  description: 'The digital home of elite athlete representation — where champions are discovered, careers are built, and legacies are written.',
  email: 'hello@borngoat.com',
  cities: ['Mumbai', 'London', 'Dubai'],
  founder: 'Yash Srivastava',
  founded: 2018
};

export const NAV_ITEMS = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About Us', href: '/about' },
  { key: 'athletes', label: 'Athletes', href: '/athletes' },
  { key: 'services', label: 'Services', href: '/services' },
  { key: 'media', label: 'Media', href: '/blog' },
  { key: 'contact', label: 'Contact', href: '/contact' }
];

export const FOOTER_LINKS = {
  practice: [
    { label: 'Career Management', href: '/services' },
    { label: 'Brand Building', href: '/services' },
    { label: 'Marketing & Endorsements', href: '/services' },
    { label: 'Legal & Contracts', href: '/services' },
    { label: 'Financial Advisory', href: '/services' }
  ],
  house: [
    { label: 'About Us', href: '/about' },
    { label: 'Featured Athletes', href: '/athletes' },
    { label: 'News & Media', href: '/blog' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Apply as Athlete', href: '/contact' }
  ],
  connect: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'hello@borngoat.com', href: 'mailto:hello@borngoat.com' }
  ]
};
