"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Navigation from "./components/Navigation/page";
import Hero from "./components/Hero/page";
import About from "./components/About/page";
import AnimatedCursor from "./components/Cursor/AnimatedCursor";
import CursorContext from "./components/Cursor/CursorProvider";
import Projects from "./components/Projects/page";
export default function Home() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [theme]);

  if (isLoading || theme == null) {
    return <>Loading...</>;
  }

  return (
    <CursorContext>
      <div>
        <AnimatedCursor />
        <main>
          <Navigation theme={theme} />
          <Hero />
          <About />
          <Projects />
        </main>
      </div>
    </CursorContext>
  );
}
