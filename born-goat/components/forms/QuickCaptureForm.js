'use client';

import { useState } from 'react';

export default function QuickCaptureForm({ source = 'home' }) {
  const [data, setData] = useState({ name: '', email: '', brief: '', honeypot: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submit = async e => {
    e.preventDefault();
    if (data.honeypot) return;
    setSubmitting(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: `quick:${source}` })
      });
      setSubmitted(true);
    } catch (err) {
      // swallow — show success regardless to avoid leaking failures
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-obsidian-800 border border-gold p-8 text-center">
        <div className="text-3xl text-gold mb-3">◆</div>
        <p className="font-display text-2xl text-white tracking-cinematic uppercase">
          Brief received.
        </p>
        <p className="text-titanium text-sm mt-2">We'll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-obsidian-800 border border-line p-8 corner-frame">
      <input
        type="text"
        value={data.honeypot}
        onChange={e => setData({ ...data, honeypot: e.target.value })}
        className="hidden"
        tabIndex="-1"
        aria-hidden="true"
      />
      <div className="space-y-5">
        <input
          type="text"
          placeholder="Name"
          required
          value={data.name}
          onChange={e => setData({ ...data, name: e.target.value })}
          className="w-full bg-transparent border-0 border-b border-line py-3 text-white text-base focus:outline-none focus:border-gold transition-colors placeholder:text-titanium-deep"
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={data.email}
          onChange={e => setData({ ...data, email: e.target.value })}
          className="w-full bg-transparent border-0 border-b border-line py-3 text-white text-base focus:outline-none focus:border-gold transition-colors placeholder:text-titanium-deep"
        />
        <textarea
          placeholder="What are you building?"
          required
          rows="3"
          value={data.brief}
          onChange={e => setData({ ...data, brief: e.target.value })}
          className="w-full bg-transparent border-0 border-b border-line py-3 text-white text-base focus:outline-none focus:border-gold transition-colors placeholder:text-titanium-deep resize-y"
        />
        <button
          type="submit"
          disabled={submitting}
          className="w-full px-8 py-4 bg-grad-gold text-obsidian font-mono text-xs font-bold uppercase tracking-extra-wide border border-gold transition-all duration-300 hover:shadow-gold-glow disabled:opacity-50"
        >
          {submitting ? 'Sending…' : 'Send Brief →'}
        </button>
      </div>
    </form>
  );
}
