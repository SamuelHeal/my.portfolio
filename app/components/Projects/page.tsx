import React from "react";
import { BackgroundThree } from "../Background/page";
import "./projects.scss";

const Page = () => {
  return (
    <div className="relative w-screen projects-container">
      <BackgroundThree />
      <div>
        <div className="flex flex-col items-center justify-center">
          {/* <h1 className="text-4xl font-bold">About</h1> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
