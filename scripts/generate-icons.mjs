import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'public');
const srcIcon = join(publicDir, 'favicon.svg');

mkdirSync(publicDir, { recursive: true });

const svgBuffer = readFileSync(srcIcon);

// iOS "Add to Home Screen" wants a non-transparent square with full bleed.
// We render the P icon on top of the solid slate background the SVG already has.
const targets = [
  { name: 'favicon-32.png', size: 32 },
  { name: 'favicon-192.png', size: 192 },
  { name: 'favicon-512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
];

for (const t of targets) {
  await sharp(svgBuffer, { density: 384 })
    .resize(t.size, t.size, { fit: 'contain', background: '#0f172a' })
    .png()
    .toFile(join(publicDir, t.name));
  console.log(`✔ ${t.name} (${t.size}x${t.size})`);
}

// Web app manifest for PWA / Add to Home Screen
const manifest = {
  name: 'Pedro Paiva Ferreira',
  short_name: 'Pedro.dev',
  description: 'Portfólio de Pedro Paiva Ferreira — desenvolvedor full-stack',
  start_url: '/',
  display: 'standalone',
  background_color: '#0f172a',
  theme_color: '#0f172a',
  icons: [
    { src: '/favicon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
    { src: '/favicon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
  ],
};
writeFileSync(join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
console.log('✔ site.webmanifest');
