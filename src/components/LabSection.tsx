import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { GwenCharacter } from './GwenCharacter';
import { WebDecoration } from './WebDecoration';
import { soundFx } from '../utils/sound';

export const LabSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const filters = ['ALL', 'BUILT', 'EXPERIMENT', 'LEARNING'];

  const filteredItems = filter === 'ALL'
    ? PROFILE.labItems
    : PROFILE.labItems.filter((item) => item.status === filter);

  return (
    <section id="lab" className="relative py-28 px-6 md:px-12 bg-cream-card dark:bg-nearblack-surface transition-colors duration-500 overflow-hidden border-t border-cherry/10 dark:border-blush/10">
      <WebDecoration position="top-right" opacity={0.2} />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-cherry dark:text-blush uppercase block mb-2">
              03 / DEVELOPER NOTEBOOK
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold text-cherry dark:text-cream tracking-tight">
              THE{' '}
              <span className="font-serif italic font-normal text-cherry dark:text-blush">
                lab.
              </span>
            </h2>
            <p className="text-sm md:text-base font-serif italic text-cherry/80 dark:text-blush/90 mt-2">
              Small builds. Experiments. Things I'm learning by making.
            </p>
          </div>

          {/* Filter Status Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => {
                  soundFx.playClick();
                  setFilter(f);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  filter === f
                    ? 'bg-cherry text-cream dark:bg-blush dark:text-nearblack font-bold shadow-md'
                    : 'bg-cream dark:bg-nearblack text-cherry dark:text-blush border border-cherry/20 dark:border-blush/20 hover:border-cherry'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Notebook Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Peeking Gwen on top of the first card */}
          <div className="absolute -top-12 right-6 w-20 md:w-24 z-20 pointer-events-auto">
            <GwenCharacter pose="peek" interactive={true} />
          </div>

          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-7 rounded-3xl bg-cream dark:bg-nearblack border-2 border-cherry/15 dark:border-blush/15 hover:border-cherry/50 dark:hover:border-blush/50 transition-all duration-300 shadow-md group"
              data-cursor="NOTEBOOK 📓"
            >
              {/* Tape Effect Decorative Banner */}
              <div className="absolute -top-3 left-8 w-24 h-6 bg-blush/40 dark:bg-cherry/40 backdrop-blur-sm -rotate-2 border border-cherry/20 dark:border-blush/20" />

              {/* Top Meta */}
              <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-cherry/80 dark:text-blush/80 mb-4 pt-2">
                <span className="font-bold">{item.code}</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold border border-cherry/30 dark:border-blush/30 bg-cherry/5 dark:bg-blush/5 text-cherry dark:text-blush">
                  {item.status}
                </span>
              </div>

              {/* Item Title */}
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-cherry dark:text-cream mb-3 group-hover:text-cherry-dark dark:group-hover:text-blush transition-colors">
                {item.title}
              </h3>

              {/* What I Tried */}
              <div className="flex flex-col gap-1.5 mb-4">
                <span className="text-xs font-mono tracking-widest text-cherry/80 dark:text-blush/80 uppercase font-bold">
                  WHAT I TRIED:
                </span>
                <p className="text-base sm:text-lg text-nearblack dark:text-cream leading-relaxed font-normal">
                  {item.whatITried}
                </p>
              </div>

              {/* What I Learned */}
              <div className="flex flex-col gap-1.5 mb-6 p-4 rounded-2xl bg-cream-card dark:bg-nearblack-card border border-cherry/10 dark:border-blush/10">
                <span className="text-xs font-mono tracking-widest text-cherry dark:text-blush font-bold uppercase">
                  WHAT I LEARNED:
                </span>
                <p className="text-base sm:text-lg text-nearblack dark:text-cream font-serif italic">
                  "{item.whatILearned}"
                </p>
              </div>

              {/* Technology Tag */}
              <div className="flex items-center justify-between border-t border-cherry/10 dark:border-blush/10 pt-4 text-xs sm:text-sm font-mono text-cherry/90 dark:text-blush/90 font-medium">
                <span>TECH: {item.technology}</span>
                <span className="text-xs text-cherry/70 dark:text-blush/70 font-semibold">ENTRY #{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
