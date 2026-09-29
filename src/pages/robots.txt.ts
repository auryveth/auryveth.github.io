import type { APIRoute } from 'astro';
import { site as siteConfig } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL(siteConfig.url);
  const text = [
    'User-agent: *', 'Allow: /', 'Disallow: /diagnostics/', '',
    'User-agent: OAI-SearchBot', 'Allow: /', 'Disallow: /diagnostics/', '',
    `Sitemap: ${new URL('/sitemap.xml', origin).href}`, ''
  ].join('\n');
  return new Response(text, { headers: { 'Content-Type':'text/plain; charset=utf-8' } });
};
