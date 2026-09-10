import { useState } from 'react';
import { OpeningExperience } from './components/OpeningExperience';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedWork } from './components/FeaturedWork';
import { LabSection } from './components/LabSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceJourney } from './components/ExperienceJourney';
import { WritingSection } from './components/WritingSection';
import { ContactSection } from './components/ContactSection';
import { EasterEggs } from './components/EasterEggs';
import { GwenArcadeGame } from './components/GwenArcadeGame';
import { soundFx } from './utils/sound';

export function App() {
  const [introFinished, setIntroFinished] = useState<boolean>(false);
  const [isArcadeOpen, setIsArcadeOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-cream dark:bg-nearblack text-nearblack dark:text-cream selection:bg-blush selection:text-cherry">
      {/* Intro Experience */}
      {!introFinished && (
        <OpeningExperience onComplete={() => setIntroFinished(true)} />
      )}

      {/* Custom Trailing Spider Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navigation onOpenArcade={() => setIsArcadeOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeaturedWork />
        <LabSection onOpenArcade={() => setIsArcadeOpen(true)} />
        <SkillsSection />
        <ExperienceJourney />
        <WritingSection />
        <ContactSection />
      </main>

      {/* Floating Arcade Launcher Trigger */}
      <button
        onClick={() => {
          soundFx.playClick();
          setIsArcadeOpen(true);
        }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-cherry text-cream dark:bg-blush dark:text-nearblack font-mono text-xs font-extrabold tracking-wider shadow-2xl border-2 border-blush/40 hover:scale-105 active:scale-95 transition-all group"
        data-cursor="ARCADE 🎮"
        title="Play Gwen Cyber Python Runner"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blush dark:bg-cherry opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blush dark:bg-cherry"></span>
        </span>
        <span>🎮 PLAY ARCADE</span>
      </button>

      {/* Gwen Arcade Game Modal */}
      <GwenArcadeGame isOpen={isArcadeOpen} onClose={() => setIsArcadeOpen(false)} />

      {/* Easter Eggs */}
      <EasterEggs />
    </div>
  );
}

export default App;
