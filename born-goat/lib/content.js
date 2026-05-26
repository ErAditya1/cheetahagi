// =============================================
// BORN GOAT — Content Data Layer
// Swap this for Sanity / Contentlayer / Notion when ready
// =============================================

export const services = [
  {
    slug: 'narrative-engineering',
    number: '01',
    title: 'Narrative Engineering',
    tagline: 'The story comes before the camera arrives.',
    description:
      'The single most under-built asset in Indian sports. Every athlete, every league, every emerging brand has a story. Most have never had it written by someone who knows how stories actually travel.',
    deliverables: [
      'Origin story architecture — the founding moment, told as a moment',
      'Multi-year narrative arc design across one, three, ten year marks',
      'Editorial voice and tone of voice systems',
      'Content pillar mapping — the five things you talk about, and never the sixth',
      'Long-form storytelling — documentaries, profile features, autobiographical positioning'
    ],
    process: 'Before launch. Before a big season. After a setback. Whenever the story needs to be rewritten in a way that makes the next chapter make sense.',
    tags: ['Narrative', 'Editorial', 'Brand Story']
  },
  {
    slug: 'sports-pr-editorial',
    number: '02',
    title: 'Press & Editorial',
    tagline: 'Coverage at the level of publications that actually shape opinion.',
    description:
      'Seven years of relationships with journalists who answer our messages — because we have never wasted their time. Tier-1 placements, long-form features, press infrastructure.',
    deliverables: [
      'Tier-1 editorial placement — Mint, The Hindu, ESPN, Forbes India, The Athletic',
      'Long-form feature engineering — pitch, source, structure, follow-through',
      'Journalist relationship management — by us, on your behalf',
      'International press — UAE, UK, US sports media penetration',
      'Earned media measurement — what coverage was actually worth, in pipeline terms'
    ],
    process: 'A typical month delivers one to three tier-1 placements and a sustained drumbeat of trade and vertical press. Not press release spam — relationship-built editorial that compounds.',
    tags: ['PR', 'Editorial', 'Earned Media']
  },
  {
    slug: 'athlete-league-brand',
    number: '03',
    title: 'Athlete & League Brand',
    tagline: 'The off-field IP your sponsorship deals are actually buying.',
    description:
      'We architect the visual identity, the verbal identity, the content systems, and the merchandise blueprint that turns an athlete into an institution.',
    deliverables: [
      'Visual identity systems — logo, type, palette, photography direction',
      'Verbal identity — voice, vocabulary, signature phrases, on-record register',
      'Content engine design — formats, cadence, platforms that compound',
      'Merchandising IP and licensing architecture',
      'Brand book — the document everyone working with the asset reads'
    ],
    process: 'Most athletes are managed. Few are branded. The difference is whether the value compounds after the playing career ends.',
    tags: ['Brand', 'Identity', 'IP']
  },
  {
    slug: 'sponsorship-strategy',
    number: '04',
    title: 'Sponsorship Strategy',
    tagline: 'Most athletes leave money on the table. We retrieve it.',
    description:
      'The deals you are losing exist because nobody is structuring them properly. Valuation, scouting, structuring, negotiation — done by people who have sat on both sides of the table.',
    deliverables: [
      'Brand fit scouting — proactive outreach to brands that should be partnering with you',
      'Sponsorship valuation — what your audience and rights are actually worth',
      'Deal structuring — multi-year, performance-linked, equity-inclusive where relevant',
      'Negotiation lead or support',
      'Activation strategy — making each deal worth more in year two than year one'
    ],
    process: 'We work on retainer, with success bonuses on outcomes we materially shaped. Your interests stay aligned with ours.',
    tags: ['Sponsorship', 'Deals', 'Capital']
  },
  {
    slug: 'crisis-reputation',
    number: '05',
    title: 'Crisis & Reputation',
    tagline: 'The first 72 hours decide the next 72 months.',
    description:
      'We run war rooms — quiet, structured, ruthless about facts. By the time most agencies have scheduled a call, we have a statement and a strategy.',
    deliverables: [
      'Immediate situation assessment — the 90-minute clarity sprint',
      'Statement drafting and legal coordination',
      'Journalist management — who to call, who to ignore, who to invite in',
      'Social sentiment monitoring and intervention',
      'SERP suppression and long-tail reputation correction',
      'Retainer-based crisis standby for clients who want us on call'
    ],
    process: 'Direct phone number on file with the principal. We do not take walk-ins on crisis work — by the time you need us, the time for a discovery call has passed.',
    tags: ['Crisis', 'Reputation', 'SERP']
  },
  {
    slug: 'amplification-distribution',
    number: '06',
    title: 'Amplification & Distribution',
    tagline: 'Paid, earned, owned — choreographed as one piece.',
    description:
      'The same story landing on every surface that matters, in every format the platform rewards, at the moment the audience is ready to receive it.',
    deliverables: [
      'Paid media planning and buying — performance and brand layers',
      'Influencer and creator coordination at all tiers',
      'Owned channel strategy — the publication asset belongs to you',
      'Ticket and event amplification — sellout playbooks measured to last seat',
      'Cross-channel campaign orchestration'
    ],
    process: 'We report on attributed pipeline, not just reach. Every campaign ends with a postmortem document that names what worked, what did not, and what we would change.',
    tags: ['Paid Media', 'Amplification', 'Performance']
  }
];

