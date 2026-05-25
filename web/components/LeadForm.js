'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';
import { apiBase } from '@/lib/api';

const STEPS = [
  { id: 'company', label: 'Your company' },
  { id: 'challenge', label: 'The challenge' },
  { id: 'context', label: 'Context' },
  { id: 'contact', label: 'Where to send it' },
];

const REVENUE_BANDS = [
  '< ₹50L ARR',
  '₹50L – ₹2Cr',
  '₹2Cr – ₹10Cr',
  '₹10Cr – ₹50Cr',
  '₹50Cr+',
  'Pre-revenue',
];

const CHALLENGES = [
  'Sales pipeline is leaking',
  'Manual ops are eating margins',
  'Need AI agents that work in India',
  'Funnels not converting',
  'Want to be cited by ChatGPT/Perplexity',
  'Building an internal AI team',
];

const TIMELINES = ['This month', 'Next 90 days', 'This year', 'Just exploring'];

export default function LeadForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    company: '',
    revenue: '',
    role: '',
    challenges: [],
    description: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
  });
  const [state, setState] = useState('idle');
  const [error, setError] = useState('');

  const update = (key, value) => setFormData((p) => ({ ...p, [key]: value }));

  const toggleChallenge = (c) => {
    setFormData((p) => ({
      ...p,
      challenges: p.challenges.includes(c)
        ? p.challenges.filter((x) => x !== c)
        : [...p.challenges, c],
    }));
  };

  const next = () => setStep((s) => Math.min(STEPS.length - 1, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  const submit = async () => {
    setState('loading');
    try {
      const res = await fetch(`${apiBase()}/public/forms`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'consultation', ...formData, source: 'consultation', stage: 'detailed' }),
      });
      if (!res.ok) throw new Error('Failed');
      setState('success');
    } catch (e) {
      setState('error');
      setError('Could not submit. Email hello@cheetahagi.com instead.');
    }
  };

  const canProceed = () => {
    if (step === 0) return formData.company && formData.revenue && formData.role;
    if (step === 1) return formData.challenges.length > 0;
    if (step === 2) return formData.timeline;
    if (step === 3) return formData.name && formData.email;
    return false;
  };

  if (state === 'success') {
    return (
      <div className="surface-raised p-12 text-center max-w-2xl mx-auto">
        <CheckCircle2 className="w-16 h-16 text-strike mx-auto mb-6" />
        <h2 className="font-display text-display-lg text-bone mb-4">Brief received.</h2>
        <p className="text-bone-dim text-lg leading-relaxed max-w-md mx-auto mb-8">
          We review every submission personally. You'll hear from us within 4 working hours with a
          calendar link and a written first take on your challenge.
        </p>
        <div className="font-mono text-xs uppercase tracking-widest text-ink-400">
          Reference: CTH-{Date.now().toString(36).toUpperCase()}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <div className="font-mono text-xs uppercase tracking-widest text-ink-400">
            Step {step + 1} of {STEPS.length} — {STEPS[step].label}
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-strike">
            {Math.round(((step + 1) / STEPS.length) * 100)}%
          </div>
        </div>
        <div className="h-1 bg-ink-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-strike transition-all duration-500"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="surface-raised p-8 md:p-12">
        {/* Step 0: Company */}
        {step === 0 && (
          <div className="space-y-6 animate-rise">
            <h2 className="font-display text-display-lg text-bone mb-8">Tell us about the business.</h2>

            <Field label="Company name" value={formData.company} onChange={(v) => update('company', v)} placeholder="Acme Corp" />

            <div>
              <Label>Annual revenue</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {REVENUE_BANDS.map((b) => (
                  <ChipButton key={b} active={formData.revenue === b} onClick={() => update('revenue', b)}>
                    {b}
                  </ChipButton>
                ))}
              </div>
            </div>

            <Field label="Your role" value={formData.role} onChange={(v) => update('role', v)} placeholder="Founder / VP Growth / CTO" />
          </div>
        )}

        {/* Step 1: Challenges */}
        {step === 1 && (
          <div className="space-y-6 animate-rise">
            <h2 className="font-display text-display-lg text-bone mb-2">What's broken?</h2>
            <p className="text-bone-dim mb-8">Select all that apply. We'll prioritize on the call.</p>
            <div className="grid md:grid-cols-2 gap-3">
              {CHALLENGES.map((c) => (
                <ChipButton key={c} active={formData.challenges.includes(c)} onClick={() => toggleChallenge(c)}>
                  {c}
                </ChipButton>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Context */}
        {step === 2 && (
          <div className="space-y-6 animate-rise">
            <h2 className="font-display text-display-lg text-bone mb-8">Give us the context.</h2>
            <div>
              <Label>Describe the problem in 2–3 sentences</Label>
              <textarea
                value={formData.description}
                onChange={(e) => update('description', e.target.value)}
                rows={5}
                placeholder="What's the current state, what have you tried, what's the desired outcome?"
                className="w-full bg-ink-800 border border-ink-600 rounded-lg px-4 py-3 text-bone placeholder:text-ink-500 focus:outline-none focus:border-strike transition-colors resize-none"
              />
            </div>
            <div>
              <Label>Timeline</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {TIMELINES.map((t) => (
                  <ChipButton key={t} active={formData.timeline === t} onClick={() => update('timeline', t)}>
                    {t}
                  </ChipButton>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Contact */}
        {step === 3 && (
          <div className="space-y-6 animate-rise">
            <h2 className="font-display text-display-lg text-bone mb-8">Where to send the diagnostic.</h2>
            <Field label="Full name" value={formData.name} onChange={(v) => update('name', v)} placeholder="Yash Srivastava" />
            <Field label="Work email" type="email" value={formData.email} onChange={(v) => update('email', v)} placeholder="you@company.com" />
            <Field label="WhatsApp / phone (optional)" value={formData.phone} onChange={(v) => update('phone', v)} placeholder="+91 ..." />
            <p className="font-mono text-xs text-ink-400 leading-relaxed">
              We use this only to send the diagnostic and schedule the call. No newsletter, no
              third-party sharing.
            </p>
          </div>
        )}

        {state === 'error' && (
          <p className="text-flare text-sm font-mono mt-6">{error}</p>
        )}

        <div className="flex items-center justify-between mt-10 pt-8 border-t border-ink-700">
          {step > 0 ? (
            <button onClick={back} className="btn-ghost !px-5 !py-2.5 !text-xs">
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
          ) : (
            <span />
          )}
          {step < STEPS.length - 1 ? (
            <button
              onClick={next}
              disabled={!canProceed()}
              className="btn-strike disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={submit}
              disabled={!canProceed() || state === 'loading'}
              className="btn-strike disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state === 'loading' ? (
                <>Submitting <Loader2 className="w-4 h-4 animate-spin" /></>
              ) : (
                <>Submit Brief <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Label({ children }) {
  return (
    <label className="block font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-400 mb-3">
      {children}
    </label>
  );
}

function Field({ label, value, onChange, type = 'text', placeholder }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-ink-800 border border-ink-600 rounded-lg px-4 py-3 text-bone placeholder:text-ink-500 focus:outline-none focus:border-strike transition-colors"
      />
    </div>
  );
}

function ChipButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-3 rounded-lg border text-sm transition-all text-left ${
        active
          ? 'bg-strike/10 border-strike text-strike'
          : 'bg-ink-800 border-ink-600 text-bone-dim hover:border-strike/40 hover:text-bone'
      }`}
    >
      {children}
    </button>
  );
}
