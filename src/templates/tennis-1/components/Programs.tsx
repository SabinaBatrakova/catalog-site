import type { TennisContent } from "../content";
import { SectionHead } from "./SectionHead";

type Props = {
  data: TennisContent["programs"];
};

export function Programs({ data }: Props) {
  return (
    <section id="programs" className="mx-auto max-w-6xl scroll-mt-6 px-6 py-14">
      <SectionHead score={data.score} label={data.label} title={data.title} />

      <div className="grid gap-3 md:grid-cols-3">
        {data.items.map((item) => (
          <article
            key={item.id}
            className="group rounded-xl border-2 border-tn-green p-4 transition duration-300 hover:-translate-y-1 hover:bg-tn-green hover:text-tn-cream"
          >
            <div className="flex items-center justify-between text-xs font-semibold">
              <span>{item.no}</span>
              <span className="rounded-full bg-tn-lime px-2.5 py-0.5 text-[11px] text-tn-green">
                {item.tag}
              </span>
            </div>
            <h3 className="mb-2 mt-4 font-shoulders text-3xl font-extrabold uppercase leading-none">
              {item.title}
            </h3>
            <p className="mb-3 text-sm leading-relaxed">{item.text}</p>
            <ul className="text-xs leading-relaxed text-tn-gray transition group-hover:text-[#b9c7bd]">
              {item.meta.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="mt-3 font-shoulders text-3xl font-black text-tn-clay">
              from €{item.priceFrom}
            </p>
          </article>
        ))}
      </div>

      <ol className="relative mt-10 grid gap-6 sm:grid-cols-4 sm:gap-0">
        <span
          aria-hidden="true"
          className="absolute left-1.5 right-1.5 top-1.5 hidden h-0.5 bg-tn-green sm:block"
        />
        {data.steps.map((step) => (
          <li key={step.id} className="relative pr-3 pt-6">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 size-3.5 rounded-full border-2 border-tn-green bg-tn-lime"
            />
            <b className="block font-shoulders text-xl font-extrabold uppercase">{step.title}</b>
            <span className="text-xs leading-snug text-tn-gray">{step.text}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}