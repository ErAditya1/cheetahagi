// =============================================
// BORN GOAT — Live Sports Hub Content Data Layer
// =============================================

export const services = [
  {
    slug: 'narrative-engineering',
    number: '01',
    title: 'Live Scoreboards & Feeds',
    tagline: 'Millisecond-level delivery of real-time sports results.',
    description:
      'We provide high-frequency, low-latency live scoreboards and data feeds for professional sports. From cricket runs to golf strokes, our serverless pipeline ensures fans receive updates at the exact moment they happen.',
    deliverables: [
      'Sub-second live match feeds via WebSockets',
      'Custom widget integrations for web and mobile interfaces',
      'Automated event triggers for boundary and goal alerts',
      'Comprehensive data logs covering all major sporting events',
      'Multi-sport compatibility (Cricket, Football, Basketball, Golf)'
    ],
    process: 'Deployed globally using edge computing networks, minimizing latency to under 100ms. Perfect for high-concurrency match days where uptime is critical.',
    tags: ['Real-time', 'Feeds', 'WebSockets']
  },
  {
    slug: 'sports-pr-editorial',
    number: '02',
    title: 'Analytics & Prediction Engine',
    tagline: 'AI-powered metrics and heatmaps for in-depth insights.',
    description:
      'Our proprietary machine-learning models analyze raw game data in real time, serving predictive win-probabilities, player heatmaps, and coordinate-based tracking statistics.',
    deliverables: [
      'Real-time win/loss probability charts',
      'Spatial coordinate tracking and player heatmaps',
      'Historical matchup index for predictive modeling',
      'Advanced statistical indexing (strike rates, expected goals)',
      'Rich visual data charts ready for broadcast integration'
    ],
    process: 'We parse data streams using high-speed cloud clusters, projecting outcomes dynamically. Trusted by sports journalists and analysts worldwide.',
    tags: ['AI Analytics', 'Heatmaps', 'Predictions']
  },
  {
    slug: 'athlete-league-brand',
    number: '03',
    title: 'Player Stats & Profiles',
    tagline: 'Comprehensive databases tracking every athlete’s performance history.',
    description:
      'A complete biographical and statistical archive of elite athletes. We track careers from debut to current season, offering fans and scouts an exhaustive performance index.',
    deliverables: [
      'Detailed player profiles with automated updates',
      'Historical career graphs and comparison modules',
      'Biometric and fitness indexes (where available)',
      'Custom player metric exports (CSV, JSON, XML)',
      'Scouting-grade visual dashboards'
    ],
    process: 'Updated instantly post-match. We maintain the database structure with robust metadata mappings, enabling seamless lookup and comparison.',
    tags: ['Databases', 'Player Index', 'Scouting']
  },
  {
    slug: 'sponsorship-strategy',
    number: '04',
    title: 'League Portals & Dashboards',
    tagline: 'Interactive dashboards showcasing league stats and standings.',
    description:
      'Custom portals for leagues, federations, and tournaments. We compile league tables, fixtures, discipline records, and stadium maps into a single responsive hub.',
    deliverables: [
      'Dynamic league standing tables and point calculators',
      'Automated fixtures and schedule generators',
      'Individual tournament player leaderboards',
      'Franchise statistics and commercial value reports',
      'Fan-facing event registration systems'
    ],
    process: 'Designed with beautiful, glassmorphic layouts and clean grid alignments. Fully integrated with ticket partners and merchandise outlets.',
    tags: ['Leagues', 'Standings', 'Schedules']
  },
  {
    slug: 'crisis-reputation',
    number: '05',
    title: 'Real-time Match Operations',
    tagline: 'Active monitoring of match operations, streams, and digital infrastructure.',
    description:
      'We run active digital war rooms during major live events, monitoring stream latency, database write-speeds, high-traffic loads, and digital fan sentiment.',
    deliverables: [
      '24/7 active site and API uptime tracking',
      'Concurrent user load-balancing solutions',
      'Automated failover databases for live score pipelines',
      'Interactive fan sentiment charts (social listening)',
      'Direct developer hotline during live tournament windows'
    ],
    process: 'Immediate response protocols with dedicated site reliability engineers on stand-by during matches. We ensure your stats never go down when traffic peaks.',
    tags: ['Operations', 'Monitoring', 'Scale']
  },
  {
    slug: 'amplification-distribution',
    number: '06',
    title: 'API & Syndication Distribution',
    tagline: 'Integrate live match stats directly into your custom apps and platforms.',
    description:
      'A secure, RESTful and GraphQL API enabling developers, media outlets, and fantasy platforms to consume our live data feeds with absolute reliability.',
    deliverables: [
      'Developer keys with customizable rate-limiting',
      'Comprehensive GraphQL schema for sports metrics',
      'Fantasy sports scoring calculation webhooks',
      'White-labeled iframe widgets for news publications',
      'SDK packages in Node.js, Python, and Go'
    ],
    process: 'Fully documented API endpoints with sandboxed sandbox testing environments, enabling rapid development of custom fantasy and news apps.',
    tags: ['API', 'GraphQL', 'Developers']
  }
];

