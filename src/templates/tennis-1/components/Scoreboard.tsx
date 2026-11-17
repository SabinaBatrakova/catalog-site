import type { ScoreRow } from "../content";
import { FlipText } from "./FlipText";

type Props = {
  court: string;
  role: string;
  rows: ScoreRow[];
  cta: string;
  startDelay: number;
};

export function Scoreboard({ court, role, rows, cta, startDelay }: Props) {
  return (
    <div className="w-full max-w-[260px] rounded-xl bg-tn-green p-3.5 text-tn-cream shadow-lg">
      <div className="whitespace-nowrap flex justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b9c7bd]">
        <span>{court}</span>
        <span>{role}</span>
      </div>

      {rows.map((row, i) => (
        <div key={row.label} className="mt-2.5">
          <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#b9c7bd]">
            {row.label}
          </p>
          <FlipText text={row.value} row={i} startDelay={startDelay} highlight={row.highlight} />
        </div>
      ))}

      <div className="mt-3.5 flex items-center justify-between gap-2">
        <span className="whitespace-nowrap flex items-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b9c7bd]">
          <span className="mr-1.5 inline-block size-2 animate-tn-blink rounded-full bg-tn-lime" />
          Now booking
        </span>
        <a
          href="#book"
          className="rounded-full bg-tn-lime px-3 py-2 text-xs font-semibold text-tn-green transition hover:brightness-95"
        >
          {cta}
        </a>
      </div>
    </div>
  );
}