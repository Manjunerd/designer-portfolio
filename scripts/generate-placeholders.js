import fs from 'fs';
import path from 'path';

const dirs = [
  'public/images/hero',
  'public/images/casual',
  'public/images/professional',
  'public/images/featured',
];

dirs.forEach((dir) => {
  fs.mkdirSync(dir, { recursive: true });
});

// Helper to generate artistic SVG posters
function createArtisticPosterSVG({ title, category, num, width = 600, height = 800, theme = 'risograph' }) {
  const themes = [
    { bg: '#111111', accent: '#ff3333', text: '#ffffff', sub: '#ffcc00' },
    { bg: '#f4efe6', accent: '#000000', text: '#d62828', sub: '#1a1a1a' },
    { bg: '#0d0d0d', accent: '#f7f4ec', text: '#ffffff', sub: '#d62828' },
    { bg: '#d62828', accent: '#000000', text: '#ffffff', sub: '#ffeb3b' },
    { bg: '#1c1917', accent: '#fbbf24', text: '#f5f5f4', sub: '#ef4444' },
    { bg: '#2b2b2b', accent: '#e63946', text: '#f1faee', sub: '#a8dadc' },
  ];

  const t = themes[num % themes.length];
  const aspectText = `${width}:${height}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <!-- Fine Risograph Halftone Pattern -->
    <pattern id="dots-${num}" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="#000000" opacity="0.35"/>
      <circle cx="6" cy="6" r="1.2" fill="#000000" opacity="0.35"/>
    </pattern>
    <pattern id="grid-${num}" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${t.text}" stroke-width="0.5" opacity="0.15"/>
    </pattern>
  </defs>

  <!-- Background Canvas -->
  <rect width="${width}" height="${height}" fill="${t.bg}"/>
  <rect width="${width}" height="${height}" fill="url(#dots-${num})"/>
  <rect width="${width}" height="${height}" fill="url(#grid-${num})"/>

  <!-- Outer Poster Border -->
  <rect x="16" y="16" width="${width - 32}" height="${height - 32}" fill="none" stroke="${t.text}" stroke-width="3" opacity="0.85"/>
  <rect x="22" y="22" width="${width - 44}" height="${height - 44}" fill="none" stroke="${t.accent}" stroke-width="1" stroke-dasharray="6,4" opacity="0.6"/>

  <!-- Abstract Graphic Geometry -->
  <g transform="translate(${width/2}, ${height/2 - 40})">
    <circle r="${Math.min(width, height) * 0.28}" fill="none" stroke="${t.sub}" stroke-width="8" opacity="0.7"/>
    <circle r="${Math.min(width, height) * 0.18}" fill="${t.accent}" opacity="0.85"/>
    <polygon points="-80,60 80,60 0,-90" fill="${t.text}" opacity="0.9"/>
    <rect x="-110" y="-15" width="220" height="30" fill="${t.bg}" rx="4" stroke="${t.text}" stroke-width="2"/>
    <text x="0" y="6" font-family="'Space Mono', monospace" font-size="14" font-weight="bold" fill="${t.text}" text-anchor="middle" letter-spacing="3">EXP / ARTWORK #${String(num).padStart(2, '0')}</text>
  </g>

  <!-- Graphic Accents -->
  <line x1="32" y1="${height - 140}" x2="${width - 32}" y2="${height - 140}" stroke="${t.text}" stroke-width="2"/>
  
  <!-- Header Bar -->
  <rect x="32" y="32" width="120" height="28" fill="${t.accent}"/>
  <text x="92" y="51" font-family="'Space Mono', monospace" font-size="12" font-weight="bold" fill="${t.bg}" text-anchor="middle">${category.toUpperCase()}</text>
  
  <text x="${width - 32}" y="52" font-family="'Space Mono', monospace" font-size="12" fill="${t.text}" text-anchor="end" opacity="0.7">${aspectText}</text>

  <!-- Poster Title Block -->
  <text x="32" y="${height - 95}" font-family="'Syne', 'Impact', sans-serif" font-size="28" font-weight="900" fill="${t.text}" letter-spacing="1">${title.toUpperCase()}</text>
  <text x="32" y="${height - 70}" font-family="'Space Grotesk', sans-serif" font-size="13" fill="${t.sub}" letter-spacing="0.5">REPLACE AT: /public/images/${category.toLowerCase()}/${title.toLowerCase().replace(/\s+/g, '-')}.svg</text>
  <text x="32" y="${height - 45}" font-family="'Space Mono', monospace" font-size="11" fill="${t.text}" opacity="0.6">[ EDITORIAL RISOGRAPH SERIES // 2026 ]</text>

  <!-- Tape Effect -->
  <rect x="${width/2 - 40}" y="8" width="80" height="22" fill="#ffffff" opacity="0.3" transform="rotate(-2, ${width/2}, 19)"/>
</svg>`;
}

