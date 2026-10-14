import { useState } from 'react';
import { sfx } from '../../utils/sfx';

function Navigation({ isMuted, onToggleMute, onOpenTerminal }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    sfx.playClick();
  };

  return (
    <>
      <nav aria-label="Primary" className="nav" id="nav">
        <div className="nav-inner">
          <a className="lnk" href="#player" onMouseEnter={() => sfx.playHover()} onClick={handleLinkClick}>Player</a>
          <a className="lnk lnk-key" href="#missions" onMouseEnter={() => sfx.playHover()} onClick={handleLinkClick}>Missions</a>
          <a aria-label="Kondeti Tarun Tej — home" className="brand" href="#top" onMouseEnter={() => sfx.playHover()} onClick={handleLinkClick}>KT</a>
          <a className="lnk" href="#record" onMouseEnter={() => sfx.playHover()} onClick={handleLinkClick}>Record</a>
          <a className="lnk" href="#contact" onMouseEnter={() => sfx.playHover()} onClick={handleLinkClick}>Contact</a>
          
          <button 
            type="button"
            className="nav-term-btn"
            title="Open Dev Terminal (Ctrl + K)"
            onClick={() => {
              sfx.playClick();
              onOpenTerminal && onOpenTerminal();
            }}
          >
            &gt;_
          </button>

          <button 
            type="button"
            className="nav-sound-btn"
            title={isMuted ? "Unmute 8-Bit SFX" : "Mute SFX"}
            onClick={onToggleMute}
          >
            {isMuted ? '🔇' : '🔊'}
          </button>

          <button 
            aria-controls="navMenu" 
            aria-expanded={menuOpen} 
            aria-label="Menu" 
            className={`burger ${menuOpen ? 'is-active' : ''}`} 
            id="navBurger" 
            type="button"
            onClick={() => {
              sfx.playClick();
              setMenuOpen(!menuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      
      <div className={`navmenu ${menuOpen ? 'is-open' : ''}`} id="navMenu" style={{ display: menuOpen ? 'flex' : 'none' }}>
        <a href="#player" onClick={() => { handleLinkClick(); setMenuOpen(false); }}>Player</a>
        <a href="#missions" onClick={() => { handleLinkClick(); setMenuOpen(false); }}>Missions</a>
        <a href="#record" onClick={() => { handleLinkClick(); setMenuOpen(false); }}>Record</a>
        <a href="#contact" onClick={() => { handleLinkClick(); setMenuOpen(false); }}>Contact</a>
        <button 
          className="navmenu-term-btn"
          onClick={() => {
            setMenuOpen(false);
            onOpenTerminal && onOpenTerminal();
          }}
        >
          &gt;_ Open Terminal (Ctrl+K)
        </button>
      </div>
    </>
  );
}

export default Navigation;
