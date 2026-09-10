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
      <AnimatePresence mode="wait">
        {!isRevealed && (
          <motion.div
            key="gwen-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 p-8 flex flex-col items-center justify-between z-10 bg-nearblack"
          >
            {/* Top Badge */}
            <div className="w-full flex items-center justify-between text-sm font-mono text-blush font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blush animate-pulse" />
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
            <div className="w-full text-center py-3 px-5 rounded-full border border-blush/30 bg-cherry/90 backdrop-blur-sm text-cream font-mono text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 group-hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-blush" />
              <span className="hidden md:inline">HOVER OR TAP TO REVEAL AMRITHA</span>
              <span className="inline md:hidden">TAP TO REVEAL AMRITHA</span>
              <span className="w-2 h-2 rounded-full bg-blush" />
            </div>
          </motion.div>
        )}

        {/* Real Amritha Portrait Revealed */}
        {isRevealed && (
          <motion.div
            key="amritha-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 z-20 overflow-hidden bg-nearblack"
          >
            {/* Amritha Authentic Photo */}
            <img
              src={PROFILE.images.heroPortrait}
              alt="Amritha - Real Portrait"
              className="w-full h-full object-cover object-[48%_20%] filter brightness-[1.02] contrast-[1.03]"
            />

            {/* Subtle bottom gradient for readable label */}
            <div className="absolute inset-0 bg-gradient-to-t from-nearblack/95 via-nearblack/30 to-transparent pointer-events-none" />

            {/* Corner Hand-Drawn Web Framing */}
            <svg className="absolute top-0 right-0 w-28 h-28 stroke-blush/60 pointer-events-none" viewBox="0 0 100 100" fill="none">
              <path d="M100 0 L0 100 M100 0 L30 100 M100 0 L100 70" strokeWidth="1" strokeDasharray="3 2" />
              <path d="M50 0 Q60 30 100 40 M20 0 Q40 50 100 60" strokeWidth="1" />
            </svg>

            {/* Bottom Label Card */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1 text-cream">
              <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-blush tracking-wider font-bold">
                <span>REAL PORTRAIT</span>
                <span>AMRITHA</span>
              </div>
              <p className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-white">
                Amritha Anup
              </p>
              <p className="text-sm font-mono text-blush font-semibold">
                AI Developer Intern @ EXCAPE.AI
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
