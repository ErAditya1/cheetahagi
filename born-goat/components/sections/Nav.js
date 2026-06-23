'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/site';

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link href="/" className="navbar__logo flex items-center gap-2.5">
          <img src="/icon.png" alt="Born Goat Logo" className="w-8 h-8 object-contain" />
          <span className="font-display text-[22px] tracking-[0.06em] text-primary uppercase">
            BORN <span className="font-light text-[var(--gold-primary)]">GOAT</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links max-md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className={`navbar__link ${isActive(item.href) ? 'text-primary' : 'text-muted'}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="flex items-center gap-4 max-md:hidden">
          <Link href="/contact" className="btn-secondary py-[0.5rem] px-5 text-xs">
            Join BORN GOAT
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="hidden max-md:flex flex-col gap-1.5 justify-center items-center w-8 h-8 bg-transparent border-none cursor-pointer z-[1100]"
          aria-label="Toggle Menu"
        >
          <span
            className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
              mobileOpen ? 'transform rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
              mobileOpen ? 'transform -rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[999] bg-[#080808]/98 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-all duration-500 max-md:flex ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <ul className="list-none flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`font-display text-4xl uppercase tracking-widest text-decoration-none transition-colors ${
                  isActive(item.href) ? 'text-[var(--gold-primary)]' : 'text-secondary hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="btn-primary mt-6"
        >
          Apply as Athlete
        </Link>
      </div>
    </>
  );
}
