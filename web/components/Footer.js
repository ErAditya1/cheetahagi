import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import CheetahLogo from './CheetahLogo';
import NewsletterForm from './NewsletterForm';

const COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'AI Consulting', href: '/services/ai-consulting' },
      { label: 'Automation Engineering', href: '/services/automation' },
      { label: 'Funnel Building', href: '/services/funnel-building' },
      { label: 'AI Agents', href: '/services/ai-agents' },
      { label: 'GEO / AEO Strategy', href: '/services/geo-aeo' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Callio — AI Sales Calling', href: '/products/callio' },
      { label: 'Trubetix — Reports', href: '/products/trubetix' },
      { label: 'Strike Audit', href: '/products/strike-audit' },
      { label: 'Whatspipe', href: '/products/whatspipe' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 border-t border-ink-700 mt-20">
      {/* Editorial CTA band */}
      <div className="border-b border-ink-700">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-6">Last call</div>
              <h2 className="font-display font-medium text-display-lg text-bone text-balance leading-[0.95]">
                Stop renting attention. <span className="editorial-italic text-strike">Own the outcome.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link href="/consultation" className="btn-strike justify-center">
                Book Strategy Call →
              </Link>
              <Link href="/contact" className="btn-ghost justify-center">
                Send a Brief
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <CheetahLogo className="w-14 h-16" />
              <div>
                <div className="font-display font-medium text-bone text-xl tracking-tight">
                  Cheetah <span className="text-strike">AGI</span>
                </div>
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink-400">
                  Speed · Intelligence
                </div>
              </div>
            </Link>
            <p className="text-bone-dim text-sm leading-relaxed max-w-sm mb-6">
              We build AI systems that close. Outcome-based consulting for businesses transitioning to
              automated funnels, AI agents, and intelligent operations.
            </p>
            <ul className="space-y-3 font-mono text-xs text-ink-400">
              <li className="flex items-start gap-3">
                <Mail className="w-3.5 h-3.5 mt-0.5 text-strike" />
                <a href="mailto:hello@cheetahagi.com" className="hover:text-strike">hello@cheetahagi.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-3.5 h-3.5 mt-0.5 text-strike" />
                <a href="tel:+919999999999" className="hover:text-strike">+91 99999 99999</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 mt-0.5 text-strike" />
                <span>Lucknow, IN — Operating globally</span>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-400 mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-bone-dim hover:text-strike transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-400 mb-5">
              Signal
            </h3>
            <p className="text-sm text-bone-dim mb-4">
              Weekly tactics on AI, funnels, and outcome economics. No fluff.
            </p>
            <NewsletterForm source="footer-newsletter" variant="footer" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-700">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-ink-500">
            © {new Date().getFullYear()} Feeding Trends Media Pvt. Ltd. — Cheetah AGI is a Cheetah AGI venture.
          </div>
          <div className="flex items-center gap-6 font-mono text-xs text-ink-500">
            <Link href="/privacy" className="hover:text-strike">Privacy</Link>
            <Link href="/terms" className="hover:text-strike">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-strike">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
