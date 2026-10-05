import { CheckCircle2, GraduationCap, Calendar, Trophy, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Instructor Specialist',
    company: 'Pi Jam Foundation',
    period: '2026 — Present',
    type: 'Full-Time',
    current: true,
    color: 'var(--accent-primary)',
    description: 'Empowering students through technology instruction and problem-solving pedagogy.',
    points: [
      'Conducting interactive technology learning modules for 500+ students across schools',
      'Fostering algorithmic thinking, programming fundamentals, and project-based problem solving',
      'Collaborating with educators and product teams to refine educational curriculum and activities',
      'Mentoring students on digital literacy, logical reasoning, and creative tech projects',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed / Independent',
    period: '2025 — Present',
    type: 'Client Projects',
    current: true,
    color: '#14b8a6',
    description: 'Designing, building, and deploying real-world client websites and web platforms.',
    points: [
      'Delivered full lifecycle web applications from requirements gathering to production launch',
      'Developed responsive, accessible, and fast-loading web interfaces using React and Tailwind CSS',
      'Integrated backend REST APIs, authentication flows, and MongoDB database services',
      'Configured custom domains, SSL certificates, SEO optimization, and Vercel cloud hosting',
    ],
  },
  {
    role: 'Core Lead',
    company: 'Chathurya Student Developers Club',
    period: '2025 — 2026',
    type: 'Leadership',
    current: false,
    color: '#3b82f6',
    description: 'Led a student developer community, organized technical workshops, and mentored peers.',
    points: [
      'Fostered collaboration across student volunteers and organized technical events',
      'Conducted web development workshops and shared technical knowledge with juniors',
      'Led team initiatives to build community platforms connecting student developers',
    ],
  },
];

const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  institution: 'University Affiliated College',
  period: 'Graduated 2024 · 3-Year Degree',
  badge: 'Overall Semester Topper (2 Semesters)',
  subjects: [
    'Web Development',
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Software Engineering',
    'Operating Systems',
    'Computer Networks',
  ],
};

export default function Experience() {
  return (
    <section id="experience" style={{ background: '#070810', position: 'relative' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 56 }}>
          <p className="eyebrow">Career &amp; Education</p>
          <h2 className="section-title">
            My Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="section-sub">
            Hands-on work experience in educational technology, freelance software engineering, and university academics.
          </p>
        </div>

        {/* Experience Timeline */}
        <div style={{ position: 'relative', marginBottom: 56 }}>
          {/* Vertical connecting line */}
          <div
            style={{
              position: 'absolute',
              top: 24,
              bottom: 24,
              left: 20,
              width: 2,
              background: 'linear-gradient(to bottom, var(--accent-primary), transparent)',
              borderRadius: 2,
            }}
            className="timeline-track"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {experiences.map((exp, i) => (
              <div
                key={exp.role}
                className="reveal"
                style={{
                  display: 'flex',
                  gap: 32,
                  alignItems: 'flex-start',
                  position: 'relative',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                {/* Timeline node */}
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    background: '#0d0f1c',
                    border: `2px solid ${exp.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 0 16px ${exp.color}40`,
                    flexShrink: 0,
                    zIndex: 2,
                  }}
                  className="timeline-node"
                >
                  <Briefcase size={18} color={exp.color} />
                </div>

                {/* Content Card */}
                <div className="card" style={{ flex: 1, padding: '28px 32px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: 16,
                      marginBottom: 12,
                      flexWrap: 'wrap',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            padding: '3px 10px',
                            borderRadius: 20,
                            background: `${exp.color}15`,
                            border: `1px solid ${exp.color}30`,
                            color: exp.color,
                          }}
                        >
                          {exp.type}
                        </span>
                        {exp.current && <span className="status-pill">Active</span>}
                      </div>

                      <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc' }}>
                        {exp.role}
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: exp.color, fontWeight: 600, marginTop: 2 }}>
                        {exp.company}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#64748b', fontSize: 13 }}>
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', marginBottom: 18, lineHeight: 1.6 }}>
                    {exp.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {exp.points.map((pt) => (
                      <div key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <CheckCircle2 size={15} color={exp.color} style={{ marginTop: 3, flexShrink: 0 }} />
                        <span style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.55 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Highlight Card */}
        <div className="card reveal" style={{ padding: '32px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 16,
              marginBottom: 20,
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'rgba(245,158,11,0.12)',
                  border: '1px solid rgba(245,158,11,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fbbf24',
                }}
              >
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="font-display" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc' }}>
                  {education.degree}
                </h3>
                <p style={{ fontSize: 13, color: '#64748b' }}>{education.period}</p>
              </div>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 20,
                background: 'rgba(245,158,11,0.12)',
                border: '1px solid rgba(245,158,11,0.3)',
                color: '#fbbf24',
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              <Trophy size={15} />
              <span>{education.badge}</span>
            </div>
          </div>

          <p style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
            Key Areas of Academic Study
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {education.subjects.map((sub) => (
              <span
                key={sub}
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  padding: '6px 14px',
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#cbd5e1',
                }}
              >
                {sub}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-track { left: 16px !important; }
          .timeline-node { width: 34px !important; height: 34px !important; }
          .timeline-node svg { width: 14px !important; height: 14px !important; }
        }
      `}</style>
    </section>
  );
}
