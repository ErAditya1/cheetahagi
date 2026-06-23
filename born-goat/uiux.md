# 🏆 ELITE ATHLETE AGENCY — Complete UI/UX Design System
> Version 1.0 | Premium Sports Agency Website Rebuild Specification

---

## 1. DESIGN PHILOSOPHY

**Direction:** Netflix Sports Documentary × Nike Global Campaign × Ballon d'Or Ceremony

This is NOT a sports streaming hub. It is NOT a gaming platform. It is NOT a tech startup.

This is the digital home of elite athlete representation — where champions are discovered, careers are built, and legacies are written. Every pixel must communicate:

- **Power** — visual weight, full-bleed imagery, cinematic darkness
- **Prestige** — gold accents, restrained palette, typographic authority
- **Trust** — clean information architecture, elite brand logos, proof points
- **Legacy** — storytelling-first layout, documentary-style narrative flow

---

## 2. COLOR SYSTEM

### 2.1 Core Palette (REPLACE ALL EXISTING COLORS)

```css
:root {
  /* ─── BACKGROUNDS ─────────────────────────────── */
  --bg-void:        #080808;   /* True black — page background */
  --bg-dark:        #0D0D0D;   /* Deep black — sections */
  --bg-surface:     #111111;   /* Lifted surface — cards, navbars */
  --bg-card:        #181818;   /* Card backgrounds */
  --bg-card-hover:  #1F1F1F;   /* Card hover state */
  --bg-overlay:     rgba(8, 8, 8, 0.85); /* Dark image overlays */

  /* ─── TYPOGRAPHY ─────────────────────────────── */
  --text-primary:   #F5F5F5;   /* Headlines, primary content */
  --text-secondary: #C0C0C0;   /* Body copy, descriptions */
  --text-muted:     #6B7280;   /* Labels, captions, metadata */
  --text-ghost:     #374151;   /* Disabled, placeholder */

  /* ─── ACCENT: OLYMPIC GOLD (PRIMARY ACTION) ──── */
  --gold-bright:    #F5C518;   /* IMDb gold — highlights, hovers */
  --gold-primary:   #D4AF37;   /* Olympic gold — CTAs, icons */
  --gold-deep:      #B8860B;   /* Dark gold — borders, dividers */
  --gold-subtle:    rgba(212, 175, 55, 0.12); /* Gold tint on dark */
  --gold-glow:      rgba(212, 175, 55, 0.25); /* Glow effect */

  /* ─── ACCENT: TITANIUM SILVER (SECONDARY) ────── */
  --silver:         #BFC7D5;   /* Secondary highlights */
  --silver-muted:   #8899AA;   /* Silver-tinted muted text */

  /* ─── ACCENT: ELECTRIC BLUE (TERTIARY, USE SPARINGLY) */
  --blue-electric:  #0EA5E9;   /* Verified badges, live status */
  --blue-deep:      #0369A1;   /* Blue pressed states */

  /* ─── BORDERS & DIVIDERS ─────────────────────── */
  --border-subtle:  rgba(255, 255, 255, 0.06);
  --border-default: rgba(255, 255, 255, 0.10);
  --border-gold:    rgba(212, 175, 55, 0.35);
  --border-gold-strong: rgba(212, 175, 55, 0.65);

  /* ─── SEMANTIC ───────────────────────────────── */
  --success:        #10B981;
  --danger:         #EF4444;
  --warning:        #F59E0B;
}
```

### 2.2 Gradient Recipes

```css
/* ── Hero Section — Full Page Cinematic */
.gradient-hero {
  background: linear-gradient(
    180deg,
    #080808 0%,
    rgba(8, 8, 8, 0) 40%,
    rgba(8, 8, 8, 0) 60%,
    #080808 100%
  );
}

/* ── Gold CTA Button */
.gradient-gold {
  background: linear-gradient(135deg, #D4AF37 0%, #F5C518 50%, #D4AF37 100%);
  background-size: 200% 100%;
  transition: background-position 0.4s ease;
}
.gradient-gold:hover {
  background-position: right center;
}

/* ── Card Inner Glow */
.gradient-card {
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.04) 0%,
    rgba(255,255,255,0.01) 100%
  );
}

/* ── Section Divider */
.gradient-divider {
  background: linear-gradient(90deg, transparent, var(--gold-primary), transparent);
  height: 1px;
  width: 100%;
}

/* ── Dark Vignette for image overlays */
.gradient-vignette {
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    rgba(8,8,8,0.5) 60%,
    rgba(8,8,8,0.95) 100%
  );
}

/* ── Gold Text Gradient */
.text-gold-gradient {
  background: linear-gradient(135deg, #D4AF37, #F5C518, #D4AF37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 3. TYPOGRAPHY SYSTEM

### 3.1 Font Stack

```html
<!-- Add to <head> — Load these from Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display:  'Bebas Neue', 'Oswald', 'Impact', sans-serif;
  --font-heading:  'Oswald', 'Inter', sans-serif;
  --font-body:     'Inter', system-ui, sans-serif;
  --font-data:     'Space Grotesk', monospace;
}
```

### 3.2 Type Scale

```css
/* ── DISPLAY (Hero Headlines) */
.text-display-xl { font-family: var(--font-display); font-size: clamp(4rem, 10vw, 9rem); line-height: 0.92; letter-spacing: 0.02em; color: var(--text-primary); }
.text-display-lg { font-family: var(--font-display); font-size: clamp(3rem, 7vw, 6rem); line-height: 0.95; letter-spacing: 0.02em; }

