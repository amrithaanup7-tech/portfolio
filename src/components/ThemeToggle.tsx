import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { soundFx } from '../utils/sound';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('amritha_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;
    soundFx.playWebSwoosh();
    setIsAnimating(true);

    setTimeout(() => {
      const nextDark = !isDark;
      setIsDark(nextDark);
      if (nextDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('amritha_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('amritha_theme', 'light');
      }

      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 200);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border border-cherry/20 dark:border-blush/20 bg-cream-card/80 dark:bg-nearblack-card/80 text-cherry dark:text-blush hover:scale-105 transition-all duration-300 shadow-sm overflow-hidden"
        aria-label="Toggle Theme"
        title="Toggle Theme Mode"
      >
        <span className="relative z-10 flex items-center gap-1.5">
          {isDark ? (
            <>
              <Moon className="w-3.5 h-3.5 text-blush" />
              <span>CHERRY / DARK</span>
            </>
          ) : (
            <>
              <Sun className="w-3.5 h-3.5 text-cherry" />
              <span>BLUSH / LIGHT</span>
            </>
          )}
        </span>
      </button>

      {/* Spider-Web Wipe Transition Effect */}
      {isAnimating && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden">
          <div className="w-[150vw] h-[150vh] bg-cherry/90 dark:bg-blush/90 rounded-full animate-ping duration-500 flex items-center justify-center opacity-80">
            <svg className="w-96 h-96 opacity-40 stroke-cream dark:stroke-cherry animate-spin" viewBox="0 0 100 100">
              <path d="M50 0 L50 100 M0 50 L100 50 M14.6 14.6 L85.4 85.4 M14.6 85.4 L85.4 14.6" strokeWidth="1"/>
              <circle cx="50" cy="50" r="30" fill="none" strokeWidth="1"/>
              <circle cx="50" cy="50" r="15" fill="none" strokeWidth="1"/>
            </svg>
          </div>
        </div>
      )}
    </>
  );
};