// 1. Generate Hero Image SVG
const heroSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 720" width="600" height="720">
  <defs>
    <pattern id="hero-dots" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="#000000" opacity="0.4"/>
    </pattern>
  </defs>
  <rect width="600" height="720" fill="#f5f0e6"/>
  <rect width="600" height="720" fill="url(#hero-dots)"/>
  
  <!-- Outer Frame -->
  <rect x="16" y="16" width="568" height="688" fill="none" stroke="#000000" stroke-width="4"/>
  <rect x="24" y="24" width="552" height="672" fill="none" stroke="#d62828" stroke-width="2"/>
  
  <!-- Tape Accents -->
  <rect x="40" y="4" width="90" height="28" fill="#e2ded4" opacity="0.8" transform="rotate(-4 85 18)"/>
  <rect x="470" y="4" width="90" height="28" fill="#e2ded4" opacity="0.8" transform="rotate(5 515 18)"/>

  <!-- Comic / Graphic Illustration Frame -->
  <g transform="translate(300, 320)">
    <polygon points="-180,-140 180,-180 160,180 -190,140" fill="#d62828" stroke="#000" stroke-width="4"/>
    <circle r="130" fill="#000000"/>
    <circle r="115" fill="#f5f0e6"/>
    <path d="M-60,-20 L60,-20 L80,70 L-80,70 Z" fill="#d62828"/>
    <text x="0" y="-30" font-family="'Syne', sans-serif" font-size="52" font-weight="900" fill="#ffffff" text-anchor="middle">HERO</text>
    <text x="0" y="25" font-family="'Bebas Neue', sans-serif" font-size="38" fill="#000000" text-anchor="middle">PNG PORTRAIT</text>
  </g>

  <!-- Editorial Info Box -->
  <rect x="40" y="580" width="520" height="90" fill="#000000"/>
  <text x="60" y="618" font-family="'Syne', sans-serif" font-size="22" font-weight="800" fill="#ffffff">TACTILE HERO PNG PLACEHOLDER</text>
  <text x="60" y="645" font-family="'Space Mono', monospace" font-size="12" fill="#ffcc00">SWAP FILE: /public/images/hero/hero-portrait.png</text>
