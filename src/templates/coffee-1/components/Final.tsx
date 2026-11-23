import type { CoffeeContent } from "../content";
import { Section } from "./Section";

type FinalProps = {
  data: CoffeeContent["final"];
};

export function Final({ data }: FinalProps) {
  return (
    <Section head={data}>
      <p className="leading-relaxed text-coffee-muted">{data.text}</p>
      <a
        href={data.ctaHref}
        className="mt-7 inline-block rounded-full bg-coffee-espresso px-6 py-3 text-[15px] text-white transition-colors hover:bg-coffee-ink"
      >
        {data.ctaLabel}
      </a>
    </Section>
  );
}