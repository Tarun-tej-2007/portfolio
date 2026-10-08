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

  return (
    <div className="ab-root" id="root">
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
    </div>
  );
}

export default App;
