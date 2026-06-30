import { forwardRef } from 'react';

const SceneShell = forwardRef(function SceneShell(
  { active, scrollable = true, onScroll, padding, extraStyle, children },
  ref,
) {
  return (
    <section
      ref={ref}
      className={scrollable ? 'wx-scroll' : undefined}
      onScroll={scrollable ? onScroll : undefined}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: active ? 6 : 5,
        overflowY: scrollable ? 'auto' : undefined,
        padding,
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0)' : 'translateY(24px)',
        pointerEvents: active ? 'auto' : 'none',
        transition: 'opacity var(--ts) ease, transform var(--ts) ease',
        ...extraStyle,
      }}
    >
      {children}
    </section>
  );
});

export default SceneShell;
