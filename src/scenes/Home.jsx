import SceneShell from '../components/SceneShell.jsx';

export default function Home({ active, go, onScroll, sceneRef }) {
  return (
    <SceneShell
      active={active}
      scrollable={true}
      onScroll={onScroll}
      ref={sceneRef}
      padding="0"
    >
      {/* minHeight 100% keeps content bottom-anchored in portrait;
          in landscape when the viewport is too short it overflows and scrolls. */}
      <div
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          textAlign: 'center',
          padding: 'clamp(80px,11vh,120px) 24px clamp(40px,7vh,72px)',
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '.24em',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            marginBottom: 18,
          }}
        >
          Wilderist Entertainment
        </div>
        <h1
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(34px,5.6vw,72px)',
            lineHeight: 0.98,
            letterSpacing: '-.02em',
            margin: '0 0 16px',
            textShadow: '0 6px 40px rgba(0,0,0,.7)',
          }}
        >
          Games worth getting{' '}
          <span style={{ fontFamily: "'Newsreader', serif", fontStyle: 'italic', fontWeight: 500, color: 'var(--accent)' }}>
            lost
          </span>{' '}
          in.
        </h1>
        <p
          style={{
            maxWidth: '30em',
            fontSize: 'clamp(14.5px,1.6vw,17px)',
            lineHeight: 1.6,
            color: 'var(--muted)',
            margin: '0 0 30px',
            textShadow: '0 2px 18px rgba(0,0,0,.8)',
          }}
        >
          Wilderist Entertainment is an independent studio making digital and tabletop games — built with craft,
          character, and room to explore.
        </p>
        <button
          onClick={() => go('work')}
          className="wx-lift-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 11,
            background: 'var(--accent)',
            color: 'var(--on-accent)',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontWeight: 600,
            fontSize: 16,
            padding: '16px 34px',
            borderRadius: 999,
            boxShadow: '0 16px 44px -14px rgba(226,188,124,.65)',
          }}
        >
          Explore the work <span style={{ display: 'inline-block', animation: 'wx-arrow 1.8s ease-in-out infinite' }}>→</span>
        </button>
        <div
          style={{
            marginTop: 26,
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px 18px',
            justifyContent: 'center',
            fontSize: 13.5,
            color: 'var(--faint)',
          }}
        >
          <span onClick={() => go('cube')} className="wx-link">Cube Conquest</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span onClick={() => go('breathe')} className="wx-link">Help! I Can't Breathe</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span onClick={() => go('studio')} className="wx-link">The studio</span>
        </div>
      </div>
    </SceneShell>
  );
}
