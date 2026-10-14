export default function AchievementToast({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast-card toast-${toast.type || 'achievement'}`}>
          <div className="toast-icon">
            {toast.type === 'copy' ? '📋' : toast.type === 'konami' ? '⚡' : '🏆'}
          </div>
          <div className="toast-info">
            <div className="toast-tag">
              {toast.tag || 'ACHIEVEMENT UNLOCKED'}
              {toast.xp && <span className="toast-xp">+{toast.xp} XP</span>}
            </div>
            <div className="toast-title">{toast.title}</div>
            {toast.desc && <div className="toast-desc">{toast.desc}</div>}
          </div>
          <button 
            className="toast-close" 
            onClick={() => onDismiss(toast.id)}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
