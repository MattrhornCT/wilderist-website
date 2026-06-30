import { useCallback, useEffect, useRef, useState } from 'react';
import { DEFAULTS, TIME_OF_DAY_GLOW, TIME_OF_DAY_ACCENT } from '../content.js';
import { autoTimeOfDay, hexToRgba } from '../utils.js';
import { HOVER_FX } from '../confetti.js';

const TOD_REFRESH_MS = 60_000;
const IS_TOUCH = 'ontouchstart' in window;

// Drives the persistent lantern backdrop: cursor-as-lantern + viewing-angle (lerped,
// with idle drift), the time-of-day glow/accent, confetti hover pops, and the
// per-scene readability treatment (dim spotlight / frost backdrop). Everything here
// writes CSS custom properties directly on the root element rather than React state,
// so the 60fps loop never triggers a re-render.
export function useExperience({ rootRef, scrimRef, frostRef, scene }) {
  const [navBlurred, setNavBlurred] = useState(false);
  const ptr = useRef({ x: window.innerWidth / 2, y: window.innerHeight * 0.42 });
  const cur = useRef({ ...ptr.current });
  const lastMove = useRef(0);
  const lastHover = useRef(0);
  const hoverCube = useRef(null);
  const idleStarted = useRef(false);
  const idleStartTime = useRef(0);
  const wanderPhaseX = useRef(0);
  const wanderPhaseY = useRef(0);
  // On touch devices run at ~30fps to halve GPU pressure and prevent iOS
  // from killing the tab under memory pressure.
  const frameSkip = useRef(0);

  // Static motion/light knobs — set once, baked from the settled tweak values.
  useEffect(() => {
    const r = rootRef.current;
    if (!r) return;
    r.style.setProperty('--tiltU', String(DEFAULTS.tilt));
    r.style.setProperty('--plx', String(DEFAULTS.parallax));
    r.style.setProperty('--dscale', String(DEFAULTS.dioramaScale));
    r.style.setProperty('--ts', DEFAULTS.transitionSpeed + 's');
    r.style.setProperty('--cdim', String(DEFAULTS.contentDim));
    r.style.setProperty('--veil', String(DEFAULTS.darkness));
  }, [rootRef]);

  // Time-of-day glow + accent, refreshed periodically so a long-open tab drifts
  // through morning → midday → evening → night on its own.
  useEffect(() => {
    const r = rootRef.current;
    if (!r) return;
    const apply = () => {
      const tod = autoTimeOfDay();
      const glow = TIME_OF_DAY_GLOW[tod];
      r.style.setProperty('--glow', glow);
      r.style.setProperty('--glowcore', hexToRgba(glow, 0.5));
      r.style.setProperty('--accent', TIME_OF_DAY_ACCENT[tod]);
    };
    apply();
    const id = setInterval(apply, TOD_REFRESH_MS);
    return () => clearInterval(id);
  }, [rootRef]);

  // Pointer tracking, idle drift, lerped lantern motion, and confetti hover detection.
  useEffect(() => {
    const onMove = (e) => {
      const t = e.touches && e.touches[0] ? e.touches[0] : e;
      ptr.current.x = t.clientX;
      ptr.current.y = t.clientY;
      lastMove.current = performance.now();
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });

    const popConfetti = (outer) => {
      if (outer === hoverCube.current) return;
      hoverCube.current = outer;
      if (!outer) return;
      const inner = outer.firstElementChild && outer.firstElementChild.firstElementChild;
      if (!inner) return;
      const keys = Object.keys(HOVER_FX);
      const choice = DEFAULTS.hoverFx === 'Random' ? keys[Math.floor(Math.random() * keys.length)] : DEFAULTS.hoverFx;
      const fx = HOVER_FX[choice] || HOVER_FX.Pop;
      inner.style.animation = 'none';
      void inner.offsetWidth; // restart
      inner.style.animation = fx;
      inner.addEventListener('animationend', () => { inner.style.animation = ''; }, { once: true });
    };

    const checkHover = () => {
      // Touch devices: the "cursor" is wherever the user last lifted their finger,
      // which causes confetti to fire as pieces drift over that stale point. Skip it.
      if (IS_TOUCH) return;
      const els = document.elementsFromPoint(ptr.current.x, ptr.current.y);
      let cube = null;
      for (const el of els) {
        if (el.hasAttribute && el.hasAttribute('data-cube')) { cube = el; break; }
      }
      popConfetti(cube);
    };

    let raf;
    const loop = () => {
      raf = requestAnimationFrame(loop);

      // Throttle to ~30fps on touch devices to reduce GPU load.
      if (IS_TOUCH) {
        frameSkip.current = (frameSkip.current + 1) % 2;
        if (frameSkip.current !== 0) return;
      }

      const now = performance.now();
      const idle = now - lastMove.current > 1700;
      let tx = ptr.current.x;
      let ty = ptr.current.y;
      if (idle && DEFAULTS.idleDrift) {
        if (!idleStarted.current) {
          // Compute phase offsets so the wander sine starts exactly at cur's
          // current position — no jump when cursor-tracking hands off to drift.
          idleStarted.current = true;
          idleStartTime.current = now;
          const nx = cur.current.x / window.innerWidth;
          const ny = cur.current.y / window.innerHeight;
          wanderPhaseX.current = Math.asin(Math.max(-1, Math.min(1, (nx - 0.5) / 0.28)));
          wanderPhaseY.current = Math.asin(Math.max(-1, Math.min(1, (ny - 0.42) / 0.22))) - 1.2;
        }
        const t = (now - idleStartTime.current) * 0.001 * DEFAULTS.driftSpeed;
        tx = window.innerWidth * (0.5 + 0.28 * Math.sin(t * 0.5 + wanderPhaseX.current));
        ty = window.innerHeight * (0.42 + 0.22 * Math.sin(t * 0.78 + 1.2 + wanderPhaseY.current));
      } else {
        idleStarted.current = false;
        if (idle) {
          tx = cur.current.x;
          ty = cur.current.y;
        }
      }
      cur.current.x += (tx - cur.current.x) * 0.07;
      cur.current.y += (ty - cur.current.y) * 0.07;
      const r = rootRef.current;
      if (r) {
        r.style.setProperty('--mx', cur.current.x + 'px');
        r.style.setProperty('--my', cur.current.y + 'px');
        r.style.setProperty('--rx', (cur.current.x / window.innerWidth - 0.5).toFixed(4));
        r.style.setProperty('--ry', (cur.current.y / window.innerHeight - 0.5).toFixed(4));
      }
      if (now - lastHover.current > 70) {
        lastHover.current = now;
        checkHover();
      }
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
    };
  }, [rootRef]);

  // Per-scene readability: dim the spotlight and/or frost the backdrop away from
  // Home, plus a tighter spotlight on the Breathe page (limited-visibility feel).
  // Also halves the radius on mobile to keep the lantern proportional to screen size.
  useEffect(() => {
    const r = rootRef.current;
    if (!r) return;

    const applyRadius = () => {
      const mobile = window.innerWidth < 600;
      const base = scene === 'breathe' ? Math.round(DEFAULTS.lightRadius * 0.62) : DEFAULTS.lightRadius;
      r.style.setProperty('--lr', (mobile ? Math.round(base * 0.5) : base) + 'px');
    };

    const offHome = scene !== 'home';
    const mode = DEFAULTS.contentMode;
    const dimOn = offHome && (mode === 'Dim spotlight' || mode === 'Both');
    r.style.setProperty('--li', String(dimOn ? DEFAULTS.lightIntensity * DEFAULTS.spotlightDim : DEFAULTS.lightIntensity));
    applyRadius();
    window.addEventListener('resize', applyRadius);

    if (scrimRef.current) {
      scrimRef.current.style.opacity = scene === 'home' ? '0' : String(DEFAULTS.contentDim);
    }
    if (frostRef.current) {
      const blurOn = offHome && (mode === 'Blur backdrop' || mode === 'Both');
      const fv = blurOn ? `blur(${DEFAULTS.contentBlur}px)` : 'none';
      frostRef.current.style.backdropFilter = fv;
      frostRef.current.style.webkitBackdropFilter = fv;
    }

    return () => window.removeEventListener('resize', applyRadius);
  }, [scene, rootRef, scrimRef, frostRef]);

  const onSceneScroll = useCallback((e) => {
    setNavBlurred(e.target.scrollTop > 6);
  }, []);

  return { navBlurred, onSceneScroll };
}
