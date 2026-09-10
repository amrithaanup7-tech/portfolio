import { useState } from 'react';
import { OpeningExperience } from './components/OpeningExperience';
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

export function App() {
  const [introFinished, setIntroFinished] = useState<boolean>(false);
  const [isArcadeOpen, setIsArcadeOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-cream dark:bg-nearblack text-nearblack dark:text-cream selection:bg-blush selection:text-cherry">
      {/* Intro Experience */}
      {!introFinished && (
        <OpeningExperience onComplete={() => setIntroFinished(true)} />
      )}

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

      {/* Gwen Arcade Game Modal */}
      <GwenArcadeGame isOpen={isArcadeOpen} onClose={() => setIsArcadeOpen(false)} />

      {/* Easter Eggs */}
      <EasterEggs />
    </div>
  );
}

export default App;
