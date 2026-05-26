import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import { caseStudies } from '@/lib/content';

export const metadata = {
  title: 'Leagues Coverage',
  description:
    'Explore dynamic dashboards and live performance analytics for premier leagues and cups covered on the Born Goat platform.',
  alternates: { canonical: '/case-studies' }
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: 'BORN GOAT', href: '/' },
          { label: 'Leagues' }
        ]}
        eyebrow="THE COVERAGE"
        title="ELITE LEAGUES & CHAMPIONSHIPS."
        italicWord="ELITE LEAGUES"
        lede="Comprehensive tracking dashboards mapping strokes, runs, goals, and telemetry statistics across major regional tournaments."
      />

      <section className="py-[120px] max-md:py-20 bg-slate-950">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <div className="space-y-12">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 100}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="block bg-slate-900 border border-line transition-all duration-[400ms] hover:border-sports-cyan hover:shadow-cyan-glow relative overflow-hidden group"
                >
                  <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sports-blue to-sports-cyan scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="grid grid-cols-[1fr_400px] max-lg:grid-cols-1 gap-0">
                    <div className="p-14 max-sm:p-7">
                      <div className="flex gap-4 mb-8 flex-wrap">
                        <span className="font-mono text-[11px] tracking-extra-wide uppercase text-sports-pink">
                          CASE {cs.number}
                        </span>
                        <span className="font-mono text-[11px] tracking-extra-wide uppercase text-slate-500">
                          {cs.domain} · {cs.year}
                        </span>
                      </div>
                      <h2 className="font-display text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-cinematic uppercase mb-6 text-white">
                        {cs.client}
                      </h2>
                      <p className="text-[18px] text-sports-cyan italic font-medium leading-[1.55] mb-5 max-w-[620px]">
                        {cs.headline}
                      </p>
                      <p className="text-[15px] text-slate-400 leading-[1.7] max-w-[620px] mb-9">
                        {cs.summary}
                      </p>
                      <div className="flex gap-2 flex-wrap mb-9">
                        {cs.tags.map((t, ti) => (
                          <span
                            key={ti}
                            className="font-mono text-[10px] tracking-wide-cap uppercase text-slate-500 border border-line px-2.5 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-extra-wide uppercase text-sports-pink">
                        VIEW LIVE LEAGUE DASHBOARD
                        <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                          →
                        </span>
                      </span>
                    </div>
                    <div className="bg-slate-950 p-12 max-sm:p-7 border-l border-line max-lg:border-l-0 max-lg:border-t flex flex-col justify-center">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                        {cs.metrics.map((m, mi) => (
                          <div key={mi}>
                            <div className="font-display text-[42px] text-sports-cyan leading-none tracking-cinematic mb-2">
                              {m.value}
                            </div>
                            <div className="font-mono text-[10px] tracking-extra-wide uppercase text-slate-500">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        eyebrow="INTEGRATE THE PIPELINE"
        heading="CONNECT YOUR"
        goldHeading="LEAGUE TO REAL-TIME DATA."
        sub="Get sandbox credentials to feed tournament outcomes directly to broadcasters, news publishers, and fantasy players."
      />
    </>
  );
}
