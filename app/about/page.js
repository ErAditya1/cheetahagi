import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTASection';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About — The thesis behind Cheetah AGI',
  description:
    'A consultancy built around outcome economics. Headquartered in Lucknow. Operating globally. Founded by builders, not slide-makers.',
  path: '/about',
});

const PRINCIPLES = [
  {
    n: '01',
    t: 'Diagnose first',
    d: 'Every engagement starts with a paid 30-day diagnostic. We earn the right to build before we build.',
  },
  {
    n: '02',
    t: 'Outcome before output',
    d: 'Decks are not products. We measure ourselves on revenue impact, not deliverables shipped.',
  },
  {
    n: '03',
    t: 'Tell the truth fast',
    d: 'If AI isn\'t the answer for you, we say so on the first call. We turn down more work than we accept.',
  },
  {
    n: '04',
    t: 'Build to be left behind',
    d: 'Every system we deploy comes with documentation, training, and ownership transfer. No vendor lock-in.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section pt-36 md:pt-40">
        <div className="container-tight">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-9">
              <div className="eyebrow mb-6">About</div>
              <h1 className="font-display font-medium text-display-2xl text-bone text-balance leading-[0.92] mb-8">
                A consultancy built for the <span className="editorial-italic text-strike">outcome economy.</span>
              </h1>
              <p className="text-xl text-bone-dim leading-relaxed max-w-3xl">
                The attention economy is dying. The next ten years belong to companies that can deliver
                outcomes — not impressions, not engagement, not seats sold. Cheetah AGI exists to install
                that capability inside businesses that are ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The thesis */}
      <section className="section border-t border-ink-700">
        <div className="container-tight">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <div className="eyebrow mb-6">Origin</div>
                <h2 className="font-display font-medium text-display-lg text-bone text-balance leading-[0.95]">
                  Built by <span className="editorial-italic text-strike">builders.</span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-bone-dim text-lg leading-relaxed">
              <ScrollReveal delay={150}>
                <p>
                  Cheetah AGI is operated under Feeding Trends Media Pvt. Ltd. — a publishing and media
                  company with seven years of compound domain authority. We didn't pivot into AI. We
                  pivoted media into AI-native operations.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p>
                  The team ships products as well as advice. Callio (AI sales calling), Trubetix
                  (analytics), Strike Audit (GEO/AEO), and Whatspipe (content pipeline) are all built
                  in-house. We use what we sell. Often, before we sell it.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={450}>
                <p>
                  Headquartered in Lucknow. Operating across India, North America, Europe, and Southeast
                  Asia. Senior on every account. No outsourced delivery. No "junior consultant doing the
                  actual work."
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section border-t border-ink-700">
        <div className="container-tight">
          <div className="eyebrow mb-12">Operating principles</div>
          <div className="grid md:grid-cols-2 gap-px bg-ink-700 border border-ink-700 rounded-2xl overflow-hidden">
            {PRINCIPLES.map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 80}>
                <div className="bg-ink-900 hover:bg-ink-800 p-10 transition-colors h-full">
                  <div className="font-mono text-2xl text-strike mb-6">{p.n}</div>
                  <h3 className="font-display text-2xl font-medium text-bone mb-3">{p.t}</h3>
                  <p className="text-bone-dim leading-relaxed">{p.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to work with us?"
        description="Start with a 30-minute strategy call. We'll know within 15 minutes if we're a fit."
      />
    </>
  );
}
