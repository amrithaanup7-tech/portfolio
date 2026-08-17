import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Sparkles, BookOpen } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { WebDecoration } from './WebDecoration';
import { soundFx } from '../utils/sound';
import { ensureAbsoluteUrl } from '../utils/url';

export const FeaturedWork: React.FC = () => {
  const project = PROFILE.featuredWork;

  return (
    <section id="work" className="relative py-28 px-6 md:px-12 bg-cream dark:bg-nearblack transition-colors duration-500 overflow-hidden">
      <WebDecoration position="bottom-left" opacity={0.25} />

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
            <span className="text-xs font-mono tracking-widest text-cherry dark:text-blush uppercase block mb-2">
              02 / FEATURED CASE STUDY
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold text-cherry dark:text-cream tracking-tight">
              SELECTED{' '}
              <span className="font-serif italic font-normal text-cherry dark:text-blush">
                work.
              </span>
            </h2>
          </div>
          <p className="text-xs font-mono text-nearblack/70 dark:text-cream/70 max-w-xs">
            A genuine case study documenting what I am currently creating and learning.
          </p>
        </motion.div>

        {/* BUILDLINK Case Study Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border-2 border-cherry/20 dark:border-blush/20 bg-nearblack text-cream shadow-2xl group cursor-pointer"
          data-cursor="VIEW BUILDLINK ↗"
          onClick={() => soundFx.playWebSwoosh()}
        >
          {/* Card Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cherry/50 via-nearblack to-cherry/20 opacity-90" />
          <div className="absolute inset-0 halftone-overlay pointer-events-none" />

          <div className="relative z-10 p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Status Header */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-blush text-cherry flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  STATUS: {project.status}
                </span>
                <span className="text-xs font-mono text-blush/70">
                  {project.role}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight group-hover:text-blush transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm md:text-base font-serif italic text-blush/90 mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Problem & Idea Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-nearblack-surface/90 border border-cherry/30">
                  <span className="text-[10px] font-mono text-blush/70 tracking-widest uppercase block mb-1">
                    THE PROBLEM
                  </span>
                  <p className="text-xs font-light text-cream/90 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-nearblack-surface/90 border border-cherry/30">
                  <span className="text-[10px] font-mono text-blush/70 tracking-widest uppercase block mb-1">
                    THE IDEA
                  </span>
                  <p className="text-xs font-light text-cream/90 leading-relaxed">
                    {project.idea}
                  </p>
                </div>
              </div>

              {/* What I Built & What I Learned */}
              <div className="flex flex-col gap-3 p-4 rounded-2xl bg-cherry/20 border border-cherry/40">
                <div className="flex items-center gap-2 text-xs font-mono text-blush font-bold">
                  <Code2 className="w-4 h-4" />
                  <span>WHAT I BUILT & LEARNING</span>
                </div>
                <p className="text-xs text-cream/90 font-light">
                  {project.whatIBuilt}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-blush/80 pt-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Key take-away: {project.whatILearned}</span>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-nearblack-surface border border-blush/30 text-blush"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-2">
                {project.githubUrl && (
                  <a
                    href={ensureAbsoluteUrl(project.githubUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-xs font-mono text-cream hover:text-blush transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>GITHUB ↗</span>
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' ? (
                  <a
                    href={ensureAbsoluteUrl(project.liveUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-xs font-mono text-cream hover:text-blush transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LIVE DEMO ↗</span>
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-xs font-mono text-blush/60 cursor-default">
                    <ExternalLink className="w-4 h-4 opacity-50" />
                    <span>LIVE DEMO (IN PROGRESS)</span>
                  </span>
                )}
              </div>
            </div>

            {/* Right Screenshot Showcase */}
            <div className="lg:col-span-5 relative group-hover:scale-102 transition-transform duration-500">
              <div className="relative rounded-2xl overflow-hidden border border-blush/30 shadow-xl bg-nearblack">
                <img
                  src={project.image}
                  alt="BUILDLINK Project Mockup"
                  className="w-full h-auto object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nearblack via-transparent to-transparent opacity-50" />
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-[10px] font-mono bg-cherry/80 text-cream border border-blush/30">
                  BUILDLINK PROTO V1
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