export const engagements = [
  {
    roman: 'I',
    name: 'Retained Practice',
    price: '₹3,00,000',
    per: '/month',
    description: 'Single-vertical engagement. One discipline, done at depth. Six-month minimum with a 60-day exit clause after the first quarter.',
    features: [
      'One dedicated lead, one team',
      'Monthly strategy session with the principal',
      'Quarterly performance review'
    ]
  },
  {
    roman: 'II',
    name: 'Full House',
    price: '₹12,00,000',
    per: '/month',
    featured: true,
    description: 'All six practices on one strategy, one calendar, one signature. The engagement most of our long-term clients are on. Twelve-month commitment.',
    features: [
      'Senior partner as principal-lead',
      'Full coordinated team across disciplines',
      'Quarterly strategy retreats',
      'Crisis standby included'
    ]
  },
  {
    roman: 'III',
    name: 'Campaign / Project',
    price: 'Scoped',
    per: 'per engagement',
    description: 'Single-purpose work — a league launch, an event run-up, a documentary release, a specific crisis. Defined scope, defined timeline, defined deliverables.',
    features: [
      'Fixed-fee with milestone billing',
      'Bonus structure on outcomes',
      'Available for non-retained clients'
    ]
  }
];

export const caseStudies = [
  {
    slug: 'igpl',
    number: '001',
    client: 'Indian Golf Premier League',
    domain: 'Golf · League Formation',
    year: '2024–25',
    headline: 'From whiteboard concept to ₹25Cr funded league.',
    summary: 'From a Saturday-afternoon whiteboard concept to a ₹25 crore funded league with eight city franchises, eighteen months later. The work that taught us what a serious league launch actually requires.',
    metrics: [
      { value: '₹25Cr', label: 'Capital Raised' },
      { value: '8', label: 'Franchises' },
      { value: '42M', label: 'Earned Reach' },
      { value: '18mo', label: 'Launch Window' }
    ],
    tags: ['Golf', 'League Formation', 'Sponsorship', 'Broadcast'],
    engagement: 'Full House Retainer',
    duration: '18 months',
    practices: ['Narrative Engineering', 'Press & Editorial', 'Brand Build', 'Sponsorship Strategy', 'Amplification'],
    sections: {
      brief: [
        'A serious investor came to us with a thesis and a question. The thesis: India has the population, the income, and the country club infrastructure for a domestic golf league that pays its players properly. The question: what would it actually take to make this real?',
        'We took the brief seriously. Within ninety days we had pressure-tested the format against three comparable leagues, modelled the unit economics, mapped the broadcast landscape, and identified the eight city markets that could carry franchises. The thesis held. The work began.'
      ],
      deliverables: [
        { title: 'League architecture', body: 'Format design, scoring system, season structure, draft mechanism. The thing players and broadcasters had to fall in love with.' },
        { title: 'Brand identity system', body: 'League marks, franchise visual systems, broadcast graphics package, signage. A full design language built to live across stadium, broadcast, and digital.' },
        { title: 'Investor narrative', body: 'The deck, the financial model, the strategic positioning that put ₹25 crore in escrow. We wrote it. We presented it. We answered the room.' },
        { title: 'Franchise sales', body: 'Eight city franchises sourced, vetted, signed. Each one a separate negotiation, a separate set of expectations to manage.' },
        { title: 'Broadcast partnership', body: 'Linear plus OTT deal architecture. The economics that turned a tournament into a media property.' },
        { title: 'Press launch', body: '42 million in earned reach across the launch quarter. Mint cover, ESPN feature, Forbes India profile, twelve trade pieces.' }
      ],
      pullquote: 'The hardest part was not the launch. It was making the league feel inevitable by the time the launch happened — like it should have existed all along.',
      pullcite: 'Internal note · IGPL season one debrief',
      learnings: [
        '<strong>The deck is the asset.</strong> The investor narrative is not a sales tool — it is the founding document of the company. We rewrote IGPL\'s deck six times. Each rewrite removed a question that the room would ask. By round seven, the room was nodding.',
        '<strong>Franchises buy belief, not slots.</strong> Each franchise owner had to be sold a vision of what their city\'s team would mean over a decade. The ones who only saw a one-season opportunity were politely declined.',
        '<strong>Broadcast is a chicken-and-egg trap.</strong> Networks want to see audience traction before they commit. Audience traction needs broadcast distribution. We resolved this with a structured OTT-first window that built a watchable product before linear came in.'
      ],
      outcomes: [
        { value: '₹25Cr', label: 'Capital raised in escrow before season launch' },
        { value: '8', label: 'City franchises signed and active' },
        { value: '42M', label: 'Earned media reach in launch quarter' },
        { value: '3', label: 'Tier-1 broadcast partners on contract' },
        { value: '18mo', label: 'From concept to first season tee-off' },
        { value: '₹0', label: 'Spent on paid PR. All earned.' }
      ]
    }
  },
  {
    slug: 'aayurbhog',
    number: '002',
    client: 'Aayurbhog Organics',
    domain: 'D2C · Sports Nutrition',
    year: '2025',
    headline: 'A heritage-rooted sports nutrition brand built from a sourcing thesis.',
    summary: 'From naming and visual identity to GUTSIP launch, the first ₹1 crore in revenue, and a community of 120,000 athletes who actually care what they put in.',
    metrics: [
      { value: '₹1Cr', label: 'Year 1 Revenue' },
      { value: '3', label: 'Product Lines' },
      { value: '120K', label: 'Community' },
      { value: '12mo', label: 'To Revenue' }
    ],
    tags: ['D2C', 'Sports Nutrition', 'Brand Build', 'Launch'],
    engagement: 'Full House + Equity',
    duration: '12 months',
    practices: ['Narrative Engineering', 'Brand Build', 'Press & Editorial', 'Amplification', 'Community'],
    sections: {
      brief: [
        'Aayurbhog\'s founders came with something rare: a real supply chain advantage. Direct sourcing relationships with organic makhana farmers in Bihar, plus a clean ayurvedic formulation thesis. What they did not have was a brand, a name, or a market position.',
        'The category they were entering — sports nutrition for serious athletes — was dominated by foreign brands selling whey protein in plastic tubs. The founders wanted to build something different: a heritage brand for athletes who read ingredient labels. We agreed to take the engagement on a retainer-plus-equity basis. Skin in the game.'
      ],
      deliverables: [
        { title: 'The name', body: 'Aayurbhog — the food of ayurveda. We ran the name through Nakshatra-syllable analysis at the founders\' request. The starting syllable aligned with the venture\'s intended energy. Domain secured, trademarks filed.' },
        { title: 'Visual identity', body: 'A heritage-modern system. Editorial typography, muted earth palette, photography that showed the food, not the gym. Packaging that looked at home on a country kitchen counter.' },
        { title: 'GUTSIP launch', body: 'A pre-workout hydration drink built around the gut-microbiome thesis. The hero SKU we used to anchor the brand at launch. Full creative campaign, influencer drops, performance media.' },
        { title: 'B2B makhana funnel', body: 'Parallel to the consumer launch, a B2B pipeline selling organic makhana to hotel chains, premium cafes, and corporate gifting. Margin support for the D2C operation.' },
        { title: 'Community-first growth', body: '120,000 athletes across runners, golfers, cyclists. Built through content, events, and a referral economy — not paid acquisition. The community is the moat.' },
        { title: 'Content engine', body: 'A weekly newsletter on athletic nutrition, a podcast with sports physicians, a documentary series on the supply chain. The brand publishes more than most media houses do.' }
      ],
      pullquote: 'The hardest decision was the slowest one. We said no to ten retailer offers in year one because they would have made the brand cheap. Year two is now a different conversation.',
      pullcite: 'Aayurbhog founder · Operating debrief',
      learnings: [
        '<strong>Supply chain advantages need narrative.</strong> Aayurbhog\'s farm-direct sourcing was a real edge — but it took a year of content to make customers care enough to pay a premium. The advantage was real; the marketing was the operating discipline.',
        '<strong>Founders\' patience compounds.</strong> Saying no to ten retailers in year one was the decision that made year two possible. Cheap distribution is not distribution — it is brand decay on a payment schedule.',
        '<strong>Sports nutrition is a trust market, not an ingredients market.</strong> Athletes do not read labels because they are nutritionists. They read labels because they do not trust brands. Our work was to make Aayurbhog the brand they did not have to verify.'
      ],
      outcomes: [
        { value: '₹1Cr', label: 'Revenue in year one, organic' },
        { value: '3', label: 'Product lines launched and shipping' },
        { value: '120K', label: 'Active community members' },
        { value: '42%', label: 'Repeat-purchase rate by month 6' },
        { value: '11', label: 'Tier-1 hotel B2B accounts active' },
        { value: '0', label: 'Foreign competitor SKUs in customer cross-sell' }
      ]
    }
  }
];

