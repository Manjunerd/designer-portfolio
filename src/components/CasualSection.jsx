import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Grid, Maximize2, Tag, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function CasualSection({ projects = [], onOpenLightbox }) {
  const [expanded, setExpanded] = useState(true);
  const [filter, setFilter] = useState('ALL');

  // Extract unique tags for filter tabs
  const allTags = ['ALL', ...new Set(projects.flatMap((p) => p.tags || []))].slice(0, 7);

  const filteredProjects =
    filter === 'ALL'
      ? projects
      : projects.filter((p) => (p.tags || []).includes(filter));

  return (
    <section id="casual" className="section-container border-t-3 border-[#0c0c0c] pt-16 pb-20">
      {/* Section Stamp Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="section-stamp-badge">
            SECTION 01 // [ {projects.length} EXPERIMENTAL ITEMS ]
          </div>
          <h2 className="section-title">CASUAL DESIGNING</h2>
          <p className="section-subtitle">
            POSTERS · RISOGRAPH PRINTS · ZINES · ALBUM ART · TYPE EXPERIMENTS
          </p>
        </div>

        {/* Action Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="btn-poster self-start md:self-auto"
        >
          {expanded ? (
            <>
              COLLAPSE GALLERY <ChevronUp className="w-5 h-5" />
            </>
          ) : (
            <>
              VIEW CASUAL WORK <ChevronDown className="w-5 h-5" />
            </>
          )}
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Filter Tags Navigation Bar */}
            <div className="flex flex-wrap items-center gap-2 mb-8 p-3 bg-[#f8f5ee] border-3 border-[#0c0c0c] shadow-[4px_4px_0px_#0c0c0c]">
              <span className="font-mono text-xs font-bold text-[#0c0c0c] mr-2 flex items-center gap-1">
                <Grid className="w-3.5 h-3.5 text-[#d32222]" /> FILTER TAGS:
              </span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-3 py-1 font-mono text-xs font-bold transition-all border-2 border-[#0c0c0c] ${
                    filter === tag
                      ? 'bg-[#d32222] text-[#f8f5ee] shadow-[2px_2px_0px_#0c0c0c]'
                      : 'bg-[#eee9dc] text-[#0c0c0c] hover:bg-[#ffd000]'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Editorial / Masonry Columns Layout */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredProjects.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                  className="break-inside-avoid"
                >
                  <div
                    onClick={() => onOpenLightbox(projects, index)}
                    className="poster-box group cursor-pointer overflow-hidden p-3"
                  >
                    {/* Corner Accent */}
                    <div className="flex items-center justify-between font-mono text-[10px] font-bold text-[#0c0c0c] mb-2 px-1">
                      <span className="bg-[#ffd000] px-2 py-0.5 border border-[#0c0c0c]">
                        NO. {String(item.id).padStart(2, '0')}
                      </span>
                      <span className="text-[#d32222]">{item.year || '2026'}</span>
                    </div>

                    {/* Image Box */}
                    <div className="relative overflow-hidden border-2 border-[#0c0c0c] bg-[#111111]">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-auto object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500"
                      />

                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 bg-[#0c0c0c]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4 text-center">
                        <span className="w-10 h-10 bg-[#ffd000] border-2 border-[#0c0c0c] flex items-center justify-center text-[#0c0c0c] shadow-[3px_3px_0px_#0c0c0c]">
                          <Maximize2 className="w-5 h-5" />
                        </span>
                        <span className="font-display text-sm font-black text-[#f8f5ee] tracking-wider">
                          ENLARGE ARTWORK
                        </span>
                      </div>
                    </div>

                    {/* Artwork Details Footer */}
                    <div className="mt-3 px-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="tag-badge !text-[10px] !py-0.5">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-black text-[#0c0c0c] leading-tight group-hover:text-[#d32222] transition-colors mt-1">
                        {item.title}
                      </h3>

                      <p className="font-sans text-xs text-[#0c0c0c] opacity-80 line-clamp-2 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
