'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { athletes } from '@/lib/content';

export default function Home() {
  // Roster Category Filtering
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Testimonial Carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Services Accordion/Tab Selection
  const [activeService, setActiveService] = useState(0);

  // Media Gallery Filter
  const [activeMediaTab, setActiveMediaTab] = useState('All');

  // Count up animation references and triggers
  const [statsAnimated, setStatsAnimated] = useState(false);
  const statsSectionRef = useRef(null);
  const [statsValues, setStatsValues] = useState({
    athletes: 0,
    championships: 0,
    countries: 0,
    sponsorships: 0
  });

  const servicesData = [
    {
      title: 'Career Management',
      sub: 'Strategic athletic growth and club transfers.',
      desc: 'We map out a comprehensive developmental path for each client. From organizing training camp exposures and managing performance coaching to directing club transfers globally, we oversee every phase of the professional cycle.'
    },
    {
      title: 'Brand Building',
      sub: 'Architecting personal media and storytelling portfolios.',
      desc: 'We transform athletes into iconic personal brands. We curate social media narratives, organize public relations campaigns, secure high-profile magazine covers, and produce mini-documentaries that capture their unique journey.'
    },
    {
      title: 'Marketing & Endorsements',
      sub: 'Securing top-tier sportswear and lifestyle sponsorships.',
      desc: 'We pitch to leading corporations to secure premium endorsements. Whether negotiating multi-million sportswear campaigns or securing contracts with luxury brands, we defend our roster’s commercial potential.'
    },
    {
      title: 'Legal & Contracts',
      sub: 'Protecting player agreements, trademarks, and likenesses.',
      desc: 'Our sports attorneys negotiate contracts with clubs, safeguard intellectual properties, and optimize image rights allocations to ensure client likeness earnings are protected and legal frameworks are robust.'
    },
    {
      title: 'Media & Public Relations',
      sub: 'Crisis communications and broadcast placements.',
      desc: 'We secure media exposures on premier networks. We provide media coaching, draft speaking points for press conferences, and run rapid-response panels during live tournament windows.'
    },
    {
      title: 'Financial Advisory',
      sub: 'Establishing wealth protection and investments.',
      desc: 'We coordinate wealth management advisors to secure family futures. We set up trust accounts, handle multi-national tax planning, and advise on low-risk sports venture acquisitions.'
    }
  ];

  const testimonials = [
    {
      quote: '“Born Goat believed in me when no one else did. Their support system allowed me to transform potential into world-class performance.”',
      author: 'Kylian Mbappé',
      role: 'Football Superstar',
      avatar: '/athletes/ronaldo.png'
    },
    {
      quote: '“They handle everything off the court—the sponsorships, the legal issues, the wealth planning—so I can focus 100% on winning Grand Slams.”',
      author: 'Serena Williams',
      role: 'Tennis Legend',
      avatar: '/athletes/serena.png'
    },
    {
      quote: '“More than agents, they’re family. They stand by you in tough times and make sure your legacy is protected for generations.”',
      author: 'Neymar Jr',
      role: 'Football Icon',
      avatar: '/athletes/messi.png'
    }
  ];

  const mediaGallery = [
    { type: 'Photos', src: '/athletes/ronaldo.png', caption: 'Championship celebration in Europe' },
    { type: 'Photos', src: '/athletes/messi.png', caption: 'Golden trophy ceremony coverage' },
    { type: 'Videos', src: '/athletes/arjun.png', caption: 'Arjun Sharma locker room feature clip' },
    { type: 'Events', src: '/athletes/priya.png', caption: 'Global sportswear ambassador signing' }
  ];

  // Scroll Reveal Observer
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));

    // Stats Section Observer for Count Up
    const statsSection = statsSectionRef.current;
    const statsObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          animateStats();
        }
      },
      { threshold: 0.2 }
    );
    if (statsSection) {
      statsObserver.observe(statsSection);
    }

    return () => {
      observer.disconnect();
      if (statsSection) statsObserver.unobserve(statsSection);
    };
  }, [statsAnimated]);

  // Magnetic Buttons Hook
  useEffect(() => {
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach((btn) => {
      const handleMouseMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      };
      const handleMouseLeave = () => {
        btn.style.transform = 'translate(0, 0)';
      };
      btn.addEventListener('mousemove', handleMouseMove);
      btn.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        btn.removeEventListener('mousemove', handleMouseMove);
        btn.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  // Stats count up logic
  const animateStats = () => {
    const duration = 2000;
    const start = performance.now();
    const targets = {
      athletes: 120,
      championships: 52,
      countries: 18,
      sponsorships: 240
    };

    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      
      setStatsValues({
        athletes: Math.floor(eased * targets.athletes),
        championships: Math.floor(eased * targets.championships),
        countries: Math.floor(eased * targets.countries),
        sponsorships: Math.floor(eased * targets.sponsorships)
      });

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  const filteredAthletes = activeCategory === 'All' 
    ? athletes 
    : athletes.filter(a => a.category === activeCategory);

  const filteredMedia = activeMediaTab === 'All'
    ? mediaGallery
    : mediaGallery.filter(m => m.type === activeMediaTab);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="hero__media">
          <img 
            src="/images/hero-athlete.png" 
            alt="Elite Athlete" 
            className="hero__bg-image"
          />
          <div className="hero__overlay"></div>
          <div className="absolute inset-0 gradient-vignette"></div>
        </div>

        <div className="hero__content container">
          <span className="text-label reveal">Premium Athlete Management</span>
          <h1 className="hero__headline reveal">
            We Build<br />
            <span className="text-gold-gradient">Legends.</span>
          </h1>
          <p className="hero__sub reveal">
            From emerging talent to world-class champions — we manage, protect, and grow the careers of elite athletes across 18+ sports.
          </p>
          <div className="hero__cta-group reveal">
            <a href="#athletes" className="btn-primary">Explore Our Athletes</a>
            <a href="#contact" className="btn-secondary">Apply as Athlete</a>
          </div>

          {/* Quick stats strip at hero bottom */}
          <div className="hero__stats reveal">
            <div className="hero__stat">
              <span className="hero__stat-number">120+</span>
              <span className="hero__stat-label">Athletes Managed</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">52</span>
              <span className="hero__stat-label">Championships</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">18</span>
              <span className="hero__stat-label">Countries</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">₹240Cr+</span>
              <span className="hero__stat-label">Sponsorships Secured</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-10 max-md:left-5 flex items-center gap-3 z-10 text-[10px] tracking-widest text-muted uppercase font-mono">
          <span className="animate-bounce">↓</span>
          <span>Scroll to Explore</span>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* 2. TRUSTED BY (Sponsors) */}
      <section className="section section--raised py-12">
        <div className="container">
          <p className="text-label text-center mb-8">
            Trusted Sponsors & Partners
          </p>
          <div className="trusted-logos">
            <img src="/logos/nike.svg" alt="Nike" className="trusted-logo" />
            <img src="/logos/adidas.svg" alt="Adidas" className="trusted-logo" />
            <img src="/logos/puma.svg" alt="Puma" className="trusted-logo" />
            <img src="/logos/redbull.svg" alt="Red Bull" className="trusted-logo" />
            <img src="/logos/ea-sports.svg" alt="EA Sports" className="trusted-logo" />
            <img src="/logos/gatorade.svg" alt="Gatorade" className="trusted-logo" />
            <img src="/logos/under-armour.svg" alt="Under Armour" className="trusted-logo" />
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* 3. FEATURED ATHLETES GRID */}
      <section className="section section--dark" id="athletes">
        <div className="container">
          <div className="section-header reveal">
            <span className="text-label">Our Roster</span>
            <h2>Meet the Champions</h2>
            <div className="divider"></div>
          </div>

          {/* Filter Pills */}
          <div className="filter-pills reveal">
            {['All', 'Football', 'Cricket', 'Tennis'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill ${activeCategory === cat ? 'filter-pill--active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Athlete Cards */}
          <div className="athletes-grid reveal">
            {filteredAthletes.map((athlete, index) => (
              <Link key={index} href={`/athletes/${athlete.slug}`} className="text-decoration-none block">
                <div className="athlete-card">
                  <div className="athlete-card__image">
                    <img src={athlete.imageAsset} alt={athlete.name} />
                    <span className="athlete-card__sport-badge">{athlete.sport}</span>
                  </div>
                  <div className="athlete-card__body">
                    <h3 className="athlete-card__name">{athlete.name}</h3>
                    <div className="athlete-card__meta">
                      <span>{athlete.flag}</span>
                      <span>{athlete.country}</span>
                      <span>·</span>
                      <span>{athlete.age}</span>
                    </div>
                    <div className="athlete-card__stats">
                      <div className="athlete-card__stat">
                        <span className="athlete-card__stat-value">{athlete.followers}</span>
                        <span className="athlete-card__stat-label">Reach</span>
                      </div>
                      <div className="athlete-card__stat">
                        <span className="athlete-card__stat-value">{athlete.trophies}</span>
                        <span className="athlete-card__stat-label">Trophies</span>
                      </div>
                      <div className="athlete-card__stat">
                        <span className="athlete-card__stat-value">{athlete.sponsor}</span>
                        <span className="athlete-card__stat-label">Sponsor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link href="/athletes" className="btn-secondary">
              View All Athletes
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* 4. ACHIEVEMENT STATS SECTION */}
      <section className="section section--surface" ref={statsSectionRef}>
        <div className="container">
          <div className="section-header reveal">
            <span className="text-label">By the Numbers</span>
            <h2>A Legacy of Excellence</h2>
            <div className="divider"></div>
          </div>

          <div className="stat-counter-grid reveal">
            <div className="stat-counter-item">
              <span className="stat-counter-number">
                {statsAnimated ? `${statsValues.athletes}+` : '0'}
              </span>
              <span className="stat-counter-label">Athletes Managed</span>
            </div>
            <div className="stat-counter-item">
              <span className="stat-counter-number">
                {statsAnimated ? statsValues.championships : '0'}
              </span>
              <span className="stat-counter-label">Championships Won</span>
            </div>
            <div className="stat-counter-item">
              <span className="stat-counter-number">
                {statsAnimated ? statsValues.countries : '0'}
              </span>
              <span className="stat-counter-label">Countries Represented</span>
            </div>
            <div className="stat-counter-item">
              <span className="stat-counter-number">
                {statsAnimated ? `${statsValues.sponsorships}+` : '0'}
              </span>
              <span className="stat-counter-label">Sponsorship Deals</span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* 5. SERVICES ACCORDION */}
      <section className="section section--dark" id="services">
        <div className="container">
          <div className="section-header reveal">
            <span className="text-label">Our Expertise</span>
            <h2>End-to-End Management</h2>
            <div className="divider"></div>
          </div>

          <div className="grid grid-cols-[1fr_1.5fr] max-md:grid-cols-1 gap-12 items-start reveal">
            {/* Left Column Tabs */}
            <div className="flex flex-col gap-3">
              {servicesData.map((service, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  className={`text-left p-6 border transition-all duration-300 rounded-[2px] ${
                    activeService === idx
                      ? 'bg-surface border-[var(--border-gold)] shadow-gold-glow'
                      : 'bg-card border-[var(--border-subtle)] hover:border-[var(--border-default)]'
                  }`}
                >
                  <span className="font-mono text-xs text-[var(--gold-primary)] block mb-1">
                    0{idx + 1}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-primary uppercase">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted mt-1">{service.sub}</p>
                </button>
              ))}
            </div>

            {/* Right Column Description */}
            <div className="bg-card border border-[var(--border-default)] p-12 max-sm:p-6 rounded-sm min-h-[350px] flex flex-col justify-between">
              <div>
                <span className="text-label font-mono">
                  Service 0{activeService + 1}
                </span>
                <h3 className="font-heading text-4xl max-sm:text-2xl text-primary uppercase mt-4 mb-6">
                  {servicesData[activeService].title}
                </h3>
                <p className="text-body-lg text-secondary leading-relaxed">
                  {servicesData[activeService].desc}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                <Link href="/services" className="btn-primary">
                  Learn About Our Offerings →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* 6. CAREER TIMELINE */}
      <section className="section section--raised">
        <div className="container container--narrow">
          <div className="section-header reveal">
            <span className="text-label">The Path</span>
            <h2>The Making of a Legend</h2>
            <div className="divider"></div>
          </div>

          <div className="timeline reveal">
            <div className="timeline__item">
              <div className="timeline__marker"></div>
              <div className="timeline__content">
                <span className="text-label">Stage 1</span>
                <h3 className="timeline__title">Discovery & Scouting</h3>
                <p className="text-body">We identify raw talent in grassroots sports, academies, and regional tournaments across India and beyond.</p>
              </div>
            </div>
            <div className="timeline__item">
              <div className="timeline__marker"></div>
              <div className="timeline__content">
                <span className="text-label">Stage 2</span>
                <h3 className="timeline__title">Development & Training</h3>
                <p class="text-body">Access to world-class coaching, sports science, nutrition planning, and mental conditioning programs.</p>
              </div>
            </div>
            <div className="timeline__item">
              <div className="timeline__marker"></div>
              <div className="timeline__content">
                <span className="text-label">Stage 3</span>
                <h3 className="timeline__title">Career Management</h3>
                <p class="text-body">Contract negotiation, club transfers, national team placement, and strategic career planning by seasoned professionals.</p>
              </div>
            </div>
            <div className="timeline__item">
              <div className="timeline__marker"></div>
              <div className="timeline__content">
                <span className="text-label">Stage 4</span>
                <h3 className="timeline__title">Brand & Sponsorship</h3>
                <p class="text-body">Building the athlete as a commercial brand — social media growth, endorsement deals with Nike, Adidas, and leading Indian brands.</p>
              </div>
            </div>
            <div className="timeline__item">
              <div className="timeline__marker timeline__marker--gold"></div>
              <div className="timeline__content">
                <span className="text-label">Stage 5</span>
                <h3 className="timeline__title">Legacy</h3>
                <p class="text-body">Hall of fame, post-career planning, philanthropic sports ventures, and building a lifetime brand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* 7. TROPHY GALLERY */}
      <section className="section section--surface">
        <div className="container">
          <div className="section-header reveal">
            <span className="text-label">Championships</span>
            <h2>Championship Trophies</h2>
            <div className="divider"></div>
          </div>

          <div className="grid grid-cols-[1.2fr_1.5fr] max-md:grid-cols-1 gap-12 items-center reveal">
            {/* Left Visual: 3D render ballon dor */}
            <div className="relative aspect-[4/3] rounded overflow-hidden border border-[var(--border-gold)] shadow-gold-glow">
              <img 
                src="/images/ballon-dor.png" 
                alt="Gold Ballon d'Or Trophy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-label text-xs block mb-1">Elite Roster Honors</span>
                <h4 className="font-heading text-2xl font-bold uppercase">The Ballon d'Or Standard</h4>
              </div>
            </div>

            {/* Right: Trophy Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="trophy-card">
                <span className="trophy-card__icon" aria-hidden="true">⚽</span>
                <h3 className="trophy-card__title">Ballon d'Or</h3>
                <span className="trophy-card__count">13</span>
              </div>
              <div className="trophy-card">
                <span className="trophy-card__icon" aria-hidden="true">🏆</span>
                <h3 className="trophy-card__title">Champions League</h3>
                <span className="trophy-card__count">43</span>
              </div>
              <div className="trophy-card">
                <span className="trophy-card__icon" aria-hidden="true">🎾</span>
                <h3 className="trophy-card__title">Grand Slam Titles</h3>
                <span className="trophy-card__count">127</span>
              </div>
              <div className="trophy-card">
                <span className="trophy-card__icon" aria-hidden="true">🥇</span>
                <h3 className="trophy-card__title">Olympic Medals</h3>
                <span className="trophy-card__count">72</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* 8. DOCUMENTARY / STORY SECTION */}
      <section className="section section--dark">
        <div className="container">
          <div className="documentary-layout reveal">
            {/* Image side */}
            <div className="documentary-visual">
              <img src="/images/documentary-still.png" alt="Behind the Journey" className="documentary-img" />
              <div className="documentary-img-label">
                <span className="text-label">Est. 2018</span>
              </div>
            </div>

            {/* Text side */}
            <div className="documentary-text">
              <span className="text-label">BORN GOAT Originals</span>
              <h2 className="text-h1" style={{ margin: '1rem 0' }}>
                Behind Every Champion,<br />
                <span className="text-gold-gradient">There Is a Journey.</span>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: '1.5rem' }}>
                We don't just manage contracts. We architect careers. From scouting raw talent in grassroots tournaments to placing our athletes on the world stage — every decision we make is built around one belief: potential is only the beginning.
              </p>
              <p className="text-body" style={{ marginBottom: '2.5rem' }}>
                Our team of former athletes, legal experts, sponsorship specialists, and performance coaches form a 360° support system that turns promising players into global brands.
              </p>
              <Link href="/about" className="btn-primary">Our Approach →</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* 9. TESTIMONIALS */}
      <section className="section section--raised">
        <div className="container container--narrow">
          <div className="section-header reveal">
            <span className="text-label">Voices of Trust</span>
            <h2>What They Say</h2>
            <div className="divider"></div>
          </div>

          <div className="bg-card border border-[var(--border-default)] p-12 max-sm:p-6 rounded-[2px] text-center relative reveal">
            {/* Large Quote Mark */}
            <span className="absolute top-4 left-6 text-7xl font-serif text-[var(--gold-subtle)] leading-none select-none pointer-events-none">“</span>
            
            <p className="font-heading text-2xl max-sm:text-lg text-primary italic leading-relaxed mb-8">
              {testimonials[activeTestimonial].quote}
            </p>

            <div className="flex flex-col items-center">
              <h4 className="font-heading text-lg font-bold text-[var(--gold-primary)] uppercase">
                {testimonials[activeTestimonial].author}
              </h4>
              <span className="text-xs text-muted mt-1 uppercase tracking-wider">
                {testimonials[activeTestimonial].role}
              </span>
            </div>

            {/* Testimonials Dots Slider Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeTestimonial === idx 
                      ? 'bg-[var(--gold-primary)] w-6' 
                      : 'bg-ghost hover:bg-muted'
                  }`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* 10. MEDIA GALLERY */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header reveal">
            <span className="text-label">Moments of Glory</span>
            <h2>Media Gallery</h2>
            <div className="divider"></div>
          </div>

          {/* Filter tabs */}
          <div className="filter-pills reveal">
            {['All', 'Photos', 'Videos', 'Events'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveMediaTab(tab)}
                className={`filter-pill ${activeMediaTab === tab ? 'filter-pill--active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 reveal">
            {filteredMedia.map((item, idx) => (
              <div key={idx} className="relative aspect-square bg-card border border-[var(--border-subtle)] rounded overflow-hidden group">
                <img 
                  src={item.src} 
                  alt={item.caption} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-label text-[10px] block mb-1">{item.type}</span>
                  <p className="text-sm font-heading font-bold text-primary uppercase">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link href="/blog" className="btn-secondary">
              Explore Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* 11. SPONSOR MARQUEE */}
      <section className="section section--dark py-12 overflow-hidden">
        <p className="text-label text-center mb-8">Our Sponsors</p>
        <div className="marquee">
          <div className="marquee__track">
            {/* Loop 1 */}
            <img src="/logos/nike.svg" className="marquee__logo" alt="Nike" />
            <img src="/logos/adidas.svg" className="marquee__logo" alt="Adidas" />
            <img src="/logos/puma.svg" className="marquee__logo" alt="Puma" />
            <img src="/logos/redbull.svg" className="marquee__logo" alt="Red Bull" />
            <img src="/logos/ea.svg" className="marquee__logo" alt="EA Sports" />
            <img src="/logos/gatorade.svg" className="marquee__logo" alt="Gatorade" />
            <img src="/logos/under-armour.svg" className="marquee__logo" alt="Under Armour" />
            <img src="/logos/hublot.svg" className="marquee__logo" alt="Hublot" />
            <img src="/logos/pepsi.svg" className="marquee__logo" alt="Pepsi" />
            <img src="/logos/decathlon.svg" className="marquee__logo" alt="Decathlon" />
            {/* Loop 2 */}
            <img src="/logos/nike.svg" className="marquee__logo" alt="Nike" />
            <img src="/logos/adidas.svg" className="marquee__logo" alt="Adidas" />
            <img src="/logos/puma.svg" className="marquee__logo" alt="Puma" />
            <img src="/logos/redbull.svg" className="marquee__logo" alt="Red Bull" />
            <img src="/logos/ea.svg" className="marquee__logo" alt="EA Sports" />
            <img src="/logos/gatorade.svg" className="marquee__logo" alt="Gatorade" />
            <img src="/logos/under-armour.svg" className="marquee__logo" alt="Under Armour" />
            <img src="/logos/hublot.svg" className="marquee__logo" alt="Hublot" />
            <img src="/logos/pepsi.svg" className="marquee__logo" alt="Pepsi" />
            <img src="/logos/decathlon.svg" className="marquee__logo" alt="Decathlon" />
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* 12. FINAL CTA SECTION */}
      <section className="cta-section" id="contact">
        <div className="cta-section__bg">
          <img src="/images/jacket-athlete.png" alt="Become the Next Legend" className="cta-section__img" aria-hidden="true" />
          <div className="cta-section__overlay"></div>
          <div className="absolute inset-0 gradient-vignette"></div>
        </div>
        <div className="container cta-section__content reveal">
          <span className="text-label">Join the Agency</span>
          <h2 className="cta-section__headline">
            Become the Next<br />
            <span class="text-gold-gradient">Legend.</span>
          </h2>
          <p className="text-body-lg" style={{ maxWidth: '520px', margin: '1.5rem auto 2.5rem', textAlign: 'center' }}>
            Applications open for talented athletes across all disciplines. Our representation team reviews every submission personally.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Apply Now</Link>
            <Link href="/about" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
