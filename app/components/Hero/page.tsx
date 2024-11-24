import React, { useEffect, useRef, useState } from "react";
import "./hero.css";
import { useCursor } from "../Cursor/CursorProvider";
import AnimatedCursor from "../Cursor/AnimatedCursor";
import { BackgroundOne } from "../Background/page";

function Hero() {
  const { position } = useCursor();
  const [scrollY, setScrollY] = useState(0);

  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTextMask = (e: MouseEvent) => {
      if (!textContainerRef.current) return;
      const rect = textContainerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      textContainerRef.current.style.setProperty("--text-x", `${x}px`);
      textContainerRef.current.style.setProperty("--text-y", `${y}px`);
    };

    window.addEventListener("mousemove", updateTextMask);
    return () => window.removeEventListener("mousemove", updateTextMask);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] overflow-hidden">
      <AnimatedCursor />

      <div className="text-center z-10">
        <h2 className="scroll-m-20 pb-2 text-2xl tracking-tight first:mt-0">
          Software Developer
        </h2>

        <div
          ref={textContainerRef}
          className="relative flex items-center justify-center"
          data-hoverable="true"
        >
          <h1 className="scroll-m-20 text-7xl font-semibold text-tokyo-1 tracking-tight lg:text-9xl">
            Samuel Heal
          </h1>
        </div>
      </div>
      {/* <BackgroundOne /> */}
    </div>
  );
}

export default Hero;
