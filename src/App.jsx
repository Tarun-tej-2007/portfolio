import { useEffect, useState } from 'react';
import Navigation from './components/navigation/Navigation';
import Hero from './components/sections/Hero';

import Player from './components/sections/Player';
import Missions from './components/sections/Missions';
import Loadout from './components/sections/Loadout';
import Footer from './components/sections/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

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
          // Optionally unobserve if you only want it to animate once
          // observer.unobserve(entry.target);
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

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 800);
      
      // Parallax for sky
      const sky = document.querySelector('.sky');
      if (sky) {
        sky.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "⏸ Game Paused...";
      } else {
        document.title = "Kondeti Tarun Tej — Full Stack Developer";
      }
    };

    const handleBlur = () => setIsPaused(true);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  return (
    <div className="ab-root" id="root">
      {isPaused && (
        <div className="pause-overlay">
          <div className="pause-content">
            <h2>GAME PAUSED</h2>
            <button className="btn-skew" style={{ marginTop: '1rem', fontSize: '1.2rem', padding: '16px 32px' }} onClick={() => setIsPaused(false)}>
              <span className="btn-t">Resume Game</span>
            </button>
          </div>
        </div>
      )}
      <div className="cursor-aura" style={{ left: mousePos.x, top: mousePos.y }} />
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
        <Navigation />
      </div>

      <main id="top">
        <Hero />
        <div className="over">
          <Player />
          <Missions />
          <Loadout />
          <Footer />
        </div>
      </main>

      <button 
        className={`back-to-top ${showTopBtn ? 'show' : ''}`} 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑ Top
      </button>
    </div>
  );
}

export default App;
