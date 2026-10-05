import { useState } from 'react';
import { ExternalLink, Eye, ArrowRight, X, Sparkles, CheckCircle2, Globe, Lock } from 'lucide-react';
import { projects } from '../data/projects';
import TiltCard from '../components/TiltCard';

const filters = ['All', 'Live Sites', 'Full-Stack', 'Frontend'];

function statusBadge(status) {
  if (status === 'live') {
    return {
      label: 'Live in Production',
      icon: Globe,
      color: '#10b981',
      bg: 'rgba(16,185,129,0.1)',
      border: 'rgba(16,185,129,0.25)',
    };
  }
  return {
    label: 'Enterprise / Private',
    icon: Lock,
    color: 'var(--accent-primary)',
    bg: 'rgba(139,92,246,0.1)',
    border: 'rgba(139,92,246,0.25)',
  };
}

export default function Projects() {
  const [active, setActive] = useState('All');
  const [modal, setModal] = useState(null);

  const filtered = projects.filter((p) => {
    if (active === 'All') return true;
    if (active === 'Live Sites') return p.status === 'live';
    if (active === 'Full-Stack') return p.tags.some((t) => ['Node.js', 'Express.js', 'MongoDB', 'Supabase'].includes(t));
    if (active === 'Frontend') return p.role === 'Frontend Developer' || p.tags.includes('Tailwind CSS');
    return true;
  });

  const featured = filtered.filter((p) => p.featured);
  const others = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ background: '#070810', position: 'relative' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 44 }}>
          <p className="eyebrow">Portfolio Works</p>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-sub">
            Real-world websites, web platforms, and client applications built and maintained.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            gap: 10,
            marginBottom: 40,
            flexWrap: 'wrap',
          }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: '8px 20px',
                borderRadius: 12,
                border: 'none',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 600,
                transition: 'all 0.25s ease',
                background: active === f ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.04)',
                color: active === f ? '#ffffff' : '#94a3b8',
                boxShadow: active === f ? '0 4px 20px var(--accent-glow)' : 'none',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Featured Projects: Showcase Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginBottom: 48 }}>
          {featured.map((p, i) => {
            const sb = statusBadge(p.status);
            const StatusIcon = sb.icon;

            return (
              <TiltCard
                key={p.id}
                className="card reveal"
                style={{
                  padding: 0,
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                {/* Browser Mockup Chrome Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 20px',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.015)',
                  }}
                >
                  <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444', opacity: 0.8 }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b', opacity: 0.8 }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981', opacity: 0.8 }} />
                    <span style={{ fontSize: 11, color: '#475569', marginLeft: 12, fontFamily: 'monospace' }}>
                      {p.liveUrl ? p.liveUrl.replace('https://', '') : `${p.id}.dev`}
                    </span>
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 11,
                      fontWeight: 600,
                      padding: '3px 12px',
                      borderRadius: 20,
                      background: sb.bg,
                      border: `1px solid ${sb.border}`,
                      color: sb.color,
                    }}
                  >
                    <StatusIcon size={12} />
                    <span>{sb.label}</span>
                  </div>
                </div>

                {/* Card Main Body */}
                <div style={{ padding: '28px 32px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: 16,
                      marginBottom: 14,
                      flexWrap: 'wrap',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            padding: '3px 10px',
                            borderRadius: 20,
                            background: `${p.color}15`,
                            border: `1px solid ${p.color}30`,
                            color: p.color,
                          }}
                        >
                          {p.subtitle}
                        </span>
                        <span style={{ fontSize: 12, color: '#64748b' }}>• {p.type}</span>
                      </div>

                      <h3
                        className="font-display"
                        style={{ fontSize: '1.45rem', fontWeight: 700, color: '#f8fafc' }}
                      >
                        {p.title}
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: p.color, fontWeight: 600, marginTop: 2 }}>
                        Role: {p.role}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary"
                          style={{ padding: '9px 18px', fontSize: 13 }}
                        >
                          <ExternalLink size={14} /> Live Site
                        </a>
                      )}
                      <button
                        onClick={() => setModal(p)}
                        className="btn btn-outline"
                        style={{ padding: '9px 16px', fontSize: 13 }}
                      >
                        <Eye size={14} /> Case Details
                      </button>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.96rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: 20, maxWidth: 740 }}>
                    {p.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 22 }}>
                    {p.highlights.map((h) => (
                      <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <CheckCircle2 size={14} color="var(--accent-light)" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tag Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {p.tags.map((t) => (
                      <span key={t} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Other Projects Grid */}
        {others.length > 0 && (
          <div className="reveal">
            <h4
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: 18,
              }}
            >
              Additional Notable Projects
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
              {others.map((p, i) => {
                const sb = statusBadge(p.status);
                return (
                  <div
                    key={p.id}
                    className="card"
                    style={{
                      padding: '24px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transitionDelay: `${i * 0.08}s`,
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 600,
                            padding: '3px 10px',
                            borderRadius: 20,
                            background: sb.bg,
                            border: `1px solid ${sb.border}`,
                            color: sb.color,
                          }}
                        >
                          {sb.label}
                        </span>
                        <span style={{ fontSize: 11, color: '#64748b' }}>{p.subtitle}</span>
                      </div>

                      <h4 className="font-display" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: 6 }}>
                        {p.title}
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: 16 }}>
                        {p.description}
                      </p>
                    </div>

                    <div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                        {p.tags.map((t) => (
                          <span key={t} className="badge" style={{ fontSize: 11, padding: '4px 10px' }}>
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setModal(p)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: 'var(--accent-light)',
                          fontSize: 13,
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          padding: 0,
                        }}
                      >
                        <span>View Details</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Project Case Modal */}
      {modal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(12px)',
          }}
          onClick={() => setModal(null)}
        >
          <div
            style={{
              maxWidth: 580,
              width: '100%',
              borderRadius: 24,
              background: '#0d0f1c',
              border: '1px solid rgba(255,255,255,0.12)',
              padding: 32,
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModal(null)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#cbd5e1',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '3px 10px',
                  borderRadius: 20,
                  background: `${modal.color}15`,
                  border: `1px solid ${modal.color}30`,
                  color: modal.color,
                }}
              >
                {modal.subtitle}
              </span>
              <span style={{ fontSize: 12, color: '#64748b' }}>• {modal.type}</span>
            </div>

            <h3 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f8fafc', marginBottom: 6 }}>
              {modal.title}
            </h3>
            <p style={{ fontSize: '0.95rem', color: modal.color, fontWeight: 600, marginBottom: 16 }}>
              Role: {modal.role}
            </p>

            <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: 24 }}>
              {modal.description}
            </p>

            <h4 style={{ fontSize: 12, fontWeight: 700, color: '#c7d2fe', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
              Key Technical Deliverables
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
              {modal.highlights.map((h) => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Sparkles size={14} color={modal.color} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>{h}</span>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: 12, fontWeight: 700, color: '#c7d2fe', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
              Technologies Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              {modal.tags.map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>

            {modal.liveUrl && (
              <a
                href={modal.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
              >
                <ExternalLink size={15} /> Visit Live Production Website
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
