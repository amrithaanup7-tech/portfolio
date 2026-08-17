import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { GwenCharacter } from './GwenCharacter';
import { soundFx } from '../utils/sound';

export const GwenReveal: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const handleMouseEnter = () => {
    if (!isRevealed) {
      soundFx.playWebSwoosh();
      setIsRevealed(true);
    }
  };

  const handleMouseLeave = () => {
    if (isRevealed) {
      soundFx.playClick();
      setIsRevealed(false);
    }
  };

  const handleTap = () => {
    soundFx.playWebSwoosh();
    setIsRevealed(!isRevealed);
  };

  return (
    <div
      className="relative w-full max-w-sm md:max-w-md aspect-[4/5] mx-auto rounded-3xl overflow-hidden border-2 border-cherry/20 dark:border-blush/20 bg-nearblack shadow-2xl group cursor-pointer select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTap}
      data-cursor={isRevealed ? 'AMRITHA ✨' : 'REVEAL 🕷'}
    >
      {/* Background Pink Motion Blur / Halftone Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-cherry via-nearblack to-cherry/40 opacity-80" />
      <div className="absolute inset-0 halftone-overlay pointer-events-none" />

      {/* Spider-Gwen Default Visual */}
      <AnimatePresence initial={false}>
        {!isRevealed && (
          <motion.div
            key="gwen-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute inset-0 p-8 flex flex-col items-center justify-between z-10"
          >
            {/* Top Badge */}
            <div className="w-full flex items-center justify-between text-xs font-mono text-blush/80">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blush animate-pulse" />
                CHARACTER LAYER
              </span>
              <span>01 / IDENTITY</span>
            </div>

            {/* Gwen Illustration */}
            <div className="w-64 md:w-72 h-64 md:h-72 my-auto flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full bg-cherry/40 blur-xl animate-pulse" />
              <GwenCharacter pose="hero" interactive={false} className="w-full h-full" />
            </div>

            {/* Bottom Reveal Instruction */}
            <div className="w-full text-center py-2 px-4 rounded-full border border-blush/30 bg-cherry/60 backdrop-blur-sm text-cream font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2 group-hover:scale-105 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-blush" />
              <span className="hidden md:inline">HOVER TO REVEAL AMRITHA</span>
              <span className="inline md:hidden">TAP TO REVEAL AMRITHA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blush" />
            </div>
          </motion.div>
        )}

        {/* Real Amritha Portrait Revealed */}
        {isRevealed && (
          <motion.div
            key="amritha-card"
            initial={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute inset-0 z-20 overflow-hidden"
          >
            {/* Amritha Authentic Photo */}
            <img
              src={PROFILE.images.heroPortrait}
              alt="Amritha - Real Portrait"
              className="w-full h-full object-cover object-center filter contrast-[1.05]"
            />

            {/* Editorial Overlay Gradients & Grain */}
            <div className="absolute inset-0 bg-gradient-to-t from-cherry/90 via-transparent to-nearblack/40" />
            <div className="absolute inset-0 paper-grain pointer-events-none opacity-40" />

            {/* Corner Hand-Drawn Web Framing */}
            <svg className="absolute top-0 right-0 w-32 h-32 stroke-blush opacity-70 pointer-events-none" viewBox="0 0 100 100" fill="none">
              <path d="M100 0 L0 100 M100 0 L30 100 M100 0 L100 70" strokeWidth="1" strokeDasharray="3 2" />
              <path d="M50 0 Q60 30 100 40 M20 0 Q40 50 100 60" strokeWidth="1" />
            </svg>

            {/* Bottom Label Card */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1 text-cream">
              <div className="flex items-center justify-between text-[11px] font-mono text-blush tracking-widest">
                <span>REAL PORTRAIT</span>
                <span>AMRITHA</span>
              </div>
              <p className="font-display font-extrabold text-2xl tracking-tight text-white">
                Amritha Anup
              </p>
              <p className="text-xs font-mono text-blush/90">
                AI Intern @ EXCAPE.AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Web Border Glow */}
      <div className="absolute inset-0 rounded-3xl border border-blush/20 pointer-events-none group-hover:border-blush/60 transition-colors duration-300" />
    </div>
  );
};
