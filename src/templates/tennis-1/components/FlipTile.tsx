import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPRSTUVZ0123456789";
const SPEED = 50; // ms between flips

type Props = {
  char: string;
  delay: number; // ms before flipping starts
  flips: number; // how many random chars before the real one
  highlight?: boolean;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function FlipTile({ char, delay, flips, highlight = false }: Props) {
  const [shown, setShown] = useState(() =>
    prefersReducedMotion() ? char : "",
  );

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let count = 0;
    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        count += 1;
        if (count >= flips) {
          setShown(char);
          window.clearInterval(intervalId);
          return;
        }
        setShown(CHARS[Math.floor(Math.random() * CHARS.length)]);
      }, SPEED);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [char, delay, flips]);

  if (char === " ") {
    return <span className="block w-2" />;
  }

  const colors = highlight
    ? "bg-tn-clay text-white"
    : "bg-tn-cream text-tn-green";

  return (
    <span
      className={`relative flex h-7 w-5 items-center justify-center rounded-[3px] font-shoulders text-lg font-extrabold ${colors} after:absolute after:inset-x-0 after:top-1/2 after:h-px after:bg-current after:opacity-20 after:content-['']`}
    >
      {shown}
    </span>
  );
}
