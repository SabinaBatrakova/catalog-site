import { soonServices } from "@/lib/services";
import { LeadForm } from "./LeadForm";

export function SoonServices() {
  // если «скоро» ничего нет — блок не показываем вовсе
  if (soonServices.length === 0) return null;

  return (
    <section className="bg-pop-bg px-6 py-30 font-pop text-pop-text">
      <div className="mx-auto max-w-[1000px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-[13px]">Скоро в каталоге</p>
          <h2 className="m-0 font-pop-display text-pop-heading font-bold uppercase leading-[0.95] tracking-[-0.01em] text-pop-ink">
            Ещё два направления
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {soonServices.map((service) => (
            <article
              key={service.id}
              className="flex flex-col gap-4 rounded-pop-card border border-pop-line p-6"
            >
              <span className="self-start rounded-full border border-pop-line px-3 py-1 text-pop-caption text-pop-faint">
                скоро
              </span>

              <h3 className="m-0 text-pop-sub font-medium text-pop-ink">
                {service.title}
              </h3>

              <p className="m-0 text-sm leading-relaxed text-pop-muted">
                {service.description}
              </p>

              <ul className="m-0 flex list-none flex-col gap-1.5 p-0 text-sm">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span aria-hidden="true" className="text-pop-faint">
                      —
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="m-0 mt-auto border-t border-pop-line pt-4 text-pop-sub font-medium">
                от {service.priceFrom} €
                {service.monthly ? (
                  <span className="text-sm font-normal text-pop-faint">
                    {" "}
                    + {service.monthly} €/мес
                  </span>
                ) : null}
              </p>

              <LeadForm
                button="Сообщить о запуске"
                source={`${service.id}-waitlist`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}