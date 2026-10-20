import { useId } from "react";
import type { ReactNode } from "react";

type Tone = "ink" | "accent" | "steel" | "line";
type Shape = "a" | "b" | "c";

const outlines: Record<Shape, string> = {
  a: "M10,26 C6,10 44,3 92,4 C142,5 178,12 177,26 C176,42 138,47 92,46 C46,45 12,42 9,28 C8,24 11,19 16,15",
  b: "M8,24 C10,9 52,5 96,5 C146,5 180,13 178,27 C176,43 130,46 88,46 C40,46 6,40 8,26 C9,20 14,15 20,12",
  c: "M12,28 C5,12 48,4 94,4 C144,4 179,14 176,28 C173,41 134,48 90,46 C42,44 10,40 11,30 C11,25 14,20 19,17",
};

type ToneClasses = {
  text: string;
  hoverText: string;
  stroke: string;
  fill: string;
};

const tones: Record<Tone, ToneClasses> = {
  ink: {
    text: "text-ink",
    hoverText: "group-hover:text-white group-active:text-white",
    stroke: "stroke-ink",
    fill: "[--sticker-fill:var(--color-ink)]",
  },
  accent: {
    text: "text-accent",
    hoverText: "group-hover:text-white group-active:text-white",
    stroke: "stroke-accent",
    fill: "[--sticker-fill:var(--color-accent)]",
  },
  steel: {
    text: "text-ink",
    hoverText: "",
    stroke: "stroke-ink",
    fill: "[--sticker-fill:var(--color-steel)]",
  },
  line: {
    text: "text-ink",
    hoverText: "",
    stroke: "stroke-ink",
    fill: "[--sticker-fill:var(--color-line)]",
  },
};

type StickerProps = {
  children: ReactNode;
  tone?: Tone;
  shape?: Shape;
  tilt?: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
};

export function Sticker({
  children,
  tone = "ink",
  shape = "a",
  tilt = "",
  href,
  onClick,
  icon,
}: StickerProps) {
  const rawId = useId();
  const clipId = `sticker-clip-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const t = tones[tone];

  const className = `group relative inline-block cursor-pointer px-7 py-3 font-display text-xs font-medium uppercase tracking-[0.08em] ${t.fill} ${t.text} ${tilt}`;

  const body = (
    <>
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.005435 0.02)"
              d={`${outlines[shape]} Z`}
            />
          </clipPath>
        </defs>
      </svg>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `url(#${clipId})` }}
      >
        <span className="absolute left-1/2 top-1/2 -ml-[200px] -mt-[200px] block h-[400px] w-[400px] rotate-[28deg]">
          <span className="block h-full w-full translate-y-[300px] transition-transform duration-[2600ms] ease-[cubic-bezier(.4,.05,.3,1)] group-hover:translate-y-0 group-active:translate-y-0 motion-reduce:transition-none">
            <span className="sticker-wave block" />
            <span className="block h-[calc(100%-14px)] bg-(--sticker-fill)" />
          </span>
        </span>
      </span>

      <svg
        viewBox="0 0 184 50"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      >
        <path
          d={outlines[shape]}
          fill="none"
          strokeWidth="1.6"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className={t.stroke}
        />
      </svg>

      <span
        className={`relative inline-flex items-center gap-2 transition-colors duration-300 group-hover:delay-[900ms] group-hover:duration-[900ms] ${t.hoverText}`}
      >
        {children}
        {icon}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        className={className}
      >
        {body}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {body}
    </button>
  );
}