import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/sound';

interface IntroProps {
  onComplete: () => void;
}

export const OpeningExperience: React.FC<IntroProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      setIsVisible(false);
      return;
    }

    soundFx.playWebSwoosh();

    // Clean, fast 1.5s sequence
    const t1 = setTimeout(() => setStep(1), 300);  // PORTFOLIO / 2026
    const t2 = setTimeout(() => {
      setStep(2);                                  // AMRITHA
    }, 700);
    const t3 = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    onComplete();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100000] bg-cherry flex flex-col items-center justify-center overflow-hidden cursor-pointer"
        onClick={handleSkip}
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0, 
          scale: 1.02, 
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
        }}
      >
        {/* Draw Web Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
          <motion.path
            d="M -100,50 Q 300,300 1200,50"
            stroke="#E8B7C2"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <motion.path
            d="M 1200,800 Q 600,200 -100,600"
            stroke="#E8B7C2"
            strokeWidth="1.5"
            strokeDasharray="6,4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </svg>

        {/* Pink Motion Blur Sweep */}
        <motion.div
          className="absolute w-[200vw] h-[60vh] bg-blush/30 blur-3xl -rotate-12 pointer-events-none"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />

        {/* Content Container */}
        <div className="relative z-10 text-center px-4">
          {step >= 1 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blush font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-2"
            >
              PORTFOLIO / 2026
            </motion.p>
          )}

          {step >= 2 && (
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold text-cream tracking-tighter"
            >
              AMRITHA
            </motion.h1>
          )}
        </div>

        {/* Skip note */}
        <div className="absolute bottom-6 right-8 text-blush/60 font-mono text-[10px] tracking-widest uppercase">
          CLICK ANYWHERE TO SKIP ↗
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
