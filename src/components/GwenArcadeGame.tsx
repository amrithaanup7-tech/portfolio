import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, X, Volume2, VolumeX, Trophy, Sparkles, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/sound';

interface GwenArcadeGameProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Collectible {
  x: number;
  y: number;
  type: 'python' | 'ai' | 'gem';
  size: number;
  points: number;
  collected: boolean;
}

interface Obstacle {
  x: number;
  y: number;
  width: number;
  height: number;
  type: 'glitch' | 'barrier';
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
}

export const GwenArcadeGame: React.FC<GwenArcadeGameProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [gameState, setGameState] = useState<'IDLE' | 'PLAYING' | 'GAMEOVER'>('IDLE');
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(() => {
    const saved = localStorage.getItem('gwen_arcade_highscore');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Game loop references
  const animFrameId = useRef<number | null>(null);
  const playerRef = useRef({
    x: 60,
    y: 180,
    vy: 0,
    width: 38,
    height: 44,
    groundY: 180,
    isJumping: false,
    jumpCount: 0,
    rotation: 0,
  });

  const collectiblesRef = useRef<Collectible[]>([]);
  const obstaclesRef = useRef<Obstacle[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const gameSpeedRef = useRef<number>(4);
  const frameCountRef = useRef<number>(0);
  const currentScoreRef = useRef<number>(0);

  // Jump / Swing action
  const handleJump = () => {
    if (gameState === 'IDLE') {
      startGame();
      return;
    }
    if (gameState === 'GAMEOVER') {
      startGame();
      return;
    }

    const p = playerRef.current;
    if (p.jumpCount < 2) {
      if (soundEnabled) {
        if (p.jumpCount === 0) soundFx.playJump();
        else soundFx.playSwing();
      }
      p.vy = -10.5;
      p.isJumping = true;
      p.jumpCount += 1;

      // Spawn dust/sparkle particles on jump
      for (let i = 0; i < 6; i++) {
        particlesRef.current.push({
          x: p.x + p.width / 2,
          y: p.y + p.height,
          vx: (Math.random() - 0.5) * 4,
          vy: Math.random() * 2 + 1,
          color: p.jumpCount === 1 ? '#E8B7C2' : '#FFFFFF',
          size: Math.random() * 3 + 2,
          alpha: 1,
        });
      }
    }
  };

  const startGame = () => {
    setGameState('PLAYING');
    setScore(0);
    currentScoreRef.current = 0;
    gameSpeedRef.current = 4.2;
    frameCountRef.current = 0;

    playerRef.current = {
      x: 60,
      y: 180,
      vy: 0,
      width: 38,
      height: 44,
      groundY: 180,
      isJumping: false,
      jumpCount: 0,
      rotation: 0,
    };

    collectiblesRef.current = [];
    obstaclesRef.current = [];
    particlesRef.current = [];

    if (soundEnabled) soundFx.playClick();
  };

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
        e.preventDefault();
        handleJump();
      }
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, gameState]);

  // Main Canvas Game Loop
  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;

    const loop = () => {
      if (!running) return;

      frameCountRef.current += 1;
      const width = canvas.width;
      const height = canvas.height;
      const groundLevel = height - 45;
      playerRef.current.groundY = groundLevel - playerRef.current.height;

      // 1. Clear Canvas & Background
      ctx.fillStyle = '#12090D';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle starry cyber grid
      ctx.strokeStyle = 'rgba(232, 183, 194, 0.08)';
      ctx.lineWidth = 1;
      const gridOffset = (frameCountRef.current * (gameSpeedRef.current * 0.5)) % 40;
      for (let x = -gridOffset; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, groundLevel);
        ctx.stroke();
      }

      // Draw Glowing Ground Line
      ctx.fillStyle = '#1D0E16';
      ctx.fillRect(0, groundLevel, width, height - groundLevel);

      ctx.strokeStyle = '#E8B7C2';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(0, groundLevel);
      ctx.lineTo(width, groundLevel);
      ctx.stroke();

      // Ground decorative dots
      ctx.fillStyle = '#670626';
      for (let x = (frameCountRef.current * -gameSpeedRef.current) % 30; x < width; x += 30) {
        ctx.fillRect(x, groundLevel + 12, 4, 4);
      }

      if (gameState === 'PLAYING') {
        const p = playerRef.current;

        // Apply Gravity
        p.vy += 0.55;
        p.y += p.vy;

        // Ground collision
        if (p.y >= p.groundY) {
          p.y = p.groundY;
          p.vy = 0;
          p.isJumping = false;
          p.jumpCount = 0;
          p.rotation = 0;
        } else {
          p.rotation = Math.min(Math.max(p.vy * 2.5, -20), 20);
        }

        // Gradually increase speed
        if (frameCountRef.current % 300 === 0 && gameSpeedRef.current < 8) {
          gameSpeedRef.current += 0.3;
        }

        // Spawn Collectibles
        if (frameCountRef.current % 75 === 0) {
          const typeChoice = Math.random();
          let type: 'python' | 'ai' | 'gem' = 'python';
          let points = 10;
          let yPos = groundLevel - 45 - Math.random() * 55;

          if (typeChoice > 0.85) {
            type = 'gem';
            points = 50;
            yPos = groundLevel - 75;
          } else if (typeChoice > 0.55) {
            type = 'ai';
            points = 25;
            yPos = groundLevel - 60;
          }

          collectiblesRef.current.push({
            x: width + 20,
            y: yPos,
            type,
            size: 16,
            points,
            collected: false,
          });
        }

        // Spawn Obstacles
        if (frameCountRef.current % 120 === 0 && Math.random() > 0.25) {
          obstaclesRef.current.push({
            x: width + 30,
            y: groundLevel - 32,
            width: 24,
            height: 32,
            type: Math.random() > 0.5 ? 'glitch' : 'barrier',
          });
        }

        // Update & Render Collectibles
        collectiblesRef.current.forEach((c) => {
          c.x -= gameSpeedRef.current;

          // Render Collectible item
          if (!c.collected) {
            ctx.save();
            ctx.translate(c.x, c.y);

            if (c.type === 'python') {
              // Python Star Rune
              ctx.fillStyle = '#E8B7C2';
              ctx.beginPath();
              ctx.arc(0, 0, 8, 0, Math.PI * 2);
              ctx.fill();
              ctx.fillStyle = '#670626';
              ctx.font = 'bold 9px monospace';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText('py', 0, 0);
            } else if (c.type === 'ai') {
              // AI Neural Sparkle
              ctx.fillStyle = '#F5D8DF';
              ctx.beginPath();
              ctx.moveTo(0, -9);
              ctx.lineTo(4, -3);
              ctx.lineTo(9, 0);
              ctx.lineTo(4, 3);
              ctx.lineTo(0, 9);
              ctx.lineTo(-4, 3);
              ctx.lineTo(-9, 0);
              ctx.lineTo(-4, -3);
              ctx.closePath();
              ctx.fill();
            } else {
              // Data Gem
              ctx.fillStyle = '#FFFFFF';
              ctx.beginPath();
              ctx.moveTo(0, -8);
              ctx.lineTo(8, 0);
              ctx.lineTo(0, 8);
              ctx.lineTo(-8, 0);
              ctx.closePath();
              ctx.fill();
            }
            ctx.restore();

            // Check collision with player
            if (
              p.x < c.x + c.size &&
              p.x + p.width > c.x - c.size &&
              p.y < c.y + c.size &&
              p.y + p.height > c.y - c.size
            ) {
              c.collected = true;
              currentScoreRef.current += c.points;
              setScore(currentScoreRef.current);
              if (soundEnabled) soundFx.playSparkle();

              // Spawn collection sparkle explosion
              for (let i = 0; i < 8; i++) {
                particlesRef.current.push({
                  x: c.x,
                  y: c.y,
                  vx: (Math.random() - 0.5) * 6,
                  vy: (Math.random() - 0.5) * 6,
                  color: c.type === 'gem' ? '#FFFFFF' : '#E8B7C2',
                  size: Math.random() * 4 + 2,
                  alpha: 1,
                });
              }
            }
          }
        });

        // Filter offscreen collectibles
        collectiblesRef.current = collectiblesRef.current.filter((c) => c.x > -40);

        // Update & Render Obstacles
        obstaclesRef.current.forEach((obs) => {
          obs.x -= gameSpeedRef.current;

          ctx.save();
          ctx.translate(obs.x, obs.y);

          // Obstacle shape
          ctx.fillStyle = '#670626';
          ctx.strokeStyle = '#E8B7C2';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(0, 0, obs.width, obs.height, [6]);
          ctx.fill();
          ctx.stroke();

          // Glitch lines on obstacle
          ctx.fillStyle = '#E8B7C2';
          ctx.fillRect(4, 8, obs.width - 8, 3);
          ctx.fillRect(4, 16, obs.width - 8, 3);

          ctx.restore();

          // Check Collision with Obstacle
          const hitboxPadding = 4;
          if (
            p.x + hitboxPadding < obs.x + obs.width &&
            p.x + p.width - hitboxPadding > obs.x &&
            p.y + hitboxPadding < obs.y + obs.height &&
            p.y + p.height - hitboxPadding > obs.y
          ) {
            // Game Over Trigger
            setGameState('GAMEOVER');
            if (soundEnabled) soundFx.playClick();

            if (currentScoreRef.current > highScore) {
              setHighScore(currentScoreRef.current);
              localStorage.setItem('gwen_arcade_highscore', currentScoreRef.current.toString());
              confetti({
                particleCount: 50,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#670626', '#E8B7C2', '#FFFFFF'],
              });
            }
          }
        });

        // Filter offscreen obstacles
        obstaclesRef.current = obstaclesRef.current.filter((obs) => obs.x > -50);
      }

      // 2. Render Player (Spider-Gwen Avatar)
      const p = playerRef.current;
      ctx.save();
      ctx.translate(p.x + p.width / 2, p.y + p.height / 2);
      ctx.rotate((p.rotation * Math.PI) / 180);

      // Web Line when jumping high
      if (p.isJumping) {
        ctx.strokeStyle = 'rgba(232, 183, 194, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, -p.height / 2);
        ctx.lineTo(-20, -100);
        ctx.stroke();
      }

      // Gwen Hood / Head
      ctx.fillStyle = '#FAF2EE';
      ctx.beginPath();
      ctx.arc(0, -6, 15, 0, Math.PI * 2);
      ctx.fill();

      // Pink Hood Inner Lining
      ctx.fillStyle = '#670626';
      ctx.beginPath();
      ctx.ellipse(0, -5, 11, 13, 0, 0, Math.PI * 2);
      ctx.fill();

      // Mask Eyes (Cyan)
      ctx.fillStyle = '#38BDF8';
      ctx.beginPath();
      ctx.ellipse(-4, -6, 2.5, 3.5, -0.2, 0, Math.PI * 2);
      ctx.ellipse(4, -6, 2.5, 3.5, 0.2, 0, Math.PI * 2);
      ctx.fill();

      // Suit Body (Dark Cherry & Blush Accent)
      ctx.fillStyle = '#4D041C';
      ctx.fillRect(-8, 8, 16, 14);

      ctx.fillStyle = '#E8B7C2';
      ctx.fillRect(-8, 6, 16, 3);

      // Running / Jumping Legs Animation
      const legOffset = p.isJumping ? 6 : Math.sin(frameCountRef.current * 0.35) * 7;
      ctx.fillStyle = '#FAF2EE';
      ctx.fillRect(-6, 22, 4, 8 + legOffset);
      ctx.fillRect(2, 22, 4, 8 - legOffset);

      ctx.restore();

      // 3. Render Particle Sparks
      particlesRef.current.forEach((part) => {
        part.x += part.vx;
        part.y += part.vy;
        part.alpha -= 0.035;

        if (part.alpha > 0) {
          ctx.save();
          ctx.globalAlpha = Math.max(0, part.alpha);
          ctx.fillStyle = part.color;
          ctx.beginPath();
          ctx.arc(part.x, part.y, part.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });
      particlesRef.current = particlesRef.current.filter((part) => part.alpha > 0);

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      running = false;
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isOpen, gameState, soundEnabled, highScore]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999999] bg-nearblack/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Main Arcade Frame Container */}
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative max-w-2xl w-full bg-nearblack rounded-3xl border-2 border-blush/40 overflow-hidden shadow-2xl flex flex-col select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Arcade Title Header */}
            <div className="p-4 sm:p-5 bg-cherry/20 border-b border-blush/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blush text-cherry flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  GWEN ARCADE
                </span>
                <span className="text-xs font-mono text-blush/90 hidden sm:inline">
                  CYBER PYTHON RUNNER
                </span>
              </div>

              {/* Controls Header */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="p-2 rounded-full border border-blush/30 text-blush hover:bg-blush/10 transition-colors"
                  aria-label="Toggle Sound"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full border border-blush/30 text-blush hover:bg-blush hover:text-cherry transition-colors"
                  aria-label="Close Arcade"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Canvas Gameplay Arena */}
            <div className="relative bg-black flex items-center justify-center aspect-[16/9] w-full overflow-hidden">
              <canvas
                ref={canvasRef}
                width={640}
                height={360}
                className="w-full h-full object-contain cursor-pointer"
                onClick={handleJump}
              />

              {/* In-Game Score HUD */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none text-xs sm:text-sm font-mono text-cream font-bold">
                <div className="px-3 py-1.5 rounded-xl bg-nearblack/80 backdrop-blur-sm border border-blush/30 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blush" />
                  <span>SCORE: {score}</span>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-nearblack/80 backdrop-blur-sm border border-blush/30 flex items-center gap-2 text-blush">
                  <Trophy className="w-4 h-4 text-blush" />
                  <span>BEST: {highScore}</span>
                </div>
              </div>

              {/* IDLE Start Overlay */}
              {gameState === 'IDLE' && (
                <div
                  className="absolute inset-0 bg-nearblack/70 backdrop-blur-sm flex flex-col items-center justify-center gap-4 text-center p-6 cursor-pointer"
                  onClick={startGame}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="p-4 rounded-full bg-blush text-cherry shadow-xl"
                  >
                    <Play className="w-8 h-8 fill-cherry ml-1" />
                  </motion.div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                      SPIDER-GWEN RUNNER
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-blush/90 mt-1">
                      Collect Python Runes & Dodge Glitch Obstacles!
                    </p>
                  </div>

                  <div className="px-4 py-2 rounded-full border border-blush/30 bg-nearblack text-cream font-mono text-xs">
                    PRESS SPACEBAR OR TAP TO JUMP
                  </div>
                </div>
              )}

              {/* GAMEOVER Overlay */}
              {gameState === 'GAMEOVER' && (
                <div
                  className="absolute inset-0 bg-nearblack/80 backdrop-blur-md flex flex-col items-center justify-center gap-4 text-center p-6 cursor-pointer"
                  onClick={startGame}
                >
                  <div className="p-3.5 rounded-full bg-cherry/80 border border-blush/40 text-blush">
                    <RotateCcw className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                      GLITCH DETECTED!
                    </h3>
                    <p className="text-sm font-mono text-blush mt-1 font-bold">
                      FINAL SCORE: {score}
                    </p>
                  </div>

                  <button
                    onClick={startGame}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-blush text-cherry font-mono font-bold text-xs tracking-wider uppercase hover:scale-105 transition-transform shadow-lg"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>PLAY AGAIN</span>
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Controls / Help Bar */}
            <div className="p-3 sm:p-4 bg-nearblack border-t border-blush/20 flex items-center justify-between text-xs font-mono text-cream/70">
              <span className="hidden sm:inline">
                CONTROLS: SPACE / UP ARROW TO JUMP & DOUBLE-JUMP
              </span>
              <span className="inline sm:hidden">
                TAP SCREEN TO JUMP & DOUBLE-JUMP
              </span>
              <button
                onClick={handleJump}
                className="px-4 py-1.5 rounded-xl bg-cherry border border-blush/40 text-blush font-bold active:scale-95 transition-transform sm:hidden"
              >
                JUMP ↗
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
