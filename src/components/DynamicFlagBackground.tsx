'use client';

import React, { useEffect, useRef } from 'react';

interface DynamicFlagBackgroundProps {
  progress: number; // 0.0 to 1.0 from scroll
}

export const DynamicFlagBackground: React.FC<DynamicFlagBackgroundProps> = ({
  progress,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const progressRef = useRef(progress);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX / width;
      mouseRef.current.targetY = e.clientY / height;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.targetX = e.touches[0].clientX / width;
        mouseRef.current.targetY = e.touches[0].clientY / height;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Particle system for ambient fluid texture
    const particleCount = Math.min(Math.floor((width * height) / 18000), 70);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      layer: Math.floor(Math.random() * 3), // 0: top/white, 1: mid/blue, 2: bot/red
    }));

    let time = 0;

    const render = () => {
      time += 0.008;

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const p = Math.max(0, Math.min(1, progressRef.current));
      const mx = (mouseRef.current.x - 0.5) * 0.15;
      const my = (mouseRef.current.y - 0.5) * 0.15;

      // Clear dark base
      ctx.fillStyle = '#0D0D0D';
      ctx.fillRect(0, 0, width, height);

      // --- PHASE COLOR INTENSITIES ---
      // Initial: Subtle ambient cold white (p: 0 -> 0.33)
      // Phase 01 (IDEA): Dominant top light / white light field
      // Phase 02 (FORM): Deep rich blue emerges in mid section (p: 0.33 -> 0.66)
      // Phase 03 (REALITY): Vibrant red field develops in bottom section (p: 0.66 -> 1.0)
      // Final: Seamless modern abstract tricolor gradient space

      const whiteIntensity = Math.min(1, Math.max(0.15, p * 1.5));
      const blueIntensity = Math.min(1, Math.max(0, (p - 0.25) * 2.2));
      const redIntensity = Math.min(1, Math.max(0, (p - 0.55) * 2.5));

      ctx.globalCompositeOperation = 'screen';

      // 1. TOP LIGHT FIELD (WHITE / COLD WHITE)
      const topY = height * (0.2 + my * 0.5);
      const topX = width * (0.5 + mx);
      const topRadius = Math.max(width, height) * (0.55 + Math.sin(time * 0.8) * 0.05);

      const gradTop = ctx.createRadialGradient(
        topX,
        topY - height * 0.1,
        10,
        topX,
        topY,
        topRadius
      );
      gradTop.addColorStop(
        0,
        `rgba(245, 247, 250, ${0.45 * whiteIntensity})`
      );
      gradTop.addColorStop(
        0.4,
        `rgba(215, 225, 240, ${0.2 * whiteIntensity})`
      );
      gradTop.addColorStop(1, 'rgba(13, 13, 13, 0)');

      ctx.fillStyle = gradTop;
      ctx.beginPath();
      ctx.arc(topX, topY, topRadius, 0, Math.PI * 2);
      ctx.fill();

      // 2. MIDDLE LIGHT FIELD (DEEP ELECTRIC BLUE)
      if (blueIntensity > 0.01) {
        const midY = height * (0.5 + Math.sin(time * 0.6) * 0.03 + my * 0.8);
        const midX = width * (0.5 + Math.cos(time * 0.5) * 0.05 - mx);
        const midRadius = Math.max(width, height) * (0.6 + Math.cos(time * 0.7) * 0.04);

        const gradMid = ctx.createRadialGradient(
          midX,
          midY,
          20,
          midX,
          midY,
          midRadius
        );
        gradMid.addColorStop(0, `rgba(15, 82, 222, ${0.55 * blueIntensity})`);
        gradMid.addColorStop(
          0.5,
          `rgba(10, 45, 140, ${0.28 * blueIntensity})`
        );
        gradMid.addColorStop(1, 'rgba(13, 13, 13, 0)');

        ctx.fillStyle = gradMid;
        ctx.beginPath();
        ctx.arc(midX, midY, midRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. BOTTOM LIGHT FIELD (DEEP VIBRANT RED)
      if (redIntensity > 0.01) {
        const botY = height * (0.82 + my * 0.6);
        const botX = width * (0.5 + Math.sin(time * 0.7) * 0.08 + mx * 0.5);
        const botRadius = Math.max(width, height) * (0.65 + Math.sin(time * 0.9) * 0.05);

        const gradBot = ctx.createRadialGradient(
          botX,
          botY,
          20,
          botX,
          botY,
          botRadius
        );
        gradBot.addColorStop(0, `rgba(226, 30, 50, ${0.52 * redIntensity})`);
        gradBot.addColorStop(
          0.5,
          `rgba(140, 15, 30, ${0.25 * redIntensity})`
        );
        gradBot.addColorStop(1, 'rgba(13, 13, 13, 0)');

        ctx.fillStyle = gradBot;
        ctx.beginPath();
        ctx.arc(botX, botY, botRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Restore normal composite for ambient particles & grain
      ctx.globalCompositeOperation = 'source-over';

      // PARTICLES & FLUID DUST
      for (const pt of particles) {
        pt.x += pt.speedX + Math.sin(time + pt.y * 0.01) * 0.15;
        pt.y += pt.speedY + Math.cos(time + pt.x * 0.01) * 0.15;

        if (pt.x < 0) pt.x = width;
        if (pt.x > width) pt.x = 0;
        if (pt.y < 0) pt.y = height;
        if (pt.y > height) pt.y = 0;

        let ptColor = 'rgba(255, 255, 255, ';
        if (pt.layer === 1 && blueIntensity > 0.3) {
          ptColor = 'rgba(120, 170, 255, ';
        } else if (pt.layer === 2 && redIntensity > 0.3) {
          ptColor = 'rgba(255, 120, 130, ';
        }

        ctx.fillStyle = `${ptColor}${pt.alpha * (0.4 + Math.sin(time * 2 + pt.x) * 0.2)})`;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block filter blur-[32px] md:blur-[48px] scale-105 transform-gpu transition-opacity duration-700 opacity-90"
      />
      {/* Subtle Noise / Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
