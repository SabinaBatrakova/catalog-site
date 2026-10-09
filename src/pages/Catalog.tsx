import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

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

export function Catalog() {
  const [isOpen, setIsOpen] = useState(true);
  const [rotation, setRotation] = useState(0);
  const velocityRef = useRef(0);

  const count = niches.length;
  const frontIndex = ((Math.round(rotation) % count) + count) % count;

  useEffect(() => {
    let frame = 0;

    const tick = () => {
      setRotation((r) => {
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

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
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

  const handleMouseLeave = () => {
    velocityRef.current = 0;
  };

  return (
    <div className="flex h-screen">
      <aside
        className={`shrink-0 overflow-hidden transition-all duration-300 ${
          isOpen ? "w-80 border-r" : "w-0"
        }`}
      >
        <div className="h-full w-80 overflow-y-auto p-8">
          <h1 className="text-2xl">Сабина Батракова</h1>
          <p className="mt-4 text-sm">
            Делаю сайты для малого бизнеса. Выбери шаблон справа.
          </p>
        </div>
      </aside>

      <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-6 rounded-full border px-4 py-2 text-sm"
        >
          {isOpen ? "Скрыть описание" : "Показать описание"}
        </button>

        <div
          className="relative h-[420px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
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
                    className="pointer-events-none absolute left-0 top-0 h-[800px] w-[1280px] origin-top-left scale-[0.3]"
                  />
                </div>
                <h2 className="mt-3 text-lg">{n.label}</h2>
                <p className="text-sm opacity-70">{n.desc}</p>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}