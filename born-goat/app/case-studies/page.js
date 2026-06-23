import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import { caseStudies } from '@/lib/content';

export const metadata = {
  title: 'Case Studies',
  description:
    'Read dynamic career case studies mapping transfers, sponsorships, and digital brand transformations for Born Goat roster.',
  alternates: { canonical: '/case-studies' }
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: 'Born Goat', href: '/' },
          { label: 'Case Studies' }
        ]}
        eyebrow="PORTFOLIO HIGHLIGHTS"
        title="ELITE ATHLETES & CAMPAIGNS."
        italicWord="ELITE ATHLETES"
        lede="Comprehensive case studies mapping contract values, brand expansions, and sponsorship deals across regional and international divisions."
      />

      <section className="py-[120px] max-md:py-20 bg-void">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <div className="space-y-12">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 100}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="block bg-dark border border-[var(--border-subtle)] transition-all duration-[400ms] hover:border-[var(--border-gold)] hover:shadow-gold-glow relative overflow-hidden group text-decoration-none"
                >
                  <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold-primary)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="grid grid-cols-[1fr_400px] max-lg:grid-cols-1 gap-0">
                    <div className="p-14 max-sm:p-7">
                      <div className="flex gap-4 mb-8 flex-wrap">
                        <span className="font-mono text-[11px] tracking-extra-wide uppercase text-[var(--gold-primary)] font-bold">
                          CASE {cs.number}
                        </span>
                        <span className="font-mono text-[11px] tracking-extra-wide uppercase text-muted">
                          {cs.domain} · {cs.year}
                        </span>
                      </div>
                      <h2 className="font-heading text-[clamp(40px,5vw,60px)] leading-[0.95] tracking-cinematic uppercase mb-6 text-primary">
                        {cs.client}
                      </h2>
                      <p className="text-[18px] text-[var(--gold-primary)] italic font-medium leading-[1.55] mb-5 max-w-[620px]">
                        {cs.headline}
                      </p>
                      <p className="text-[15px] text-secondary leading-[1.7] max-w-[620px] mb-9">
                        {cs.summary}
                      </p>
                      <div className="flex gap-2 flex-wrap mb-9">
                        {cs.tags.map((t, ti) => (
                          <span
                            key={ti}
                            className="font-mono text-[10px] tracking-wide-cap uppercase text-muted border border-[var(--border-subtle)] px-2.5 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-extra-wide uppercase text-[var(--gold-primary)] font-bold">
                        VIEW CAMPAIGN REPORT
                        <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                          →
                        </span>
                      </span>
                    </div>
                    <div className="bg-void p-12 max-sm:p-7 border-l border-[var(--border-subtle)] max-lg:border-l-0 max-lg:border-t flex flex-col justify-center">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                        {cs.metrics.map((m, mi) => (
                          <div key={mi}>
                            <div className="font-display text-[42px] text-[var(--gold-primary)] leading-none tracking-cinematic mb-2">
                              {m.value}
                            </div>
                            <div className="font-mono text-[10px] tracking-extra-wide uppercase text-muted">
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
        eyebrow="SECURE REPRESENTATION"
        heading="APPLY FOR MANAGEMENT"
        goldHeading="TODAY."
        sub="Sign up to submit your sports portfolio or coordinate a consultation meeting with our representation panel."
      />
    </>
  );
}
