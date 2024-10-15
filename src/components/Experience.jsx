import React from "react";
import { Timeline } from "./ui/timeline";
import { dataexp } from "../data/index";

function Experience() {
  return (
    <>
      <h2 className="heading" data-aos="zoom-in" data-aos-duration="1000">
        Experience
      </h2>
      <div className="w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <Timeline data={dataexp} />
      </div>
    </>
  );
}

export default Experience;
