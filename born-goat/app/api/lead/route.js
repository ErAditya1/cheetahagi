import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Basic validation
    if (!body.email || !EMAIL_RE.test(body.email)) {
      return NextResponse.json(
        { ok: false, error: 'Invalid email' },
        { status: 400 }
      );
    }
    if (!body.name && !body.brief) {
      return NextResponse.json(
        { ok: false, error: 'Missing required field' },
        { status: 400 }
      );
    }

    // ===========================================
    // SWAP-OUT POINT — wire your real integrations
    // ===========================================
    //
    // 1. SLACK NOTIFICATION (instant ping to team):
    //
    //   const slackWebhook = process.env.SLACK_WEBHOOK_URL;
    //   if (slackWebhook) {
    //     await fetch(slackWebhook, {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({
    //         text: `🟡 New brief from ${body.name || 'Anonymous'} (${body.email})`,
    //         blocks: [
    //           { type: 'section', text: { type: 'mrkdwn', text: `*New brief — ${body.source}*\n*From:* ${body.name} (${body.role || 'role unspecified'})\n*Email:* ${body.email}\n*Phone:* ${body.phone || '—'}\n*Engagement:* ${body.engagement || '—'}\n*Budget:* ${body.budget || '—'}\n*Brief:*\n${body.brief}` } }
    //         ]
    //       })
    //     });
    //   }
    //
    // 2. HUBSPOT CRM (lead record):
    //
    //   const hubspotKey = process.env.HUBSPOT_API_KEY;
    //   if (hubspotKey) {
    //     await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    //       method: 'POST',
    //       headers: {
    //         Authorization: `Bearer ${hubspotKey}`,
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         properties: {
    //           email: body.email,
    //           firstname: (body.name || '').split(' ')[0],
    //           lastname: (body.name || '').split(' ').slice(1).join(' '),
    //           phone: body.phone,
    //           company: body.org,
    //           lifecyclestage: 'lead',
    //           lead_source: `borngoat:${body.source}`,
    //           engagement_interest: body.engagement,
    //           budget_band: body.budget,
    //           brief: body.brief
    //         }
    //       })
    //     });
    //   }
    //
    // 3. RESEND CONFIRMATION EMAIL (acknowledgement to lead):
    //
    //   const resendKey = process.env.RESEND_API_KEY;
    //   if (resendKey) {
    //     await fetch('https://api.resend.com/emails', {
    //       method: 'POST',
    //       headers: {
    //         Authorization: `Bearer ${resendKey}`,
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         from: 'Born GOAT <hello@borngoat.com>',
    //         to: body.email,
    //         subject: 'Brief received · Born GOAT',
    //         html: `<p>Hello ${body.name?.split(' ')[0] || 'there'},</p><p>Your brief has been received and is now on a senior partner's desk. Expect a reply within 24 hours.</p><p>— The Born GOAT desk</p>`
    //       })
    //     });
    //   }
    //
    // ===========================================

    // Placeholder logging
    console.log('[lead]', {
      source: body.source,
      name: body.name,
      email: body.email,
      role: body.role,
      engagement: body.engagement,
      budget: body.budget,
      briefLength: (body.brief || '').length,
      receivedAt: new Date().toISOString()
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('[lead] error', err);
    return NextResponse.json(
      { ok: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
