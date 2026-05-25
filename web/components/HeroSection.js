'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import CheetahLogo from './CheetahLogo';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-[100svh] grain overflow-hidden pt-24 md:pt-32 pb-16 px-6 md:px-10 lg:px-16">
      {/* Atmospheric background — gradient mesh + grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(197,255,61,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-40" />
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-cyber/5 blur-[120px] rounded-full" />
      </div>

      {/* Scrolling speed marquee — distant kinetic motif */}
      <div className="absolute top-24 left-0 right-0 overflow-hidden border-y border-ink-700 bg-ink-900/30 backdrop-blur-sm">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ink-400">
              <span>◆ AI Consulting</span>
              <span>◆ Outcome Economics</span>
              <span>◆ Sales Agents</span>
              <span>◆ Funnel Engineering</span>
              <span className="text-strike">◆ Built in Lucknow → Deployed Globally</span>
              <span>◆ Generative Engine Optimization</span>
              <span>◆ AI Calling SaaS</span>
              <span>◆ B2B Automation</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-20 md:pt-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left — copy block */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className={`eyebrow mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Sparkles className="w-3 h-3 text-strike" />
              AI Consulting · Est. 2024
            </div>

            <h1
              className={`font-display font-medium text-display-2xl text-bone text-balance mb-8 transition-all duration-1000 delay-100 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              We build{' '}
              <span className="relative inline-block">
                <span className="editorial-italic text-strike">AI systems</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-strike" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,2 100,6 T200,5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              that <span className="editorial-italic">close.</span>
            </h1>

            <p
              className={`text-lg md:text-xl text-bone-dim leading-relaxed max-w-xl mb-10 transition-all duration-1000 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              We engineer outcome-based AI infrastructure for companies done with theatre. Funnels that
              convert. Agents that operate. Automation that compounds — measured in revenue, not vanity
              metrics.
            </p>

            <div
              className={`flex flex-wrap items-center gap-4 mb-12 transition-all duration-1000 delay-500 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Link href="/consultation" className="btn-strike">
                Book Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/case-studies" className="btn-ghost">
                See the proof
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-ink-700">
              {[
                { v: '7yr', l: 'Domain authority' },
                { v: '40+', l: 'AI systems shipped' },
                { v: '₹14Cr', l: 'Pipeline generated' },
                { v: '94%', l: 'Retention' },
              ].map((stat) => (
                <div key={stat.l}>
                  <div className="font-display text-2xl text-bone leading-none">{stat.v}</div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-400 mt-1">
                    {stat.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — animated cheetah panel */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Concentric strike rings — pulse effect */}
              <div className="absolute inset-0 rounded-full border border-strike/20 animate-pulse-strike" />
              <div className="absolute inset-8 rounded-full border border-strike/30 animate-pulse-strike" style={{ animationDelay: '0.4s' }} />
              <div className="absolute inset-16 rounded-full border border-strike/40 animate-pulse-strike" style={{ animationDelay: '0.8s' }} />

              {/* Center mark with attacking pose */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <CheetahLogo className="w-48 h-48 md:w-64 md:h-64" animated />
                </div>
              </div>

              {/* Floating data chips */}
              <div className="absolute top-4 -left-4 surface-raised px-3 py-2 hidden md:block">
                <div className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-400">Latency</div>
                <div className="font-display text-sm text-strike">12ms</div>
              </div>
              <div className="absolute bottom-8 -right-4 surface-raised px-3 py-2 hidden md:block">
                <div className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-400">Conv. Lift</div>
                <div className="font-display text-sm text-strike">+340%</div>
              </div>
              <div className="absolute top-1/3 -right-8 surface-raised px-3 py-2 hidden md:block">
                <div className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-400">Status</div>
                <div className="font-display text-sm text-bone flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-strike rounded-full animate-pulse" />
                  Live
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-ink-400">Scroll</div>
        <div className="w-px h-12 bg-gradient-to-b from-strike to-transparent" />
      </div>
    </section>
  );
}
