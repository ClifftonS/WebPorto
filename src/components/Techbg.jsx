import React from "react";
import Particles from "./ui/Particles";

function Techbg({ children }) {
  return (
    <div className="relative bg-black flex w-full items-center justify-center border border-red-500">
      <Particles className="absolute inset-0 z-0" quantity={180} ease={80} color="#ffe033" refresh />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Techbg;
