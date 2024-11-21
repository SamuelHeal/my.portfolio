import React from "react";
import { BackgroundTwo } from "../Background/page";
import "./skills.scss";

function Page() {
  return (
    <div className="relative w-screen skills-container">
      <BackgroundTwo />
      <div>
        <div className="flex flex-col items-center justify-center">
          {/* <h1 className="text-4xl font-bold">About</h1> */}
        </div>
      </div>
    </div>
  );
}

export default Page;
