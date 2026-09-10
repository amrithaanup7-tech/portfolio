import React from 'react';
import { motion } from 'framer-motion';
import { Mail, BookOpen, Download, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { GwenCharacter } from './GwenCharacter';
import { WebDecoration } from './WebDecoration';
import { soundFx } from '../utils/sound';
import { ensureAbsoluteUrl } from '../utils/url';

export const ContactSection: React.FC = () => {
  const { contact } = PROFILE;

  const socialButtons = [
    {
      name: 'LinkedIn',
      url: ensureAbsoluteUrl(contact.linkedin),
      detail: 'amritha-anup-79b1a531b',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: ensureAbsoluteUrl(contact.instagram),
      detail: '@amritha.py',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Medium',
      url: ensureAbsoluteUrl(contact.medium),
      detail: '@amrithaanup7',
      icon: BookOpen
    },
    {
      name: 'Email',
      url: `mailto:${contact.email}`,
      detail: contact.email,
      icon: Mail
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-12 bg-nearblack text-cream transition-colors duration-500 overflow-hidden"
    >
      {/* Background Halftone & Web Sketches */}
      <div className="absolute inset-0 halftone-overlay opacity-15 pointer-events-none" />
      <WebDecoration position="top-left" opacity={0.3} />
      <WebDecoration position="bottom-right" opacity={0.3} />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Section Header with Gwen Swing Entrance */}
        <div className="relative">
          {/* Spider-Gwen ultra-smooth physics swing across the headline to the end of the line */}
          <motion.div
            initial={{ x: '-75vw', y: -70, rotate: 28, opacity: 0 }}
            whileInView={{ 
              x: ['-75vw', '-35vw', '-10vw', '0px'], 
              y: [-70, 35, -10, 0], 
              rotate: [28, 0, -18, 0],
              opacity: [0, 1, 1, 1]
            }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ 
              duration: 1.8, 
              times: [0, 0.45, 0.78, 1],
              ease: ['easeInOut', 'easeOut', 'easeOut']
            }}
            onAnimationStart={() => soundFx.playSwing()}
            className="absolute -top-16 sm:-top-20 md:-top-24 right-2 sm:right-6 md:right-10 w-24 sm:w-28 md:w-36 pointer-events-auto z-20"
          >
            {/* Smooth Swinging Web Thread */}
            <motion.div
              initial={{ height: 110, opacity: 0.7, rotate: -20 }}
              animate={{ 
                height: [110, 70, 50, 45], 
                opacity: [0.7, 0.5, 0.3, 0.2],
                rotate: [-20, 0, 12, 0]
              }}
              transition={{ 
                duration: 1.8, 
                times: [0, 0.45, 0.78, 1],
                ease: 'easeInOut' 
              }}
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-transparent via-blush to-blush pointer-events-none origin-top"
            />
            <GwenCharacter pose="hero" interactive={true} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <span className="text-sm font-mono font-semibold tracking-widest text-blush uppercase">
              07 / LET'S CONNECT
            </span>
            
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold text-white tracking-tighter leading-[0.85]">
              WANNA BUILD{' '}
              <span className="font-serif italic font-normal text-blush relative inline-block">
                SOMETHING COOL?
                {/* Animated Web Line Underline */}
                <motion.svg
                  className="absolute bottom-0 left-0 w-full h-4 stroke-blush pointer-events-none"
                  viewBox="0 0 300 20"
                  fill="none"
                >
                  <motion.path
                    d="M 0 10 Q 75 0, 150 10 T 300 10"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </motion.svg>
              </span>
            </h2>

            <p className="text-xl sm:text-2xl font-normal text-cream max-w-2xl mt-4 leading-relaxed">
              Whether you want to discuss AI internships, Python projects, website ideas, or just talk tech — my inbox is always open.
            </p>
          </motion.div>
        </div>

        {/* Social Links Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialButtons.map((btn, idx) => {
            const IconComponent = btn.icon;
            return (
              <motion.a
                key={btn.name}
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => soundFx.playClick()}
                className="p-6 rounded-3xl bg-nearblack-surface border-2 border-cherry/40 hover:border-blush transition-all duration-300 flex flex-col justify-between gap-6 group shadow-lg"
                data-cursor={`OPEN ${btn.name.toUpperCase()} ↗`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-cherry/40 text-blush group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-blush group-hover:text-blush group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <div>
                  <p className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-blush transition-colors">
                    {btn.name}
                  </p>
                  <p className="text-sm font-mono text-blush truncate mt-1 font-semibold">
                    {btn.detail}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom Resume Download & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-cherry/30 pt-10 text-sm font-mono text-blush font-medium">
          <div className="flex items-center gap-4">
            <a
              href={ensureAbsoluteUrl(contact.resumeUrl)}
              download="amritha-anup-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-blush text-nearblack font-bold hover:scale-105 transition-transform"
              data-cursor="RESUME ↓"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME ↓</span>
            </a>
          </div>

          <p className="text-center md:text-right">
            © 2026 AMRITHA — DESIGNED & BUILT WITH CURIOSITY 🕷
          </p>
        </div>
      </div>
    </section>
  );
};
