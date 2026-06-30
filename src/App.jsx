import { useEffect, useRef, useState } from 'react';
const IS_TOUCH = 'ontouchstart' in window;
import Backdrop from './components/Backdrop.jsx';
import Nav from './components/Nav.jsx';
import Home from './scenes/Home.jsx';
import Work from './scenes/Work.jsx';
import CubeConquest from './scenes/CubeConquest.jsx';
import Breathe from './scenes/Breathe.jsx';
import Studio from './scenes/Studio.jsx';
import Contact from './scenes/Contact.jsx';
import { useExperience } from './hooks/useExperience.js';
import { NAV_GROUP } from './content.js';

export default function App() {
  const [scene, setScene] = useState('home');
  const rootRef = useRef(null);
  const scrimRef = useRef(null);
  const frostRef = useRef(null);
  const panelRefs = useRef({});

  const { navBlurred, onSceneScroll } = useExperience({ rootRef, scrimRef, frostRef, scene });

  const go = (next) => setScene(next);

  // Scrolled-back-to-top feel: each scene starts fresh when it becomes active,
  // and the nav blur (driven by scroll position) resets with it.
  useEffect(() => {
    const panel = panelRefs.current[scene];
    if (panel) panel.scrollTop = 0;
  }, [scene]);

  return (
    <div
      ref={rootRef}
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        background: 'var(--bg)',
        color: 'var(--ink)',
        fontFamily: "'Hanken Grotesk', -apple-system, sans-serif",
        perspective: 1300,
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <Backdrop />

      {/* dark veil with light hole — mask only updates when RAF is running,
          which on mobile only happens during/after touch interaction. */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'var(--bg)',
          opacity: 'var(--veil)',
          WebkitMask: 'radial-gradient(circle var(--lr) at var(--mx,50%) var(--my,42%), transparent 0%, transparent 28%, #000 70%)',
          mask: 'radial-gradient(circle var(--lr) at var(--mx,50%) var(--my,42%), transparent 0%, transparent 28%, #000 70%)',
        }}
      />
      {/* warm glow */}
      <div
        style={{
          position: 'absolute',
          zIndex: 3,
          left: 'var(--mx,50%)',
          top: 'var(--my,42%)',
          width: 'calc(var(--lr) * 2.3)',
          height: 'calc(var(--lr) * 2.3)',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
          mixBlendMode: 'screen',
          opacity: 'var(--li)',
          background: 'radial-gradient(circle, var(--glow), transparent 62%)',
        }}
      />
      {/* content scrim (darkens backdrop on content scenes) */}
      <div
        ref={scrimRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 4,
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity var(--ts) ease',
          background: 'radial-gradient(120% 90% at 50% 40%, rgba(8,11,17,.5), rgba(8,11,17,.86))',
        }}
      />
      {/* vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 4,
          pointerEvents: 'none',
          background: 'radial-gradient(130% 100% at 50% 36%, transparent 55%, rgba(8,11,17,.5) 100%)',
        }}
      />
      {/* frost: blurs the whole backdrop on content scenes for readability.
          Disabled on touch devices — backdropFilter is a major GPU cost on iOS. */}
      {!IS_TOUCH && (
        <div
          ref={frostRef}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 4,
            pointerEvents: 'none',
            transition: 'backdrop-filter var(--ts) ease',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
          }}
        />
      )}

      {/* Top and bottom edge fades — blend content into the safe area background colour
          so the boundary looks like a deliberate fade rather than an abrupt line. */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 8, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, #0a0e15 0%, transparent calc(env(safe-area-inset-top) + 48px))' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 8, pointerEvents: 'none',
        background: 'linear-gradient(to top, #0a0e15 0%, transparent calc(env(safe-area-inset-bottom) + 40px))' }} />

      {/* Content layer — inset from iOS safe areas so nothing hides behind notch or home bar.
          Visual layers above (backdrop, veil, glow, scrim, frost) stay full-bleed. */}
      <div
        style={{
          position: 'absolute',
          top: 'env(safe-area-inset-top)',
          right: 'env(safe-area-inset-right)',
          bottom: 'env(safe-area-inset-bottom)',
          left: 'env(safe-area-inset-left)',
          zIndex: 5,
        }}
      >
        <Nav navGroup={NAV_GROUP[scene]} blurred={navBlurred} onNavigate={go} />

        <Home
          active={scene === 'home'}
          go={go}
          onScroll={onSceneScroll}
          sceneRef={(el) => { panelRefs.current.home = el; }}
        />
        <Work
          active={scene === 'work'}
          go={go}
          onScroll={onSceneScroll}
          sceneRef={(el) => { panelRefs.current.work = el; }}
        />
        <CubeConquest
          active={scene === 'cube'}
          go={go}
          onScroll={onSceneScroll}
          sceneRef={(el) => { panelRefs.current.cube = el; }}
        />
        <Breathe
          active={scene === 'breathe'}
          go={go}
          onScroll={onSceneScroll}
          sceneRef={(el) => { panelRefs.current.breathe = el; }}
        />
        <Studio
          active={scene === 'studio'}
          onScroll={onSceneScroll}
          sceneRef={(el) => { panelRefs.current.studio = el; }}
        />
        <Contact
          active={scene === 'contact'}
          onScroll={onSceneScroll}
          sceneRef={(el) => { panelRefs.current.contact = el; }}
        />
      </div>
    </div>
  );
}
