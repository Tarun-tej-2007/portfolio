function Player() {
  return (
    <section className="sec wrap" id="player">
      <div className="sec-head rise">
        <div>
          <p className="kicker">Level <b>01</b> — About</p>
          <h2 className="display h-sec" style={{ marginTop: '14px' }}>
            <span className="ln">The</span>
            <br />
            <span className="ln">player.</span>
          </h2>
        </div>
        <div aria-hidden="true" className="hp" data-hp="3"></div>
      </div>
      
      <div className="player-stage">
        <div className="pslot pslot-l">
          <figure aria-label="Recommendation from Rohan Pareek" className="tcard rise">
            <span aria-hidden="true" className="quote-mark">“</span>
            <blockquote>
              <p>
                Tarun’s dedication to learning and his growth as a software engineer have consistently translated into high-quality results. His ownership, problem-solving mindset, and ability to take on complex challenges made him a valuable part of our team. It was a pleasure working with him.
              </p>
            </blockquote>
            <figcaption className="by">
              <b>Sourabh K T</b>
              <span>
                Tech Mentor, Kalvium ·
                <br />
                Software Engineer
              </span>
            </figcaption>
          </figure>
        </div>
        
        <div className="pslot pslot-c">
          <aside aria-label="Player card" className="pcard rise">
            <div className="pcard-head">
              <div>
                <span className="pcard-stage">Level 02</span>
                <span className="pcard-name">Tarun Tej</span>
              </div>
              <div className="pcard-age">
                <span>Since</span>
                <b>2007</b>
              </div>
            </div>
            <div className="pcard-art">
              <img alt="" aria-hidden="true" className="portrait" decoding="async" height="825" src="sprites/portrait-player.webp" width="760" />
            </div>
            <div className="pcard-role">Full Stack Developer</div>
            <div className="pcard-sec">
              <span className="badge">Ability</span>
              <span className="ability-name">Architecture &amp; Debugging Connoisseur</span>
              <p className="ability-desc">
                Frames the problem, designs the solution, and ships the first version fast. Highly effective in fast-paced, agile environments.
              </p>
            </div>
            <div className="pcard-sec" style={{ borderBottom: 0 }}>
              <div className="statrow">
                <span className="mono-sm">DOMAINS</span>
              </div>
              <p className="ability-desc domains" style={{ marginTop: '6px' }}>
                Full Stack · AI Products · Developer Tools · Web Platforms · APIs · System Design
              </p>
            </div>
            <div className="pcard-foot">
              <span>Weakness <b>Overengineering</b></span>
              <span>Strength <b>Problem Solving</b></span>
            </div>
          </aside>
        </div>
        
        <div className="pslot pslot-r">
          <figure aria-label="Recommendation from Niyatee Dwivedi" className="tcard rise">
            <span aria-hidden="true" className="quote-mark">“</span>
            <blockquote>
              <p>
                Tarun's grasp of the whole product journey and his eye for
                the details have made our products better. Building with him has been easy
                throughout.
              </p>
            </blockquote>
            <figcaption className="by">
              <b>Ahan Ray</b>
              <span>
                COE @ Onesol ·
                <br />
                CROE-LABS
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Player;
