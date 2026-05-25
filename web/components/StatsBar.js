'use client';

import ScrollReveal from './ScrollReveal';

const STATS = [
  { value: '₹14Cr+', label: 'Pipeline generated for clients', context: 'across 18 engagements' },
  { value: '12ms', label: 'Mean agent response time', context: 'on Indian telecom infrastructure' },
  { value: '94%', label: 'Client retention', context: 'past 24 months' },
  { value: '7yrs', label: 'Domain authority via Feeding Trends', context: 'compound visibility moat' },
];

export default function StatsBar() {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-10 lg:px-16 border-y border-ink-700 bg-ink-900/40 overflow-hidden">
      <div className="absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-30" />
      <div className="container-tight relative">
        <ScrollReveal>
          <div className="eyebrow mb-12">Receipts</div>
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink-700">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div className="bg-ink-950 p-8 lg:p-10 h-full">
                <div className="font-display font-medium text-display-lg text-strike leading-none mb-4">
                  {stat.value}
                </div>
                <div className="text-bone text-sm leading-snug mb-2">{stat.label}</div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-400">
                  {stat.context}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
