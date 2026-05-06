'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import QuickCaptureForm from './QuickCaptureForm';

export default function ExitIntent() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('exit_shown') === '1') return;
    if (window.innerWidth < 768) return; // desktop only

    const onLeave = (e) => {
      if (e.clientY <= 0 && !shown) {
        setShown(true);
        sessionStorage.setItem('exit_shown', '1');
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', onLeave);
    }, 8000); // arm after 8s

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [shown]);

  if (!shown) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-ink-950/80 backdrop-blur-sm flex items-center justify-center p-6"
      onClick={() => setShown(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-title"
    >
      <div
        className="surface-raised max-w-2xl w-full p-8 md:p-12 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShown(false)}
          className="absolute top-4 right-4 p-2 text-ink-400 hover:text-bone"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="eyebrow mb-4">Wait —</div>
            <h2 id="exit-title" className="font-display text-3xl md:text-4xl font-medium text-bone leading-tight mb-4">
              Take the <span className="editorial-italic text-strike">free diagnostic</span> with you.
            </h2>
            <p className="text-bone-dim text-sm leading-relaxed">
              We'll send a 12-point AI readiness audit to your inbox. No call, no pitch — just the framework
              we use to scope every engagement.
            </p>
          </div>
          <QuickCaptureForm source="exit-intent" cta="Send the audit" />
        </div>
      </div>
    </div>
  );
}
