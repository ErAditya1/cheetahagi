import { Bebas_Neue, Anton, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import OrgSchema from '@/components/ui/OrgSchema';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap'
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap'
});

const inter = Inter_Tight({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const mono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://borngoat.com'),
  title: {
    default: 'BORN GOAT · Elite Sports Marketing House',
    template: '%s · BORN GOAT'
  },
  description:
    'An elite sports marketing house for athletes, leagues and brands engineered for legacy. Narrative, PR, brand, sponsorship, crisis, amplification — one signature.',
  keywords: [
    'sports marketing',
    'athlete branding',
    'sports PR',
    'sponsorship strategy',
    'sports crisis management',
    'league formation',
    'Indian sports agency',
    'premium sports marketing'
  ],
  authors: [{ name: 'Born GOAT' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://borngoat.com',
    siteName: 'BORN GOAT',
    title: 'BORN GOAT · Elite Sports Marketing House',
    description:
      'An elite sports marketing house for athletes, leagues and brands engineered for legacy.',
    images: [
      {
        url: '/og-default.svg',
        width: 1200,
        height: 630,
        alt: 'BORN GOAT — Born Greatest of All Time'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BORN GOAT · Elite Sports Marketing House',
    description:
      'An elite sports marketing house for athletes, leagues and brands engineered for legacy.',
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
    <html lang="en" className={`${bebas.variable} ${anton.variable} ${inter.variable} ${mono.variable}`}>
      <body className="bg-obsidian text-white">
        <OrgSchema />
        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
