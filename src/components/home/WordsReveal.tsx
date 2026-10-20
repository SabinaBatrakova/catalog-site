import { useEffect, useRef, useState } from "react";

type WordsRevealProps = {
  text: string;
  className?: string;
  step?: number;
};

export function WordsReveal({
  text,
  className = "",
  step = 110,
}: WordsRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const element = ref.current;
    if (!element || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{ transitionDelay: `${i * step}ms` }}
          className={`inline-block transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
}