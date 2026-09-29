import type { APIRoute } from 'astro';
import { indexedPaths, site as siteConfig } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL(siteConfig.url);
  const urls = indexedPaths
    .map(path => `  <url><loc>${new URL(path, origin).href}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type':'application/xml; charset=utf-8' } });
};
