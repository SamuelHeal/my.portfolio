import React, { useState, useEffect } from "react";
import "./projectsection.css";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function ProjectSection({
  title,
  date,
  company,
  image,
  number,
  description,
  challenges,
  descriptionImage,
  challengesImage,
}: {
  title: string;
  date: string;
  company: string;
  image: string;
  number: number;
  description: string;
  challenges: string;
  descriptionImage: string;
  challengesImage: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isExpanded]);

  return (
    <>
      <div
        className={`project-section ${
          number % 2 === 0 ? "flex-row" : "flex-row-reverse"
        } ${isExpanded ? "blur-2xl" : ""} transition-all duration-700`}
      >
        <motion.div
          className="project-image-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <img
            className="project-image"
            src={image}
            alt={title}
            data-hoverable="true"
          />
        </motion.div>
        <motion.div
          className="project-text"
          initial={{ x: number % 2 === 0 ? 100 : -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: "easeOut",
          }}
        >
          <h1
            className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0 text-tokyo-1"
            data-hoverable="true"
          >
            {title}
          </h1>
          <p className="project-description">
            {company} - {date}
          </p>
          <Button
            variant="outline"
            size="sm"
            className="text-tokyo-2 text-xl hover:bg-tokyo-2 hover:text-background"
            data-hoverable="true"
            onClick={() => setIsExpanded(true)}
          >
            Explore
          </Button>
        </motion.div>
      </div>

      {isExpanded && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-xl z-40 transition-all duration-700"
            onClick={() => setIsExpanded(false)}
          />
          <div className="fixed inset-0 z-40 overflow-y-auto mx-auto">
            {/* Close button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="fixed top-8 right-8 z-50 text-tokyo-1 text-2xl hover:text-tokyo-2 transition-colors"
            >
              ✕
            </button>

            {/* Content container modified for scrolling */}
            <div className="min-h-full w-[80vw] mx-auto flex flex-col items-center gap-12 py-32 px-32">
              <div
                className={`flex ${
                  number % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } justify-between items-center w-full my-12`}
              >
                <div className="flex flex-col gap-4 justify-center items-center">
                  <motion.div
                    className="text-4xl font-bold text-tokyo-1 text-left"
                    initial={{ x: number % 2 === 0 ? -100 : 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ margin: "-200px" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <h2>{title}</h2>
                  </motion.div>
                  <motion.div
                    className="text-xl text-tokyo-1 text-center"
                    initial={{ x: number % 2 === 0 ? -100 : 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ margin: "-200px" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <p>
                      {company} - {date}
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ margin: "-200px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                  }}
                >
                  <img
                    src={image}
                    alt={title}
                    className="relative w-[600px] h-[400px] object-cover rounded-2xl"
                  />
                </motion.div>
              </div>

              <div
                className={`flex ${
                  number % 2 === 0 ? "flex-row-reverse" : "flex-row"
                } justify-between items-center w-full my-12`}
              >
                <motion.div
                  initial={{ x: number % 2 === 0 ? 100 : -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ margin: "-200px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <p>{description}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ margin: "-200px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                  }}
                >
                  <img
                    src={descriptionImage}
                    alt={title}
                    className="relative w-[400px] h-[300px] object-cover rounded-2xl"
                  />
                </motion.div>
              </div>
              <div
                className={`flex ${
                  number % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } justify-between items-center w-full my-12`}
              >
                <motion.div
                  initial={{ x: number % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ margin: "-200px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <p>{challenges}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ margin: "-200px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                  }}
                >
                  <img
                    src={challengesImage}
                    alt={title}
                    className="relative w-[400px] h-[300px] object-cover rounded-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProjectSection;
