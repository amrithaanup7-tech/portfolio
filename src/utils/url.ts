// Helper to ensure links always have valid absolute protocols (http://, https://, mailto:)
export function ensureAbsoluteUrl(url: string | undefined): string {
  if (!url || url === '#') return '#';
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('mailto:') ||
    url.startsWith('tel:') ||
    url.startsWith('/')
  ) {
    return url;
  }
  return `https://${url}`;
}
