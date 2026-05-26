import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Manifesto from '@/components/sections/Manifesto';
import PracticeGrid from '@/components/sections/PracticeGrid';
import JourneyFunnel from '@/components/sections/JourneyFunnel';
import Testimonial from '@/components/sections/Testimonial';
import DomainsGrid from '@/components/sections/DomainsGrid';
import FeaturedWork from '@/components/sections/FeaturedWork';
import JournalPreview from '@/components/sections/JournalPreview';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata = {
  title: 'BORN GOAT · Elite Sports Marketing House',
  description:
    'An elite sports marketing house for athletes, leagues and brands engineered for legacy. Narrative, PR, brand, sponsorship, crisis, amplification — one signature.',
  alternates: { canonical: '/' }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Manifesto />
      <PracticeGrid />
      <JourneyFunnel />
      <Testimonial />
      <DomainsGrid />
      <FeaturedWork />
      <JournalPreview />
      <ContactCTA
        heading={
          <>
            IF YOU ARE BUILDING
            <br />
            SOMETHING THAT SHOULD
          </>
        }
        goldHeading="OUTLIVE THE SEASON — TALK TO US."
      />
    </>
  );
}
