import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FadeText } from "@/components/ui/fade-text";
import { AnimatePresence, useInView } from "framer-motion";

function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}
function About() {
  const text = (
    <div className="scroll-m-20 text-2xl font-normal tracking-tight">
      Hi, I love building applications from{" "}
      <span className="text-tokyo-3">ideation</span> through to{" "}
      <span className="text-tokyo-2">completion</span>.
    </div>
  );

  const text2 = (
    <div className="scroll-m-20 text-2xl font-normal tracking-tight">
      Whether you want to hire me or just want to chat about an idea, please{" "}
      <Button
        variant="outline"
        size="sm"
        className="text-tokyo-1 text-2xl hover:bg-tokyo-1 hover:text-background"
        data-hoverable="true"
      >
        get in touch
      </Button>
    </div>
  );
  return (
    <div className="flex flex-col items-center h-[50vh] w-[60vw] mx-auto text-center">
      <Section>{text}</Section>
      <Section>{text2}</Section>
    </div>
  );
}

export default About;
