import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.reveal, .reveal-left').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
          el.classList.add('visible');
        }
      });
    };
    reveal();
    setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left').forEach(el => el.classList.add('visible'));
    }, 800);
    window.addEventListener('scroll', reveal, { passive: true });
    return () => window.removeEventListener('scroll', reveal);
  }, []);
}