/* ── HEADINGS */
.text-h1 { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 700; line-height: 1.1; }
.text-h2 { font-family: var(--font-heading); font-size: clamp(1.5rem, 3vw, 2.5rem); font-weight: 600; line-height: 1.15; }
.text-h3 { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 600; }

/* ── BODY */
.text-body-lg  { font-family: var(--font-body); font-size: 1.125rem; line-height: 1.75; font-weight: 400; color: var(--text-secondary); }
.text-body     { font-family: var(--font-body); font-size: 1rem; line-height: 1.7; font-weight: 400; color: var(--text-secondary); }
.text-caption  { font-family: var(--font-body); font-size: 0.75rem; line-height: 1.5; color: var(--text-muted); letter-spacing: 0.08em; text-transform: uppercase; }

/* ── STATS / DATA */
.text-stat     { font-family: var(--font-data); font-size: clamp(2rem, 5vw, 4rem); font-weight: 700; color: var(--gold-primary); }
.text-stat-label { font-family: var(--font-body); font-size: 0.875rem; color: var(--text-muted); letter-spacing: 0.05em; }

/* ── GOLD LABEL (Section identifiers) */
.text-label {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold-primary);
}
```

---

## 4. COMPONENT LIBRARY

### 4.1 Buttons

```css
/* Primary CTA — Gold Fill */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, #D4AF37, #F5C518);
  color: #080808;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(212, 175, 55, 0.4);
}
.btn-primary:active { transform: translateY(0); }

/* Secondary CTA — Gold Outline */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: transparent;
  color: var(--gold-primary);
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid var(--border-gold);
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
}
.btn-secondary:hover {
  background: var(--gold-subtle);
  border-color: var(--gold-primary);
  box-shadow: 0 0 24px var(--gold-glow);
}

/* Ghost Button — Minimal */
.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-default);
  padding: 0.75rem 1.5rem;
  border-radius: 2px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  transition: all 0.2s ease;
}
.btn-ghost:hover { border-color: var(--border-gold); color: var(--gold-primary); }
```

### 4.2 Athlete Card

```css
.athlete-card {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
}
.athlete-card:hover {
  border-color: var(--border-gold);
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 40px var(--gold-glow);
}

/* Image area — 65% of card */
.athlete-card__image {
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
}
.athlete-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.5s ease;
  filter: grayscale(20%);
}
.athlete-card:hover .athlete-card__image img {
  transform: scale(1.06);
  filter: grayscale(0%);
}

/* Overlay gradient on image */
.athlete-card__image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(8,8,8,0.9) 100%
  );
}

/* Sport badge on image */
.athlete-card__sport-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
  padding: 0.25rem 0.75rem;
  background: var(--gold-subtle);
  border: 1px solid var(--border-gold);
  border-radius: 2px;
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold-primary);
}