export const blogPosts = [
  {
    slug: 'sponsorship-economics',
    title: 'Why most athlete sponsorship decks leave 60% of the deal on the table',
    italicTitle: 'on the table',
    excerpt: 'A breakdown of the valuation gap between what athletes ask for and what brands are actually paying — and where the missing margin lives.',
    category: 'Sponsorship',
    date: 'April 10, 2026',
    readTime: '11 min',
    featured: true,
    lead: 'A breakdown of the valuation gap between what athletes ask for and what brands are actually paying — and where the missing margin lives. Written from inside the negotiation room.',
    body: `
<p>The room is always the same. The athlete is on one side, sometimes flanked by an agent. The brand is on the other side, three or four people, one of whom has the budget authority and two of whom are looking at their phones. The deck is open on the screen. The number comes out. Everyone nods. The deal closes.</p>

<p>And in the months after, when we sit down to review what just happened, we find the same pattern, again and again: the athlete walked away with somewhere between thirty and forty per cent of what the deal was actually worth to the brand.</p>

<p>This is not a story about athletes being cheated. The brand-side people are usually decent. They are working with the number their procurement team gave them, and that number is the result of an internal valuation that is closer to honest than most athletes realise. The problem is upstream of the negotiation. <em>The athlete\'s side never built the case for the other sixty per cent.</em></p>

<h2>Where the missing margin actually lives</h2>

<p>Sponsorship valuation is composed of three layers, and most athlete decks only price the first one.</p>

<ol>
  <li><strong>Reach value.</strong> The CPM-equivalent cost of putting the brand in front of the athlete\'s audience. This is what most decks lead with: followers, average impressions, engagement rates. It is the easiest number to calculate and the easiest to argue. It is also, almost always, the smallest layer of the three.</li>
  <li><strong>Association value.</strong> What the athlete\'s brand attributes — competitiveness, discipline, regional identity, demographic — are worth to the brand\'s positioning. This is harder to price and almost never appears in athlete-side decks. But it is, in many categories, larger than reach value by a factor of three or four.</li>
  <li><strong>Activation potential.</strong> What the partnership is worth in compounded brand activity over the contract term — content, appearances, retail tie-ins, social moments, crisis-deflection capability. This is where the biggest gap sits. Most athletes do not even know this layer is being priced internally by the brand.</li>
</ol>

<blockquote>If you are only pricing reach, you are negotiating against your own audience size. If you are pricing all three layers, you are negotiating against the value of the partnership itself.</blockquote>

<h2>The two questions the brand is actually asking</h2>

<p>When a brand evaluates a sponsorship, the procurement team is running two parallel calculations. The first is: <em>what would it cost us to buy this reach through paid media?</em> That gives them the reach value number, which becomes the floor of the negotiation.</p>

<p>The second is more important: <em>what would it cost us to acquire what this partnership gives us that paid media cannot?</em> The credibility transfer. The cultural permission. The defensibility against a competitor partnering with the same athlete. The narrative material for next year\'s brand campaign.</p>

<p>This second number is the ceiling. It is where the margin lives. And most athlete-side decks never make the brand show its work on it.</p>

<h2>What we do differently</h2>

<p>When we run a sponsorship engagement, our deck spends roughly thirty per cent of its pages on reach, and seventy per cent on association and activation. The reach pages are present because they have to be — the procurement team needs them for their model. But they are not the argument.</p>

<p>The argument is structured around three things:</p>

<ul>
  <li>The cultural moments the brand can co-author with the athlete that they could not co-author alone</li>
  <li>The competitor-blocking premium — what the partnership is worth in <em>preventing</em> a rival brand from accessing this athlete</li>
  <li>The compound asset value — what the relationship is worth in year three versus year one</li>
</ul>

<p>None of these are made up. They are real value layers that the brand\'s internal valuation already includes. We are simply ensuring the athlete\'s side gets credit for them in the negotiation, instead of leaving them as silent margin on the buyer\'s side.</p>

<h2>The result</h2>

<p>The deals we close are typically forty to seventy per cent larger than what the athlete would have closed running their own negotiation. The brand still gets a fair deal — we are not extracting margin that is not there. We are just making sure that when there is margin on the table, our side does not walk away from it.</p>

<p>The deeper point: most athletes who feel underpaid are not underpaid by brands. They are underpaid by their own valuation model. The brand was always going to pay closer to the ceiling, if the ceiling had been made visible.</p>
`
  },
  {
    slug: 'legacy-architecture',
    title: 'The architecture of a legacy: what separates a famous athlete from a permanent one',
    italicTitle: 'permanent one',
    excerpt: 'Fame is a moment. Legacy is an asset class. The structural differences between athletes who fade and athletes who become institutions.',
    category: 'Brand',
    date: 'May 14, 2026',
    readTime: '8 min',
    featured: false,
    lead: 'Fame is a moment. Legacy is an asset class. The structural differences between athletes who fade and athletes who become institutions.',
    body: `
<p>Most conversations about athlete brand work conflate two very different things: fame and legacy. The two are produced by different mechanisms, decay on different timelines, and require different operating decisions over a career. Conflating them is the most expensive mistake we see athletes make.</p>

<p><em>Fame is a moment. Legacy is an asset class.</em> The structural differences between the two are worth understanding clearly, because the decisions made in years three to seven of a playing career determine which one an athlete ends up with at retirement.</p>

<h2>The half-life problem</h2>

<p>Fame decays. This is not a moral failing of the audience — it is just how attention works. The half-life of an athletic moment is around eighteen months. The half-life of an athletic career, in audience memory, is somewhere between two and five years after the last competitive appearance.</p>

<p>Legacy does not decay on the same curve. A legacy asset — a documentary, a foundation, a permanent record, a venture, a school, an institution that bears the name — does not require continuous attention to maintain its value. It compounds slowly, but it does not erode without effort.</p>

<p>This is why athletes who built legacy assets in their playing years are still commercially relevant fifteen years after retirement, while athletes who only built fame are doing reunion tours.</p>

<h2>Four pillars that separate the two</h2>

<p>When we look at athletes across multiple sports who successfully made the transition from fame to legacy, four structural decisions show up consistently:</p>

<ol>
  <li><strong>An off-field IP that is not dependent on the playing career.</strong> A founded venture, a published body of work, an institutional role, a documented method. Something that has its own audience and its own value independent of the next match result.</li>
  <li><strong>A documented voice.</strong> Long-form writing, on-record interviews of substance, a podcast or column with intellectual weight. The athletes who survive transition are the athletes whose opinions on things outside their sport were taken seriously while they were still playing.</li>
  <li><strong>A foundation or institutional anchor.</strong> Not necessarily a charity in the corporate-social-responsibility sense, but a body — an academy, a foundation, a school, a fund — that makes the athlete\'s name a permanent part of an ecosystem they did not create alone.</li>
  <li><strong>Equity in things they actually understand.</strong> Not the standard celebrity equity in random startups — meaningful stakes in ventures the athlete is materially involved in, in categories adjacent to their playing identity. The financial layer of legacy.</li>
</ol>

<blockquote>An athlete who has these four pillars at retirement does not need a comeback tour. An athlete who has none of them often does — not because they want one, but because the alternative is fading from cultural memory faster than their post-career savings can absorb.</blockquote>

<h2>The timing problem</h2>

<p>All four of these pillars take five to ten years to build. They cannot be built in retirement. They have to be built during the playing career, often during the peak commercial years, when the athlete has the leverage and the attention to make them happen.</p>

<p>This creates a difficult negotiation inside the athlete\'s own head. Year five of a peak career is also the year the largest sponsorship cheques are arriving. Spending time on legacy-asset building — which does not produce immediate revenue — feels expensive in opportunity cost terms.</p>

<p>It is. The opportunity cost is real. But the cost of <em>not</em> building during that window is larger. The athletes who emerged from their playing careers with permanent cultural standing all paid that opportunity cost during peak years. The ones who optimised for the next deal often did not.</p>

<h2>What this means operationally</h2>

<p>When we onboard an athlete client, we run a diagnostic on which of the four pillars are present, missing, or under-built. We then sequence them — usually one major build per year, in parallel with the commercial work — so the playing career and the legacy build are running on the same calendar rather than competing for it.</p>

<p>It is patient work. It is the kind of work where the value does not show up in the year you do it. It shows up at retirement, and in the decade after, when the athlete who did this work is on the institutional boards, the documentary credits, the equity tables — and the athlete who did not is doing nostalgia content for a shrinking audience.</p>

<p>The difference is not talent. The athletes we are describing are the same athletes. The difference is whether the operating system around them was set up to produce a legacy, or just a career.</p>
`
  },
  {
    slug: 'crisis-comms-72-hour-rule',
    title: 'The 72-hour rule: what we do in the first three days of a sports crisis',
    italicTitle: '72-hour rule',
    excerpt: 'An anonymised walk-through of the operating procedure we follow when a client has hours, not weeks, to course-correct.',
    category: 'Crisis',
    date: 'April 28, 2026',
    readTime: '6 min',
    featured: false,
    lead: 'An anonymised walk-through of the operating procedure we follow when a client has hours, not weeks, to course-correct.',
    body: `
<p>The phone rings at 11:43pm on a Thursday. A client. Something has just landed online. The screenshots are already circulating. Two journalists have already messaged. The principal needs to know what to do in the next ninety minutes, and then in the next twenty-four hours, and then in the next seventy-two.</p>

<p>This is what we are built for. The next three days will set the trajectory for the next three years. Here is what we do, in roughly the order we do it.</p>

<h2>Hours zero through six: clarity, not response</h2>

<p>The single biggest mistake in sports crisis comms is the temptation to respond before you have clarity. Within an hour of a story breaking, the principal and the immediate team are almost always working with incomplete information — and incomplete information statements become tomorrow\'s second-day story.</p>

<p>Our first six hours are not about responding. They are about establishing facts. We run what we call the <em>ninety-minute clarity sprint</em>:</p>

<ol>
  <li>Get every relevant person — principal, legal, immediate family or partners, agent — on a single secured call within 45 minutes</li>
  <li>Establish the factual record: what happened, when, who was present, what was said, what was recorded</li>
  <li>Map the documentary evidence: what exists in writing, on camera, on devices, in messages</li>
  <li>Identify the immediate exposure: legal, contractual, regulatory, sponsorship</li>
  <li>Build a stakeholder map: who needs to be called personally before they read it on a news site</li>
</ol>

<p>We do not draft a statement in this window. Statements come after clarity, never before.</p>

<h2>Hours six through twenty-four: the statement and the calls</h2>

<p>By hour six, we have a factual baseline. Now we draft. The first statement is the most important document of the entire crisis — it sets every constraint on what we can say later. We write it knowing it will be quoted back to us for years.</p>

<p>The rules we follow on the first statement:</p>

<ul>
  <li>Never say something we will have to walk back. The walk-back is always worse than the original mistake.</li>
  <li>Lead with what we know to be true, not what we wish was true.</li>
  <li>Acknowledge the human cost where one exists. Crises become permanent when the person at the centre is perceived to have prioritised themselves over the affected.</li>
  <li>Be specific about what comes next — what investigation, what timeline, what cooperation, what change.</li>
  <li>End with a sentence the client can live with in five years.</li>
</ul>

<blockquote>The statement is not a defence. It is a foundation. Everything we say in the next six months will be measured against it. Every word that does not hold up under that measurement is debt.</blockquote>

<p>While the statement is being finalised, parallel work is happening. The senior partner is on the phone with the three or four most important journalists — not pitching a story, just establishing factual context and asking for the small courtesy of a heads-up before publication. The legal team is reviewing any contractual notification obligations. The sponsorship team is preparing pre-emptive calls to brand partners, so they hear it from us before they hear it from anywhere else.</p>

<h2>Hours twenty-four through seventy-two: the second wave</h2>

<p>Day two and day three are where most crises actually get won or lost. The initial story has been published. The first wave of reaction has happened. The journalists who got the story are now hunting for the angle that justifies a follow-up.</p>

<p>Our work in this window is fourfold:</p>

<ol>
  <li><strong>Saturate the record.</strong> If our statement is the only on-record document from our side, the journalists\' second-day story will be speculative. We feed factual supplements — context, prior record, additional sources, contemporaneous evidence — so the second-day story is anchored to our facts, not their guesses.</li>
  <li><strong>Manage the social layer.</strong> We do not respond to individual social media reactions. We do monitor sentiment trajectories, identify the small number of influential accounts shaping the narrative, and decide whether intervention is required at the editorial level rather than the platform level.</li>
  <li><strong>Hold the sponsorship line.</strong> Brand partners get individual calls in the first 36 hours. Most can be held if they are spoken to directly, with the factual record, before the second-day story breaks. Almost none can be held after.</li>
  <li><strong>Begin SERP correction.</strong> Within 48 hours, we identify the search results that will define the client for the next two years and begin the long, patient work of building the editorial and content layer that competes for those positions.</li>
</ol>

<h2>What we will not do</h2>

<p>A few things, on principle, we do not do — even when clients ask:</p>

<ul>
  <li>We will not plant stories. The shortest path to a longer crisis is being caught planting.</li>
  <li>We will not attack the journalists. They will be writing about our client for years.</li>
  <li>We will not lie. Not to the press, not to the public, not even by omission that is provably misleading.</li>
  <li>We will not handle anything that requires us to mislead anyone we owe honesty to. If the crisis cannot be navigated without that, we are not the right firm.</li>
</ul>

<h2>What separates the good outcomes</h2>

<p>The clients who emerge from crises with their commercial and personal standing intact share three things, in our experience. They engaged us before the second-day story broke. They told us the truth in the first hour. And they followed the discipline of the first statement for the full six months that followed it, even when impatient.</p>

<p>The three days are not the work. The three days set up the work. The next six months are where reputation is actually rebuilt — quietly, slowly, through small consistent moves that nobody outside the room ever sees.</p>
`
  },
  {
    slug: 'building-a-league',
    title: 'Building a league from scratch: lessons from eighteen months inside IGPL',
    italicTitle: 'from scratch',
    excerpt: 'The structural decisions that determine whether a new sports league becomes a real property or a one-season experiment.',
    category: 'League Formation',
    date: 'March 22, 2026',
    readTime: '14 min',
    featured: false,
    lead: 'Eighteen months of operating inside a serious league build. What worked, what we would do differently, and what nobody tells you about the year before season one.',
    body: `
<p>In late 2024, a private investor approached us with a thesis: India has the population, the disposable income, and the country club infrastructure to support a serious domestic golf league. The question was whether such a thing could be built — and what it would actually cost to build it.</p>

<p>Eighteen months later, the Indian Golf Premier League had ₹25 crore in capital, eight signed franchises, a broadcast deal, and a calendar. Here is what we learned along the way that has now become the operating template for every league-formation engagement we run.</p>

<h2>The first ninety days are about pressure-testing the thesis, not building anything</h2>

<p>The temptation in the first weeks of any league build is to start designing logos. Resist it. The first ninety days should be entirely spent answering one question: <em>does this league have an actual reason to exist, or are we romanticising a hobby category?</em></p>

<p>We pressure-tested IGPL\'s thesis against three comparable league formations from the previous decade. The economics held in two of the three comparisons; the third comparison taught us where we would have to design differently.</p>

<h2>The deck is the company</h2>

<p>By month four, the investor narrative deck had been rewritten six times. Each rewrite removed a question the room would otherwise have asked. By round seven, the room was nodding instead of probing — and the ₹25 crore moved into escrow.</p>

<blockquote>The deck is not a sales tool. It is the founding document of the company. Everything operational downstream — franchise pitches, broadcast negotiations, player recruitment — is a footnote to the case the deck makes.</blockquote>

<h2>Franchises buy a decade, not a season</h2>

<p>The eight franchise owners we ended up with had one thing in common: they were buying a vision of what their city\'s team would be worth in 2034, not what it would generate in cashflow in 2025. Three other prospective owners we turned down were optimising for the inaugural season alone. They would have been bad owners.</p>

<p>Selling franchises is not a sales process. It is a fit process. We deliberately rejected revenue we could have closed because the buyer would have been wrong for a ten-year build.</p>

<h2>Broadcast is a structural trap</h2>

<p>Every new league discovers the same problem at the same point: networks will not commit without proven audience traction; audience traction is impossible without distribution. We resolved this with a structured OTT-first window in season one that let us prove the watchable product before negotiating linear.</p>

<p>If we had not solved this in advance — at deck stage, not at broadcast-deal stage — the league launch would have been delayed by at least nine months.</p>

<h2>What we would do differently next time</h2>

<ol>
  <li><strong>Earlier player engagement.</strong> We brought players into the conversation in month nine. Should have been month three. Players are not just talent — they are co-marketing assets, and the ones who feel ownership perform differently.</li>
  <li><strong>City selection through a real demand signal, not a desk study.</strong> Two of our eight cities are stronger than the model predicted. One is weaker. We would now run a small physical event in each candidate city before committing the franchise.</li>
  <li><strong>Press strategy a quarter earlier.</strong> Our launch quarter was strong, but the trade press infrastructure we built for season one should have been built in parallel with franchise sales, not after.</li>
</ol>

<p>None of these would have changed the outcome materially. But they would have compressed the timeline by three to four months, which in league formation terms is a season.</p>

<h2>The bigger lesson</h2>

<p>League formation is not a marketing problem with an operations side. It is an operations problem with a marketing side. The work that determined whether IGPL would be a real property or an experiment was the structural work: format design, franchise selection, broadcast architecture, capital structure. The brand and press work amplified that structural work — but it could not have substituted for it.</p>

<p>For anyone considering a league build: spend the first nine months on structure, not on brand. The brand can be built in three months when the structure is right. The structure cannot be built in three months under any circumstances.</p>
`
  },
  {
    slug: 'journalist-relationships',
    title: 'The journalist relationship is the asset. The press release is the symptom.',
    italicTitle: 'the symptom',
    excerpt: 'Why our PR practice is built around long-term relationships with thirty editors, not blast lists of three thousand.',
    category: 'Press',
    date: 'March 8, 2026',
    readTime: '7 min',
    featured: false,
    lead: 'Why our PR practice is built around long-term relationships with thirty editors, not blast lists of three thousand.',
    body: `
<p>Every press release sent into a blast list is a symptom of the relationship the sender does not have. If you actually knew the journalist, you would not need the press release — you would have a phone number, a context, a sense of what they were working on this week. The release is a substitute for all of that, and not a good one.</p>

<p>Our PR practice is built around thirty editorial relationships. Not three thousand contacts. Thirty. The ones who answer when we message because we have spent seven years not wasting their time.</p>

<h2>What an editorial relationship actually is</h2>

<p>A relationship with a journalist is not a contact in a database. It is a record of value exchanged — usually one-directional, from us to them — that creates the social permission to ask for something later.</p>

<p>Value to a journalist looks like:</p>

<ul>
  <li>A story tip on something they actually cover, with enough context that they can decide in two minutes whether to chase it</li>
  <li>An expert source for something they are already writing, available in their deadline window</li>
  <li>An off-the-record context call when they are trying to understand a complicated situation</li>
  <li>Not pitching them things outside their beat</li>
  <li>Not following up three times when they did not respond the first time</li>
</ul>

<blockquote>The journalists who matter are over-pitched and under-informed. The discipline that earns access is being one of the few sources who reliably delivers the second thing without inflicting the first.</blockquote>

<h2>What this means for client work</h2>

<p>When we pitch a client to a journalist, we are spending relationship capital we have built over years. We do this deliberately, and we do not do it for every client moment. Some moments do not warrant burning a pitch.</p>

<p>This sounds inefficient. It is, in the short term. In the long term, it is the only way the relationship survives. The agencies that burn out their journalist contacts within twelve months are the agencies that pitched everything.</p>

<h2>The thirty</h2>

<p>The thirty journalists we have real relationships with are spread across roughly twelve outlets. Mint. The Hindu. ESPN. Forbes India. The Athletic. A handful of trade publications in golf and cricket specifically. A few international correspondents who cover Indian sports for global outlets.</p>

<p>Each one knows us by name. Each one knows what we are likely to be working on. Each one trusts us not to send them something they will regret reading. This trust took years to build and would take a single careless email to damage.</p>

<h2>The hiring implication</h2>

<p>We do not hire PR people who came from blast-list firms. The habits do not transfer well. We hire former journalists who already understand what it means to be on the receiving end of a bad pitch, and who instinctively edit themselves before pressing send.</p>

<p>This is also why our team is small. You cannot run thirty relationships through fifteen account managers. You can run them through three or four senior partners who treat the relationships as their own.</p>

<h2>What it produces</h2>

<p>The number we track is not press releases sent. It is tier-1 placements delivered. Three placements a month, across the team, is a good month. Five is a great one. Each placement is the product of a relationship maintained over years, deployed at the right moment, on a story the journalist would have wanted to write anyway.</p>

<p>The press release is not the work. The relationship is the work. The press release is what gets sent when the relationship is missing.</p>
`
  }
];

