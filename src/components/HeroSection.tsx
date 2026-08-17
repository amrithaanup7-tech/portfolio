import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { GwenReveal } from './GwenReveal';
import { WebDecoration } from './WebDecoration';
import { soundFx } from '../utils/sound';

export const HeroSection: React.FC = () => {
  const handleScrollTo = (id: string) => {
    soundFx.playClick();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden bg-cream dark:bg-nearblack transition-colors duration-500">
      {/* Background Textures */}
      <WebDecoration position="top-left" opacity={0.25} />
      <WebDecoration position="top-right" opacity={0.25} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column — Editorial Typography & Info */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-6">
          {/* Status Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cherry/20 dark:border-blush/20 bg-cream-card dark:bg-nearblack-card text-cherry dark:text-blush font-mono text-xs w-max"
          >
            <Sparkles className="w-3.5 h-3.5 text-cherry dark:text-blush animate-spin" />
            <span>STATUS: LEARNING & BUILDING</span>
          </motion.div>

          {/* Main Giant Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-display font-extrabold text-cherry dark:text-cream leading-[0.85] tracking-tighter">
              AMRITHA
            </h1>
            <p className="font-serif italic text-2xl md:text-4xl text-cherry/80 dark:text-blush mt-2">
              AI Intern <span className="font-sans not-italic text-sm opacity-50 px-1">×</span> Python Learner <span className="font-sans not-italic text-sm opacity-50 px-1">×</span> Builder
            </p>
          </motion.div>

          {/* Subtext Company Reference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 text-xs font-mono tracking-widest text-nearblack/70 dark:text-cream/70"
          >
            <span className="w-2 h-2 rounded-full bg-cherry dark:bg-blush" />
            <span>{PROFILE.companySubtext}</span>
          </motion.div>

          {/* Hero Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-nearblack/90 dark:text-cream/90 max-w-xl font-light leading-relaxed"
          >
            "{PROFILE.heroDescription}"
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo('#work')}
              className="flex items-center gap-3 px-7 py-4 rounded-full bg-cherry dark:bg-blush text-cream dark:text-nearblack font-mono font-bold text-xs tracking-wider uppercase hover:scale-105 transition-all duration-300 shadow-lg group"
              data-cursor="WORK ↘"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo('#about')}
              className="flex items-center gap-2 px-7 py-4 rounded-full border border-cherry/30 dark:border-blush/30 text-cherry dark:text-blush font-mono font-semibold text-xs tracking-wider uppercase hover:bg-cherry/5 dark:hover:bg-blush/5 transition-all"
              data-cursor="ABOUT ↗"
            >
              <span>ABOUT ME</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column — Signature Gwen to Amritha Reveal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <GwenReveal />
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-60 text-xs font-mono text-cherry dark:text-blush">
        <span className="tracking-widest uppercase">SCROLL TO SWING</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-6 rounded-full border border-cherry dark:border-blush flex justify-center pt-1"
        >
          <div className="w-1 h-1.5 rounded-full bg-cherry dark:bg-blush" />
        </motion.div>
      </div>
    </section>
  );
};
