import SceneShell from '../components/SceneShell.jsx';
import { FEATURES, LINKS } from '../content.js';

export default function CubeConquest({ active, go, onScroll, sceneRef }) {
  return (
    <SceneShell active={active} onScroll={onScroll} ref={sceneRef} padding="clamp(92px,11vh,120px) clamp(20px,5vw,56px) 72px">
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <span
          onClick={() => go('work')}
          className="wx-link"
          style={{ display: 'flex', width: 'fit-content', alignItems: 'center', gap: 7, color: 'var(--faint)', fontSize: 13.5, fontWeight: 600, marginBottom: 22 }}
        >
          ← The work
        </span>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 9,
            marginBottom: 14,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '.2em',
            color: 'var(--accent)',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent2)' }} />
          Playable now · Digital
        </div>
        <h2
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(38px,6.4vw,80px)',
            lineHeight: 0.95,
            letterSpacing: '-.03em',
            margin: '0 0 18px',
          }}
        >
          Cube Conquest
        </h2>
        <p style={{ maxWidth: '32em', fontSize: 'clamp(15px,1.8vw,19px)', lineHeight: 1.6, color: 'var(--muted)', margin: '0 0 34px' }}>
          A bite-sized strategy game you can play right now in your browser. Claim the board cube by cube, and hold
          your ground for just{' '}
          <span style={{ fontFamily: "'Newsreader', serif", fontStyle: 'italic', color: 'var(--ink)' }}>one more turn.</span>
        </p>

        <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid var(--line2)', boxShadow: '0 40px 90px -40px rgba(0,0,0,.9)', marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', background: '#11161f', borderBottom: '1px solid var(--line)' }}>
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#e2766a' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#e2bc7c' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#9aab6b' }} />
            <div
              style={{
                flex: 1,
                margin: '0 14px',
                maxWidth: 440,
                background: '#0b1017',
                border: '1px solid var(--line)',
                borderRadius: 8,
                padding: '7px 14px',
                fontSize: 12,
                color: 'var(--faint)',
                fontFamily: 'ui-monospace, monospace',
                textAlign: 'center',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              wilderistentertainment.itch.io/cube-conquest
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              aspectRatio: '16/9',
              background: 'radial-gradient(120% 120% at 50% 0%, #16202c, #0b1017)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <a
              href={LINKS.itch}
              target="_blank"
              rel="noopener"
              className="wx-zoom"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textDecoration: 'none', color: 'var(--ink)', transition: 'transform .3s' }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 78,
                  height: 78,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  color: 'var(--on-accent)',
                  fontSize: 28,
                  boxShadow: '0 20px 50px -16px rgba(226,188,124,.7)',
                }}
              >
                ▶
              </span>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 17 }}>
                Play the demo in your browser
              </span>
              <span style={{ fontSize: 12.5, color: 'var(--faint)' }}>Opens on itch.io · Free · No install</span>
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px,1fr))', gap: 16 }}>
          {FEATURES.map((f) => (
            <div key={f.t} style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', background: 'var(--card-bg)', border: '1px solid var(--card-brd)', borderRadius: 14, padding: 22 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 19,
                  marginBottom: 14,
                  background: 'rgba(226,188,124,.14)',
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 18, margin: '0 0 8px' }}>{f.t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </SceneShell>
  );
}
