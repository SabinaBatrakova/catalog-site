type Props = {
  eyebrow: string;
  titleLines: string[];
  titleAccent: string;
  text: string;
};

// When the 3D court is added, change START to 1.1
const START = 0.2;
const STEP = 0.4;

export function HeroTitle({ eyebrow, titleLines, titleAccent, text }: Props) {
  const accentDelay = START + titleLines.length * STEP;

  return (
    <div className="mt-6 grid items-end gap-6 md:grid-cols-[auto_1fr]">
      <h1 className="font-shoulders text-[clamp(56px,9vw,120px)] font-black uppercase leading-[0.86]">
        <span className="block">
          {titleLines.map((word, i) => (
            <span key={word} className="inline-block overflow-hidden pr-3 align-bottom">
              <span
                className="inline-block animate-tn-up motion-reduce:animate-none"
                style={{ animationDelay: `${START + i * STEP}s` }}
              >
                {word}
              </span>
            </span>
          ))}
        </span>
        <span
          className="inline-block origin-[0_80%] animate-tn-slam text-tn-clay motion-reduce:animate-none"
          style={{ animationDelay: `${accentDelay}s` }}
        >
          {titleAccent}
        </span>
      </h1>

      <div
        className="max-w-sm animate-tn-fade motion-reduce:animate-none"
        style={{ animationDelay: `${accentDelay + 0.3}s` }}
      >
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-tn-clay">
          {eyebrow}
        </p>
        <p className="text-sm leading-relaxed text-tn-gray">{text}</p>
      </div>
    </div>
  );
}