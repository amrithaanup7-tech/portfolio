import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  AlertTriangle, 
  Cpu, 
  Coins, 
  MapPin, 
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

        {/* Unified BuildLink Showcase Card (Single Page Format) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border-2 border-cherry/20 dark:border-blush/20 bg-nearblack text-cream shadow-2xl p-6 sm:p-10 md:p-12 flex flex-col gap-10"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cherry/30 via-nearblack to-nearblack opacity-90 pointer-events-none" />
          <div className="absolute inset-0 halftone-overlay pointer-events-none opacity-20" />

          {/* Top Row: Hero Overview & Slide Image */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blush text-cherry">
                  PRODUCT CASE STUDY
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono border border-blush/30 text-blush">
                  CONSTRUCTION-TECH
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                  {project.name}
                </h3>
                <p className="text-base sm:text-lg font-serif italic text-blush mt-1">
                  {project.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-cream/90 font-light leading-relaxed">
                {project.conciseOverview}
              </p>

              {/* View Full Pitch Deck Button */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => openDeckModal(0)}
                  className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-blush text-cherry font-mono font-bold text-xs tracking-wider uppercase hover:scale-105 transition-all shadow-lg group"
                >
                  <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>VIEW PITCH DECK ({totalSlides} SLIDES)</span>
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
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-nearblack/90 backdrop-blur-md border border-blush/30 text-[11px] font-mono text-cream">
                  <span className="text-blush font-bold">CLICK TO EXPAND DECK</span>
                  <span className="text-blush/70">1 / 10 ↗</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row: Market Potential Metrics */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-blush/15">
            {project.marketStats.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-2xl bg-nearblack-surface/90 border border-cherry/30 flex flex-col justify-between"
              >
                <div className="text-xl sm:text-2xl font-display font-extrabold text-blush">
                  {item.stat}
                </div>
                <div className="mt-1">
                  <p className="text-xs font-mono font-bold text-cream">
                    {item.label}
                  </p>
                  <p className="text-[10px] text-cream/60 leading-tight">
                    {item.sublabel}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Grid: 3 Clean Compact Product Pillars */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Pillar 1: Problem & 4-Step Solution */}
            <div className="p-5 rounded-2xl bg-nearblack-surface/90 border border-cherry/30 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-blush font-bold uppercase">
                <AlertTriangle className="w-4 h-4 text-blush shrink-0" />
                <span>Problem & 4-Step Flow</span>
              </div>
              <p className="text-xs text-cream/80 font-light leading-relaxed">
                Replaces chaotic phone calls, hidden pricing & unverified availability with a 4-step digital workflow:
              </p>
              <div className="flex flex-col gap-1.5 pt-1 text-[11px] font-mono text-cream/90">
                <div className="flex items-center gap-2 p-1.5 rounded-lg bg-cherry/20 border border-cherry/40">
                  <span className="text-blush font-bold">01</span>
                  <span>Search & Filter by Location</span>
                </div>
                <div className="flex items-center gap-2 p-1.5 rounded-lg bg-cherry/20 border border-cherry/40">
                  <span className="text-blush font-bold">02</span>
                  <span>List Equipment with Verified Rates</span>
                </div>
                <div className="flex items-center gap-2 p-1.5 rounded-lg bg-cherry/20 border border-cherry/40">
                  <span className="text-blush font-bold">03</span>
                  <span>Book & Pay with Digital Contracts</span>
                </div>
                <div className="flex items-center gap-2 p-1.5 rounded-lg bg-cherry/20 border border-cherry/40">
                  <span className="text-blush font-bold">04</span>
                  <span>Deliver Directly to Site</span>
                </div>
              </div>
            </div>

            {/* Pillar 2: Categories & AI Capabilities */}
            <div className="p-5 rounded-2xl bg-nearblack-surface/90 border border-cherry/30 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-blush font-bold uppercase">
                <Cpu className="w-4 h-4 text-blush shrink-0" />
                <span>Categories & AI Roadmap</span>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {project.equipmentCategories.map((c) => (
                  <span key={c} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-cherry/20 text-blush border border-blush/20">
                    {c}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-1.5 pt-1 text-[11px] font-mono">
                <div className="p-2 rounded-lg bg-nearblack border border-blush/20 text-cream/90">
                  <span className="text-blush font-bold block text-[10px]">AI MATCHING & ROUTING</span>
                  <span className="text-[10px] text-cream/70 font-light">Nearest machines & logistics cost minimization.</span>
                </div>
                <div className="p-2 rounded-lg bg-nearblack border border-blush/20 text-cream/90">
                  <span className="text-blush font-bold block text-[10px]">PRICE & DEMAND OPTIMIZATION</span>
                  <span className="text-[10px] text-cream/70 font-light">Competitive rental rates & predictive demand forecasting.</span>
                </div>
              </div>
            </div>

            {/* Pillar 3: Business Model & Rollout */}
            <div className="p-5 rounded-2xl bg-nearblack-surface/90 border border-cherry/30 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-blush font-bold uppercase">
                <Coins className="w-4 h-4 text-blush shrink-0" />
                <span>Business Model & Rollout</span>
              </div>
              
              <div className="flex flex-col gap-1 text-[11px] font-mono text-cream/80">
                <span className="text-blush font-bold">5 Revenue Streams:</span>
                <span className="text-[10px] text-cream/70">
                  • 10–15% Booking Commission<br/>
                  • Premium Owner Listings & Subscriptions<br/>
                  • Logistics & Insurance Partnerships
                </span>
              </div>

              <div className="pt-2 border-t border-blush/20 flex flex-col gap-1 text-[11px] font-mono">
                <span className="text-blush font-bold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Expansion Phases:
                </span>
                <span className="text-[10px] text-cream/70">
                  Phase 1: Kerala (Kochi · Trivandrum · Calicut)<br/>
                  Phase 2: South India → Phase 3: Pan-India
                </span>
              </div>
            </div>

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
