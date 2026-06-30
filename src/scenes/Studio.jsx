import SceneShell from '../components/SceneShell.jsx';
import matthewTurner from '../assets/matt-turner.png';
import { LINKS } from '../content.js';

const factRow = { display: 'flex', justifyContent: 'space-between', gap: 16, paddingBottom: 12, borderBottom: '1px solid var(--line)' };
const factVal = { color: 'var(--ink)', fontWeight: 600 };
const bodyP = { fontSize: 'clamp(15px,1.6vw,17px)', lineHeight: 1.72, color: 'var(--muted)', margin: '0 0 16px' };

export default function Studio({ active, onScroll, sceneRef }) {
  return (
    <SceneShell active={active} onScroll={onScroll} ref={sceneRef} padding="clamp(92px,11vh,120px) clamp(24px,6vw,64px) 80px">
      <div style={{ maxWidth: 960, margin: '0 auto', width: '100%' }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.22em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 18 }}>
          The Studio
        </div>
        <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 'clamp(32px,5vw,58px)', lineHeight: 1.02, letterSpacing: '-.02em', margin: '0 0 18px' }}>
          About Wilderist
        </h2>
        <p style={{ maxWidth: '42em', fontSize: 'clamp(15.5px,1.7vw,18px)', lineHeight: 1.7, color: 'var(--muted)', margin: '0 0 clamp(40px,6vw,64px)' }}>
          Wilderist Entertainment is an independent game studio building digital and tabletop experiences with a
          distinct point of view. We make games that reward curiosity — the kind you want to sit with for one more
          turn.
        </p>

        {/* About the company */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(24px,4vw,56px)',
            alignItems: 'flex-start',
            paddingTop: 'clamp(28px,4vw,40px)',
            borderTop: '1px solid var(--line)',
            marginBottom: 'clamp(40px,6vw,64px)',
          }}
        >
          <div style={{ flex: '1 1 200px', minWidth: 200 }}>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 'clamp(22px,2.6vw,30px)', lineHeight: 1.05, letterSpacing: '-.01em', margin: '0 0 16px' }}>
              About the company
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 13.5, color: 'var(--faint)' }}>
              <div style={factRow}><span>Founded</span><span style={factVal}>2026</span></div>
              <div style={factRow}><span>Based in</span><span style={factVal}>Toronto</span></div>
              <div style={factRow}><span>Focus</span><span style={factVal}>Digital & tabletop</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}><span>Team</span><span style={factVal}>Independent</span></div>
            </div>
          </div>
          <div style={{ flex: '2 1 320px', minWidth: 280 }}>
            <p style={bodyP}>
              Founded in 2026, Wilderist is a small independent studio working across two formats at once: quick,
              replayable digital games you can pick up in a browser, and tabletop games designed to feel different
              every time they reach the table.
            </p>
            <p style={{ ...bodyP, marginBottom: 0 }}>
              We build deliberately — prototyping in the open, testing early, and shipping when the work earns it.
              The aim is a small, coherent catalogue of games with real personality, rather than a long list of
              titles that all feel the same.
            </p>
          </div>
        </div>

        {/* About me */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px,4vw,48px)', alignItems: 'flex-start', paddingTop: 'clamp(28px,4vw,40px)', borderTop: '1px solid var(--line)' }}>
          <div
            style={{
              flex: '0 0 auto',
              width: 'clamp(150px,18vw,200px)',
              aspectRatio: '4/5',
              borderRadius: 18,
              overflow: 'hidden',
              border: '1px solid var(--card-brd)',
              boxShadow: '0 28px 60px -30px rgba(0,0,0,.8)',
            }}
          >
            <img
              src={matthewTurner}
              alt="Matt Turner, founder of Wilderist Entertainment"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 22%', display: 'block' }}
            />
          </div>
          <div style={{ flex: '1 1 320px', minWidth: 260 }}>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 'clamp(22px,2.6vw,30px)', lineHeight: 1.05, letterSpacing: '-.01em', margin: '0 0 6px' }}>
              About me
            </h3>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)', marginBottom: 16 }}>Matt Turner · Founder &amp; Game Designer</div>
            <p style={{ ...bodyP, maxWidth: '44em' }}>
              I'm the founder and sole developer behind Wilderist. I started the studio to make the kinds of games
              I most enjoy playing — clever, characterful, and easy to return to — and to take care of every part
              of that myself, from design and code to art direction.
            </p>
            <p style={{ ...bodyP, marginBottom: 22, maxWidth: '44em' }}>
              My background is in software and computer hardware engineering, which is exactly the kind of training
              that rewards getting things precisely right. Games pulled me in for the opposite reason: the best
              ones leave room to get a little lost, to follow a system or a story further than you planned to. That
              tension — building something rigorous enough to trust, loose enough to surprise you — is what
              Wilderist is built around.
            </p>
            <a href={`mailto:${LINKS.email}`} className="wx-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'var(--ink)', textDecoration: 'none', fontWeight: 600, fontSize: 14.5 }}>
              Get in touch <span style={{ color: 'var(--accent)' }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </SceneShell>
  );
}
