// In production: replace with CMS fetcher (Sanity / Contentlayer / Notion API).
// Shape is preserved so swap-out is one-line per export.

export const PRODUCTS = [
  {
    slug: 'callio',
    name: 'Callio',
    tagline: 'AI sales calling for Indian businesses. ElevenLabs voice + Tata Tele + your CRM.',
    status: 'Live · Beta',
    tags: ['AI Voice', 'SaaS', 'India-first'],
    description:
      'Multi-tenant AI sales agent that calls leads, qualifies them, books demos, and writes the CRM note — running on Indian telecom infrastructure with TRAI-compliant DLT.',
    features: [
      { title: 'Sub-15ms voice latency', desc: 'On Tata Tele SIP, indistinguishable from human SDRs.' },
      { title: 'Multi-tenant from day one', desc: 'Self-serve onboarding, automated provisioning per workspace.' },
      { title: 'CRM-native', desc: 'HubSpot, Zoho, Salesforce, Leadsquared. Logs every turn.' },
      { title: 'Hindi + English bilingual', desc: 'Trained on Indian conversational patterns, not American scripts.' },
    ],
    pricing: 'From ₹14,999/month + per-minute usage',
    href: '/products/callio',
  },
  {
    slug: 'trubetix',
    name: 'Trubetix',
    tagline: 'Reports and analytics that make sense to founders, not just analysts.',
    status: 'Live',
    tags: ['Analytics', 'Reports', 'B2B'],
    description:
      'Auto-generated weekly intelligence reports for B2B operators — fed by your CRM, ad accounts, and product analytics. Insights, not dashboards.',
    features: [
      { title: 'Auto-narrative reports', desc: 'A weekly written briefing — what changed, why, and what to do.' },
      { title: 'Cross-platform aggregation', desc: 'Meta, Google, LinkedIn, GA4, Mixpanel, Stripe, Razorpay.' },
      { title: 'Founder-readable', desc: 'No dashboard archaeology — the answer is the email.' },
    ],
    pricing: 'From ₹9,999/month',
    href: '/products/trubetix',
  },
  {
    slug: 'strike-audit',
    name: 'Strike Audit',
    tagline: 'GEO + AEO + SEO audit tool. Rank in Google, get cited by ChatGPT.',
    status: 'Building · Q3',
    tags: ['SEO', 'GEO', 'AEO'],
    description:
      'Audit your visibility across the new search stack — Google, AI Overviews, ChatGPT, Perplexity, Gemini. One score. One action list.',
    features: [
      { title: 'LLM citation tracking', desc: 'See which queries surface your brand — and which surface competitors.' },
      { title: 'Schema diagnostics', desc: 'Detects missing FAQ, HowTo, Article, Product schemas.' },
      { title: 'Answer-engine readiness', desc: 'Scores content against the structures LLMs prefer to quote.' },
    ],
    pricing: 'Waitlist',
    href: '/products/strike-audit',
  },
  {
    slug: 'whatspipe',
    name: 'Whatspipe',
    tagline: 'WhatsApp → Blog publishing pipeline. Voice notes become indexed essays.',
    status: 'Building · Q4',
    tags: ['Content', 'WhatsApp', 'Publishing'],
    description:
      'Send a voice note. Get a polished, SEO-ready article published to your blog in minutes. Built for solo operators and small teams who think faster than they type.',
    features: [
      { title: 'Voice-to-essay rendering', desc: 'Tone-preserving transcription with editorial polish.' },
      { title: 'Auto-publish stack', desc: 'WordPress, Ghost, Webflow, Notion, Beehiiv.' },
      { title: 'Schema + image generation', desc: 'Featured image, meta tags, structured data — automatic.' },
    ],
    pricing: 'Waitlist',
    href: '/products/whatspipe',
  },
];

