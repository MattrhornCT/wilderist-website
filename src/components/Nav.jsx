import wilderistMark from '../assets/wilderist-mark.png';

const NAV_ITEMS = [
  { key: 'home', label: 'Home' },
  { key: 'work', label: 'Work' },
  { key: 'studio', label: 'Studio' },
  { key: 'contact', label: 'Contact' },
];

export default function Nav({ navGroup, blurred, onNavigate }) {
  return (
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
      <div
        style={{
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
        }}
      />
      <a
        onClick={() => onNavigate('home')}
        style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', color: 'var(--ink)', textDecoration: 'none' }}
      >
        <img src={wilderistMark} alt="" style={{ height: 34, width: 'auto', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,.4))' }} />
        <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: '.18em' }}>
          WILDERIST
        </span>
      </a>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,2.4vw,32px)' }}>
        {NAV_ITEMS.map((item) => (
          <span
            key={item.key}
            onClick={() => onNavigate(item.key)}
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
    </nav>
  );
}
