import React, { useEffect, useRef, useState } from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] overflow-hidden">
      <div className="text-center z-10">
        <h2 className="scroll-m-20 pb-2 text-2xl tracking-tight first:mt-0">
          Software Developer
        </h2>

        <div
          className="relative flex items-center justify-center"
          data-hoverable="true"
        >
          <h1 className="scroll-m-20 text-7xl font-semibold text-tokyo-1 tracking-tight lg:text-9xl">
            Samuel Heal
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
