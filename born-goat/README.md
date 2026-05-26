# BORN GOAT

> An elite sports marketing house for athletes, leagues and brands engineered for legacy.

Production-grade Next.js 14 build. Titanium Dynasty design system. Server-rendered, SEO-instrumented, AI-engine-friendly.

---

## Quick start

```bash
npm install
cp .env.example .env.local       # populate when ready to wire integrations
npm run dev                      # → http://localhost:3000
```

Build & ship:

```bash
npm run build && npm start
```

Deploys cleanly to Vercel (recommended), Netlify, or any Node host. No additional config required.

---

## Stack

- **Next.js 14** (App Router, Server Components by default)
- **React 18.3**
- **Tailwind CSS 3.4** with custom Titanium Dynasty design tokens
- **Bebas Neue + Anton + Inter Tight + JetBrains Mono** (via `next/font/google`)

No state library, no CSS-in-JS runtime, no component library. Intentionally light.

---

## Project structure

```
born-goat/
├── app/                              # App Router routes
│   ├── about/                        # /about — house thesis, principles, team
│   ├── api/lead/                     # POST /api/lead — capture endpoint
│   ├── blog/                         # /blog index + [slug] detail
│   ├── case-studies/                 # /case-studies index + [slug] detail
│   ├── consultation/                 # /consultation high-intent funnel
│   ├── contact/                      # /contact — 3 channels + form
│   ├── faq/                          # /faq — full FAQPage with schema
│   ├── services/                     # /services index + [slug] detail
│   ├── globals.css                   # design tokens + atmosphere
│   ├── layout.js                     # root layout, fonts, global meta
│   ├── page.js                       # / homepage
│   ├── robots.js                     # AI-bot-friendly robots.txt
│   └── sitemap.js                    # dynamic sitemap.xml
├── components/
│   ├── forms/
│   │   ├── LeadForm.js               # 4-step qualifier
│   │   └── QuickCaptureForm.js       # 3-field mid-funnel
│   ├── sections/                     # Page composition blocks
│   │   ├── ContactCTA.js
│   │   ├── DomainsGrid.js
│   │   ├── FeaturedWork.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── JournalPreview.js
│   │   ├── JourneyFunnel.js
│   │   ├── Manifesto.js
│   │   ├── Nav.js
│   │   ├── PageHero.js
│   │   ├── PracticeGrid.js
│   │   ├── Testimonial.js
│   │   └── TrustBar.js
│   └── ui/                           # Atomic primitives
│       ├── Button.js
│       ├── Eyebrow.js
│       ├── FloatingCTA.js
│       ├── ManifestoText.js
│       ├── OrgSchema.js
│       ├── Reveal.js
│       └── StatCounter.js
├── lib/
│   ├── content.js                    # Mock CMS — services, cases, blog, FAQs
│   ├── schema.js                     # Schema.org JSON-LD utilities
│   └── site.js                       # Site constants, nav, footer
├── public/
│   ├── favicon.svg
│   └── og-default.svg
├── .env.example
├── jsconfig.json                     # @/* path alias
├── next.config.js
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

---

## Sitemap (information architecture)

```
/                                # Home — hero · manifesto · practice · journey · cases · journal · CTA
├── /about                       # Thesis · principles · team · numbers
├── /services                    # Practice index + engagement tiers
│   └── /services/[slug]         # 6 practices: narrative · pr · brand · sponsorship · crisis · amplify
├── /case-studies                # Selected work index
│   └── /case-studies/[slug]     # IGPL · Aayurbhog
├── /blog                        # Journal index + featured + category filter
│   └── /blog/[slug]             # 5 long-form essays seeded
├── /faq                         # 5-section FAQ (fit · pricing · process · scope · firm)
├── /contact                     # 3 channels + 4-step LeadForm
├── /consultation                # High-intent funnel + sidebar
├── /api/lead                    # POST handler
├── /sitemap.xml                 # Dynamic
└── /robots.txt                  # GPTBot · ClaudeBot · PerplexityBot · Google-Extended allowed
```

Every page is at most two clicks from home. No mega-menu, no graveyard pages.

---

## Design system — Titanium Dynasty

### Palette (tokenized in `tailwind.config.js`)

| Token         | Hex       | Use                                    |
|---------------|-----------|----------------------------------------|
| obsidian      | `#0A0A0A` | Canvas — page background               |
| obsidian-800  | `#111111` | Raised surfaces                        |
| obsidian-700  | `#171717` | Card hover state                       |
| titanium      | `#C7CCD4` | Body text, borders, metallic UI        |
| titanium-dim  | `#8A8F97` | Secondary text                         |
| titanium-deep | `#5A5E64` | Tertiary text, dormant numerals        |
| **gold**      | `#D4A84F` | **CTAs, accents — use sparingly**      |
| gold-bright   | `#F5D27A` | Gradient stop, hover                   |
| electric      | `#3B82F6` | Motion streaks, futuristic accents     |
| crimson       | `#FF3B30` | Urgency only — error states            |

