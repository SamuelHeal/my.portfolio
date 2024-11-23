import React, { useEffect } from "react";
import { useCursor } from "./CursorProvider";

export default function AnimatedCursor() {
  const { position, setPosition } = useCursor();

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const isHoverable = !!(element as HTMLElement)?.closest(
        "[data-hoverable]"
      );

      setPosition((prev) => ({
        x: e.clientX,
        y: e.clientY,
        isHovering: isHoverable,
      }));
    };

    const checkHoverOnScroll = () => {
      // Use the last known mouse position to check what's under it
      const element = document.elementFromPoint(position.x, position.y);
      const isHoverable = !!(element as HTMLElement)?.closest(
        "[data-hoverable]"
      );

      setPosition((prev) => ({
        ...prev,
        isHovering: isHoverable,
      }));
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("scroll", checkHoverOnScroll, true);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("scroll", checkHoverOnScroll, true);
    };
  }, [setPosition, position.x, position.y]);

  return (
    <>
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="rounded-full bg-cursor-color transition-all duration-200 ease-out
          w-4 h-4"
        />
      </div>
      <div
        className="fixed pointer-events-none z-50 mix-blend-hue"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full bg-cursor-color transition-all duration-200 ease-out
          ${position.isHovering ? "w-32 h-32" : "w-4 h-4"}`}
        />
      </div>
    </>
  );
}
