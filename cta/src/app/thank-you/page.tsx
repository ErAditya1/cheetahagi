import type { Metadata } from 'next';
import { ThankYouCard } from '@/components/ThankYouCard';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';

export const metadata: Metadata = {
  title: 'You\'re In! | Join WhatsApp Community',
  description:
    'You have successfully joined our newsletter. Join our exclusive WhatsApp community to access premium resources.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <ThankYouCard />
      <StickyMobileCTA />
    </>
  );
}
