import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Code2, GraduationCap, Briefcase } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { GwenCharacter } from './GwenCharacter';
import { WebDecoration } from './WebDecoration';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-cream-card dark:bg-nearblack-surface border-y border-cherry/10 dark:border-blush/10 transition-colors duration-500 overflow-hidden"
    >
      <WebDecoration position="top-right" opacity={0.2} />

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
            <div className="absolute inset-0 bg-gradient-to-br from-cherry/50 via-nearblack to-nearblack opacity-90 pointer-events-none" />
            <div className="absolute inset-0 halftone-overlay pointer-events-none opacity-40" />

            <div className="relative z-10 flex flex-col gap-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between text-xs font-mono text-blush">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
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
                <h3 className="text-3xl font-display font-extrabold text-white tracking-tight">
                  Amritha Anup
                </h3>
                <p className="text-sm font-mono text-blush/90 mt-1">
                  AI Intern @ EXCAPE.AI
                </p>
              </div>

              {/* Credential Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-nearblack-surface/90 border border-cherry/30 flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-blush shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-blush/70 uppercase block">ROLE</span>
                    <span className="text-xs font-mono font-bold text-cream">AI Intern</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-nearblack-surface/90 border border-cherry/30 flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-blush shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-blush/70 uppercase block">EDUCATION</span>
                    <span className="text-xs font-mono font-bold text-cream">BCA Degree</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-nearblack-surface/90 border border-cherry/30 flex items-center gap-3">
                  <Terminal className="w-4 h-4 text-blush shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-blush/70 uppercase block">DAILY FOCUS</span>
                    <span className="text-xs font-mono font-bold text-cream">Python 3.x</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-nearblack-surface/90 border border-cherry/30 flex items-center gap-3">
                  <Code2 className="w-4 h-4 text-blush shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-blush/70 uppercase block">STATUS</span>
                    <span className="text-xs font-mono font-bold text-blush">Actively Building</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="relative z-10 pt-4 border-t border-blush/20 flex items-center justify-between text-[11px] font-mono text-blush/70">
              <span>EXPLORING CODE & AI</span>
              <span>EST. 2026</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column — Editorial About Text & Hanging Gwen */}
        <div className="lg:col-span-7 flex flex-col gap-8 relative">
          {/* Spider-Gwen hanging upside-down */}
          <motion.div
            initial={{ y: -120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            className="hidden lg:block absolute -top-24 right-0 lg:-right-4 w-24 md:w-32 pointer-events-auto z-20"
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
            className="flex flex-col gap-6 text-base md:text-lg text-nearblack/90 dark:text-cream/90 font-light leading-relaxed"
          >
            <p className="border-l-2 border-cherry dark:border-blush pl-6 italic text-cherry/90 dark:text-blush font-serif text-xl sm:text-2xl">
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