export const engagements = [
  {
    roman: 'I',
    name: 'Standard Feed Access',
    price: '₹75,000',
    per: '/month',
    description: 'Access to standard live score feeds and basic match details for up to three sports. Webhook alerts included.',
    features: [
      'REST API access with standard rate limits',
      'Web-ready scoreboard widgets',
      'Email and chat developer support'
    ]
  },
  {
    roman: 'II',
    name: 'Pro API & Analytics',
    price: '₹2,50,000',
    per: '/month',
    featured: true,
    description: 'Full database access, real-time prediction feeds, GraphQL endpoint, and advanced player tracking metrics. Ideal for large media portals.',
    features: [
      'High-concurrency rate limits',
      'Real-time prediction and win-probability feeds',
      'Dedicated Slack developer support channel',
      'White-labeled broadcast graphics package'
    ]
  },
  {
    roman: 'III',
    name: 'Custom Enterprise Integration',
    price: 'Scoped',
    per: 'per project',
    description: 'Custom tournament dashboard design, white-labeled fantasy API integration, and on-site support during major match windows.',
    features: [
      'Custom database schema & API endpoints',
      'Dedicated SRE on standby during matches',
      'Predictive modeling fine-tuning'
    ]
  }
];

export const caseStudies = [
  {
    slug: 'igpl',
    number: '001',
    client: 'Indian Golf Premier League',
    domain: 'Golf · Live Stats & Analytics',
    year: '2025–26',
    headline: 'Complete real-time analytics suite for IGPL season two.',
    summary: 'How we engineered the live stats infrastructure, player leaderboards, and real-time broadcast overlays for India’s premier golf tournament.',
    metrics: [
      { value: '180+', label: 'Players Tracked' },
      { value: '100ms', label: 'Score Latency' },
      { value: '8.4M', label: 'Active Fan Views' },
      { value: '99.9%', label: 'API Uptime' }
    ],
    tags: ['Golf', 'Live Leaderboards', 'Broadcasting', 'APIs'],
    engagement: 'Pro API & Custom Integration',
    duration: '6 months',
    practices: ['Live Scoreboards & Feeds', 'Analytics & Prediction Engine', 'API & Syndication Distribution'],
    sections: {
      brief: [
        'The Indian Golf Premier League required an enterprise-grade solution to track score progression across 18 holes for over 180 professional golfers simultaneously. Traditional updates were manual and suffered from delays of up to ten minutes.',
        'We designed a mobile-first digital scoring system for on-field markers. Scores entered on the green were pushed through an edge database instantly, updating the broadcast overlay and fan leaderboard within milliseconds.'
      ],
      deliverables: [
        { title: 'On-field scorer app', body: 'Lightweight offline-first web app for hole-by-hole data entry by tournament officials.' },
        { title: 'Live leaderboard database', body: 'Edge-cached database compiling strokes, pars, and handicap adjustments instantly.' },
        { title: 'Broadcast graphics bridge', body: 'API integration that pushed leaderboard standings directly into linear TV broadcast cards.' },
        { title: 'Fan portal dashboard', body: 'A glassmorphic tournament center featuring interactive player scorecards and heatmaps.' }
      ],
      pullquote: 'Born Goat transformed how golf is consumed in India, bringing live stats to golf fans with the speed of an IPL match.',
      pullcite: 'Tournament Director · IGPL',
      learnings: [
        '<strong>Offline resilience is mandatory.</strong> Large golf courses often have weak mobile signals. The scoring app had to store inputs locally and auto-sync the moment a signal was acquired.',
        '<strong>Broadcasters expect raw speed.</strong> Television graphics cannot wait for API retries. We established an active WebSocket stream directly to production trucks.'
      ],
      outcomes: [
        { value: '100ms', label: 'From hole cup drop to database write' },
        { value: '99.9%', label: 'API uptime throughout the 4-day tournament' },
        { value: '8.4M', label: 'Unique dashboard visits during final round' },
        { value: '100%', label: 'Accuracy in stroke calculation and scorecard tiebreaks' }
      ]
    }
  },
  {
    slug: 'aayurbhog',
    number: '002',
    client: 'Aayurbhog Premier Cricket Cup',
    domain: 'Cricket · Predictor Engine',
    year: '2026',
    headline: 'Ball-by-ball predictive analytics and predictor widgets.',
    summary: 'Deploying our machine-learning model to deliver live win-probabilities and batsman score projections during a high-octane domestic tournament.',
    metrics: [
      { value: '250+', label: 'Matches Logged' },
      { value: '89.4%', label: 'Prediction Accuracy' },
      { value: '12.5M', label: 'Widget Impressions' },
      { value: '0.4s', label: 'Refresh Rate' }
    ],
    tags: ['Cricket', 'AI Predictions', 'Widgets', 'GraphQL'],
    engagement: 'Pro API Retainer',
    duration: '3 months',
    practices: ['Analytics & Prediction Engine', 'Live Scoreboards & Feeds'],
    sections: {
      brief: [
        'Aayurbhog Cricket organizers wanted to increase fan retention on their digital platforms. They needed more than standard scores; they wanted interactive statistics that could engage fans during breaks.',
        'We integrated our AI prediction engine to analyze weather, pitch degradation, historical bowler-batsman matchups, and live run rates, producing dynamic widgets.'
      ],
      deliverables: [
        { title: 'Win-probability model', body: 'Dynamic simulator updating team odds ball-by-ball based on current match state.' },
        { title: 'Batsman strike-zone tracker', body: 'Coordinate mapping showing bowler pitch points and batsman hit vectors.' },
        { title: 'Embeddable fan widgets', body: 'Polished widgets containing live polls and prediction charts, embedded in news platforms.' }
      ],
      pullquote: 'The predictor engine became the central talking point of our digital broadcast, keeping fans glued even during rain delays.',
      pullcite: 'Media Lead · Aayurbhog Cup',
      learnings: [
        '<strong>Simplicity boosts fan engagement.</strong> While the data models were complex, the UI had to present findings in a simple percentage gradient (e.g., 62% Win vs 38%).',
        '<strong>GraphQL minimizes payload.</strong> For mobile users on 3G networks, sending small query responses for ball-by-ball events kept the widgets loading instantly.'
      ],
      outcomes: [
        { value: '89.4%', label: 'Match outcome predictive accuracy' },
        { value: '12.5M', label: 'Total widget impressions across publisher networks' },
        { value: '0.4s', label: 'Average latency of ball data synchronization' },
        { value: '+45%', label: 'Increase in user session length on the tournament portal' }
      ]
    }
  }
];

