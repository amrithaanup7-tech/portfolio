import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Code2, GraduationCap, Briefcase } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { GwenCharacter } from './GwenCharacter';
import { WebDecoration } from './WebDecoration';
import { Y2kCrescentSparkle } from './Y2kElements';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-cream-card dark:bg-nearblack-surface border-y border-cherry/10 dark:border-blush/10 transition-colors duration-500 overflow-hidden"
    >
      <WebDecoration position="top-right" opacity={0.2} />

      {/* Spider-Gwen hanging upside-down from section ceiling */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        className="absolute top-0 right-4 sm:right-8 md:right-16 w-20 sm:w-24 md:w-28 pointer-events-auto z-20"
      >
        <GwenCharacter pose="hanging" interactive={true} />
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column — Editorial Developer Identity & Credentials Card (No personal photo) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border-2 border-cherry/20 dark:border-blush/20 shadow-2xl bg-nearblack text-cream p-8 sm:p-10 flex flex-col justify-between gap-8 group">
            {/* Background Ambient Glow & Halftone */}
            <div className="absolute inset-0 bg-gradient-to-br from-cherry/40 via-nearblack to-nearblack opacity-90 pointer-events-none" />
            <div className="absolute inset-0 halftone-overlay pointer-events-none opacity-20" />

            <div className="relative z-10 flex flex-col gap-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between text-sm font-mono font-semibold text-blush">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>DEV PROFILE</span>
                </span>
                <span>01 / IDENTITY</span>
              </div>

              {/* Spider-Gwen Character Mascot */}
              <div className="w-48 h-48 mx-auto my-2 relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-cherry/30 blur-2xl animate-pulse" />
                <GwenCharacter pose="peek" interactive={true} className="w-full h-full scale-110" />
              </div>

              {/* Identity Details */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                  Amritha Anup
                </h3>
                <p className="text-base font-mono text-blush mt-1 font-medium">
                  AI Developer Intern @ EXCAPE.AI
                </p>
              </div>

              {/* Credential Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-nearblack-surface/90 border border-cherry/30 flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-blush shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-blush/80 font-bold uppercase tracking-wider block">ROLE</span>
                    <span className="text-sm font-mono font-bold text-cream">AI Developer Intern</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-nearblack-surface/90 border border-cherry/30 flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-blush shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-blush/80 font-bold uppercase tracking-wider block">EDUCATION</span>
                    <span className="text-sm font-mono font-bold text-cream">BCA Degree</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-nearblack-surface/90 border border-cherry/30 flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-blush shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-blush/80 font-bold uppercase tracking-wider block">DAILY FOCUS</span>
                    <span className="text-sm font-mono font-bold text-cream">Python 3.x</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-nearblack-surface/90 border border-cherry/30 flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-blush shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-blush/80 font-bold uppercase tracking-wider block">STATUS</span>
                    <span className="text-sm font-mono font-bold text-blush">Actively Building</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="relative z-10 pt-4 border-t border-blush/20 flex items-center justify-between text-xs font-mono font-semibold text-blush/80">
              <span>EXPLORING CODE & AI</span>
              <span>EST. 2026</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column — Editorial About Text */}
        <div className="lg:col-span-7 flex flex-col gap-8 relative">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono font-semibold tracking-widest text-cherry dark:text-blush uppercase block mb-2">
                01 / ABOUT AMRITHA
              </span>
              <Y2kCrescentSparkle size={44} opacity={0.3} className="text-cherry dark:text-blush hidden sm:block" />
            </div>
            
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-cherry dark:text-cream tracking-tight leading-none">
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
            className="flex flex-col gap-6 text-lg sm:text-xl text-nearblack dark:text-cream font-normal leading-relaxed"
          >
            <p className="border-l-2 border-cherry dark:border-blush pl-6 italic text-cherry dark:text-blush font-serif text-2xl sm:text-3xl">
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
            {['Python Foundations', 'AI Workflows', 'Product Thinking', 'Data Curiosity', 'Creative & Technical'].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-medium border border-cherry/20 dark:border-blush/20 bg-cream dark:bg-nearblack text-cherry dark:text-blush"
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
