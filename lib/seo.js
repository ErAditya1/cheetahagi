// Centralized metadata builder so every page has consistent OG/Twitter handling.

const SITE = 'https://cheetahagi.com';

export function buildMetadata({
  title,
  description,
  path = '/',
  image = '/og-default.svg',
  type = 'website',
}) {
  const url = `${SITE}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      siteName: 'Cheetah AGI',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
