/**
 * Centralized Portfolio Data Structure
 * =====================================
 * To replace placeholder artwork with your own custom designs:
 * 1. Drop your PNG/JPG/SVG image files into the designated folders inside `/public/images/`:
 *    - /public/images/hero/
 *    - /public/images/casual/
 *    - /public/images/professional/
 *    - /public/images/featured/
 * 2. Update the `image` paths below to point to your new image files.
 */

export const heroData = {
  name: "Manjunath",
  role: "DESIGNER / VISUAL ARTIST / CREATIVE DIRECTOR",
  tagline: "BOLD EDITORIAL GRAPHIC DESIGN & TACTILE PRINT EXPERIMENTS",
  description: `I build expressive visual identities, risograph posters, publication systems, and experimental digital landscapes. Drawing heavy inspiration from underground zine culture, Swiss graphic typography, and comic-book halftones.`,
  supportingText: "AVAILABLE FOR SELECT COMMISSIONS & BRAND CONSULTATION // BASED IN TOKYO & NEW YORK",
  stats: [
    { label: "EXPERIMENTS", value: "120+" },
    { label: "CLIENT PROJECTS", value: "35+" },
    { label: "PUBLISHED ZINES", value: "14" },
    { label: "YEARS EXP.", value: "08" },
  ],
  image: "/images/hero/Manjunath.jpg",
  imageAlt: "Alex Rivers Tactile Poster Portrait"
};

