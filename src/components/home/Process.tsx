import { useState } from "react";
import { Reveal } from "@/components/home/Reveal";
import { Sticker } from "@/components/ui/Sticker";
import type { StickerShape, StickerTone } from "@/components/ui/Sticker";

type Step = {
  sticker: string;
  title: string;
  text: string;
  tilt: string;
  tone: StickerTone;
  shape: StickerShape;
  stickerTilt: string;
};

const steps: Step[] = [
  {
    sticker: "Идея",
    title: "Погружение в задачу",
    text: "Обсуждаем вашу идею, видение проекта, желаемый функционал и визуальный стиль. Определяем цели и основные задачи сайта.",
    tilt: "-rotate-2",
    tone: "steel",
    shape: "c",
    stickerTilt: "-rotate-[8deg]",
  },
  {
    sticker: "Структура",
    title: "Структура и согласование",
    text: "Создаю каркас сайта: продумываю расположение блоков, логику страниц и путь пользователя. Согласовываем структуру перед переходом к реализации.",
    tilt: "rotate-[1.5deg]",
    tone: "line",
    shape: "b",
    stickerTilt: "rotate-[5deg]",
  },
  {
    sticker: "Готово",
    title: "Реализация и финальная версия",
    text: "Разрабатываю сайт, проверяю его работу и адаптацию под разные устройства. Вношу согласованные правки и подготавливаю итоговую версию к публикации.",
    tilt: "-rotate-1",
    tone: "accent",
    shape: "a",
    stickerTilt: "-rotate-6",
  },
];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 30"
      className={`h-[30px] w-[60px] text-ink ${className}`}
    >
      <path
        d="M2,22 C16,4 36,4 56,16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />
      <path
        d="M47,16 L56,16 L51.6,8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function StepCard({ step }: { step: Step }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative border-[1.5px] border-ink bg-paper p-4 transition-all duration-300 ease-out motion-safe:hover:-translate-y-1.5 motion-safe:hover:rotate-0 ${step.tilt}`}
    >
      <div className="absolute -left-3 -top-4 z-10">
        <Sticker
          tone={step.tone}
          shape={step.shape}
          tilt={step.stickerTilt}
          active={hovered}
        >
          {step.sticker}
        </Sticker>
      </div>
      <h3 className="mt-2 font-display text-lg font-semibold uppercase leading-none">
        {step.title}
      </h3>
      <p className="mt-3 font-serif text-[15px] leading-[1.55]">{step.text}</p>
    </div>
  );
}

export function Process() {
  return (
    <section id="process" className="scroll-mt-16 px-7 py-24 md:py-32">
      <Reveal>
        <p className="font-display text-xs font-medium uppercase tracking-[0.08em]">
          Процесс
        </p>
        <h2 className="mt-3 font-display text-[46px] font-semibold uppercase leading-[0.92] md:text-[64px]">
          Как я работаю
        </h2>
      </Reveal>

      <ol className="mt-16 grid gap-0 md:grid-cols-3 md:gap-8">
        {steps.map((step, i) => (
          <li key={step.sticker} className="relative">
            <Reveal delay={i * 150}>
              <StepCard step={step} />
            </Reveal>

            {i < steps.length - 1 && (
              <>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-11 top-24 hidden md:block"
                >
                  <Arrow />
                </div>
                <div className="flex justify-center py-6 md:hidden">
                  <Arrow className="rotate-90" />
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}