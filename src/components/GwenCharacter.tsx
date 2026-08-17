import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { soundFx } from '../utils/sound';

interface GwenProps {
  pose?: 'hero' | 'hanging' | 'peek' | 'sit' | 'swing';
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export const GwenCharacter: React.FC<GwenProps> = ({
  pose = 'hero',
  className = '',
  onClick,
  interactive = true,
}) => {
  const getPoseSrc = () => {
    switch (pose) {
      case 'hanging':
        return PROFILE.images.gwenHanging;
      case 'peek':
        return PROFILE.images.gwenPeek;
      case 'hero':
      default:
        return PROFILE.images.gwenHero;
    }
  };

  const handleInteraction = () => {
    soundFx.playSwing();
    if (onClick) onClick();
  };

  return (
    <motion.div
      className={`relative inline-block select-none ${interactive ? 'cursor-pointer' : ''} ${className}`}
      onClick={handleInteraction}
      data-cursor={interactive ? 'SWING 🕷' : ''}
      whileHover={interactive ? { scale: 1.05, rotate: [0, -3, 3, 0] } : {}}
      whileTap={interactive ? { scale: 0.95 } : {}}
      transition={{ duration: 0.3 }}
    >
      <img
        src={getPoseSrc()}
        alt="Spider-Gwen Character Theme"
        className="w-full h-auto object-contain drop-shadow-xl"
        loading="lazy"
      />
    </motion.div>
  );
};
