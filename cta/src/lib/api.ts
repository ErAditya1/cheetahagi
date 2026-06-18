import { UTMParams, ApiResponse } from '@/types/lead';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

/**
 * Submit newsletter step (email only) to the existing /public/forms endpoint
 */
export async function submitNewsletter(
  email: string,
  utm: UTMParams = {}
): Promise<ApiResponse<any>> {
  const res = await fetch(`${API_URL}/public/forms`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'newsletter',
      source: 'cta-funnel',
      stage: 'newsletter',
      email,
      ...utm,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || 'Failed to subscribe');
  }

  return res.json();
}

/**
 * Submit full lead profile (name + phone) to the existing /public/forms endpoint
 */
export async function submitLead(
  data: { name: string; email: string; phone: string },
  utm: UTMParams = {}
): Promise<ApiResponse<any>> {
  const res = await fetch(`${API_URL}/public/forms`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'whatsapp-funnel',
      source: 'cta-funnel',
      stage: 'profile',
      name: data.name,
      email: data.email,
      phone: data.phone,
      joined_whatsapp: false,
      ...utm,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || 'Failed to submit lead');
  }

  return res.json();
}

/**
 * Track that the user clicked the WhatsApp join button
 */
export async function trackWhatsAppClick(utm: UTMParams = {}): Promise<void> {
  try {
    await fetch(`${API_URL}/public/forms`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'whatsapp-funnel',
        source: 'cta-funnel',
        stage: 'whatsapp-clicked',
        joined_whatsapp: true,
        ...utm,
      }),
    });

    // Also track as activity
    await fetch(`${API_URL}/public/activities`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'whatsapp_clicked',
        actor: 'visitor',
        message: 'Visitor clicked WhatsApp join button from CTA funnel',
      }),
    });
  } catch {
    // Non-blocking — don't fail the UX if tracking fails
  }
}

/**
 * Track analytics events via activity log
 */
export async function trackEvent(
  eventName: string,
  metadata?: Record<string, unknown>
): Promise<void> {
  try {
    await fetch(`${API_URL}/public/activities`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: eventName,
        actor: 'visitor',
        message: `CTA funnel event: ${eventName}`,
        metadata,
      }),
    });
  } catch {
    // Non-blocking
  }
}
