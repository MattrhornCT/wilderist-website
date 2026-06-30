import Confetti from './Confetti.jsx';
import wilderistMark from '../assets/wilderist-mark.png';

export default function Backdrop() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        transformStyle: 'preserve-3d',
        transform:
          'rotateY(calc(var(--rx,0) * var(--tiltU) * 1deg)) rotateX(calc(var(--ry,0) * var(--tiltU) * -0.62 * 1deg)) scale(var(--dscale,1))',
        willChange: 'transform',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '44%',
          width: 760,
          height: 760,
          transform: 'translate(-50%,-50%) translateZ(-160px)',
          background: 'radial-gradient(circle, var(--glowcore,rgba(226,188,124,.5)), transparent 60%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '36%',
          top: '58%',
          width: 560,
          height: 560,
          transform:
            'translate(-50%,-50%) translateZ(-150px) translate(calc(var(--rx,0)*-16px*var(--plx)), calc(var(--ry,0)*-10px*var(--plx)))',
          background: 'radial-gradient(circle, rgba(139,166,192,.42), rgba(139,166,192,0) 64%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '64%',
          top: '40%',
          width: 560,
          height: 560,
          transform:
            'translate(-50%,-50%) translateZ(-150px) translate(calc(var(--rx,0)*-16px*var(--plx)), calc(var(--ry,0)*-10px*var(--plx)))',
          background: 'radial-gradient(circle, rgba(154,171,107,.4), rgba(154,171,107,0) 64%)',
        }}
      />
      <img
        src={wilderistMark}
        alt="Wilderist mark"
        style={{
          position: 'absolute',
          left: '50%',
          top: '42%',
          height: 'min(62vh, 520px)',
          width: 'auto',
          transform:
            'translate(-50%,-50%) translateZ(74px) translate(calc(var(--rx,0)*62px*var(--plx)), calc(var(--ry,0)*40px*var(--plx)))',
          filter: 'drop-shadow(0 44px 64px rgba(0,0,0,.68))',
        }}
      />
      <Confetti />
    </div>
  );
}
