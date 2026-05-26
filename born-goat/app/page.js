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
  title: 'BORN GOAT · Live Sports Hub & Real-time Analytics',
  description:
    'Next-gen sports coverage, analytics, and live dashboards. Tracking the world’s elite leagues, teams, and athletes in real time.',
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
            WANT TO CONNECT
            <br />
            YOUR LEAGUE TO REAL-TIME
          </>
        }
        goldHeading="ANALYTICS & FEEDS? INTEGRATE."
      />
    </>
  );
}
