import PageHero from '@/components/sections/PageHero';
import Reveal from '@/components/ui/Reveal';
import LeadForm from '@/components/forms/LeadForm';

export const metadata = {
  title: 'Book a Consultation',
  description:
    'Book a private consultation with a senior partner at Born Goat. The first conversation is free, unhurried, and structured to build your sports legacy.',
  alternates: { canonical: '/consultation' }
};

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: 'Born Goat', href: '/' },
          { label: 'Consultation' }
        ]}
        eyebrow="THE FIRST CONVERSATION"
        title="PRIVATE INTAKE. CONCRETE ADVICE."
        italicWord="CONCRETE ADVICE"
        lede="A 45-minute private intake call with a senior partner. We review your current athletic status, discuss representation fit, and outline potential career milestones."
      />

      <section className="py-[80px] max-md:py-12 bg-void animate-fade-in">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <div className="grid grid-cols-[1fr_1.2fr] max-lg:grid-cols-1 gap-16 max-lg:gap-10 items-start">
            {/* SIDEBAR */}
            <Reveal>
              <div className="sticky top-32 max-lg:static space-y-10">
                <div>
                  <span className="text-label text-xs block mb-4">WHAT THE CALL IS</span>
                  <h2 className="font-heading text-[clamp(36px,4.5vw,50px)] leading-[0.95] tracking-cinematic uppercase mt-7 mb-7 text-primary">
                    A DIAGNOSIS,
                    <br />
                    <span className="text-gold-gradient">NOT A PITCH.</span>
                  </h2>
                  <p className="text-[16px] text-secondary leading-[1.75] mb-7">
                    Most representation firms use a first call to sell. We use it to diagnose. By the end of 45 minutes we will both know whether there is a fit — and if there is not, we will refer you to alternative partners.
                  </p>
                </div>

                <div className="border-t border-[var(--border-subtle)] pt-8 space-y-8">
                  <div>
                    <div className="font-mono text-[10px] tracking-extra-wide uppercase text-[var(--gold-primary)] mb-2 font-bold">
                      WHAT YOU LEAVE WITH
                    </div>
                    <ul className="space-y-3 text-[14px] text-secondary leading-[1.65] pl-0 list-none">
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-0 text-[var(--gold-primary)]">◆</span>
                        A realistic assessment of your market value
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-0 text-[var(--gold-primary)]">◆</span>
                        Initial recommendations for brand positioning
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-0 text-[var(--gold-primary)]">◆</span>
                        If we are not a fit, a direct referral to a trusted agent
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-mono text-[10px] tracking-extra-wide uppercase text-[var(--gold-primary)] mb-2 font-bold">
                      WHO YOU SPEAK TO
                    </div>
                    <p className="text-[14px] text-secondary leading-[1.65]">
                      A senior partner, personally. The same representative who coordinates transfers and endorsement campaigns.
                    </p>
                  </div>

                  <div>
                    <div className="font-mono text-[10px] tracking-extra-wide uppercase text-[var(--gold-primary)] mb-2 font-bold">
                      WHO IT IS FOR
                    </div>
                    <p className="text-[14px] text-secondary leading-[1.65]">
                      Elite athletes, promising youth prospects in professional academies, and national-level sports figures looking to scale their commercial portfolios.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* FORM */}
            <Reveal delay={120}>
              <LeadForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
