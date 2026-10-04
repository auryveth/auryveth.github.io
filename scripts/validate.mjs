import fs from 'node:fs';
import path from 'node:path';

const pages=['index','blackboard','organisms','research','roadmap','constitution','investors','about','pilot','privacy'];
for(const page of pages){
 if(!fs.existsSync(`src/pages/${page}.astro`))throw Error(`Missing Astro page ${page}`);
 if(!fs.existsSync(`src/content/pages/${page}.html`))throw Error(`Missing page body ${page}`);
}
for(const slug of ['digital-organism','business-organism','governed-autonomy','organism-vs-agent','authority-levels','internal-proving-ground']){
 if(!fs.existsSync(`src/pages/knowledge/${slug}.astro`))throw Error(`Missing knowledge route ${slug}`);
 if(!fs.existsSync(`src/content/pages/knowledge-${slug}.html`))throw Error(`Missing knowledge content ${slug}`);
}
for(const asset of [
 'public/site.js',
 'public/styles.css',
 'public/i18n.js',
 'public/i18n.css',
 'public/llms.txt',
 'public/sitemap.xml',
 'public/sitemap.txt',
 'public/robots.txt',
 'public/assets/logos/Auryveth_Logo_Horizontal_White.svg',
 'public/assets/logos/Auryveth_Logo_Horizontal_Corporate.svg',
 'public/assets/logos/Auryveth_Logo_Emblem_Corporate.svg',
 'public/assets/social/Auryveth_Social_Avatar_1024.png',
 'scripts/generate-constitution.py',
 'public/.nojekyll'
]){
 if(!fs.existsSync(asset))throw Error(`Missing ${asset}`);
}
const src=fs.readFileSync('src/data/site.ts','utf8');
if(!src.includes('auryveth.github.io'))throw Error('Wrong AURYVETH GitHub Pages origin');
if(!src.includes("name: 'AURYVETH'"))throw Error('Public brand not switched to AURYVETH');
if(src.includes('hello@'))throw Error('Invented email');
const constitution=fs.readFileSync('src/content/pages/constitution.html','utf8');
for(const marker of ['C-01','C-18','Permanent death','No self-granted power','AURYVETH Ecosystem Constitution / v0.1']){
 if(!constitution.includes(marker))throw Error(`Constitution v0.1 public copy missing: ${marker}`);
}
const constitutionGenerator=fs.readFileSync('scripts/generate-constitution.py','utf8');
for(const marker of ['Auryveth_Ecosystem_Constitution_v0.1.pdf','35e440729768529c94f7411d0de0c3dd1d2bf72f','55c7417997b315ae8a5fb4f5c304d98832120695']){
 if(!constitutionGenerator.includes(marker))throw Error(`Constitution PDF generator missing: ${marker}`);
}
if(constitutionGenerator.includes('founder-constitution-v0.1.source.pdf'))throw Error('Constitution generator still depends on stale Founder Constitution source PDF');

const llms=fs.readFileSync('public/llms.txt','utf8');
if(!llms.includes('https://auryveth.github.io/knowledge/digital-organism/'))throw Error('llms.txt missing canonical digital-organism definition');
if(!llms.includes('https://auryveth.github.io/knowledge/business-organism/'))throw Error('llms.txt missing canonical business-organism definition');
if(!llms.includes('Interpretation and evidence boundary'))throw Error('llms.txt missing evidence boundary');
if(!llms.includes('Frozen constitutional facts'))throw Error('llms.txt missing frozen constitutional facts');
if(!llms.includes('Ecosystem Constitution v0.1'))throw Error('llms.txt missing Constitution v0.1');

function walk(dir){
 return fs.readdirSync(dir,{withFileTypes:true}).flatMap(d=>d.isDirectory()?walk(path.join(dir,d.name)):[path.join(dir,d.name)]);
}
const residualBrandFiles=[];
for(const root of ['src','public']){
 for(const file of walk(root).filter(f=>/\.(?:astro|html|ts|js|css|json|svg|txt)$/i.test(f))){
   const t=fs.readFileSync(file,'utf8');
   if(/\baevora(?:-systems)?\b/i.test(t))residualBrandFiles.push(file);
 }
}
if(residualBrandFiles.length)throw Error('Old public brand remains in: '+residualBrandFiles.join(', '));
for(const file of ['src/components/SEOHead.astro','src/content/pages/knowledge-index.html']){
 const t=fs.readFileSync(file,'utf8');
 if(!t.includes('Business')&&!t.includes('business'))throw Error(`Suspect empty content: ${file}`);
}
const header=fs.readFileSync('src/components/Header.astro','utf8');
for(const label of ['Home','Research','Products','About'])if(!header.includes(`>${label}<`) && !header.includes(`>${label}</span>`))throw Error(`Missing primary navigation category: ${label}`);
if((header.match(/class="nav-group"/g)||[]).length!==3)throw Error('Expected exactly three grouped dropdowns plus Home');
if(!header.includes('/knowledge/digital-organism/'))throw Error('Navigation missing digital-organism route');
if(!header.includes('data-language-toggle'))throw Error('Navigation missing language switcher');

