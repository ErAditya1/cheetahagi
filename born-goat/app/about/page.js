import PageHero from '@/components/sections/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';
import { SITE } from '@/lib/site';
import { principles as ps, team as ts, firmNumbers as fns } from '@/lib/content';

export const metadata = {
  title: 'The Platform',
  description:
    'About Born GOAT — a next-gen sports data, analytics, and live feeds platform.',
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: 'BORN GOAT', href: '/' },
          { label: 'The Platform' }
        ]}
        eyebrow="THE PLATFORM"
        title="A NEXT-GEN PLATFORM BUILT FOR REAL-TIME COVERAGE."
        italicWord="REAL-TIME COVERAGE"
        lede="Born GOAT is a premium sports analytics and live feed hub. We serve milliseconds-level scoreboards, predictive AI models, and flexible APIs for modern developers."
      />

      {/* THESIS */}
      <section className="py-[140px] max-md:py-20 bg-slate-950">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-20 max-w-[920px]">
            <Eyebrow className="mb-7">THE THESIS · I</Eyebrow>
            <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              MOST SPORTS PORTALS SUFFER FROM DATA{' '}
              <span className="text-sports-cyan">LATENCY.</span>
              <br />
              WE ARE BUILT FOR <span className="text-sports-pink">IMMEDIACY.</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 max-w-[1100px]">
              <p className="text-[17px] text-slate-400 leading-[1.75]">
                The sports ecosystem demands instantaneous stats. Traditional dashboards
                delay live updates by minutes. We run an integrated edge-computing stack
                serving feeds, dashboards, AI predictors, and APIs under 100ms.
              </p>
              <p className="text-[17px] text-slate-400 leading-[1.75]">
                We built the platform we wanted to use as fantasy developers and analysts.
                WebSocket streams, GraphQL schema structures, and zero database stress on peak match days.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-[140px] max-md:py-20 bg-slate-900 border-t border-line">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-20 max-w-[920px]">
            <Eyebrow className="mb-7">PLATFORM PILLARS · II</Eyebrow>
            <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              FIVE CORE <span className="text-sports-cyan">PILLARS.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-px bg-line border border-line">
            {ps.map((pr, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-slate-900 p-12 max-sm:p-7 h-full">
                  <div className="font-display text-5xl text-sports-pink leading-none mb-7 tracking-cinematic">
                    {pr.roman}
                  </div>
                  <h3 className="font-display text-[26px] tracking-cinematic uppercase mb-4 text-white">
                    {pr.title}
                  </h3>
                  <p className="text-[15px] text-slate-400 leading-[1.7]">
                    {pr.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-[140px] max-md:py-20 bg-slate-950 border-t border-line">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-20 max-w-[920px]">
            <Eyebrow className="mb-7">THE ENGINE BUILDERS · III</Eyebrow>
            <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              THE TEAM
              <br />
              BEHIND THE <span className="text-sports-cyan">FEEDS.</span>
            </h2>
            <p className="text-slate-400 text-[17px] leading-[1.7] max-w-[620px] mt-7">
              We are a team of data engineers, SRE specialists, and sports analysts
              operating the infrastructure that powers real-time tournament widgets.
            </p>
          </Reveal>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-px bg-line border border-line">
            {ts.map((person, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-slate-900 p-10 max-sm:p-7 h-full flex flex-col">
                  <div className="w-20 h-20 border border-sports-cyan rounded-full flex items-center justify-center mb-7 font-display text-2xl text-sports-cyan tracking-cinematic">
                    {person.initials}
                  </div>
                  <h3 className="font-display text-[24px] tracking-cinematic uppercase text-white mb-1.5 leading-none">
                    {person.name}
                  </h3>
                  <div className="font-mono text-[10px] tracking-extra-wide uppercase text-sports-pink mb-5">
                    {person.role}
                  </div>
                  <p className="text-[14px] text-slate-400 leading-[1.65] flex-grow">
                    {person.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FIRM NUMBERS */}
      <section className="py-[140px] max-md:py-20 bg-slate-900 border-t border-line">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-20 max-w-[920px]">
            <Eyebrow className="mb-7">THE METRICS · IV</Eyebrow>
            <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              THE STATUS, <span className="text-sports-cyan">LIVE.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-px bg-line border border-line">
            {fns.map((n, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-slate-900 p-12 max-sm:p-7">
                  <div className="font-display text-[72px] leading-none tracking-cinematic text-sports-pink mb-4">
                    {n.value}
                  </div>
                  <div className="text-[14px] text-slate-400 leading-[1.5]">
                    {n.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        eyebrow="INTEGRATE THE PIPELINE"
        heading="REQUEST LIVE FEED ACCESS"
        goldHeading="TODAY."
        sub="Sign up for a developer sandbox key or consult our integrations team for custom tournament scoring dashboards."
      />
    </>
  );
}
