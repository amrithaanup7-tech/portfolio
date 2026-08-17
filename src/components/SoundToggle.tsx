import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundFx } from '../utils/sound';

export const SoundToggle: React.FC = () => {
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    setIsMuted(soundFx.getIsMuted());
  }, []);

  const handleToggle = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border border-cherry/20 dark:border-blush/20 bg-cream-card/80 dark:bg-nearblack-card/80 text-cherry dark:text-blush hover:bg-cherry hover:text-cream dark:hover:bg-blush dark:hover:text-nearblack transition-all duration-300 shadow-sm"
      aria-label="Toggle Sound Effects"
      title="Toggle Sound Effects"
    >
      {isMuted ? (
        <>
          <VolumeX className="w-3.5 h-3.5 text-cherry/70 dark:text-blush/70" />
          <span>SOUND OFF</span>
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5 text-cherry dark:text-blush animate-pulse" />
          <span>SOUND ON</span>
        </>
      )}
    </button>
  );
};
