import React from "react";
import "./projectsection.css";
import { Button } from "@/components/ui/button";
import { useTiltEffect } from "@/app/hooks/useTiltEffect";
import { motion } from "framer-motion";

function ProjectSection({
  title,
  date,
  company,
  image,
}: {
  title: string;
  date: string;
  company: string;
  image: string;
}) {
  const { ref, transform } = useTiltEffect();
  return (
    <div className="project-section">
      <motion.div
        className="project-image-section"
        ref={ref}
        style={{ transform }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-200px" }}
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
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ margin: "-200px" }}
        transition={{
          duration: 0.7,
          delay: 0.4,
          ease: "easeOut",
        }}
      >
        <h1 className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0 text-tokyo-1">
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
        >
          Explore
        </Button>
      </motion.div>
    </div>
  );
}

export default ProjectSection;
