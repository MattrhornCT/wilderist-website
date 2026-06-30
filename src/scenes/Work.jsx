import SceneShell from '../components/SceneShell.jsx';
import ccLogo from '../assets/CubeConquest_Logo.png';
import ccBgPattern from '../assets/CubeConquest_BGPattern.png';
import hicbCover from '../assets/HICB_Cover.png';

function WorkCard({ onClick, badge, badgeBg, badgeFg, badgeDot, category, title, description, image, imageFit = 'cover', imageBg = '#0b1017', imageBgPattern }) {
  return (
    <div
      onClick={onClick}
      className="wx-cardlift"
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--card-bg)',
        border: '1px solid var(--card-brd)',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 18px 50px -28px rgba(0,0,0,.8)',
      }}
    >
      <div
        style={{
          position: 'relative',
          aspectRatio: '16/10',
          background: imageBg,
          backgroundImage: imageBgPattern ? `url(${imageBgPattern})` : undefined,
          backgroundSize: imageBgPattern ? '180px 180px' : undefined,
          backgroundRepeat: imageBgPattern ? 'repeat' : undefined,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: imageFit,
            objectPosition: 'center',
            padding: imageFit === 'contain' ? '10%' : 0,
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: 14,
            left: 14,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            background: badgeBg,
            color: badgeFg,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '.08em',
            padding: '6px 12px',
            borderRadius: 999,
            textTransform: 'uppercase',
          }}
        >
          {badgeDot && <span style={{ width: 7, height: 7, borderRadius: '50%', background: badgeFg }} />}
          {badge}
        </span>
      </div>
      <div style={{ padding: 26, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.16em', color: 'var(--faint)', textTransform: 'uppercase', marginBottom: 10 }}>
          {category}
        </div>
        <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 26, margin: '0 0 10px' }}>
          {title}
        </h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--muted)', margin: '0 0 18px', flex: 1 }}>{description}</p>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--accent)', fontWeight: 600, fontSize: 14.5 }}>
          Open project →
        </span>
      </div>
    </div>
  );
}

export default function Work({ active, go, onScroll, sceneRef }) {
  return (
    <SceneShell
      active={active}
      onScroll={onScroll}
      ref={sceneRef}
      padding="clamp(96px,12vh,128px) clamp(20px,5vw,56px) 64px"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 'clamp(24px,4vw,44px)' }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.22em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 14 }}>
            The Work
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(30px,4.6vw,52px)',
              lineHeight: 1,
              letterSpacing: '-.02em',
              margin: '0 0 12px',
            }}
          >
            What we're making.
          </h2>
          <p style={{ maxWidth: '34em', fontSize: 15.5, lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>
            One you can play today. One in active development. Open either to learn more.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 'clamp(18px,2.6vw,28px)' }}>
          <WorkCard
            onClick={() => go('cube')}
            badge="Playable now"
            badgeBg="#9aab6b"
            badgeFg="#16190c"
            badgeDot
            category="Digital · Browser"
            title="Cube Conquest"
            description="A bite-sized strategy game you can play right now in your browser. Claim the board cube by cube."
            image={ccLogo}
            imageFit="contain"
            imageBg="#0d1520"
            imageBgPattern={ccBgPattern}
          />
          <WorkCard
            onClick={() => go('breathe')}
            badge="In development"
            badgeBg="rgba(255,255,255,.6)"
            badgeFg="#241f16"
            badgeDot={false}
            category="Tabletop · 2026"
            title="Help! I Can't Breathe"
            description="A procedurally generated board game of exploration and resource management. Every table tells a different story."
            image={hicbCover}
            imageFit="cover"
          />
        </div>
      </div>
    </SceneShell>
  );
}
