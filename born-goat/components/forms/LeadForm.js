'use client';

import { useState } from 'react';

const STEPS = [
  { key: 'identity', label: 'Identity' },
  { key: 'context', label: 'Context' },
  { key: 'engagement', label: 'Fit' },
  { key: 'brief', label: 'Brief' }
];

export default function LeadForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    org: '',
    engagement: '',
    budget: '',
    brief: '',
    nda: false,
    honeypot: ''
  });

  const update = (k, v) => setData(prev => ({ ...prev, [k]: v }));

  const next = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
  };
  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  const validateCurrent = () => {
    if (step === 0) return data.name && data.role;
    if (step === 1) return data.email && data.phone;
    if (step === 2) return data.engagement && data.budget;
    if (step === 3) return data.brief && data.brief.length > 20;
    return true;
  };

  const submit = async e => {
    e.preventDefault();
    if (!validateCurrent()) return;
    if (data.honeypot) return; // bot
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'consultation' })
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-obsidian-800 border border-line p-12 relative corner-frame text-center">
        <div className="text-5xl text-gold mb-6 leading-none">◆</div>
        <h3 className="font-display text-[42px] tracking-cinematic uppercase mb-4 text-white">
          Brief received.
        </h3>
        <p className="text-titanium text-base leading-[1.65] max-w-[440px] mx-auto mb-3">
          One of the partners is reading it now. Expect a reply on email within 24 hours, and on WhatsApp shortly after — usually faster.
        </p>
        <p className="text-titanium-dim text-sm mt-6">
          In the meantime, our{' '}
          <a href="/blog" className="text-gold hover:text-gold-bright">
            Journal
          </a>{' '}
          has further reading on how we think.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="bg-obsidian-800 border border-line p-12 max-sm:p-7 relative corner-frame"
    >
      <input
        type="text"
        name="company_name"
        value={data.honeypot}
        onChange={e => update('honeypot', e.target.value)}
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      {/* form header */}
      <div className="flex justify-between items-center pb-6 mb-8 border-b border-gold">
        <span className="font-mono text-[11px] tracking-extra-wide uppercase text-gold">
          Inbound · New Brief
        </span>
        <span className="font-mono text-[11px] tracking-extra-wide text-titanium-dim">
          STEP {String(step + 1).padStart(2, '0')} / {String(STEPS.length).padStart(2, '0')}
        </span>
      </div>

      {/* progress dots */}
      <div className="flex gap-2 mb-8">
        {STEPS.map((s, i) => (
          <div
            key={s.key}
            className={`flex-1 h-px transition-colors duration-300 ${
              i <= step ? 'bg-gold' : 'bg-line'
            }`}
          />
        ))}
      </div>

      {/* STEP 0: identity */}
      {step === 0 && (
        <div className="space-y-6">
          <Field
            label="Your name"
            id="name"
            value={data.name}
            onChange={v => update('name', v)}
            required
            placeholder="Full name"
          />
          <Select
            label="You are a..."
            id="role"
            value={data.role}
            onChange={v => update('role', v)}
            required
            options={[
              'Athlete',
              "Athlete's Manager",
              'Brand Founder / CMO',
              'League / Federation',
              'Event Organiser',
              'Sports Startup',
              'Other'
            ]}
          />
        </div>
      )}

      {/* STEP 1: context */}
      {step === 1 && (
        <div className="space-y-6">
          <Field
            label="Email"
            id="email"
            type="email"
            value={data.email}
            onChange={v => update('email', v)}
            required
            placeholder="you@brand.com"
          />
          <Field
            label="Phone / WhatsApp"
            id="phone"
            type="tel"
            value={data.phone}
            onChange={v => update('phone', v)}
            required
            placeholder="+91"
          />
          <Field
            label="Organisation / project name"
            id="org"
            value={data.org}
            onChange={v => update('org', v)}
            placeholder="If applicable"
          />
        </div>
      )}

      {/* STEP 2: engagement */}
      {step === 2 && (
        <div className="space-y-6">
          <Select
            label="Engagement of interest"
            id="engagement"
            value={data.engagement}
            onChange={v => update('engagement', v)}
            required
            options={[
              'Retained Practice (single discipline)',
              'Full House (all six practices)',
              'Campaign / Project (defined scope)',
              'Crisis Response (active situation)',
              'Not sure yet — open conversation'
            ]}
          />
          <Select
            label="Budget range"
            id="budget"
            value={data.budget}
            onChange={v => update('budget', v)}
            required
            options={[
              'Under ₹3L/month — likely not a fit',
              '₹3L – ₹6L/month',
              '₹6L – ₹12L/month',
              '₹12L – ₹25L/month',
              '₹25L+/month',
              'Project-based (no monthly)'
            ]}
          />
        </div>
      )}

      {/* STEP 3: brief */}
      {step === 3 && (
        <div className="space-y-6">
          <Textarea
            label="The brief — what are we building?"
            id="brief"
            value={data.brief}
            onChange={v => update('brief', v)}
            required
            placeholder="A paragraph or two. What you are working on, where it sits in its arc, what is getting in the way. The more specific, the more useful our first read."
          />
          <label className="flex items-center gap-3 py-4 cursor-pointer">
            <input
              type="checkbox"
              checked={data.nda}
              onChange={e => update('nda', e.target.checked)}
              className="w-[18px] h-[18px] accent-gold cursor-pointer"
            />
            <span className="text-titanium italic text-[15px]">
              I would like an NDA in place before the first conversation
            </span>
          </label>
        </div>
      )}

      {error && (
        <div className="mt-6 p-3 border border-crimson text-crimson text-sm font-mono">
          {error}
        </div>
      )}

      {/* nav buttons */}
      <div className="flex justify-between gap-3 mt-10">
        {step > 0 ? (
          <button
            type="button"
            onClick={prev}
            className="font-mono text-[11px] tracking-extra-wide uppercase text-titanium-dim hover:text-titanium transition-colors px-4"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={next}
            disabled={!validateCurrent()}
            className="inline-flex items-center gap-3 px-8 py-[18px] font-mono text-xs font-bold uppercase tracking-extra-wide bg-grad-gold text-obsidian border border-gold transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-gold-glow-lg hover:-translate-y-0.5"
          >
            Continue <span>→</span>
          </button>
        ) : (
          <button
            type="submit"
            disabled={!validateCurrent() || submitting}
            className="inline-flex items-center gap-3 px-8 py-[18px] font-mono text-xs font-bold uppercase tracking-extra-wide bg-grad-gold text-obsidian border border-gold transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-gold-glow-lg hover:-translate-y-0.5"
          >
            {submitting ? 'Sending…' : 'Send Brief'} <span>→</span>
          </button>
        )}
      </div>

      <div className="mt-4 text-center font-mono text-[10px] text-titanium-deep tracking-wide-cap uppercase">
        Encrypted in transit · Read by a partner, not a bot · Reply within 24h
      </div>
    </form>
  );
}

function Field({ label, id, value, onChange, type = 'text', required, placeholder }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[10px] tracking-wide-cap uppercase text-titanium-deep mb-2.5"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-line py-3 text-white text-base font-body focus:outline-none focus:border-gold transition-colors placeholder:text-titanium-deep"
      />
    </div>
  );
}

function Select({ label, id, value, onChange, required, options }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[10px] tracking-wide-cap uppercase text-titanium-deep mb-2.5"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent border-0 border-b border-line py-3 text-white text-base font-body focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%23D4A84F' stroke-width='1.5' fill='none'/></svg>\")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 8px center'
        }}
      >
        <option value="" className="bg-obsidian">
          Select
        </option>
        {options.map(o => (
          <option key={o} value={o} className="bg-obsidian">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function Textarea({ label, id, value, onChange, required, placeholder }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[10px] tracking-wide-cap uppercase text-titanium-deep mb-2.5"
      >
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        rows="5"
        className="w-full bg-transparent border-0 border-b border-line py-3 text-white text-base font-body focus:outline-none focus:border-gold transition-colors placeholder:text-titanium-deep resize-y min-h-[120px] leading-[1.55]"
      />
    </div>
  );
}
