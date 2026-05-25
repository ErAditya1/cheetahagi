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
const API_URL = process.env.INTERNAL_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export async function POST(request) {
  try {
    let body;
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      body = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      body = {};
      for (const [key, value] of formData.entries()) {
        body[key] = value;
      }
    } else {
      body = {};
    }

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

    console.log('[lead] received, forwarding to API:', lead);

    // Forward to NestJS API
    try {
      const apiRes = await fetch(`${API_URL}/public/forms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...body,
          email: lead.email,
          name: lead.name,
          company: lead.company,
          source: lead.source,
          type: body.type || (String(lead.source).includes('newsletter') ? 'newsletter' : 'lead'),
        }),
      });
      if (!apiRes.ok) {
        console.error('[lead] API forwarding failed:', await apiRes.text());
      }
    } catch (apiErr) {
      console.error('[lead] API forwarding error:', apiErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[lead] error', err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, message: 'POST a lead payload here.' });
}
