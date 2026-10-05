import { ArrowUp } from 'lucide-react';
import { Github, Linkedin, Instagram } from './SocialIcons';
import { profile } from '../config/profile';

const CURRENT_YEAR = 2026;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer style={{
      background: '#040509',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 0 32px',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 24,
          paddingBottom: 32,
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'var(--accent-gradient)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15, color: '#fff',
            }}>
              CP
            </div>
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '#f1f5f9' }}>
                Chethan P
              </p>
              <p style={{ fontSize: 12, color: '#64748b' }}>
                Software Developer &amp; Full-Stack Web Developer
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="nav-link"
                style={{ fontSize: 13 }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="btn btn-outline"
            style={{
              padding: '10px 14px', borderRadius: 10, fontSize: 12,
              display: 'flex', alignItems: 'center', gap: 6,
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          paddingTop: 24,
          fontSize: 12,
          color: '#475569',
        }}>
          <p>© {CURRENT_YEAR} Chethan P. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 16 }}>
            <a
              href={profile.social.github.startsWith('[') ? '#' : profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              style={{ color: '#64748b', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
            >
              <Github size={16} />
            </a>
            <a
              href={profile.social.linkedin.startsWith('[') ? '#' : profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              style={{ color: '#64748b', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
            >
              <Linkedin size={16} />
            </a>
            <a
              href={profile.social.instagram.startsWith('[') ? '#' : profile.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              style={{ color: '#64748b', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
