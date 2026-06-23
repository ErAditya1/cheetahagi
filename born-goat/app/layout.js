import { Bebas_Neue, Oswald, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import OrgSchema from '@/components/ui/OrgSchema';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});

const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap'
});

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-data',
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://borngoat.com'),
  title: {
    default: 'Born Goat · Elite Athlete Management & Brand Representation',
    template: '%s · Born Goat'
  },
  description:
    'The premier digital home of elite athlete representation. We manage, protect, and grow the careers of world-class champions and emerging talent across all major sports.',
  keywords: [
    'athlete management',
    'sports agency',
    'brand representation',
    'sports sponsorships',
    'contract negotiation',
    'elite athletes',
    'career planning',
    'sports marketing'
  ],
  authors: [{ name: 'Born Goat' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://borngoat.com',
    siteName: 'Born Goat',
    title: 'Born Goat · Elite Athlete Management & Brand Representation',
    description:
      'The premier digital home of elite athlete representation. We manage, protect, and grow the careers of world-class champions and emerging talent.',
    images: [
      {
        url: '/og-default.svg',
        width: 1200,
        height: 630,
        alt: 'Born Goat — Elite Athlete Agency'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Born Goat · Elite Athlete Management & Brand Representation',
    description:
      'The premier digital home of elite athlete representation. We manage, protect, and grow the careers of world-class champions and emerging talent.',
    images: ['/og-default.svg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${oswald.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-void text-primary font-body">
        <OrgSchema />
        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}

