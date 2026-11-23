import type { CoffeeContent } from "../content";
import { Section } from "./Section";
import { PriceList } from "./PriceList";

type MenuProps = {
  data: CoffeeContent["menu"];
};

export function Menu({ data }: MenuProps) {
  return (
    <Section head={data}>
      <PriceList items={data.items} />
    </Section>
  );
}