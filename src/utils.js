export function autoTimeOfDay(date = new Date()) {
  const h = date.getHours();
  if (h >= 5 && h < 11) return 'morning';
  if (h >= 11 && h < 17) return 'midday';
  if (h >= 17 && h < 21) return 'evening';
  return 'night';
}

export function hexToRgba(hex, alpha) {
  const n = String(hex).replace('#', '');
  const v = n.length === 3 ? n.split('').map((c) => c + c).join('') : n;
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
