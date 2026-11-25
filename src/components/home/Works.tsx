import { works } from "@/lib/works";
import { contacts } from "@/lib/contacts";
import { WorkCard } from "./WorkCard";

export function Works() {
  return (
    <section id="works" className="scroll-mt-16 px-7 pb-24">
      <div className="mb-6 flex items-baseline justify-between">
        <span className="font-display text-xs font-medium uppercase tracking-[0.08em]">
          Работы и шаблоны
        </span>
        <span className="font-display text-xs font-medium uppercase tracking-[0.08em]">
          {String(works.length).padStart(2, "0")}
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {works.map((work, i) => (
          <WorkCard key={work.id} work={work} index={i} />
        ))}

        <a
          href={contacts[0].href}
          target="_blank"
          rel="noreferrer"
          className="group flex min-h-[320px] flex-col justify-between border-[1.5px] border-dashed border-ink p-6 transition-colors hover:bg-ink hover:text-paper"
        >
          <span className="font-display text-xs uppercase tracking-[0.08em] text-muted group-hover:text-paper/60">
            {String(works.length + 1).padStart(2, "0")} · Ваш проект
          </span>
          <span className="font-serif text-3xl font-light leading-tight">
            Здесь может быть
            <br />
            ваш сайт
          </span>
          <span className="font-display text-xs font-medium uppercase tracking-[0.08em]">
            Обсудить проект ↗
          </span>
        </a>
      </div>
    </section>
  );
}