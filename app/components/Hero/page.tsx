import React, { useEffect, useState } from "react";
import "./hero.css";
import { useCursor } from "../Cursor/CursorProvider";

function Hero() {
  const { position } = useCursor();
  const size = position.isHovering ? 64 : 32; // 24rem or 8rem in pixels
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adjust the mask position by adding the scroll offset
  const maskY = position.y + scrollY;
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] overflow-hidden">
      {/* <div className="absolute inset-0 bg-black" /> */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: `radial-gradient(circle ${size}px at ${position.x}px ${maskY}px, white, transparent)`,
          WebkitMaskImage: `radial-gradient(circle ${size}px at ${position.x}px ${maskY}px, white, transparent)`,
        }}
      />
      <div className="text-center z-10">
        <h2
          className="scroll-m-20 pb-2 text-2xl tracking-tight first:mt-0"
          data-hoverable="true"
        >
          Software Developer
        </h2>
        <h1
          className="scroll-m-20 text-7xl font-semibold text-tokyo-1 tracking-tight lg:text-9xl"
          data-hoverable="true"
        >
          Samuel Heal
        </h1>
      </div>
    </div>
  );
}

export default Hero;
