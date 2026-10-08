import { useState } from 'react';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav aria-label="Primary" className="nav" id="nav">
        <div className="nav-inner">
          <a className="lnk" href="#player">Player</a>
          <a className="lnk lnk-key" href="#missions">Missions</a>
          <a aria-label="Kondeti Tarun Tej — home" className="brand" href="#top">KT</a>
          <a className="lnk" href="#record">Record</a>
          <a className="lnk" href="#contact">Contact</a>
          
          <button 
            aria-controls="navMenu" 
            aria-expanded={menuOpen} 
            aria-label="Menu" 
            className={`burger ${menuOpen ? 'is-active' : ''}`} 
            id="navBurger" 
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      
      <div className={`navmenu ${menuOpen ? 'is-open' : ''}`} id="navMenu" style={{ display: menuOpen ? 'flex' : 'none' }}>
        <a href="#player" onClick={() => setMenuOpen(false)}>Player</a>
        <a href="#missions" onClick={() => setMenuOpen(false)}>Missions</a>
        <a href="#record" onClick={() => setMenuOpen(false)}>Record</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </>
  );
}

export default Navigation;
