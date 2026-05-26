import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import { caseStudies } from '@/lib/content';

export const metadata = {
  title: 'Case Studies',
  description:
    'A small portfolio of permanent things. Selected case studies from our work — leagues, athletes, brands engineered for legacy.',
  alternates: { canonical: '/case-studies' }
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: 'BORN GOAT', href: '/' },
          { label: 'Case Studies' }
        ]}
        eyebrow="THE WORK"
        title="A SMALL PORTFOLIO OF PERMANENT THINGS."
        italicWord="PERMANENT THINGS"
        lede="A small portfolio because we work on few accounts at a time. Permanent because we measure success in years, not quarters."
      />

      <section className="py-[120px] max-md:py-20 bg-obsidian">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <div className="space-y-12">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 100}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="block bg-obsidian-800 border border-line transition-all duration-[400ms] hover:border-gold hover:shadow-card-luxe relative overflow-hidden group"
                >
                  <span className="absolute top-0 left-0 right-0 h-0.5 bg-grad-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="grid grid-cols-[1fr_400px] max-lg:grid-cols-1 gap-0">
                    <div className="p-14 max-sm:p-7">
                      <div className="flex gap-4 mb-8 flex-wrap">
                        <span className="font-mono text-[11px] tracking-extra-wide uppercase text-gold">
                          CASE {cs.number}
                        </span>
                        <span className="font-mono text-[11px] tracking-extra-wide uppercase text-titanium-deep">
                          {cs.domain} · {cs.year}
                        </span>
                      </div>
                      <h2 className="font-display text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-cinematic uppercase mb-6 text-white">
                        {cs.client}
                      </h2>
                      <p className="text-[18px] text-gold italic font-medium leading-[1.55] mb-5 max-w-[620px]">
                        {cs.headline}
                      </p>
                      <p className="text-[15px] text-titanium leading-[1.7] max-w-[620px] mb-9">
                        {cs.summary}
                      </p>
                      <div className="flex gap-2 flex-wrap mb-9">
                        {cs.tags.map((t, ti) => (
                          <span
                            key={ti}
                            className="font-mono text-[10px] tracking-wide-cap uppercase text-titanium-dim border border-line px-2.5 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-extra-wide uppercase text-gold">
                        READ THE CASE
                        <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                          →
                        </span>
                      </span>
                    </div>
                    <div className="bg-obsidian p-12 max-sm:p-7 border-l border-line max-lg:border-l-0 max-lg:border-t flex flex-col justify-center">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                        {cs.metrics.map((m, mi) => (
                          <div key={mi}>
                            <div className="font-display text-[42px] text-gold leading-none tracking-cinematic mb-2">
                              {m.value}
                            </div>
                            <div className="font-mono text-[10px] tracking-extra-wide uppercase text-titanium-dim">
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
        eyebrow="WORK WITH THE HOUSE"
        heading="THE NEXT CASE"
        goldHeading="STUDY COULD BE YOURS."
        sub="We take three new clients per quarter. Bring us the brief — we will tell you honestly whether this is the right firm for the work."
      />
    </>
  );
}
