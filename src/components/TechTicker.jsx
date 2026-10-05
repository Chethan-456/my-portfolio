import { skills } from '../data/skills';

export default function TechTicker() {
  // Duplicate array for seamless infinite marquee loop
  const list = [...skills, ...skills];

  return (
    <div
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        background: 'rgba(255, 255, 255, 0.015)',
        overflow: 'hidden',
        position: 'relative',
        padding: '16px 0',
      }}
    >
      {/* Edge gradient masks */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: 80,
          background: 'linear-gradient(to right, #06070d, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          width: 80,
          background: 'linear-gradient(to left, #06070d, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <div className="ticker-track">
        {list.map((s, idx) => (
          <div
            key={`${s.name}-${idx}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              padding: '6px 16px',
              borderRadius: 12,
              background: 'rgba(255, 255, 255, 0.02)',
              border: `1px solid ${s.border}`,
              whiteSpace: 'nowrap',
              marginRight: 16,
              cursor: 'default',
            }}
          >
            <span
              style={{
                width: 20,
                textAlign: 'center',
                fontWeight: 800,
                fontSize: 12,
                color: s.color,
              }}
            >
              {s.icon}
            </span>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#cbd5e1' }}>
              {s.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-slide 32s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
