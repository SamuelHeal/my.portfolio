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

      const startPoint = viewportHeight * 1.2;
      const endPoint = -viewportHeight * 0.5;
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

      setIsAtEnd(progress >= 0.65);
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
      description: "Description of project 1",
      tech: "Challenges faced in project 1",
      image:
        "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
      descriptionImage:
        "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
      challengesImage:
        "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
    },
    {
      title: "Project 2",
      date: "2024",
      company: "Company 2",
      description: "Description of project 2",
      tech: "Challenges faced in project 2",
      image:
        "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
      descriptionImage:
        "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
      challengesImage:
        "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
    },
    {
      title: "Centrifuge Capital",
      date: "2021",
      company: "UX Designer & Full Stack Developer",
      description:
        "In 2021 I was contracted by Centrifuge Capital to work as the Designer and Full Stack Developer for their website. Centrifuge Capital offers a number of AI-driven equity investment funds and needed a website that would be primarily used to provide access to their investor overview to potential investors. In addition to this, they wanted their performance data to be clearly displayed and the disclaimer to be displayed in a number of different places to ensure visitors did not miss it.",
      tech: "This site was built using a MERN framework and is hosted on Heroku. It has been complemented with emailjs to send contact and confirmation emails.",
      image: "/c-hero.png",
      descriptionImage: "/c-slides.png",
      challengesImage: "/c-login.png",
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
          <img className="image" src="/c-hero.png" draggable={false} />
          <img className="image" src="/c-about.png" draggable={false} />
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
      </div>
      <div className="w-full" data-hoverable="true">
        <h2
          className={`projects-title ${
            isAtEnd ? "slide-in" : "slide-out"
          } scroll-m-20 text-5xl font-semibold tracking-tight first:mt-0 text-tokyo-1 mb-20 text-center`}
        >
          Check out my work
        </h2>
        {projects.map((project, index) => (
          <ProjectSection key={index} {...project} number={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