export const sportsDomains = [
  { name: 'Cricket', sub: 'IPL franchises · emerging leagues · individual athletes' },
  { name: 'Golf', sub: 'League formation · athlete branding · sponsorship' },
  { name: 'Football', sub: 'ISL · youth academies · breakout players' },
  { name: 'MMA', sub: 'Fighter careers · promotion launches' },
  { name: 'Motorsport', sub: 'Drivers · racing series · manufacturers' },
  { name: 'Esports', sub: 'Team brands · tournament marketing' },
  { name: 'Fitness', sub: 'DTC athletic brands · wellness practitioners' },
  { name: 'Olympic Sports', sub: 'Federation work · Olympian career building' }
];

export const trustLogos = [
  'IGPL',
  'AAYURBHOG',
  'FEEDING TRENDS',
  'SHREYAS TRUST',
  'NXGN TECH',
  'CHEETAH AGI'
];

export const faqs = [
  {
    section: 'fit',
    sectionTitle: 'Fit & Engagement',
    items: [
      {
        q: 'Who do you work with?',
        a: 'Athletes (individual or roster), leagues, federations, sports brands, event organisers, and sports-adjacent startups. We take on three new clients per quarter to protect output quality. We work best with clients who are at an inflection point — pre-launch, post-breakthrough, mid-pivot, or facing a crisis — rather than steady-state operations.'
      },
      {
        q: 'How do I know if we are a fit?',
        a: 'We are a fit if (a) the work needs more than one discipline operating in coordination, (b) you are comfortable with a senior-partner-led engagement rather than handing the account to junior staff, and (c) the budget supports work at the level we operate. The first conversation is structured to answer the fit question honestly — if we are not the right firm, we will tell you and try to point you toward someone better.'
      },
      {
        q: 'Do you work with athletes early in their career, or only established ones?',
        a: 'Both. The most interesting work for us is often with athletes between years three and seven of their career — past the breakout moment, before the legacy decisions get locked in. We have also taken on pre-debut work when the trajectory and the team around the athlete are right.'
      },
      {
        q: 'Is there a sport you do not work in?',
        a: 'We have deepest specialism in golf, cricket, motorsport, and emerging Indian leagues. We have done meaningful work in football, MMA, esports, fitness, and Olympic sports. We avoid combat sports with documented ethical concerns and any sport where the integrity layer is materially compromised.'
      }
    ]
  },
  {
    section: 'pricing',
    sectionTitle: 'Pricing & Terms',
    items: [
      {
        q: 'What does engagement cost?',
        a: 'Single-vertical retainers start at ₹3 lakh per month. Full-house engagements (all six practices) start at ₹12 lakh per month and scale based on scope. Campaign and project work is scoped separately and ranges from ₹5 lakh to ₹2 crore depending on deliverables. We do not bill hourly.'
      },
      {
        q: 'Do you take equity instead of fees?',
        a: 'For early-stage ventures where we have material conviction, yes — on a retainer-plus-equity basis. The retainer is reduced; the equity stake is meaningful enough to align long-term. We do not do pure-equity engagements; some cash component is required for both sides to take the work seriously.'
      },
      {
        q: 'What is the minimum engagement length?',
        a: 'Retainers are six months minimum, with a 60-day exit clause after the first ninety days. Full-house engagements are twelve months. Crisis work is hourly during the acute window, then converts to retainer or closes. Project work is scoped to milestones.'
      },
      {
        q: 'Is the first conversation paid?',
        a: 'No. The first conversation is free, unhurried, and structured to be useful to you whether or not we end up working together. If we identify scope you should pursue with someone else, we will tell you.'
      }
    ]
  },
  {
    section: 'process',
    sectionTitle: 'Process & Operations',
    items: [
      {
        q: 'How quickly do we see results?',
        a: 'Press placements and content launches usually inside week two. Measurable audience growth inside 30 days. Sponsorship pipeline movement inside 60–90 days. Brand architecture deliverables — visual identity, voice systems, full books — typically within 60–90 days. Legacy work, which is what we are actually here for, operates on a 6 to 24 month horizon. We are transparent about which timeline each piece of work is on.'
      },
      {
        q: 'How do you measure success?',
        a: 'Attributed pipeline, not just reach. Every campaign and quarter ends with a postmortem document that names what worked, what did not, and what we would change. For long-form work like brand or legacy builds, we measure against the milestones set at the start of the engagement, not vanity metrics.'
      },
      {
        q: 'Who actually does the work?',
        a: 'A senior partner leads every engagement and is the principal point of contact. The execution team is core staff at the firm; we do not outsource production. For specialist phases — documentary production, broadcast deals, legal coordination — we bring in carefully selected external specialists who have worked with us before.'
      },
      {
        q: 'How often do we meet?',
        a: 'Weekly stand-ups for active execution. Monthly strategy sessions with the senior partner. Quarterly retreats for full-house clients. Crisis work is on-call, 24-hour responsiveness, until the acute window closes.'
      }
    ]
  },
  {
    section: 'scope',
    sectionTitle: 'Scope & Boundaries',
    items: [
      {
        q: 'Do you handle crisis comms?',
        a: 'Yes. We run 72-hour war rooms for active situations — statement drafting, journalist management, social sentiment control, SERP suppression. Crisis retainers are available for clients who want us on standby. The earlier we are engaged in a crisis, the more options stay on the table.'
      },
      {
        q: 'Will you plant stories, ghost-write hostile content, or attack rivals?',
        a: 'No. We do not do any of these, even when asked, and even when offered substantial fees to do so. We are a long-game firm. Short-term tactical wins of that kind cost us, our clients, and the practice in ways that take years to repair.'
      },
      {
        q: 'Are you only India-focused?',
        a: 'Headquarters is Lucknow, with operating capability in Mumbai and Dubai. Our network spans India plus active editorial and brand relationships in the UAE, UK, and US. Most cricket, golf, and Indian-league work is domestic; PR, brand, and sponsorship work routinely runs internationally.'
      },
      {
        q: 'How is this different from a regular PR agency?',
        a: 'PR agencies sell coverage. We sell career trajectory. Coverage is one of six tools we use — alongside narrative, brand architecture, sponsorship strategy, crisis response, and amplification — all coordinated under one strategy by one senior partner. A PR agency makes you visible. We make you inevitable.'
      }
    ]
  },
  {
    section: 'firm',
    sectionTitle: 'About the firm',
    items: [
      {
        q: 'How old is Born GOAT?',
        a: 'The Born GOAT practice was formalised in 2026 as the sports marketing arm of Feeding Trends Media Pvt. Ltd., which has operated as a content and credibility infrastructure business since 2019. The team\'s individual experience in sports work goes back significantly further.'
      },
      {
        q: 'Who founded the firm?',
        a: 'The firm is founded and led by Yash Srivastava, the founder of Feeding Trends. The senior partnership includes specialists in PR, brand, and sponsorship who have led work on the cases listed in our portfolio.'
      },
      {
        q: 'Are you affiliated with any sports league or federation?',
        a: 'No. We are an independent firm. We work with leagues and federations as clients on a paid basis. We are not owned by, equity-aligned with, or contractually bound to any sports body.'
      },
      {
        q: 'Where can I read more about how you think?',
        a: 'The Journal at borngoat.com/blog publishes our long-form essays on sports business, brand, sponsorship, and crisis work. The Dispatch newsletter is a monthly summary — sign up at the bottom of the journal page.'
      }
    ]
  }
];

