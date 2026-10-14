import { useState, useEffect } from 'react';
import { sfx } from '../../utils/sfx';

export default function TelemetryHUD({ onOpenTerminal, isMuted, onToggleMute }) {
  const [time, setTime] = useState('');
  const [ping, setPing] = useState(21);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    // Random minor ping jitter for realism (17ms - 26ms)
    const pingTimer = setInterval(() => {
      setPing(Math.floor(18 + Math.random() * 8));
    }, 4000);

    return () => {
      clearInterval(timer);
      clearInterval(pingTimer);
    };
  }, []);

  return (
    <aside aria-label="System telemetry bar" className="telemetry-bar">
      <div className="telemetry-inner">
        <div className="telem-item telem-status">
          <span className="telem-dot" />
          <span className="telem-lbl">SYSTEM:</span>
          <span className="telem-val">ONLINE</span>
        </div>

        <div className="telem-sep">/</div>

        <div className="telem-item">
          <span className="telem-lbl">LOC:</span>
          <span className="telem-val">INDIA [IST] {time || '09:30:00 AM'}</span>
        </div>

        <div className="telem-sep">/</div>

        <div className="telem-item telem-hide-mobile">
          <span className="telem-lbl">LATENCY:</span>
          <span className="telem-val">{ping}ms</span>
        </div>

        <div className="telem-sep telem-hide-mobile">/</div>

        <div className="telem-item telem-quest">
          <span className="telem-lbl">QUEST:</span>
          <span className="telem-val green-glow">OPEN TO WORK</span>
        </div>

        <div className="telem-actions">
          <button 
            className="telem-btn"
            title="Open Interactive Dev Terminal (Ctrl + K)"
            onClick={() => {
              sfx.playClick();
              onOpenTerminal();
            }}
          >
            <span className="telem-icon">&gt;_</span>
            <span className="telem-btn-text">TERMINAL</span>
            <span className="telem-kbd">^K</span>
          </button>

          <button
            className={`telem-btn ${isMuted ? 'muted' : ''}`}
            title={isMuted ? "Unmute 8-Bit Audio SFX" : "Mute SFX"}
            onClick={onToggleMute}
          >
            <span>{isMuted ? '🔇 MUTE' : '🔊 SFX ON'}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