export const blogPosts = [
  {
    slug: 'sponsorship-economics',
    title: 'Optimizing API Latency for Live Sports Dashboards',
    excerpt: 'How we reduced WebSocket load times to under 100ms for high-concurrency match days.',
    content: `
<p>Live sports platforms demand absolute real-time delivery. A delay of five seconds on a live scoreboard can lead to a disjointed user experience, especially in an era of instant push notifications and fast social media feeds.</p>
<h2>The WebSocket Architecture</h2>
<p>To solve this, we replaced our traditional polling API architecture with a serverless WebSocket protocol hosted at edge locations. Instead of fans pinging our databases every two seconds, score updates are broadcasted from the score keeper's terminal directly to active clients.</p>
<blockquote>"In sports data, latency is the difference between a fan engaging or leaving."</blockquote>
<h3>Key Performance Optimization Steps:</h3>
<ul>
  <li><strong>Payload compression:</strong> We minimized the JSON structure to transmit only changed metrics (e.g., current ball and runs) instead of reloading the entire scorecard.</li>
  <li><strong>Edge replication:</strong> By caching databases in region-specific edge nodes, database query latency fell by 80%.</li>
  <li><strong>Active load-balancing:</strong> Dynamic auto-scaling allows our servers to process sudden traffic spikes when wickets fall or goals are scored.</li>
</ul>
<p>Through these optimizations, BORN GOAT dashboards maintain sub-second updates, providing a fluid experience that mirrors linear television.</p>
`,
    category: 'Technology',
    readTime: '5 min read',
    date: 'May 12, 2026',
    featured: true
  },
  {
    slug: 'legacy-architecture',
    title: 'The AI Revolution in Match win-Probability Modeling',
    excerpt: 'Inside the machine learning models that calculate sports outcomes ball-by-ball.',
    content: `
<p>Calculating the winner of a live sports match is no longer just about looking at historic run rates. Today, AI models evaluate hundreds of concurrent variables in real time.</p>
<h2>Building the Model</h2>
<p>Our prediction engine runs on a custom random forest model trained on over 250 historical matches. It processes the following inputs at every ball:</p>
<ol>
  <li><strong>Match state:</strong> Remaining balls, required runs, wickets in hand.</li>
  <li><strong>Environmental factors:</strong> Pitch conditions, dew presence, stadium dimensions.</li>
  <li><strong>Matchups:</strong> Bowler record against current batsman, historical spinner weaknesses.</li>
</ol>
<p>By outputting a win-probability percentage after every single delivery, we keep fans engaged with active statistical narratives, enriching the visual sports experience.</p>
`,
    category: 'Data Science',
    readTime: '7 min read',
    date: 'Apr 28, 2026',
    featured: false
  },
  {
    slug: 'crisis-comms-72-hour-rule',
    title: 'Maintaining Digital Uptime During High-Traffic Matches',
    excerpt: 'SRE playbooks for scale: how to handle 10 million concurrent users without breaking.',
    content: `
<p>When an Indian cricket match reaches the final over, traffic to sports portals multiplies by ten. Handling this scale requires proactive load engineering.</p>
<h2>Database Failovers and Scaling</h2>
<p>We deploy dual-redundant database write-pipelines. If our primary database encounters an unexpected bottleneck, updates are instantly redirected to our backup hot-node with zero lost data frames.</p>
<blockquote>"Redundancy is the only insurance in live-action digital tracking."</blockquote>
<p>We also utilize static SVG generation for score banners. By compiling score text into lightweight vector images and hosting them on CDN edges, we serve millions of requests without hitting our databases, ensuring the site remains up and responsive.</p>
`,
    category: 'Operations',
    readTime: '6 min read',
    date: 'Mar 15, 2026',
    featured: false
  },
  {
    slug: 'building-a-league',
    title: 'Designing Dynamic Leaderboards for Golf Tournaments',
    excerpt: 'How we built a golf dashboard that aggregates stroke data across 18 separate greens.',
    content: `
<p>Golf presents a unique technical challenge: unlike cricket or football where play is localized, a golf tournament has eighteen games happening simultaneously.</p>
<h2>Aggregating Hole-by-Hole Data</h2>
<p>We solved this by establishing a decentralized data mesh. On-course scorers enter data at the completion of each hole. The edge API collects coordinates, stroke counts, and par adjustments, sorting them dynamically against current leaderboards.</p>
<p>This allows tournament organizers, broadcasters, and fans to view global player standings dynamically, elevating golf from a slow-moving sport into an interactive, real-time spectacle.</p>
`,
    category: 'Design & UX',
    readTime: '8 min read',
    date: 'Feb 10, 2026',
    featured: false
  },
  {
    slug: 'journalist-relationships',
    title: 'The Value of Open-Source Sports APIs for Developers',
    excerpt: 'Why we opened our sports metrics pipeline to independent creators and fantasy apps.',
    content: `
<p>The sports tech community thrives when developers have access to rich, clean data. That is why we designed our GraphQL APIs to be developer-first.</p>
<h2>Empowering the Sports Ecosystem</h2>
<p>By providing open-access schemas and sandbox keys, we enable independent builders to create custom statistics portals, predictive simulators, and fantasy widgets. We believe sports data belongs to the fans, and our platform is built to facilitate this collective development.</p>
`,
    category: 'API & Dev',
    readTime: '5 min read',
    date: 'Jan 22, 2026',
    featured: false
  }
];

