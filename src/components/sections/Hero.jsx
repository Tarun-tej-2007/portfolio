import { useState, useEffect } from 'react';

function Hero() {
  const [showDlg, setShowDlg] = useState(false);
  const [nameText, setNameText] = useState('');
  const fullName = "Kondeti Tarun Tej.";

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setNameText(fullName.substring(0, i + 1));
        i++;
        if (i >= fullName.length) clearInterval(interval);
      }, 70); // typing speed
      return () => clearInterval(interval);
    }, 1200); // Wait for loading screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <img alt="" aria-hidden="true" className="sky" decoding="async" src="sprites/sky-night.webp" />
      <div className="hero-mid">
        <h1 className="display h-hero">
          <span className="ln">Welcome, this is</span>
          <br />
          <span className="ln">{nameText}<span className="caret" style={{ animation: 'blink 1s step-end infinite', display: 'inline-block', marginLeft: '2px', color: 'var(--accent)' }}></span></span>
        </h1>
        <p className="hero-sub">
          Tarun is a Full Stack Developer building scalable web applications, 
          AI-powered products, and developer platforms. Currently working across the 
          stack with React, Next.js, Node.js, Python, and FastAPI, taking products from 0&nbsp;&rarr;&nbsp;1.
        </p>
        <a className="btn-skew hero-cta" href="#missions">
          <span className="btn-t">View Missions</span>
        </a>
      </div>
      
      <div className={`hintwrap ${showDlg ? 'dlg-live' : ''}`}>
        <div className="tabhint" id="tabHint" role="button" tabIndex="0" onClick={() => setShowDlg(true)}>
          click to continue
        </div>
        <div aria-live="polite" className={`dlg ${showDlg ? 'show' : ''}`} id="dlg" tabIndex="-1">
          <span className="who" id="dlgWho"></span>
          <span id="dlgText">The team is ready. Scope agreed, flows signed off, build underway.</span>
          <span className="caret" id="dlgCaret">▶</span>
        </div>
      </div>
      
      <div className="stage" id="stage">
        <div aria-hidden="true" className="scene" id="scene">
          <img alt="" aria-hidden="true" className="act act-team" decoding="async" id="actTeam" src="sprites/team-idle.webp" />
          <img alt="" aria-hidden="true" className="act act-arsh" decoding="async" id="actArsh" src="sprites/arsh-idle.webp" />
          <img alt="" aria-hidden="true" className="act act-boss" decoding="async" id="actBoss" src="sprites/boss-idle.webp" />
        </div>
        <div aria-hidden="true" className="floor"></div>
      </div>
    </section>
  );
}

export default Hero;
