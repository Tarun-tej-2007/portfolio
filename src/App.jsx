import { useEffect, useState, useCallback, useRef } from 'react';
import Navigation from './components/navigation/Navigation';
import Hero from './components/sections/Hero';
import Player from './components/sections/Player';
import Missions from './components/sections/Missions';
import Loadout from './components/sections/Loadout';
import Footer from './components/sections/Footer';
import TelemetryHUD from './components/ui/TelemetryHUD';
import TerminalModal from './components/ui/TerminalModal';
import AchievementToast from './components/ui/AchievementToast';
import { sfx } from './utils/sfx';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(sfx.isMuted());
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isOverdrive, setIsOverdrive] = useState(false);
  const [toasts, setToasts] = useState([]);
  
  const unlockedAchievements = useRef(new Set());

  const triggerAchievement = useCallback((id, title, desc, xp) => {
    if (unlockedAchievements.current.has(id)) return;
    unlockedAchievements.current.add(id);
    sfx.playAchievement();
    const newToast = { id: `${id}-${Date.now()}`, type: 'achievement', title, desc, xp };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 4500);
  }, []);

  const triggerToast = useCallback((toast) => {
    setToasts((prev) => [...prev, toast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toast.id));
    }, 4500);
  }, []);

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggleMute = () => {
    const nextMuted = sfx.toggleMute();
    setIsMuted(nextMuted);
  };

  useEffect(() => {
    // Fake loading screen for visual fidelity
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loading) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const elements = document.querySelectorAll('.rise');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [loading]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 800);
      
      // Parallax for sky
      const sky = document.querySelector('.sky');
      if (sky) {
        sky.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }

      if (window.scrollY > 350) {
        triggerAchievement('first_steps', 'Into The Void', 'Commenced mission walkthrough', 25);
      }
    };
    
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "⏸ Game Paused...";
      } else {
        document.title = isOverdrive 
          ? "★ Kondeti Tarun Tej [LEVEL 99 ARCHITECT] ★" 
          : "Kondeti Tarun Tej — Full Stack Developer";
      }
    };

    const handleBlur = () => {
      setIsPaused(true);
      sfx.playPause();
      triggerAchievement('tactical_pause', 'Tactical Pause', 'Paused the simulation overlay', 50);
    };

    // Konami code sequence
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiPointer = 0;

    const handleKeyDown = (e) => {
      // Terminal shortcuts: Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
        triggerAchievement('terminal_hacker', 'Terminal Hacker', 'Accessed the classified OS shell', 100);
        return;
      }

      // Check Konami Code
      const expectedKey = konamiSequence[konamiPointer];
      if (e.key.toLowerCase() === expectedKey.toLowerCase()) {
        konamiPointer++;
        if (konamiPointer === konamiSequence.length) {
          setIsOverdrive(true);
          sfx.playKonami();
          triggerToast({
            id: `konami-${Date.now()}`,
            type: 'konami',
            tag: 'SECRET OVERDRIVE UNLOCKED',
            title: 'GOD MODE ACTIVATED! (LEVEL 99)',
            desc: 'Unlocked unlimited developer abilities + rainbow particle aura!',
            xp: 999
          });
          konamiPointer = 0;
        }
      } else {
        konamiPointer = 0;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [triggerAchievement, triggerToast, isOverdrive]);

  return (
    <div className={`ab-root ${isOverdrive ? 'mode-overdrive' : ''}`} id="root">
      {/* Telemetry Status HUD */}
      <TelemetryHUD 
        onOpenTerminal={() => {
          setIsTerminalOpen(true);
          triggerAchievement('terminal_hacker', 'Terminal Hacker', 'Accessed the classified OS shell', 100);
        }}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Dev Terminal CLI */}
      <TerminalModal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)}
        onUnlockKonami={() => setIsOverdrive(true)}
      />

      {/* Gamified Achievement Toasts */}
      <AchievementToast toasts={toasts} onDismiss={dismissToast} />

      {/* Pause Screen Overlay */}
      {isPaused && (
        <div className="pause-overlay">
          <div className="pause-content">
            <h2>GAME PAUSED</h2>
            <button 
              className="btn-skew" 
              style={{ marginTop: '1rem', fontSize: '1.2rem', padding: '16px 32px' }} 
              onClick={() => {
                sfx.playResume();
                setIsPaused(false);
              }}
              onMouseEnter={() => sfx.playHover()}
            >
              <span className="btn-t">Resume Game</span>
            </button>
          </div>
        </div>
      )}

      {/* Custom Cursor Aura with Overdrive Rainbow effect */}
      <div 
        className={`cursor-aura ${isOverdrive ? 'aura-rainbow' : ''}`} 
        style={{ left: mousePos.x, top: mousePos.y }} 
      />

      {/* Loading Progress Bar */}
      {loading && (
        <div aria-live="polite" className="boot" id="boot" role="status" style={{ opacity: progress === 100 ? 0 : 1, transition: 'opacity 0.5s' }}>
          <div className="boot-box">
            <div className="boot-label">
              Loading<span id="bootDots">...</span>
            </div>
            <div aria-hidden="true" className="boot-track" id="bootTrack">
              <div style={{ width: `${progress}%`, height: '100%', background: 'currentColor' }} />
            </div>
            <div className="boot-pct">
              <span id="bootPct">{progress}</span>%
            </div>
          </div>
        </div>
      )}

      <div className="nav-pos">
        <Navigation 
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
          onOpenTerminal={() => {
            setIsTerminalOpen(true);
            triggerAchievement('terminal_hacker', 'Terminal Hacker', 'Accessed the classified OS shell', 100);
          }}
        />
      </div>

      <main id="top">
        <Hero onTriggerAchievement={triggerAchievement} />
        <div className="over">
          <Player isOverdrive={isOverdrive} onTriggerAchievement={triggerAchievement} />
          <Missions onTriggerAchievement={triggerAchievement} />
          <Loadout />
          <Footer onTriggerToast={triggerToast} />
        </div>
      </main>

      <button 
        className={`back-to-top ${showTopBtn ? 'show' : ''}`} 
        onClick={() => {
          sfx.playClick();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onMouseEnter={() => sfx.playHover()}
        aria-label="Back to top"
      >
        ↑ Top
      </button>
    </div>
  );
}

export default App;
