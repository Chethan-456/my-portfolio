import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Chethan designed and delivered our complete school website with outstanding dedication. The design is modern, mobile-responsive, and has significantly enhanced our online admissions and outreach.',
    author: 'Management Team',
    role: 'Leadership',
    organization: 'National School of Chess',
    tag: 'Web Development & Deployment',
    stars: 5,
  },
  {
    quote: 'Chethan is an exceptional instructor with a genuine passion for youth tech education. He breaks down computational thinking and coding into engaging, approachable concepts for hundreds of students.',
    author: 'Program Lead',
    role: 'Education Operations',
    organization: 'Pi Jam Foundation',
    tag: 'Technology Instruction',
    stars: 5,
  },
  {
    quote: 'Prompt communication, strong full-stack skills, and high attention to detail. Chethan helped bring our web platform from concept to live production smoothly.',
    author: 'Technical Stakeholder',
    role: 'Project Lead',
    organization: 'Corporate Client Project',
    tag: 'MERN Stack Application',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: '#070810', position: 'relative' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <p className="eyebrow">Recommendations &amp; Impact</p>
          <h2 className="section-title">
            Trusted by <span className="text-gradient">Clients &amp; Leaders</span>
          </h2>
          <p className="section-sub">
            Feedback from educational initiatives, client web deployments, and collaborative projects.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={t.organization}
              className="card reveal"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transitionDelay: `${idx * 0.1}s`,
              }}
            >
              <div>
                {/* Header with Quote Icon & Stars */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: 'rgba(99,102,241,0.12)',
                      border: '1px solid rgba(99,102,241,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-light)',
                    }}
                  >
                    <Quote size={18} />
                  </div>

                  <div style={{ display: 'flex', gap: 3 }}>
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                </div>

                <p style={{ fontSize: '0.94rem', color: '#cbd5e1', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 24 }}>
                  "{t.quote}"
                </p>
              </div>

              <div>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: 11,
                    fontWeight: 600,
                    padding: '3px 10px',
                    borderRadius: 20,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#94a3b8',
                    marginBottom: 12,
                  }}
                >
                  {t.tag}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'var(--accent-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#fff',
                    }}
                  >
                    {t.organization.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#f8fafc' }}>{t.author}</p>
                    <p style={{ fontSize: 12, color: '#64748b' }}>{t.role} • {t.organization}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
