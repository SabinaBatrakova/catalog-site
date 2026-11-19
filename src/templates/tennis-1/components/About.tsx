import type { TennisContent } from "../content";
import { SectionHead } from "./SectionHead";

type Props = {
  data: TennisContent["about"];
};

export function About({ data }: Props) {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-6 px-6 py-14">
      <SectionHead score={data.score} label={data.label} title={data.title} />

      <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="mb-4 font-shoulders text-4xl font-extrabold uppercase leading-none md:text-5xl">
            {data.quoteStart}
            <span className="text-tn-clay">{data.quoteAccent}</span>
            {data.quoteEnd}
          </p>
          <p className="text-sm leading-relaxed text-tn-gray">{data.bio}</p>
        </div>

        <dl className="border-t-2 border-tn-green">
          {data.facts.map((fact) => (
            <div
              key={fact.label}
              className="flex justify-between gap-4 border-b border-[#ece7de] py-2.5 text-sm"
            >
              <dt className="text-tn-gray">{fact.label}</dt>
              <dd className="text-right font-semibold">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-3">
        {data.reviews.map((review) => (
          <figure key={review.id} className="rounded-xl bg-[#f6f2ea] p-4">
            <div className="mb-3 flex gap-1.5">
              {review.score.map((set) => (
                <span
                  key={set}
                  className="rounded bg-tn-green px-2 py-0.5 font-shoulders text-base font-extrabold text-tn-lime"
                >
                  {set}
                </span>
              ))}
            </div>
            <blockquote className="mb-3 text-sm leading-relaxed">{review.text}</blockquote>
            <figcaption>
              <b className="text-xs font-semibold">{review.name}</b>
              <span className="block text-xs text-tn-gray">{review.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}