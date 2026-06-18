import { UTMParams } from '@/types/lead';

const UTM_STORAGE_KEY = 'cta_utm_params';

/**
 * Parse UTM parameters from URL search params string
 */
export function parseUTM(search: string): UTMParams {
  const params = new URLSearchParams(search);
  const utm: UTMParams = {};

  const utmKeys: string[] = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
  ];

  for (const key of utmKeys) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }

  return utm;
}

/**
 * Save UTM params to localStorage so they persist across steps
 */
export function saveUTMToStorage(utm: UTMParams): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
  } catch {
    // ignore storage errors
  }
}

/**
 * Retrieve UTM params from localStorage
 */
export function getUTMFromStorage(): UTMParams {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as UTMParams;
  } catch {
    return {};
  }
}