/* Info block below image */
.athlete-card__body {
  padding: 1.25rem;
}
.athlete-card__name {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}
.athlete-card__meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}
.athlete-card__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--border-subtle);
  padding-top: 1rem;
}
.athlete-card__stat {
  text-align: center;
  padding: 0.5rem 0;
}
.athlete-card__stat + .athlete-card__stat {
  border-left: 1px solid var(--border-subtle);
}
.athlete-card__stat-value {
  font-family: var(--font-data);
  font-size: 1rem;
  font-weight: 700;
  color: var(--gold-primary);
  display: block;
}
.athlete-card__stat-label {
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

### 4.3 Stat Counter Block

```css
.stat-counter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2px;
  border: 1px solid var(--border-gold);
}
.stat-counter-item {
  padding: 2.5rem 2rem;
  background: var(--bg-card);
  text-align: center;
  position: relative;
  transition: background 0.2s ease;
}
.stat-counter-item:hover { background: var(--bg-card-hover); }
.stat-counter-item::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold-primary), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.stat-counter-item:hover::before { opacity: 1; }
.stat-counter-number {
  font-family: var(--font-display);
  font-size: 3.5rem;
  color: var(--gold-primary);
  line-height: 1;
  display: block;
  margin-bottom: 0.5rem;
}
.stat-counter-label {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--text-muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
```

### 4.4 Navigation

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  height: 72px;
  background: transparent;
  transition: all 0.35s ease;
  border-bottom: 1px solid transparent;
}
.navbar.scrolled {
  background: rgba(8, 8, 8, 0.95);
  backdrop-filter: blur(20px);
  border-bottom-color: var(--border-subtle);
}
.navbar__logo {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text-primary);
  letter-spacing: 0.08em;
}
.navbar__logo span { color: var(--gold-primary); }

.navbar__links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
}
.navbar__link {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
}
.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0; right: 0;
  height: 1px;
  background: var(--gold-primary);
  transform: scaleX(0);
  transition: transform 0.25s ease;
}
.navbar__link:hover { color: var(--text-primary); }
.navbar__link:hover::after { transform: scaleX(1); }
```

### 4.5 Section Layout System

```css
/* Base section */
.section {
  padding: 6rem 0;
  position: relative;
}
.section--dark { background: var(--bg-void); }
.section--raised { background: var(--bg-dark); }
.section--surface { background: var(--bg-surface); }

/* Container */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}
.container--wide { max-width: 1440px; }
.container--narrow { max-width: 900px; }

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}
.section-header .text-label {
  display: inline-block;
  margin-bottom: 1rem;
}
.section-header h2 {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}
.section-header .divider {
  width: 60px;
  height: 2px;
  background: var(--gold-primary);
  margin: 1.25rem auto 0;
}

/* Gold thin line divider between sections */
.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--gold-deep) 30%, var(--gold-primary) 50%, var(--gold-deep) 70%, transparent 100%);
  margin: 0;
}
```

### 4.6 Trophy / Achievement Card

```css
.trophy-card {
  position: relative;
  padding: 2.5rem 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  transition: all 0.3s ease;
}
.trophy-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gold-subtle);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.trophy-card:hover {
  border-color: var(--border-gold);
  transform: translateY(-4px);
}
.trophy-card:hover::before { opacity: 1; }

.trophy-card__icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
  filter: drop-shadow(0 0 16px var(--gold-glow));
}
.trophy-card__title {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}
.trophy-card__count {
  font-family: var(--font-data);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--gold-primary);
  line-height: 1;
}
```

---

## 5. PAGE SECTIONS — COPY-PASTABLE HTML STRUCTURE

### 5.1 HERO SECTION

```html
<!-- HERO: Full-screen cinematic with athlete image -->
<section class="hero">
  <!-- Background: Place athlete image or dark stadium video here -->
  <div class="hero__media">
    <!-- Option A: Image -->
    <img src="/images/hero-athlete.jpg" alt="Elite Athlete" class="hero__bg-image">
    <!-- Option B: Video -->
    <!-- <video autoplay muted loop playsinline class="hero__bg-video">
      <source src="/videos/hero-reel.mp4" type="video/mp4">
    </video> -->
    <div class="hero__overlay"></div>
  </div>

  <!-- Content -->
  <div class="hero__content container">
    <span class="text-label">Premium Athlete Management</span>
    <h1 class="hero__headline">
      We Build<br>
      <span class="text-gold-gradient">Legends.</span>
    </h1>
    <p class="hero__sub">
      From emerging talent to world-class champions — we manage, protect, and grow the careers of elite athletes across 18+ sports.
    </p>
    <div class="hero__cta-group">
      <a href="#athletes" class="btn-primary">Explore Our Athletes</a>
      <a href="#contact" class="btn-secondary">Apply as Athlete</a>
    </div>

    <!-- Quick stats strip at hero bottom -->
    <div class="hero__stats">
      <div class="hero__stat">
        <span class="hero__stat-number">120+</span>
        <span class="hero__stat-label">Athletes Managed</span>
      </div>
      <div class="hero__stat">
        <span class="hero__stat-number">52</span>
        <span class="hero__stat-label">Championships</span>
      </div>
      <div class="hero__stat">
        <span class="hero__stat-number">18</span>
        <span class="hero__stat-label">Countries</span>
      </div>
      <div class="hero__stat">
        <span class="hero__stat-number">₹240Cr</span>
        <span class="hero__stat-label">Sponsorships Secured</span>
      </div>
    </div>
  </div>
