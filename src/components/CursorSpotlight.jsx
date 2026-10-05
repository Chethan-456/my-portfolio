import { useEffect, useState } from 'react';

export default function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, color-mix(in srgb, var(--accent-primary) 8%, transparent) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'transform 0.08s ease-out',
      }}
      aria-hidden
    />
  );
}
