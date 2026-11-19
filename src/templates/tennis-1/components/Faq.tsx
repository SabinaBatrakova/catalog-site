import type { TennisContent } from "../content";
import { SectionHead } from "./SectionHead";

type Props = {
  data: TennisContent["faq"];
};

export function Faq({ data }: Props) {
  return (
    <section id="faq" className="mx-auto max-w-6xl scroll-mt-6 px-6 py-14">
      <SectionHead score={data.score} label={data.label} title={data.title} />
      <p className="-mt-3 mb-4 text-xs text-tn-gray">{data.intro}</p>

      <div className="max-w-3xl">
        {data.items.map((item, i) => (
          <details
            key={item.id}
            open={i === 0}
            className="group border-b border-[#ece7de] py-3"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden="true"
                className="font-shoulders text-2xl font-black leading-none text-tn-clay transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-tn-gray">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}