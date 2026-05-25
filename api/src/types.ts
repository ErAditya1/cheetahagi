export type Feature = {
  title: string;
  desc: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  status: string;
  tags: string[];
  description: string;
  features: Feature[];
  pricing: string;
  href: string;
  visible: boolean;
  showInNavbar: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  body: string;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ServiceItem = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  longDescription: string;
  deliverables: string[];
  timeline: string;
  investment: string;
  visible: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  client: string;
  industry: string;
  headline: string;
  summary: string;
  metrics: Array<{ v: string; l: string }>;
  href: string;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Faq = {
  id: string;
  q: string;
  a: string;
  visible: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type Lead = {
  id: string;
  type: string;
  source: string;
  stage?: string;
  payload: Record<string, unknown>;
  status: 'new' | 'reviewed' | 'contacted' | 'closed';
  createdAt: string;
  updatedAt: string;
};

export type Activity = {
  id: string;
  type: string;
  actor: string;
  message: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
};

export type Db = {
  products: Product[];
  posts: Post[];
  services: ServiceItem[];
  faqs: Faq[];
  caseStudies: CaseStudy[];
  leads: Lead[];
  activities: Activity[];
};
