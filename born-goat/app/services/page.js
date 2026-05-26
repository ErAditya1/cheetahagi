import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';
import { services, engagements } from '@/lib/content';

export const metadata = {
  title: 'The Practice',
  description:
    'Six disciplines, one house. Narrative engineering, sports PR, athlete and league brand, sponsorship strategy, crisis and reputation, amplification and distribution.',
  alternates: { canonical: '/services' }
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: 'BORN GOAT', href: '/' },
          { label: 'The Practice' }
        ]}
        eyebrow="THE PRACTICE"
        title="SIX DISCIPLINES. ONE SIGNATURE."
        italicWord="ONE SIGNATURE"
        lede="Each practice can be retained on its own. Most of our long-term clients are on the full-house engagement — all six coordinated under a single strategy and a single senior partner."
      />

      {/* SERVICES */}
      <section className="py-[140px] max-md:py-20 bg-obsidian">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <div className="space-y-px bg-line border border-line">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 40}>
                <Link
                  href={`/services/${s.slug}`}
                  className="bg-obsidian-800 hover:bg-obsidian-700 p-12 max-sm:p-7 grid grid-cols-[120px_1fr_auto] max-md:grid-cols-1 gap-12 max-md:gap-6 items-start transition-colors duration-[400ms] cursor-pointer group block"
                >
                  <div className="font-display text-[72px] max-md:text-5xl text-titanium-deep leading-none tracking-cinematic transition-colors duration-[400ms] group-hover:text-gold">
                    {s.number}
                  </div>
                  <div>
                    <h3 className="font-display text-[clamp(28px,3.5vw,48px)] leading-[0.95] tracking-cinematic uppercase mb-4 text-white">
                      {s.title}
                    </h3>
                    <p className="text-titanium text-[16px] leading-[1.7] mb-4 max-w-[680px]">
                      <span className="text-gold italic font-medium">
                        {s.tagline}
                      </span>{' '}
                      {s.description}
                    </p>
                    <div className="flex gap-2 flex-wrap mt-5">
                      {s.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="font-mono text-[10px] tracking-wide-cap uppercase text-titanium-dim border border-line px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="self-center font-mono text-[11px] tracking-extra-wide uppercase text-gold flex items-center gap-2 max-md:mt-2">
                    READ MORE
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="py-[140px] max-md:py-20 bg-obsidian-800 border-t border-line">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-20 max-w-[920px]">
            <Eyebrow className="mb-7">ENGAGEMENT</Eyebrow>
            <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              HOW WE <span className="text-gold">WORK.</span>
            </h2>
            <p className="text-titanium text-[17px] leading-[1.7] max-w-[620px] mt-7">
              Three engagement structures. The right one depends on the brief —
              a first conversation will tell us which.
            </p>
          </Reveal>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
            {engagements.map((e, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className={`bg-obsidian p-10 max-sm:p-7 border ${
                    e.featured
                      ? 'border-gold relative shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(212,168,79,0.3)]'
                      : 'border-line'
                  } h-full flex flex-col`}
                >
                  {e.featured && (
                    <span className="absolute -top-3 left-7 bg-grad-gold text-obsidian text-[10px] font-mono font-bold tracking-extra-wide uppercase px-3 py-1">
                      Most Engaged
                    </span>
                  )}
                  <div className="font-display text-3xl text-gold mb-5 tracking-cinematic leading-none">
                    {e.roman}
                  </div>
                  <h3 className="font-display text-[28px] leading-[0.95] tracking-cinematic uppercase mb-3 text-white">
                    {e.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-line">
                    <span className="font-display text-[40px] text-white leading-none tracking-cinematic">
                      {e.price}
                    </span>
                    <span className="font-mono text-[11px] uppercase text-titanium-dim tracking-wide-cap">
                      {e.per}
                    </span>
                  </div>
                  <p className="text-[14px] text-titanium leading-[1.7] mb-6 flex-grow">
                    {e.description}
                  </p>
                  <ul className="list-none space-y-2.5">
                    {e.features.map((f, fi) => (
                      <li
                        key={fi}
                        className="text-[13px] text-titanium leading-[1.5] pl-5 relative"
                      >
                        <span className="absolute left-0 top-0 text-gold">
                          ◆
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        eyebrow="ENGAGE THE PRACTICE"
        heading="BRING US"
        goldHeading="A BRIEF."
        sub="The first conversation is unhurried and free. By the end of it, we will both know whether this is the right firm for the work."
      />
    </>
  );
}
