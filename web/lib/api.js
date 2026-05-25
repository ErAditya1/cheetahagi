const IS_SERVER = typeof window === 'undefined';
const API_URL = IS_SERVER
  ? (process.env.INTERNAL_API_URL || 'http://127.0.0.1:4000')
  : (process.env.NEXT_PUBLIC_API_URL || '/api');

export async function apiGet(path) {
  const res = await fetch(`${API_URL}${path}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error(`API request failed: ${path}`);
  }
  return res.json();
}

export function apiBase() {
  return API_URL;
}
