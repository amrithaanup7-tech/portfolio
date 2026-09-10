import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Eye, 
  X 
} from 'lucide-react';
import { BUILDLINK_DATA } from '../data/profile';
import { WebDecoration } from './WebDecoration';
import { soundFx } from '../utils/sound';

export const FeaturedWork: React.FC = () => {
  const project = BUILDLINK_DATA;
  const [showDeckModal, setShowDeckModal] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const totalSlides = 10;
  const slideImages = Array.from({ length: totalSlides }, (_, i) => `/assets/buildlink-slides/slide-${i + 1}.jpg`);

  const openDeckModal = (slideIndex = 0) => {
    soundFx.playClick();
    setCurrentSlide(slideIndex);
    setShowDeckModal(true);
  };

  const closeDeckModal = () => {
    soundFx.playClick();
    setShowDeckModal(false);
  };

  const nextSlide = () => {
    soundFx.playClick();
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    soundFx.playClick();
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="work" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-cream dark:bg-nearblack transition-colors duration-500 overflow-hidden">
      <WebDecoration position="bottom-left" opacity={0.2} />

      <div className="max-w-7xl mx-auto flex flex-col gap-10 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cherry/10 dark:border-blush/10 pb-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blush/30 dark:bg-blush/10 text-cherry dark:text-blush mb-2">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>02 / FEATURED PROJECT</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-cherry dark:text-cream tracking-tight">
              SELECTED{' '}
              <span className="font-serif italic font-normal text-cherry dark:text-blush">
                work.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-nearblack/70 dark:text-cream/70 max-w-xs">
            Product case study: AI-Powered Construction Equipment Rental Marketplace.
          </p>
        </motion.div>

        {/* Unified Concise BuildLink Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border-2 border-cherry/20 dark:border-blush/20 bg-nearblack text-cream shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col gap-6"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cherry/30 via-nearblack to-nearblack opacity-90 pointer-events-none" />
          <div className="absolute inset-0 halftone-overlay pointer-events-none opacity-20" />

          {/* Main Grid: Overview & Pitch Deck Preview */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold bg-blush text-cherry">
                  PRODUCT CASE STUDY
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-semibold border border-blush/30 text-blush">
                  CONSTRUCTION-TECH & AI
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
                  {project.name}
                </h3>
                <p className="text-lg sm:text-xl font-serif italic text-blush mt-1">
                  {project.tagline}
                </p>
              </div>

              <p className="text-base sm:text-lg text-cream leading-relaxed font-normal">
                {project.conciseOverview}
              </p>

              {/* Key Features Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {['Instant Rental Search', 'Digital Contracts', 'AI Route & Match', 'Transparent Pricing'].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-medium bg-cherry/30 text-blush border border-blush/20"
                  >
                    ✦ {chip}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => openDeckModal(0)}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-blush text-cherry font-mono font-bold text-xs sm:text-sm tracking-wider uppercase hover:scale-105 transition-all shadow-lg group"
                >
                  <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>VIEW FULL PITCH DECK ({totalSlides} SLIDES)</span>
                </button>
              </div>
            </div>

            {/* Right: Authentic PDF Slide 1 Thumbnail */}
            <div 
              onClick={() => openDeckModal(0)}
              className="lg:col-span-5 relative group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden border border-blush/30 shadow-xl bg-nearblack">
                <img
                  src="/assets/buildlink-hero.jpg"
                  alt="BuildLink Presentation Deck Slide 1"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nearblack/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-nearblack/90 backdrop-blur-md border border-blush/30 text-xs font-mono text-cream">
                  <span className="text-blush font-bold">CLICK TO EXPAND DECK</span>
                  <span className="text-blush/70 font-semibold">1 / {totalSlides} ↗</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Sleek Metric Strip */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-blush/15 text-center">
            {project.marketStats.map((item) => (
              <div
                key={item.label}
                className="p-3.5 rounded-xl bg-nearblack-surface/90 border border-cherry/30 flex flex-col items-center justify-center"
              >
                <span className="text-xl sm:text-2xl font-display font-extrabold text-blush">
                  {item.stat}
                </span>
                <span className="text-xs sm:text-sm font-mono font-semibold text-cream mt-0.5">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* =========================================================
          INTERACTIVE FULL SLIDE DECK MODAL
      ========================================================= */}
      <AnimatePresence>
        {showDeckModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] bg-nearblack/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
            onClick={closeDeckModal}
          >
            {/* Modal Container */}
            <div 
              className="relative max-w-4xl w-full bg-nearblack rounded-3xl border border-blush/30 overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-cherry/20 border-b border-blush/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blush text-cherry">
                    BUILDLINK PITCH DECK
                  </span>
                  <span className="text-xs font-mono text-cream/70 hidden sm:inline">
                    SLIDE {currentSlide + 1} OF {totalSlides}
                  </span>
                </div>
                <button
                  onClick={closeDeckModal}
                  className="p-1.5 rounded-full bg-nearblack border border-blush/30 text-blush hover:bg-blush hover:text-cherry transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Slide Image */}
              <div className="relative bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
                <img
                  src={slideImages[currentSlide]}
                  alt={`BuildLink Pitch Slide ${currentSlide + 1}`}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />

                {/* Left/Right Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-nearblack/80 border border-blush/30 text-blush hover:bg-blush hover:text-cherry transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-nearblack/80 border border-blush/30 text-blush hover:bg-blush hover:text-cherry transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Footer / Thumbnails Navigation */}
              <div className="p-3 sm:p-4 bg-nearblack border-t border-blush/20 flex items-center justify-between gap-2 overflow-x-auto">
                <div className="flex items-center gap-1.5 sm:gap-2 mx-auto">
                  {slideImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-7 sm:w-8 h-7 sm:h-8 rounded-lg font-mono text-xs font-bold transition-all ${
                        currentSlide === idx
                          ? 'bg-blush text-cherry scale-110 shadow-md'
                          : 'bg-nearblack-surface border border-blush/20 text-blush/70 hover:border-blush'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
