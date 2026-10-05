import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Copy, Check, ArrowUpRight, MessageSquareCode } from 'lucide-react';
import { Github, Linkedin, Instagram } from '../components/SocialIcons';
import { profile } from '../config/profile';

const TOPICS = [
  'Website / Web App',
  'Full-Time Opportunity',
  'Technology Mentorship',
  'General Inquiry',
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Website / Web App');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  const contactEmail = profile.social.email.startsWith('[') ? 'chethan.dev@example.com' : profile.social.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4500);
    }, 1000);
  };

  return (
    <section id="contact" style={{ background: '#06070d', position: 'relative' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 44 }}>
          <p className="eyebrow">Get in Touch</p>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-sub">
            Whether you have a freelance project, career opportunity, or want to discuss web technology — my inbox is always open.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 32, alignItems: 'start' }} className="contact-grid">
          {/* Left Column: Direct Info & Socials */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Direct Email Card */}
            <div className="card" style={{ padding: '28px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-light)'
                }}>
                  <Mail size={22} />
                </div>
                <div>
                  <p style={{ fontSize: 12, color: '#64748b', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Direct Email</p>
                  <p style={{ fontSize: 16, fontWeight: 600, color: '#f1f5f9' }}>{contactEmail}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a
                  href={`mailto:${contactEmail}`}
                  className="btn btn-primary"
                  style={{ fontSize: 13, padding: '9px 18px', textDecoration: 'none' }}
                >
                  <Send size={14} /> Send Email
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-outline"
                  style={{ fontSize: 13, padding: '9px 16px' }}
                >
                  {copied ? <><Check size={14} color="#10b981" /> Copied!</> : <><Copy size={14} /> Copy Address</>}
                </button>
              </div>
            </div>

            {/* Quick Details Card */}
            <div className="card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399'
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p style={{ fontSize: 11, color: '#64748b', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Location</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#e2e8f0' }}>Bengaluru, Karnataka, India</p>
                  </div>
                </div>

                <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                  <span style={{ fontSize: 13, color: '#94a3b8' }}>Status</span>
                  <span className="status-pill">Available for Roles &amp; Projects</span>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="card" style={{ padding: '22px 24px' }}>
              <p style={{ fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>
                Find Me On
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {[
                  { label: 'LinkedIn', icon: Linkedin, href: profile.social.linkedin },
                  { label: 'GitHub', icon: Github, href: profile.social.github },
                  { label: 'Instagram', icon: Instagram, href: profile.social.instagram },
                ].map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href.startsWith('[') ? '#' : href}
                    target={href.startsWith('[') ? '_self' : '_blank'}
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '8px 14px', borderRadius: 10,
                      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                      color: '#cbd5e1', fontSize: 13, fontWeight: 500, textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent-primary) 40%, transparent)'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#cbd5e1'; }}
                  >
                    <Icon size={16} />
                    <span>{label}</span>
                    <ArrowUpRight size={13} style={{ color: '#64748b' }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="card reveal" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <MessageSquareCode size={18} color="var(--accent-light)" />
              <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc' }}>
                Send a Message
              </h3>
            </div>
            <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 20 }}>
              Select an inquiry topic or write a direct note.
            </p>

            {/* Quick Topic Chips */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                Inquiry Topic
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {TOPICS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTopic(t)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 10,
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 12,
                      fontWeight: 600,
                      transition: 'all 0.2s',
                      background: selectedTopic === t ? 'rgba(99,102,241,0.22)' : 'rgba(255,255,255,0.03)',
                      color: selectedTopic === t ? '#c7d2fe' : '#94a3b8',
                      outline: selectedTopic === t ? '1px solid color-mix(in srgb, var(--accent-primary) 40%, transparent)' : '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {status === 'success' ? (
              <div style={{
                padding: '36px 20px', textAlign: 'center',
                background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)',
                borderRadius: 16
              }}>
                <CheckCircle size={44} color="#10b981" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: 17, fontWeight: 700, color: '#f8fafc', marginBottom: 6 }}>Message Delivered!</h4>
                <p style={{ fontSize: 13, color: '#94a3b8' }}>
                  Thank you for reaching out regarding <strong>{selectedTopic}</strong>. I will reply to your email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#94a3b8', marginBottom: 6 }}>
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Sharma"
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: 10,
                      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
                      color: '#f8fafc', fontSize: 14, outline: 'none', transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#94a3b8', marginBottom: 6 }}>
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: 10,
                      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
                      color: '#f8fafc', fontSize: 14, outline: 'none', transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#94a3b8', marginBottom: 6 }}>
                    Message Details
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder={`Tell me about your ${selectedTopic.toLowerCase()} or ideas...`}
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: 10,
                      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
                      color: '#f8fafc', fontSize: 14, outline: 'none', transition: 'border-color 0.2s',
                      resize: 'vertical',
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn btn-primary"
                  style={{ justifyContent: 'center', marginTop: 6, padding: '14px', width: '100%' }}
                >
                  {status === 'sending' ? 'Sending Message...' : <><Send size={15} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
