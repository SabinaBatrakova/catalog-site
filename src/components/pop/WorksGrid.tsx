import { works } from "@/lib/works";
import { PhoneFrame } from "./PhoneFrame";

export function WorksGrid() {
  return (
    <section
      id="works"
      className="scroll-mt-16 bg-pop-bg py-30 font-pop text-pop-text"
    >
      {/* заголовок блока */}
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-5 px-6 text-center">
        <p className="text-[13px]">Шаблоны и проекты · {works.length}</p>

        <h2 className="m-0 font-pop-display text-pop-display font-bold uppercase leading-[0.95] tracking-[-0.01em] text-pop-ink">
          Шаблоны, которые приносят заявки и продажи
        </h2>

        <p className="max-w-[460px] text-pop-body">
          Готовая основа под вашу нишу: остаётся добавить ваши тексты и фото.
        </p>
      </div>

      {/* сетка */}
      <div className="mx-auto mt-16 grid max-w-[1100px] gap-x-10 gap-y-14 px-6 md:grid-cols-2 lg:grid-cols-3">
        {works.map((work, i) => (
          <article key={work.id} className="flex flex-col gap-2">
            {/* верх телефона, низ уходит в белое */}
            <div className="relative flex h-[330px] justify-center overflow-hidden pt-6">
              <PhoneFrame
                work={work}
                width={230}
                className={i % 3 === 1 ? "-rotate-3" : ""}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-linear-to-b from-transparent to-white" />
            </div>

            <p className="mt-2 text-pop-caption text-pop-faint">{work.label}</p>
            <h3 className="m-0 text-pop-sub font-medium text-pop-ink">
              {work.title}
            </h3>
            <p className="m-0 text-sm leading-relaxed text-pop-muted">
              {work.short}
            </p>

            <a
              href={work.href}
              target={work.external ? "_blank" : undefined}
              rel={work.external ? "noreferrer" : undefined}
              className="mt-1 self-start text-sm font-medium underline-offset-4 hover:underline"
            >
              {work.external ? "Открыть сайт ↗" : "Смотреть демо ↗"}
            </a>
          </article>
        ))}

        {/* шестая ячейка — ваш проект */}
        <article className="flex flex-col gap-2">
          <a
            href="#showcase"
            className="flex h-[330px] items-center justify-center rounded-pop-image border border-dashed border-pop-line text-center text-pop-faint transition-colors hover:border-pop-text hover:text-pop-text"
          >
            <span className="font-pop-display text-3xl font-bold uppercase leading-[0.95]">
              Здесь может быть
              <br />
              ваш сайт
            </span>
          </a>

          <p className="mt-2 text-pop-caption text-pop-faint">Ваш проект</p>
          <h3 className="m-0 text-pop-sub font-medium text-pop-ink">
            Ваш бизнес
          </h3>
          <p className="m-0 text-sm leading-relaxed text-pop-muted">
            Оставьте контакт в форме выше — начнём с макета.
          </p>
        </article>
      </div>
    </section>
  );
}