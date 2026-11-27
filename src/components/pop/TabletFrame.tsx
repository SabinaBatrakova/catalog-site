import type { Work } from "@/lib/works";

type TabletFrameProps = {
  work: Work;
  width?: number; // ширина планшета на странице, px (высота считается сама)
  className?: string;
};

// Размер картинки рамки и где в ней «окно» экрана (в процентах)
const FRAME_W = 1687;
const FRAME_H = 1155;
const SCREEN = { left: 1.84, top: 2.94, width: 96.5, height: 94.81 };

const VIEWPORT = 1180; // ширина iPad в горизонтальном положении

export function TabletFrame({ work, width = 640, className = "" }: TabletFrameProps) {
  const height = (width * FRAME_H) / FRAME_W;
  const screenW = (width * SCREEN.width) / 100;
  const screenH = (height * SCREEN.height) / 100;
  const scale = screenW / VIEWPORT;

  return (
    <div className={`relative shrink-0 ${className}`} style={{ width, height }}>
      {/* экран — лежит ПОД рамкой */}
      <div
        className="absolute overflow-hidden bg-white"
        style={{
          left: `${SCREEN.left}%`,
          top: `${SCREEN.top}%`,
          width: `${SCREEN.width}%`,
          height: `${SCREEN.height}%`,
          borderRadius: "4% / 6%",
        }}
      >
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
              height: screenH / scale,
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

      {/* рамка планшета — сверху */}
      <img
        src="/mockups/tablet.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none drop-shadow-[0_30px_40px_rgba(0,0,0,0.18)]"
      />
    </div>
  );
}