export const casualProjects = [
  {
    id: 1,
    title: "Subway Zine No. 4",
    category: "Zine & Print",
    year: "2026",
    image: "/images/casual/NOIR.jpg",
    description: "Limited 32-page risograph print exploring Tokyo underground rail typography and brutalist transit maps.",
    tags: ["Risograph", "Zine", "Typography"]
  },
  {
    id: 2,
    title: "Acid Jazz Poster",
    category: "Poster Design",
    year: "2026",
    image: "/images/casual/casual-02.svg",
    description: "Gig poster design with distorted typography and screen-printed halftone overlay for a Tokyo live venue.",
    tags: ["Screenprint", "Music", "Poster"]
  },
  {
    id: 3,
    title: "Tokyo Halftone",
    category: "Visual Study",
    year: "2025",
    image: "/images/casual/casual-03.svg",
    description: "High-contrast monochromatic halftone study capturing late-night Shinjuku street neon reflections.",
    tags: ["Halftone", "Photography", "Monochrome"]
  },
  {
    id: 4,
    title: "Risograph Wave",
    category: "Print Series",
    year: "2025",
    image: "/images/casual/casual-04.svg",
    description: "Two-color duotone spot print experimenting with fluorescent pink and dark crimson ink overlays.",
    tags: ["Risograph", "Duotone", "Experimental"]
  },
  {
    id: 5,
    title: "Swiss Grid Study",
    category: "Editorial",
    year: "2025",
    image: "/images/casual/casual-05.svg",
    description: "Strict 12-column Swiss typographic grid layout broken with organic paper tear textures.",
    tags: ["Swiss Design", "Grid", "Editorial"]
  },
  {
    id: 6,
    title: "Brutalist Mono",
    category: "Type Specimen",
    year: "2025",
    image: "/images/casual/casual-06.svg",
    description: "Custom headline typeface exploration showcasing extreme ink traps and heavy black weights.",
    tags: ["Typography", "Type Design", "Brutalism"]
  },
  {
    id: 7,
    title: "Sonic Texture 09",
    category: "Album Cover",
    year: "2025",
    image: "/images/casual/casual-07.svg",
    description: "Vinyl sleeve design for experimental ambient electronic LP using scanned photocopy textures.",
    tags: ["Album Art", "Packaging", "Music"]
  },
  {
    id: 8,
    title: "Neon Distortion",
    category: "Digital Graphic",
    year: "2025",
    image: "/images/casual/casual-08.svg",
    description: "Chromatic aberration digital poster exploring synthetic neon color fields over coarse paper grain.",
    tags: ["Digital", "Post-Modern", "Poster"]
  },
  {
    id: 9,
    title: "Concrete Typography",
    category: "Architecture",
    year: "2025",
    image: "/images/casual/casual-09.svg",
    description: "Large-scale architectural typography installation proposal rendered in raw concrete texture.",
    tags: ["Spatial", "Typography", "Installation"]
  },
  {
    id: 10,
    title: "Oblique Angle",
    category: "Abstract Poster",
    year: "2025",
    image: "/images/casual/casual-10.svg",
    description: "Dynamic diagonal layout composition breaking conventional horizontal reading planes.",
    tags: ["Composition", "Abstract", "Geometric"]
  },
  {
    id: 11,
    title: "Analog Static",
    category: "Glitch Art",
    year: "2024",
    image: "/images/casual/casual-11.svg",
    description: "CRT monitor re-photographed on 35mm high-grain film creating tactile analog noise patterns.",
    tags: ["Film Photography", "Glitch", "Analog"]
  },
  {
    id: 12,
    title: "Red Shift No. 12",
    category: "Risograph",
    year: "2024",
    image: "/images/casual/casual-12.svg",
    description: "Monochromatic red-ink screen printing with fine pitch stipple dot density variations.",
    tags: ["Red Canvas", "Risograph", "Stipple"]
  },
  {
    id: 13,
    title: "Kanjin Cutout",
    category: "Collage",
    year: "2024",
    image: "/images/casual/casual-13.svg",
    description: "Physical collage combining vintage Japanese newspaper cutouts with modern geometric solids.",
    tags: ["Collage", "Japanese Art", "Mixed Media"]
  },
  {
    id: 14,
    title: "Noise & Signal",
    category: "Publication",
    year: "2024",
    image: "/images/casual/casual-14.svg",
    description: "Cover design for an independent essay compilation on digital privacy and graphic noise.",
    tags: ["Book Cover", "Editorial", "Essay"]
  },
  {
    id: 15,
    title: "Pop Art Collision",
    category: "Poster Series",
    year: "2024",
    image: "/images/casual/casual-15.svg",
    description: "Bold pop-art screenprint series playing with comic panel framing and overprinted inks.",
    tags: ["Pop Art", "Comic", "Screenprint"]
  },
  {
    id: 16,
    title: "Vapor Screen",
    category: "Silkscreen",
    year: "2024",
    image: "/images/casual/casual-16.svg",
    description: "Hand-printed 3-color silkscreen edition on heavy 300gsm cotton rag poster stock.",
    tags: ["Silkscreen", "Limited Edition", "Print"]
  },
  {
    id: 17,
    title: "Geometric Manifesto",
    category: "Poster Design",
    year: "2024",
    image: "/images/casual/casual-17.svg",
    description: "Constructivist poster layout utilizing high contrast red, black and cream color blocks.",
    tags: ["Constructivism", "Poster", "Manifesto"]
  },
  {
    id: 18,
    title: "Offset Press 99",
    category: "Print Study",
    year: "2024",
    image: "/images/casual/casual-18.svg",
    description: "Macro photographic examination of vintage offset press color registration misalignment.",
    tags: ["Offset", "Print Culture", "Macro"]
  },
  {
    id: 19,
    title: "Dada Monograph",
    category: "Experimental Type",
    year: "2024",
    image: "/images/casual/casual-19.svg",
    description: "Deconstructed typographic composition paying homage to 1920s Zurich Dadaist posters.",
    tags: ["Dada", "Type", "History"]
  },
  {
    id: 20,
    title: "Midnight Print",
    category: "Visual Art",
    year: "2024",
    image: "/images/casual/casual-20.svg",
    description: "Dark moody midnight risograph print with subtle metallic gold foil stamp highlights.",
    tags: ["Gold Foil", "Night", "Print"]
  }
];

