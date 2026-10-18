import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent, TouchEvent } from "react";
import { contacts } from "@/lib/contacts";

const niches = [
  {
    templateId: "beauty-1",
    label: "Услуги и красота",
    desc: "Салоны, мастера, студии",
    live: true,
  },
  {
    templateId: "school-1",
    label: "Обучение и семинары",
    desc: "Школы, семинары, курсы",
    live: true,
  },
  {
    templateId: "rental-1",
    label: "Туризм и аренда",
    desc: "Туры, аренда, отели",
    live: true,
  },
];

const RADIUS_X = 240;
const RADIUS_Y = 40;
const DEAD_ZONE = 0.3;
const MAX_SPEED = 0.03;
const PIXELS_PER_CARD = 120;

export function Catalog() {
  const [isOpen, setIsOpen] = useState(true);
  const [rotation, setRotation] = useState(0);
  const velocityRef = useRef(0);
  const draggingRef = useRef(false);
  const touchXRef = useRef(0);

  const count = niches.length;
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
    <div className="flex min-h-screen flex-col md:h-screen md:flex-row">
      <aside
        className={`w-full shrink-0 overflow-hidden border-b transition-all duration-300 md:border-b-0 ${
          isOpen ? "md:w-80 md:border-r" : "md:w-0"
        }`}
      >
        <div className="flex w-full flex-col p-6 md:h-full md:w-80 md:overflow-y-auto md:p-8">
          <h1 className="text-2xl">Сабина Батракова</h1>
          <p className="mt-1 text-sm opacity-70">Веб-разработчик</p>

          <p className="mt-6 text-sm leading-relaxed">
            Создаю сайты для малого бизнеса: салонов, школ, туристических и
            арендных проектов. Выбираешь шаблон справа, я адаптирую его под твой
            бизнес за 1–3 дня.
          </p>

          <ul className="mt-6 space-y-2 text-sm">
            <li>Адаптация шаблона 80€</li>
            <li>Сайт с индивидуальными блоками 150€</li>
            <li>Мини-сайт на 3–5 страниц от 300€</li>
          </ul>

          <a
            href={contacts[0].href}
            target="_blank"
            rel="noreferrer"
            className="mt-8 rounded-full border px-5 py-3 text-center text-sm"
          >
            Заказать сайт
          </a>

          <p className="font-display text-5xl font-semibold uppercase">
            Сайты по вашим меркам ČĆŠĐŽ
          </p>
          <p
            className="font-serif text-4xl"
            style={{
              fontStretch: "62.5%",
              fontVariationSettings: '"wdth" 62.5',
            }}
          >
            Сайты Лендинги. Čaj, ćup, šuma, žaba, đak
          </p>
          <p className="font-hand text-3xl">
            Привет, я Сабина. Čaj, ćup, šuma.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm underline"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </aside>

      <main className="overflow-x-hidden p-4 md:flex-1 md:overflow-y-auto md:p-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-6 hidden rounded-full border px-4 py-2 text-sm md:block"
        >
          {isOpen ? "Скрыть описание" : "Показать описание"}
        </button>

        <div
          className="relative h-[300px] touch-pan-y md:h-[420px]"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          <div className="absolute inset-0 origin-center scale-[0.7] md:scale-100">
            {niches.map((n, i) => {
              const angle = ((i - rotation) * 2 * Math.PI) / count;
              const depth = Math.cos(angle);
              const x = Math.sin(angle) * RADIUS_X;
              const y = (depth - 1) * RADIUS_Y;
              const closeness = (depth + 1) / 2;
              const scale = 0.75 + 0.25 * closeness;
              const isFront = i === frontIndex;

              return (
                <Link
                  key={n.templateId}
                  to={`/templates/${n.templateId}`}
                  className={`absolute left-1/2 top-1/2 w-96 ${
                    isFront ? "" : "pointer-events-none"
                  }`}
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`,
                    zIndex: Math.round(closeness * 10),
                    opacity: 0.5 + 0.5 * closeness,
                  }}
                >
                  <div className="relative h-60 w-96 overflow-hidden rounded-lg border bg-white">
                    <iframe
                      src={`/templates/${n.templateId}`}
                      title={n.label}
                      scrolling="no"
                      className="pointer-events-none absolute left-0 top-0 h-[800px] w-[1280px] origin-top-left scale-[0.3]"
                    />
                  </div>
                  <h2 className="mt-3 text-lg">{n.label}</h2>
                  <p className="text-sm opacity-70">{n.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>

        <p className="mt-2 text-center text-xs opacity-60">
          <span className="md:hidden">Листай пальцем влево-вправо</span>
          <span className="hidden md:inline">
            Подведи курсор к краю, чтобы покрутить
          </span>
        </p>
      </main>
    </div>
  );
}
