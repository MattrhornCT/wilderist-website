import SceneShell from '../components/SceneShell.jsx';
import { PILLARS } from '../content.js';

const heading = {
  fontFamily: "'Bricolage Grotesque', sans-serif",
  fontWeight: 600,
  fontSize: 'clamp(22px,3.4vw,38px)',
  lineHeight: 1.08,
  letterSpacing: '-.02em',
  color: 'var(--muted)',
};

export default function Breathe({ active, go, onScroll, sceneRef }) {
  return (
    <SceneShell active={active} onScroll={onScroll} ref={sceneRef} padding="clamp(92px,11vh,120px) clamp(20px,5vw,56px) 88px">
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <span
          onClick={() => go('work')}
          className="wx-link"
          style={{ display: 'flex', width: 'fit-content', alignItems: 'center', gap: 7, color: 'var(--faint)', fontSize: 13.5, fontWeight: 600, marginBottom: 30 }}
        >
          ← The work
        </span>

        {/* HERO */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 9,
            marginBottom: 18,
            padding: '7px 14px',
            borderRadius: 999,
            border: '1px solid var(--card-brd)',
            background: 'rgba(18,25,35,.5)',
            fontSize: 11.5,
            fontWeight: 600,
            letterSpacing: '.16em',
            color: 'var(--faint)',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 0 0 var(--accent)', animation: 'wx-breath 2.6s ease-in-out infinite' }} />
          In active development
        </div>
        <h2
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(38px,7vw,84px)',
            lineHeight: 0.94,
            letterSpacing: '-.03em',
            margin: '0 0 22px',
          }}
        >
          Help! I Can't
          <br />
          Breathe
        </h2>
        <p
          style={{
            maxWidth: '24em',
            fontSize: 'clamp(17px,2.2vw,24px)',
            lineHeight: 1.5,
            color: 'var(--ink)',
            fontFamily: "'Newsreader', serif",
            fontStyle: 'italic',
            fontWeight: 500,
            margin: '0 0 clamp(56px,9vw,92px)',
          }}
        >
          The deeper you go, the less air you have to get back — and there's always one more reason to keep going
          down.
        </p>

        {/* THE PREMISE */}
        <div style={{ paddingTop: 'clamp(40px,6vw,56px)', borderTop: '1px solid var(--line)', marginBottom: 'clamp(48px,8vw,80px)' }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.22em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 20 }}>
            The Premise
          </div>
          <p style={{ maxWidth: '30em', fontSize: 'clamp(17px,2vw,22px)', lineHeight: 1.62, color: 'var(--ink)', margin: 0, textWrap: 'pretty' }}>
            You're a Spelunker, and the cave doesn't end where your lamp does. Every step down is a step further
            from the surface — and from the air that gets you back to it. You weren't the first to descend; others
            are somewhere in the dark, and some of them never came up. And the cave itself doesn't hold still. The
            way back is never quite the way you came.
          </p>
        </div>

        {/* WHAT DRIVES YOU */}
        <div style={{ marginBottom: 'clamp(48px,8vw,80px)' }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.22em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 24 }}>
            What Drives You
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,16px)' }}>
            <div style={heading}>
              Some come to <span style={{ color: 'var(--ink)' }}>map it.</span>
            </div>
            <div style={heading}>
              Some come to <span style={{ color: 'var(--ink)' }}>claim it.</span>
            </div>
            <div style={heading}>
              Some come to <span style={{ color: 'var(--ink)' }}>take what others have built.</span>
            </div>
            <div style={{ fontFamily: "'Newsreader', serif", fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(16px,1.8vw,20px)', color: 'var(--faint)', marginTop: 8 }}>
              No one comes back the same.
            </div>
          </div>
        </div>

        {/* DESIGN PILLARS */}
        <div style={{ paddingTop: 'clamp(40px,6vw,56px)', borderTop: '1px solid var(--line)', marginBottom: 'clamp(48px,8vw,80px)' }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.22em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 24 }}>
            Design Pillars
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))',
              gap: 1,
              background: 'var(--line)',
              border: '1px solid var(--line)',
              borderRadius: 16,
              overflow: 'hidden',
            }}
          >
            {PILLARS.map((p) => (
              <div key={p.n} style={{ background: 'var(--bg)', padding: 'clamp(22px,3vw,30px) clamp(18px,2.4vw,26px)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontFamily: "'Newsreader', serif", fontStyle: 'italic', fontSize: 15, color: 'var(--accent)' }}>{p.n}</span>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 'clamp(17px,2vw,21px)', lineHeight: 1.1, letterSpacing: '-.01em' }}>
                  {p.t}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* IN DEVELOPMENT */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(24px,4vw,48px)',
            alignItems: 'flex-start',
            paddingTop: 'clamp(40px,6vw,56px)',
            borderTop: '1px solid var(--line)',
            marginBottom: 'clamp(48px,8vw,72px)',
          }}
        >
          <div style={{ flex: '0 0 auto', display: 'flex', gap: 'clamp(24px,4vw,40px)' }}>
            <div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: 'clamp(32px,4.4vw,52px)', lineHeight: 1, letterSpacing: '-.02em' }}>
                2017
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--faint)', marginTop: 6 }}>In development since</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: 'clamp(32px,4.4vw,52px)', lineHeight: 1, letterSpacing: '-.02em' }}>
                8<span style={{ fontSize: '.5em', fontWeight: 700, verticalAlign: 'super' }}>th</span>
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--faint)', marginTop: 6 }}>Major iteration</div>
            </div>
          </div>
          <div style={{ flex: '1 1 300px', minWidth: 260 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.22em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 14 }}>
              In Development
            </div>
            <p style={{ fontSize: 'clamp(15.5px,1.7vw,18px)', lineHeight: 1.7, color: 'var(--muted)', margin: 0, maxWidth: '32em', textWrap: 'pretty' }}>
              Built, broken, and rebuilt — eight times over, since 2017. Every iteration kept what earned its place
              at the table and threw out what didn't. It ships when it's ready, and not before.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ paddingTop: 'clamp(40px,6vw,56px)', borderTop: '1px solid var(--line)' }}>
          <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 'clamp(24px,3.4vw,38px)', lineHeight: 1.05, letterSpacing: '-.02em', margin: '0 0 14px' }}>
            Follow it into the dark.
          </h3>
          <p style={{ maxWidth: '30em', fontSize: 'clamp(15px,1.6vw,17px)', lineHeight: 1.65, color: 'var(--muted)', margin: '0 0 26px' }}>
            Devlogs, playtests, and the occasional glimpse of what's down there. Come along while it finds its way
            to the table.
          </p>
          <button
            onClick={() => go('contact')}
            className="wx-lift-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              background: 'var(--accent)',
              color: 'var(--on-accent)',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontWeight: 600,
              fontSize: 15,
              padding: '15px 28px',
              borderRadius: 999,
            }}
          >
            Follow its development <span style={{ display: 'inline-block', animation: 'wx-arrow 1.8s ease-in-out infinite' }}>→</span>
          </button>
        </div>
      </div>
    </SceneShell>
  );
}
