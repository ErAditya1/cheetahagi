'use client';

import Link from 'next/link';
import { SITE, FOOTER_LINKS } from '@/lib/site';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Born Goat updates.');
  };

  return (
    <footer className="bg-[#080808] border-t border-[var(--border-subtle)] pt-[90px] pb-8 relative z-10">
      {/* Subtle gold line accent */}
      <span
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, var(--gold-primary) 50%, transparent 100%)',
          opacity: 0.6
        }}
      />
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1.5fr] max-md:grid-cols-2 max-sm:grid-cols-1 gap-[60px] mb-20 pb-[60px] border-b border-[var(--border-subtle)]">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <svg viewBox="0 0 100 100" className="w-8 h-8 fill-current text-[var(--gold-primary)]" aria-hidden="true">
                <path d="M50,10 C65,10 75,35 60,60 C55,68 45,78 50,90 C40,82 30,72 35,60 C42,48 40,30 50,10 Z M50,22 C45,35 46,45 42,54 C39,60 42,65 48,70 C52,65 55,58 54,48 C53,40 54,32 50,22 Z" />
              </svg>
              <h3 className="font-display text-[26px] leading-none tracking-[0.06em] uppercase text-primary">
                BORN <span className="font-light text-[var(--gold-primary)]">GOAT</span>
              </h3>
            </div>
            <p className="text-secondary text-sm max-w-[320px] leading-relaxed mb-6">
              The digital home of elite athlete representation — where champions are discovered, careers are built, and legacies are written.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              {FOOTER_LINKS.connect.slice(0, 3).map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="text-muted hover:text-[var(--gold-primary)] transition-colors text-sm uppercase tracking-wider"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-heading text-[15px] tracking-wide uppercase text-primary mb-6">
              Quick Links
            </h5>
            <ul className="list-none flex flex-col gap-3.5 pl-0">
              {FOOTER_LINKS.house.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="text-secondary text-sm hover:text-primary transition-colors text-decoration-none"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h5 className="font-heading text-[15px] tracking-wide uppercase text-primary mb-6">
              Legal
            </h5>
            <ul className="list-none flex flex-col gap-3.5 pl-0">
              <li>
                <a href="/privacy" className="text-secondary text-sm hover:text-primary transition-colors text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-secondary text-sm hover:text-primary transition-colors text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-secondary text-sm hover:text-primary transition-colors text-decoration-none">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="text-secondary text-sm hover:text-primary transition-colors text-decoration-none">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter subscription form */}
          <div>
            <h5 className="font-heading text-[15px] tracking-wide uppercase text-primary mb-6">
              Newsletter
            </h5>
            <p className="text-secondary text-sm leading-relaxed mb-6">
              Stay updated with Born Goat news, events, and athlete stories.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="bg-[#111111] text-primary placeholder-ghost border border-[var(--border-default)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--border-gold-strong)] transition-colors rounded-[2px]"
              />
              <button
                type="submit"
                className="btn-primary py-3 justify-center text-xs font-bold w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-between items-center font-mono text-[10px] text-muted tracking-extra-wide uppercase flex-wrap gap-4 pt-4 border-t border-[var(--border-subtle)]">
          <span>
            © {new Date().getFullYear()} Born Goat &nbsp;<span className="text-[var(--gold-primary)]">◆</span>
            &nbsp; All Rights Reserved
          </span>
          <span>
            CRAFTED IN LUCKNOW <span className="text-[var(--gold-primary)]">·</span> DUBAI <span className="text-[var(--gold-primary)]">·</span> LONDON
          </span>
        </div>
      </div>
    </footer>
  );
}
