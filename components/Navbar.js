'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import CheetahLogo from './CheetahLogo';

const PRODUCTS = [
  { name: 'Callio', desc: 'AI sales calling SaaS', href: '/products/callio' },
  { name: 'Trubetix', desc: 'Reports & analytics engine', href: '/products/trubetix' },
  { name: 'Strike Audit', desc: 'GEO/AEO/SEO audit tool', href: '/products/strike-audit' },
  { name: 'Whatspipe', desc: 'WhatsApp → blog pipeline', href: '/products/whatspipe' },
];

const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/85 backdrop-blur-xl border-b border-ink-700'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-16 md:h-20 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Cheetah AGI home">
            <CheetahLogo className="w-9 h-9" animated />
            <div className="flex flex-col leading-none">
              <span className="font-display font-medium text-bone tracking-tight text-lg">
                Cheetah <span className="text-strike">AGI</span>
              </span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink-400">
                Speed · Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-bone-dim hover:text-strike transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-bone-dim hover:text-strike transition-colors"
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products <ChevronDown className="w-3 h-3" />
              </button>

              {productsOpen && (
                <div className="absolute top-full right-0 pt-3 w-80">
                  <div className="surface-raised p-2">
                    {PRODUCTS.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="block px-4 py-3 rounded-xl hover:bg-ink-700 transition-colors group"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="font-display font-medium text-bone group-hover:text-strike transition-colors">
                              {p.name}
                            </div>
                            <div className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-400 mt-0.5">
                              {p.desc}
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-ink-500 group-hover:text-strike transition-colors mt-0.5" />
                        </div>
                      </Link>
                    ))}
                    <Link
                      href="/products"
                      className="block px-4 py-3 mt-1 border-t border-ink-700 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-strike hover:bg-ink-700 rounded-b-xl transition-colors"
                    >
                      View all products →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/consultation" className="btn-strike hidden md:inline-flex !px-5 !py-2.5 !text-xs">
              Book Strategy Call
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-bone"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Kinetic accent line under navbar when scrolled */}
        {scrolled && (
          <div className="speed-line h-px bg-ink-700">
            <div className="h-full" />
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-ink-950 pt-20 px-6 overflow-y-auto">
          <nav className="flex flex-col gap-1 py-6" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 font-display text-2xl text-bone border-b border-ink-700 hover:text-strike transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="py-4 border-b border-ink-700">
              <div className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-3">Products</div>
              {PRODUCTS.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-lg text-bone-dim hover:text-strike transition-colors"
                >
                  {p.name} <span className="text-xs text-ink-500">— {p.desc}</span>
                </Link>
              ))}
            </div>
            <Link
              href="/consultation"
              onClick={() => setMobileOpen(false)}
              className="btn-strike mt-6 justify-center"
            >
              Book Strategy Call →
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
