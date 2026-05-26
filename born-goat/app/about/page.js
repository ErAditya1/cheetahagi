import PageHero from '@/components/sections/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';
import { SITE } from '@/lib/site';
import { principles as ps, team as ts, firmNumbers as fns } from '@/lib/content';

export const metadata = {
  title: 'The House',
  description:
    'About Born GOAT — an elite sports marketing house operated by Feeding Trends Media. Lucknow, Mumbai, Dubai.',
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: 'BORN GOAT', href: '/' },
          { label: 'The House' }
        ]}
        eyebrow="THE HOUSE"
        title="A SMALL HOUSE BUILT FOR PERMANENT WORK."
        italicWord="PERMANENT WORK"
        lede="Born GOAT is the sports marketing arm of Feeding Trends Media. We run a small partnership — three new clients a quarter, six disciplines, one signature on the work."
      />

      {/* THESIS */}
      <section className="py-[140px] max-md:py-20 bg-obsidian">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-20 max-w-[920px]">
            <Eyebrow className="mb-7">THE THESIS · I</Eyebrow>
            <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              MOST SPORTS MARKETING IN INDIA IS GOOD AT{' '}
              <span className="text-gold">VISIBILITY.</span>
              <br />
              WE ARE BUILT FOR <span className="text-gold">INEVITABILITY.</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 max-w-[1100px]">
              <p className="text-[17px] text-titanium leading-[1.75]">
                The Indian sports economy has reached the scale where building a
                career, a league, or a brand requires more than coverage. It
                requires a coordinated strategy — narrative, press, identity,
                sponsorship, crisis, amplification — operating as one piece, not
                six vendors with overlapping invoices.
              </p>
              <p className="text-[17px] text-titanium leading-[1.75]">
                We built the firm we wanted to hire when we were on the client
                side. Senior-partner-led engagements. Three new clients a
                quarter. Outcomes measured in pipeline and standing, not reach
                and PR slides. The model is unusual on purpose.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-[140px] max-md:py-20 bg-obsidian-800 border-t border-line">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-20 max-w-[920px]">
            <Eyebrow className="mb-7">OPERATING PRINCIPLES · II</Eyebrow>
            <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              SIX RULES <span className="text-gold">WE LIVE</span> BY.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-px bg-line border border-line">
            {ps.map((pr, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-obsidian-800 p-12 max-sm:p-7 h-full">
                  <div className="font-display text-5xl text-gold leading-none mb-7 tracking-cinematic">
                    {pr.roman}
                  </div>
                  <h3 className="font-display text-[26px] tracking-cinematic uppercase mb-4 text-white">
                    {pr.title}
                  </h3>
                  <p className="text-[15px] text-titanium leading-[1.7]">
                    {pr.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-[140px] max-md:py-20 bg-obsidian border-t border-line">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-20 max-w-[920px]">
            <Eyebrow className="mb-7">THE PARTNERSHIP · III</Eyebrow>
            <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              THE PEOPLE
              <br />
              ON THE <span className="text-gold">WORK.</span>
            </h2>
            <p className="text-titanium text-[17px] leading-[1.7] max-w-[620px] mt-7">
              A senior partner leads every engagement. Names on the door are
              names on the work — there is no junior-team handoff after the
              pitch.
            </p>
          </Reveal>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-px bg-line border border-line">
            {ts.map((person, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-obsidian-800 p-10 max-sm:p-7 h-full flex flex-col">
                  <div className="w-20 h-20 border border-gold rounded-full flex items-center justify-center mb-7 font-display text-2xl text-gold tracking-cinematic">
                    {person.initials}
                  </div>
                  <h3 className="font-display text-[24px] tracking-cinematic uppercase text-white mb-1.5 leading-none">
                    {person.name}
                  </h3>
                  <div className="font-mono text-[10px] tracking-extra-wide uppercase text-gold mb-5">
                    {person.role}
                  </div>
                  <p className="text-[14px] text-titanium leading-[1.65] flex-grow">
                    {person.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FIRM NUMBERS */}
      <section className="py-[140px] max-md:py-20 bg-obsidian-800 border-t border-line">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-20 max-w-[920px]">
            <Eyebrow className="mb-7">THE NUMBERS · IV</Eyebrow>
            <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              THE LEDGER, <span className="text-gold">UPDATED.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-px bg-line border border-line">
            {fns.map((n, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-obsidian-800 p-12 max-sm:p-7">
                  <div className="font-display text-[72px] leading-none tracking-cinematic text-gold mb-4">
                    {n.value}
                  </div>
                  <div className="text-[14px] text-titanium leading-[1.5]">
                    {n.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        eyebrow="WORK WITH THE HOUSE"
        heading="THREE NEW CLIENTS"
        goldHeading="A QUARTER."
        sub="Bring us a brief. If we are the right firm, we will say so. If we are not, we will tell you that too."
      />
    </>
  );
}
