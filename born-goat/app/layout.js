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
    default: 'BORN GOAT · Live Sports Hub & Real-time Analytics',
    template: '%s · BORN GOAT'
  },
  description:
    'Next-gen sports coverage, analytics, and live dashboards. Tracking the world’s elite leagues, teams, and athletes in real time.',
  keywords: [
    'live sports',
    'sports analytics',
    'live scoreboards',
    'cricket tracker',
    'sports data',
    'league rankings',
    'Indian sports dashboard',
    'premium sports platform'
  ],
  authors: [{ name: 'Born GOAT' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://borngoat.com',
    siteName: 'BORN GOAT',
    title: 'BORN GOAT · Live Sports Hub & Real-time Analytics',
    description:
      'Next-gen sports coverage, analytics, and live dashboards. Tracking the world’s elite leagues, teams, and athletes in real time.',
    images: [
      {
        url: '/og-default.svg',
        width: 1200,
        height: 630,
        alt: 'BORN GOAT — Live Sports Hub'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BORN GOAT · Live Sports Hub & Real-time Analytics',
    description:
      'Next-gen sports coverage, analytics, and live dashboards. Tracking the world’s elite leagues, teams, and athletes in real time.',
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
      <body className="bg-slate-950 text-white">
        <OrgSchema />
        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
