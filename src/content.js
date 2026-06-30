// Baked-in defaults (the Claude Design prototype exposed these as a live "Tweaks" panel;
// for the real site they're settled values from product iteration, not user-facing controls).
export const DEFAULTS = {
  lightRadius: 540,
  lightIntensity: 0.26,
  darkness: 0.96,
  tilt: 32,
  parallax: 1.5,
  dioramaScale: 1.15,
  idleDrift: true,
  driftSpeed: 1,
  transitionSpeed: 0.5,
  contentDim: 0.74,
  contentMode: 'Both', // 'Dim spotlight' | 'Blur backdrop' | 'Both'
  spotlightDim: 0.3,
  contentBlur: 7,
  confettiCount: 60,
  confettiDepth: 1,
  hoverFx: 'Random', // 'Pop' | 'Spin' | 'Wobble' | 'Pulse' | 'Flip' | 'Random'
  showHint: false,
};

export const TIME_OF_DAY_GLOW = {
  morning: '#9aab6b',
  midday: '#f1e6cf',
  evening: '#e2bc7c',
  night: '#8ba6c0',
};

export const TIME_OF_DAY_ACCENT = {
  morning: '#9aab6b',
  midday: '#e2bc7c',
  evening: '#e2bc7c',
  night: '#8ba6c0',
};

export const LINKS = {
  itch: 'https://wilderistentertainment.itch.io/cube-conquest',
  itchHome: 'https://wilderistentertainment.itch.io',
  discord: 'https://discord.gg/KzQuPYqVHC',
  instagram: 'https://www.instagram.com/wilderistentertainment/',
  email: 'mct.wilderist@gmail.com',
};

export const PILLARS = [
  { n: '01', t: 'Exploration' },
  { n: '02', t: 'Deckbuilding' },
  { n: '03', t: 'Area Control' },
  { n: '04', t: 'Player Interaction' },
];

export const FEATURES = [
  { icon: '◧', t: 'Claim the grid', d: 'Stake territory cube by cube and fight for every contested square.' },
  { icon: '⏱', t: 'Quick sessions', d: 'Rounds you can finish in a few minutes — a break or a binge.' },
  { icon: '⚲', t: 'Free in browser', d: 'No download, no account. Click play and you are in a match.' },
  { icon: '↻', t: 'One more turn', d: 'Tight, readable decisions that keep pulling you back.' },
];

export const SCENES = ['home', 'work', 'cube', 'breathe', 'studio', 'contact'];

export const NAV_GROUP = {
  home: 'home',
  work: 'work',
  cube: 'work',
  breathe: 'work',
  studio: 'studio',
  contact: 'contact',
};
