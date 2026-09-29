const origin = (process.env.SITE_ORIGIN || 'https://auryveth.github.io').replace(/\/$/, '');
const key = process.env.INDEXNOW_KEY;
if (!key) throw new Error('INDEXNOW_KEY is required');

const sitemapUrl = `${origin}/sitemap.xml`;
let sitemapText = '';

for (let attempt = 1; attempt <= 5; attempt += 1) {
  try {
    const response = await fetch(sitemapUrl, { signal: AbortSignal.timeout(20_000) });
    if (!response.ok) throw new Error(`Sitemap HTTP ${response.status}`);
    sitemapText = await response.text();
    break;
  } catch (error) {
    if (attempt === 5) throw error;
    await new Promise(resolve => setTimeout(resolve, 5_000));
  }
}

const urls = [...sitemapText.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
if (!urls.length) throw new Error('No URLs found in sitemap');

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(origin).host,
    key,
    keyLocation: `${origin}/${key}.txt`,
    urlList: urls
  }),
  signal: AbortSignal.timeout(30_000)
});

if (!response.ok) {
  throw new Error(`IndexNow HTTP ${response.status}: ${await response.text()}`);
}

console.log(`IndexNow accepted ${urls.length} published URLs with HTTP ${response.status}`);
