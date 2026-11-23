import React, { useEffect, useRef, useState } from "react";

// Pointer effect for desktop: a soft blue glow that slowly morphs around
// the cursor, a fading comet streak behind it, and a small frosted dot at
// the tip. Drawn on one canvas above the page with pointer-events off.
const TRAIL = 22;

// [hue, saturation, lightness] for the glow lobes: blue, indigo, teal
const LOBES = [
  [214, 90, 62],
  [238, 80, 66],
  [190, 85, 55],
];

const CursorFx = () => {
  const canvasRef = useRef(null);
  const dotRef = useRef(null);
  const [enabled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    const dot = dotRef.current;
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, raf;
    let x = -200, y = -200, cx = x, cy = y;
    let presence = 0, target = 0; // fades the whole effect in and out
    let scale = 1, scaleTarget = 1;
    const trail = [];

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * ratio;
      canvas.height = h * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      target = 1;
      scaleTarget = e.target.closest?.("a, button") ? 2 : 1;
    };
    const leave = () => { target = 0; };

    const loop = (t) => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      presence += (target - presence) * 0.06;
      scale += (scaleTarget - scale) * 0.15;

      trail.unshift({ x: cx, y: cy });
      if (trail.length > TRAIL) trail.pop();

      ctx.clearRect(0, 0, w, h);
      if (presence > 0.01) {
        ctx.globalCompositeOperation = "lighter";

        // Morphing glow: three lobes drift around the cursor on slow,
        // out-of-phase orbits, so the combined shape keeps changing.
        const time = t / 1000;
        LOBES.forEach(([hue, sat, light], i) => {
          const a = time * (0.35 + i * 0.13) + i * 2.1;
          const r = 26 + 14 * Math.sin(time * 0.7 + i);
          const lx = cx + Math.cos(a) * r;
          const ly = cy + Math.sin(a * 1.3) * r;
          const size = 150 + 40 * Math.sin(time * 0.9 + i * 1.7);
          const g = ctx.createRadialGradient(lx, ly, 0, lx, ly, size);
          g.addColorStop(0, `hsla(${hue}, ${sat}%, ${light}%, ${0.11 * presence})`);
          g.addColorStop(1, `hsla(${hue}, ${sat}%, ${light}%, 0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(lx, ly, size, 0, Math.PI * 2);
          ctx.fill();
        });

        // Streak: tapered segments that thin and fade toward the tail.
        ctx.lineCap = "round";
        for (let i = 1; i < trail.length; i++) {
          const k = 1 - i / trail.length;
          ctx.strokeStyle = `hsla(205, 95%, 78%, ${0.55 * k * k * presence})`;
          ctx.lineWidth = 0.5 + 5 * k;
          ctx.beginPath();
          ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
          ctx.lineTo(trail[i].x, trail[i].y);
          ctx.stroke();
        }
        ctx.globalCompositeOperation = "source-over";
      }

      dot.style.opacity = presence.toFixed(3);
      dot.style.transform = `translate3d(${cx - 12}px, ${cy - 12}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", leave);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40 h-screen w-screen"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-50 h-6 w-6 rounded-full bg-[#cfe3ff]/15 backdrop-blur-[3px] opacity-0"
      />
    </>
  );
};

export default CursorFx;