</section>
```

```css
/* Hero CSS */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.hero__media { position: absolute; inset: 0; z-index: 0; }
.hero__bg-image { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.hero__bg-video { width: 100%; height: 100%; object-fit: cover; }
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(8,8,8,0.92) 0%,
    rgba(8,8,8,0.70) 50%,
    rgba(8,8,8,0.20) 100%
  );
}
.hero__content {
  position: relative;
  z-index: 1;
  padding-top: 8rem;
  padding-bottom: 8rem;
  max-width: 700px;
}
.hero__headline {
  font-family: var(--font-display);
  font-size: clamp(4.5rem, 11vw, 9rem);
  line-height: 0.9;
  color: var(--text-primary);
  margin: 1rem 0 1.5rem;
}
.hero__sub {
  font-family: var(--font-body);
  font-size: 1.125rem;
  line-height: 1.75;
  color: var(--text-secondary);
  max-width: 480px;
  margin-bottom: 2.5rem;
}
.hero__cta-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}
.hero__stats {
  display: flex;
  gap: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-gold);
}
.hero__stat-number {
  display: block;
  font-family: var(--font-data);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--gold-primary);
}
.hero__stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

### 5.2 TRUSTED BY (BRAND LOGOS)

```html
<section class="section section--raised">
  <div class="container">
    <p class="text-label" style="text-align:center; margin-bottom:2rem;">
      Trusted Sponsors & Partners
    </p>
    <div class="trusted-logos">
      <!-- Replace src with actual partner logos — use white/light SVGs on dark -->
      <img src="/logos/nike.svg" alt="Nike" class="trusted-logo">
      <img src="/logos/adidas.svg" alt="Adidas" class="trusted-logo">
      <img src="/logos/puma.svg" alt="Puma" class="trusted-logo">
      <img src="/logos/redbull.svg" alt="Red Bull" class="trusted-logo">
      <img src="/logos/ea-sports.svg" alt="EA Sports" class="trusted-logo">
      <img src="/logos/pepsi.svg" alt="Pepsi" class="trusted-logo">
    </div>
  </div>
</section>
```

```css
.trusted-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.5rem;
}
.trusted-logo {
  height: 32px;
  width: auto;
  filter: brightness(0) invert(1);
  opacity: 0.45;
  transition: opacity 0.2s ease, filter 0.2s ease;
}
.trusted-logo:hover { opacity: 0.85; }
```

### 5.3 FEATURED ATHLETES GRID

```html
<section class="section section--dark" id="athletes">
  <div class="container">
    <div class="section-header">
      <span class="text-label">Our Roster</span>
      <h2>Meet the Champions</h2>
      <div class="divider"></div>
    </div>

    <!-- Filter Pills -->
    <div class="filter-pills">
      <button class="filter-pill filter-pill--active">All</button>
      <button class="filter-pill">Football</button>
      <button class="filter-pill">Cricket</button>
      <button class="filter-pill">Athletics</button>
      <button class="filter-pill">Boxing</button>
      <button class="filter-pill">Tennis</button>
    </div>

    <div class="athletes-grid">
      <!-- Repeat athlete-card component here -->
      <div class="athlete-card">
        <div class="athlete-card__image">
          <img src="/athletes/player-1.jpg" alt="Athlete Name">
          <span class="athlete-card__sport-badge">Football</span>
        </div>
        <div class="athlete-card__body">
          <h3 class="athlete-card__name">Arjun Sharma</h3>
          <div class="athlete-card__meta">
            <span>🇮🇳</span>
            <span>India</span>
            <span>·</span>
            <span>24 years</span>
          </div>
          <div class="athlete-card__stats">
            <div class="athlete-card__stat">
              <span class="athlete-card__stat-value">2.4M</span>
              <span class="athlete-card__stat-label">Followers</span>
            </div>
            <div class="athlete-card__stat">
              <span class="athlete-card__stat-value">8</span>
              <span class="athlete-card__stat-label">Trophies</span>
            </div>
            <div class="athlete-card__stat">
              <span class="athlete-card__stat-value">Nike</span>
              <span class="athlete-card__stat-label">Sponsor</span>
            </div>
          </div>
        </div>
      </div>
      <!-- /athlete-card -->
    </div>

    <div style="text-align:center; margin-top:3rem;">
      <a href="/athletes" class="btn-secondary">View All Athletes</a>
    </div>
  </div>
</section>
```

