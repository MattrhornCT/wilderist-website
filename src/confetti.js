// Deterministic seeded RNG so the layout is stable across renders (matches the
// prototype's seeded generator rather than re-randomizing on every mount).
function makeRng(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

// Builds a stack of equidistant depth planes centred on the Wilderist logo (z=74)
// so parallax reads as real layered depth rather than one flat cloud of confetti.
export function generateConfetti(count, depth) {
  const cols = ['var(--accent)', 'var(--accent)', 'var(--accent)', 'var(--accent)', '#e2bc7c', '#e2bc7c', '#9aab6b', '#8ba6c0'];
  const rnd = makeRng(20240601);
  const logoZ = 74;
  const L = Math.max(7, Math.min(18, Math.round(count / 4.5))); // number of discrete planes
  const R = 230 * depth; // half-depth of the stack around the logo
  const minZ = logoZ - R;
  const step = (2 * R) / (L - 1 || 1);

  const pieces = [];
  for (let i = 0; i < count; i++) {
    const layer = i % L; // fill every plane evenly
    const z = Math.round(minZ + layer * step);
    const zn = (z - minZ) / (2 * R || 1); // 0 = farthest, 1 = nearest
    const left = +(rnd() * 100).toFixed(2);
    const top = +(rnd() * 100).toFixed(2);
    const size = Math.round(12 + zn * 42); // nearer planes are larger
    const color = cols[Math.floor(rnd() * cols.length)];
    const rot = Math.round((rnd() * 2 - 1) * 16);
    const px = Math.round((z / 170) * 150); // parallax travel scales linearly with depth
    const py = Math.round(px * 0.62);
    const dur = +(7 + rnd() * 7).toFixed(1);
    const delay = +(-rnd() * 9).toFixed(1);
    const opacity = +(0.5 + zn * 0.45).toFixed(2);
    const shadow1 = Math.round(8 + zn * 22);
    const shadow2 = Math.round(14 + zn * 30);
    pieces.push({ id: i, z, left, top, size, color, rot, px, py, dur, delay, opacity, shadow1, shadow2 });
  }
  return pieces;
}

export const HOVER_FX = {
  Pop: 'wx-pop .55s cubic-bezier(.34,1.4,.5,1)',
  Spin: 'wx-spin .7s cubic-bezier(.45,.05,.2,1)',
  Wobble: 'wx-wobble .75s ease-in-out',
  Pulse: 'wx-pulse .8s ease-in-out',
  Flip: 'wx-flip .8s cubic-bezier(.45,.05,.25,1)',
};
