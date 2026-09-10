import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { GwenCharacter } from './GwenCharacter';
import { WebDecoration } from './WebDecoration';

export const ExperienceJourney: React.FC = () => {
  const { experience, education, journeySteps } = PROFILE;

  return (
    <section id="journey" className="relative py-28 px-6 md:px-12 bg-cream-card dark:bg-nearblack-surface transition-colors duration-500 overflow-hidden border-t border-cherry/10 dark:border-blush/10">
      <WebDecoration position="bottom-right" opacity={0.2} />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2"
        >
          <span className="text-xs font-mono tracking-widest text-cherry dark:text-blush uppercase">
            05 / EXPERIENCE & EDUCATION
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold text-cherry dark:text-cream tracking-tight">
            MY{' '}
            <span className="font-serif italic font-normal text-cherry dark:text-blush">
              journey.
            </span>
          </h2>
        </motion.div>

        {/* Top Cards Grid: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Experience Card (AI Intern @ EXCAPE.AI) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-cherry text-cream border-2 border-cherry-light shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold bg-blush text-cherry flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" />
                  {experience.status}
                </span>
                <span className="text-sm font-mono text-blush font-semibold">{experience.period}</span>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white">
                  {experience.role}
                </h3>
                <p className="text-xl font-serif italic text-blush font-normal">
                  {experience.company}
                </p>
              </div>

              <p className="text-base sm:text-lg text-cream leading-relaxed border-t border-blush/20 pt-4 font-normal">
                {experience.description}
              </p>

              <div className="flex flex-col gap-2 pt-2">
                <span className="text-xs font-mono tracking-widest text-blush font-bold uppercase">
                  PRACTICAL EXPOSURE & RESPONSIBILITIES:
                </span>
                <ul className="flex flex-col gap-2 text-sm sm:text-base text-cream font-normal">
                  {experience.learnings.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-blush shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 text-xs font-mono text-blush/80 font-semibold flex items-center justify-between border-t border-blush/20 mt-6">
              <span>TITLE FACTUAL: AI DEVELOPER INTERN</span>
              <span>EXCAPE.AI</span>
            </div>
          </motion.div>

          {/* Education Card (BCA Degree) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 p-8 md:p-10 rounded-3xl bg-cream dark:bg-nearblack border-2 border-cherry/20 dark:border-blush/20 shadow-md relative overflow-hidden flex flex-col justify-between"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold border border-cherry/30 dark:border-blush/30 bg-cherry/5 dark:bg-blush/5 text-cherry dark:text-blush flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  DEGREE
                </span>
                <span className="text-sm font-mono text-cherry/80 dark:text-blush/80 font-semibold">{education.year}</span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-cherry dark:text-cream">
                  {education.degree}
                </h3>
                <p className="text-lg font-serif italic text-cherry/90 dark:text-blush mt-1">
                  {education.institution}
                </p>
              </div>

              <p className="text-base text-nearblack dark:text-cream leading-relaxed border-t border-cherry/10 dark:border-blush/10 pt-4 font-normal">
                {education.note}
              </p>
            </div>

            {/* Spider Gwen Sitting Accent */}
            <div className="relative pt-6 flex items-center justify-between">
              <span className="text-xs font-mono text-cherry/80 dark:text-blush/80 font-semibold">
                GRADUATE ACADEMIC FOUNDATION
              </span>
              <div className="w-16 h-16">
                <GwenCharacter pose="hero" interactive={true} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connected Journey Visual Flow */}
        <div className="pt-8 border-t border-cherry/10 dark:border-blush/10">
          <span className="text-sm font-mono font-bold tracking-widest text-cherry dark:text-blush uppercase block mb-6 text-center">
            THE TIMELINE OF GROWTH
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {journeySteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-cream dark:bg-nearblack border border-cherry/20 dark:border-blush/20 flex flex-col gap-2 relative group hover:border-cherry dark:hover:border-blush transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-extrabold text-cherry dark:text-blush">
                    {step.num}
                  </span>
                  {idx < journeySteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-cherry/40 dark:text-blush/40 hidden lg:block" />
                  )}
                </div>
                <p className="font-display font-bold text-lg text-cherry dark:text-cream">
                  {step.label}
                </p>
                <p className="text-sm font-mono text-nearblack/80 dark:text-cream/80 font-medium">
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
