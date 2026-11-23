import { useEffect, useRef, useState } from "react";
import type { CoffeeContent } from "../content";

type ScrollMachineProps = {
  data: CoffeeContent["scene"];
  endId: string;
};

const MOBILE_BREAKPOINT = 820;

function frameUrl(path: string, index: number) {
  return `${path}frame-${String(index + 1).padStart(3, "0")}.webp`;
}

function smooth(t: number) {
  return t * t * (3 - 2 * t);
}

function stageFromProgress(p: number) {
  if (p < 0.3) return 0;
  if (p < 0.5) return 1;
  if (p < 0.9) return 2;
  return 3;
}

export function ScrollMachine({ data, endId }: ScrollMachineProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const isInsideFrame = window.self !== window.top;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isStatic = isInsideFrame || reduceMotion;

    const count = isMobile ? data.mobileFrames : data.desktopFrames;
    const path = isMobile ? data.mobilePath : data.desktopPath;
    const staticIndex = reduceMotion ? count - 1 : 0;

    let progress = reduceMotion ? 1 : 0;
    let current = staticIndex;
    let overshoot = 0; // NEW: на сколько px прокрутили дальше конца анимации
    let ticking = false;

    const draw = () => {
      const img = images[current];
      if (!img.complete || img.naturalWidth === 0) return;

      const W = canvas.width;
      const H = canvas.height;
      const dpr = H / window.innerHeight; // NEW
      const e = smooth(progress);
      const k = isMobile ? 1.05 - 0.2 * e : 1.65 - 0.47 * e;
      const h = H * k;
      const w = (h * img.naturalWidth) / img.naturalHeight;
      const y = isMobile
        ? H * (0.08 - 0.26 * k) + H * 0.1 * e
        : H * (0.13 + 0.03 * e) - 0.26 * h;
      const cx = isMobile ? W / 2 : W * 0.68;

      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, W, H);
      ctx.drawImage(img, cx - w / 2, y - overshoot * dpr, w, h); // NEW: - overshoot
    };

    const images = Array.from({ length: count }, (_, i) => {
      const img = new Image();
      if (!isStatic || i === staticIndex) {
        img.src = frameUrl(path, i);
        img.addEventListener("load", () => {
          if (i === current) draw();
        });
      }
      return img;
    });

    const update = () => {
      ticking = false;
      if (!isStatic) {
        const end = document.getElementById(endId);
        const endTop = end ? end.offsetTop : document.documentElement.scrollHeight;
        const total = Math.max(endTop - window.innerHeight, 1);
        progress = Math.min(1, Math.max(0, window.scrollY / total));
        current = Math.round(progress * (count - 1));
        overshoot = Math.max(0, window.scrollY - total); // NEW
      }
      draw();
      if (barRef.current) barRef.current.style.height = `${progress * 100}%`;
      setStage(stageFromProgress(progress));
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      requestUpdate();
    };

    resize();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", resize);
    };
  }, [data, endId]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] h-full w-full mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="fixed right-10 top-1/2 z-[5] hidden h-[46vh] w-[2px] -translate-y-1/2 bg-coffee-line min-[820px]:block"
      >
        <div ref={barRef} className="absolute left-0 top-0 w-[2px] bg-coffee-espresso" />
        {data.stages.map((label, i) => (
          <span
            key={label}
            className={`absolute right-3 -translate-y-1/2 whitespace-nowrap font-coffee-serif text-[11px] transition-colors ${
              i === stage ? "text-coffee-espresso" : "text-coffee-muted"
            }`}
            style={{ top: `${(i / (data.stages.length - 1)) * 100}%` }}
          >
            {label}
          </span>
        ))}
      </div>
    </>
  );
}