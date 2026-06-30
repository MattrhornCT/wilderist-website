import SceneShell from '../components/SceneShell.jsx';
import { LINKS } from '../content.js';
import { ItchIcon, DiscordIcon, InstagramIcon } from '../components/icons.jsx';

function ContactLink({ href, Icon, title, subtitle }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="wx-slide"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '18px 22px',
        borderRadius: 16,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        background: 'var(--card-bg)',
        border: '1px solid var(--card-brd)',
        color: 'var(--ink)',
        textDecoration: 'none',
        transition: 'transform .3s, border-color .3s',
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span
          style={{
            flex: '0 0 auto',
            width: 44,
            height: 44,
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(226,188,124,.14)',
            color: 'var(--accent)',
          }}
        >
          <Icon />
        </span>
        <span>
          <span style={{ display: 'block', fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 17 }}>{title}</span>
          <span style={{ fontSize: 13, color: 'var(--faint)' }}>{subtitle}</span>
        </span>
      </span>
      <span style={{ color: 'var(--accent)', fontSize: 19 }}>↗</span>
    </a>
  );
}

export default function Contact({ active, onScroll, sceneRef }) {
  return (
    <SceneShell
      active={active}
      onScroll={onScroll}
      ref={sceneRef}
      padding="clamp(92px,11vh,120px) clamp(20px,5vw,56px) 72px"
      extraStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div
        style={{
          maxWidth: 980,
          width: '100%',
          margin: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
          gap: 'clamp(28px,5vw,64px)',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.22em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 16 }}>
            Say hello
          </div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 'clamp(32px,5vw,58px)', lineHeight: 1, letterSpacing: '-.02em', margin: '0 0 18px' }}>
            Get in
            <br />
            touch.
          </h2>
          <p style={{ maxWidth: '26em', fontSize: 15.5, lineHeight: 1.6, color: 'var(--muted)', margin: '0 0 30px' }}>
            Playtesting, press, collaborations, or just to say hi — we'd love to hear from you.
          </p>
          <a
            href={`mailto:${LINKS.email}`}
            className="wx-lift-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'var(--accent)',
              color: 'var(--on-accent)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 15,
              padding: '15px 28px',
              borderRadius: 999,
            }}
          >
            {LINKS.email}
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <ContactLink href={LINKS.itchHome} Icon={ItchIcon} title="itch.io" subtitle="Play our games & follow releases" />
          <ContactLink href={LINKS.discord} Icon={DiscordIcon} title="Discord" subtitle="Join the community — playtests & chat" />
          <ContactLink href={LINKS.instagram} Icon={InstagramIcon} title="Instagram" subtitle="Devlogs, sketches & studio life" />
        </div>
      </div>
    </SceneShell>
  );
}