**Gold restraint is the rule.** Apple, Rolex, Nike-elite-edition discipline. Used on CTAs, italic accent words, and small ornamental details — never on backgrounds or large surfaces.

### Typography

- **Display** (`--font-bebas`): Bebas Neue — hero, section heads, manifestos
- **Headline** (`--font-anton`): Anton — alt headline weight
- **Body** (`--font-inter`): Inter Tight — paragraph, UI
- **Mono** (`--font-mono`): JetBrains Mono — eyebrows, metadata, technical labels

Brand signature: italic gold accent word at the end of major headlines (e.g. "OF ALL TIME**.**", "**OUTLIVE** THE SEASON").

### Motion

- 800ms cap, `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- `IntersectionObserver`-driven reveals via `.reveal` class
- `prefers-reduced-motion` respected globally
- Stadium spotlight beams, slow-rotating concentric ornaments, electric streaks for motion accents
- Carbon fiber texture + subtle film grain at body level

---

## SEO / AEO / GEO

| Layer        | Implementation                                                                 |
|--------------|---------------------------------------------------------------------------------|
| Rendering    | SSG by default. `generateStaticParams` on every dynamic route. ISR-ready when CMS wired. |
| Schema.org   | `Organization` (global) · `Service` (per practice) · `Article` (per blog post) · `BreadcrumbList` (every detail page) · `FAQPage` (`/faq`) · `CreativeWork` (per case study) |
| Metadata     | Per-page `generateMetadata` with canonical + OG + Twitter. `metadataBase` set globally. |
| Sitemap      | Dynamic — rebuilds on every deploy across static + service + case + blog routes |
| Robots       | Allow-listed GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot           |
| AEO patterns | Eyebrow + question-shaped section heads + concise answers — featured-snippet-friendly |
| GEO patterns | h2/h3 hierarchy, italic lede paragraph, quotable 40–60 word passages — the structure LLMs prefer to cite |

---

## Funnel logic

Four progressively-deeper capture points:

```
Visitor lands
    ↓
[Top-of-funnel]   Hero CTA → /contact or /consultation
    ↓
[Mid-funnel]      FloatingCTA (after 600px scroll, session-dismissable in extension)
    ↓
[Deep-funnel]    LeadForm 4-step qualifier on /consultation and /contact:
                  Step 1: Identity (name + role)
                  Step 2: Context (email + phone + org)
                  Step 3: Fit (engagement + budget)
                  Step 4: Brief (free text + NDA toggle)
    ↓
POST /api/lead → console.log placeholder, swap for Slack + HubSpot + Resend
```

Honeypot field + email regex on the server. No CAPTCHA — friction is the enemy.

---

## Wiring real services (the swap-out map)

| Mock                         | Where                          | Replace with                                    |
|------------------------------|--------------------------------|-------------------------------------------------|
| Content data                 | `lib/content.js`               | Sanity / Contentlayer / Notion / MDX           |
| Lead handler                 | `app/api/lead/route.js`        | HubSpot CRM + Slack webhook + Resend email     |
| OG image                     | `public/og-default.svg`        | `next/og` per-page dynamic generator           |
| Calendar (consultation page) | placeholder copy               | Cal.com / Calendly inline embed                |
| Newsletter                   | footer + blog footer           | Beehiiv / ConvertKit                           |
| Analytics                    | not wired                      | Plausible / Posthog (privacy-first)            |

Each is one file, one edit. The shape is preserved so nothing else moves.

All env vars live in `.env.example`. Copy to `.env.local` and populate.

---

## Content authority

All copy was written for this site — never lifted, never generic.

- **6 services** with deliverables, process notes, and tag systems
- **3 engagement tiers** with feature lists and pricing
- **2 case studies** with full brief / deliverables / pullquote / learnings / outcomes
- **5 long-form blog essays** averaging 1,800 words each, in-house voice
- **5 FAQ sections** answering 20 real questions
- **6 operating principles** for the about page
- **4 team members** with role and bio

When you swap `lib/content.js` for a real CMS, the schema this file uses is the contract — keep it shaped this way and nothing else has to change.

---

## Voice

Editorial. Founder-to-founder. Anti-fluff. "House" not "agency". "Practice" not "service offering". "Brief" not "intake form".

The italic gold accent word does emotional work that bold cannot. Used once per major headline. Never twice.

---

## License

Built for Born GOAT · Feeding Trends Media Pvt. Ltd.
Lucknow · Mumbai · Dubai