export const principles = [
  { roman: 'I', title: 'The senior partner is the work', body: 'Every engagement is led by a partner personally accountable for the outcome. We do not run an account-handler model where you meet senior staff at pitch and never again.' },
  { roman: 'II', title: 'We say no more than we say yes', body: 'We take three new clients per quarter. We turn down ten times that. Capacity discipline is what makes the work we accept actually good.' },
  { roman: 'III', title: 'We do not plant or attack', body: 'No paid stories disguised as editorial. No hostile content against rivals. The short-term wins from those tactics carry a cost that takes years to repay.' },
  { roman: 'IV', title: 'Outcomes, not hours', body: 'We bill on retainers and milestones. We measure on attributed pipeline. If a deliverable did not move what we agreed it would move, we say so and adjust.' },
  { roman: 'V', title: 'The first conversation is unhurried', body: 'Free, structured, designed to be useful to you whether or not we work together. If we are not the right firm, we will say so on the first call.' },
  { roman: 'VI', title: 'Crisis work is on principle', body: 'We will handle a sports crisis at 11pm on a Sunday. We will not handle one that requires us to mislead anyone we owe honesty to.' }
];

export const team = [
  { name: 'Yash Srivastava', role: 'Founder & Senior Partner', initials: 'Y.S.', bio: 'Founder of Feeding Trends. Seven years building India\'s content credibility infrastructure. Leads narrative, brand, and league-formation engagements.' },
  { name: 'Fahad', role: 'Chief Operating Officer', initials: 'F.', bio: 'Operations lead. Runs engagement delivery, client coordination, and team capacity. The person who makes sure nothing falls between the disciplines.' },
  { name: 'Sakshi', role: 'Head of PR & Press', initials: 'S.', bio: 'Editorial relationships, tier-1 placement strategy, journalist management. The voice on the phone when a story is about to break.' },
  { name: 'Snigdha', role: 'Head of Sports Sales', initials: 'Sn.', bio: 'Sponsorship strategy and deal structuring. Sits on the athlete\'s side of the table during negotiations.' }
];

export const firmNumbers = [
  { value: '7yr', label: 'Operating history under Feeding Trends' },
  { value: '₹25Cr+', label: 'Capital raised on behalf of clients' },
  { value: '120M+', label: 'Earned media reach across portfolio' },
  { value: '47', label: 'Brand partnerships structured to date' },
  { value: '3', label: 'Continents we operate across' },
  { value: '0', label: 'Crises that became second-day stories on our watch' }
];

// helper functions used by routes
export function getService(slug) {
  return services.find(s => s.slug === slug);
}
export function getCaseStudy(slug) {
  return caseStudies.find(c => c.slug === slug);
}
export function getPost(slug) {
  return blogPosts.find(p => p.slug === slug);
}
export function getRelatedPosts(slug, count = 2) {
  const post = getPost(slug);
  if (!post) return blogPosts.slice(0, count);
  const sameCategory = blogPosts.filter(p => p.category === post.category && p.slug !== slug);
  if (sameCategory.length >= count) return sameCategory.slice(0, count);
  const others = blogPosts.filter(p => p.slug !== slug && !sameCategory.includes(p));
  return [...sameCategory, ...others].slice(0, count);
}
