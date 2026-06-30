import { useState, useEffect } from 'react';
import wilderistMark from '../assets/wilderist-mark.png';

const NAV_ITEMS = [
  { key: 'home', label: 'Home' },
  { key: 'work', label: 'Work' },
  { key: 'studio', label: 'Studio' },
  { key: 'contact', label: 'Contact' },
];

function useMobile(breakpoint = 600) {
  const [mobile, setMobile] = useState(() => window.innerWidth < breakpoint);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e) => setMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [breakpoint]);
  return mobile;
}

export default function Nav({ navGroup, blurred, onNavigate }) {
  const mobile = useMobile();
  const [open, setOpen] = useState(false);

  function navigate(key) {
    onNavigate(key);
    setOpen(false);
  }

  // Close drawer if viewport grows past mobile breakpoint
  useEffect(() => { if (!mobile) setOpen(false); }, [mobile]);

  const backdropStyle = {
    position: 'absolute',
    inset: 0,
    zIndex: -1,
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    background: 'linear-gradient(180deg, rgba(10,14,21,.88), rgba(10,14,21,.4))',
    borderBottom: '1px solid var(--line)',
    opacity: blurred ? 1 : 0,
    transition: 'opacity .35s ease',
    pointerEvents: 'none',
  };

  return (
    <>
      <nav
        style={{
          position: 'absolute',
          zIndex: 20,
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          gap: 22,
          padding: '16px clamp(20px,4vw,48px)',
        }}
      >
        <div style={backdropStyle} />

        {/* Logo */}
        <a
          onClick={() => navigate('home')}
          style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', color: 'var(--ink)', textDecoration: 'none', padding: '0 8px' }}
        >
          <img src={wilderistMark} alt="" style={{ height: 34, width: 'auto', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,.4))' }} />
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: '.18em' }}>
            WILDERIST
          </span>
        </a>

        <div style={{ flex: 1 }} />

        {/* Desktop links */}
        {!mobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,2.4vw,32px)', padding: '0 8px' }}>
            {NAV_ITEMS.map((item) => (
              <span
                key={item.key}
                onClick={() => navigate(item.key)}
                className="wx-link"
                style={{
                  cursor: 'pointer',
                  color: navGroup === item.key ? 'var(--accent)' : 'var(--faint)',
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: '.02em',
                  transition: 'color var(--ts) ease',
                }}
              >
                {item.label}
              </span>
            ))}
          </div>
        )}

        {/* Hamburger button */}
        {mobile && (
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              color: 'var(--ink)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 5,
              width: 36,
              height: 36,
            }}
          >
            <span style={{
              display: 'block', height: 2, background: 'currentColor', borderRadius: 2,
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
              transition: 'transform .25s ease',
            }} />
            <span style={{
              display: 'block', height: 2, background: 'currentColor', borderRadius: 2,
              opacity: open ? 0 : 1,
              transition: 'opacity .2s ease',
            }} />
            <span style={{
              display: 'block', height: 2, background: 'currentColor', borderRadius: 2,
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
              transition: 'transform .25s ease',
            }} />
          </button>
        )}
      </nav>

      {/* Mobile drawer */}
      {mobile && (
        <div
          style={{
            position: 'absolute',
            zIndex: 19,
            top: 0,
            left: 0,
            right: 0,
            paddingTop: 70,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            background: 'rgba(10,14,21,.96)',
            borderBottom: '1px solid var(--line2)',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            padding: '70px 28px 28px',
            transform: open ? 'translateY(0)' : 'translateY(-110%)',
            transition: 'transform .3s cubic-bezier(.4,0,.2,1)',
            pointerEvents: open ? 'auto' : 'none',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <span
              key={item.key}
              onClick={() => navigate(item.key)}
              style={{
                cursor: 'pointer',
                color: navGroup === item.key ? 'var(--accent)' : 'var(--ink)',
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: 28,
                letterSpacing: '-.01em',
                padding: '10px 0',
                borderBottom: '1px solid var(--line)',
                transition: 'color .2s ease',
              }}
            >
              {item.label}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
