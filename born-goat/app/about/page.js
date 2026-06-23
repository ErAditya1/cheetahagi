'use client';

import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-[180px] pb-[100px] bg-void overflow-hidden border-b border-[var(--border-subtle)]">
        {/* Cinematic radial gradient */}
        <div
          className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[55vw] h-[55vw] pointer-events-none rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />

        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative z-10">
          <div className="grid grid-cols-[1.3fr_1fr_1.1fr] max-lg:grid-cols-1 gap-12 items-center">
            
            {/* Left: Branding & Tagline */}
            <Reveal>
              <div>
                <span className="text-label text-[11px] font-mono tracking-extra-wide uppercase text-[var(--gold-primary)] font-bold block mb-4">
                  ABOUT BORN GOAT
                </span>
                <h1 className="font-heading text-[clamp(42px,5.5vw,72px)] leading-[0.92] tracking-cinematic uppercase text-primary mb-8">
                  BEHIND EVERY CHAMPION<br />
                  THERE IS A TEAM <span className="text-gold-gradient italic font-light">THAT BELIEVES.</span>
                </h1>
                <p className="text-secondary text-[16px] leading-[1.7] mb-6 max-w-[480px]">
                  Born Goat is more than just an agency. We are architects of legacy, guardians of careers, and partners in greatness.
                </p>
                <p className="text-secondary text-[16px] leading-[1.7] mb-10 max-w-[480px]">
                  We represent the world's most elite athletes and build brands that inspire generations.
                </p>
                <div className="flex gap-4 max-sm:flex-col">
                  <a href="#story" className="btn-primary py-3.5 px-8 text-xs font-bold text-center">
                    OUR STORY
                  </a>
                  <a href="#values" className="btn-secondary py-3.5 px-8 text-xs font-bold text-center">
                    OUR VALUES
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Center: Lionel Messi Portrait */}
            <Reveal delay={60}>
              <div className="relative flex justify-center max-lg:my-8">
                <div className="w-[320px] max-sm:w-[280px] aspect-[3/4] relative rounded overflow-hidden border border-[var(--border-gold)] shadow-gold-glow">
                  <img
                    src="/athletes/messi.png"
                    alt="Lionel Messi"
                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest text-[var(--gold-primary)] border border-[var(--border-gold)] px-2 py-0.5 uppercase bg-black/60 backdrop-blur-sm font-bold">
                    CAPTAIN · 10
                  </span>
                  <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-widest text-white/80 uppercase font-bold">
                    LIONEL MESSI · BORN GOAT
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Stats Card */}
            <Reveal delay={120}>
              <div className="bg-[#0A0A0A] border border-[var(--border-subtle)] p-8 max-sm:p-6 rounded-[2px] shadow-2xl relative">
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--gold-primary)] to-transparent opacity-65" />
                
                <h3 className="font-heading text-sm font-bold uppercase text-primary mb-8 pb-4 border-b border-[var(--border-subtle)] tracking-wider">
                  OUR IMPACT IN NUMBERS
                </h3>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-8 max-sm:grid-cols-1">
                  {/* Stat 1 */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="font-display text-3xl leading-none text-primary">100+</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-muted font-mono leading-tight mt-2.5">Elite Athletes Represented</span>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7.463 8.543A9.043 9.043 0 0112 12c1.98 0 3.82.64 5.318 1.73l-1.318 2.636a6.002 6.002 0 00-8-2.636l-1.464-2.187z" />
                      </svg>
                      <span className="font-display text-3xl leading-none text-primary">52+</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-muted font-mono leading-tight mt-2.5">Championships Won</span>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2m-4-3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                      <span className="font-display text-3xl leading-none text-primary">18+</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-muted font-mono leading-tight mt-2.5">Countries Worldwide</span>
                  </div>

                  {/* Stat 4 */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-display text-3xl leading-none text-primary">240+</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-muted font-mono leading-tight mt-2.5">Brands & Sponsors Partnered</span>
                  </div>

                  {/* Stat 5 */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="font-display text-3xl leading-none text-primary">15+</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-muted font-mono leading-tight mt-2.5">Years of Excellence</span>
                  </div>

                  {/* Stat 6 */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      <span className="font-display text-3xl leading-none text-primary">1</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-muted font-mono leading-tight mt-2.5">Mission: Legacy</span>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* OUR STORY & VALUES SECTION */}
      <section id="story" className="py-[120px] max-md:py-20 bg-dark relative border-b border-[var(--border-subtle)]">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <div className="grid grid-cols-[1.3fr_1.1fr_1fr] max-lg:grid-cols-1 gap-12 items-start">
            
            {/* Story Text */}
            <Reveal>
              <div>
                <span className="text-label text-[11px] font-mono tracking-extra-wide uppercase text-muted block mb-4">
                  OUR STORY
                </span>
                <h2 className="font-heading text-4xl uppercase text-primary mb-8 tracking-wider">
                  FROM VISION TO GLOBAL IMPACT
                </h2>
                <p className="text-secondary text-[15px] leading-relaxed mb-6">
                  Founded by industry leaders with decades of experience in sports, marketing, and athlete management, Born Goat was built on one simple belief — athletes deserve more than representation, they deserve a legacy.
                </p>
                <p className="text-secondary text-[15px] leading-relaxed mb-10">
                  From promising talents to global icons, we guide every step of the journey with strategy, integrity, and passion.
                </p>

                {/* Founder Signature Section */}
                <div className="flex items-center gap-6 mt-12">
                  <svg className="w-[160px] h-[60px] text-[var(--gold-primary)]/80 stroke-current opacity-80" viewBox="0 0 200 80" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 50c15-25 30-35 45-15s10 30 25 10 20-30 35-5 15 25 30 5 15-20 25 5" />
                    <path d="M40 45h120" />
                  </svg>
                  <div>
                    <h4 className="font-heading text-sm text-primary uppercase tracking-wider mb-0.5 leading-none">RICKY GILL</h4>
                    <span className="text-[10px] tracking-widest text-muted font-mono uppercase font-bold">FOUNDER & CEO</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Documentary/Tunnel Visual */}
            <Reveal delay={60}>
              <div className="relative aspect-[3/4] w-full rounded overflow-hidden border border-[var(--border-subtle)] shadow-2xl max-w-[360px] mx-auto">
                <img
                  src="/images/jacket-athlete.png"
                  alt="Athlete walking in tunnel"
                  className="w-full h-full object-cover grayscale brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <span className="absolute bottom-6 left-6 font-mono text-[10px] tracking-widest text-white/70 uppercase">
                  THE TUNNEL · LEGACY DESIGNED
                </span>
              </div>
            </Reveal>

            {/* Our Values */}
            <Reveal delay={120}>
              <div id="values" className="lg:pl-6">
                <span className="text-label text-[11px] font-mono tracking-extra-wide uppercase text-muted block mb-4">
                  OUR VALUES
                </span>
                <h2 className="font-heading text-4xl uppercase text-primary mb-8 tracking-wider">
                  WHAT WE STAND FOR
                </h2>
                
                <div className="flex flex-col gap-8">
                  {/* Value 1 */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded border border-[var(--border-gold)] flex items-center justify-center flex-shrink-0 bg-void/50 text-[var(--gold-primary)] font-bold">
                      E
                    </div>
                    <div>
                      <h4 className="font-heading text-sm text-primary uppercase tracking-wider mb-1.5 leading-none">EXCELLENCE</h4>
                      <p className="text-secondary text-xs leading-relaxed">We set the standard and raise the bar every day.</p>
                    </div>
                  </div>

                  {/* Value 2 */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded border border-[var(--border-gold)] flex items-center justify-center flex-shrink-0 bg-void/50 text-[var(--gold-primary)] font-bold">
                      I
                    </div>
                    <div>
                      <h4 className="font-heading text-sm text-primary uppercase tracking-wider mb-1.5 leading-none">INTEGRITY</h4>
                      <p className="text-secondary text-xs leading-relaxed">Honesty, transparency, and loyalty in everything we do.</p>
                    </div>
                  </div>

                  {/* Value 3 */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded border border-[var(--border-gold)] flex items-center justify-center flex-shrink-0 bg-void/50 text-[var(--gold-primary)] font-bold">
                      P
                    </div>
                    <div>
                      <h4 className="font-heading text-sm text-primary uppercase tracking-wider mb-1.5 leading-none">PASSION</h4>
                      <p className="text-secondary text-xs leading-relaxed">We live and breathe sports. Our passion drives your success.</p>
                    </div>
                  </div>

                  {/* Value 4 */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded border border-[var(--border-gold)] flex items-center justify-center flex-shrink-0 bg-void/50 text-[var(--gold-primary)] font-bold">
                      N
                    </div>
                    <div>
                      <h4 className="font-heading text-sm text-primary uppercase tracking-wider mb-1.5 leading-none">INNOVATION</h4>
                      <p className="text-secondary text-xs leading-relaxed">Forward-thinking strategies for modern athletes.</p>
                    </div>
                  </div>

                  {/* Value 5 */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded border border-[var(--border-gold)] flex items-center justify-center flex-shrink-0 bg-void/50 text-[var(--gold-primary)] font-bold">
                      L
                    </div>
                    <div>
                      <h4 className="font-heading text-sm text-primary uppercase tracking-wider mb-1.5 leading-none">LEGACY</h4>
                      <p className="text-secondary text-xs leading-relaxed">We build more than careers, we build legacies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE SECTION */}
      <section className="py-[120px] max-md:py-20 bg-void border-b border-[var(--border-subtle)]">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          
          <div className="grid grid-cols-[1.1fr_2fr] max-lg:grid-cols-1 gap-16 items-center">
            
            {/* Left Block */}
            <Reveal>
              <div className="relative p-10 max-sm:p-6 bg-dark border border-[var(--border-subtle)] rounded-[2px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale opacity-15"
                  style={{ backgroundImage: "url('/images/stadium-dark.png')" }}
                />
                <div className="relative z-10">
                  <span className="text-label text-[11px] font-mono tracking-extra-wide uppercase text-muted block mb-4">
                    WHAT WE BELIEVE
                  </span>
                  <h3 className="font-heading text-3xl uppercase text-primary leading-tight mb-6">
                    ATHLETES ARE MORE THAN PLAYERS. <br />
                    THEY ARE <span className="text-gold-gradient italic font-light">ICONS.</span>
                  </h3>
                  <p className="text-secondary text-[14px] leading-relaxed mb-8">
                    We believe in nurturing talent, protecting careers, and creating opportunities that go beyond the game. Your success is our mission.
                  </p>
                  <Link href="/contact" className="btn-secondary py-3 px-6 text-[11px] font-bold text-center block">
                    JOIN THE LEGACY
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Right Block: 4 cards */}
            <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <Reveal delay={40}>
                <div className="relative h-[280px] bg-[#0A0A0A] border border-[var(--border-subtle)] rounded-[2px] overflow-hidden flex flex-col justify-end p-5 group hover:border-[var(--border-gold)] transition-colors duration-500">
                  <img
                    src="/athletes/ronaldo.png"
                    alt="Represent"
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.25] group-hover:brightness-50 group-hover:scale-105 transition-all duration-[800ms]"
                  />
                  <div className="relative z-10">
                    <h4 className="font-heading text-[16px] text-primary uppercase tracking-wider mb-2">REPRESENT</h4>
                    <p className="text-secondary text-[11px] leading-relaxed">World-class representation for world-class talent.</p>
                  </div>
                </div>
              </Reveal>

              {/* Card 2 */}
              <Reveal delay={80}>
                <div className="relative h-[280px] bg-[#0A0A0A] border border-[var(--border-subtle)] rounded-[2px] overflow-hidden flex flex-col justify-end p-5 group hover:border-[var(--border-gold)] transition-colors duration-500">
                  <img
                    src="/athletes/serena.png"
                    alt="Develop"
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.25] group-hover:brightness-50 group-hover:scale-105 transition-all duration-[800ms]"
                  />
                  <div className="relative z-10">
                    <h4 className="font-heading text-[16px] text-primary uppercase tracking-wider mb-2">DEVELOP</h4>
                    <p className="text-secondary text-[11px] leading-relaxed">Guiding athletes to reach their full potential.</p>
                  </div>
                </div>
              </Reveal>

              {/* Card 3 */}
              <Reveal delay={120}>
                <div className="relative h-[280px] bg-[#0A0A0A] border border-[var(--border-subtle)] rounded-[2px] overflow-hidden flex flex-col justify-end p-5 group hover:border-[var(--border-gold)] transition-colors duration-500">
                  <img
                    src="/athletes/djokovic.png"
                    alt="Elevate"
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.25] group-hover:brightness-50 group-hover:scale-105 transition-all duration-[800ms]"
                  />
                  <div className="relative z-10">
                    <h4 className="font-heading text-[16px] text-primary uppercase tracking-wider mb-2">ELEVATE</h4>
                    <p className="text-secondary text-[11px] leading-relaxed">Building brands that stand out on and off the field.</p>
                  </div>
                </div>
              </Reveal>

              {/* Card 4 */}
              <Reveal delay={160}>
                <div className="relative h-[280px] bg-[#0A0A0A] border border-[var(--border-subtle)] rounded-[2px] overflow-hidden flex flex-col justify-end p-5 group hover:border-[var(--border-gold)] transition-colors duration-500">
                  <img
                    src="/athletes/priya.png"
                    alt="Empower"
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.25] group-hover:brightness-50 group-hover:scale-105 transition-all duration-[800ms]"
                  />
                  <div className="relative z-10">
                    <h4 className="font-heading text-[16px] text-primary uppercase tracking-wider mb-2">EMPOWER</h4>
                    <p className="text-secondary text-[11px] leading-relaxed">Creating opportunities that create impact and inspire.</p>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* PARTNER BRANDS & QUOTE FOOTER SECTION */}
      <section className="py-[80px] bg-dark relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <div className="grid grid-cols-[1.2fr_1fr] max-md:grid-cols-1 gap-12 items-center">
            
            {/* Left: Trusted Partner Logos */}
            <Reveal>
              <div>
                <span className="text-label text-[10px] font-mono tracking-extra-wide uppercase text-muted block mb-6 font-bold">
                  TRUSTED BY THE WORLD'S BEST
                </span>
                <div className="flex gap-8 items-center flex-wrap">
                  {/* Nike */}
                  <img
                    src="/logos/nike.svg"
                    alt="Nike"
                    className="h-5 grayscale brightness-[0.3] hover:brightness-[0.95] transition-all duration-300"
                  />
                  {/* Adidas */}
                  <img
                    src="/logos/adidas.svg"
                    alt="Adidas"
                    className="h-7 grayscale brightness-[0.3] hover:brightness-[0.95] transition-all duration-300"
                  />
                  {/* Puma */}
                  <img
                    src="/logos/puma.svg"
                    alt="Puma"
                    className="h-6 grayscale brightness-[0.3] hover:brightness-[0.95] transition-all duration-300"
                  />
                  {/* EA Sports */}
                  <img
                    src="/logos/ea-sports.svg"
                    alt="EA Sports"
                    className="h-8 grayscale brightness-[0.3] hover:brightness-[0.95] transition-all duration-300"
                  />
                  {/* Red Bull */}
                  <img
                    src="/logos/redbull.svg"
                    alt="Red Bull"
                    className="h-6 grayscale brightness-[0.3] hover:brightness-[0.95] transition-all duration-300"
                  />
                  {/* Gatorade */}
                  <img
                    src="/logos/gatorade.svg"
                    alt="Gatorade"
                    className="h-6 grayscale brightness-[0.3] hover:brightness-[0.95] transition-all duration-300"
                  />
                  {/* Under Armour */}
                  <img
                    src="/logos/under-armour.svg"
                    alt="Under Armour"
                    className="h-6 grayscale brightness-[0.3] hover:brightness-[0.95] transition-all duration-300"
                  />
                </div>
              </div>
            </Reveal>

            {/* Right: Michael Jordan Quote & Signature */}
            <Reveal delay={80}>
              <div className="flex items-center gap-6 border-l border-[var(--border-subtle)] pl-10 max-md:border-l-0 max-md:pl-0 max-md:mt-4">
                <div className="flex-grow">
                  <blockquote className="font-heading text-lg text-primary italic leading-relaxed mb-3">
                    "Talent wins games, but teamwork and intelligence win championships."
                  </blockquote>
                  <cite className="font-mono text-[10px] tracking-wider text-muted not-italic uppercase font-bold">
                    — Michael Jordan
                  </cite>
                </div>
                
                {/* MJ Signature representation */}
                <svg className="w-[120px] h-[50px] text-[var(--gold-primary)]/80 stroke-current opacity-80 flex-shrink-0" viewBox="0 0 160 80" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M30,60 C40,40 60,10 70,30 C80,50 90,60 110,40 C120,30 130,20 140,50 C110,50 90,40 60,30" />
                  <circle cx="70" cy="30" r="10" />
                </svg>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}
