import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, JsonLd } from '@/lib/schema';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTASection';

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const study = CASE_STUDIES.find((c) => c.slug === params.slug);
  if (!study) return {};
  return buildMetadata({
    title: `${study.client} — ${study.headline} | Cheetah AGI`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

// Per-case-study narrative content. In production: CMS / MDX.
const CASE_BODIES = {
  'aayurbhog-makhana': {
    challenge:
      'Aayurbhog had two products on parallel timelines: a legacy makhana SKU with B2B distribution potential, and a new gut-health drink (GUTSIP) needing a brand-led D2C launch. They needed both tracks to ship simultaneously without one starving the other of attention or budget.',
    approach: [
      'Split the engagement into two parallel funnels with separate KPIs — B2B pipeline value vs. D2C contribution margin.',
      'Built a 30-day diagnostic mapping the existing distribution layer and identified three high-intent B2B verticals (institutional catering, premium retail chains, gifting).',
      'For GUTSIP: ran a creator-first launch, anchored to founder-narrative content, and used Trubetix for weekly attribution reports.',
      'Restructured the engagement as ₹3L/month retainer + ₹2L/month managed ad spend — separated invoicing so attribution stayed clean.',
    ],
    outcome:
      'Within 60 days, Aayurbhog had a documented B2B pipeline of ₹4.2L in active conversations, a 38% trial-to-repeat rate on GUTSIP, and a 14× CAC payback model that the founder could defend in board conversations.',
  },
  'callio-launch': {
    challenge:
      'We needed a real AI calling product for the Indian market — one that handled TRAI compliance, sub-15ms latency on Tata Tele SIP, and multi-tenant provisioning out of the box. Existing US-built tools couldn\'t deploy here without breaking compliance or quality.',
    approach: [
      'Audited every viable Indian SIP trunk provider — landed on Tata Tele after Plivo hit DLT registration friction.',
      'Built a multi-tenant SaaS architecture: per-workspace number provisioning, isolated context, automated billing.',
      'Wired ElevenLabs voice synthesis with custom turn-taking logic to keep latency under human-perception thresholds.',
      'Benchmarked pricing against Ozonetel, Exotel, MyOperator — landed at ~60% of nearest competitor for equivalent features.',
    ],
    outcome:
      'Shipped 4,880 lines of production code across frontend, backend, and infrastructure. Mean response latency 12ms. First three customers onboarded via self-serve provisioning. Currently in beta with selective rollout.',
  },
  'feeding-trends-authority': {
    challenge:
      'Feeding Trends had seven years of compounding domain authority (DA 65, 14M lifetime sessions, 2.3K indexed essays) but was being commoditized by AI-generated content farms scraping its structure. The moat was eroding faster than traffic was growing.',
    approach: [
      'Repositioned the editorial mission from "publishing" to "verifiable human authority" — the proof-of-humanity layer.',
      'Implemented author schema, contributor verification, and citation-friendly passage structures across the top 500 essays.',
      'Built an AEO/GEO content pipeline targeting questions that LLMs are most likely to surface to mid-funnel buyers.',
      'Created an internal linking topology that compounds across the seven-year archive instead of treating each essay as standalone.',
    ],
    outcome:
      'AI engines (Perplexity, ChatGPT) now cite Feeding Trends content at a measurable rate. Domain authority held flat through the AI content collapse that hit competitors. Editorial pipeline is now the foundation for Cheetah AGI\'s GEO/AEO consulting practice.',
  },
};

export default function CaseStudyPage({ params }) {
  const study = CASE_STUDIES.find((c) => c.slug === params.slug);
  if (!study) notFound();

  const body = CASE_BODIES[study.slug];
  const others = CASE_STUDIES.filter((c) => c.slug !== study.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: 'Home', href: '/' },
          { label: 'Case Studies', href: '/case-studies' },
          { label: study.client, href: `/case-studies/${study.slug}` },
        ])}
      />

      <section className="section pt-32">
        <div className="container-tight max-w-4xl">
          <ScrollReveal>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-bone/50 hover:text-strike"
            >
              <ArrowLeft className="w-4 h-4" /> All case studies
            </Link>

            <div className="mt-6 flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-bone/50">
              <span className="text-strike">{study.client}</span>
              <span aria-hidden>·</span>
              <span>{study.industry}</span>
            </div>

            <h1 className="font-display text-display-lg md:text-display-xl mt-4">
              {study.headline}
            </h1>
            <p className="mt-6 text-xl text-bone/75 font-serif italic leading-relaxed">
              {study.summary}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-12 grid grid-cols-3 gap-6 surface p-8">
              {study.metrics.map((m) => (
                <div key={m.l}>
                  <p className="font-display text-3xl md:text-4xl text-strike">{m.v}</p>
                  <p className="text-xs font-mono uppercase tracking-wider text-bone/50 mt-2">
                    {m.l}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {body && (
        <section className="section pt-0">
          <div className="container-tight max-w-3xl space-y-16">
            <ScrollReveal>
              <span className="eyebrow">The challenge</span>
              <h2 className="font-display text-2xl md:text-3xl mt-3">What they came in with.</h2>
              <p className="mt-6 text-lg text-bone/75 leading-relaxed">{body.challenge}</p>
            </ScrollReveal>

            <ScrollReveal>
              <span className="eyebrow">The approach</span>
              <h2 className="font-display text-2xl md:text-3xl mt-3">How we worked it.</h2>
              <ul className="mt-6 space-y-4">
                {body.approach.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-mono text-xs text-strike pt-1 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-bone/80 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <span className="eyebrow">The outcome</span>
              <h2 className="font-display text-2xl md:text-3xl mt-3">What it earned.</h2>
              <p className="mt-6 text-lg text-bone/75 leading-relaxed">{body.outcome}</p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="section pt-0">
          <div className="container-tight">
            <span className="eyebrow">Other case studies</span>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={o.href}
                  className="group block surface p-6 hover:border-strike/40 transition-all"
                >
                  <span className="text-xs font-mono uppercase tracking-wider text-bone/50">
                    {o.client}
                  </span>
                  <h3 className="font-display text-lg mt-2">{o.headline}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-strike">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        eyebrow="Want this kind of writeup about your business?"
        title={
          <>
            Then we should <span className="font-serif italic text-strike">work together</span>.
          </>
        }
        body="A 25-minute consultation. We'll tell you whether we think we can move your numbers — and if not, who could."
        primaryHref="/consultation"
        primaryLabel="Brief us"
      />
    </>
  );
}
