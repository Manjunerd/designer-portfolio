import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Tag, Layers, CheckCircle2, Sparkles } from 'lucide-react';

export default function Lightbox({ isOpen, items = [], currentIndex = 0, onClose, onNavigate }) {
  const [subImageIndex, setSubImageIndex] = useState(0);

  const currentItem = items[currentIndex] || null;

  // Reset sub-image index when current item changes
  useEffect(() => {
    setSubImageIndex(0);
  }, [currentIndex]);

  // Keyboard navigation & ESC handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, items.length]);

  if (!isOpen || !currentItem) return null;

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(nextIdx);
  };

  // Determine active display image (support multi-image pro gallery)
  const displayImages = currentItem.images || [currentItem.image || currentItem.coverImage];
  const activeImage = displayImages[subImageIndex] || displayImages[0];

  return (
    <AnimatePresence>
      <div
        className="lightbox-backdrop"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl w-full bg-[#f8f5ee] border-4 border-[#0c0c0c] shadow-[16px_24px_50px_rgba(0,0,0,0.8)] max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button Top Right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2.5 bg-[#d32222] text-[#f8f5ee] border-2 border-[#0c0c0c] shadow-[3px_3px_0px_#0c0c0c] hover:bg-[#0c0c0c] hover:text-[#ffd000] transition-colors"
            title="Close Lightbox (Esc)"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left / Top Image Area */}
          <div className="md:w-3/5 bg-[#0c0c0c] p-4 md:p-8 flex flex-col items-center justify-center relative min-h-[300px] md:min-h-[500px]">
            {/* Main Image */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden border-2 border-[#f8f5ee]/20">
              <img
                src={activeImage}
                alt={currentItem.title}
                className="max-h-[60vh] md:max-h-[70vh] w-auto max-w-full object-contain shadow-2xl transition-all duration-300"
              />
            </div>

            {/* Previous / Next Arrows Overlay */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-[#ffd000] text-[#0c0c0c] border-2 border-[#0c0c0c] shadow-[3px_3px_0px_#0c0c0c] hover:bg-[#f8f5ee] transition-all"
              title="Previous Item (Left Arrow)"
              aria-label="Previous artwork"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-[#ffd000] text-[#0c0c0c] border-2 border-[#0c0c0c] shadow-[3px_3px_0px_#0c0c0c] hover:bg-[#f8f5ee] transition-all"
              title="Next Item (Right Arrow)"
              aria-label="Next artwork"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Sub-Image Thumbnails if multiple images exist */}
            {displayImages.length > 1 && (
              <div className="flex gap-2 mt-4 z-20">
                {displayImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSubImageIndex(idx)}
                    className={`w-14 h-14 border-2 overflow-hidden transition-all ${
                      subImageIndex === idx
                        ? 'border-[#ffd000] scale-105 shadow-[2px_2px_0px_#ffd000]'
                        : 'border-[#f8f5ee]/40 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right / Bottom Info Area */}
          <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-none bg-[#f8f5ee]">
            <div>
              {/* Counter & Category */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b-2 border-[#0c0c0c]">
                <span className="font-mono text-xs font-bold text-[#f8f5ee] bg-[#0c0c0c] px-3 py-1 border border-[#0c0c0c]">
                  ITEM {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
                <span className="tag-badge">
                  {currentItem.category || 'Artwork'}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl md:text-4xl font-black text-[#0c0c0c] leading-tight mb-3">
                {currentItem.title}
              </h2>

              {/* Client or Year metadata */}
              {(currentItem.client || currentItem.year) && (
                <div className="font-mono text-xs text-[#d32222] font-bold mb-4 flex flex-wrap gap-3">
                  {currentItem.client && <span>CLIENT: {currentItem.client}</span>}
                  {currentItem.year && <span>YEAR: {currentItem.year}</span>}
                </div>
              )}

              {/* Description */}
              <p className="font-sans text-sm md:text-base text-[#0c0c0c] leading-relaxed mb-6">
                {currentItem.description}
              </p>

              {/* Deliverables if pro project */}
              {currentItem.deliverables && (
                <div className="mb-6 bg-[#eee9dc] p-3.5 border-2 border-[#0c0c0c]">
                  <span className="block font-mono text-xs font-bold text-[#0c0c0c] mb-2 uppercase">
                    PROJECT DELIVERABLES:
                  </span>
                  <div className="space-y-1">
                    {currentItem.deliverables.map((deliv, i) => (
                      <div key={i} className="font-mono text-xs text-[#0c0c0c] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d32222]" /> {deliv}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {currentItem.tags && (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {currentItem.tags.map((t, idx) => (
                    <span key={idx} className="font-mono text-[11px] bg-[#0c0c0c] text-[#f8f5ee] px-2.5 py-0.5 border border-[#0c0c0c]">
                      #{t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Lightbox Footer Navigation Help */}
            <div className="pt-4 border-t-2 border-dashed border-[#0c0c0c] flex items-center justify-between font-mono text-[11px] text-[#0c0c0c]/80">
              <span>NAVIGATE WITH ARROW KEYS</span>
              <span className="bg-[#ffd000] px-2 py-0.5 border border-[#0c0c0c] font-bold">
                PRESS ESC TO CLOSE
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
