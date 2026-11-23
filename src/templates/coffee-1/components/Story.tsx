import type { CoffeeContent } from "../content";
import { Section } from "./Section";

type StoryProps = {
  data: CoffeeContent["story"];
};

export function Story({ data }: StoryProps) {
  return (
    <Section head={data}>
      <p className="leading-relaxed text-coffee-muted">{data.text}</p>
      <div className="mt-7 grid grid-cols-3 gap-3">
        {data.stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-coffee-serif text-[32px] leading-none text-coffee-espresso min-[820px]:text-[38px]">
              {stat.value}
            </p>
            <p className="mt-2 text-xs text-coffee-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}