import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTASection';
import { SERVICES } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Services — AI Consulting, Automation, Funnels, Agents',
  description:
    'Six disciplines, one outcome: AI consulting, automation engineering, funnel building, AI agents, GEO/AEO strategy, and outcome-based engagement models.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="section pt-36 md:pt-40">
        <div className="container-tight">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-6">Services</div>
              <h1 className="font-display font-medium text-display-2xl text-bone text-balance leading-[0.92] mb-8">
                What we <span className="editorial-italic text-strike">build</span> when you hire us.
              </h1>
              <p className="text-xl text-bone-dim leading-relaxed max-w-2xl">
                Six disciplines we ship at a senior level. We don't sell anything we wouldn't deploy in
                our own businesses — and most of these, we have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services list — editorial vertical stack */}
      <section className="border-t border-ink-700">
        {SERVICES.map((service, i) => (
          <ScrollReveal key={service.slug}>
            <article className="border-b border-ink-700 group">
              <Link href={`/services/${service.slug}`} className="block">
                <div className="container-tight py-16 md:py-24 px-6 md:px-10 lg:px-16">
                  <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-1">
                      <div className="font-mono text-2xl text-ink-500 group-hover:text-strike transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="lg:col-span-7">
                      <h2 className="font-display font-medium text-display-lg text-bone group-hover:text-strike transition-colors mb-4 leading-[0.95]">
                        {service.name}
                      </h2>
                      <p className="text-bone-dim text-lg leading-relaxed max-w-xl">
                        {service.tagline}
                      </p>
                    </div>
                    <div className="lg:col-span-3 space-y-3 text-sm">
                      <div>
                        <div className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-400 mb-1">Timeline</div>
                        <div className="text-bone">{service.timeline}</div>
                      </div>
                      <div>
                        <div className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-400 mb-1">Investment</div>
                        <div className="text-bone">{service.investment}</div>
                      </div>
                    </div>
                    <div className="lg:col-span-1 flex justify-end">
                      <ArrowUpRight className="w-8 h-8 text-ink-400 group-hover:text-strike group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          </ScrollReveal>
        ))}
      </section>

      <CTASection
        eyebrow="Engaged?"
        title="Tell us what you're trying to fix."
        description="The 30-day diagnostic is the first step for every engagement. Fixed price, fixed timeline, no ambiguity."
        primaryLabel="Start the diagnostic"
      />
    </>
  );
}
