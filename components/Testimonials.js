'use client';

import ScrollReveal from './ScrollReveal';

const TESTIMONIALS = [
  {
    quote:
      'They didn\'t pitch us tools. They installed an agent that books our demos at 3am and a funnel that pre-qualifies them. Our SDRs are now closers.',
    author: 'Founder',
    role: 'B2B SaaS · Series A',
    location: 'Bengaluru',
  },
  {
    quote:
      'Cheetah AGI replaced two agencies and three SaaS subscriptions with one system we own. Cost dropped 60%, output tripled.',
    author: 'CMO',
    role: 'D2C wellness brand',
    location: 'Delhi NCR',
  },
  {
    quote:
      'They speak revenue, not features. The diagnostic alone saved us six months of building the wrong thing.',
    author: 'COO',
    role: 'Manufacturing · Listed',
    location: 'Mumbai',
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6">
            <ScrollReveal>
              <div className="eyebrow mb-6">Operators on the record</div>
              <h2 className="font-display font-medium text-display-lg text-bone text-balance">
                Quiet results
                <br />
                <span className="editorial-italic text-strike">talk loudly.</span>
              </h2>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <figure className="surface p-8 h-full flex flex-col relative overflow-hidden group hover:border-strike/40 transition-colors">
                {/* Editorial quote mark */}
                <div className="font-serif text-7xl text-strike/30 leading-none mb-4 select-none">
                  "
                </div>
                <blockquote className="text-bone text-lg leading-relaxed flex-grow mb-8">
                  {t.quote}
                </blockquote>
                <figcaption className="border-t border-ink-700 pt-6">
                  <div className="font-display font-medium text-bone">{t.author}</div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-400 mt-1">
                    {t.role} · {t.location}
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
