import { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';

const THEMES = [
  {
    id: 'indigo',
    name: 'Electric Indigo',
    primary: '#6366f1',
    light: '#818cf8',
    hover: '#4f46e5',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    glow: 'rgba(99, 102, 241, 0.35)',
  },
  {
    id: 'emerald',
    name: 'Cyber Emerald',
    primary: '#10b981',
    light: '#34d399',
    hover: '#059669',
    gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
    glow: 'rgba(16, 185, 129, 0.35)',
  },
  {
    id: 'cyan',
    name: 'Neon Cyan',
    primary: '#06b6d4',
    light: '#22d3ee',
    hover: '#0891b2',
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    glow: 'rgba(6, 182, 212, 0.35)',
  },
  {
    id: 'rose',
    name: 'Sunset Rose',
    primary: '#f43f5e',
    light: '#fb7185',
    hover: '#e11d48',
    gradient: 'linear-gradient(135deg, #f43f5e, #fb923c)',
    glow: 'rgba(244, 63, 94, 0.35)',
  },
];

export default function ThemeAccentPicker() {
  const [activeTheme, setActiveTheme] = useState('indigo');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const selected = THEMES.find(t => t.id === activeTheme);
    if (!selected) return;

    document.documentElement.style.setProperty('--accent-primary', selected.primary);
    document.documentElement.style.setProperty('--accent-light', selected.light || selected.primary);
    document.documentElement.style.setProperty('--accent-hover', selected.hover || selected.primary);
    document.documentElement.style.setProperty('--accent-gradient', selected.gradient);
    document.documentElement.style.setProperty('--accent-glow', selected.glow);
  }, [activeTheme]);

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Customize accent theme"
        title="Change Accent Color"
        style={{
          width: 34,
          height: 34,
          borderRadius: 10,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#cbd5e1',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
      >
        <Palette size={16} />
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            right: 0,
            background: 'rgba(12, 14, 26, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 16,
            padding: '12px',
            minWidth: 180,
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <p style={{ fontSize: 10, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '2px 8px 6px' }}>
            Accent Palette
          </p>
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTheme(t.id);
                setOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '7px 10px',
                borderRadius: 8,
                background: activeTheme === t.id ? 'rgba(255,255,255,0.06)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#e2e8f0',
                fontSize: 12,
                fontWeight: 500,
                textAlign: 'left',
                width: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: t.primary,
                    boxShadow: `0 0 8px ${t.primary}`,
                  }}
                />
                <span>{t.name}</span>
              </div>
              {activeTheme === t.id && <Check size={13} color="#818cf8" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
