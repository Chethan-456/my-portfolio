import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profile } from '../config/profile';
import ThemeAccentPicker from './ThemeAccentPicker';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
    let current = 'home';
    for (const { href } of links) {
      const el = document.getElementById(href.slice(1));
      if (el) {
        const top = el.getBoundingClientRect().top;
        if (top <= 120) current = href.slice(1);
      }
    }
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const go = (href) => {
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 1rem' : '18px 1rem',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 60,
          background: scrolled ? 'rgba(10, 12, 22, 0.85)' : 'rgba(15, 17, 30, 0.5)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: 20,
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(99,102,241,0.06)' : 'none',
          padding: '0 18px',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Brand Logo */}
        <button
          onClick={() => go('#home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 14,
              color: '#ffffff',
              boxShadow: '0 2px 10px color-mix(in srgb, var(--accent-primary) 40%, transparent)',
            }}
          >
            CP
          </div>
          <span
            className="font-display"
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: '#f8fafc',
            }}
          >
            {profile.firstName}
            <span style={{ color: 'var(--accent-light)' }}>.dev</span>
          </span>
        </button>

        {/* Desktop Links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {links.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <button
                key={href}
                onClick={() => go(href)}
                style={{
                  background: isActive ? 'rgba(99, 102, 241, 0.12)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '7px 14px',
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 600,
                  color: isActive ? '#a5b4fc' : '#94a3b8',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <ThemeAccentPicker />

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go('#contact');
            }}
            className="btn btn-primary"
            style={{
              padding: '8px 18px',
              fontSize: 12.5,
              borderRadius: 10,
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </a>

          <button
            onClick={() => setOpen(!open)}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 10,
              padding: 7,
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="burger"
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="container"
          style={{
            marginTop: 10,
            background: 'rgba(10, 12, 22, 0.96)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 18,
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
          }}
        >
          {links.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <button
                key={href}
                onClick={() => go(href)}
                style={{
                  background: isActive ? 'rgba(99,102,241,0.12)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '10px 16px',
                  borderRadius: 10,
                  color: isActive ? '#a5b4fc' : '#94a3b8',
                  fontWeight: 600,
                  fontSize: 14,
                  transition: 'all 0.2s',
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
