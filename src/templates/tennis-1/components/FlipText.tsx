import { FlipTile } from "./FlipTile";

type Props = {
  text: string;
  row: number;
  startDelay: number;
  highlight?: boolean;
};

export function FlipText({ text, row, startDelay, highlight = false }: Props) {
  const words = text.split(" ").map((word, w, all) => ({
    word,
    start: all.slice(0, w).join("").length,
  }));

  return (
    <span className="flex flex-wrap gap-x-2 gap-y-1">
      <span className="sr-only">{text}</span>
      {words.map(({ word, start }, w) => (
        <span key={`${word}-${w}`} aria-hidden="true" className="flex gap-0.5">
          {word.split("").map((char, i) => (
            <FlipTile
              key={`${char}-${i}`}
              char={char}
              delay={startDelay}
              flips={10 + (start + i) * 2 + row * 4}
              highlight={highlight}
            />
          ))}
        </span>
      ))}
    </span>
  );
}