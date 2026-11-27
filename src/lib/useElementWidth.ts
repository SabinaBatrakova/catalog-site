import { useEffect, useRef, useState } from "react";

// Возвращает ref для элемента и его текущую ширину в px.
// Ширина обновляется сама, когда меняется размер окна.
export function useElementWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setWidth(entry.contentRect.width);
    });

    observer.observe(element);
    return () => observer.disconnect(); // убираем наблюдателя, когда компонент исчезает
  }, []);

  return { ref, width };
}