import { Db } from './types';

const now = () => new Date().toISOString();
const withMeta = <T extends object>(item: T, index = 0) => ({
  id: `${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`,
  createdAt: now(),
  updatedAt: now(),
  ...item,
});

const postBody = (excerpt: string) => `
${excerpt}

## Why this matters now

The shift in how people find information is no longer hypothetical. AI Overviews, ChatGPT, Perplexity, and Gemini are routing a growing share of intent away from the ten blue links.

## The mechanics

Generative engines assemble answers. They do not rank pages in the same way search engines do. The unit of optimization is the passage that gets cited.

## What we recommend

Audit your highest-intent pages against schema coverage, author transparency, and quotable passage density. Most B2B sites have a wide gap here.
`;

export function createSeedDb(): Db {
  return {
    products: [
      withMeta({
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
        visible: true,
        showInNavbar: true,
        sortOrder: 1,
      }, 1),
      withMeta({
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
        visible: true,
        showInNavbar: true,
        sortOrder: 2,
      }, 2),
      withMeta({
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
        visible: true,
        showInNavbar: true,
        sortOrder: 3,
      }, 3),
      withMeta({
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
        visible: true,
        showInNavbar: true,
        sortOrder: 4,
      }, 4),
    ],
    services: [
      withMeta({ slug: 'ai-consulting', name: 'AI Consulting', tagline: 'The diagnostic-first approach to AI strategy.', longDescription: 'Most AI strategy consulting is a deck and a handshake. Ours is a 30-day diagnostic: we map your processes, find where AI actually moves the P&L, and walk away with either a build plan or an honest skip recommendation.', deliverables: ['Process map', 'AI fit-score per workflow', 'ROI projection model', 'Build vs buy matrix', 'Roadmap'], timeline: '30 days', investment: 'From ₹3L (fixed)', visible: true, sortOrder: 1 }, 10),
      withMeta({ slug: 'automation', name: 'Automation Engineering', tagline: 'Make your existing tools talk.', longDescription: 'End-to-end automation across sales, ops, content, and finance — built on workflow tools, custom services, and your existing stack.', deliverables: ['Workflow audit', 'Automation roadmap', 'Built and deployed flows', '6-week monitoring', 'Internal documentation'], timeline: '6–12 weeks', investment: 'From ₹2L/month retainer', visible: true, sortOrder: 2 }, 11),
      withMeta({ slug: 'funnel-building', name: 'Funnel Building', tagline: 'High-conversion funnels. B2B and D2C.', longDescription: 'A funnel is a sequence: traffic source, page, form, routing, nurture, and close. We build all of it, instrumented from day one.', deliverables: ['Funnel architecture', 'Page builds', 'CRM integration', 'Attribution stack', 'Performance reporting'], timeline: '4–8 weeks', investment: 'From ₹3L retainer + ad spend', visible: true, sortOrder: 3 }, 12),
      withMeta({ slug: 'ai-agents', name: 'AI Agents', tagline: 'Voice and text agents that close, qualify, and follow up.', longDescription: 'We build agents that operate, not chatbots that answer. Every agent ships with observability and human escalation.', deliverables: ['Agent architecture', 'Voice/text deployment', 'CRM integration', 'Observability stack', 'Handover playbook'], timeline: '4–10 weeks', investment: 'Project-based or per-minute', visible: true, sortOrder: 4 }, 13),
      withMeta({ slug: 'geo-aeo', name: 'GEO / AEO Strategy', tagline: 'Get cited by ChatGPT, Perplexity, and Google AI Overviews.', longDescription: 'We rebuild your content stack — schema, structure, citations, and entity authority — to be the source LLMs prefer to quote.', deliverables: ['Content audit', 'Entity upgrade', 'Topical authority map', 'AI-citation tracking dashboard', 'Quarterly reviews'], timeline: 'Ongoing retainer', investment: 'From ₹2L/month', visible: true, sortOrder: 5 }, 14),
      withMeta({ slug: 'outcome-engineering', name: 'Outcome Engineering', tagline: 'We work on outcomes. You pay when it works.', longDescription: 'For specific high-leverage projects, we structure engagements around outcomes: pipeline generated, MRR added, cost per lead reduced.', deliverables: ['Outcome contract', 'Build + measure', 'Quarterly true-up'], timeline: '6–12 month engagements', investment: 'Variable / negotiated', visible: true, sortOrder: 6 }, 15),
    ],
    faqs: [
      withMeta({ q: 'How is Cheetah AGI different from a typical AI consultancy?', a: 'Most consultancies sell decks. We ship systems and measure ourselves on revenue impact.', visible: true, sortOrder: 1 }, 20),
      withMeta({ q: 'Do you work with companies outside India?', a: 'Yes. We are headquartered in Lucknow, India and operate globally.', visible: true, sortOrder: 2 }, 21),
      withMeta({ q: 'What is GEO / AEO, and why do I need it?', a: 'GEO and AEO are the disciplines of getting cited in AI-generated answers.', visible: true, sortOrder: 3 }, 22),
    ],
    caseStudies: [
      withMeta({ slug: 'aayurbhog-makhana', client: 'Aayurbhog Organics', industry: 'D2C · Organic foods', headline: 'Built a B2B Makhana funnel + GUTSIP launch in 90 days', summary: 'Parallel-track strategy: B2B distribution funnel and product launch.', metrics: [{ v: '₹4.2L', l: 'B2B pipeline · month 2' }, { v: '14×', l: 'CAC payback on GUTSIP' }, { v: '38%', l: 'Trial → repeat conversion' }], href: '/case-studies/aayurbhog-makhana', visible: true }, 30),
      withMeta({ slug: 'callio-launch', client: 'Callio (in-house product)', industry: 'AI SaaS', headline: 'Shipped multi-tenant AI calling SaaS', summary: 'Built end-to-end voice, provisioning, billing, and observability.', metrics: [{ v: '12ms', l: 'Mean response latency' }, { v: '4,880', l: 'Lines of production code' }, { v: '60%', l: 'Cost vs. nearest competitor' }], href: '/case-studies/callio-launch', visible: true }, 31),
    ],
    posts: [
      withMeta({ slug: 'geo-vs-aeo-vs-seo', title: 'GEO, AEO, SEO: the new shape of being findable', excerpt: 'Search is splitting into three modes. Here is how to win all of them without writing three content strategies.', category: 'GEO / AEO', date: '2026-04-22', readTime: '7 min', featured: true, body: postBody('Search is splitting into three modes.'), visible: true }, 40),
      withMeta({ slug: 'ai-agents-india-telecom', title: 'Why your AI voice agent failed in India (and how to actually deploy one)', excerpt: 'TRAI compliance, DLT registration, the SIP trunk question.', category: 'AI Agents', date: '2026-04-08', readTime: '11 min', featured: false, body: postBody('Voice agents in India fail when telecom realities are ignored.'), visible: true }, 41),
      withMeta({ slug: 'outcome-economy-shift', title: 'From attention economy to outcome economy: where consultants get paid next', excerpt: 'Clients want results, not deliverables. Here is the new pricing model.', category: 'Strategy', date: '2026-03-30', readTime: '6 min', featured: false, body: postBody('The pricing model for consulting is changing.'), visible: true }, 42),
      withMeta({ slug: 'llm-indexing-content', title: 'How LLMs decide what to cite — and how to be the source they pick', excerpt: 'Reverse-engineering the structures AI engines favor when assembling answers.', category: 'GEO / AEO', date: '2026-03-18', readTime: '9 min', featured: false, body: postBody('LLM citation has patterns that teams can build for.'), visible: true }, 43),
      withMeta({ slug: 'human-proof-content', title: 'In an AI-flooded content market, the moat is proof of humanity', excerpt: 'Why another listicle is dead and what verifiable human authorship looks like now.', category: 'Content', date: '2026-02-28', readTime: '5 min', featured: false, body: postBody('Proof of humanity is becoming a distribution advantage.'), visible: true }, 44),
    ],
    leads: [],
    activities: [],
  };
}
