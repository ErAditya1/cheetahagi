import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import ServicesGrid from '@/components/ServicesGrid';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import QuickCaptureForm from '@/components/QuickCaptureForm';
import ScrollReveal from '@/components/ScrollReveal';
import { apiGet } from '@/lib/api';
import { faqSchema, JsonLd } from '@/lib/schema';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Cheetah AGI — AI systems that close',
  description:
    'AI consulting, automation engineering, and funnel building for businesses transitioning to outcome-based operations. Speed + intelligence.',
  alternates: { canonical: 'https://cheetahagi.com' },
};

export default async function HomePage() {
  const site = await apiGet('/public/site');
  // Show top 4 FAQs on home; full list on /faq
  const homeFaqs = site.faqs.slice(0, 4);
  const featuredCases = site.caseStudies.slice(0, 3);

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      <HeroSection />

      {/* The promise / philosophy band */}
      <section className="section">
        <div className="container-tight">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="eyebrow mb-6">The thesis</div>
                <h2 className="font-display font-medium text-display-xl text-bone text-balance leading-[0.95]">
                  Most AI projects fail because they're <span className="editorial-italic text-strike">solving the wrong problem.</span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5 lg:pl-8 space-y-6 text-bone-dim text-lg leading-relaxed">
              <ScrollReveal delay={150}>
                <p>
                  Companies bolt AI onto broken processes and call it transformation. We don't. We map
                  what your business actually does, find the workflows where intelligence compounds, and
                  build only those.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p>
                  The rest? We tell you to skip. That's the entire reason we exist — to be the
                  consultancy that says no more often than yes.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      <ServicesGrid services={site.services} />

      {/* Featured case studies */}
      <section className="section">
        <div className="container-tight">
          <div className="flex items-end justify-between mb-12 gap-8 flex-wrap">
            <ScrollReveal>
              <div>
                <div className="eyebrow mb-6">Receipts on file</div>
                <h2 className="font-display font-medium text-display-lg text-bone text-balance">
                  Work we put our <span className="editorial-italic text-strike">name on.</span>
                </h2>
              </div>
            </ScrollReveal>
            <Link href="/case-studies" className="btn-ghost">
              All case studies <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {featuredCases.map((c, i) => (
              <ScrollReveal key={c.slug} delay={i * 120}>
                <Link
                  href={c.href}
                  className="surface group hover:border-strike/40 transition-all p-8 lg:p-10 block h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-strike scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-strike mb-2">
                    {c.industry}
                  </div>
                  <div className="font-display text-lg text-bone-dim mb-6">{c.client}</div>
                  <h3 className="font-display text-2xl font-medium text-bone group-hover:text-strike transition-colors mb-6 leading-tight text-balance">
                    {c.headline}
                  </h3>
                  <div className="grid grid-cols-3 gap-2 pt-6 border-t border-ink-700">
                    {c.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="font-display text-xl text-strike">{m.v}</div>
                        <div className="font-mono text-[0.55rem] uppercase tracking-widest text-ink-400 mt-1 leading-tight">
                          {m.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Mid-funnel quick capture */}
      <section className="section">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="eyebrow mb-6">The first step</div>
              <h2 className="font-display font-medium text-display-lg text-bone text-balance leading-[0.95] mb-6">
                Get the <span className="editorial-italic text-strike">12-point AI readiness audit.</span>
              </h2>
              <p className="text-bone-dim text-lg leading-relaxed mb-6">
                The exact framework we use to scope every engagement — yours, free, in your inbox in
                90 seconds. Use it with us, against us, or on your own.
              </p>
              <ul className="space-y-3 text-bone-dim">
                {[
                  'Process map template',
                  'AI fit-score rubric',
                  'Build vs. buy decision tree',
                  '90-day deployment checklist',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-strike flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <QuickCaptureForm source="home-mid" cta="Send me the audit" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FAQSection faqs={homeFaqs} />

      <CTASection />
    </>
  );
}
