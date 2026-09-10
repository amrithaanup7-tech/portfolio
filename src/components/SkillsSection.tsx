import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { GwenCharacter } from './GwenCharacter';
import { WebDecoration } from './WebDecoration';
import { Y2kStarSeal } from './Y2kElements';

export const SkillsSection: React.FC = () => {
  const { currentlyLearning, justStarted, foundations, nextPath } = PROFILE.skills;

  return (
    <section id="skills" className="relative py-28 px-6 md:px-12 bg-cream dark:bg-nearblack transition-colors duration-500 overflow-hidden">
      <WebDecoration position="top-left" opacity={0.25} />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 relative"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-cherry dark:text-blush uppercase font-semibold">
              04 / HONEST SKILL MAP
            </span>
            <Y2kStarSeal size={32} opacity={0.35} className="text-cherry dark:text-blush" />
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-extrabold text-cherry dark:text-cream tracking-tight">
            CURRENTLY{' '}
            <span className="font-serif italic font-normal text-cherry dark:text-blush">
              learning.
            </span>
          </h2>
          <p className="text-base md:text-lg font-serif italic text-cherry/90 dark:text-blush">
            No fake percentage bars. Just transparent, genuine documentation of my growing skill set.
          </p>
        </motion.div>

        {/* Learning Journey Progression Vector Path */}
        <div className="relative">
          {/* Connecting SVG Web Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block opacity-30 stroke-cherry dark:stroke-blush" fill="none">
            <motion.path
              d="M 150,80 Q 400,20 650,140 T 1100,120"
              strokeWidth="2"
              strokeDasharray="6,4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </svg>

          {/* Spider-Gwen Mascot perched above the skills grid */}
          <div className="absolute -top-14 right-4 sm:right-8 w-16 md:w-20 hidden md:block z-20 pointer-events-auto">
            <GwenCharacter pose="hero" interactive={true} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 01 — CURRENTLY LEARNING (PYTHON) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl bg-cherry text-cream border-2 border-cherry-light shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-15">
                <span className="font-mono text-7xl font-bold">01</span>
              </div>
              <span className="text-xs sm:text-sm font-mono tracking-wider text-blush uppercase block mb-3 font-bold">
                {currentlyLearning.title}
              </span>
              <h3 className="text-3xl font-display font-extrabold text-white mb-2">
                {currentlyLearning.skills[0].name}
              </h3>
              <p className="text-sm font-mono text-blush mb-4 font-semibold">
                {currentlyLearning.skills[0].level}
              </p>
              <p className="text-base text-cream leading-relaxed border-t border-blush/20 pt-4 font-normal">
                {currentlyLearning.description}
              </p>
            </motion.div>

            {/* 02 — JUST STARTED (NUMPY) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-3xl bg-cream-card dark:bg-nearblack-surface border-2 border-cherry/20 dark:border-blush/20 shadow-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 text-cherry dark:text-blush">
                <span className="font-mono text-7xl font-bold">02</span>
              </div>
              <span className="text-xs sm:text-sm font-mono tracking-wider text-cherry dark:text-blush uppercase block mb-3 font-bold">
                {justStarted.title}
              </span>
              <h3 className="text-3xl font-display font-extrabold text-cherry dark:text-cream mb-2">
                {justStarted.skills[0].name}
              </h3>
              <p className="text-sm font-mono text-cherry dark:text-blush mb-4 font-semibold">
                {justStarted.skills[0].level}
              </p>
              <p className="text-base text-nearblack dark:text-cream leading-relaxed border-t border-cherry/10 dark:border-blush/10 pt-4 font-normal">
                {justStarted.description}
              </p>
            </motion.div>

            {/* 03 — FOUNDATIONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-3xl bg-cream-card dark:bg-nearblack-surface border-2 border-cherry/20 dark:border-blush/20 shadow-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 text-cherry dark:text-blush">
                <span className="font-mono text-7xl font-bold">03</span>
              </div>
              <span className="text-xs sm:text-sm font-mono tracking-wider text-cherry dark:text-blush uppercase block mb-3 font-bold">
                {foundations.title}
              </span>
              <div className="flex flex-col gap-2 mb-4">
                {foundations.skills.map((s) => (
                  <span key={s.name} className="text-xl font-display font-bold text-cherry dark:text-cream">
                    {s.name}
                  </span>
                ))}
              </div>
              <p className="text-base text-nearblack dark:text-cream leading-relaxed border-t border-cherry/10 dark:border-blush/10 pt-4 font-normal">
                {foundations.description}
              </p>
            </motion.div>

            {/* 04 — NEXT UP (DATA & AI/ML) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-3xl bg-nearblack text-cream border-2 border-cherry/30 dark:border-blush/30 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 text-blush">
                <span className="font-mono text-7xl font-bold">04</span>
              </div>
              <span className="text-xs sm:text-sm font-mono tracking-wider text-blush uppercase block mb-3 font-bold">
                {nextPath.title}
              </span>
              <div className="flex flex-col gap-1.5 mb-3">
                {nextPath.skills.map((s) => (
                  <span key={s.name} className="text-lg font-display font-bold text-blush">
                    → {s.name}
                  </span>
                ))}
              </div>
              <p className="text-sm font-mono text-blush mb-2 font-medium">Honest state: Aspiring / Planned</p>
              <p className="text-base text-cream leading-relaxed border-t border-blush/20 pt-3 font-normal">
                {nextPath.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
