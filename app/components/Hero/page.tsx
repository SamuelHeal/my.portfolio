import React, { useEffect, useRef, useState } from "react";
import "./hero.css";

function Hero() {
  const rand = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const enhance = (id: string): void => {
    const element = document.getElementById(id);
    if (!element) return;

    const text = element.innerText.split("");

    element.innerText = "";

    text.forEach((value, index) => {
      if (value === " ") {
        element.appendChild(document.createTextNode(" "));
        return;
      }

      const outer = document.createElement("span");
      outer.className = "outer";

      const inner = document.createElement("span");
      inner.className = "inner";
      inner.style.animationDelay = `${rand(-5000, 0)}ms`;

      const letter = document.createElement("span");
      letter.className = "letter";
      letter.innerText = value;
      letter.style.animationDelay = `${index * 1000}ms`;

      inner.appendChild(letter);
      outer.appendChild(inner);
      element.appendChild(outer);
    });

    element.addEventListener("mouseenter", () => {
      const outers = element.querySelectorAll(".outer");
      outers.forEach((outer) => {
        const translateX = rand(-50, 50);
        const translateY = rand(-50, 50);
        const rotate = rand(-15, 15);
        (
          outer as HTMLElement
        ).style.transform = `translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
      });
    });

    element.addEventListener("mouseleave", () => {
      const outers = element.querySelectorAll(".outer");
      outers.forEach((outer) => {
        (outer as HTMLElement).style.transform = "";
      });
    });
  };

  useEffect(() => {
    enhance("fancy-text");
  }, []);

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
          <h1
            id="fancy-text"
            className="scroll-m-20 text-7xl font-semibold text-tokyo-1 tracking-tight lg:text-9xl word fancy"
          >
            Samuel Heal
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
