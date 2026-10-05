import { useState, useEffect } from 'react';
import { ArrowRight, Mail, ArrowDown, Sparkles, Award, Code, User, Play, Clock } from 'lucide-react';
import { Github, Linkedin, Instagram } from '../components/SocialIcons';
import { profile } from '../config/profile';
import TiltCard from '../components/TiltCard';
import Magnetic from '../components/Magnetic';

const TITLES = profile.titles;

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDel] = useState(false);
  const [paused, setPaused] = useState(false);
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'code'
  const [runOutput, setRunOutput] = useState(null);
  const [localTime, setLocalTime] = useState('');

  // Live Bengaluru IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDel(true); }, 2000);
      return () => clearTimeout(t);
    }
    const word = TITLES[idx];
    const speed = deleting ? 35 : 70;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setPaused(true);
      } else {
        const next = text.slice(0, -1);
        setText(next);
        if (next === '') { setDel(false); setIdx(i => (i + 1) % TITLES.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, paused, idx]);

  const handleRunCode = () => {
    setRunOutput('Compiling...');
    setTimeout(() => {
      setRunOutput('✨ Ready to collaborate! Response time: < 24h');
    }, 450);
  };

  const social = [
    { icon: Github, href: profile.social.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: profile.social.instagram, label: 'Instagram' },
    { icon: Mail, href: profile.social.email.startsWith('[') ? '#contact' : `mailto:${profile.social.email}`, label: 'Email' },
  ];

  return (
    <>
    <section
      id="home"
      className="bg-grid"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 110,
        paddingBottom: 60,
      }}
    >
      {/* Aurora Ambient Glow Blobs */}
      <div className="aurora-bg" aria-hidden>
        <div className="aurora-glow-1" />
        <div className="aurora-glow-2" />
        <div className="aurora-glow-3" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="hero-2col"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          {/* Left Column: Intro & Info */}
          <div>
            {/* Status Pill & Live Clock */}
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
              <span className="status-pill">
                Available for Projects &amp; Roles
              </span>
              {localTime && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 11,
                    color: '#94a3b8',
                    padding: '5px 12px',
                    borderRadius: 20,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Clock size={12} color="var(--accent-light)" />
                  <span>Bengaluru, IN • {localTime}</span>
                </span>
              )}
            </div>

            {/* Main Greeting & Name */}
            <div className="reveal" style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 18, color: '#94a3b8', fontWeight: 500, marginBottom: 8 }}>
                Hello, I am
              </p>
              <h1
                className="font-display"
                style={{
                  fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
                  fontWeight: 800,
                  color: '#f8fafc',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: 16,
                }}
              >
                Chethan <span className="text-gradient">P</span>
              </h1>

              {/* Animated Typewriter Title */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '8px 18px',
                  borderRadius: 14,
                  background: 'color-mix(in srgb, var(--accent-primary) 8%, transparent)',
                  border: '1px solid rgba(99,102,241,0.22)',
                  minHeight: 44,
                }}
              >
                <Sparkles size={16} color="var(--accent-light)" />
                <span
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                    fontWeight: 700,
                    color: '#c7d2fe',
                  }}
                >
                  {text}
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    width: 2,
                    height: 20,
                    background: 'var(--accent-light)',
                    animation: 'pulse-dot 1s infinite',
                  }}
                />
              </div>
            </div>

            {/* Bio Description */}
            <p
              className="reveal"
              style={{
                fontSize: '1.05rem',
                color: '#94a3b8',
                lineHeight: 1.75,
                maxWidth: 540,
                marginBottom: 32,
              }}
            >
              {profile.bio}
            </p>

            {/* CTA Buttons */}
            <div
              className="reveal hero-actions"
              style={{
                display: 'flex',
                gap: 14,
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: 36,
              }}
            >
              <a href="#projects" className="btn btn-primary">
                Explore Projects <ArrowRight size={16} />
              </a>
            </div>

            {/* Social Icons Row */}
            <div
              className="reveal hero-socials"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span style={{ fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: 4 }}>
                Connect:
              </span>
              {social.map(({ icon: Icon, href, label }) => (
                <Magnetic key={label}>
                  <a
                    href={href.startsWith('[') ? '#contact' : href}
                    target={href.startsWith('http') ? '_blank' : '_self'}
                    rel="noreferrer"
                  aria-label={label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent-primary) 50%, transparent)';
                    e.currentTarget.style.background = 'rgba(99,102,241,0.12)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.transform = '';
                  }}
                >
                  <Icon size={18} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Right Column: Dual-Mode Interactive Visual Card */}
          <TiltCard className="hero-visual reveal" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* View Mode Toggle Pill */}
            <div
              style={{
                display: 'inline-flex',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 14,
                padding: 4,
                marginBottom: 16,
                zIndex: 5,
              }}
            >
              <button
                onClick={() => setActiveTab('profile')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '6px 14px',
                  borderRadius: 10,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 12,
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  background: activeTab === 'profile' ? 'rgba(99,102,241,0.2)' : 'transparent',
                  color: activeTab === 'profile' ? '#c7d2fe' : '#94a3b8',
                }}
              >
                <User size={13} /> Profile
              </button>
              <button
                onClick={() => setActiveTab('code')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '6px 14px',
                  borderRadius: 10,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 12,
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  background: activeTab === 'code' ? 'rgba(99,102,241,0.2)' : 'transparent',
                  color: activeTab === 'code' ? '#c7d2fe' : '#94a3b8',
                }}
              >
                <Code size={13} /> Code Card
              </button>
            </div>

            <div style={{ position: 'relative', width: 330, maxWidth: '100%' }}>
              {/* Outer Decorative Gradient Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: -12,
                  borderRadius: 28,
                  background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent-primary) 30%, transparent) 0%, rgba(168,85,247,0.2) 50%, rgba(56,189,248,0.25) 100%)',
                  filter: 'blur(20px)',
                  opacity: 0.7,
                  zIndex: 0,
                }}
              />

              {activeTab === 'profile' ? (
                /* Mode 1: Photo & Orbiting Badges */
                <div
                  className="card"
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    padding: 10,
                    borderRadius: 24,
                    background: 'rgba(15, 17, 30, 0.75)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)',
                  }}
                >
                  <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', aspectRatio: '1/1.15' }}>
                    <img
                      src="/images/chethan-profile.jpg"
                      alt="Chethan P"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        display: 'block',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(6,7,13,0.85) 0%, transparent 45%)',
                      }}
                    />
                    <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                        Instructor &amp; Developer
                      </p>
                      <p className="font-display" style={{ fontSize: 18, fontWeight: 700, color: '#f8fafc' }}>
                        Chethan P
                      </p>
                    </div>
                  </div>

                  {/* Floating Tech Badge 1: Top Right */}
                  <div
                    className="animate-float"
                    style={{
                      position: 'absolute',
                      top: -16,
                      right: -18,
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '8px 14px',
                      borderRadius: 12,
                      background: 'rgba(15, 17, 30, 0.92)',
                      border: '1px solid rgba(97,218,251,0.3)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.5), 0 0 15px rgba(97,218,251,0.2)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <span style={{ fontSize: 16 }}>⚛️</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#61dafb' }}>React.js</span>
                  </div>

                  {/* Floating Tech Badge 2: Bottom Left */}
                  <div
                    className="animate-float-delayed"
                    style={{
                      position: 'absolute',
                      bottom: 30,
                      left: -24,
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '8px 14px',
                      borderRadius: 12,
                      background: 'rgba(15, 17, 30, 0.92)',
                      border: '1px solid rgba(109,191,103,0.3)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.5), 0 0 15px rgba(109,191,103,0.2)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <span style={{ fontSize: 15 }}>🟢</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#6dbf67' }}>Node.js / MERN</span>
                  </div>

                  {/* Floating Achievement Badge: Right Center */}
                  <div
                    className="animate-float-delayed"
                    style={{
                      position: 'absolute',
                      top: '35%',
                      right: -28,
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '6px 12px',
                      borderRadius: 10,
                      background: 'rgba(15, 17, 30, 0.92)',
                      border: '1px solid rgba(245,158,11,0.3)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <Award size={14} color="#f59e0b" />
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#fbbf24' }}>BCA Topper</span>
                  </div>
                </div>
              ) : (
                /* Mode 2: Interactive Developer Terminal Code Card */
                <div
                  className="card"
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: 20,
                    background: '#0a0d18',
                    border: '1px solid rgba(99,102,241,0.25)',
                    padding: 0,
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Terminal Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 16px',
                      background: 'rgba(255,255,255,0.03)',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }} />
                      <span style={{ fontSize: 11, color: '#64748b', marginLeft: 10, fontFamily: 'monospace' }}>
                        chethan.dev.ts
                      </span>
                    </div>

                    <button
                      onClick={handleRunCode}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: '4px 10px',
                        borderRadius: 8,
                        background: 'rgba(99,102,241,0.2)',
                        border: '1px solid color-mix(in srgb, var(--accent-primary) 40%, transparent)',
                        color: '#c7d2fe',
                        fontSize: 11,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      <Play size={10} /> Run
                    </button>
                  </div>

                  {/* Code Body */}
                  <div
                    style={{
                      padding: 20,
                      fontFamily: "'Courier New', Courier, monospace",
                      fontSize: 12,
                      lineHeight: 1.65,
                      color: '#e2e8f0',
                      textAlign: 'left',
                    }}
                  >
                    <div><span style={{ color: '#c084fc' }}>const</span> developer = &#123;</div>
                    <div style={{ paddingLeft: 16 }}>name: <span style={{ color: '#38bdf8' }}>'Chethan P'</span>,</div>
                    <div style={{ paddingLeft: 16 }}>education: <span style={{ color: '#38bdf8' }}>'BCA Graduate'</span>,</div>
                    <div style={{ paddingLeft: 16 }}>role: <span style={{ color: '#38bdf8' }}>'Instructor Specialist'</span>,</div>
                    <div style={{ paddingLeft: 16 }}>
                      stack: [<span style={{ color: '#34d399' }}>'React'</span>, <span style={{ color: '#34d399' }}>'Node'</span>, <span style={{ color: '#34d399' }}>'Mongo'</span>],
                    </div>
                    <div style={{ paddingLeft: 16 }}>available: <span style={{ color: '#f59e0b' }}>true</span>,</div>
                    <div style={{ paddingLeft: 16 }}>
                      location: <span style={{ color: '#38bdf8' }}>'Bengaluru, IN'</span>
                    </div>
                    <div>&#125;;</div>
                    <div style={{ marginTop: 12 }}>
                      <span style={{ color: 'var(--accent-light)' }}>export default</span> developer;
                    </div>

                    {/* Output Area */}
                    {runOutput && (
                      <div
                        style={{
                          marginTop: 14,
                          padding: '8px 12px',
                          borderRadius: 8,
                          background: 'rgba(16,185,129,0.1)',
                          border: '1px solid rgba(16,185,129,0.25)',
                          color: '#34d399',
                          fontSize: 11,
                          animation: 'pulse-dot 2s infinite',
                        }}
                      >
                        {runOutput}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </TiltCard>
        </div>

        {/* Bottom Scroll Cue */}
        <div
          style={{
            marginTop: 48,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <a
            href="#about"
            aria-label="Scroll down"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              color: '#64748b',
              textDecoration: 'none',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-light)'}
            onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
          >
            <span>Scroll</span>
            <div className="scroll-indicator">
              <ArrowDown size={14} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
