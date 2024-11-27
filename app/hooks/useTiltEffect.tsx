import { useRef, useState, useEffect } from "react";

interface TiltEffect {
  ref: React.RefObject<HTMLDivElement>;
  transform: string;
}

export function useTiltEffect(): TiltEffect {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let isFirstMove = true;
    let transitionTimeout: NodeJS.Timeout;

    const handleMouseEnter = () => {
      isFirstMove = true;
      element.style.transition = "transform 0.3s ease-out";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isFirstMove) {
        // Clear any existing timeout
        clearTimeout(transitionTimeout);
        // Wait for the transition to complete before removing it
        transitionTimeout = setTimeout(() => {
          element.style.transition = "none";
        }, 300); // Match this with your transition duration
        isFirstMove = false;
      }

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      );
    };

    const handleMouseLeave = () => {
      clearTimeout(transitionTimeout);
      element.style.transition = "transform 0.3s ease-out";
      setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(transitionTimeout);
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { ref, transform };
}
