import React from 'react';

interface WebProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'inline';
  className?: string;
  variant?: 'heart' | 'organic' | 'radial';
  opacity?: number;
}

export const WebDecoration: React.FC<WebProps> = ({
  position = 'top-left',
  className = '',
  variant = 'organic',
  opacity = 0.3,
}) => {
  const getPosClass = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0 -translate-x-4 -translate-y-4';
      case 'top-right':
        return 'top-0 right-0 translate-x-4 -translate-y-4 scale-x-[-1]';
      case 'bottom-left':
        return 'bottom-0 left-0 -translate-x-4 translate-y-4 scale-y-[-1]';
      case 'bottom-right':
        return 'bottom-0 right-0 translate-x-4 translate-y-4 scale-[-1]';
      case 'center':
        return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
      default:
        return '';
    }
  };

  return (
    <div
      className={`absolute pointer-events-none transition-opacity duration-500 z-0 ${getPosClass()} ${className}`}
      style={{ opacity }}
    >
      {variant === 'heart' ? (
        /* Organic Heart-shaped sketchy web SVG */
        <svg width="240" height="240" viewBox="0 0 200 200" fill="none" className="stroke-cherry dark:stroke-blush">
          <path
            d="M100 60 C80 20, 20 40, 40 90 C60 140, 100 170, 100 170 C100 170, 140 140, 160 90 C180 40, 120 20, 100 60 Z"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <path d="M100 60 L100 170" strokeWidth="1" />
          <path d="M40 90 L160 90" strokeWidth="1" />
          <path d="M60 55 C80 80, 120 80, 140 55" strokeWidth="1.2" />
          <path d="M45 110 C75 135, 125 135, 155 110" strokeWidth="1.2" />
          <path d="M75 145 C90 155, 110 155, 125 145" strokeWidth="1" />
        </svg>
      ) : variant === 'radial' ? (
        /* Clean radial web for section titles */
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="stroke-cherry dark:stroke-blush">
          <path d="M0 0 L200 200 M200 0 L0 200 M100 0 L100 200 M0 100 L200 100" strokeWidth="0.8" strokeDasharray="3 3"/>
          <path d="M100 30 Q140 40 170 100 Q140 160 100 170 Q40 160 30 100 Q40 40 100 30 Z" strokeWidth="1.2"/>
          <path d="M100 60 Q125 70 140 100 Q125 130 100 140 Q75 130 60 100 Q75 70 100 60 Z" strokeWidth="1"/>
        </svg>
      ) : (
        /* Hand-drawn organic corner web sketch */
        <svg width="260" height="260" viewBox="0 0 200 200" fill="none" className="stroke-cherry dark:stroke-blush">
          <path d="M0 0 L200 180" strokeWidth="1.5" />
          <path d="M0 0 L180 60" strokeWidth="1.2" />
          <path d="M0 0 L60 180" strokeWidth="1.2" />
          <path d="M0 0 L140 140" strokeWidth="1" strokeDasharray="5 2" />

          {/* Imperfect sketchy web arcs */}
          <path d="M30 10 Q35 25 10 30" strokeWidth="1.2" />
          <path d="M60 20 Q70 50 20 60" strokeWidth="1.2" />
          <path d="M100 35 Q115 85 35 100" strokeWidth="1.5" />
          <path d="M140 48 Q160 120 48 140" strokeWidth="1.2" />
          <path d="M180 60 Q205 160 60 180" strokeWidth="1.5" />
        </svg>
      )}
    </div>
  );
};
