import { FlipTile } from "./FlipTile";

type Props = {
  text: string;
  row: number; // row number, so lower rows finish later
  startDelay: number;
  highlight?: boolean;
};

export function FlipText({ text, row, startDelay, highlight = false }: Props) {
  return (
    <span className="flex flex-wrap gap-0.5">
      <span className="sr-only">{text}</span>
      {text.split("").map((char, i) => (
        <span key={`${char}-${i}`} aria-hidden="true">
          <FlipTile
            char={char}
            delay={startDelay}
            flips={10 + i * 2 + row * 4}
            highlight={highlight}
          />
        </span>
      ))}
    </span>
  );
}