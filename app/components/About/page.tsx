import React from "react";
import { BackgroundOne } from "../Background/page";
import "./about.scss";

function Page() {
  return (
    <div className="relative w-screen about-container">
      <BackgroundOne />
      <div>
        <div className="flex flex-col items-center justify-center">
          {/* <h1 className="text-4xl font-bold">About</h1> */}
        </div>
      </div>
    </div>
  );
}

export default Page;
