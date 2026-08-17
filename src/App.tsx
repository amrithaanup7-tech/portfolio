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

export function App() {
  const [introFinished, setIntroFinished] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-cream dark:bg-nearblack text-nearblack dark:text-cream selection:bg-blush selection:text-cherry">
      {/* Intro Experience */}
      {!introFinished && (
        <OpeningExperience onComplete={() => setIntroFinished(true)} />
      )}

      {/* Custom Trailing Spider Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeaturedWork />
        <LabSection />
        <SkillsSection />
        <ExperienceJourney />
        <WritingSection />
        <ContactSection />
      </main>

      {/* Easter Eggs */}
      <EasterEggs />
    </div>
  );
}

export default App;
