"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Navigation from "./components/Navigation/page";
import Hero from "./components/Hero/page";
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
      {/* <BackgroundOne />
      <BackgroundTwo />
      <BackgroundThree />
      <BackgroundFour /> */}
      <Navigation theme={theme} />
      <Hero />
    </div>
  );
}
