import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/sections/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import { caseStudies, getCaseStudy } from '@/lib/content';
import { caseStudySchema, breadcrumbSchema } from '@/lib/schema';

export function generateStaticParams() {
  return caseStudies.map(c => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};
  return {
    title: `${cs.client} · Case Study`,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${cs.slug}` }
  };
}

export default function CaseDetailPage({ params }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  const others = caseStudies.filter(c => c.slug !== cs.slug);

  return (
    <>
      <PageHero
        crumbs={[
          { label: 'Born Goat', href: '/' },
          { label: 'Case Studies', href: '/case-studies' },
          { label: cs.client }
        ]}
        eyebrow={`CASE ${cs.number} · ${cs.domain} · ${cs.year}`}
        title={cs.client.toUpperCase()}
        lede={cs.headline}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema(cs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Case Studies', path: '/case-studies' },
              { name: cs.client, path: `/case-studies/${cs.slug}` }
            ])
          )
        }}
      />

      {/* TOP METRICS */}
      <section className="py-20 max-md:py-12 bg-dark border-b border-[var(--border-subtle)]">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {cs.metrics.map((m, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-void p-10 max-sm:p-6 text-center">
                  <div className="font-display text-[56px] max-sm:text-4xl text-[var(--gold-primary)] leading-none tracking-cinematic mb-3">
                    {m.value}
                  </div>
                  <div className="font-mono text-[10px] tracking-extra-wide uppercase text-muted">
                    {m.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-12 mt-16">
            <div>
              <div className="font-mono text-[10px] tracking-extra-wide uppercase text-[var(--gold-primary)] mb-2">
                ENGAGEMENT
              </div>
              <div className="font-heading text-[24px] tracking-cinematic uppercase text-primary">
                {cs.engagement}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-extra-wide uppercase text-[var(--gold-primary)] mb-2">
                DURATION
              </div>
              <div className="font-heading text-[24px] tracking-cinematic uppercase text-primary">
                {cs.duration}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-extra-wide uppercase text-[var(--gold-primary)] mb-2">
                SERVICES INVOLVED
              </div>
              <div className="text-secondary text-[14px] leading-[1.6]">
                {cs.practices.join(' · ')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRIEF */}
      <section className="py-[120px] max-md:py-20 bg-void animate-fade-in">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal>
            <div className="grid grid-cols-[200px_1fr] max-md:grid-cols-1 gap-12 max-w-[1100px]">
              <span className="text-label block">THE BRIEF</span>
              <div className="space-y-6">
                {cs.sections.brief.map((para, i) => (
                  <p key={i} className="text-[17px] text-secondary leading-[1.75]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-[120px] max-md:py-20 bg-dark border-t border-[var(--border-subtle)]">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-16">
            <span className="text-label block mb-4">WHAT WE DEVELOPED</span>
            <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              THE <span className="text-gold-gradient">STRATEGY.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {cs.sections.deliverables.map((d, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-void p-10 max-sm:p-7 h-full">
                  <div className="font-mono text-[11px] tracking-extra-wide uppercase text-[var(--gold-primary)] mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-heading text-[26px] tracking-cinematic uppercase mb-4 text-primary leading-[1]">
                    {d.title}
                  </h3>
                  <p className="text-[15px] text-secondary leading-[1.7]">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PULLQUOTE */}
      <section className="py-[120px] max-md:py-20 bg-void border-t border-[var(--border-subtle)] relative">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-1/2 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse, rgba(212, 175, 55, 0.15), transparent 70%)',
            opacity: 0.15,
            filter: 'blur(80px)'
          }}
        />
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative">
          <Reveal>
            <div className="max-w-[1100px] mx-auto text-center">
              <div className="font-display text-[120px] leading-none text-[var(--gold-primary)] opacity-50 mb-4">
                &ldquo;
              </div>
              <blockquote className="font-heading text-[clamp(24px,3.5vw,46px)] leading-[1.1] tracking-cinematic uppercase text-primary mb-12 italic">
                {cs.sections.pullquote}
              </blockquote>
              <div className="flex items-center gap-6 justify-center">
                <span className="w-[60px] h-px bg-[var(--border-gold)]" />
                <div className="font-mono text-[11px] tracking-extra-wide uppercase text-[var(--gold-primary)]">
                  {cs.sections.pullcite}
                </div>
                <span className="w-[60px] h-px bg-[var(--border-gold)]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEARNINGS */}
      <section className="py-[120px] max-md:py-20 bg-dark border-t border-[var(--border-subtle)]">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-16">
            <span className="text-label block mb-4">KEY TAKEAWAYS</span>
            <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              STRATEGIC <span className="text-gold-gradient">LESSONS.</span>
            </h2>
          </Reveal>
          <div className="max-w-[1000px]">
            <ol className="list-none space-y-7 pl-0">
              {cs.sections.learnings.map((l, i) => (
                <Reveal key={i} delay={i * 80}>
                  <li className="pl-16 relative text-[18px] text-secondary leading-[1.75]">
                    <span className="absolute left-0 top-0 font-mono text-[14px] tracking-extra-wide text-[var(--gold-primary)] font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: l }} />
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-[120px] max-md:py-20 bg-void border-t border-[var(--border-subtle)]">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-16">
            <span className="text-label block mb-4">CAMPAIGN OUTCOMES</span>
            <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              WHAT THE <span className="text-gold-gradient">LEDGER</span> SAYS.
            </h2>
          </Reveal>
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {cs.sections.outcomes.map((o, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="bg-dark p-10 max-sm:p-7">
                  <div className="font-display text-[56px] text-[var(--gold-primary)] leading-none tracking-cinematic mb-4">
                    {o.value}
                  </div>
                  <div className="text-[14px] text-secondary leading-[1.55]">
                    {o.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER CASES */}
      {others.length > 0 && (
        <section className="py-[120px] max-md:py-20 bg-dark border-t border-[var(--border-subtle)]">
          <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
            <Reveal className="mb-16">
              <span className="text-label block mb-4">CONTINUE READING</span>
              <h3 className="font-display text-[clamp(36px,5vw,60px)] leading-[0.95] tracking-cinematic uppercase mt-7">
                OTHER <span className="text-gold-gradient">ATHLETES</span>
              </h3>
            </Reveal>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 80}>
                  <Link
                    href={`/case-studies/${o.slug}`}
                    className="block bg-void border border-[var(--border-subtle)] hover:border-[var(--border-gold)] transition-all duration-[400ms] p-10 max-sm:p-7 group text-decoration-none"
                  >
                    <div className="font-mono text-[10px] tracking-extra-wide uppercase text-[var(--gold-primary)] mb-4 font-bold">
                      CASE {o.number} · {o.domain}
                    </div>
                    <h4 className="font-heading text-[36px] leading-[0.95] tracking-cinematic uppercase mb-4 text-primary">
                      {o.client}
                    </h4>
                    <p className="text-[14px] text-secondary leading-[1.7] mb-6">
                      {o.summary.slice(0, 140)}…
                    </p>
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-extra-wide uppercase text-[var(--gold-primary)] font-bold">
                      VIEW REPORT
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                  </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA
        eyebrow="SECURE REPRESENTATION"
        heading="APPLY FOR MANAGEMENT"
        goldHeading="TODAY."
        sub="Sign up to submit your sports portfolio or coordinate a consultation meeting with our representation panel."
      />
    </>
  );
}