export const professionalProjects = [
  {
    id: 101,
    title: "Komorebi Brand Identity",
    client: "Komorebi Craft Brewery",
    category: "Branding & Identity System",
    year: "2026",
    coverImage: "/images/professional/pro-01-cover.svg",
    images: [
      "/images/professional/pro-01-cover.svg",
      "/images/professional/pro-01-detail-1.svg",
      "/images/professional/pro-01-detail-2.svg"
    ],
    description: "A complete visual identity, packaging system, and custom typography suite for a high-end artisanal brewery based in Kyoto. Blending traditional Japanese woodblock aesthetics with sleek contemporary Swiss typography.",
    deliverables: ["Brand Strategy", "Custom Logotype", "Can Packaging Series", "Brand Guidelines Book"],
    tags: ["Branding", "Packaging", "Art Direction"]
  },
  {
    id: 102,
    title: "Monolith Architecture Monograph",
    client: "Monolith Studio NYC",
    category: "Editorial Design & Book",
    year: "2025",
    coverImage: "/images/professional/pro-02-cover.svg",
    images: [
      "/images/professional/pro-02-cover.svg",
      "/images/professional/pro-02-detail-1.svg",
      "/images/professional/pro-02-detail-2.svg"
    ],
    description: "320-page clothbound hardback monograph celebrating 15 years of minimalist concrete architecture. Features embossed cover foil, exposed Swiss binding, and custom matte duotone image processing.",
    deliverables: ["Hardcover Book", "Custom Slipcase", "Exhibition Poster", "Digital Campaign"],
    tags: ["Editorial", "Book Design", "Print"]
  },
  {
    id: 103,
    title: "Vanguard Typeface Specimen",
    client: "Vanguard Type Foundry",
    category: "Typography & Print Specimen",
    year: "2025",
    coverImage: "/images/professional/pro-03-cover.svg",
    images: [
      "/images/professional/pro-03-cover.svg",
      "/images/professional/pro-03-detail-1.svg",
      "/images/professional/pro-03-detail-2.svg"
    ],
    description: "Interactive specimen poster catalog designed for Vanguard Mono, a heavy display sans-serif. Printed on 80lb archival paper using custom fluorescent ink passes.",
    deliverables: ["Type Specimen Booklet", "Poster Set", "Web Landing Page", "Specimen Sheet"],
    tags: ["Type Specimen", "Print", "Font Release"]
  },
  {
    id: 104,
    title: "Aura Sound Festival 2026",
    client: "Aura Cultural Arts",
    category: "Art Direction & Posters",
    year: "2026",
    coverImage: "/images/professional/pro-04-cover.svg",
    images: [
      "/images/professional/pro-04-cover.svg",
      "/images/professional/pro-04-detail-1.svg",
      "/images/professional/pro-04-detail-2.svg"
    ],
    description: "Comprehensive key visual system, street poster campaign, motion billboards, and stage graphics for an international experimental music festival held in Berlin.",
    deliverables: ["Key Visuals", "24-Sheet Billboard Series", "Motion Graphics", "Festival Guide & Map"],
    tags: ["Art Direction", "Music Festival", "Motion"]
  },
  {
    id: 105,
    title: "Flux Exhibition Catalogue",
    client: "Mori Museum of Modern Art",
    category: "Publication & Packaging",
    year: "2025",
    coverImage: "/images/professional/pro-05-cover.svg",
    images: [
      "/images/professional/pro-05-cover.svg",
      "/images/professional/pro-05-detail-1.svg",
      "/images/professional/pro-05-detail-2.svg"
    ],
    description: "Exhibition identity and companion catalog for a retrospective on post-war kinetic art. Designed with translucent vellum tip-ins and interactive die-cut pages.",
    deliverables: ["Exhibition Catalog", "Die-Cut Vinyl Wall Graphics", "Museum Signage", "Tote Bag"],
    tags: ["Museum", "Catalogue", "Spatial"]
  },
  {
    id: 106,
    title: "Hyperion Digital Identity",
    client: "Hyperion Labs",
    category: "UI/UX & Design System",
    year: "2025",
    coverImage: "/images/professional/pro-06-cover.svg",
    images: [
      "/images/professional/pro-06-cover.svg",
      "/images/professional/pro-06-detail-1.svg",
      "/images/professional/pro-06-detail-2.svg"
    ],
    description: "Digital design system and web identity for an AI graphics research laboratory. Marrying technical precision with bold graphic poster visual language.",
    deliverables: ["Web Application Design", "Design System Component Library", "Brand Motion Kit"],
    tags: ["UI/UX", "Design System", "Branding"]
  }
];

export const featuredData = {
  title: "RESONANCE & FORM // TOKYO EXHIBITION KEY VISUAL",
  subtitle: "FEATURED 4:3 MEDIA DISPLAY",
  image: "/images/featured/featured-4x3.svg",
  aspectRatio: "4:3",
  year: "2026",
  location: "GINZA GRAPHIC GALLERY, TOKYO",
  description: `Selected as the flagship key visual poster for the 2026 Asian Graphic Triennale. This 4:3 master composition merges traditional woodblock block-printing techniques with modern high-density halftone screens and hand-cut typography.`,
  credits: "Art Direction & Graphic Design: Alex Rivers / Printmaster: Studio Risograph Tokyo"
};

export const contactData = {
  instagram: {
    handle: "@alexrivers.design",
    url: "https://instagram.com"
  },
  email: {
    address: "alex.rivers.design@example.com",
    mailto: "mailto:alex.rivers.design@example.com?subject=Design%20Inquiry%20%2F%2F%20Portfolio"
  },
  location: "TOKYO / NEW YORK",
  status: "OPEN FOR COMMISSIONS Q3/Q4 2026",
  copyright: "© 2026 ALEX RIVERS. ALL RIGHTS RESERVED. RISOGRAPH CANVAS EDITION."
};
