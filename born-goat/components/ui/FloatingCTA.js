'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Link
      href="/contact"
      className={`fixed bottom-7 right-7 z-[90] inline-flex items-center gap-2.5 px-6 py-[15px] text-obsidian font-mono text-[11px] font-bold uppercase tracking-extra-wide border border-gold transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] bg-grad-gold ${
        show ? 'translate-y-0' : 'translate-y-36'
      } hover:shadow-gold-glow-lg max-sm:bottom-4 max-sm:right-4 max-sm:left-4 max-sm:justify-center`}
      style={{
        boxShadow:
          '0 14px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(212, 168, 79, 0.4)'
      }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.5.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.5 14.2c-.2.6-1.2 1.2-1.7 1.3-.5.1-1 .1-1.5-.1-.4-.1-.9-.3-1.5-.5-2.7-1.2-4.5-3.9-4.6-4.1-.1-.2-1.1-1.5-1.1-2.9 0-1.3.7-2 1-2.3.2-.2.6-.3.8-.3h.6c.2 0 .5 0 .7.5.2.6.8 2.1.9 2.2.1.1.1.3 0 .5-.1.2-.1.3-.3.4-.1.2-.3.4-.4.5-.1.1-.3.2-.1.5.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.6 0 .2-.2.7-.9.9-1.2.2-.3.4-.2.6-.1.2.1 1.6.8 1.8.9.3.1.5.2.5.3.1.1.1.6-.1 1.2z" />
      </svg>
      Speak to Us
    </Link>
  );
}
