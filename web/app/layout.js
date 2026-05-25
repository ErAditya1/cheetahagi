import { Bricolage_Grotesque, JetBrains_Mono, Fraunces } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import ExitIntent from '@/components/ExitIntent';
import OrganizationSchema from '@/components/OrganizationSchema';

// Distinctive type pairing — variable widths give a kinetic feel on hover
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  style: ['italic', 'normal'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://cheetahagi.com'),
  title: {
    default: 'Cheetah AGI — AI Consulting, Automation & Funnel Engineering',
    template: '%s | Cheetah AGI',
  },
  description:
    'We build AI systems that close. Outcome-based consulting for businesses transitioning to automated sales funnels, AI agents, and intelligent operations. Speed + Intelligence.',
  keywords: [
    'AI consulting',
    'AI automation',
    'AI agents',
    'sales funnel automation',
    'AI sales agents',
    'business AI transformation',
    'AEO',
    'GEO',
    'generative engine optimization',
    'AI consultancy India',
  ],
  authors: [{ name: 'Cheetah AGI' }],
  creator: 'Cheetah AGI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cheetahagi.com',
    siteName: 'Cheetah AGI',
    title: 'Cheetah AGI — AI systems that close',
    description:
      'Outcome-based AI consulting. Funnels that convert. Agents that operate. Automation that compounds.',
    images: [{ url: '/og-default.svg', width: 1200, height: 630, alt: 'Cheetah AGI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheetah AGI',
    description: 'AI systems that close.',
    images: ['/og-default.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
};

export const viewport = {
  themeColor: '#08080C',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${mono.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        <OrganizationSchema />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-strike focus:text-ink-950 focus:px-4 focus:py-2 focus:rounded-full">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
        <ExitIntent />
      </body>
    </html>
  );
}