```css
.filter-pills {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  justify-content: center;
}
.filter-pill {
  padding: 0.5rem 1.25rem;
  border: 1px solid var(--border-default);
  border-radius: 2px;
  background: transparent;
  color: var(--text-muted);
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
}
.filter-pill:hover { border-color: var(--border-gold); color: var(--gold-primary); }
.filter-pill--active {
  background: var(--gold-subtle);
  border-color: var(--gold-primary);
  color: var(--gold-primary);
}

.athletes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}
```

### 5.4 ACHIEVEMENT STATS SECTION

```html
<section class="section section--surface">
  <div class="container">
    <div class="section-header">
      <span class="text-label">By the Numbers</span>
      <h2>A Legacy of Excellence</h2>
      <div class="divider"></div>
    </div>

    <div class="stat-counter-grid">
      <div class="stat-counter-item">
        <span class="stat-counter-number">120+</span>
        <span class="stat-counter-label">Athletes Managed</span>
      </div>
      <div class="stat-counter-item">
        <span class="stat-counter-number">52</span>
        <span class="stat-counter-label">Championships Won</span>
      </div>
      <div class="stat-counter-item">
        <span class="stat-counter-number">18</span>
        <span class="stat-counter-label">Countries Represented</span>
      </div>
      <div class="stat-counter-item">
        <span class="stat-counter-number">240+</span>
        <span class="stat-counter-label">Sponsorship Deals</span>
      </div>
    </div>
  </div>
</section>
```

### 5.5 DOCUMENTARY / STORY SECTION

```html
<section class="section section--dark">
  <div class="container">
    <div class="documentary-layout">
      <!-- Image side -->
      <div class="documentary-visual">
        <!-- Tall cinematic image — athlete in stadium, locker room, training -->
        <img src="/images/documentary-still.jpg" alt="Behind the Journey" class="documentary-img">
        <div class="documentary-img-label">
          <span class="text-label">Est. 2018</span>
        </div>
      </div>

      <!-- Text side -->
      <div class="documentary-text">
        <span class="text-label">Our Story</span>
        <h2 class="text-h1" style="margin:1rem 0;">
          Behind Every Champion,<br>
          <span class="text-gold-gradient">There Is a Journey.</span>
        </h2>
        <p class="text-body-lg" style="margin-bottom:1.5rem;">
          We don't just manage contracts. We architect careers. From scouting raw talent in grassroots tournaments to placing our athletes on the world stage — every decision we make is built around one belief: potential is only the beginning.
        </p>
        <p class="text-body" style="margin-bottom:2.5rem;">
          Our team of former athletes, legal experts, sponsorship specialists, and performance coaches form a 360° support system that turns promising players into global brands.
        </p>
        <a href="/about" class="btn-primary">Our Approach →</a>
      </div>
    </div>
  </div>
</section>
```

```css
.documentary-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}
.documentary-visual {
  position: relative;
  aspect-ratio: 2/3;
  overflow: hidden;
  border-radius: 4px;
}
.documentary-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.documentary-img-label {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  padding: 0.5rem 1rem;
  background: rgba(8,8,8,0.85);
  border-left: 2px solid var(--gold-primary);
}
@media (max-width: 768px) {
  .documentary-layout { grid-template-columns: 1fr; gap: 2.5rem; }
  .documentary-visual { aspect-ratio: 16/9; }
}
```

### 5.6 CAREER TIMELINE

