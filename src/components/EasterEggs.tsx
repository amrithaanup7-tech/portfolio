import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/sound';

export const EasterEggs: React.FC = () => {
  const [spiders, setSpiders] = useState([
    { id: 1, top: '25%', left: '8%', ranAway: false },
    { id: 2, top: '65%', right: '5%', ranAway: false },
    { id: 3, top: '85%', left: '12%', ranAway: false },
  ]);

  const handleSpiderClick = (id: number) => {
    soundFx.playWebSwoosh();
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#670626', '#E8B7C2', '#FFFFFF'],
    });

    setSpiders((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ranAway: true } : s))
    );
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {spiders.map(
        (spider) =>
          !spider.ranAway && (
            <motion.div
              key={spider.id}
              onClick={() => handleSpiderClick(spider.id)}
              style={{
                top: spider.top,
                left: spider.left,
                right: spider.right,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.4, rotate: [0, -10, 10, 0] }}
              className="absolute pointer-events-auto cursor-pointer p-2 select-none group"
              data-cursor="CLICK ME 🕷"
              title="Click the tiny spider!"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-cherry dark:stroke-blush fill-cherry/20">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 8 L8 3 M12 8 L16 3 M12 16 L8 21 M12 16 L16 21 M8 12 L2 10 M8 12 L2 14 M16 12 L22 10 M16 12 L22 14" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </motion.div>
          )
      )}
    </div>
  );
};