export const SERVICES = [
  {
    slug: 'ai-consulting',
    name: 'AI Consulting',
    tagline: 'The diagnostic-first approach to AI strategy.',
    longDescription:
      'Most "AI strategy" consulting is a deck and a handshake. Ours is a 30-day diagnostic: we map your processes, find where AI actually moves the P&L, and walk away with either a build plan or an honest "don\'t do this." We tell more clients to skip AI than to invest in it.',
    deliverables: ['Process map', 'AI fit-score per workflow', 'ROI projection model', 'Build vs buy matrix', 'Roadmap (90/180/360 day)'],
    timeline: '30 days',
    investment: 'From ₹3L (fixed)',
  },
  {
    slug: 'automation',
    name: 'Automation Engineering',
    tagline: 'Make your existing tools talk. Stop hiring for what software can do.',
    longDescription:
      'You already pay for 14 SaaS tools. We connect them. End-to-end automation across sales, ops, content, and finance — built on n8n, Make, custom Node services, and your existing stack. We focus on workflows where automation pays for itself in the first 60 days.',
    deliverables: ['Workflow audit', 'Automation roadmap', 'Built and deployed flows', '6-week monitoring', 'Internal documentation'],
    timeline: '6–12 weeks',
    investment: 'From ₹2L/month retainer',
  },
  {
    slug: 'funnel-building',
    name: 'Funnel Building',
    tagline: 'High-conversion funnels. B2B and D2C. Engineered, not designed.',
    longDescription:
      'A funnel is not a landing page. It\'s a sequence: traffic source → page → form → routing → nurture → close. We build all of it, instrumented from day one, with attribution that actually works in the cookieless era.',
    deliverables: ['Funnel architecture', 'Page builds (Next.js or Webflow)', 'CRM + ad account integration', 'Attribution stack', 'Performance reporting'],
    timeline: '4–8 weeks',
    investment: 'From ₹3L retainer + ad spend (separate)',
  },
  {
    slug: 'ai-agents',
    name: 'AI Agents',
    tagline: 'Voice and text agents that close, qualify, and follow up.',
    longDescription:
      'We build agents that operate, not chatbots that answer. Voice agents on Indian telecom, text agents on WhatsApp Business, multi-step agents that qualify leads and book meetings. Every agent ships with observability and human escalation.',
    deliverables: ['Agent architecture', 'Voice/text deployment', 'CRM integration', 'Observability stack', 'Handover playbook'],
    timeline: '4–10 weeks',
    investment: 'Project-based or per-minute',
  },
  {
    slug: 'geo-aeo',
    name: 'GEO / AEO Strategy',
    tagline: 'Get cited by ChatGPT, Perplexity, and Google AI Overviews.',
    longDescription:
      'Search is fragmenting. The new top-of-funnel is being the answer in an AI response, not the third blue link. We rebuild your content stack — schema, structure, citations, and entity authority — to be the source LLMs prefer to quote.',
    deliverables: ['Content audit', 'Entity & schema upgrade', 'Topical authority map', 'AI-citation tracking dashboard', 'Quarterly reviews'],
    timeline: 'Ongoing retainer',
    investment: 'From ₹2L/month',
  },
  {
    slug: 'outcome-engineering',
    name: 'Outcome Engineering',
    tagline: 'We work on outcomes. You pay when it works.',
    longDescription:
      'For specific high-leverage projects, we structure engagements around outcomes — pipeline generated, MRR added, cost per lead reduced. Not for everyone. For the right fit, we share risk and reward.',
    deliverables: ['Outcome contract', 'Build + measure', 'Quarterly true-up'],
    timeline: '6–12 month engagements',
    investment: 'Variable / negotiated',
  },
];

export const FAQS = [
  {
    q: 'How is Cheetah AGI different from a typical AI consultancy?',
    a: 'Most consultancies sell decks. We ship systems. Every engagement starts with a 30-day paid diagnostic where we either prescribe a build plan or tell you to walk away. We measure ourselves on revenue impact, not deliverables shipped — and we publish our methodology openly so clients know what they\'re paying for.',
  },
  {
    q: 'Do you work with companies outside India?',
    a: 'Yes. We\'re headquartered in Lucknow, India and operate globally. Our voice agent product (Callio) is India-first because of telecom integration — but consulting, automation, and funnel work happens with clients across North America, Europe, and Southeast Asia.',
  },
  {
    q: 'What\'s the minimum engagement size?',
    a: 'The 30-day diagnostic starts at ₹3L (about USD 3,600). Retainer engagements typically start at ₹2L/month. For outcome-based work, we evaluate fit case-by-case.',
  },
  {
    q: 'Do you build with specific AI vendors or are you tool-agnostic?',
    a: 'Tool-agnostic by default. We use OpenAI, Anthropic, Google, ElevenLabs, and open-source models depending on the workflow. Our role is to pick the right tool — not to lock you into one we get a kickback from. We disclose any partnerships upfront.',
  },
  {
    q: 'What is GEO / AEO, and why do I need it?',
    a: 'GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) are the disciplines of getting your brand cited in AI-generated answers — ChatGPT, Perplexity, Google AI Overviews, Gemini. As more search traffic shifts to AI assistants, ranking #1 in Google matters less than being the answer the AI gives. It\'s the new top-of-funnel.',
  },
  {
    q: 'Can you take over an in-flight project from another vendor?',
    a: 'Often, yes. We do a short audit ($2K–$5K equivalent) to assess what\'s salvageable. If the foundation is sound we resume; if not, we tell you that too. We don\'t take projects we don\'t believe in just to bill hours.',
  },
  {
    q: 'How fast can you start?',
    a: 'For diagnostics: typically 7–10 business days from signed agreement. For builds: 2–4 weeks depending on scope. Our team is small and fully booked most of the time — we\'d rather say "in six weeks" than "tomorrow" and underdeliver.',
  },
  {
    q: 'What happens after the engagement ends?',
    a: 'You own everything we build. Code, accounts, documentation, integrations. We hand over fully. Most clients renew on retainer for ongoing optimization, but it\'s never required and never the goal of the engagement.',
  },
];

