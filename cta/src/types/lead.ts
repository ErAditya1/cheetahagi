// Lead type definitions
export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  [key: string]: string | undefined;
}

// Flat payload sent to API for full lead step
export interface LeadPayload extends UTMParams {
  type: 'newsletter' | 'whatsapp-funnel';
  source: 'cta-funnel';
  stage: 'email' | 'profile';
  email: string;
  phone?: string;
  name?: string;
  joined_whatsapp?: boolean;
}

// API response
export interface ApiResponse<T> {
  ok: boolean;
  id?: string;
  error?: string;
  data?: T;
}
