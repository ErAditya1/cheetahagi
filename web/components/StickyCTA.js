'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

const HIDDEN_PATHS = ['/consultation', '/contact'];

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (HIDDEN_PATHS.includes(pathname)) return;
    if (typeof window === 'undefined') return;

    if (sessionStorage.getItem('sticky_dismissed') === '1') {
      setDismissed(true);
      return;
    }

    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  if (HIDDEN_PATHS.includes(pathname) || dismissed || !visible) return null;

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('sticky_dismissed', '1');
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:right-6 md:left-auto md:max-w-sm z-30 animate-rise">
      <div className="surface-raised p-4 md:p-5 flex items-center gap-3 shadow-strike">
        <div className="flex-1 min-w-0">
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-strike mb-1">
            Free 30-min call
          </div>
          <div className="text-bone text-sm font-medium">
            Find out where AI fits — and where it doesn't.
          </div>
        </div>
        <Link href="/consultation" className="btn-strike !px-4 !py-2 !text-xs flex-shrink-0">
          Book <ArrowRight className="w-3 h-3" />
        </Link>
        <button
          onClick={dismiss}
          className="p-1 text-ink-400 hover:text-bone flex-shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
