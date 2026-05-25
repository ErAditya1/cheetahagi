'use client';

import Link from 'next/link';
import { Brain, Workflow, Target, Bot, Search, LineChart, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SERVICES = [
  {
    icon: Brain,
    title: 'AI Consulting',
    desc: 'Strategy, architecture, and roadmaps for businesses moving from headcount to systems. We tell you what to build, what to skip, and what to kill.',
    href: '/services/ai-consulting',
    tag: 'Strategy',
  },
  {
    icon: Workflow,
    title: 'Automation Engineering',
    desc: 'End-to-end workflow automation across sales, ops, and content. Tools you already pay for, finally talking to each other.',
    href: '/services/automation',
    tag: 'Ops',
  },
  {
    icon: Target,
    title: 'Funnel Building',
    desc: 'High-conversion funnels engineered for B2B and D2C. Landing pages, lead routing, attribution — all instrumented from day one.',
    href: '/services/funnel-building',
    tag: 'Growth',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    desc: 'Voice and text agents that close, qualify, and follow up — built on ElevenLabs, GPT-class models, and Indian telecom infrastructure.',
    href: '/services/ai-agents',
    tag: 'Build',
  },
  {
    icon: Search,
    title: 'GEO / AEO Strategy',
    desc: 'Get cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews. The new SEO is being the answer, not just the result.',
    href: '/services/geo-aeo',
    tag: 'Visibility',
  },
  {
    icon: LineChart,
    title: 'Outcome Engineering',
    desc: 'We work on revenue share, retainers, or fixed scopes — but we measure ourselves on what your CFO measures: pipeline, MRR, cost per outcome.',
    href: '/services/outcome-engineering',
    tag: 'Model',
  },
];

const ICONS = [Brain, Workflow, Target, Bot, Search, LineChart];

export default function ServicesGrid({ services = SERVICES }) {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="eyebrow mb-6">What we ship</div>
              <h2 className="font-display font-medium text-display-lg text-bone text-balance">
                Six disciplines.
                <br />
                <span className="editorial-italic text-strike">One outcome.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <ScrollReveal delay={150}>
              <p className="text-bone-dim text-lg leading-relaxed">
                We don't sell tools. We sell results — installed in your business and measured against
                your P&amp;L. Every engagement starts with a 30-day diagnostic and ends with a system
                your team owns.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-700 border border-ink-700 rounded-2xl overflow-hidden">
          {services.map((s, i) => {
            const Icon = s.icon || ICONS[i % ICONS.length];
            return (
              <ScrollReveal key={s.href || s.slug} delay={i * 60} as="article">
                <Link
                  href={s.href || `/services/${s.slug}`}
                  className="group block bg-ink-900 hover:bg-ink-800 p-8 lg:p-10 h-full transition-all duration-500 relative overflow-hidden"
                >
                  {/* Hover speed-line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-strike scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-ink-800 group-hover:bg-strike/10 border border-ink-700 group-hover:border-strike/30 flex items-center justify-center transition-all">
                      <Icon className="w-5 h-5 text-bone-dim group-hover:text-strike transition-colors" />
                    </div>
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink-400">
                      {s.tag || 'Service'}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-medium text-bone mb-3 group-hover:text-strike transition-colors">
                    {s.title || s.name}
                  </h3>
                  <p className="text-bone-dim text-sm leading-relaxed mb-8">{s.desc || s.tagline}</p>

                  <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-400 group-hover:text-strike transition-colors">
                    <span>Engage</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
