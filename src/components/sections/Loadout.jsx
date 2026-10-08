function Loadout() {
  return (
    <section className="sec wrap" id="loadout">
      <div className="sec-head rise">
        <div>
          <p className="kicker">Level <b>03</b> — Craft</p>
          <h2 className="display h-sec" style={{ marginTop: '14px' }}>
            <span className="ln">The</span>
            <br />
            <span className="ln">loadout.</span>
          </h2>
        </div>
        <div aria-hidden="true" className="hp" data-hp="8"></div>
      </div>
      
      <div className="case-col">
        <div className="loadout">
          {/* 1 — Education */}
          <div className="lo-block rise">
            <p className="perks">Education</p>
            <div className="edu">
              <div className="card">
                <div className="card-bar">
                  <span>Degree</span>
                  <span className="stars">◆</span>
                </div>
                <div className="card-body">
                  <h3 className="card-name">Kalasalingam Academy Of Research and Education</h3>
                  <p className="card-desc">Bachelors of Technology, Computer Science and Engineering [Software Product Engineering] · 2024–present</p>
                </div>
              </div>
              <div className="card">
                <div className="card-bar">
                  <span>Before</span>
                  <span className="stars">◆</span>
                </div>
                <div className="card-body">
                  <h3 className="card-name">Sri Chaitanya Junior College</h3>
                  <p className="card-desc">2022–2024</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 2 — Equipped */}
          <div className="lo-block rise">
            <p className="perks">Equipped</p>
            <ul className="tools">
              <li className="tool" style={{ '--x': 1, '--y': 31, '--x2': 2, '--y2': 4, '--lift': '-12px', '--dur': '3.4s', '--dl': '-0.4s' }}>
                <img alt="Figma" decoding="async" height="280" loading="lazy" src="tool/figma.webp" width="280" />
              </li>
              <li className="tool" style={{ '--x': 14, '--y': 9, '--x2': 28, '--y2': 16, '--lift': '-16px', '--dur': '4.1s', '--dl': '-2.2s' }}>
                <img alt="Claude" decoding="async" height="280" loading="lazy" src="tool/claude.webp" width="280" />
              </li>
              <li className="tool" style={{ '--x': 26, '--y': 56, '--x2': 54, '--y2': 8, '--lift': '-9px', '--dur': '3.0s', '--dl': '-1.5s' }}>
                <img alt="Gemini" decoding="async" height="280" loading="lazy" src="tool/gemini.webp" width="280" />
              </li>
              <li className="tool" style={{ '--x': 39, '--y': 20, '--x2': 80, '--y2': 22, '--lift': '-14px', '--dur': '3.7s', '--dl': '-2.9s' }}>
                <img alt="ChatGPT" decoding="async" height="280" loading="lazy" src="tool/chatgpt.webp" width="280" />
              </li>
              <li className="tool" style={{ '--x': 52, '--y': 62, '--x2': 8, '--y2': 56, '--lift': '-11px', '--dur': '4.4s', '--dl': '-0.9s' }}>
                <img alt="Perplexity" decoding="async" height="280" loading="lazy" src="tool/perplexity.webp" width="280" />
              </li>
              <li className="tool" style={{ '--x': 64, '--y': 4, '--x2': 33, '--y2': 72, '--lift': '-12px', '--dur': '3.2s', '--dl': '-2.5s' }}>
                <img alt="Vercel" decoding="async" height="280" loading="lazy" src="tool/vercel.webp" width="280" />
              </li>
              <li className="tool" style={{ '--x': 77, '--y': 43, '--x2': 58, '--y2': 62, '--lift': '-10px', '--dur': '3.9s', '--dl': '-1.1s' }}>
                <img alt="VS Code" decoding="async" height="280" loading="lazy" src="tool/vs-code.webp" width="280" />
              </li>
              <li className="tool" style={{ '--x': 90, '--y': 26, '--x2': 80, '--y2': 78, '--lift': '-13px', '--dur': '4.6s', '--dl': '-3.4s' }}>
                <img alt="Google Stitch" decoding="async" height="280" loading="lazy" src="tool/google-stitch.webp" width="280" />
              </li>
            </ul>
          </div>
          
          {/* 3 — Off the clock */}
          <div className="lo-block rise">
            <p className="perks">Off the clock</p>
            <ul className="bullets">
              <li>Air-Rifle Shooting - 10 metre (National-Level; NRAI Member)</li>
              <li>On the court - Basketball, Pickleball</li>
              <li>Two Wheels - Motorcycling</li>
              <li>Four Wheels - Sports cars to classic muscle cars to squatted SUVs, everything intrigues me</li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Loadout;
