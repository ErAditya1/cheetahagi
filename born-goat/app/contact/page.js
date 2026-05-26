import PageHero from '@/components/sections/PageHero';
import Reveal from '@/components/ui/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';
import LeadForm from '@/components/forms/LeadForm';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description:
    'Speak to Born GOAT. The first conversation is unhurried, free, and structured to be useful — whether or not we end up working together.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: 'BORN GOAT', href: '/' },
          { label: 'Contact' }
        ]}
        eyebrow="CONTACT"
        title="THREE WAYS TO REACH THE HOUSE."
        italicWord="REACH THE HOUSE"
        lede="A senior partner reads every inbound brief personally. Reply within 24 hours, usually faster. No bots, no junior triage."
      />

      <section className="py-[100px] max-md:py-16 bg-slate-950">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          {/* CHANNELS */}
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px bg-line border border-line mb-20 max-md:mb-12">
            <Reveal>
              <div className="bg-slate-900 p-12 max-sm:p-7">
                <div className="font-display text-3xl text-sports-pink mb-7 tracking-cinematic leading-none">
                  I
                </div>
                <h3 className="font-display text-[26px] tracking-cinematic uppercase mb-3 text-white">
                  EMAIL
                </h3>
                <p className="text-[14px] text-titanium leading-[1.7] mb-6">
                  Best for considered briefs. Reach a partner directly. Usually
                  read within hours.
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-mono text-[14px] text-sports-pink hover:text-sports-pink-bright tracking-[0.05em] border-b border-line pb-0.5 transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="bg-slate-900 p-12 max-sm:p-7">
                <div className="font-display text-3xl text-sports-pink mb-7 tracking-cinematic leading-none">
                  II
                </div>
                <h3 className="font-display text-[26px] tracking-cinematic uppercase mb-3 text-white">
                  WHATSAPP
                </h3>
                <p className="text-[14px] text-titanium leading-[1.7] mb-6">
                  Best for crises, time-sensitive briefs, or short qualifying
                  questions. Reach the desk in minutes.
                </p>
                <a
                  href="https://wa.me/+919999999999"
                  target="_blank"
                  rel="noopener"
                  className="font-mono text-[14px] text-sports-pink hover:text-sports-pink-bright tracking-[0.05em] border-b border-line pb-0.5 transition-colors"
                >
                  +91 99999 99999
                </a>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="bg-slate-900 p-12 max-sm:p-7">
                <div className="font-display text-3xl text-sports-pink mb-7 tracking-cinematic leading-none">
                  III
                </div>
                <h3 className="font-display text-[26px] tracking-cinematic uppercase mb-3 text-white">
                  OFFICE
                </h3>
                <p className="text-[14px] text-titanium leading-[1.7] mb-6">
                  By appointment only, at our Lucknow office. We also meet
                  clients in Mumbai and Dubai by arrangement.
                </p>
                <div className="font-mono text-[12px] text-titanium tracking-wide-cap uppercase leading-[1.8]">
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
                <Eyebrow className="mb-7">SEND A BRIEF</Eyebrow>
                <h2 className="font-display text-[clamp(40px,5.5vw,72px)] leading-[0.95] tracking-cinematic uppercase mt-7 mb-8">
                  THE BRIEF FORM,
                  <br />
                  <span className="text-sports-pink">FOUR STEPS.</span>
                </h2>
                <p className="text-[16px] text-titanium leading-[1.75] mb-9 max-w-[480px]">
                  Tell us who you are, what you are building, and where the
                  brief sits in its arc. By the time you reach the final step,
                  we will have enough to write back something useful.
                </p>
                <div className="border-l-2 border-line pl-6 space-y-5">
                  <div>
                    <div className="font-mono text-[10px] tracking-extra-wide uppercase text-sports-pink mb-1">
                      READ BY
                    </div>
                    <div className="text-titanium-bright text-[15px]">
                      A senior partner, personally. Never a bot, never a junior
                      account handler.
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-extra-wide uppercase text-sports-pink mb-1">
                      REPLY WITHIN
                    </div>
                    <div className="text-titanium-bright text-[15px]">
                      24 hours on weekdays, 48 hours on weekends.
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-extra-wide uppercase text-sports-pink mb-1">
                      WHAT HAPPENS NEXT
                    </div>
                    <div className="text-titanium-bright text-[15px]">
                      A short written reply, then a calendar link for a
                      45-minute first conversation if the fit looks right.
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
