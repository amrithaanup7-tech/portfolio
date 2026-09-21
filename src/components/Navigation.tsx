import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Gamepad2 } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { ThemeToggle } from './ThemeToggle';
import { SoundToggle } from './SoundToggle';
import { soundFx } from '../utils/sound';

interface NavigationProps {
  onOpenArcade?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenArcade }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#work' },
    { name: 'LAB', href: '#lab' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'JOURNEY', href: '#journey' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    soundFx.playWebSwoosh();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (href: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      if (href === '#' || href === '' || !href) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-cream/90 dark:bg-nearblack/90 backdrop-blur-md border-b border-cherry/10 dark:border-blush/10 shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={() => handleNavClick('#')}
            className="group font-display font-extrabold text-xl md:text-2xl tracking-tighter text-cherry dark:text-cream flex items-center gap-2"
            data-cursor="AMRITHA 🕷"
          >
            <span className="w-3 h-3 rounded-full bg-cherry dark:bg-blush group-hover:scale-125 transition-transform duration-300" />
            <span>AMRITHA</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-mono tracking-wider font-semibold text-nearblack dark:text-cream">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-cherry dark:hover:text-blush transition-colors relative group py-1"
                data-cursor="GO ↗"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cherry dark:bg-blush group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Arcade Minigame Trigger */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenArcade?.();
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono font-bold bg-cherry/10 dark:bg-blush/15 text-cherry dark:text-blush border border-cherry/20 dark:border-blush/30 hover:bg-cherry hover:text-cream dark:hover:bg-blush dark:hover:text-nearblack transition-all shadow-sm"
              data-cursor="PLAY 🎮"
              title="Play Spider-Gwen Arcade Minigame"
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>ARCADE</span>
            </button>

            <SoundToggle />
            <ThemeToggle />
            
            {/* Resume Button */}
            <a
              href={PROFILE.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-mono font-bold bg-cherry text-cream dark:bg-blush dark:text-nearblack hover:opacity-90 hover:scale-105 transition-all shadow-md"
              data-cursor="RESUME ↗"
            >
              <Download className="w-4 h-4" />
              <span>RESUME</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2.5">
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenArcade?.();
              }}
              className="p-2 rounded-full border border-cherry/20 dark:border-blush/20 bg-cream-card dark:bg-nearblack-card text-cherry dark:text-blush"
              title="Play Arcade Game"
            >
              <Gamepad2 className="w-5 h-5" />
            </button>
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full border border-cherry/20 dark:border-blush/20 bg-cream-card dark:bg-nearblack-card text-cherry dark:text-blush"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-cherry dark:bg-nearblack text-cream flex flex-col justify-between p-8 pt-28 lg:hidden"
          >
            {/* Background Web Sketch */}
            <div className="absolute top-10 right-4 opacity-20 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 100 100" stroke="#E8B7C2" fill="none">
                <circle cx="50" cy="50" r="45" strokeWidth="0.5"/>
                <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" strokeWidth="0.5"/>
              </svg>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-4xl font-display font-extrabold text-cream dark:text-blush hover:text-blush tracking-tight flex items-center justify-between border-b border-cream/10 pb-3"
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-sm opacity-60">0{idx + 1}</span>
                </motion.a>
              ))}

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenArcade?.();
                }}
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-blush text-cherry font-mono font-bold text-sm tracking-wider shadow-lg mt-2"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>PLAY GWEN ARCADE MINIGAME</span>
              </motion.button>
            </nav>

            <div className="flex flex-col gap-4 border-t border-cream/20 pt-6">
              <div className="flex items-center justify-between">
                <SoundToggle />
                <a
                  href={PROFILE.contact.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-blush text-cherry"
                >
                  <Download className="w-4 h-4" />
                  <span>RESUME</span>
                </a>
              </div>
              <p className="text-xs font-mono text-blush/70 text-center">
                AMRITHA — AI DEVELOPER INTERN & PYTHON LEARNER
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
