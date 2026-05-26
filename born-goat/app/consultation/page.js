import PageHero from '@/components/sections/PageHero';
import Reveal from '@/components/ui/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';
import LeadForm from '@/components/forms/LeadForm';

export const metadata = {
  title: 'Book a Consultation',
  description:
    'Book a 45-minute consultation with a senior partner at Born GOAT. Three new clients per quarter. The first conversation is free, unhurried, and structured to be useful.',
  alternates: { canonical: '/consultation' }
};

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: 'BORN GOAT', href: '/' },
          { label: 'Consultation' }
        ]}
        eyebrow="THE FIRST CONVERSATION"
        title="FORTY-FIVE MINUTES. NO PITCH."
        italicWord="NO PITCH"
        lede="A 45-minute call with a senior partner. We listen to the brief, ask the questions that matter, and tell you honestly whether this is the right firm for the work."
      />

      <section className="py-[80px] max-md:py-12 bg-obsidian">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <div className="grid grid-cols-[1fr_1.2fr] max-lg:grid-cols-1 gap-16 max-lg:gap-10 items-start">
            {/* SIDEBAR */}
            <Reveal>
              <div className="sticky top-32 max-lg:static space-y-10">
                <div>
                  <Eyebrow className="mb-7">WHAT THE CALL IS</Eyebrow>
                  <h2 className="font-display text-[clamp(36px,4.5vw,56px)] leading-[0.95] tracking-cinematic uppercase mt-7 mb-7">
                    A FIRST READ,
                    <br />
                    <span className="text-gold">NOT A PITCH.</span>
                  </h2>
                  <p className="text-[16px] text-titanium leading-[1.75] mb-7">
                    Most agencies use a first call to sell. We use it to
                    diagnose. By the end of 45 minutes we will both know
                    whether the work is a fit — and if it is not, we will
                    point you to who we would call instead.
                  </p>
                </div>

                <div className="border-t border-line pt-8 space-y-8">
                  <div>
                    <div className="font-mono text-[10px] tracking-extra-wide uppercase text-gold mb-2">
                      WHAT YOU LEAVE WITH
                    </div>
                    <ul className="space-y-3 text-[14px] text-titanium leading-[1.65]">
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-0 text-gold">◆</span>
                        A clear read on whether the brief is workable
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-0 text-gold">◆</span>
                        A scoped proposal within five working days if there is fit
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-0 text-gold">◆</span>
                        A reading list and one or two operating notes either way
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-0 text-gold">◆</span>
                        If we are not the right firm, a named referral
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-mono text-[10px] tracking-extra-wide uppercase text-gold mb-2">
                      WHO YOU SPEAK TO
                    </div>
                    <p className="text-[14px] text-titanium leading-[1.65]">
                      A senior partner, personally. The same person who would lead the engagement if you become a client.
                    </p>
                  </div>

                  <div>
                    <div className="font-mono text-[10px] tracking-extra-wide uppercase text-gold mb-2">
                      WHO IT IS FOR
                    </div>
                    <p className="text-[14px] text-titanium leading-[1.65]">
                      Athletes mid-career, league founders, sports brand operators, federations, and serious sports startups. Budgets typically ₹3L/month and up.
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
