import React, { useEffect, useState } from 'react';

export const CustomCursor = ({ enabled }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove('custom-cursor-active');
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if mouse is hovering an interactive element
      const target = e.target;
      const isInteractive =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-hover') ||
        target.getAttribute('role') === 'button';

      setIsHovered(!!isInteractive);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [enabled]);

  // Smooth lerp trailing dot animation
  useEffect(() => {
    if (!enabled) return;
    let animId;
    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    const animate = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, position.x, 0.18),
        y: lerp(prev.y, position.y, 0.18)
      }));
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [position, enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Small precision center dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-amber-400 rounded-full pointer-events-none z-[100] transition-transform duration-75 ease-out shadow-[0_0_10px_#f59e0b]"
        style={{
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0) scale(${
            isClicked ? 0.6 : isHovered ? 1.5 : 1
          })`
        }}
      />

      {/* Outer glowing aura ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[100] transition-all duration-300 ease-out border ${
          isHovered
            ? 'w-14 h-14 border-amber-400/80 bg-amber-500/10 shadow-[0_0_25px_rgba(245,158,11,0.3)] backdrop-blur-[1px]'
            : 'w-8 h-8 border-purple-400/50 bg-purple-500/5 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (isHovered ? 28 : 16)}px, ${
            trailingPos.y - (isHovered ? 28 : 16)
          }px, 0) scale(${isClicked ? 0.8 : 1})`
        }}
      />
    </>
  );
};
