import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Cpu, 
  Coins, 
  Target, 
  Compass, 
  ShieldCheck, 
  Layers, 
  MapPin, 
  ChevronRight
} from 'lucide-react';
import { BUILDLINK_DATA } from '../data/profile';
import { WebDecoration } from './WebDecoration';

export const FeaturedWork: React.FC = () => {
  const project = BUILDLINK_DATA;

  return (
    <section id="work" className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-cream dark:bg-nearblack transition-colors duration-500 overflow-hidden">
      <WebDecoration position="bottom-left" opacity={0.2} />
      <WebDecoration position="top-right" opacity={0.15} />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 relative z-10">
        
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-cherry/10 dark:border-blush/10 pb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blush/30 dark:bg-blush/10 text-cherry dark:text-blush mb-3">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>02 / FEATURED PRODUCT CASE STUDY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-cherry dark:text-cream tracking-tight">
              FEATURED{' '}
              <span className="font-serif italic font-normal text-cherry dark:text-blush">
                project.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-nearblack/70 dark:text-cream/70 max-w-sm">
            A comprehensive marketplace product study exploring real-world construction tech, user workflows, AI matching, and scalable business architecture.
          </p>
        </motion.div>

        {/* =========================================================
            1. HERO / PROJECT INTRODUCTION CARD
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border-2 border-cherry/20 dark:border-blush/20 bg-nearblack text-cream shadow-2xl p-6 sm:p-10 md:p-14"
        >
          {/* Subtle Ambient Halftone */}
          <div className="absolute inset-0 bg-gradient-to-br from-cherry/40 via-nearblack to-nearblack opacity-90 pointer-events-none" />
          <div className="absolute inset-0 halftone-overlay pointer-events-none opacity-30" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-blush text-cherry">
                  {project.status}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono border border-blush/30 text-blush/90">
                  CONSTRUCTION-TECH
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono border border-blush/30 text-blush/90">
                  AI MARKETPLACE
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
                  {project.name}
                </h3>
                <p className="text-base sm:text-xl font-serif italic text-blush mt-2">
                  {project.tagline}
                </p>
              </div>

              {/* Concise Overview */}
              <p className="text-sm sm:text-base text-cream/90 font-light leading-relaxed">
                {project.fullOverview}
              </p>

              {/* Category Quick Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.equipmentCategories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-nearblack-surface border border-blush/20 text-blush"
                  >
                    🚜 {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Right UI Screenshot Showcase */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-2xl overflow-hidden border border-blush/30 shadow-2xl bg-nearblack">
                <img
                  src={project.image}
                  alt="BuildLink Marketplace Dashboard Mockup"
                  className="w-full h-auto object-cover filter contrast-[1.04] group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nearblack/90 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-nearblack/90 backdrop-blur-md border border-blush/20 text-[11px] font-mono text-cream">
                  <span className="text-blush">BUILDLINK PLATFORM UI</span>
                  <span className="text-blush/70">MARKETPLACE MOCKUP</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            2. MARKET OPPORTUNITY & KEY METRICS
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cherry dark:text-blush uppercase">
            <TrendingUp className="w-4 h-4" />
            <span>01 / MARKET OPPORTUNITY & POTENTIAL</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {project.marketStats.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-3xl bg-cream-card dark:bg-nearblack-surface border border-cherry/10 dark:border-blush/10 flex flex-col justify-between hover:border-cherry/30 dark:hover:border-blush/30 transition-colors"
              >
                <div className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-cherry dark:text-blush tracking-tight">
                  {item.stat}
                </div>
                <div className="mt-3">
                  <p className="text-xs sm:text-sm font-mono font-bold text-nearblack dark:text-cream">
                    {item.label}
                  </p>
                  <p className="text-[11px] sm:text-xs text-nearblack/60 dark:text-cream/60 mt-1 leading-snug">
                    {item.sublabel}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            3. CORE PROBLEM & MARKET GAPS
        ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Core Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cherry dark:text-blush uppercase mb-1">
              <AlertTriangle className="w-4 h-4 text-cherry dark:text-blush" />
              <span>02 / THE CORE PROBLEM</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-cherry dark:text-cream">
              Finding Construction Equipment Is Still Manual
            </h3>
            <p className="text-xs sm:text-sm text-nearblack/70 dark:text-cream/70">
              Contractors and builders face significant friction during equipment sourcing, resulting in costly machine downtime and delayed project timelines.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              {project.problems.map((prob) => (
                <div
                  key={prob.title}
                  className="p-4 rounded-2xl bg-cream-card dark:bg-nearblack-card border border-cherry/10 dark:border-blush/10 flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-xl bg-cherry/10 dark:bg-blush/10 text-cherry dark:text-blush mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-mono font-bold text-nearblack dark:text-cream">
                      {prob.title}
                    </h4>
                    <p className="text-xs text-nearblack/70 dark:text-cream/70 mt-1 leading-relaxed">
                      {prob.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Why Existing Methods Fall Short */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cherry dark:text-blush uppercase mb-1">
              <Compass className="w-4 h-4 text-cherry dark:text-blush" />
              <span>03 / THE MARKET GAP</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-cherry dark:text-cream">
              Why Existing Methods Fall Short
            </h3>
            <p className="text-xs sm:text-sm text-nearblack/70 dark:text-cream/70">
              Traditional rental channels are fragmented, opaque, and slow, lacking verified digital trust and standardized rate structures.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              {project.marketGaps.map((gap) => (
                <div
                  key={gap.method}
                  className="p-4 rounded-2xl bg-cream-card dark:bg-nearblack-card border border-cherry/10 dark:border-blush/10 flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-xl bg-cherry/10 dark:bg-blush/10 text-cherry dark:text-blush mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-cherry dark:text-blush uppercase tracking-wider block">
                      {gap.method}
                    </span>
                    <p className="text-xs text-nearblack/70 dark:text-cream/70 mt-1 leading-relaxed">
                      {gap.flaw}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            4. THE SOLUTION & 4-STEP WORKFLOW
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-8 p-6 sm:p-10 md:p-12 rounded-3xl bg-cherry/5 dark:bg-nearblack-surface border border-cherry/20 dark:border-blush/20"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-cherry dark:text-blush uppercase block mb-1">
                04 / OUR SOLUTION & WORKFLOW
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-cherry dark:text-cream">
                From Search to Site in 4 Steps
              </h3>
            </div>
            <p className="text-xs font-mono text-nearblack/70 dark:text-cream/70 max-w-sm">
              BuildLink handles discovery, verification, payment, and logistics — streamlining the entire rental lifecycle.
            </p>
          </div>

          {/* 4 Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {project.workflowSteps.map((step) => (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl bg-cream dark:bg-nearblack-card border border-cherry/10 dark:border-blush/10 flex flex-col justify-between hover:border-cherry/30 dark:hover:border-blush/30 transition-all group"
              >
                <div>
                  <div className="text-3xl font-display font-extrabold text-cherry/40 dark:text-blush/40 group-hover:text-cherry dark:group-hover:text-blush transition-colors mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-base font-mono font-bold text-nearblack dark:text-cream mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-nearblack/70 dark:text-cream/70 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-cherry/10 dark:border-blush/10 flex items-center justify-between text-[11px] font-mono text-cherry dark:text-blush">
                  <span>STEP {step.step}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Solution Highlight Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-cherry/10 dark:border-blush/10">
            {project.solutionHighlights.map((sol) => (
              <div key={sol.title} className="flex flex-col gap-1">
                <span className="text-xs font-mono font-bold text-cherry dark:text-blush flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {sol.title}
                </span>
                <p className="text-[11px] text-nearblack/70 dark:text-cream/70 font-light">
                  {sol.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            5. AI FEATURES & INTELLIGENCE ENGINE
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cherry dark:text-blush uppercase">
              <Cpu className="w-4 h-4 text-cherry dark:text-blush" />
              <span>05 / AI INTELLIGENCE ROADMAP</span>
            </div>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-cherry/10 dark:bg-blush/10 text-cherry dark:text-blush border border-cherry/20 dark:border-blush/20">
              PROPOSED AI CAPABILITIES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {project.aiFeatures.map((ai) => (
              <div
                key={ai.name}
                className="p-6 rounded-3xl bg-cream-card dark:bg-nearblack-surface border border-cherry/10 dark:border-blush/10 flex flex-col justify-between hover:border-cherry/30 dark:hover:border-blush/30 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-cherry/10 dark:bg-blush/10 flex items-center justify-center text-cherry dark:text-blush mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-display font-extrabold text-cherry dark:text-cream mb-2">
                    {ai.name}
                  </h4>
                  <p className="text-xs text-nearblack/70 dark:text-cream/70 leading-relaxed font-light">
                    {ai.purpose}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-cherry/10 dark:border-blush/10 text-[10px] font-mono text-cherry/70 dark:text-blush/70 tracking-wider">
                  {ai.badge}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            6. KEY FEATURES CHECKLIST & COMPETITIVE EDGE
        ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cherry dark:text-blush uppercase mb-1">
              <Layers className="w-4 h-4 text-cherry dark:text-blush" />
              <span>06 / CORE PLATFORM CAPABILITIES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-cherry dark:text-cream">
              Key Platform Features
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {project.keyFeatures.map((feat) => (
                <div
                  key={feat}
                  className="p-3.5 rounded-2xl bg-cream-card dark:bg-nearblack-card border border-cherry/10 dark:border-blush/10 flex items-center gap-2.5 text-xs font-mono text-nearblack/90 dark:text-cream/90"
                >
                  <CheckCircle2 className="w-4 h-4 text-cherry dark:text-blush shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Competitive Advantage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cherry dark:text-blush uppercase mb-1">
              <ShieldCheck className="w-4 h-4 text-cherry dark:text-blush" />
              <span>07 / COMPETITIVE ADVANTAGE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-cherry dark:text-cream">
              Why BuildLink Wins
            </h3>

            <div className="flex flex-col gap-3 mt-2">
              {project.competitiveAdvantages.map((adv, idx) => (
                <div
                  key={adv}
                  className="p-3.5 rounded-2xl bg-cherry/5 dark:bg-nearblack-surface border border-cherry/20 dark:border-blush/20 flex items-center gap-3 text-xs font-mono text-cherry dark:text-blush"
                >
                  <span className="w-5 h-5 rounded-full bg-cherry/10 dark:bg-blush/10 flex items-center justify-center font-bold text-[10px] shrink-0">
                    0{idx + 1}
                  </span>
                  <span>{adv}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            7. BUSINESS MODEL & 5 DIVERSIFIED REVENUE STREAMS
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cherry dark:text-blush uppercase">
            <Coins className="w-4 h-4 text-cherry dark:text-blush" />
            <span>08 / PROPOSED BUSINESS & REVENUE MODEL</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {project.businessModel.map((model, idx) => (
              <div
                key={model.stream}
                className="p-5 rounded-3xl bg-cream-card dark:bg-nearblack-surface border border-cherry/10 dark:border-blush/10 flex flex-col justify-between hover:border-cherry/30 dark:hover:border-blush/30 transition-all"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-cherry/10 dark:bg-blush/10 flex items-center justify-center text-cherry dark:text-blush font-mono font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-mono font-bold text-cherry dark:text-cream mb-1.5">
                    {model.stream}
                  </h4>
                  <p className="text-xs text-nearblack/70 dark:text-cream/70 leading-relaxed font-light">
                    {model.detail}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-cherry/10 dark:border-blush/10 text-[10px] font-mono text-cherry/60 dark:text-blush/60 uppercase">
                  REVENUE STREAM
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            8. TARGET USERS & PHASED MARKET EXPANSION
        ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Target Customers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-4 p-6 sm:p-8 rounded-3xl bg-cream-card dark:bg-nearblack-surface border border-cherry/10 dark:border-blush/10"
          >
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cherry dark:text-blush uppercase mb-1">
              <Target className="w-4 h-4 text-cherry dark:text-blush" />
              <span>09 / TARGET CUSTOMERS</span>
            </div>
            <h3 className="text-2xl font-display font-extrabold text-cherry dark:text-cream">
              Market Participants
            </h3>

            <div className="flex flex-col gap-4 mt-2">
              {project.targetUsers.map((target) => (
                <div key={target.group} className="p-4 rounded-2xl bg-cream dark:bg-nearblack-card border border-cherry/10 dark:border-blush/10">
                  <span className="text-xs font-mono font-bold text-cherry dark:text-blush block mb-2">
                    {target.group}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {target.users.map((u) => (
                      <span
                        key={u}
                        className="px-2.5 py-1 rounded-full text-xs font-mono bg-cream-card dark:bg-nearblack-surface text-nearblack/90 dark:text-cream/90 border border-cherry/10 dark:border-blush/10"
                      >
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Phased Market Expansion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-cherry/5 dark:bg-nearblack-surface border border-cherry/20 dark:border-blush/20"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cherry dark:text-blush uppercase mb-1">
                <MapPin className="w-4 h-4 text-cherry dark:text-blush" />
                <span>10 / PHASED EXPANSION ROADMAP</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-cherry dark:text-cream mb-4">
                Rollout Strategy
              </h3>

              <div className="flex flex-col gap-3">
                {project.expansionPhases.map((phase, idx) => (
                  <div
                    key={phase.phase}
                    className="p-4 rounded-2xl bg-cream dark:bg-nearblack-card border border-cherry/10 dark:border-blush/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-cherry text-cream dark:bg-blush dark:text-nearblack font-mono font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-sm font-mono font-bold text-nearblack dark:text-cream">
                          {phase.phase}
                        </p>
                        <p className="text-xs text-cherry/80 dark:text-blush/80 font-mono">
                          {phase.locations}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cherry/10 dark:bg-blush/10 text-cherry dark:text-blush w-max">
                      {phase.region}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs font-mono text-nearblack/70 dark:text-cream/70 pt-3 border-t border-cherry/10 dark:border-blush/10">
              ⚡ <span className="font-bold">GTM Approach:</span> {project.go_to_market_strategy}
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            9. PROJECT OUTCOME & VISION BANNER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cherry via-cherry/90 to-nearblack text-cream shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs font-mono text-blush tracking-widest uppercase">
              11 / PROJECT OUTCOME & VISION
            </span>
            <h4 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Transforming Construction Equipment Logistics
            </h4>
            <p className="text-xs sm:text-sm text-cream/90 font-light leading-relaxed">
              "{project.projectOutcomeVision}"
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="px-5 py-3 rounded-full bg-blush text-cherry font-mono font-bold text-xs tracking-wider uppercase">
              PRODUCT THINKING & DESIGN
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
