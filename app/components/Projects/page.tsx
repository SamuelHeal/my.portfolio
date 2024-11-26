import React, { useEffect, useRef, useState } from "react";
import "./projects.css";

interface TrackElement extends HTMLDivElement {
  dataset: {
    mouseDownAt: string;
    percentage: string;
    prevPercentage: string;
  };
}

function Projects() {
  const trackRef = useRef<TrackElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    let currentPercentage = 0;
    let lastScrollTime = Date.now();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.8) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        root: null,
        threshold: [0.8, 0.9, 1.0],
        rootMargin: "-15% 0px",
      }
    );

    observer.observe(container);

    const handleWheel = (e: WheelEvent) => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);

      if (distanceFromCenter > windowHeight * 0.1) return;

      if (!isInView) return;

      const currentTime = Date.now();
      const timeDelta = currentTime - lastScrollTime;

      if (timeDelta < 16) {
        e.preventDefault();
        return;
      }

      const scrollAmount = 1.3;
      const direction = e.deltaY > 0 ? -1 : 1;
      const nextPercentageUnconstrained =
        currentPercentage + direction * scrollAmount;
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        -100
      );

      if (
        (currentPercentage === 0 && direction === 1) ||
        (currentPercentage === -100 && direction === -1)
      ) {
        return;
      }

      e.preventDefault();

      if (nextPercentage !== currentPercentage) {
        currentPercentage = nextPercentage;
        track.style.transform = `translate(${nextPercentage}%, 0)`;

        setIsAtEnd(currentPercentage === -100);

        const images = track.getElementsByClassName("image");
        for (const image of images) {
          (image as HTMLElement).style.objectPosition = `${
            100 + nextPercentage
          }% center`;
        }
      }

      lastScrollTime = currentTime;
    };

    const preventScroll = (e: WheelEvent) => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);

      if (distanceFromCenter < windowHeight * 0.1 && isInView) {
        if (
          !(currentPercentage === 0 && e.deltaY < 0) &&
          !(currentPercentage === -100 && e.deltaY > 0)
        ) {
          e.preventDefault();
        }
      }
    };

    window.addEventListener("wheel", preventScroll, {
      passive: false,
      capture: true,
    });
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventScroll, { capture: true });
      window.removeEventListener("wheel", handleWheel);
      observer.disconnect();
    };
  }, [isInView]);

  return (
    <div className="track-container" ref={containerRef}>
      <div
        ref={trackRef}
        id="image-track"
        data-mouse-down-at="0"
        data-prev-percentage="0"
        data-hoverable="true"
      >
        <img
          className="image"
          src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable={false}
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
          draggable={false}
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable={false}
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable={false}
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable={false}
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
          draggable={false}
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
          draggable={false}
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable={false}
        />
      </div>
      <div className="w-screen" data-hoverable="true">
        <h2
          className={`projects-title ${
            isAtEnd ? "slide-in" : "slide-out"
          } scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-tokyo-1`}
        >
          Projects
        </h2>
      </div>
    </div>
  );
}

export default Projects;
