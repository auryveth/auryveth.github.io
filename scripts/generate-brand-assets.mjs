import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root=process.cwd();
const publicDir=path.join(root,'public');
const logoPath=path.join(publicDir,'assets/logos/Auryveth_Logo_Horizontal_White.svg');
const logoSvg=await fs.readFile(logoPath,'utf8');
const logoData='data:image/svg+xml;base64,'+Buffer.from(logoSvg).toString('base64');

await fs.mkdir(path.join(publicDir,'assets/social'),{recursive:true});
await fs.mkdir(path.join(publicDir,'documents'),{recursive:true});

const og=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<rect width="1200" height="630" fill="#03284e"/>
<image href="${logoData}" x="80" y="72" width="620" height="164" preserveAspectRatio="xMinYMid meet"/>
<text x="90" y="385" font-family="Arial,DejaVu Sans,sans-serif" font-size="42" font-weight="700" fill="#f8fcfd">We build. We learn. We evolve -</text>
<text x="90" y="438" font-family="Arial,DejaVu Sans,sans-serif" font-size="42" font-weight="700" fill="#00a9b3">toward a better future.</text>
<rect x="90" y="488" width="260" height="6" fill="#00a9b3"/>
<text x="90" y="548" font-family="Arial,DejaVu Sans,sans-serif" font-size="25" fill="#cbdce6">Auryveth | Governed digital business organisms</text>
</svg>`;
await sharp(Buffer.from(og)).jpeg({quality:88,progressive:true}).toFile(path.join(publicDir,'assets/social/Auryveth_OpenGraph_1200x630.jpg'));

const cover=`<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="500">
<rect width="1500" height="500" fill="#03284e"/>
<image href="${logoData}" x="85" y="65" width="760" height="200" preserveAspectRatio="xMinYMid meet"/>
<text x="96" y="382" font-family="Arial,DejaVu Sans,sans-serif" font-size="29" fill="#00a9b3">We build. We learn. We evolve - toward a better future.</text>
</svg>`;
await sharp(Buffer.from(cover)).jpeg({quality:88,progressive:true}).toFile(path.join(publicDir,'assets/social/Auryveth_Social_Cover_1500x500.jpg'));

console.log('Generated AURYVETH social images');
