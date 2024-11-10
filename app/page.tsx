"use client";

import Navigation from "./components/Navigation/page";
import Hero from "./components/Hero/page";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Skills from "./components/Skills/page";
import Projects from "./components/Projects/page";
import Contact from "./components/Contact/page";
import { BackgroundOne, BackgroundTwo, BackgroundThree, BackgroundFour } from "./components/Background/page";

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
    <div>
      <BackgroundOne />
      <BackgroundTwo />
      <BackgroundThree />
      <BackgroundFour />
      <Navigation theme={theme} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
