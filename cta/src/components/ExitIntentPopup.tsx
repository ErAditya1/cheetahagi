'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap } from 'lucide-react';

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (dismissed) return;
      // Only trigger when mouse moves above the viewport
      if (e.clientY <= 5) {
        setShow(true);
      }
    },
    [dismissed]
  );

  useEffect(() => {
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [handleMouseLeave]);

  const dismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -30 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90vw] max-w-sm"
          >
            <div className="relative rounded-2xl border border-orange-500/30 bg-background/90 backdrop-blur-xl p-6 shadow-2xl text-center space-y-4">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/5 pointer-events-none" />

              <button
                onClick={dismiss}
                className="absolute top-3 right-3 w-7 h-7 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
              >
                <X className="w-3.5 h-3.5 text-muted-foreground" />
              </button>

              <div className="text-4xl">⚡</div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-foreground">
                  Wait! Don&apos;t miss out
                </h3>
                <p className="text-sm text-muted-foreground">
                  100s of learners joined this week. Get your free access now — it only takes 30 seconds.
                </p>
              </div>

              <button
                onClick={dismiss}
                className="w-full py-3 px-5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                <Zap className="w-4 h-4" />
                Yes, I want free access!
              </button>

              <button
                onClick={dismiss}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                No thanks, I&apos;ll miss out
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
