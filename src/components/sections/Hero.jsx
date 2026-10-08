function Hero() {
  return (
    <section className="hero">
      <img alt="" aria-hidden="true" className="sky" decoding="async" src="sprites/sky-night.webp" />
      <div className="hero-mid">
        <h1 className="display h-hero">
          <span className="ln">Welcome, this is</span>
          <br />
          <span className="ln">Kondeti Tarun Tej.</span>
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
      
      <div className="hintwrap">
        <div className="tabhint" id="tabHint" role="button" tabIndex="0">
          press <kbd>tab</kbd> to continue
        </div>
        <div aria-live="polite" className="dlg" id="dlg" tabIndex="-1">
          <span className="who" id="dlgWho"></span>
          <span id="dlgText"></span>
          <span className="caret" hidden id="dlgCaret">▶</span>
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
