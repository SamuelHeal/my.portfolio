import React, { useEffect, useRef, useState } from "react";
import "./projects.css";
import { BackgroundTwo } from "../Background/page";
import ProjectSection from "./components/ProjectSection";

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
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startPoint = viewportHeight * 0.8;
      const endPoint = viewportHeight * 0.08;
      const totalDistance = startPoint - endPoint;

      let progress = (startPoint - rect.top) / totalDistance;
      progress = Math.max(0, Math.min(1, progress));

      const percentage = 85 - progress * 225;

      track.style.transform = `translate(${percentage}%, 0)`;

      const images = track.getElementsByClassName("image");
      for (const image of images) {
        (image as HTMLElement).style.objectPosition = `${
          100 + percentage
        }% center`;
      }

      setIsAtEnd(progress >= 0.95);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "Project 1",
      date: "2024",
      company: "Company 1",
      image:
        "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
    },
    {
      title: "Project 2",
      date: "2024",
      company: "Company 2",
      image:
        "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
    },
    {
      title: "Project 3",
      date: "2024",
      company: "Company 3",
      image:
        "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
    },
  ];

  return (
    <div className="projects-container relative">
      <BackgroundTwo />
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
        </div>
        <div className="w-screen" data-hoverable="true">
          <h2
            className={`projects-title ${
              isAtEnd ? "slide-in" : "slide-out"
            } scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0 text-tokyo-1`}
          >
            Projects
          </h2>
        </div>
      </div>
      {projects.map((project, index) => (
        <ProjectSection key={index} {...project} number={index} />
      ))}
    </div>
  );
}

export default Projects;
