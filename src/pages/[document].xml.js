export function getStaticPaths({ site }) {
  return site ? [{ params: { document: 'sitemap' } }] : [];
}

export function GET({ site }) {
  const entries = ['/', '/about', '/projects'].map((path) => {
    const url = new URL(path, site).href;
    return `  <url><loc>${url}</loc></url>`;
  });
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
}