```html
<section class="section section--raised">
  <div class="container container--narrow">
    <div class="section-header">
      <span class="text-label">The Path</span>
      <h2>The Making of a Legend</h2>
      <div class="divider"></div>
    </div>

    <div class="timeline">
      <div class="timeline__item">
        <div class="timeline__marker"></div>
        <div class="timeline__content">
          <span class="text-label">Stage 1</span>
          <h3 class="timeline__title">Discovery & Scouting</h3>
          <p class="text-body">We identify raw talent in grassroots sports, academies, and regional tournaments across India and beyond.</p>
        </div>
      </div>
      <div class="timeline__item">
        <div class="timeline__marker"></div>
        <div class="timeline__content">
          <span class="text-label">Stage 2</span>
          <h3 class="timeline__title">Development & Training</h3>
          <p class="text-body">Access to world-class coaching, sports science, nutrition planning, and mental conditioning programs.</p>
        </div>
      </div>
      <div class="timeline__item">
        <div class="timeline__marker"></div>
        <div class="timeline__content">
          <span class="text-label">Stage 3</span>
          <h3 class="timeline__title">Career Management</h3>
          <p class="text-body">Contract negotiation, club transfers, national team placement, and strategic career planning by seasoned professionals.</p>
        </div>
      </div>
      <div class="timeline__item">
        <div class="timeline__marker"></div>
        <div class="timeline__content">
          <span class="text-label">Stage 4</span>
          <h3 class="timeline__title">Brand & Sponsorship</h3>
          <p class="text-body">Building the athlete as a commercial brand — social media growth, endorsement deals with Nike, Adidas, and leading Indian brands.</p>
        </div>
      </div>
      <div class="timeline__item">
        <div class="timeline__marker timeline__marker--gold"></div>
        <div class="timeline__content">
          <span class="text-label">Stage 5</span>
          <h3 class="timeline__title">Legacy</h3>
          <p class="text-body">Hall of fame, post-career planning, philanthropic sports ventures, and building a lifetime brand.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.timeline { position: relative; padding-left: 3rem; }
.timeline::before {
  content: '';
  position: absolute;
  left: 12px; top: 0; bottom: 0;
  width: 1px;
  background: linear-gradient(180deg, transparent, var(--gold-primary), transparent);
}
.timeline__item {
  position: relative;
  padding-bottom: 3rem;
}
.timeline__item:last-child { padding-bottom: 0; }
.timeline__marker {
  position: absolute;
  left: -2.7rem;
  top: 0.25rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-surface);
  border: 2px solid var(--gold-deep);
  transition: border-color 0.2s ease;
}
.timeline__marker--gold {
  background: var(--gold-primary);
  border-color: var(--gold-primary);
  box-shadow: 0 0 12px var(--gold-glow);
}
.timeline__item:hover .timeline__marker { border-color: var(--gold-primary); }
.timeline__title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0.5rem 0 0.75rem;
}
```

### 5.7 SPONSOR MARQUEE

```html
<section class="section section--dark" style="padding:3rem 0; overflow:hidden;">
  <p class="text-label" style="text-align:center; margin-bottom:2rem;">Our Sponsors</p>
  <div class="marquee">
    <div class="marquee__track">
      <!-- Logos repeat twice for seamless loop -->
      <img src="/logos/nike.svg" class="marquee__logo" alt="Nike">
      <img src="/logos/adidas.svg" class="marquee__logo" alt="Adidas">
      <img src="/logos/puma.svg" class="marquee__logo" alt="Puma">
      <img src="/logos/redbull.svg" class="marquee__logo" alt="Red Bull">
      <img src="/logos/ea.svg" class="marquee__logo" alt="EA Sports">
      <img src="/logos/decathlon.svg" class="marquee__logo" alt="Decathlon">
      <!-- Repeat same set for seamless loop -->
      <img src="/logos/nike.svg" class="marquee__logo" alt="Nike">
      <img src="/logos/adidas.svg" class="marquee__logo" alt="Adidas">
      <img src="/logos/puma.svg" class="marquee__logo" alt="Puma">
      <img src="/logos/redbull.svg" class="marquee__logo" alt="Red Bull">
      <img src="/logos/ea.svg" class="marquee__logo" alt="EA Sports">
      <img src="/logos/decathlon.svg" class="marquee__logo" alt="Decathlon">
    </div>
  </div>
</section>
```

```css
.marquee { overflow: hidden; position: relative; }
.marquee::before, .marquee::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  width: 120px;
  z-index: 2;
}
.marquee::before { left: 0; background: linear-gradient(90deg, var(--bg-void), transparent); }
.marquee::after  { right: 0; background: linear-gradient(-90deg, var(--bg-void), transparent); }
.marquee__track {
  display: flex;
  align-items: center;
  gap: 4rem;
  animation: marquee-scroll 30s linear infinite;
  width: max-content;
}
.marquee__logo {
  height: 28px;
  width: auto;
  filter: brightness(0) invert(1);
  opacity: 0.35;
  transition: opacity 0.2s;
  flex-shrink: 0;
}
.marquee__logo:hover { opacity: 0.8; }
@keyframes marquee-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

### 5.8 FINAL CTA SECTION

```html
<section class="cta-section">
  <div class="cta-section__bg">
    <!-- Dark stadium image or gradient background here -->
    <img src="/images/stadium-dark.jpg" alt="" class="cta-section__img" aria-hidden="true">
    <div class="cta-section__overlay"></div>
  </div>
  <div class="container cta-section__content">
    <span class="text-label">Join the Agency</span>
    <h2 class="cta-section__headline">
      Become the Next<br>
      <span class="text-gold-gradient">Legend.</span>
    </h2>
    <p class="text-body-lg" style="max-width:520px; margin:1.5rem auto 2.5rem; text-align:center;">
      Applications open for talented athletes across all disciplines. Our team reviews every submission personally.
    </p>
    <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
      <a href="/apply" class="btn-primary">Apply Now</a>
      <a href="/contact" class="btn-secondary">Contact Us</a>
    </div>
  </div>
