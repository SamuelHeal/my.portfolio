import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="scroll-m-20 pb-2 text-2xl text-tokyo-2 tracking-tight first:mt-0">
          Software Developer
        </h2>
        <h1 className="scroll-m-20 text-7xl font-semibold text-tokyo-1 tracking-tight lg:text-9xl">
          Samuel Heal
        </h1>
      </div>
    </div>
  );
}

export default Hero;
