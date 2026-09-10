import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { WebDecoration } from './WebDecoration';
import { soundFx } from '../utils/sound';
import { ensureAbsoluteUrl } from '../utils/url';

export const WritingSection: React.FC = () => {
  return (
    <section className="relative py-28 px-6 md:px-12 bg-cream dark:bg-nearblack transition-colors duration-500 overflow-hidden">
      <WebDecoration position="top-right" opacity={0.2} />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cherry/10 dark:border-blush/10 pb-8"
        >
          <div>
            <span className="text-sm font-mono font-semibold tracking-widest text-cherry dark:text-blush uppercase block mb-2">
              06 / ARTICLES & REFLECTIONS
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold text-cherry dark:text-cream tracking-tight">
              WRITING{' '}
              <span className="font-serif italic font-normal text-cherry dark:text-blush">
                & thoughts.
              </span>
            </h2>
          </div>
          <a
            href={ensureAbsoluteUrl(PROFILE.contact.medium)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-cherry/20 dark:border-blush/20 text-xs sm:text-sm font-mono font-bold text-cherry dark:text-blush hover:bg-cherry hover:text-cream dark:hover:bg-blush dark:hover:text-nearblack transition-all w-max"
            data-cursor="MEDIUM ↗"
          >
            <BookOpen className="w-4 h-4" />
            <span>VIEW ON MEDIUM ↗</span>
          </a>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFILE.articles.map((article, idx) => (
            <motion.a
              key={article.title}
              href={ensureAbsoluteUrl(article.url)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => soundFx.playClick()}
              className="p-7 rounded-3xl bg-cream-card dark:bg-nearblack-surface border-2 border-cherry/15 dark:border-blush/15 hover:border-cherry dark:hover:border-blush transition-all duration-300 shadow-md flex flex-col justify-between group"
              data-cursor="READ ↗"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-cherry/80 dark:text-blush/80 font-semibold">
                  <span>{article.topic}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-2xl font-display font-extrabold text-cherry dark:text-cream group-hover:text-cherry-dark dark:group-hover:text-blush transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-base sm:text-lg text-nearblack dark:text-cream leading-relaxed font-normal">
                  "{article.snippet}"
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-cherry/10 dark:border-blush/10 pt-4 mt-6 text-sm font-mono text-cherry dark:text-blush font-bold group-hover:translate-x-1 transition-transform">
                <span>READ ARTICLE</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