</section>
```

```css
.cta-section {
  position: relative;
  padding: 8rem 0;
  text-align: center;
  overflow: hidden;
}
.cta-section__img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.cta-section__overlay {
  position: absolute;
  inset: 0;
  background: rgba(8,8,8,0.88);
}
.cta-section__content { position: relative; z-index: 1; }
.cta-section__headline {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 8vw, 7rem);
  line-height: 0.95;
  color: var(--text-primary);
  margin: 1rem 0;
}
```

---

## 6. IMAGE STRATEGY & AI GENERATION PROMPTS

### 6.1 Why Images Are Non-Negotiable

Sports websites live and die by their visuals. Dark backgrounds with no imagery communicate emptiness, not luxury. Every section below must have a corresponding image.

### 6.2 Hero Section Image

**Midjourney / DALL-E 3 / Stable Diffusion Prompt:**

```
Ultra-realistic portrait of a world-class male athlete standing alone in a massive 
empty stadium at night. Powerful confident pose, arms slightly apart. 
Dramatic golden rim light from behind creating a halo effect on the figure. 
Low ground fog and fine dust particles in the air. 
Stadium seats out of focus in the background (bokeh). 
Deep cinematic shadows. Dark dramatic atmosphere. 
Color grade: warm gold tones contrasting cold dark blue-black environment. 
Netflix sports documentary aesthetic. ESPN magazine cover quality. 
Shot on RED camera, 24mm lens, f/1.8, golden hour backlight. 
16:9 aspect ratio. Hyper-detailed. 8K resolution.
```

### 6.3 Documentary Section Image

**Prompt:**

```
Cinematic still from a sports documentary. An athlete in a quiet locker room 
alone before a big match, sitting on bench, head slightly bowed in focus. 
Single overhead light casting dramatic downward shadows. 
Worn jersey, athletic gear scattered around. Deep shadows. 
Moody, introspective atmosphere. Film grain. 
ESPN 30 for 30 documentary style. Warm single-source lighting. 
Dark tones. 2:3 portrait aspect ratio. Photorealistic. 8K.
```

### 6.4 Background / CTA Section Image

**Prompt:**

```
Wide aerial shot of a massive empty football stadium at night. 
Stadium floodlights on, creating pools of bright light on the green pitch. 
Stands empty. Dramatic perspective from upper tier looking toward one goal. 
Mist or light fog on the field. 
Dark cinematic mood. Color grade: deep blue-blacks with gold/white light sources. 
16:9 landscape. Photorealistic. 8K.
```

### 6.5 Athlete Profile Photos

**Prompt (adapt per athlete/sport):**

```
Professional athlete studio portrait. [SPORT — e.g., cricket player] 
in full match kit. Dark seamless studio background. 
Single dramatic key light from front-left at 45 degrees. 
Subtle rim light outlining the figure from behind. 
Athlete looking directly at camera with confidence. 
Clean, powerful pose. No background elements. 
Shot on Canon 1DX, 85mm lens. High contrast. 
Magazine quality. 3:4 portrait aspect ratio.
```

### 6.6 Trophy Images (for Achievement Section)

**Prompt:**

```
Highly detailed 3D render of a gleaming gold championship trophy 
floating against a pure black background. 
Volumetric spotlight from above, creating dramatic reflections. 
Gold metallic surface with deep reflections. 
Luxury sports award aesthetics. 
16:9 landscape with trophy centered and slightly above midline. 
Photorealistic CGI render. 8K.
```

---

## 7. WHAT TO REMOVE IMMEDIATELY

| Remove | Replace With |
|--------|-------------|
| `#00D9FF` cyan borders | `var(--border-gold)` subtle gold borders |
| `#FF007A` pink shadows | No shadows, or `var(--gold-glow)` |
| `#8A2BE2` purple gradients | `--bg-void` + `--bg-dark` dark surfaces |
| Neon glow on buttons | Gold gradient button with subtle shadow |
| RGB animations | GSAP parallax or Framer Motion reveals |
| Glassmorphism everywhere | Solid dark cards with gold borders |
| Excessive blur effects | Clean sharp dark surfaces |
| Hacker/cyberpunk fonts | Bebas Neue + Oswald + Inter |
| Empty sections with no images | Every section has an image or illustration |