</svg>`;

fs.writeFileSync('public/images/hero/hero-portrait.svg', heroSVG);

// 2. Generate 20 Casual Artworks
const casualTitles = [
  "Subway Zine No. 4", "Acid Jazz Poster", "Tokyo Halftone", "Risograph Wave",
  "Swiss Grid Study", "Brutalist Mono", "Sonic Texture 09", "Neon Distortion",
  "Concrete Typography", "Oblique Angle", "Analog Static", "Red Shift No. 12",
  "Kanjin Cutout", "Noise & Signal", "Pop Art Collision", "Vapor Screen",
  "Geometric Manifesto", "Offset Press 99", "Dada Monograph", "Midnight Print"
];

casualTitles.forEach((title, idx) => {
  const filename = `casual-${String(idx + 1).padStart(2, '0')}.svg`;
  // Alternate aspect ratios to give masonry texture
  const heights = [750, 600, 850, 680, 900, 650];
  const h = heights[idx % heights.length];
  const svgContent = createArtisticPosterSVG({
    title,
    category: 'Casual',
    num: idx + 1,
    width: 600,
    height: h
  });
  fs.writeFileSync(path.join('public/images/casual', filename), svgContent);
});

// 3. Generate 6 Professional Projects (plus secondary images for gallery)
const proProjects = [
  { name: "Komorebi Brand Identity", tag: "Branding / Identity" },
  { name: "Monolith Architecture Monograph", tag: "Editorial Design" },
  { name: "Vanguard Typeface Specimen", tag: "Typography & Print" },
  { name: "Aura Sound Festival 2026", tag: "Art Direction & Posters" },
  { name: "Flux Exhibition Catalogue", tag: "Publication & Packaging" },
  { name: "Hyperion Digital Identity", tag: "UI/UX & Design System" },
];

proProjects.forEach((proj, idx) => {
  const baseName = `pro-${String(idx + 1).padStart(2, '0')}`;
  
  // Primary Cover
  const coverSVG = createArtisticPosterSVG({
    title: proj.name,
    category: 'Pro Work',
    num: idx + 10,
    width: 800,
    height: 560
  });
  fs.writeFileSync(path.join('public/images/professional', `${baseName}-cover.svg`), coverSVG);

  // 2 Additional Detail Images per project
  for (let d = 1; d <= 2; d++) {
    const detailSVG = createArtisticPosterSVG({
      title: `${proj.name} — Detail 0${d}`,
      category: 'Pro Detail',
      num: (idx + 1) * 10 + d,
      width: 800,
      height: 600
    });
    fs.writeFileSync(path.join('public/images/professional', `${baseName}-detail-${d}.svg`), detailSVG);
  }
});

// 4. Generate 4:3 Featured Image SVG
const featuredSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">
  <defs>
    <pattern id="feat-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="1.8" fill="#000000" opacity="0.4"/>
    </pattern>
    <linearGradient id="feat-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111111"/>
      <stop offset="50%" stop-color="#2a0808"/>
      <stop offset="100%" stop-color="#050505"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="900" fill="url(#feat-grad)"/>
  <rect width="1200" height="900" fill="url(#feat-dots)"/>

  <!-- Bold Grid Frame -->
  <rect x="24" y="24" width="1152" height="852" fill="none" stroke="#d62828" stroke-width="4"/>
  <rect x="36" y="36" width="1128" height="828" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="12,8"/>

  <!-- Center Graphic Display -->
  <g transform="translate(600, 420)">
    <rect x="-350" y="-220" width="700" height="440" fill="#d62828" rx="8" stroke="#ffffff" stroke-width="3"/>
    <circle r="160" fill="#000000" opacity="0.9"/>
    <polygon points="0,-130 110,80 -110,80" fill="#ffcc00"/>
    <text x="0" y="20" font-family="'Syne', sans-serif" font-size="56" font-weight="900" fill="#ffffff" text-anchor="middle">FEATURED 4:3</text>
    <text x="0" y="65" font-family="'Space Mono', monospace" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">EXHIBITION KEY VISUAL</text>
  </g>

  <!-- Poster Tag Footer -->
  <rect x="36" y="800" width="1128" height="64" fill="#000000"/>
  <text x="60" y="838" font-family="'Space Grotesk', sans-serif" font-size="22" font-weight="bold" fill="#ffffff">FEATURED ARTWORK CONTAINER [ ASPECT RATIO 4:3 ]</text>
  <text x="1110" y="838" font-family="'Space Mono', monospace" font-size="14" fill="#ffcc00" text-anchor="end">REPLACE AT: /public/images/featured/featured-4x3.jpg</text>
</svg>`;

fs.writeFileSync('public/images/featured/featured-4x3.svg', featuredSVG);

console.log('Successfully generated all placeholder artwork files!');
