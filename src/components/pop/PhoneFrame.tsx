import type { Work } from "@/lib/works";

type PhoneFrameProps = {
  work: Work;
  width?: number; // ширина телефона на странице, px (высота считается сама)
  className?: string;
};

// Размер картинки рамки и где в ней «окно» экрана (в процентах)
const FRAME_W = 832;
const FRAME_H = 1792;
const SCREEN = { left: 6.25, top: 2.34, width: 87.86, height: 94.08 };

const VIEWPORT = 390; // ширина настоящего телефона (iPhone)
const SAFE_TOP = 0.055; // полоска сверху под «чёлкой» — доля высоты экрана

export function PhoneFrame({ work, width = 240, className = "" }: PhoneFrameProps) {
  const height = (width * FRAME_H) / FRAME_W;
  const screenW = (width * SCREEN.width) / 100;
  const screenH = (height * SCREEN.height) / 100;
  const safeTop = screenH * SAFE_TOP;
  const scale = screenW / VIEWPORT;

  return (
    <div className={`relative shrink-0 ${className}`} style={{ width, height }}>
      {/* экран — лежит ПОД рамкой */}
      <div
        className="absolute flex flex-col overflow-hidden bg-white"
        style={{
          left: `${SCREEN.left}%`,
          top: `${SCREEN.top}%`,
          width: `${SCREEN.width}%`,
          height: `${SCREEN.height}%`,
          borderRadius: "13% / 6%",
        }}
      >
        <div className="shrink-0" style={{ height: safeTop }} />

        <div className="relative flex-1 overflow-hidden">
          {work.previewSrc ? (
            <iframe
              src={work.previewSrc}
              title={`Превью: ${work.title}`}
              tabIndex={-1}
              loading="lazy"
              scrolling="no"
              className="pointer-events-none origin-top-left border-0"
              style={{
                width: VIEWPORT,
                height: (screenH - safeTop) / scale,
                transform: `scale(${scale})`,
              }}
            />
          ) : work.image ? (
            <img
              src={work.image}
              alt={`Скриншот: ${work.title}`}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="h-full w-full bg-[#f5f5f7]" />
          )}
        </div>
      </div>

      {/* рамка телефона — лежит СВЕРХУ, экран виден сквозь прозрачное «окно» */}
      <img
        src="/mockups/iphone.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none drop-shadow-[0_30px_40px_rgba(0,0,0,0.15)]"
      />
    </div>
  );
}