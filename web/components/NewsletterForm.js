'use client';

import { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { apiBase } from '@/lib/api';

export default function NewsletterForm({ source, variant = 'footer' }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState('loading');
    setError('');

    try {
      const res = await fetch(`${apiBase()}/public/forms`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter', email, source }),
      });
      if (!res.ok) throw new Error('Subscription failed');
      setState('success');
    } catch (err) {
      setState('error');
      setError('Something went wrong. Try again.');
    }
  };

  if (state === 'success') {
    return (
      <div className={`flex items-center gap-2 p-3 bg-strike/10 border border-strike/20 text-strike text-sm font-mono justify-center ${variant === 'footer' ? 'rounded-full' : 'rounded'}`}>
        <CheckCircle2 className="w-4 h-4 shrink-0" />
        <span>Subscribed successfully!</span>
      </div>
    );
  }

  if (variant === 'blog') {
    return (
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
        <div className="flex-grow relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@company.com"
            className="w-full px-4 py-3 bg-ink-900 border border-ink-700 rounded text-sm text-bone placeholder:text-bone/40 focus:border-strike focus:outline-none"
            aria-label="Email"
          />
        </div>
        <button
          type="submit"
          disabled={state === 'loading'}
          className="btn-strike whitespace-nowrap flex items-center justify-center gap-2 min-w-[120px]"
        >
          {state === 'loading' ? (
            <>Subscribing <Loader2 className="w-4 h-4 animate-spin" /></>
          ) : (
            <>Subscribe</>
          )}
        </button>
        {state === 'error' && (
          <p className="text-flare text-xs font-mono mt-1 sm:absolute sm:mt-12">{error}</p>
        )}
      </form>
    );
  }

  // default footer variant
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="you@company.com"
        className="bg-ink-800 border border-ink-600 rounded-full px-4 py-2.5 text-sm text-bone placeholder:text-ink-500 focus:outline-none focus:border-strike"
        aria-label="Email"
      />
      <button
        type="submit"
        disabled={state === 'loading'}
        className="btn-strike justify-center !py-2.5 !text-xs flex items-center gap-1"
      >
        {state === 'loading' ? (
          <>Subscribing <Loader2 className="w-3 h-3 animate-spin" /></>
        ) : (
          <>Subscribe →</>
        )}
      </button>
      {state === 'error' && (
        <span className="text-flare text-xs font-mono">{error}</span>
      )}
    </form>
  );
}