export const CASE_STUDIES = [
  {
    slug: 'aayurbhog-makhana',
    client: 'Aayurbhog Organics',
    industry: 'D2C · Organic foods',
    headline: 'Built a B2B Makhana funnel + GUTSIP launch in 90 days',
    summary:
      'Parallel-track strategy: B2B distribution funnel for makhana (the legacy product) and a brand-led launch for GUTSIP (the new product). Retainer + ad spend model, monthly ROI tracking.',
    metrics: [
      { v: '₹4.2L', l: 'B2B pipeline · month 2' },
      { v: '14×', l: 'CAC payback on GUTSIP' },
      { v: '38%', l: 'Trial → repeat conversion' },
    ],
    href: '/case-studies/aayurbhog-makhana',
  },
  {
    slug: 'callio-launch',
    client: 'Callio (in-house product)',
    industry: 'AI SaaS',
    headline: 'Shipped multi-tenant AI calling SaaS — 4,800 lines, full stack',
    summary:
      'Built end-to-end: ElevenLabs voice + Tata Tele SIP, automated tenant provisioning, billing, observability. Pricing benchmarked against Ozonetel/Exotel/MyOperator.',
    metrics: [
      { v: '12ms', l: 'Mean response latency' },
      { v: '4,880', l: 'Lines of production code' },
      { v: '60%', l: 'Cost vs. nearest competitor' },
    ],
    href: '/case-studies/callio-launch',
  },
  {
    slug: 'feeding-trends-authority',
    client: 'Feeding Trends',
    industry: 'Media · Publishing',
    headline: '7-year domain authority moat → AI-era content infrastructure',
    summary:
      'Repositioned Feeding Trends from a content site to an authority infrastructure — "proof that a human is real and worth listening to" — in an AI-flooded content market.',
    metrics: [
      { v: 'DA 65', l: 'Domain authority' },
      { v: '14M+', l: 'Lifetime sessions' },
      { v: '2.3K', l: 'Indexed essays' },
    ],
    href: '/case-studies/feeding-trends-authority',
  },
];

export const BLOG_POSTS = [
  {
    slug: 'geo-vs-aeo-vs-seo',
    title: 'GEO, AEO, SEO: the new shape of being findable',
    excerpt:
      'Search is splitting into three modes. Here\'s how to win all of them without writing three content strategies.',
    category: 'GEO / AEO',
    date: '2026-04-22',
    readTime: '7 min',
    featured: true,
  },
  {
    slug: 'ai-agents-india-telecom',
    title: 'Why your AI voice agent failed in India (and how to actually deploy one)',
    excerpt:
      'TRAI compliance, DLT registration, the SIP trunk question. Everything no one tells you before you wire up ElevenLabs.',
    category: 'AI Agents',
    date: '2026-04-08',
    readTime: '11 min',
  },
  {
    slug: 'outcome-economy-shift',
    title: 'From attention economy to outcome economy: where consultants get paid next',
    excerpt:
      'The shift is already happening — clients want results, not deliverables. Here\'s the new pricing model.',
    category: 'Strategy',
    date: '2026-03-30',
    readTime: '6 min',
  },
  {
    slug: 'llm-indexing-content',
    title: 'How LLMs decide what to cite — and how to be the source they pick',
    excerpt:
      'Reverse-engineering the structures Anthropic, OpenAI, and Perplexity favor when assembling answers.',
    category: 'GEO / AEO',
    date: '2026-03-18',
    readTime: '9 min',
  },
  {
    slug: 'human-proof-content',
    title: 'In an AI-flooded content market, the moat is proof of humanity',
    excerpt:
      'Why "another listicle" is dead — and what content with a verifiable human author looks like now.',
    category: 'Content',
    date: '2026-02-28',
    readTime: '5 min',
  },
];
