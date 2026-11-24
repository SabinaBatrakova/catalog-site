import type { ReactNode } from "react";
import type { SectionHead } from "../content";
import { Title } from "./Title";

type SectionProps = {
  head: SectionHead;
  children: ReactNode;
};

export function Section({ head, children }: SectionProps) {
  return (
    <section
      id={head.id}
      className="flex min-h-svh scroll-mt-20 items-end px-5 py-24 min-[820px]:items-center min-[820px]:px-12 min-[820px]:py-32"
    >
      <div className="w-full rounded-3xl border border-white/60 bg-coffee-foam/75 p-5 shadow-[0_8px_30px_rgba(74,44,29,0.08)] backdrop-blur-xl min-[820px]:w-[min(520px,40vw)] min-[820px]:p-8">
        <p className="text-[11px] uppercase tracking-[0.24em] text-coffee-crema min-[820px]:text-xs">
          {head.eyebrow}
        </p>
        <Title
          title={head.title}
          accent={head.accent}
          className="mt-3 mb-5 text-[28px] min-[820px]:mt-4 min-[820px]:text-[clamp(28px,2.6vw,40px)]"
        />
        {children}
      </div>
    </section>
  );
}