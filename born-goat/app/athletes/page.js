'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { athletes } from '@/lib/content';

export default function AthletesDirectoryPage() {
  // State for filter controls
  const [search, setSearch] = useState('');
  const [selectedSport, setSelectedSport] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAchievement, setSelectedAchievement] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Most Popular');

  // Favorite stars tracking in LocalStorage
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('born_goat_favs');
      if (saved) {
        try {
          setFavorites(JSON.parse(saved));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  const toggleFavorite = (slug, e) => {
    e.preventDefault();
    e.stopPropagation();
    const newFavs = favorites.includes(slug)
      ? favorites.filter(f => f !== slug)
      : [...favorites, slug];
    setFavorites(newFavs);
    if (typeof window !== 'undefined') {
      localStorage.setItem('born_goat_favs', JSON.stringify(newFavs));
    }
  };

  const resetAllFilters = () => {
    setSearch('');
    setSelectedSport('All');
    setSelectedCountry('All');
    setSelectedCategory('All');
    setSelectedAchievement('All');
    setSelectedSort('Most Popular');
  };

  // Parsing values helper
  const parseFollowers = (str) => {
    if (!str) return 0;
    const num = parseFloat(str.replace(/[^0-9.]/g, ''));
    if (str.toLowerCase().includes('m')) return num * 1000000;
    if (str.toLowerCase().includes('k')) return num * 1000;
    return num;
  };

  const parseTrophies = (athlete) => {
    if (athlete.trophyShelf) {
      return athlete.trophyShelf.reduce((sum, t) => sum + parseInt(t.count || '0', 10), 0);
    }
    return parseInt(athlete.trophies || '0', 10);
  };

  // Filtering Logic
  const filteredAthletes = athletes.filter(a => {
    // 1. Search Query
    const query = search.trim().toLowerCase();
    if (query) {
      const nameMatch = a.name.toLowerCase().includes(query);
      const countryMatch = a.country.toLowerCase().includes(query);
      const roleMatch = a.role.toLowerCase().includes(query);
      if (!nameMatch && !countryMatch && !roleMatch) return false;
    }

    // 2. Sport Filter
    if (selectedSport !== 'All' && a.sport !== selectedSport) {
      return false;
    }

    // 3. Country Filter
    if (selectedCountry !== 'All' && a.country !== selectedCountry) {
      return false;
    }

    // 4. Position/Category Filter
    if (selectedCategory !== 'All') {
      const catLower = selectedCategory.toLowerCase();
      const isMatch = a.role.toLowerCase().includes(catLower) || 
                      a.sport.toLowerCase().includes(catLower) ||
                      (a.category && a.category.toLowerCase().includes(catLower));
      if (!isMatch) return false;
    }

    // 5. Achievement Filter
    if (selectedAchievement !== 'All') {
      const achLower = selectedAchievement.toLowerCase();
      const statMatch = a.stats.some(st => 
        st.label.toLowerCase().includes(achLower) || 
        st.value.toLowerCase().includes(achLower)
      );
      const shelfMatch = a.trophyShelf?.some(t => 
        t.name.toLowerCase().includes(achLower)
      );
      if (!statMatch && !shelfMatch) return false;
    }

    return true;
  });

  // Sorting Logic
  const sortedAthletes = [...filteredAthletes].sort((a, b) => {
    if (selectedSort === 'Most Popular') {
      return parseFollowers(b.followers) - parseFollowers(a.followers);
    }
    if (selectedSort === 'Most Followers') {
      return parseFollowers(b.followers) - parseFollowers(a.followers);
    }
    if (selectedSort === 'Most Trophies') {
      return parseTrophies(b) - parseTrophies(a);
    }
    if (selectedSort === 'Name A-Z') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  // Dynamic sponsor logos map
  const renderSponsorLogo = (sponsor) => {
    const normalized = sponsor.toLowerCase().replace(/\s+/g, '-');
    const availableLogos = ['nike', 'adidas', 'puma', 'under-armour', 'hublot', 'gatorade', 'pepsi', 'redbull'];
    
    if (availableLogos.includes(normalized)) {
      return (
        <img
          key={sponsor}
          src={`/logos/${normalized === 'redbull' ? 'redbull' : normalized}.svg`}
          alt={sponsor}
          className="h-3 max-h-[14px] w-auto opacity-55 hover:opacity-100 transition-opacity invert brightness-100"
        />
      );
    }
    
    return (
      <span 
        key={sponsor} 
        className="font-mono text-[8px] tracking-widest text-muted hover:text-primary transition-colors uppercase font-bold border border-white/[0.08] px-1.5 py-0.5 rounded-[1px]"
      >
        {sponsor}
      </span>
    );
  };

  // Dropdown lists harvested from DB
  const sportsList = ['All', 'Football', 'Basketball', 'Tennis', 'Cricket', 'Athletics', 'Swimming', 'MMA'];
  const countriesList = ['All', 'Portugal', 'Argentina', 'United States', 'Serbia', 'France', 'Norway', 'Jamaica', 'Ireland', 'Japan', 'India'];
  const categoriesList = ['All', 'Icon', 'Legend', 'Superstar', 'Forward', 'Striker', 'Guard', 'Sprinter', 'Swimmer', 'Fighter', 'Bowler'];
  const achievementsList = [
    'All', 
    'Ballon d\'Or', 
    'Grand Slam', 
    'Olympic Gold', 
    'NBA Championship', 
    'World Cup', 
    'Champions League', 
    'Olympic Medals', 
    'Weight Titles', 
    'WTA Titles'
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-[160px] pb-[100px] bg-void overflow-hidden border-b border-[var(--border-subtle)]">
        <div 
          className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] pointer-events-none rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />

        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative z-10">
          <div className="grid grid-cols-[1.2fr_1fr] max-lg:grid-cols-1 gap-12 items-center">
            
            {/* Left side info */}
            <Reveal>
              <div>
                <span className="text-label text-[11px] font-mono tracking-extra-wide uppercase text-[var(--gold-primary)] font-bold block mb-4">
                  OUR ATHLETES
                </span>
                <h1 className="font-heading text-[clamp(44px,5.5vw,76px)] leading-[0.92] tracking-cinematic uppercase text-primary mb-6">
                  ELITE ATHLETES.<br />
                  <span className="text-gold-gradient italic font-light">WORLD CLASS IMPACT.</span>
                </h1>
                <p className="text-secondary text-[16px] leading-[1.7] mb-10 max-w-[540px]">
                  Discover the world's most elite athletes across sports. Built on talent. Driven by purpose. Managed with excellence.
                </p>

                {/* Metrics */}
                <div className="flex gap-12 max-sm:gap-6 border-t border-[var(--border-subtle)] pt-8">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="font-display text-2xl text-primary">100+</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-muted">ELITE ATHLETES</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2m-4-3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                      <span className="font-display text-2xl text-primary">18+</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-muted">SPORTS</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-5 h-5 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 12V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <span className="font-display text-2xl text-primary">40+</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-muted">COUNTRIES</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right side portraits collage */}
            <div className="relative h-[360px] w-full max-w-[620px] self-end overflow-hidden max-lg:hidden rounded border border-white/5">
              {/* Stadium Background */}
              <img 
                src="/images/stadium-dark.png" 
                alt="Stadium" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

              <div className="absolute bottom-6 right-6 left-6 z-20 flex justify-center items-end -space-x-8 pr-4">
                <div className="relative w-[110px] aspect-[3/4] rounded border border-white/10 overflow-hidden translate-y-6 hover:translate-y-2 transition-transform duration-500 shadow-2xl">
                  <img src="/athletes/ronaldo.png" alt="Ronaldo" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="relative w-[110px] aspect-[3/4] rounded border border-white/10 overflow-hidden hover:translate-y-[-10px] transition-transform duration-500 z-10 shadow-2xl">
                  <img src="/athletes/messi.png" alt="Messi" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="relative w-[110px] aspect-[3/4] rounded border border-white/10 overflow-hidden translate-y-6 hover:translate-y-2 transition-transform duration-500 z-20 shadow-2xl">
                  <img src="/athletes/serena.png" alt="Serena" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="relative w-[110px] aspect-[3/4] rounded border border-white/10 overflow-hidden hover:translate-y-[-10px] transition-transform duration-500 z-30 shadow-2xl">
                  <img src="/athletes/djokovic.png" alt="Djokovic" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-300" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FILTER & GRID SPLIT */}
      <section className="py-[80px] max-md:py-12 bg-void">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <div className="grid grid-cols-[300px_1fr] max-lg:grid-cols-1 gap-12 items-start">
            
            {/* Sidebar Filters */}
            <aside className="bg-[#080808] border border-[var(--border-subtle)] p-7 rounded-[2px] sticky top-[100px] z-30">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
                  FILTER ATHLETES
                </h3>
                <button 
                  onClick={resetAllFilters}
                  className="font-mono text-[10px] text-[var(--gold-primary)] hover:text-white transition-colors uppercase font-medium bg-transparent border-none p-0 cursor-pointer"
                >
                  Reset All
                </button>
              </div>

              {/* SEARCH */}
              <div className="mb-6">
                <label className="font-mono text-[9px] uppercase tracking-wider text-muted block mb-2 font-bold">
                  SEARCH
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name..."
                    className="w-full bg-[#0E0E0E] border border-[var(--border-subtle)] text-primary text-xs px-3.5 py-3 rounded-[1px] focus:outline-none focus:border-white/40 transition-colors"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted">
                    🔍
                  </span>
                </div>
              </div>

              {/* SPORT */}
              <div className="mb-6">
                <label className="font-mono text-[9px] uppercase tracking-wider text-muted block mb-2 font-bold">
                  SPORT
                </label>
                <select
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                  className="w-full bg-[#0E0E0E] border border-[var(--border-subtle)] text-primary text-xs px-3 py-3 rounded-[1px] focus:outline-none focus:border-white/40 transition-colors cursor-pointer appearance-none"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat' }}
                >
                  {sportsList.map(s => (
                    <option key={s} value={s}>{s === 'All' ? 'All Sports' : s}</option>
                  ))}
                </select>
              </div>

              {/* COUNTRY */}
              <div className="mb-6">
                <label className="font-mono text-[9px] uppercase tracking-wider text-muted block mb-2 font-bold">
                  COUNTRY
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full bg-[#0E0E0E] border border-[var(--border-subtle)] text-primary text-xs px-3 py-3 rounded-[1px] focus:outline-none focus:border-white/40 transition-colors cursor-pointer appearance-none"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat' }}
                >
                  {countriesList.map(c => (
                    <option key={c} value={c}>{c === 'All' ? 'All Countries' : c}</option>
                  ))}
                </select>
              </div>

              {/* POSITION / CATEGORY */}
              <div className="mb-6">
                <label className="font-mono text-[9px] uppercase tracking-wider text-muted block mb-2 font-bold">
                  POSITION / CATEGORY
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-[#0E0E0E] border border-[var(--border-subtle)] text-primary text-xs px-3 py-3 rounded-[1px] focus:outline-none focus:border-white/40 transition-colors cursor-pointer appearance-none"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat' }}
                >
                  {categoriesList.map(c => (
                    <option key={c} value={c}>{c === 'All' ? 'All Positions' : c}</option>
                  ))}
                </select>
              </div>

              {/* ACHIEVEMENTS */}
              <div className="mb-6">
                <label className="font-mono text-[9px] uppercase tracking-wider text-muted block mb-2 font-bold">
                  ACHIEVEMENTS
                </label>
                <select
                  value={selectedAchievement}
                  onChange={(e) => setSelectedAchievement(e.target.value)}
                  className="w-full bg-[#0E0E0E] border border-[var(--border-subtle)] text-primary text-xs px-3 py-3 rounded-[1px] focus:outline-none focus:border-white/40 transition-colors cursor-pointer appearance-none"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat' }}
                >
                  {achievementsList.map(a => (
                    <option key={a} value={a}>{a === 'All' ? 'All Achievements' : a}</option>
                  ))}
                </select>
              </div>

              {/* SORT BY */}
              <div className="mb-8">
                <label className="font-mono text-[9px] uppercase tracking-wider text-muted block mb-2 block font-bold">
                  SORT BY
                </label>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="w-full bg-[#0E0E0E] border border-[var(--border-subtle)] text-primary text-xs px-3 py-3 rounded-[1px] focus:outline-none focus:border-white/40 transition-colors cursor-pointer appearance-none"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat' }}
                >
                  <option value="Most Popular">Most Popular</option>
                  <option value="Most Followers">Most Followers</option>
                  <option value="Most Trophies">Most Trophies</option>
                  <option value="Name A-Z">Name A-Z</option>
                </select>
              </div>

              <button 
                onClick={() => {
                  const gridEl = document.getElementById('roster-grid');
                  if (gridEl) gridEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full btn-primary py-3 text-[11px] font-bold text-center flex justify-center uppercase rounded-[1px]"
              >
                APPLY FILTERS
              </button>
            </aside>

            {/* Main Roster Side */}
            <div>
              {/* Header Info */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-[var(--border-subtle)]">
                <span className="text-secondary text-xs uppercase tracking-wider font-mono">
                  Showing {sortedAthletes.length} of {athletes.length} athletes
                </span>

                <div className="flex items-center gap-4">
                  {/* Grid / List icons */}
                  <div className="flex gap-1.5 border-r border-white/5 pr-4">
                    <button className="p-1 bg-[#121212] border border-white/10 text-white rounded-[2px]" title="Grid View">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                    <button className="p-1 bg-transparent border border-transparent text-muted rounded-[2px] hover:text-white" title="List View">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>

                  <span className="text-[10px] text-muted font-mono uppercase tracking-wider">
                    Sort: <span className="text-white font-bold">{selectedSort}</span>
                  </span>
                </div>
              </div>

              {/* Roster Grid */}
              <div id="roster-grid" className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6">
                {sortedAthletes.length > 0 ? (
                  sortedAthletes.map((a, idx) => (
                    <Reveal key={a.slug} delay={idx * 40}>
                      <div className="athlete-card group relative h-full flex flex-col justify-between">
                        
                        {/* Star Favorite Button */}
                        <button
                          onClick={(e) => toggleFavorite(a.slug, e)}
                          className="absolute top-4 right-4 z-30 p-1.5 rounded-full bg-black/60 border border-white/5 backdrop-blur-md text-slate-400 hover:text-white transition-all cursor-pointer"
                        >
                          <svg 
                            className={`w-4 h-4 ${favorites.includes(a.slug) ? 'fill-[var(--gold-primary)] stroke-[var(--gold-primary)]' : 'stroke-current fill-none'}`} 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        </button>

                        <Link href={`/athletes/${a.slug}`} className="text-decoration-none flex-grow flex flex-col">
                          
                          {/* Card Image */}
                          <div className="athlete-card__image relative w-full aspect-[4/5] bg-neutral-900 overflow-hidden">
                            <img
                              src={a.imageAsset}
                              alt={a.name}
                              onError={(e) => {
                                // Simple fallback image if file does not exist
                                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100%25' height='100%25' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' font-family='sans-serif' font-size='10' dy='.3em' text-anchor='middle'%3E" + encodeURIComponent(a.name) + "%3C/text%3E%3C/svg%3E";
                              }}
                              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                            />
                            <span className="athlete-card__sport-badge absolute top-4 left-4 z-20">
                              {a.sport}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                          </div>

                          {/* Card Content body */}
                          <div className="athlete-card__body p-5">
                            <h3 className="font-heading text-xl uppercase tracking-wider text-primary group-hover:text-[var(--gold-primary)] transition-colors mb-1 font-bold leading-tight">
                              {a.name}
                            </h3>
                            <div className="flex items-center gap-1.5 mb-4 text-[11px] text-muted">
                              <span>{a.flag}</span>
                              <span className="uppercase tracking-wide font-medium">{a.country}</span>
                            </div>

                            {/* Dual Stats layout */}
                            <div className="grid grid-cols-2 gap-4 pt-3.5 border-t border-white/5">
                              <div>
                                <span className="font-mono text-sm text-[var(--gold-primary)] font-bold block leading-none">
                                  {a.followers}
                                </span>
                                <span className="text-[9px] uppercase tracking-wider text-muted font-medium mt-1 block">
                                  Followers
                                </span>
                              </div>
                              <div>
                                <span className="font-mono text-sm text-[var(--gold-primary)] font-bold block leading-none">
                                  {a.trophies || parseTrophies(a)}
                                </span>
                                <span className="text-[9px] uppercase tracking-wider text-muted font-medium mt-1 block">
                                  {a.sport === 'Tennis' ? 'Grand Slams' : a.sport === 'Football' ? 'Ballon d\'Or' : a.sport === 'Basketball' ? 'NBA Rings' : 'Titles'}
                                </span>
                              </div>
                            </div>

                          </div>
                        </Link>

                        {/* Card Endorsements Footer */}
                        {a.sponsors && a.sponsors.length > 0 && (
                          <div className="px-5 py-3 border-t border-white/[0.04] bg-[#090909] flex items-center justify-between gap-3">
                            <span className="text-[8px] uppercase tracking-widest text-ghost font-bold font-mono">
                              SPONSORS
                            </span>
                            <div className="flex items-center gap-2.5">
                              {a.sponsors.slice(0, 3).map(s => renderSponsorLogo(s))}
                            </div>
                          </div>
                        )}

                      </div>
                    </Reveal>
                  ))
                ) : (
                  <div className="col-span-3 py-16 text-center border border-dashed border-white/10 rounded">
                    <span className="font-display text-2xl text-muted block mb-2 uppercase">NO CHAMPIONS FOUND</span>
                    <p className="text-secondary text-xs max-w-[320px] mx-auto mb-6">
                      We couldn't find any athlete matching your current filter set.
                    </p>
                    <button 
                      onClick={resetAllFilters}
                      className="btn-secondary py-2 px-5 text-[10px] font-bold uppercase rounded-[1px]"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {sortedAthletes.length > 0 && (
                <div className="flex justify-center items-center gap-2.5 mt-16">
                  <button className="w-8 h-8 rounded-[1px] bg-transparent border border-white/10 text-muted flex items-center justify-center text-xs hover:border-white/30 hover:text-white transition-colors cursor-pointer" title="Previous Page">
                    &lt;
                  </button>
                  <button className="w-8 h-8 rounded-[1px] bg-[var(--gold-primary)] text-void flex items-center justify-center text-xs font-bold font-mono cursor-pointer">
                    1
                  </button>
                  <button className="w-8 h-8 rounded-[1px] bg-[#0c0c0c] border border-white/5 text-secondary hover:border-white/30 hover:text-white flex items-center justify-center text-xs font-mono transition-colors cursor-pointer">
                    2
                  </button>
                  <button className="w-8 h-8 rounded-[1px] bg-[#0c0c0c] border border-white/5 text-secondary hover:border-white/30 hover:text-white flex items-center justify-center text-xs font-mono transition-colors cursor-pointer">
                    3
                  </button>
                  <span className="text-muted text-xs font-mono px-1">...</span>
                  <button className="w-8 h-8 rounded-[1px] bg-[#0c0c0c] border border-white/5 text-secondary hover:border-white/30 hover:text-white flex items-center justify-center text-xs font-mono transition-colors cursor-pointer">
                    9
                  </button>
                  <button className="w-8 h-8 rounded-[1px] bg-transparent border border-white/10 text-muted flex items-center justify-center text-xs hover:border-white/30 hover:text-white transition-colors cursor-pointer" title="Next Page">
                    &gt;
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative py-[100px] bg-void border-t border-[var(--border-subtle)] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/images/stadium-dark.png" alt="Stadium" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative z-10">
          <div className="flex justify-between items-center max-md:flex-col max-md:text-center max-md:gap-8">
            <div>
              <h2 className="font-heading text-[clamp(28px,4vw,48px)] leading-none uppercase text-primary mb-3">
                READY TO JOIN THE LEGACY?
              </h2>
              <p className="text-secondary text-sm">
                We are always looking for exceptional athletic talent to represent on the global stage.
              </p>
            </div>

            <Link href="/contact" className="btn-secondary py-4 px-8 text-xs font-bold tracking-wider rounded-[1px] uppercase whitespace-nowrap">
              APPLY AS AN ATHLETE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
