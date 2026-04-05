import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        // Lower threshold improves reliability on small/mobile viewports.
        threshold: 0.15,
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [ref]);

  return { ref, isIntersecting };
};
