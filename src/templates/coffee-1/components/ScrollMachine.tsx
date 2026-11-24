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

// Порядок загрузки: сначала каждый 8-й кадр, потом 4-й, 2-й и остальные.
// Так грубая анимация доступна почти сразу, а детали догружаются.
function loadOrder(count: number) {
  const order: number[] = [];
  const added = new Set<number>();
  for (const step of [8, 4, 2, 1]) {
    for (let i = 0; i < count; i += step) {
      if (!added.has(i)) {
        added.add(i);
        order.push(i);
      }
    }
  }
  if (!added.has(count - 1)) order.push(count - 1);
  return order;
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
    let overshoot = 0;
    let ticking = false;
    let cancelled = false;

    const images: HTMLImageElement[] = Array.from(
      { length: count },
      () => new Image(),
    );
    const loaded: boolean[] = Array.from({ length: count }, () => false);

    // Ближайший уже загруженный кадр к нужному.
    const nearestLoaded = (index: number) => {
      for (let d = 0; d < count; d++) {
        if (index - d >= 0 && loaded[index - d]) return index - d;
        if (index + d < count && loaded[index + d]) return index + d;
      }
      return -1;
    };

    const draw = () => {
      const index = nearestLoaded(current);
      if (index === -1) return;
      const img = images[index];

      const W = canvas.width;
      const H = canvas.height;
      const dpr = H / window.innerHeight;

      // Камера опускается по машине: в основном между 20% и 80% прокрутки.
      const pan = smooth(Math.min(1, Math.max(0, (progress - 0.2) / 0.6)));
      const k = isMobile ? 0.85 : 2;
      const h = H * k;
      const w = (h * img.naturalWidth) / img.naturalHeight;
      const y = isMobile ? H * -0.04 : H * (-0.43 - 0.53 * pan);
      const cx = isMobile ? W / 2 : W * 0.7;
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, W, H);
      ctx.drawImage(img, cx - w / 2, y - overshoot * dpr, w, h);
    };

    const load = (index: number) =>
      new Promise<void>((resolve) => {
        const img = images[index];
        img.onload = () => {
          loaded[index] = true;
          if (!cancelled) draw();
          resolve();
        };
        img.onerror = () => resolve();
        img.src = frameUrl(path, index);
      });

    // Сначала стартовый кадр, потом (если нужна анимация) остальные по порядку.
    load(staticIndex).then(() => {
      if (isStatic || cancelled) return;
      loadOrder(count)
        .filter((i) => i !== staticIndex)
        .forEach((i) => load(i));
    });

    const update = () => {
      ticking = false;
      if (!isStatic) {
        const end = document.getElementById(endId);
        const endTop = end
          ? end.offsetTop
          : document.documentElement.scrollHeight;
        const total = Math.max(endTop - window.innerHeight, 1);
        progress = Math.min(1, Math.max(0, window.scrollY / total));
        current = Math.round(progress * (count - 1));
        overshoot = Math.max(0, window.scrollY - total);
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
      cancelled = true;
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
        <div
          ref={barRef}
          className="absolute left-0 top-0 w-[2px] bg-coffee-espresso"
        />
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
