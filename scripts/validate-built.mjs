import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const origin = (process.env.PUBLIC_SITE_URL || 'https://auryveth.github.io').replace(/\/$/, '');
const expected = ['/', '/about/', '/blackboard/', '/organisms/', '/research/', '/roadmap/', '/constitution/', '/investors/', '/pilot/', '/privacy/',
  '/knowledge/', '/knowledge/digital-organism/', '/knowledge/business-organism/', '/knowledge/governed-autonomy/', '/knowledge/organism-vs-agent/',
  '/knowledge/authority-levels/', '/knowledge/internal-proving-ground/'];
function read(file) {
  const full = path.join(root,file);
  if(!fs.existsSync(full)) throw Error(`Missing build output: ${file}`);
  return fs.readFileSync(full,'utf8');
}
function allFiles(dir) { return fs.readdirSync(dir,{withFileTypes:true}).flatMap(d => d.isDirectory() ? allFiles(path.join(dir,d.name)) : [path.join(dir,d.name)]); }
const outputPages=allFiles(root).filter(f=>f.endsWith('/index.html')).map(f=>'/'+path.relative(root,f).replaceAll(path.sep,'/').replace(/index\.html$/,'')).sort();
if(JSON.stringify(outputPages)!==JSON.stringify([...expected].sort())) throw Error(`Sitemap registry / built page drift:\nExpected: ${expected.sort()}\nActual: ${outputPages}`);
const titles=new Set(), descriptions=new Set();
for(const route of expected){
  const file=(route==='/'?'':route.slice(1))+'index.html';
  const html=read(file);
  const title=html.match(/<title>([^<]+)<\/title>/i)?.[1];
  const desc=html.match(/<meta name="description" content="([^"]+)"\s*\/?\s*>/i)?.[1];
  if(!title || titles.has(title)) throw Error(`Missing or duplicate title: ${route}`);
  if(!desc || descriptions.has(desc)) throw Error(`Missing or duplicate description: ${route}`);
  titles.add(title);descriptions.add(desc);
  const canonical=html.match(/<link rel="canonical" href="([^"]+)"\s*\/?\s*>/i)?.[1];
  if(canonical!==origin+route)throw Error(`Incorrect canonical ${route}: ${canonical}`);
  if((html.match(/rel="canonical"/g)||[]).length!==1)throw Error(`Canonical count: ${route}`);
  if(!html.includes(`rel="alternate" hreflang="en" href="${canonical}"`))throw Error(`Missing English hreflang: ${route}`);
  if(!html.includes(`rel="alternate" hreflang="x-default" href="${canonical}"`))throw Error(`Missing x-default hreflang: ${route}`);
  if((html.match(/<h1\b/gi)||[]).length!==1)throw Error(`Expected one visible H1: ${route}`);
  if(!html.includes('name="robots" content="index, follow'))throw Error(`Unexpected noindex: ${route}`);
  const json=html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1];
  if(!json)throw Error(`Missing structured graph: ${route}`);
  let graph;try{graph=JSON.parse(json);}catch(e){throw Error(`Invalid JSON-LD: ${route} ${e.message}`);}
  if(graph['@context']!=='https://schema.org' || !Array.isArray(graph['@graph']))throw Error(`Invalid graph shape: ${route}`);
  const types=new Set(graph['@graph'].map(n=>n['@type']));
  for(const needed of ['Organization','Person','WebSite','WebPage','ImageObject'])if(!types.has(needed))throw Error(`Missing ${needed}: ${route}`);
  const wp=graph['@graph'].find(n=>n['@type']==='WebPage');
  if(wp.url!==canonical)throw Error(`Graph page mismatch: ${route}`);
  const breadcrumb=graph['@graph'].find(n=>n['@type']==='BreadcrumbList');
  if(route==='/' ? !!breadcrumb : !breadcrumb)throw Error(`Breadcrumb mismatch: ${route}`);
  if(breadcrumb && breadcrumb.itemListElement.at(-1).item!==canonical)throw Error(`Breadcrumb target mismatch: ${route}`);
  if(!html.includes('property="og:image:alt"'))throw Error(`Missing social image description: ${route}`);
  if(!html.includes('property="og:image:type" content="image/jpeg"'))throw Error(`Missing social image type: ${route}`);
  if((html.match(/class="nav-group"/g)||[]).length!==3)throw Error(`Grouped navigation missing or duplicated: ${route}`);
  for(const category of ['Home','Research','Products','About'])if(!html.includes(category))throw Error(`Primary navigation category ${category} missing: ${route}`);
  if(!html.includes('data-language-toggle'))throw Error(`Language switcher missing: ${route}`);
  if(!html.includes('href="/i18n.css"'))throw Error(`Localization stylesheet missing: ${route}`);
  if(!html.includes('src="/i18n.js"'))throw Error(`Localization runtime missing: ${route}`);
  if(!html.includes('<html lang="en" data-language="en">'))throw Error(`Initial language state missing: ${route}`);
  // Check local links against generated pages and files, not a guessed route list.
  for(const match of html.matchAll(/<(?:a|img|script|link)\b[^>]*?\b(?:href|src)="([^"]+)"/gi)){
    const href=match[1];
    if(!href.startsWith('/'))continue;
    const url=new URL(href,origin);let target=decodeURIComponent(url.pathname).slice(1);
    if(!target || target.endsWith('/'))target+='index.html';
    if(!fs.existsSync(path.join(root,target)))throw Error(`Broken local link ${href} on ${route}`);
    if(url.hash && href.startsWith('#')) { /* local fragments checked below */ }
  }
}
const noindex=read('404.html');
if(!noindex.includes('noindex, follow')||noindex.includes('rel="canonical"'))throw Error('404 indexing signals incorrect');
if(!noindex.includes('data-language-toggle'))throw Error('404 language switcher missing');
if(!noindex.includes('href="/i18n.css"')||!noindex.includes('src="/i18n.js"'))throw Error('404 localization assets missing');
for(const asset of ['site.js','styles.css','i18n.js','i18n.css','llms.txt','assets/social/Auryveth_OpenGraph_1200x630.jpg','documents/Auryveth_Ecosystem_Constitution_v0.1.pdf','documents/Auryveth_Founder_Constitution_v0.1.pdf','.nojekyll'])read(asset);
try{
  new Function(read('i18n.js'));
}catch(error){
  throw Error(`Built localization runtime syntax invalid: ${error.message}`);
}
const xml=read('sitemap.xml');
const sitemap=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>x[1]).sort();
const expectedUrls=expected.map(x=>origin+x).sort();
if(JSON.stringify(sitemap)!==JSON.stringify(expectedUrls))throw Error('Sitemap does not equal indexable built pages');
if(xml.includes('404') || xml.includes('diagnostics'))throw Error('Sitemap includes utility page');
const textSitemap=read('sitemap.txt');
const textSitemapUrls=textSitemap.split(/\r?\n/).map(x=>x.trim()).filter(Boolean).sort();
if(JSON.stringify(textSitemapUrls)!==JSON.stringify(expectedUrls))throw Error('Text sitemap does not equal indexable built pages');
const robots=read('robots.txt');
if(!robots.includes(`Sitemap: ${origin}/sitemap.xml`))throw Error('robots.txt missing XML sitemap');
if(!robots.includes(`Sitemap: ${origin}/sitemap.txt`))throw Error('robots.txt missing text sitemap');
if(!robots.includes('Disallow: /diagnostics/'))throw Error('Diagnostic page not excluded from crawl');
if(!robots.includes('OAI-SearchBot'))throw Error('Missing intended search-bot access');
const llms=read('llms.txt');
if(!llms.includes(`${origin}/knowledge/digital-organism/`))throw Error('llms.txt missing canonical digital-organism URL');
if(!llms.includes(`${origin}/knowledge/business-organism/`))throw Error('llms.txt missing canonical business-organism URL');
if(!llms.includes('Interpretation and evidence boundary'))throw Error('llms.txt missing evidence boundary');
if(!llms.includes('Frozen constitutional facts'))throw Error('llms.txt missing frozen constitutional facts');
const constitutionPdf=read('documents/Auryveth_Ecosystem_Constitution_v0.1.pdf');
if(constitutionPdf.length<5000)throw Error('Generated Ecosystem Constitution PDF unexpectedly small');
for(const file of allFiles(root).filter(f=>/\.(?:html|xml|txt|json)$/i.test(f))){
  const text=fs.readFileSync(file,'utf8');
  if(/\baevora(?:-systems)?\b/i.test(text))throw Error(`Stale public brand/origin in build: ${path.relative(root,file)}`);
}
console.log(`PASS SEO/GEO/i18n audit: ${expected.length} unique pages, canonicals, hreflang, linked JSON-LD, internal links, bilingual controls, sitemap, robots and llms.txt.`);
