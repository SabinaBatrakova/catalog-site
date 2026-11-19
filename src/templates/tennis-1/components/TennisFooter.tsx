import type { TennisContent } from "../content";

type Props = {
  data: TennisContent["footer"];
  titleLines: string[];
  titleAccent: string;
};

export function TennisFooter({ data, titleLines, titleAccent }: Props) {
  const columns = [
    { title: "Contact", lines: data.contact },
    { title: "Courts", lines: data.courts },
    { title: "Follow", lines: data.follow },
  ];

  return (
    <footer className="bg-tn-green text-tn-cream">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="font-shoulders text-6xl font-black uppercase leading-[0.9] md:text-8xl">
          {titleLines.join(" ")}
          <br />
          <span className="text-tn-clay">{titleAccent}</span>
        </p>

        <div className="mt-8 grid gap-6 text-sm leading-relaxed text-[#b9c7bd] sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-tn-cream">
                {col.title}
              </p>
              {col.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}