import type { CoffeeContent } from "../content";

type FooterProps = {
  data: CoffeeContent["footer"];
};

export function Footer({ data }: FooterProps) {
  return (
    <footer className="relative z-[2] flex flex-col gap-2 bg-coffee-ink px-5 py-7 text-[13px] text-[#d8cbc2] min-[820px]:flex-row min-[820px]:justify-between min-[820px]:px-12 min-[820px]:py-10">
      <span>{data.left}</span>
      <span>{data.credit}</span>
    </footer>
  );
}