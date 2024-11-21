import React from "react";
import { BackgroundOne } from "../Background/page";
import "./about.scss";

function Page() {
  return (
    <div className="relative w-screen about-container">
      <BackgroundOne />
      <div>
        <div className="flex flex-col items-center justify-center">
          {/* <p>
            Hi, I am a full-stack developer who finds joy in exploring the vast
            and ever-growing world of software. I specialise in building Next.js
            applications with a variety of backend integrations; though am more
            than capable with a variety of frameworks.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Page;
