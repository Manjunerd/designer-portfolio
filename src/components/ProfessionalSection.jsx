import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight, Layers, CheckCircle2, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';

export default function ProfessionalSection({ projects = [], onOpenProProject }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <section id="professional" className="section-container border-t-3 border-[#0c0c0c] pt-16 pb-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="section-stamp-badge !bg-[#ffd000] !text-[#0c0c0c]">
            SECTION 02 // [ {projects.length} BRAND &amp; CLIENT PROJECTS ]
          </div>
          <h2 className="section-title">PROFESSIONAL DESIGNING</h2>
          <p className="section-subtitle">
            BRAND IDENTITIES · EDITORIAL PUBLICATIONS · ART DIRECTION · DIGITAL SYSTEMS
          </p>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="btn-poster btn-poster-black self-start md:self-auto"
        >
          {expanded ? (
            <>
              COLLAPSE PROJECTS <ChevronUp className="w-5 h-5 text-[#ffd000]" />
            </>
          ) : (
            <>
              VIEW PROFESSIONAL WORK <ChevronDown className="w-5 h-5 text-[#ffd000]" />
            </>
          )}
        </button>
      </div>

      {expanded && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="poster-box p-6 flex flex-col justify-between group cursor-pointer"
              onClick={() => onOpenProProject(projects, idx)}
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b-2 border-[#0c0c0c]">
                  <span className="tag-badge !bg-[#0c0c0c] !text-[#ffd000]">
                    <Briefcase className="w-3.5 h-3.5" /> {proj.category}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#0c0c0c] bg-[#eee9dc] px-2.5 py-1 border border-[#0c0c0c]">
                    {proj.year || '2026'}
                  </span>
                </div>

                {/* Project Cover Image */}
                <div className="relative overflow-hidden border-2 border-[#0c0c0c] bg-[#111111] mb-5 aspect-[16/10]">
                  <img
                    src={proj.coverImage}
                    alt={proj.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Multi-image count badge */}
                  {proj.images && proj.images.length > 1 && (
                    <div className="absolute top-3 right-3 bg-[#0c0c0c] text-[#f8f5ee] font-mono text-[11px] font-bold px-3 py-1 border border-[#f8f5ee] flex items-center gap-1.5 shadow-[2px_2px_0px_#ffd000]">
                      <ImageIcon className="w-3.5 h-3.5 text-[#ffd000]" />
                      {proj.images.length} GALLERY ASSETS
                    </div>
                  )}

                  {/* Client Tag Overlay */}
                  <div className="absolute bottom-3 left-3 bg-[#f8f5ee] text-[#0c0c0c] font-mono text-xs font-bold px-3 py-1 border-2 border-[#0c0c0c] shadow-[2px_2px_0px_#0c0c0c]">
                    CLIENT: {proj.client}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl font-black text-[#0c0c0c] group-hover:text-[#d32222] transition-colors leading-tight mb-3">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-[#0c0c0c] leading-relaxed opacity-90 mb-5">
                  {proj.description}
                </p>

                {/* Deliverables Pills */}
                {proj.deliverables && (
                  <div className="mb-5">
                    <span className="block font-mono text-[11px] font-bold text-[#0c0c0c] uppercase tracking-wider mb-2">
                      KEY DELIVERABLES:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.deliverables.map((deliv, i) => (
                        <span
                          key={i}
                          className="font-mono text-xs bg-[#eee9dc] text-[#0c0c0c] px-2.5 py-0.5 border border-[#0c0c0c] flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#d32222]" /> {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* View Case Study CTA Bar */}
              <div className="pt-4 border-t-2 border-dashed border-[#0c0c0c] flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#0c0c0c] group-hover:underline">
                  OPEN CASE STUDY &amp; GALLERY
                </span>
                <span className="w-8 h-8 bg-[#ffd000] border-2 border-[#0c0c0c] flex items-center justify-center text-[#0c0c0c] group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
