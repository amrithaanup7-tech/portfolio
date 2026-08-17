import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { GwenCharacter } from './GwenCharacter';
import { WebDecoration } from './WebDecoration';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-12 bg-cream-card dark:bg-nearblack-surface border-y border-cherry/10 dark:border-blush/10 transition-colors duration-500 overflow-hidden"
    >
      <WebDecoration position="top-right" opacity={0.2} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column — Amritha Presentation Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border-2 border-cherry/20 dark:border-blush/20 shadow-2xl bg-nearblack group">
            <img
              src={PROFILE.images.presentation}
              alt="Amritha presenting at EXCAPE.AI"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
            />
            {/* Halftone & Blush Accent Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-cherry/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute inset-0 paper-grain opacity-30 pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-cream/95 dark:bg-nearblack/95 backdrop-blur-md border border-cherry/20 dark:border-blush/20 flex items-center justify-between">
              <div>
                <p className="text-xs font-mono font-bold text-cherry dark:text-blush">AMRITHA ANUP</p>
                <p className="text-[11px] font-mono text-nearblack/70 dark:text-cream/70">AI Intern @ EXCAPE.AI</p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-blush text-cherry font-bold">
                BUILDING
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column — Editorial About Text & Hanging Gwen */}
        <div className="lg:col-span-7 flex flex-col gap-8 relative">
          {/* Requirement #13: Spider-Gwen hanging upside-down from heading */}
          <motion.div
            initial={{ y: -120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            className="absolute -top-24 right-4 md:right-12 w-28 md:w-36 pointer-events-auto z-20"
          >
            <GwenCharacter pose="hanging" interactive={true} />
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono tracking-widest text-cherry dark:text-blush uppercase block mb-2">
              01 / ABOUT AMRITHA
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold text-cherry dark:text-cream tracking-tight leading-none">
              WH<span className="text-blush">O</span>'S{' '}
              <span className="font-serif italic font-normal text-cherry dark:text-blush">
                behind the code?
              </span>
            </h2>
          </motion.div>

          {/* Story Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 text-base md:text-lg text-nearblack/90 dark:text-cream/90 font-light leading-relaxed"
          >
            <p className="border-l-2 border-cherry dark:border-blush pl-6 italic text-cherry/90 dark:text-blush font-serif text-xl">
              "I am still learning, but I am actively building."
            </p>

            {PROFILE.aboutBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </motion.div>

          {/* Personality / Interest Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            {['Python Basics', 'AI Workflows', 'Web Platforms', 'Data Curiosity', 'Creative & Technical'].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono border border-cherry/20 dark:border-blush/20 bg-cream dark:bg-nearblack text-cherry dark:text-blush"
                >
                  #{tag}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
