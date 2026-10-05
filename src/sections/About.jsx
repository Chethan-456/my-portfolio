import { CheckCircle2, GraduationCap, Code2, Globe, Users, Sparkles, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: GraduationCap,
    title: 'Academic Foundation',
    badge: 'BCA Graduate',
    color: 'var(--accent-primary)',
    desc: 'Graduated with Bachelor of Computer Applications and recognized as Overall Semester Topper across 2 semesters.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    badge: 'MERN Stack',
    color: 'var(--accent-primary)',
    desc: 'Building responsive web platforms with modern React, Node.js, Express, and database architectures.',
  },
  {
    icon: Globe,
    title: 'Freelance & Production',
    badge: 'Client Delivery',
    color: '#14b8a6',
    desc: 'Shipped live production websites for businesses and institutions with clean SEO and fast performance.',
  },
  {
    icon: Users,
    title: 'Technology Educator',
    badge: 'Pi Jam Foundation',
    color: '#f59e0b',
    desc: 'Mentoring 500+ students in computational thinking, programming concepts, and practical digital problem solving.',
  },
];

const highlights = [
  'Modern frontends built with React.js, Tailwind CSS, and component systems',
  'RESTful APIs, authentication, and database modeling with Node & MongoDB',
  'Production deployments with responsive mobile-first architecture',
  'Active mentoring and technical instruction at Pi Jam Foundation',
];

export default function About() {
  return (
    <section id="about" style={{ background: '#06070d', position: 'relative' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 54 }}>
          <p className="eyebrow">About Chethan</p>
          <h2 className="section-title">
            Driven by Curiosity, <span className="text-gradient">Defined by Code</span>
          </h2>
          <p className="section-sub">
            Combining academic rigor, practical full-stack development, and tech education to build purposeful digital solutions.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1.2fr',
            gap: 48,
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left Column: Story & Highlights */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <Sparkles size={18} color="var(--accent-light)" />
                <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc' }}>
                  My Background
                </h3>
              </div>

              <p style={{ fontSize: '0.98rem', color: '#94a3b8', lineHeight: 1.8, marginBottom: 18 }}>
                I am a BCA graduate with a strong passion for software engineering and web technologies. My experience bridges two exciting domains: delivering end-to-end web applications for clients as a freelance developer, and mentoring 500+ students as an Instructor Specialist at Pi Jam Foundation.
              </p>

              <p style={{ fontSize: '0.98rem', color: '#94a3b8', lineHeight: 1.8, marginBottom: 28 }}>
                I focus on writing clean, scalable code and creating delightful user experiences that solve real-world problems. Whether building interactive educational tools or corporate client platforms, I bring precision and dedication to every project.
              </p>

              <h4 style={{ fontSize: 13, fontWeight: 700, color: '#c7d2fe', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
                Core Capabilities
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {highlights.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{
                      marginTop: 2,
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      background: 'color-mix(in srgb, var(--accent-primary) 15%, transparent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <CheckCircle2 size={13} color="var(--accent-light)" />
                    </div>
                    <span style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <a href="#experience" className="btn btn-outline" style={{ fontSize: 13, padding: '10px 18px' }}>
                  Explore My Experience <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillar Feature Cards */}
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 18 }}>
            {pillars.map(({ icon: Icon, title, badge, color, desc }, i) => (
              <div
                key={title}
                className="card"
                style={{
                  padding: '24px 28px',
                  display: 'flex',
                  gap: 20,
                  alignItems: 'flex-start',
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: color,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                    <h4 className="font-display" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc' }}>
                      {title}
                    </h4>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: 20,
                        background: `${color}12`,
                        border: `1px solid ${color}28`,
                        color: color,
                      }}
                    >
                      {badge}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.65 }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
