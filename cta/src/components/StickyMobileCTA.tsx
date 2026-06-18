'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Show after short delay on mobile
    const t = setTimeout(() => setVisible(true), 2000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(t);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const input = document.querySelector<HTMLInputElement>('input[type="email"]');
      input?.focus();
    }, 400);
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: visible ? 0 : 100 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:hidden"
    >
      <div className="rounded-2xl border border-border/60 bg-background/90 backdrop-blur-xl p-3 shadow-2xl flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-foreground truncate">
            Join 500+ learners today 🚀
          </p>
          <p className="text-[10px] text-muted-foreground">Free resources & community access</p>
        </div>
        <button
          onClick={scrollToTop}
          className="shrink-0 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs flex items-center gap-1.5 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
        >
          Get Access
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
