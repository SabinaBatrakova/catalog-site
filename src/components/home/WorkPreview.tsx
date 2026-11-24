import { useEffect, useRef, useState } from "react";
import type { Work } from "@/lib/works";

const FRAME_WIDTH = 1280;
const FRAME_HEIGHT = 800;

export function WorkPreview({ work }: { work: Work }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / FRAME_WIDTH);
    });
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  if (work.image && !failed) {
    return (
      <img
        src={work.image}
        alt={`Превью сайта ${work.title}`}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover object-top"
      />
    );
  }

  if (work.previewSrc) {
    return (
      <div ref={boxRef} className="absolute inset-0">
        <iframe
          src={work.previewSrc}
          title={work.title}
          loading="lazy"
          scrolling="no"
          tabIndex={-1}
          className="pointer-events-none absolute left-0 top-0 origin-top-left"
          style={{
            width: FRAME_WIDTH,
            height: FRAME_HEIGHT,
            transform: `scale(${scale})`,
          }}
        />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-line font-display text-[11px] uppercase tracking-[0.08em] text-muted">
      Скриншот
    </div>
  );
}