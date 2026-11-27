import type { Service } from "@/lib/services";
import { getWork } from "@/lib/works";
import { LeadForm } from "./LeadForm";
import { TabletFrame } from "./TabletFrame";

type ServiceShowcaseProps = {
  service: Service;
  button: string; // текст на кнопке формы
};

export function ServiceShowcase({ service, button }: ServiceShowcaseProps) {
  // шаблон для демо в планшете (если указан)
  const work = service.demoWorkId ? getWork(service.demoWorkId) : undefined;

  return (
    <section className="bg-pop-bg px-6 pt-30 font-pop text-pop-text">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-5 text-center">
        <p className="text-[13px]">
          {service.title} · от {service.priceFrom} €
          {service.monthly ? ` + ${service.monthly} €/мес` : ""}
        </p>

        <h2 className="m-0 font-pop-display text-pop-display font-bold uppercase leading-[0.95] tracking-[-0.01em] text-pop-ink">
          {service.headline}
        </h2>

        <p className="max-w-[480px] text-pop-body">{service.description}</p>

        <div className="mt-1 flex w-full flex-col items-center gap-3">
          <LeadForm button={button} source={service.id} />
          <p className="text-pop-caption text-pop-faint">
            {service.features.join(" · ")}
          </p>
        </div>

        {work && (
          <a
            href={work.href}
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Посмотреть демо: {work.title} ↗
          </a>
        )}

        {/* планшет с демо */}
        {work && (
          <div className="mt-10 flex w-full justify-center">
            <TabletFrame work={work} width={960} />
          </div>
        )}
      </div>
    </section>
  );
}
