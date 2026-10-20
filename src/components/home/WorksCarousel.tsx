import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent, ReactNode, TouchEvent } from "react";

type CarouselItem = {
  id: string;
  title: string;
  label: string;
  href: string;
  external?: boolean;
  image?: string;
  previewSrc?: string;
};

const items: CarouselItem[] = [
  {
    id: "ipodo-expert-lab",
    title: "iPODO Expert Lab",
    label: "Проект",
    href: "https://ipodoexpertlab.com",
    external: true,
    image: "/public/works/ipodoexpertlab.webp",
  },
  {
    id: "ipodo",
    title: "iPODO",
    label: "В работе",
    href: "https://ipodo.me",
    external: true,
    image: "/public/works/work-ipodo.webp",
  },
  {
    id: "beauty-1",
    title: "Услуги и красота",
    label: "Шаблон",
    href: "/templates/beauty-1",
    previewSrc: "/templates/beauty-1",
  },
  {
    id: "school-1",
    title: "Обучение и семинары",
    label: "Шаблон",
    href: "/templates/school-1",
    previewSrc: "/templates/school-1",
  },
  {
    id: "rental-1",
    title: "Туризм и аренда",
    label: "Шаблон",
    href: "/templates/rental-1",
    previewSrc: "/templates/rental-1",
  },
];

const RADIUS_X_MAX = 360;
const RADIUS_X_MOBILE = 190;
const RADIUS_Y = 22;
const DEAD_ZONE = 0.3;
const MAX_SPEED = 0.01;
const PIXELS_PER_CARD = 120;
const TILTS = [-3, 2.5, -2, 3, -1.5];

const caption = "font-display text-xs font-medium uppercase tracking-[0.08em]";

function Preview({ item }: { item: CarouselItem }) {
  const [failed, setFailed] = useState(false);

  if (item.image && !failed) {
    return (
      <img
        src={item.image}
        alt={`Превью сайта ${item.title}`}
        width={800}
        height={500}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover object-top"
      />
    );
  }

  if (item.previewSrc) {
    return (
      <iframe
        src={item.previewSrc}
        title={item.title}
        scrolling="no"
        className="pointer-events-none absolute left-0 top-0 h-[800px] w-[1280px] origin-top-left scale-[0.165]"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="flex h-full w-full items-center justify-center bg-line font-display text-[11px] font-medium uppercase tracking-[0.08em] text-muted"
    >
      Скриншот
    </div>
  );
}

type CardLinkProps = {
  item: CarouselItem;
  className: string;
  style: CSSProperties;
  children: ReactNode;
};

function CardLink({ item, className, style, children }: CardLinkProps) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${item.title}, откроется в новой вкладке`}
        className={className}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={item.href} className={className} style={style}>
      {children}
    </Link>
  );
}

export function WorksCarousel() {
  const [rotation, setRotation] = useState(0);
  const [viewport, setViewport] = useState(() => window.innerWidth);

  useEffect(() => {
    const onResize = () => setViewport(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const radiusX =
    viewport >= 768 ? Math.min(RADIUS_X_MAX, viewport * 0.3) : RADIUS_X_MOBILE;

  const velocityRef = useRef(0);
  const draggingRef = useRef(false);
  const touchXRef = useRef(0);

  const count = items.length;
  const frontIndex = ((Math.round(rotation) % count) + count) % count;

  useEffect(() => {
    let frame = 0;

    const tick = () => {
      setRotation((r) => {
        if (draggingRef.current) return r;
        if (velocityRef.current !== 0) return r + velocityRef.current;
        const target = Math.round(r);
        const diff = target - r;
        return Math.abs(diff) < 0.001 ? target : r + diff * 0.1;
      });
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;

    const rect = e.currentTarget.getBoundingClientRect();
    const pos = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const distance = Math.abs(pos);

    if (distance < DEAD_ZONE) {
      velocityRef.current = 0;
      return;
    }

    const strength = (distance - DEAD_ZONE) / (1 - DEAD_ZONE);
    velocityRef.current = Math.sign(pos) * strength * MAX_SPEED;
  };

  const handlePointerLeave = () => {
    velocityRef.current = 0;
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    velocityRef.current = 0;
    touchXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const x = e.touches[0].clientX;
    const delta = x - touchXRef.current;
    touchXRef.current = x;
    setRotation((r) => r - delta / PIXELS_PER_CARD);
  };

  const handleTouchEnd = () => {
    draggingRef.current = false;
  };

  return (
    <section id="works" className="scroll-mt-16 pb-24">
      <div className="flex items-baseline justify-between px-7">
        <span className={caption}>Работы и шаблоны</span>
        <span className={caption}>
          {String(frontIndex + 1).padStart(2, "0")} /{" "}
          {String(count).padStart(2, "0")}
        </span>
      </div>

      <div
        className="relative mt-2 h-[330px] touch-pan-y overflow-hidden"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {items.map((item, i) => {
          const angle = ((i - rotation) * 2 * Math.PI) / count;
          const depth = Math.cos(angle);
          const x = Math.sin(angle) * radiusX;
          const y = (depth - 1) * RADIUS_Y;
          const closeness = (depth + 1) / 2;
          const scale = 0.72 + 0.28 * closeness;
          const tilt = TILTS[i % TILTS.length];
          const isFront = i === frontIndex;

          return (
            <CardLink
              key={item.id}
              item={item}
              className={`absolute left-1/2 top-1/2 w-[230px] border-[1.5px] border-ink bg-paper p-[9px] ${
                isFront ? "" : "pointer-events-none"
              }`}
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${tilt}deg) scale(${scale})`,
                zIndex: Math.round(closeness * 10),
                opacity: 0.45 + 0.55 * closeness,
              }}
            >
              <div className="relative h-[132px] w-full overflow-hidden">
                <Preview item={item} />
              </div>
              <div className="flex items-baseline justify-between gap-2 pt-[9px]">
                <span className="font-narrow font-serif text-[22px] leading-none">
                  {item.title}
                </span>
                <span className="font-display text-[10px] font-medium uppercase tracking-[0.08em]">
                  {item.label}
                </span>
              </div>
            </CardLink>
          );
        })}
      </div>

      <p className={`${caption} mt-2 text-center text-muted`}>
        <span className="md:hidden">Листайте пальцем</span>
        <span className="hidden md:inline">Подведите курсор к краю</span>
      </p>
    </section>
  );
}