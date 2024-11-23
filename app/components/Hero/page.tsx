import React, { useEffect, useRef, useState } from "react";
import "./hero.css";
import { useCursor } from "../Cursor/CursorProvider";
import AnimatedCursor from "../Cursor/AnimatedCursor";

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
      {/* <div className="absolute inset-0 bg-black" /> */}
      {/* <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: `radial-gradient(circle ${size}px at ${position.x}px ${maskY}px, white, transparent)`,
          WebkitMaskImage: `radial-gradient(circle ${size}px at ${position.x}px ${maskY}px, white, transparent)`,
        }}
      /> */}
      <div className="text-center z-10">
        <h2 className="scroll-m-20 pb-2 text-2xl tracking-tight first:mt-0">
          Software Developer
        </h2>
        {/* <h1
          className="scroll-m-20 text-7xl font-semibold text-tokyo-1 tracking-tight lg:text-9xl"
          data-hoverable="true"
        >
          Samuel Heal
        </h1> */}
        <div
          ref={textContainerRef}
          className="relative flex items-center justify-center"
          data-hoverable="true"
        >
          <h1
            className="scroll-m-20 text-7xl font-semibold text-tokyo-1 tracking-tight lg:text-9xl"
            // style={{
            //   WebkitMaskImage:
            //     "radial-gradient(circle at var(--text-x, 50%) var(--text-y, 50%), transparent 50px, black 50px)",
            //   maskImage:
            //     "radial-gradient(circle at var(--text-x, 50%) var(--text-y, 50%), transparent 50px, black 50px)",
            // }}
          >
            Samuel Heal
          </h1>
          {/* <h1
            className="scroll-m-20 text-6xl font-semibold tracking-tight lg:text-8xl absolute top-0 left-0 text-center w-full"
            style={{
              clipPath: "circle(50px at var(--text-x, 50%) var(--text-y, 50%))",
            }}
          >
            Samuel Heal
          </h1> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
