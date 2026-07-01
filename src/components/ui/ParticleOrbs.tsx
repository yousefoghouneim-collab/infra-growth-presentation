import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  homeAngle: number;
  homeRadius: number;
  ringIndex: number;   // 0 = inner, 1 = mid, 2 = outer
  size: number;
  opacity: number;
  targetOpacity: number;
  orbitSpeed: number;
  phase: number;
}

interface ParticleOrbsProps {
  color?: string;       // default #122023
  onAqua?: boolean;     // true → aqua-tinted, false → slate-tinted
}

const RING_RADII = [55, 95, 140];
const RING_COUNTS = [7, 11, 16];

export const ParticleOrbs = ({ color = "#122023", onAqua = false }: ParticleOrbsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const raf = useRef(0);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles();
    };

    const initParticles = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const list: Particle[] = [];
      const cx = w / 2;
      const cy = h / 2;

      RING_COUNTS.forEach((count, ri) => {
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2 + (ri * 0.4);
          const r = RING_RADII[ri];
          const phase = Math.random() * Math.PI * 2;
          list.push({
            x: cx + Math.cos(angle) * r,
            y: cy + Math.sin(angle) * r,
            vx: 0, vy: 0,
            homeAngle: angle,
            homeRadius: r,
            ringIndex: ri,
            size: ri === 0 ? 3.5 : ri === 1 ? 2.8 : 2.2,
            opacity: 0.12 + ri * 0.04,
            targetOpacity: 0.12 + ri * 0.04,
            orbitSpeed: (ri === 0 ? 0.0006 : ri === 1 ? 0.0004 : 0.00025) * (i % 2 === 0 ? 1 : -1),
            phase,
          });
        }
      });

      // Scatter extra ambient particles
      for (let i = 0; i < 28; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        list.push({
          x, y, vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15,
          homeAngle: Math.atan2(y - cy, x - cx),
          homeRadius: Math.hypot(x - cx, y - cy),
          ringIndex: -1,
          size: 1.2 + Math.random() * 1.5,
          opacity: 0.06 + Math.random() * 0.08,
          targetOpacity: 0.06 + Math.random() * 0.08,
          orbitSpeed: 0,
          phase: Math.random() * Math.PI * 2,
        });
      }

      particles.current = list;
    };

    const draw = (time: number) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const mouseActive = mx > -100 && my > -100;
      const ATTRACT_RADIUS = 260;
      const MAX_ATTRACT = 180;

      particles.current.forEach((p) => {
        const dist = mouseActive ? Math.hypot(p.x - mx, p.y - my) : 9999;
        const inRange = dist < ATTRACT_RADIUS;
        const attractStr = inRange ? Math.max(0, 1 - dist / ATTRACT_RADIUS) : 0;

        if (p.ringIndex >= 0) {
          // Ring particles: orbit their center or cursor when attracted
          p.homeAngle += p.orbitSpeed * (1 + attractStr * 12);

          if (inRange && attractStr > 0.15) {
            // Pull toward cursor orbit ring
            const targetR = RING_RADII[p.ringIndex] * (0.55 + attractStr * 0.55);
            const targetX = mx + Math.cos(p.homeAngle) * targetR;
            const targetY = my + Math.sin(p.homeAngle) * targetR;
            p.x += (targetX - p.x) * 0.08;
            p.y += (targetY - p.y) * 0.08;
          } else {
            // Return to home orbit around canvas center
            const cx = w / 2;
            const cy = h / 2;
            const homeX = cx + Math.cos(p.homeAngle) * p.homeRadius;
            const homeY = cy + Math.sin(p.homeAngle) * p.homeRadius;
            p.x += (homeX - p.x) * 0.03;
            p.y += (homeY - p.y) * 0.03;
          }

          p.targetOpacity = inRange
            ? 0.15 + attractStr * 0.75
            : 0.1 + p.ringIndex * 0.04 + Math.sin(time * 0.0008 + p.phase) * 0.04;
        } else {
          // Ambient particles: gentle drift + slight cursor attraction
          p.x += p.vx + (inRange ? (mx - p.x) * attractStr * 0.012 : 0);
          p.y += p.vy + (inRange ? (my - p.y) * attractStr * 0.012 : 0);
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          p.targetOpacity = inRange ? 0.08 + attractStr * 0.3 : 0.04 + Math.sin(time * 0.0005 + p.phase) * 0.03;
        }

        p.opacity += (p.targetOpacity - p.opacity) * 0.1;
        const glowSize = inRange ? p.size * (1 + attractStr * 2.2) : p.size;

        // Draw glow (soft halo)
        if (attractStr > 0.05) {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize * 4);
          grad.addColorStop(0, onAqua
            ? `rgba(18,32,35,${p.opacity * 0.7})`
            : `rgba(158,243,238,${p.opacity * 0.5})`);
          grad.addColorStop(1, "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowSize * 4, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        // Draw core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = onAqua
          ? `rgba(18,32,35,${p.opacity})`
          : `rgba(158,243,238,${p.opacity})`;
        ctx.fill();
      });

      raf.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouse.current = { x: -999, y: -999 }; };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    raf.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [onAqua]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0"
      style={{ mixBlendMode: onAqua ? "multiply" : "screen" }}
    />
  );
};
