import { useState } from 'react';
import { skills, skillGroups } from '../data/skills';
import { Layers, Sparkles, FolderGit2, Users2, Code2, Search, X } from 'lucide-react';

const skillMap = Object.fromEntries(skills.map(s => [s.name, s]));

// Proficiency levels for visual enhancement
const levels = {
  'JavaScript': 'Advanced',
  'React.js': 'Advanced',
  'Tailwind CSS': 'Advanced',
  'HTML5': 'Mastery',
  'CSS3': 'Mastery',
  'Node.js': 'Proficient',
  'Express.js': 'Proficient',
  'MongoDB': 'Proficient',
  'Supabase': 'Proficient',
  'Python': 'Proficient',
  'REST APIs': 'Advanced',
  'Git': 'Advanced',
  'GitHub': 'Advanced',
  'Vercel': 'Advanced',
  'Firebase': 'Working Knowledge',
  'SEO': 'Proficient',
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', ...skillGroups.map(g => g.label)];

  // Filter skills based on search term or category
  const filteredSkills = search.trim()
    ? skills.filter(s => s.name.toLowerCase().includes(search.toLowerCase().trim()))
    : null;

  const displayedGroups = activeTab === 'All'
    ? skillGroups
    : skillGroups.filter(g => g.label === activeTab);

  return (
    <section id="skills" style={{ background: '#06070d', position: 'relative' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 40 }}>
          <p className="eyebrow">Technical Expertise</p>
          <h2 className="section-title">
            Technologies &amp; <span className="text-gradient">Tools</span>
          </h2>
          <p className="section-sub">
            The core technology stack and development tools I use to design, build, and deploy production software.
          </p>
        </div>

        {/* Controls Row: Category Tabs & Search Bar */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            marginBottom: 36,
            flexWrap: 'wrap',
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat);
                  setSearch('');
                }}
                style={{
                  padding: '8px 18px',
                  borderRadius: 12,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: 600,
                  transition: 'all 0.25s ease',
                  background: activeTab === cat && !search ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.04)',
                  color: activeTab === cat && !search ? '#ffffff' : '#94a3b8',
                  boxShadow: activeTab === cat && !search ? '0 4px 20px var(--accent-glow)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', width: 240, maxWidth: '100%' }}>
            <Search
              size={15}
              style={{
                position: 'absolute',
                left: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#64748b',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              placeholder="Search tech..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 36px 9px 38px',
                borderRadius: 12,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#f8fafc',
                fontSize: 13,
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                aria-label="Clear search"
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: 2,
                  display: 'flex',
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Search Results Mode */}
        {filteredSkills ? (
          <div className="reveal">
            <p style={{ fontSize: 13, color: '#64748b', marginBottom: 16 }}>
              Found {filteredSkills.length} {filteredSkills.length === 1 ? 'skill' : 'skills'} matching "{search}"
            </p>
            {filteredSkills.length === 0 ? (
              <div style={{ padding: '36px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ fontSize: 14, color: '#94a3b8' }}>No technologies matching that query.</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
                {filteredSkills.map((s) => {
                  const level = levels[s.name] || 'Proficient';
                  return (
                    <div
                      key={s.name}
                      style={{
                        padding: '16px 18px',
                        borderRadius: 16,
                        background: 'rgba(255,255,255,0.025)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div
                          style={{
                            width: 38,
                            height: 38,
                            borderRadius: 10,
                            background: s.bg,
                            border: `1px solid ${s.border}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 13,
                            fontWeight: 800,
                            color: s.color,
                          }}
                        >
                          {s.icon}
                        </div>
                        <div>
                          <p style={{ fontSize: 14, fontWeight: 600, color: '#f1f5f9' }}>{s.name}</p>
                          <span style={{ fontSize: 11, color: '#64748b', fontWeight: 500 }}>{level}</span>
                        </div>
                      </div>
                      <Sparkles size={14} style={{ color: s.color, opacity: 0.6 }} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* Normal Grouped View */
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {displayedGroups.map((group) => (
              <div key={group.label} className="reveal">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <Layers size={15} color="var(--accent-light)" />
                  <h3 style={{ fontSize: 13, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    {group.label}
                  </h3>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: 14,
                  }}
                >
                  {group.ids.map((name) => {
                    const s = skillMap[name];
                    if (!s) return null;
                    const level = levels[name] || 'Proficient';

                    return (
                      <div
                        key={name}
                        style={{
                          padding: '16px 18px',
                          borderRadius: 16,
                          background: 'rgba(255,255,255,0.025)',
                          border: '1px solid rgba(255,255,255,0.07)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 12,
                          transition: 'all 0.25s ease',
                          cursor: 'default',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-3px)';
                          e.currentTarget.style.borderColor = s.border;
                          e.currentTarget.style.background = s.bg;
                          e.currentTarget.style.boxShadow = `0 12px 28px -6px ${s.bg}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = '';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                          e.currentTarget.style.background = 'rgba(255,255,255,0.025)';
                          e.currentTarget.style.boxShadow = '';
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div
                            style={{
                              width: 38,
                              height: 38,
                              borderRadius: 10,
                              background: s.bg,
                              border: `1px solid ${s.border}`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: 13,
                              fontWeight: 800,
                              color: s.color,
                              flexShrink: 0,
                            }}
                          >
                            {s.icon}
                          </div>
                          <div>
                            <p style={{ fontSize: 14, fontWeight: 600, color: '#f1f5f9' }}>{s.name}</p>
                            <span style={{ fontSize: 11, color: '#64748b', fontWeight: 500 }}>{level}</span>
                          </div>
                        </div>

                        <Sparkles size={14} style={{ color: s.color, opacity: 0.6 }} />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats Row */}
        <div
          className="reveal"
          style={{
            marginTop: 56,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
          id="skills-stats"
        >
          {[
            { n: '15+', label: 'Web Applications & Sites', icon: FolderGit2, color: 'var(--accent-primary)' },
            { n: '500+', label: 'Students Mentored', icon: Users2, color: '#10b981' },
            { n: '3+ Yrs', label: 'Tech Experience', icon: Code2, color: '#f59e0b' },
          ].map(({ n, label, icon: Icon, color }) => (
            <div
              key={label}
              className="card"
              style={{
                textAlign: 'center',
                padding: '28px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: `${color}15`,
                  border: `1px solid ${color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: color,
                  marginBottom: 4,
                }}
              >
                <Icon size={22} />
              </div>
              <p
                className="font-display"
                style={{
                  fontSize: '2.25rem',
                  fontWeight: 800,
                  color: '#f8fafc',
                  lineHeight: 1,
                }}
              >
                {n}
              </p>
              <p style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #skills-stats {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
