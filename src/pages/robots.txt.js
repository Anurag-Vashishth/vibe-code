export function GET({ site }) {
  const sitemap = site ? `Sitemap: ${new URL('/sitemap.xml', site)}\n` : '';
  return new Response(`User-agent: *\nAllow: /\n${sitemap}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
