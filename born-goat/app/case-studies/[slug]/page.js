import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/sections/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';
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
          { label: 'BORN GOAT', href: '/' },
          { label: 'Leagues', href: '/case-studies' },
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
              { name: 'Leagues', path: '/case-studies' },
              { name: cs.client, path: `/case-studies/${cs.slug}` }
            ])
          )
        }}
      />

      {/* TOP METRICS */}
      <section className="py-20 max-md:py-12 bg-slate-900 border-b border-line">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-px bg-line border border-line">
            {cs.metrics.map((m, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-slate-900 p-10 max-sm:p-6 text-center">
                  <div className="font-display text-[56px] max-sm:text-4xl text-sports-cyan leading-none tracking-cinematic mb-3">
                    {m.value}
                  </div>
                  <div className="font-mono text-[10px] tracking-extra-wide uppercase text-slate-500">
                    {m.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-12 mt-16">
            <div>
              <div className="font-mono text-[10px] tracking-extra-wide uppercase text-sports-pink mb-2">
                ENGAGEMENT
              </div>
              <div className="font-display text-[24px] tracking-cinematic uppercase text-white">
                {cs.engagement}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-extra-wide uppercase text-sports-pink mb-2">
                DURATION
              </div>
              <div className="font-display text-[24px] tracking-cinematic uppercase text-white">
                {cs.duration}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-extra-wide uppercase text-sports-pink mb-2">
                PRACTICES INVOLVED
              </div>
              <div className="text-slate-400 text-[14px] leading-[1.6]">
                {cs.practices.join(' · ')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRIEF */}
      <section className="py-[120px] max-md:py-20 bg-slate-950">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal>
            <div className="grid grid-cols-[200px_1fr] max-md:grid-cols-1 gap-12 max-w-[1100px]">
              <Eyebrow>THE BRIEF</Eyebrow>
              <div className="space-y-6">
                {cs.sections.brief.map((para, i) => (
                  <p key={i} className="text-[17px] text-slate-400 leading-[1.75]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-[120px] max-md:py-20 bg-slate-900 border-t border-line">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-16">
            <Eyebrow className="mb-7">WHAT WE BUILT</Eyebrow>
            <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              THE <span className="text-sports-cyan">DASHBOARD.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-px bg-line border border-line">
            {cs.sections.deliverables.map((d, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-slate-900 p-10 max-sm:p-7 h-full">
                  <div className="font-mono text-[11px] tracking-extra-wide uppercase text-sports-pink mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-[26px] tracking-cinematic uppercase mb-4 text-white leading-[1]">
                    {d.title}
                  </h3>
                  <p className="text-[15px] text-slate-400 leading-[1.7]">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PULLQUOTE */}
      <section className="py-[120px] max-md:py-20 bg-slate-950 border-t border-line relative">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-1/2 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse, rgba(6,182,212,0.4), transparent 70%)',
            opacity: 0.15,
            filter: 'blur(80px)'
          }}
        />
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative">
          <Reveal>
            <div className="max-w-[1100px] mx-auto text-center">
              <div className="font-display text-[120px] leading-none text-sports-cyan opacity-50 mb-4">
                &ldquo;
              </div>
              <blockquote className="font-display text-[clamp(28px,3.8vw,52px)] leading-[1.1] tracking-cinematic uppercase text-white mb-12">
                {cs.sections.pullquote}
              </blockquote>
              <div className="flex items-center gap-6 justify-center">
                <span className="w-[60px] h-px bg-sports-pink" />
                <div className="font-mono text-[11px] tracking-extra-wide uppercase text-sports-pink">
                  {cs.sections.pullcite}
                </div>
                <span className="w-[60px] h-px bg-sports-pink" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEARNINGS */}
      <section className="py-[120px] max-md:py-20 bg-slate-900 border-t border-line">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-16">
            <Eyebrow className="mb-7">WHAT WE LEARNED</Eyebrow>
            <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              ENGINEERING <span className="text-sports-cyan">LESSONS.</span>
            </h2>
          </Reveal>
          <div className="max-w-[1000px]">
            <ol className="list-none space-y-7">
              {cs.sections.learnings.map((l, i) => (
                <Reveal key={i} delay={i * 80}>
                  <li className="pl-16 relative text-[18px] text-slate-400 leading-[1.75]">
                    <span className="absolute left-0 top-0 font-mono text-[14px] tracking-extra-wide text-sports-cyan">
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
      <section className="py-[120px] max-md:py-20 bg-slate-950 border-t border-line">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-16">
            <Eyebrow className="mb-7">OUTCOMES</Eyebrow>
            <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              WHAT THE <span className="text-sports-cyan">LEDGER</span> SAYS.
            </h2>
          </Reveal>
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-px bg-line border border-line">
            {cs.sections.outcomes.map((o, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="bg-slate-900 p-10 max-sm:p-7">
                  <div className="font-display text-[56px] text-sports-cyan leading-none tracking-cinematic mb-4">
                    {o.value}
                  </div>
                  <div className="text-[14px] text-slate-400 leading-[1.55]">
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
        <section className="py-[120px] max-md:py-20 bg-slate-900 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
            <Reveal className="mb-16">
              <Eyebrow className="mb-7">CONTINUE COVERAGE</Eyebrow>
              <h3 className="font-display text-[clamp(36px,5vw,60px)] leading-[0.95] tracking-cinematic uppercase mt-7">
                OTHER <span className="text-sports-cyan">LEAGUES</span>
              </h3>
            </Reveal>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 80}>
                  <Link
                    href={`/case-studies/${o.slug}`}
                    className="block bg-slate-950 border border-line hover:border-sports-cyan transition-all duration-[400ms] p-10 max-sm:p-7 group"
                  >
                    <div className="font-mono text-[10px] tracking-extra-wide uppercase text-sports-pink mb-4">
                      CASE {o.number} · {o.domain}
                    </div>
                    <h4 className="font-display text-[36px] leading-[0.95] tracking-cinematic uppercase mb-4 text-white">
                      {o.client}
                    </h4>
                    <p className="text-[14px] text-slate-400 leading-[1.7] mb-6">
                      {o.summary.slice(0, 140)}…
                    </p>
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-extra-wide uppercase text-sports-pink">
                      DASHBOARD
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
        eyebrow="INTEGRATE THE PIPELINE"
        heading="CONNECT YOUR"
        goldHeading="LEAGUE TO REAL-TIME DATA."
        sub="Get sandbox credentials to feed tournament outcomes directly to broadcasters, news publishers, and fantasy players."
      />
    </>
  );
}
