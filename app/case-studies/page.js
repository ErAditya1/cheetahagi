import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTASection';

export const metadata = buildMetadata({
  title: 'Case Studies — what we shipped, what it earned | Cheetah AGI',
  description:
    'Real engagements. Real numbers. D2C funnels, AI SaaS launches, content authority moats — fully sourced.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section pt-32">
        <div className="container-tight">
          <ScrollReveal>
            <span className="eyebrow">Case Studies</span>
            <h1 className="font-display text-display-xl mt-3 max-w-4xl">
              Receipts, not <span className="font-serif italic text-strike">testimonials</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-bone/70">
              Three engagements. Numbers we can defend. The work we'd be willing to put on the
              homepage of any of these clients — because it already is.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-tight">
          <div className="space-y-6">
            {CASE_STUDIES.map((study, i) => (
              <ScrollReveal key={study.slug} delay={i * 80}>
                <Link
                  href={study.href}
                  className="group block surface-raised p-8 md:p-10 transition-all hover:border-strike/40"
                >
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-bone/50">
                        <span>{study.client}</span>
                        <span aria-hidden>·</span>
                        <span>{study.industry}</span>
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl mt-4 group-hover:text-strike transition-colors">
                        {study.headline}
                      </h2>
                      <p className="mt-4 text-bone/70 leading-relaxed">{study.summary}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-strike">
                        Read the case study
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-1 gap-4 md:border-l md:border-ink-700 md:pl-8">
                      {study.metrics.map((m) => (
                        <div key={m.l}>
                          <p className="font-display text-2xl md:text-3xl text-strike">{m.v}</p>
                          <p className="text-xs font-mono uppercase tracking-wider text-bone/50 mt-1">
                            {m.l}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Could be the next one"
        title={
          <>
            Have a similar problem? Let's <span className="font-serif italic text-strike">talk</span>.
          </>
        }
        body="If your situation rhymes with any of these, we already know what the first 30 days look like."
        primaryHref="/consultation"
        primaryLabel="Brief us"
      />
    </>
  );
}
