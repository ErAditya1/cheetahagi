'use client';

import { useUTM } from '@/hooks/useUTM';
import { HeroSection } from '@/components/HeroSection';
import { ExitIntentPopup } from '@/components/ExitIntentPopup';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';

export default function LandingPage() {
  const utm = useUTM();

  return (
    <>
      <HeroSection utm={utm} />
      <ExitIntentPopup />
      <StickyMobileCTA />
    </>
  );
}
