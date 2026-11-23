import type { CoffeeContent } from "../content";
import { Section } from "./Section";

type VisitProps = {
  data: CoffeeContent["visit"];
};

export function Visit({ data }: VisitProps) {
  return (
    <Section head={data}>
      <dl>
        {data.rows.map((row) => (
          <div
            key={row.label}
            className="flex justify-between gap-4 border-b border-coffee-line py-3 text-[15px]"
          >
            <dt className="text-coffee-muted">{row.label}</dt>
            <dd className="text-right">{row.value}</dd>
          </div>
        ))}
      </dl>
      <a
        href={data.ctaHref}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-block rounded-full bg-coffee-espresso px-6 py-3 text-[15px] text-white transition-colors hover:bg-coffee-ink"
      >
        {data.ctaLabel}
      </a>
    </Section>
  );
}