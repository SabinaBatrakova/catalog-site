import { LeadForm } from "./LeadForm";
import { PhoneRow } from "./PhoneRow";

export function WorksShowcase() {
  return (
    <section
      id="showcase"
      className="scroll-mt-16 overflow-hidden bg-pop-bg pt-30 font-pop text-pop-text"
    >
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-5 px-6 text-center">
        <p className="text-[13px]">
          Шаблоны и реальные проекты{" "}
          <span className="font-bold italic tracking-tight">Сабины*</span>
        </p>

        <h2 className="m-0 font-pop-display text-pop-display font-bold uppercase leading-[0.95] tracking-[-0.01em] text-pop-ink">
          Сайты, которые уже работают на бизнес
        </h2>

        <p className="max-w-[460px] text-pop-body">
          Каждый шаблон — живой сайт. Выберите основу, а я подгоню тексты, цвета
          и функции под вас.
        </p>

        <div className="mt-1 flex w-full flex-col items-center gap-3">
          <LeadForm button="Хочу такой сайт" source="works" />

          <p className="flex items-center gap-1.5 text-pop-caption text-pop-faint">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M3 9h18" />
            </svg>
            Сначала макет — потом код
          </p>
        </div>
      </div>

      <PhoneRow />
    </section>
  );
}
