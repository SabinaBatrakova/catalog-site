import type { TennisContent } from "../content";
import { useInView } from "../useInView";
import { FlipText } from "./FlipText";
import { SectionHead } from "./SectionHead";

type Props = {
  data: TennisContent["pricing"];
};

export function Pricing({ data }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-6 px-6 py-14">
      <SectionHead score={data.score} label={data.label} title={data.title} />

      <div ref={ref} className="rounded-xl bg-tn-green px-4 py-3.5 text-tn-cream md:px-6">
        <div className="grid grid-cols-[1fr_64px_120px] gap-3 border-b border-[#2f5a49] pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b9c7bd]">
          <span>Lesson</span>
          <span>Min</span>
          <span className="text-right">€ / person</span>
        </div>

        {data.rows.map((row, i) => (
          <div
            key={row.id}
            className="grid grid-cols-[1fr_64px_120px] items-center gap-3 border-b border-[#2f5a49] py-3 last:border-b-0"
          >
            <div>
              <p className="font-shoulders text-2xl font-extrabold uppercase leading-none">
                {row.name}
                {row.badge && (
                  <span className="ml-2 inline-block rounded-full bg-tn-lime px-2 py-0.5 align-middle font-inter text-[10px] font-semibold uppercase text-tn-green">
                    {row.badge}
                  </span>
                )}
              </p>
              <p className="mt-1 text-xs text-[#b9c7bd]">{row.note}</p>
            </div>
            <span className="text-sm text-[#b9c7bd]">{row.minutes}</span>
            <div className="flex h-7 justify-end">
              {inView && (
                <FlipText
                  text={String(row.price)}
                  row={i}
                  startDelay={200}
                  highlight={row.highlight}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-tn-gray">{data.note}</p>
    </section>
  );
}