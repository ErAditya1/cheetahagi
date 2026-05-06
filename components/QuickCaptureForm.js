'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

export default function QuickCaptureForm({ source = 'home-quick', cta = 'Get the Diagnostic' }) {
  const [state, setState] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setState('loading');
    setError('');

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      business: fd.get('business'),
      source,
      stage: 'quick',
    };

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Submission failed');
      setState('success');
    } catch (err) {
      setState('error');
      setError('Something broke. Try again or email hello@cheetahagi.com');
    }
  };

  if (state === 'success') {
    return (
      <div className="surface-raised p-8 md:p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-strike mx-auto mb-4" />
        <h3 className="font-display text-2xl text-bone mb-3">Locked in.</h3>
        <p className="text-bone-dim">
          We'll send your diagnostic within 24 hours. Check spam — Gmail can be aggressive.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="surface-raised p-6 md:p-8 space-y-4" noValidate>
      <div>
        <label htmlFor="qc-name" className="block font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-400 mb-2">
          Name
        </label>
        <input
          id="qc-name"
          name="name"
          required
          placeholder="Your full name"
          className="w-full bg-ink-800 border border-ink-600 rounded-lg px-4 py-3 text-bone placeholder:text-ink-500 focus:outline-none focus:border-strike transition-colors"
        />
      </div>
      <div>
        <label htmlFor="qc-email" className="block font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-400 mb-2">
          Work email
        </label>
        <input
          id="qc-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full bg-ink-800 border border-ink-600 rounded-lg px-4 py-3 text-bone placeholder:text-ink-500 focus:outline-none focus:border-strike transition-colors"
        />
      </div>
      <div>
        <label htmlFor="qc-business" className="block font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-400 mb-2">
          Business
        </label>
        <input
          id="qc-business"
          name="business"
          required
          placeholder="Company name + what you do"
          className="w-full bg-ink-800 border border-ink-600 rounded-lg px-4 py-3 text-bone placeholder:text-ink-500 focus:outline-none focus:border-strike transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={state === 'loading'}
        className="btn-strike w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === 'loading' ? (
          <>Sending <Loader2 className="w-4 h-4 animate-spin" /></>
        ) : (
          <>{cta} <ArrowRight className="w-4 h-4" /></>
        )}
      </button>

      {state === 'error' && (
        <p className="text-flare text-sm font-mono">{error}</p>
      )}

      <p className="font-mono text-[0.65rem] text-ink-400 leading-relaxed pt-2">
        We send one diagnostic email. No newsletter spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