export const sportsDomains = [
  { name: 'Cricket', sub: 'Ball-by-ball feeds · win-probability engines · player metrics' },
  { name: 'Golf', sub: 'Hole-by-hole leaderboards · handicap trackers · tournament centers' },
  { name: 'Football', sub: 'Live expected-goals (xG) logs · team charts · heatmaps' },
  { name: 'MMA', sub: 'Fighter career metrics · strike accuracy stats · match summaries' },
  { name: 'Motorsport', sub: 'Lap time telemetry · driver tracks · championship tables' },
  { name: 'Esports', sub: 'Tournament brackets · live kill-death ratios · team standings' },
  { name: 'Basketball', sub: 'Real-time player charts · field-goal statistics · shot maps' },
  { name: 'Tennis', sub: 'Serve speed telemetry · ace counters · historical matchups' }
];

export const trustLogos = [
  'ESPN',
  'Star Sports',
  'Sky Sports',
  'PGA Tour',
  'Cricinfo',
  'The Athletic'
];

export const faqs = [
  {
    section: 'data',
    sectionTitle: 'Data & Feeds',
    items: [
      {
        q: 'What is the latency of your live scores?',
        a: 'Our scores synchronize within 100ms of on-course events. Pushed through edge WebSockets, updates appear on client dashboards almost simultaneously with linear television broadcasts.'
      },
      {
        q: 'Do you cover regional and domestic leagues, or only international sports?',
        a: 'We cover both. We have deep tracking setups for major international series as well as domestic leagues like the Indian Golf Premier League, regional cricket cups, and emerging Indian university championships.'
      },
      {
        q: 'How accurate is the prediction engine?',
        a: 'Our predictive win-probability model operates at an average historical accuracy of 89.4% across sports. The model is continuously trained on live match outcomes and updates ball-by-ball.'
      }
    ]
  },
  {
    section: 'api',
    sectionTitle: 'API & Integration',
    items: [
      {
        q: 'How can I get access to the GraphQL API?',
        a: 'You can sign up for a developer sandbox key by clicking "Book a Call" and submitting a request. Standard sandbox tier is free and supports up to 10 requests/minute for testing.'
      },
      {
        q: 'Can I embed the live widgets in my own sports blog?',
        a: 'Yes. We provide white-labeled iframe widgets for news publications. Pro and Enterprise tier accounts can generate responsive, styled embed codes directly from their dashboard.'
      },
      {
        q: 'Do you support fantasy sports calculations?',
        a: 'Absolutely. We provide dedicated webhooks that calculate fantasy points in real time based on player achievements (runs, goals, wickets, cards).'
      }
    ]
  },
  {
    section: 'operations',
    sectionTitle: 'Scale & Operations',
    items: [
      {
        q: 'How do your servers handle high match-day traffic?',
        a: 'Our systems run on serverless edge clusters with active auto-scaling. Additionally, static SVGs are generated for scoreboards at edge CDNs, allowing us to serve millions of simultaneous hits without database fatigue.'
      },
      {
        q: 'Can you customize statistical models for a specific league?',
        a: 'Yes, our Enterprise team designs custom databases and predictive algorithms specifically tailored to unique league rules or scoring methods.'
      }
    ]
  }
];

