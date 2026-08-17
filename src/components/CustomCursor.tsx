import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {/* Primary Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-cherry dark:bg-blush rounded-full mix-blend-difference"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isHovered ? 2.5 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.2 }}
      />

      {/* Trailing Web Ring with Prompt Text */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cherry/60 dark:border-blush/60 flex items-center justify-center bg-cherry/10 dark:bg-blush/10 backdrop-blur-[1px]"
        animate={{
          x: position.x - (isHovered ? 36 : 18),
          y: position.y - (isHovered ? 36 : 18),
          width: isHovered ? 72 : 36,
          height: isHovered ? 72 : 36,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-cherry dark:text-blush uppercase animate-pulse text-center leading-none px-1">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
