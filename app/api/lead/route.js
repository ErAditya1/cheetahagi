// /api/lead — accepts lead submissions from QuickCaptureForm, LeadForm, ExitIntent.
//
// In production, swap the console.log block for a real destination:
//   - Resend / Postmark email
//   - HubSpot / Zoho CRM API
//   - Slack webhook
//   - Sheets / Notion fallback
//
// We keep the handler thin and validate on the server because client-side validation
// is suggestion, not enforcement.

import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();

    // Minimum viable validation. We trust nothing.
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
    }

    const { name, email, company, source } = body;

    if (!email || !EMAIL_RE.test(String(email))) {
      return NextResponse.json({ ok: false, error: 'Valid email required' }, { status: 400 });
    }

    // Basic spam shield — honeypot field. If present, silently 200 so bots don't retry.
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const lead = {
      received_at: new Date().toISOString(),
      source: source || 'unknown',
      name: name || null,
      email: String(email).toLowerCase().trim(),
      company: company || null,
      // Pass through optional detailed-form fields if present.
      challenges: body.challenges || null,
      timeline: body.timeline || null,
      budget: body.budget || null,
      details: body.details || null,
      ip: request.headers.get('x-forwarded-for') || null,
      user_agent: request.headers.get('user-agent') || null,
    };

    // TODO: forward to CRM / email / Slack here.
    // For now: log to stdout. In production, redirect this to your destination of choice.
    console.log('[lead] received', lead);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[lead] error', err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, message: 'POST a lead payload here.' });
}
