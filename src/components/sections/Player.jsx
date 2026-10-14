import { useState, useRef } from 'react';
import { sfx } from '../../utils/sfx';

function Player({ isOverdrive, onTriggerAchievement }) {
  const [hp, setHp] = useState(3);
  const [floatingText, setFloatingText] = useState(null);
  const [cardTilt, setCardTilt] = useState({ rx: 0, ry: 0, glowX: 50, glowY: 50 });
  const cardRef = useRef(null);

  const handleHeartClick = () => {
    if (hp > 1) {
      const nextHp = hp - 1;
      setHp(nextHp);
      sfx.playDamage();
      setFloatingText({ text: '-1 HP (DEFENSE TESTED)', color: '#ff3366', id: Date.now() });

      if (onTriggerAchievement) {
        onTriggerAchievement('hp_battle', 'Boss Battle Tested', 'Tested player resilience & defenses', 50);
      }

      // Auto-heal after 2.5s
      setTimeout(() => {
        setHp((curr) => {
          if (curr < 3) {
            sfx.playHeal();
            setFloatingText({ text: '+1 HP REGEN', color: '#00ffcc', id: Date.now() });
            return curr + 1;
          }
          return curr;
        });
      }, 2500);
    } else {
      // Critical hit & heal back
      setHp(0);
      sfx.playDamage();
      setFloatingText({ text: 'CRITICAL HP! RESPAWNING...', color: '#ff0055', id: Date.now() });

      setTimeout(() => {
        setHp(3);
        sfx.playHeal();
        setFloatingText({ text: 'MAX HP RESTORED! ♥♥♥', color: '#00ffcc', id: Date.now() });
      }, 1500);
    }
  };

  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rx = ((y - centerY) / centerY) * -8; // subtle tilt angle
    const ry = ((x - centerX) / centerX) * 8;
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;

    setCardTilt({ rx, ry, glowX, glowY });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ rx: 0, ry: 0, glowX: 50, glowY: 50 });
  };

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
        
        {/* Interactive HP System */}
        <div className="hp-wrap" title="Click hearts to test player armor">
          <div className="hp-label">HP</div>
          <div className="hp-hearts" onClick={handleHeartClick}>
            {[1, 2, 3].map((heartIndex) => (
              <span 
                key={heartIndex} 
                className={`hp-heart ${heartIndex <= hp ? 'filled' : 'empty'}`}
              >
                ♥
              </span>
            ))}
          </div>
          {floatingText && (
            <div 
              key={floatingText.id} 
              className="hp-float" 
              style={{ color: floatingText.color }}
            >
              {floatingText.text}
            </div>
          )}
        </div>
      </div>
      
      <div className="player-stage">
        <div className="pslot pslot-l">
          <figure aria-label="Recommendation from Sourabh K T" className="tcard rise" onMouseEnter={() => sfx.playHover()}>
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
          <aside 
            ref={cardRef}
            aria-label="Player card" 
            className={`pcard rise ${isOverdrive ? 'pcard-overdrive' : ''}`}
            style={{
              transform: `perspective(1000px) rotateX(${cardTilt.rx}deg) rotateY(${cardTilt.ry}deg)`,
              '--glow-x': `${cardTilt.glowX}%`,
              '--glow-y': `${cardTilt.glowY}%`
            }}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            onMouseEnter={() => sfx.playHover()}
          >
            <div className="holo-sheen" />
            <div className="pcard-head">
              <div>
                <span className={`pcard-stage ${isOverdrive ? 'rainbow-text' : ''}`}>
                  {isOverdrive ? '★ Level 99 [GOD MODE] ★' : 'Level 02'}
                </span>
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
            <div className="pcard-role">{isOverdrive ? 'Cyber Architect & Engineer' : 'Full Stack Developer'}</div>
            <div className="pcard-sec">
              <span className="badge">{isOverdrive ? '★ Ultimate' : 'Ability'}</span>
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
              <span>Strength <b>{isOverdrive ? 'Overpowered' : 'Problem Solving'}</b></span>
            </div>
          </aside>
        </div>
        
        <div className="pslot pslot-r">
          <figure aria-label="Recommendation from Ahan Ray" className="tcard rise" onMouseEnter={() => sfx.playHover()}>
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