export const principles = [
  { roman: 'I', title: 'Sub-second Latency', body: 'We measure delivery speeds in milliseconds. A scoreboard that is delayed is a scoreboard that is useless.' },
  { roman: 'II', title: 'Developer-First Design', body: 'Our APIs are fully documented with clean schemas and instant playground environments. We empower creators to build.' },
  { roman: 'III', title: 'Statistical Integrity', body: 'No guesses. Every metric, expectation value, and heat zone is driven by audited raw data streams processed through validated models.' },
  { roman: 'IV', title: 'Uptime When It Matters', body: 'We build for peak traffic. Failover nodes and CDN caching ensure our feeds remain active when match intensity peaks.' },
  { roman: 'V', title: 'Clean Glassmorphic UI', body: 'Aesthetics matter. Our dashboards are designed with a dark, premium slate layout featuring vibrant neon accents that keep eyes on the stats.' }
];

export const team = [
  { name: 'Yash Srivastava', role: 'Founder & Chief Architect', initials: 'Y.S.', bio: 'Founder of Feeding Trends and BORN GOAT. Leads stats engine engineering and product design systems.' },
  { name: 'Fahad', role: 'Head of Infrastructure', initials: 'F.', bio: 'SRE lead. Manages WebSocket scale, auto-scaling cloud databases, and API edge-caching networks.' },
  { name: 'Sakshi', role: 'Editorial Director', initials: 'S.', bio: 'Sports journalist. Directs the insights panel and news desk feeds, ensuring narrative depth behind raw scores.' },
  { name: 'Snigdha', role: 'Partnership Lead', initials: 'Sn.', bio: 'Handles league licensing and broadcast integrations, helping tournaments adopt digital scoring.' }
];

export const firmNumbers = [
  { value: '100ms', label: 'Scoreboard Latency' },
  { value: '89.4%', label: 'Win-prediction accuracy' },
  { value: '12.5M+', label: 'Dashboard impressions' },
  { value: '50+', label: 'Sports verticals covered' },
  { value: '3', label: 'Continents active' },
  { value: '99.9%', label: 'Feeds uptime during tournaments' }
];

// Helper functions used by routes
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
