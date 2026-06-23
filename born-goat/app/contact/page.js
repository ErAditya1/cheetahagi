import PageHero from '@/components/sections/PageHero';
import Reveal from '@/components/ui/Reveal';
import LeadForm from '@/components/forms/LeadForm';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description:
    'Speak to Born Goat. The first conversation is unhurried, private, and structured to be useful — whether or not we end up working together.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: 'Born Goat', href: '/' },
          { label: 'Contact' }
        ]}
        eyebrow="CONTACT"
        title="THREE WAYS TO REACH OUR DESK."
        italicWord="REACH OUR DESK"
        lede="A senior partner reads every representation inquiry and sponsorship proposal personally. Expect a reply within 24 hours."
      />

      <section className="py-[100px] max-md:py-16 bg-void">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          {/* CHANNELS */}
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)] mb-20 max-md:mb-12">
            <Reveal>
              <div className="bg-dark p-12 max-sm:p-7 h-full">
                <div className="font-display text-3xl text-[var(--gold-primary)] mb-7 tracking-cinematic leading-none">
                  I
                </div>
                <h3 className="font-heading text-[26px] tracking-cinematic uppercase mb-3 text-primary">
                  EMAIL
                </h3>
                <p className="text-[14px] text-secondary leading-[1.7] mb-6">
                  Best for considered briefs and sponsorships. Reach a partner directly.
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-mono text-[14px] text-[var(--gold-primary)] hover:text-[var(--gold-bright)] tracking-[0.05em] border-b border-[var(--border-subtle)] pb-0.5 transition-colors text-decoration-none font-bold"
                >
                  {SITE.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="bg-dark p-12 max-sm:p-7 h-full">
                <div className="font-display text-3xl text-[var(--gold-primary)] mb-7 tracking-cinematic leading-none">
                  II
                </div>
                <h3 className="font-heading text-[26px] tracking-cinematic uppercase mb-3 text-primary">
                  WHATSAPP
                </h3>
                <p className="text-[14px] text-secondary leading-[1.7] mb-6">
                  Best for urgent press requests, bout notifications, or immediate briefings.
                </p>
                <a
                  href="https://wa.me/+919999999999"
                  target="_blank"
                  rel="noopener"
                  className="font-mono text-[14px] text-[var(--gold-primary)] hover:text-[var(--gold-bright)] tracking-[0.05em] border-b border-[var(--border-subtle)] pb-0.5 transition-colors text-decoration-none font-bold"
                >
                  +91 99999 99999
                </a>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="bg-dark p-12 max-sm:p-7 h-full">
                <div className="font-display text-3xl text-[var(--gold-primary)] mb-7 tracking-cinematic leading-none">
                  III
                </div>
                <h3 className="font-heading text-[26px] tracking-cinematic uppercase mb-3 text-primary">
                  OFFICES
                </h3>
                <p className="text-[14px] text-secondary leading-[1.7] mb-6">
                  By appointment only. We meet clients at our principal suites in Hazratganj, Mumbai, or Dubai.
                </p>
                <div className="font-mono text-[12px] text-muted tracking-wide-cap uppercase leading-[1.8]">
                  HAZRATGANJ, LUCKNOW
                  <br />
                  UTTAR PRADESH 226001 · IN
                </div>
              </div>
            </Reveal>
          </div>

          {/* FORM */}
          <div className="grid grid-cols-[1.2fr_1fr] max-lg:grid-cols-1 gap-16 max-lg:gap-10 items-start">
            <Reveal>
              <div>
                <span className="text-label text-xs block mb-4">SEND A BRIEF</span>
                <h2 className="font-heading text-[clamp(40px,5.5vw,72px)] leading-[0.95] tracking-cinematic uppercase mt-7 mb-8 text-primary">
                  REPRESENTATION,
                  <br />
                  <span className="text-gold-gradient">APPLY NOW.</span>
                </h2>
                <p className="text-[16px] text-secondary leading-[1.75] mb-9 max-w-[480px]">
                  Tell us who you are, your current achievements, and what sport you represent. We will coordinate a callback within 24 hours.
                </p>
                <div className="border-l-2 border-[var(--border-subtle)] pl-6 space-y-5">
                  <div>
                    <div className="font-mono text-[10px] tracking-extra-wide uppercase text-[var(--gold-primary)] mb-1 font-bold">
                      REVIEWED BY
                    </div>
                    <div className="text-primary text-[15px]">
                      A senior sports representative, personally. Never an automated bot.
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-extra-wide uppercase text-[var(--gold-primary)] mb-1 font-bold">
                      FEEDBACK PERIOD
                    </div>
                    <div className="text-primary text-[15px]">
                      Within 24 hours on weekdays.
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-extra-wide uppercase text-[var(--gold-primary)] mb-1 font-bold">
                      NEXT PHASE
                    </div>
                    <div className="text-primary text-[15px]">
                      A written consultation follow-up, then a private onboarding meeting.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <LeadForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
