// 8-bit Retro Web Audio SFX Engine (Zero External Audio Files)
let audioCtx = null;
let isMuted = localStorage.getItem('portfolio_sfx_muted') === 'true';

function getAudioContext() {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const sfx = {
  isMuted() {
    return isMuted;
  },

  toggleMute() {
    isMuted = !isMuted;
    localStorage.setItem('portfolio_sfx_muted', isMuted);
    if (!isMuted) {
      this.playClick();
    }
    return isMuted;
  },

  playTone(freq, type = 'square', duration = 0.08, gainVal = 0.05, delay = 0) {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);

      gain.gain.setValueAtTime(gainVal, ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + duration);
    } catch {
      // AudioContext policy safe fallback
    }
  },

  playHover() {
    this.playTone(880, 'square', 0.03, 0.02);
  },

  playClick() {
    this.playTone(440, 'triangle', 0.05, 0.06);
  },

  playPause() {
    if (isMuted) return;
    this.playTone(587.33, 'square', 0.08, 0.05, 0);       // D5
    this.playTone(440.00, 'square', 0.08, 0.05, 0.08);    // A4
    this.playTone(329.63, 'square', 0.12, 0.05, 0.16);    // E4
  },

  playResume() {
    if (isMuted) return;
    this.playTone(329.63, 'square', 0.08, 0.05, 0);       // E4
    this.playTone(440.00, 'square', 0.08, 0.05, 0.08);    // A4
    this.playTone(659.25, 'square', 0.14, 0.05, 0.16);    // E5
  },

  playAchievement() {
    if (isMuted) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.12, 0.07, idx * 0.07);
    });
  },

  playKonami() {
    if (isMuted) return;
    const fanfare = [
      { f: 523.25, d: 0.1 },  // C5
      { f: 659.25, d: 0.1 },  // E5
      { f: 783.99, d: 0.1 },  // G5
      { f: 1046.50, d: 0.15 },// C6
      { f: 880.00, d: 0.1 },  // A5
      { f: 1046.50, d: 0.25 },// C6
    ];
    let offset = 0;
    fanfare.forEach(({ f, d }) => {
      this.playTone(f, 'square', d, 0.08, offset);
      offset += d * 0.85;
    });
  },

  playDamage() {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch {
      // Safe fallback
    }
  },

  playHeal() {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(350, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {
      // Safe fallback
    }
  }
};