const i18n=fs.readFileSync('public/i18n.js','utf8');
const translationKeys=new Set(
  [...i18n.matchAll(/^\s{4}"((?:\\.|[^"])*)":\s*"/gm)]
    .map(match=>JSON.parse('"'+match[1]+'"'))
);
const visibleSourceFiles=[
  'src/components/Header.astro',
  'src/components/Footer.astro',
  ...walk('src/content/pages').filter(file=>/\.html$/i.test(file))
];
const i18nExempt=new Set([
  'Auryveth','AURYVETH','Jeremiah Wong Zhi Qi','JW','EN','中文',
  'L0','L1','L2','L3','L4','P1','P2','P3','A','B','C','D'
]);
const missingTranslations=[];
const normalizeText=value=>value.replace(/\s+/g,' ').trim();
for(const file of visibleSourceFiles){
  const text=fs.readFileSync(file,'utf8');
  const values=new Set();
  for(const match of text.matchAll(/>([^<>]+)</g)){
    const value=normalizeText(match[1]);
    if(value && /[A-Za-z]/.test(value))values.add(value);
  }
  for(const match of text.matchAll(/\b(?:aria-label|title|placeholder|alt)="([^"]+)"/g)){
    const value=normalizeText(match[1]);
    if(value && /[A-Za-z]/.test(value))values.add(value);
  }
  for(const value of values){
    if(i18nExempt.has(value))continue;
    if(!translationKeys.has(value))missingTranslations.push(`${file}: ${value}`);
  }
}
if(missingTranslations.length){
  throw Error('Chinese translation coverage missing:\n'+missingTranslations.join('\n'));
}

const metadataValues=[
  ...src.matchAll(/\b(?:title|description)\s*:\s*(['"])(.*?)\1/g)
].map(match=>match[2]);
for(const value of metadataValues){
  if(/[A-Za-z]/.test(value) && !i18nExempt.has(value) && !translationKeys.has(value)){
    throw Error(`Missing Chinese metadata translation: ${value}`);
  }
}
for(const value of ['Page not found — Auryveth','Auryveth page not found.','en_US']){
  if(!translationKeys.has(value))throw Error(`Missing Chinese page metadata translation: ${value}`);
}

const mainCss=fs.readFileSync('public/styles.css','utf8');
const i18nCss=fs.readFileSync('public/i18n.css','utf8');
for(const file of visibleSourceFiles){
  if(fs.readFileSync(file,'utf8').includes('\\n')){
    throw Error(`Literal escaped newline found in public markup: ${file}`);
  }
}
if(i18nCss.includes('\\n'))throw Error('Literal escaped newline found in i18n CSS');
if(!i18nCss.includes('touch-action:manipulation'))throw Error('Language switcher missing touch-device interaction hardening');
if(!i18nCss.includes('min-height:44px'))throw Error('Language switcher missing mobile touch target sizing');
const generatedEnglish=[
  ...mainCss.matchAll(/content\s*:\s*["']([^"']*[A-Za-z][^"']*)["']/g)
].map(match=>match[1]);
for(const value of generatedEnglish){
  if(!translationKeys.has(value))throw Error(`Missing Chinese generated-copy translation: ${value}`);
}
for(const requiredCss of [
  'content:"AURYVETH / 内部验证场"',
  'content:"创始人 / AURYVETH"',
  'content:"AURYVETH / 构建 · 学习 · 进化"'
]){
  if(!i18nCss.includes(requiredCss))throw Error(`Missing Chinese CSS generated-copy override: ${requiredCss}`);
}
for(const dynamicText of [
  'Close navigation',
  'system preference',
  'Motion: live',
  'Motion: reduced',
  'Online submission is not currently enabled. No form data was submitted.',
  'One organism layer. Five coordinated functions.',
  'One organism. A governed life cycle.',
  'Capability grows under explicit authority.',
  'continue below',
  'scroll to transform'
]){
  if(!translationKeys.has(dynamicText))throw Error(`Missing dynamic Chinese translation: ${dynamicText}`);
}

console.log(`PASS source: AURYVETH naming, core pages, 6 knowledge pages, grouped navigation, Chinese switcher and ${translationKeys.size} translation entries`);