---

## 8. MICRO-INTERACTIONS & ANIMATION GUIDE

### 8.1 Principles

- **Purposeful** — animate to direct attention, not to show off
- **Fast** — 200–350ms max on UI feedback, 600ms on reveal animations
- **Subtle** — no RGB cycles, no constant pulsing

### 8.2 Scroll Reveal (CSS — no library needed)

```css
/* Add to all section content that should animate in */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```js
// Intersection Observer — add to your main JS file
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

reveals.forEach(el => observer.observe(el));
```

### 8.3 Animated Number Counters

```js
// Call on section visibility — count up animation for stats
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else element.textContent = target + '+';
  };
  requestAnimationFrame(step);
}

// Usage: animateCounter(document.querySelector('.stat-number'), 120);
```

### 8.4 Magnetic Button Effect

```js
// Apply to primary CTA buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
  });
});
```

---

## 9. RESPONSIVE BREAKPOINTS

```css
/* Mobile first — add at bottom of stylesheet */

/* Tablet */
@media (max-width: 1024px) {
  .athletes-grid { grid-template-columns: repeat(2, 1fr); }
  .documentary-layout { gap: 3rem; }
}

/* Mobile */
@media (max-width: 768px) {
  .hero__headline { font-size: 4rem; }
  .athletes-grid { grid-template-columns: 1fr; }
  .documentary-layout { grid-template-columns: 1fr; }
  .stat-counter-grid { grid-template-columns: repeat(2, 1fr); }
  .hero__stats { gap: 1.5rem; flex-wrap: wrap; }
  .navbar { padding: 0 1.25rem; }
  .navbar__links { display: none; } /* Add hamburger menu */
  .container { padding: 0 1.25rem; }
  .section { padding: 4rem 0; }
}

/* Small Mobile */
@media (max-width: 480px) {
  .hero__headline { font-size: 3rem; }
  .stat-counter-grid { grid-template-columns: 1fr; }
  .trusted-logos { gap: 2rem; }
}
```

---

## 10. FULL PAGE STRUCTURE (Recommended Order)

```
1. NAVBAR           — fixed, transparent → dark on scroll
2. HERO             — full-screen athlete image, headline, CTAs, quick stats
   ─── gold divider ───
3. TRUSTED BY       — animated brand logos
   ─── gold divider ───
4. FEATURED ATHLETES — filterable grid of athlete cards
   ─── gold divider ───
5. ACHIEVEMENT STATS — animated counters (120+ Athletes, 52 Championships...)
   ─── gold divider ───
6. DOCUMENTARY      — 2-column: image left, story text right
   ─── gold divider ───
7. CAREER TIMELINE  — vertical timeline with 5 stages
   ─── gold divider ───
8. TROPHY GALLERY   — 3D hover trophy cards for major wins
   ─── gold divider ───
9. TESTIMONIALS     — video card style athlete quotes
   ─── gold divider ───
10. SPONSOR MARQUEE  — infinite scrolling logo strip
    ─── gold divider ───
11. FINAL CTA       — stadium image bg, "Become the Next Legend"
12. FOOTER          — dark, minimal, navigation links
```

---

## 11. QUICK IMPLEMENTATION CHECKLIST

- [ ] Replace all `#00D9FF`, `#FF007A`, `#8A2BE2` color values globally
- [ ] Add CSS variables from Section 2.1 to `:root`
- [ ] Install Google Fonts: Bebas Neue, Oswald, Inter, Space Grotesk
- [ ] Generate hero athlete image with prompt in Section 6.2
- [ ] Generate stadium background for CTA with prompt in Section 6.4
- [ ] Add athlete profile photos with prompt in Section 6.5
- [ ] Replace flat cards with new `.athlete-card` component (Section 4.2)
- [ ] Add scroll reveal animation to all sections (Section 8.2)
- [ ] Add number counter animation to stats (Section 8.3)
- [ ] Add sponsor marquee section (Section 5.7)
- [ ] Make navbar transparent-to-dark on scroll (Section 4.4)
- [ ] Test all breakpoints (Section 9)
- [ ] Ensure all images have correct `alt` text
- [ ] Verify color contrast ratios meet WCAG AA minimum (4.5:1)

---

*Designed to position this platform as the premiere athlete management agency for Indian and global sports. Build it like a ₹1Cr+ custom agency website, not a template.*