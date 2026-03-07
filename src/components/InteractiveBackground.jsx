import React, { useEffect, useRef } from "react";

const InteractiveBackground = ({ className = "" }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const pointsRef = useRef([]);
  const hueRef = useRef(250);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const handlePointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      hueRef.current += 2;
      // clamp hues between deep blue and violet
      if (hueRef.current > 280) hueRef.current = 250;
      const hue = hueRef.current;
      pointsRef.current.push({ x, y, life: 1, hue });
      if (pointsRef.current.length > 450) {
        pointsRef.current.shift();
      }
    };

    const animate = () => {
      // Slightly translucent fill to create smooth glow + erase effect
      const backgroundGradient = ctx.createLinearGradient(0, 0, width, height);
      backgroundGradient.addColorStop(0, "rgba(12, 8, 36, 0.08)");
      backgroundGradient.addColorStop(1, "rgba(3, 5, 20, 0.08)");
      ctx.fillStyle = backgroundGradient;
      ctx.fillRect(0, 0, width, height);

      pointsRef.current = pointsRef.current
        .map((point) => {
          const nextLife = point.life - 0.015;
          if (nextLife <= 0) {
            return null;
          }

          const radius = 10 + nextLife * 24;
          const gradient = ctx.createRadialGradient(
            point.x,
            point.y,
            radius * 0.2,
            point.x,
            point.y,
            radius
          );

          const colorCore = `hsla(${point.hue}, 80%, 72%, ${nextLife})`;
          const colorEdge = `hsla(${point.hue}, 70%, 40%, 0)`;

          gradient.addColorStop(0, colorCore);
          gradient.addColorStop(1, colorEdge);

          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
          ctx.fill();

          return { ...point, life: nextLife };
        })
        .filter(Boolean);

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    const initialGradient = ctx.createLinearGradient(0, 0, width, height);
    initialGradient.addColorStop(0, "rgba(15, 6, 32, 1)");
    initialGradient.addColorStop(1, "rgba(4, 10, 28, 1)");
    ctx.fillStyle = initialGradient;
    ctx.fillRect(0, 0, width, height);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-screen h-screen pointer-events-none ${className}`}
    />
  );
};

export default InteractiveBackground;

