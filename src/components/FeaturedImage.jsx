import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Maximize2, Tag, Compass, Layers } from 'lucide-react';

export default function FeaturedImage({ data, onOpenLightbox }) {
  const {
    title = "RESONANCE & FORM // TOKYO EXHIBITION KEY VISUAL",
    subtitle = "FEATURED 4:3 MEDIA DISPLAY",
    image = "/images/featured/featured-4x3.svg",
    aspectRatio = "4:3",
    year = "2026",
    location = "GINZA GRAPHIC GALLERY, TOKYO",
    description = "Selected as the flagship key visual poster for the 2026 Asian Graphic Triennale. This 4:3 master composition merges traditional woodblock block-printing techniques with modern high-density halftone screens and hand-cut typography.",
    credits = "Art Direction & Graphic Design: Alex Rivers / Printmaster: Studio Risograph Tokyo"
  } = data || {};

  return (
    <section id="featured" className="section-container border-t-3 border-[#0c0c0c] pt-16 pb-20">
      {/* Section Stamp */}
      <div className="mb-8">
        <div className="section-stamp-badge">
          SECTION 03 // [ FEATURED MEDIA ASPECT RATIO 4:3 ]
        </div>
        <h2 className="section-title">FEATURED WORK</h2>
        <p className="section-subtitle">
          EXHIBITION KEY VISUAL · LARGE FORMAT PRINT · 4:3 MEDIA DISPLAY
        </p>
      </div>

      {/* Large 4:3 Aspect Ratio Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="poster-box p-4 md:p-8 bg-[#f8f5ee]"
      >
        {/* Decorative Tape Accents */}
        <div className="tape-accent tape-top-left" />
        <div className="tape-accent tape-top-right" />

        {/* 4:3 Media Frame */}
        <div
          onClick={() =>
            onOpenLightbox(
              [
                {
                  id: 'featured-1',
                  title,
                  category: 'Featured 4:3',
                  image,
                  description,
                  year,
                  tags: ['4:3 Aspect Ratio', 'Featured', 'Exhibition']
                }
              ],
              0
            )
          }
          className="relative w-full aspect-[4/3] overflow-hidden border-3 border-[#0c0c0c] bg-[#0c0c0c] cursor-pointer group shadow-[8px_8px_0px_#0c0c0c]"
        >
          {/* Main 4:3 Image */}
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Floating Badge */}
          <div className="absolute top-4 left-4 bg-[#ffd000] text-[#0c0c0c] font-mono text-xs font-bold px-3 py-1.5 border-2 border-[#0c0c0c] shadow-[3px_3px_0px_#0c0c0c] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0c0c0c]" />
            EXACT 4:3 ASPECT RATIO
          </div>

          <div className="absolute top-4 right-4 bg-[#0c0c0c] text-[#f8f5ee] font-mono text-xs font-bold px-3 py-1.5 border border-[#f8f5ee]">
            {year}
          </div>

          {/* Hover Enlarge Overlay */}
          <div className="absolute inset-0 bg-[#0c0c0c]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-[#ffd000] text-[#0c0c0c] font-display font-black text-sm md:text-base px-6 py-3 border-2 border-[#0c0c0c] shadow-[4px_4px_0px_#0c0c0c] flex items-center gap-2">
              <Maximize2 className="w-5 h-5" /> EXPAND FEATURED 4:3 MEDIA
            </div>
          </div>
        </div>

        {/* Caption & Project Details */}
        <div className="mt-6 pt-4 border-t-2 border-[#0c0c0c] grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-8">
            <span className="tag-badge mb-2">{subtitle}</span>
            <h3 className="font-display text-2xl md:text-4xl font-black text-[#0c0c0c] leading-tight mb-3">
              {title}
            </h3>
            <p className="font-sans text-base text-[#0c0c0c] leading-relaxed">
              {description}
            </p>
          </div>

          <div className="md:col-span-4 bg-[#eee9dc] p-4 border-2 border-[#0c0c0c]">
            <span className="block font-mono text-xs font-bold text-[#d32222] uppercase tracking-wider mb-2">
              EXHIBITION METADATA:
            </span>
            <div className="space-y-1.5 font-mono text-xs text-[#0c0c0c]">
              <div>
                <span className="font-bold">LOCATION:</span> {location}
              </div>
              <div>
                <span className="font-bold">RATIO:</span> {aspectRatio}
              </div>
              <div>
                <span className="font-bold">CREDITS:</span> {credits}
              </div>
              <div className="pt-2 text-[10px] text-[#d32222] font-bold">
                ASSET FILE: /public/images/featured/featured-4x3.jpg
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
