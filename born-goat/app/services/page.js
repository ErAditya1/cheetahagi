'use client';

import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export default function ServicesPage() {
  const servicesData = [
    {
      slug: 'career-management',
      title: 'Career Management',
      description: 'We manage every aspect of an athlete\'s career, from contract negotiations to career planning and transitions.',
      icon: (
        <svg className="w-6 h-6 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      slug: 'legal-contracts',
      title: 'Contract Negotiation',
      description: 'Maximizing opportunities with strategic negotiations to secure the best terms and long-term value.',
      icon: (
        <svg className="w-6 h-6 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      slug: 'brand-building',
      title: 'Brand Management',
      description: 'Building powerful personal brands that connect athletes with global audiences and top-tier partners.',
      icon: (
        <svg className="w-6 h-6 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      )
    },
    {
      slug: 'media-pr',
      title: 'Public Relations',
      description: 'Handling media relations, public image, and communication to strengthen your reputation.',
      icon: (
        <svg className="w-6 h-6 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      slug: 'career-management', // Maps to career page for performance resources
      title: 'Performance Support',
      description: 'Access to world-class coaches, trainers, sports scientists, and mental conditioning experts.',
      icon: (
        <svg className="w-6 h-6 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      slug: 'financial-advisory',
      title: 'Lifestyle Management',
      description: 'From travel and accommodations to financial planning and personal assistance, we handle it all.',
      icon: (
        <svg className="w-6 h-6 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'DISCOVER',
      description: 'Understanding your goals, strengths, and aspirations.',
      icon: (
        <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      step: '02',
      title: 'STRATEGIZE',
      description: 'Creating a personalized roadmap for your career and brand.',
      icon: (
        <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      step: '03',
      title: 'EXECUTE',
      description: 'Implementing strategies and opening doors to the right opportunities.',
      icon: (
        <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 0V12m0 0h5m-5 0H7" />
        </svg>
      )
    },
    {
      step: '04',
      title: 'GROW',
      description: 'Continuous support to help you reach your full potential.',
      icon: (
        <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      step: '05',
      title: 'LEGACY',
      description: 'Building a lasting legacy that inspires generations.',
      icon: (
        <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-[180px] pb-[100px] bg-void overflow-hidden border-b border-[var(--border-subtle)]">
        <div 
          className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] pointer-events-none rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />

        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative z-10">
          <div className="grid grid-cols-[1.2fr_1fr] max-lg:grid-cols-1 gap-12 items-center">
            
            {/* Left Column */}
            <Reveal>
              <div>
                <span className="text-label text-[11px] font-mono tracking-extra-wide uppercase text-[var(--gold-primary)] font-bold block mb-4">
                  OUR SERVICES
                </span>
                <h1 className="font-heading text-[clamp(44px,5.5vw,76px)] leading-[0.92] tracking-cinematic uppercase text-primary mb-6">
                  BEYOND MANAGEMENT.<br />
                  <span className="text-gold-gradient italic font-light">WE BUILD LEGACIES.</span>
                </h1>
                <p className="text-secondary text-[16px] leading-[1.7] mb-10 max-w-[540px]">
                  At Born Goat, we provide end-to-end representation and strategic support for athletes to maximize their potential, both on and off the field.
                </p>

                {/* Numbers Grid */}
                <div className="grid grid-cols-2 gap-8 border-t border-[var(--border-subtle)] pt-8 max-sm:grid-cols-1">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="font-display text-3xl text-primary leading-none">100+</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-muted">Athletes Represented</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2m-4-3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                      <span className="font-display text-3xl text-primary leading-none">18+</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-muted">Countries Worldwide</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7.463 8.543A9.043 9.043 0 0112 12c1.98 0 3.82.64 5.318 1.73l-1.318 2.636a6.002 6.002 0 00-8-2.636l-1.464-2.187z" />
                      </svg>
                      <span className="font-display text-3xl text-primary leading-none">52+</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-muted">Championships Won</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-display text-3xl text-primary leading-none">240+</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-muted">Brands & Sponsors Partnered</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Player Portrait Silhouette */}
            <div className="relative h-[440px] max-lg:h-[320px] w-full flex items-center justify-center rounded border border-white/5 overflow-hidden">
              <img 
                src="/images/jacket-athlete.png" 
                alt="GOAT jersey" 
                className="w-full h-full object-cover grayscale brightness-50 contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="py-[120px] max-md:py-20 bg-void">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="text-center mb-16">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-primary)] font-bold">
                WHAT WE DO
              </span>
              <h2 className="font-heading text-4xl uppercase tracking-wider text-primary mt-2 font-bold">
                OUR SERVICES
              </h2>
              <div className="w-12 h-px bg-[var(--gold-primary)] mx-auto mt-4" />
            </div>
          </Reveal>

          {/* Cards Grid */}
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
            {servicesData.map((s, idx) => (
              <Reveal key={s.title} delay={idx * 50}>
                <Link href={`/services/${s.slug}`} className="block group text-decoration-none">
                  <div className="bg-[#070707] border border-[var(--border-subtle)] hover:border-[var(--border-gold)] p-8 rounded-[2px] transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col justify-between">
                    <div>
                      {/* Card Icon */}
                      <div className="w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center rounded-[2px] mb-6 group-hover:border-white/20 transition-colors">
                        {s.icon}
                      </div>

                      {/* Card Details */}
                      <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-primary mb-3">
                        {s.title}
                      </h3>
                      <p className="text-secondary text-[13px] leading-[1.6]">
                        {s.description}
                      </p>
                    </div>

                    <div className="mt-8 font-mono text-[9px] tracking-widest uppercase text-[var(--gold-primary)] flex items-center gap-1.5 font-bold">
                      LEARN MORE
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS TIMELINE */}
      <section className="py-[120px] max-md:py-20 bg-[#040404] border-t border-[var(--border-subtle)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          
          <Reveal className="text-center mb-24">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-primary)] font-bold">
                OUR PROCESS
              </span>
              <h2 className="font-heading text-4xl uppercase tracking-wider text-primary mt-2 font-bold">
                HOW WE WORK
              </h2>
              <div className="w-12 h-px bg-[var(--gold-primary)] mx-auto mt-4" />
            </div>
          </Reveal>

          {/* Timeline Grid */}
          <div className="relative">
            {/* Horizontal Line connecting steps */}
            <div className="absolute top-8 left-8 right-8 h-px bg-white/10 max-lg:hidden z-0" />

            <div className="grid grid-cols-5 max-lg:grid-cols-1 gap-8 relative z-10">
              {processSteps.map((p, idx) => (
                <Reveal key={p.step} delay={idx * 60}>
                  <div className="flex flex-col max-lg:flex-row max-lg:items-start gap-4">
                    {/* Circle number */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-[#080808] border border-[var(--border-subtle)] hover:border-[var(--border-gold)] flex items-center justify-center z-10 relative transition-colors duration-300 group">
                        <div className="absolute inset-0.5 rounded-full bg-void opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10 flex flex-col items-center">
                          <span className="font-mono text-[9px] text-muted block mb-0.5 font-bold">{p.step}</span>
                          {p.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-2 max-lg:pt-0 max-lg:flex-grow">
                      <span className="font-mono text-[10px] tracking-widest text-[var(--gold-primary)] font-bold block mb-1">
                        {p.step}. {p.title}
                      </span>
                      <p className="text-secondary text-[12px] leading-relaxed max-w-[200px] max-lg:max-w-full">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative py-[120px] bg-void border-t border-[var(--border-subtle)] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/images/stadium-dark.png" alt="Stadium" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative z-10 text-center">
          <Reveal>
            <div>
              <h2 className="font-heading text-[clamp(32px,5vw,56px)] leading-[0.95] uppercase text-primary mb-4 font-bold">
                READY TO ELEVATE YOUR CAREER?
              </h2>
              <p className="text-secondary text-[15px] max-w-[580px] mx-auto mb-10">
                Partner with Born Goat and take your journey to the next level. We offer industry-leading representation and branding support.
              </p>
              
              <div className="flex gap-4 justify-center max-sm:flex-col items-center">
                <Link href="/contact" className="btn-primary py-4 px-8 text-xs font-bold uppercase rounded-[1px] tracking-wider">
                  APPLY AS AN ATHLETE
                </Link>
                <Link href="/consultation" className="btn-secondary py-4 px-8 text-xs font-bold uppercase rounded-[1px] tracking-wider">
                  BOOK A CONSULTATION
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
