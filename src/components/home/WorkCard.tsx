import { Link } from "react-router-dom";
import type { Work } from "@/lib/works";
import { WorkPreview } from "./WorkPreview";

const btn =
  "flex-1 border-[1.5px] border-ink px-3 py-2.5 text-center font-display text-xs font-medium uppercase tracking-[0.08em] transition-colors";

export function WorkCard({ work, index }: { work: Work; index: number }) {
  const isTemplate = work.kind === "template";

  return (
    <article className="flex flex-col border-[1.5px] border-ink bg-white">
      <div className="relative aspect-[16/10] overflow-hidden border-b-[1.5px] border-ink">
        <WorkPreview work={work} />
      </div>

      <div className="flex items-baseline justify-between gap-3 px-4 pt-3">
        <span className="font-display text-xs uppercase tracking-[0.08em] text-muted">
          {String(index + 1).padStart(2, "0")} · {work.label}
        </span>
        {isTemplate && work.priceFrom !== undefined && (
          <span className="font-display text-sm font-medium">
            от {work.priceFrom} €
          </span>
        )}
      </div>
      <h3 className="px-4 pb-3 pt-1 font-serif text-2xl font-light leading-tight">
        {work.title}
      </h3>

      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 border-t border-line px-4 py-3 text-sm">
        <dt className="pt-0.5 font-display text-[10.5px] uppercase tracking-[0.08em] text-muted">
          Стек
        </dt>
        <dd className="font-light">{work.stack.join(" · ")}</dd>

        <dt className="pt-0.5 font-display text-[10.5px] uppercase tracking-[0.08em] text-muted">
          Функции
        </dt>
        <dd className="font-light">{work.features.join(", ")}</dd>

        <dt className="pt-0.5 font-display text-[10.5px] uppercase tracking-[0.08em] text-muted">
          ИИ
        </dt>
        <dd className={work.ai ? "font-light text-ai" : "font-light text-muted"}>
          {work.ai ? `✦ ${work.ai}` : "—"}
        </dd>

        <dt className="pt-0.5 font-display text-[10.5px] uppercase tracking-[0.08em] text-muted">
          Языки · срок
        </dt>
        <dd className="font-light">
          {work.languages} · {work.time}
        </dd>
      </dl>

      <div className="mt-auto flex gap-2 px-4 pb-4">
        {isTemplate ? (
          <>
            <Link to={`/works/${work.id}`} className={`${btn} bg-ink text-paper hover:opacity-85`}>
              Подробнее
            </Link>
            <Link to={work.href} className={`${btn} hover:bg-ink hover:text-paper`}>
              Демо ↗
            </Link>
          </>
        ) : (
          <a
            href={work.href}
            target="_blank"
            rel="noreferrer"
            className={`${btn} hover:bg-ink hover:text-paper`}
          >
            Открыть сайт ↗
          </a>
        )}
      </div>
    </article>
  );
}