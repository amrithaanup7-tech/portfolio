import React from 'react';
import { motion } from 'framer-motion';

interface Y2kElementProps {
  className?: string;
  size?: number;
  opacity?: number;
  animate?: boolean;
  delay?: number;
}

/**
 * 01. 4-point Starburst with Tilted Orbital Ring & Satellite Dot
 */
export const Y2kOrbitalStar: React.FC<Y2kElementProps> = ({
  className = '',
  size = 48,
  opacity = 0.35,
  animate = true,
  delay = 0,
}) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      initial={animate ? { y: 0, rotate: 0 } : undefined}
      animate={
        animate
          ? {
              y: [0, -6, 0],
              rotate: [0, 3, 0],
            }
          : undefined
      }
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {/* Tilted Orbital Ring */}
      <ellipse
        cx="50"
        cy="50"
        rx="42"
        ry="14"
        transform="rotate(-22 50 50)"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="140 10"
      />
      {/* Satellite Node on Orbit */}
      <circle cx="84" cy="38" r="2.5" fill="currentColor" />

      {/* Primary 4-point Starburst */}
      <path
        d="M50 15 Q50 50 15 50 Q50 50 50 85 Q50 50 85 50 Q50 50 50 15Z"
        fill="currentColor"
      />
      {/* Central Thin Cross Accent */}
      <line x1="50" y1="8" x2="50" y2="92" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <line x1="8" y1="50" x2="92" y2="50" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    </motion.svg>
  );
};

/**
 * 02. Minimalist Planet with Orbital Ring
 */
export const Y2kPlanetRing: React.FC<Y2kElementProps> = ({
  className = '',
  size = 54,
  opacity = 0.35,
  animate = true,
  delay = 0.5,
}) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      initial={animate ? { y: 0, rotate: 0 } : undefined}
      animate={
        animate
          ? {
              y: [0, 6, 0],
              rotate: [0, -4, 0],
            }
          : undefined
      }
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {/* Planet Sphere Outline */}
      <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1.4" />
      
      {/* Organic Planet Shading Fill */}
      <path
        d="M26 40 C28 32, 40 24, 52 24 C62 24, 72 32, 74 44 C66 48, 54 44, 42 56 C34 64, 30 72, 34 76 C26 68, 24 52, 26 40 Z"
        fill="currentColor"
        opacity="0.25"
      />

      {/* Orbital Ring */}
      <ellipse
        cx="50"
        cy="50"
        rx="44"
        ry="15"
        transform="rotate(-26 50 50)"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Satellite Node */}
      <circle cx="78" cy="34" r="2.2" fill="currentColor" />
    </motion.svg>
  );
};

/**
 * 03. Crescent Moon with 4-point Sparkle
 */
export const Y2kCrescentSparkle: React.FC<Y2kElementProps> = ({
  className = '',
  size = 46,
  opacity = 0.35,
  animate = true,
  delay = 1,
}) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      initial={animate ? { scale: 1, rotate: 0 } : undefined}
      animate={
        animate
          ? {
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0],
            }
          : undefined
      }
      transition={{
        duration: 6.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {/* Bold Crescent Moon */}
      <path
        d="M74 24 C56 26, 42 40, 44 60 C46 76, 60 86, 76 82 C52 94, 28 78, 30 52 C32 28, 54 16, 74 24 Z"
        fill="currentColor"
      />

      {/* Embedded 4-point Starburst */}
      <path
        d="M62 38 Q62 52 48 52 Q62 52 62 66 Q62 52 76 52 Q62 52 62 38Z"
        fill="currentColor"
      />
      {/* Thin needle spine */}
      <line x1="62" y1="30" x2="62" y2="74" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    </motion.svg>
  );
};

/**
 * 04. Circle Star Seal with Orbit Node
 */
export const Y2kStarSeal: React.FC<Y2kElementProps> = ({
  className = '',
  size = 48,
  opacity = 0.35,
  animate = true,
  delay = 0.3,
}) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      initial={animate ? { rotate: 0 } : undefined}
      animate={
        animate
          ? {
              rotate: [0, 360],
            }
          : undefined
      }
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: 'linear',
        delay,
      }}
    >
      {/* Perimeter Circle */}
      <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="1.2" />
      {/* Perimeter Node */}
      <circle cx="75" cy="25" r="2.5" fill="currentColor" />

      {/* Internal Starburst */}
      <path
        d="M50 24 Q50 50 24 50 Q50 50 50 76 Q50 50 76 50 Q50 50 50 24Z"
        fill="currentColor"
      />
      {/* Thin Cross */}
      <line x1="50" y1="14" x2="50" y2="86" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <line x1="14" y1="50" x2="86" y2="50" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    </motion.svg>
  );
};

/**
 * 05. Double Starburst with Ascending Orbit Line
 */
export const Y2kDoubleOrbit: React.FC<Y2kElementProps> = ({
  className = '',
  size = 56,
  opacity = 0.35,
  animate = true,
  delay = 0.7,
}) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      initial={animate ? { y: 0 } : undefined}
      animate={
        animate
          ? {
              y: [0, -5, 0],
            }
          : undefined
      }
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {/* Ascending Swoop Ellipse Orbit */}
      <path
        d="M10 65 Q 40 25, 88 38 Q 65 65, 20 62"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="82" cy="38" r="2.5" fill="currentColor" />

      {/* Primary Big Starburst */}
      <path
        d="M48 20 Q48 45 28 45 Q48 45 48 70 Q48 45 68 45 Q48 45 48 20Z"
        fill="currentColor"
      />
      <line x1="48" y1="10" x2="48" y2="80" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />

      {/* Secondary Smaller Starburst */}
      <path
        d="M72 40 Q72 54 60 54 Q72 54 72 68 Q72 54 84 54 Q72 54 72 40Z"
        fill="currentColor"
      />
      <line x1="72" y1="34" x2="72" y2="74" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
    </motion.svg>
  );
};
