import { useState, useEffect, useRef } from 'react';
import { sfx } from '../../utils/sfx';

export default function TerminalModal({ isOpen, onClose, onUnlockKonami }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'TARUN-OS [Version 2.6.4] — Void Arcade Shell' },
    { type: 'system', text: 'Type "help" for a list of available commands.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [matrixActive, setMatrixActive] = useState(false);
  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      sfx.playClick();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    sfx.playClick();

    const newHistory = [...history, { type: 'input', text: `guest@tarun-os:~$ ${cmdText}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  help       - Show this command list
  projects   - View highlighted missions & repositories
  skills     - Inspect equipped tech stack & domains
  contact    - Retrieve communication channels
  resume     - Open official PDF resume
  matrix     - Toggle green matrix digital rain
  sudo       - Elevate privileges
  konami     - Hint for secret arcade mode
  clear      - Clear terminal screen
  exit       - Close terminal window`
        });
        break;

      case 'projects':
      case 'missions':
        newHistory.push({
          type: 'output',
          text: `MISSIONS:
  1. [CODEATLAS]     Codebase Architecture Intelligence Engine (Tree-sitter, Next.js, FastAPI)
  2. [SATQUERY AI]   Multi-Sensor Satellite Earth Observation Platform (Sentinel-1/2, Python)
  3. [AGRIDATA]      Agricultural Data Profiling & Copilot Insights
  4. [F1 INSIGHT]    Formula 1 Performance & Pitstop Analytics Engine
  5. [FACTIFY]       AI Multi-Format Content & Media Verification Platform

Type "projects open <1-5>" or scroll down to the Missions section to view full case studies.`
        });
        break;

      case 'projects open 1':
        window.open('https://github.com/Tarun-tej-2007/codeatlas', '_blank');
        newHistory.push({ type: 'output', text: 'Opening CodeAtlas repository in new tab...' });
        break;
      case 'projects open 2':
        window.open('https://github.com/Tarun-tej-2007/sih-prototype', '_blank');
        newHistory.push({ type: 'output', text: 'Opening SatQuery AI repository in new tab...' });
        break;
      case 'projects open 3':
        window.open('https://github.com/Tarun-tej-2007/Agridata-Copilot', '_blank');
        newHistory.push({ type: 'output', text: 'Opening Agridata Copilot in new tab...' });
        break;
      case 'projects open 4':
        window.open('https://f1insighgt.netlify.app/', '_blank');
        newHistory.push({ type: 'output', text: 'Opening F1 Insight live app in new tab...' });
        break;
      case 'projects open 5':
        window.open('https://github.com/Tarun-tej-2007/Factify', '_blank');
        newHistory.push({ type: 'output', text: 'Opening Factify in new tab...' });
        break;

      case 'skills':
      case 'loadout':
        newHistory.push({
          type: 'output',
          text: `EQUIPPED LOADOUT:
  Languages : JavaScript (ES6+), TypeScript, Python, SQL, HTML5/CSS3
  Frontend  : React, Next.js, Vite, TailwindCSS, Framer Motion
  Backend   : Node.js, Express, FastAPI, REST APIs, WebSockets
  Databases : PostgreSQL, MongoDB, Redis
  AI & Data : LangChain, AWS Bedrock, Gemini API, Tree-sitter, Pandas
  Tools     : Docker, Git/GitHub, AWS Lambda, Vercel, Postman, Linux`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `DIRECT CHANNELS:
  Email    : taruntej947@gmail.com
  WhatsApp : +91 8328394354
  LinkedIn : linkedin.com/in/kondeti-tarun-tej-b8a102344
  GitHub   : github.com/Tarun-tej-2007`
        });
        break;

      case 'resume':
        window.open('/resume/TarunTej_Resume.pdf', '_blank');
        newHistory.push({ type: 'output', text: 'Opening TarunTej_Resume.pdf in a new tab...' });
        break;

      case 'matrix':
        setMatrixActive((prev) => !prev);
        newHistory.push({
          type: 'output',
          text: `[SYSTEM] Matrix mode ${!matrixActive ? 'ACTIVATED' : 'DEACTIVATED'}. Wake up, Neo...`
        });
        break;

      case 'sudo':
      case 'sudo su':
        sfx.playAchievement();
        newHistory.push({
          type: 'output',
          text: '[ACCESS GRANTED] Level 99 root privileges authenticated. Commander Tarun is in control.'
        });
        break;

      case 'konami':
      case 'secret':
        newHistory.push({
          type: 'output',
          text: 'HINT: On your keyboard anywhere on the page, try typing: ↑ ↑ ↓ ↓ ← → ← → B A'
        });
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        if (trimmed.length > 0) {
          newHistory.push({
            type: 'error',
            text: `command not found: "${cmdText}". Type "help" for a list of valid commands.`
          });
        }
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div 
        className={`terminal-window ${matrixActive ? 'matrix-bg' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="term-dot term-red" onClick={onClose} />
            <span className="term-dot term-yellow" />
            <span className="term-dot term-green" />
          </div>
          <div className="terminal-title">guest@tarun-os:~ (Void Arcade Shell)</div>
          <button className="terminal-close-btn" onClick={onClose}>[ESC / X]</button>
        </div>

        <div className="terminal-body" ref={terminalBodyRef}>
          {history.map((item, idx) => (
            <div key={idx} className={`term-line term-${item.type}`}>
              <pre>{item.text}</pre>
            </div>
          ))}

          <form 
            className="terminal-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(inputVal);
            }}
          >
            <span className="term-prompt">guest@tarun-os:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="term-input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help'..."
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
