import { useMemo } from 'react';
import { generateConfetti } from '../confetti.js';
import { DEFAULTS } from '../content.js';

export default function Confetti() {
  const pieces = useMemo(
    () => generateConfetti(DEFAULTS.confettiCount, DEFAULTS.confettiDepth),
    [],
  );

  return (
    <div
      data-confetti-root
      style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d', pointerEvents: 'none' }}
    >
      {pieces.map((c) => (
        <div
          key={c.id}
          data-cube=""
          style={{
            position: 'absolute',
            left: c.left + '%',
            top: c.top + '%',
            width: c.size,
            height: c.size,
            pointerEvents: 'auto',
            transformStyle: 'preserve-3d',
            transform: `translateZ(${c.z}px) translate(calc(var(--rx,0)*${c.px}px*var(--plx)), calc(var(--ry,0)*${c.py}px*var(--plx)))`,
            willChange: 'transform',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              '--rot': c.rot + 'deg',
              animation: `wx-cube ${c.dur}s ease-in-out ${c.delay}s infinite`,
              willChange: 'transform',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '24%',
                background: c.color,
                opacity: c.opacity,
                boxShadow: `0 ${c.shadow1}px ${c.shadow2}px -12px rgba(0,0,0,.5)`,
                willChange: 'transform',
                cursor: 'pointer',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
