import type { CoffeeContent } from "../content";
import { Section } from "./Section";
import { PriceList } from "./PriceList";

type ClassesProps = {
  data: CoffeeContent["classes"];
};

export function Classes({ data }: ClassesProps) {
  return (
    <Section head={data}>
      <PriceList items={data.items} />
      <a
        href={data.ctaHref}
        className="mt-7 inline-block rounded-full border border-coffee-ink px-6 py-3 text-[15px] transition-colors hover:bg-coffee-ink hover:text-white"
      >
        {data.ctaLabel}
      </a>
    </Section>
  );
}