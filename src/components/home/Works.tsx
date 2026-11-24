import { works } from "@/lib/works";
import { WorkCard } from "./WorkCard";

export function Works() {
  return (
    <section id="works" className="scroll-mt-16 px-7 pb-24">
      <div className="mb-6 flex items-baseline justify-between">
        <span className="font-display text-xs font-medium uppercase tracking-[0.08em]">
          Работы и шаблоны
        </span>
        <span className="font-display text-xs font-medium uppercase tracking-[0.08em]">
          {String(works.length).padStart(2, "0")}
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {works.map((work, i) => (
          <WorkCard key={work.id} work={work} index={i} />
        ))}
      </div>
    </section>
  );
}
