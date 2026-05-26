import { PRODUCTS, SERVICES, FAQS, CASE_STUDIES, BLOG_POSTS } from './content';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export async function apiGet(path) {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error(`API request failed: ${path} (status: ${res.status})`);
    }
    return await res.json();
  } catch (error) {
    console.warn(`[apiGet Warning] Failed to fetch path "${path}" from API, using static fallback content. Details:`, error.message || error);
    return getFallbackData(path);
  }
}

export function apiBase() {
  return API_URL;
}

function getFallbackData(path) {
  if (path === '/public/site') {
    return {
      products: PRODUCTS.map(p => ({ ...p, visible: true })),
      posts: BLOG_POSTS.map(p => ({ ...p, visible: true })),
      services: SERVICES.map(s => ({ ...s, visible: true })),
      faqs: FAQS.map(f => ({ ...f, visible: true })),
      caseStudies: CASE_STUDIES.map(c => ({ ...c, visible: true })),
    };
  }
  if (path === '/public/faqs') {
    return FAQS.map(f => ({ ...f, visible: true }));
  }
  if (path === '/public/posts') {
    return BLOG_POSTS.map(p => ({ ...p, visible: true }));
  }
  if (path === '/public/products') {
    return PRODUCTS.map(p => ({ ...p, visible: true }));
  }
  if (path === '/public/services') {
    return SERVICES.map(s => ({ ...s, visible: true }));
  }
  if (path === '/public/case-studies') {
    return CASE_STUDIES.map(c => ({ ...c, visible: true }));
  }
  if (path === '/public/products/navbar') {
    return PRODUCTS.filter((p) => p.showInNavbar).map(p => ({ ...p, visible: true }));
  }
  if (path.startsWith('/public/products/')) {
    const slug = path.split('/').pop();
    const item = PRODUCTS.find((p) => p.slug === slug);
    return item ? { ...item, visible: true } : null;
  }
  if (path.startsWith('/public/posts/')) {
    const slug = path.split('/').pop();
    const item = BLOG_POSTS.find((p) => p.slug === slug);
    return item ? { ...item, visible: true } : null;
  }
  if (path.startsWith('/public/services/')) {
    const slug = path.split('/').pop();
    const item = SERVICES.find((s) => s.slug === slug);
    return item ? { ...item, visible: true } : null;
  }
  return null;
}
