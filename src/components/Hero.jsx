import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDownRight, Tag, Layers, Zap } from 'lucide-react';

export default function Hero({ data }) {
  const {
    name = "ALEX RIVERS",
    role = "DESIGNER / VISUAL ARTIST / CREATIVE DIRECTOR",
    tagline = "BOLD EDITORIAL GRAPHIC DESIGN & TACTILE PRINT EXPERIMENTS",
    description = "I build expressive visual identities, risograph posters, publication systems, and experimental digital landscapes. Drawing heavy inspiration from underground zine culture, Swiss graphic typography, and comic-book halftones.",
    supportingText = "AVAILABLE FOR SELECT COMMISSIONS & BRAND CONSULTATION // BASED IN TOKYO & NEW YORK",
    stats = [],
    image = "/images/hero/Manjunath.jpg",
    imageAlt = "Alex Rivers Tactile Poster Portrait"
  } = data || {};

  return (
    <section id="about" className="section-container pt-8 md:pt-16 pb-16">
      {/* Category Stamp Badge */}
      <div className="flex items-center gap-2 mb-6">
        <span className="section-stamp-badge">
          [ EDITORIAL PORTFOLIO // VOL. 04 ]
        </span>
        <span className="hidden sm:inline-block font-mono text-xs text-[#f8f5ee] bg-[#0c0c0c] px-3 py-1 border border-[#f8f5ee]">
          RISOGRAPH CANVAS EDITION
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Expressive Typography Text Container */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-[#f8f5ee] border-3 border-[#0c0c0c] shadow-[8px_8px_0px_#0c0c0c] p-6 md:p-10 relative">
            {/* Corner Decorative Tape */}
            <div className="tape-accent tape-top-left" />
            <div className="tape-accent tape-top-right" />

            {/* Sub-header / Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="tag-badge">
                <Sparkles className="w-3.5 h-3.5 text-[#0c0c0c]" /> {role}
              </span>
            </div>

            {/* Big Name Typography */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#0c0c0c] tracking-tight leading-[0.9] mb-4">
              {name}
            </h1>

            {/* Tagline */}
            <p className="font-bebas text-2xl md:text-3xl text-[#d32222] tracking-wide mb-6 border-b-2 border-[#0c0c0c] pb-3">
              {tagline}
            </p>

            {/* Short Introduction */}
            <p className="font-sans text-base md:text-lg text-[#0c0c0c] leading-relaxed mb-6 font-medium">
              {description}
            </p>

            {/* Supporting Text Box */}
            <div className="bg-[#0c0c0c] text-[#f8f5ee] p-4 border-2 border-[#0c0c0c] font-mono text-xs md:text-sm leading-relaxed mb-6">
              <span className="text-[#ffd000] font-bold">STATUS: </span>
              {supportingText}
            </div>

            {/* Quick Stats Grid */}
            {stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t-2 border-dashed border-[#0c0c0c]">
                {stats.map((st, i) => (
                  <div key={i} className="bg-[#eee9dc] p-2.5 border-2 border-[#0c0c0c] text-center">
                    <span className="block font-display font-black text-xl md:text-2xl text-[#d32222] leading-none">
                      {st.value}
                    </span>
                    <span className="block font-mono text-[10px] text-[#0c0c0c] font-bold tracking-wider mt-1">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Links */}
            <div className="flex flex-wrap gap-4 mt-8 pt-4">
              <a href="#casual" className="btn-poster">
                EXPLORE ARTWORKS <ArrowDownRight className="w-5 h-5" />
              </a>
              <a href="#professional" className="btn-poster btn-poster-black">
                PRO PROJECTS
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Hero PNG Container with Paper-Drop Animation */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{
              opacity: 0,
              y: -140,
              rotate: -8,
              scale: 1.05
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: 2.5,
              scale: 1
            }}
            transition={{
              duration: 0.85,
              ease: [0.175, 0.885, 0.32, 1.275], // Custom paper bounce overshoot ease
              delay: 0.1
            }}
            className="relative w-full max-w-[480px]"
          >
            {/* Paper Poster Shadow & Frame */}
            <div className="relative bg-[#f8f5ee] p-4 md:p-5 border-3 border-[#0c0c0c] shadow-[12px_18px_35px_rgba(0,0,0,0.5)] transform hover:rotate-0 hover:scale-[1.02] transition-transform duration-300 group">
              {/* Paper Corner Tape */}
              <div className="tape-accent tape-top-right !right-4 !top-[-14px]" />
              <div className="tape-accent tape-top-left !left-4 !top-[-14px]" />

              {/* PNG Hero Image Display */}
              <div className="relative overflow-hidden border-2 border-[#0c0c0c] bg-[#111111]">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-auto object-cover display-block min-h-[380px] md:min-h-[460px] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Poster Badge */}
                <div className="absolute top-3 left-3 bg-[#ffd000] text-[#0c0c0c] font-mono text-[10px] font-bold px-2.5 py-1 border-2 border-[#0c0c0c] shadow-[2px_2px_0px_#0c0c0c]">
                  [ HERO PNG ASSET ]
                </div>
              </div>

              {/* Poster Caption */}
              <div className="mt-3 flex items-center justify-between font-mono text-xs text-[#0c0c0c]">
                <span className="font-bold">FIG. 01 — HERO POSTER</span>
                <span className="text-[10px] bg-[#d32222] text-[#f8f5ee] px-2 py-0.5 border border-[#0c0c0c]">
                  SWAP: /images/hero/
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
