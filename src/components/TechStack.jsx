import React from "react";
import IconCloud from "./ui/icon-cloud";
import HyperText from "./ui/hyper-text";

const slugs = [
  "javascript",
  "react",
  "html5",
  "css3",
  "mysql",
  "vercel",
  "jira",
  "github",
  "visualstudiocode",
  "figma",
  "php",
  "laravel",
  "python",
  "jquery",
  "swift",
  "trello",
  "xcode",
  "anaconda",
  "tailwindcss",
  "bootstrap",
  "miro",
  "mongodb",
  "inertia",
  "laragon",
  "xampp",
];
function TechStack() {
  return (
    <>
      <h2 className="heading" data-aos="zoom-in" data-aos-duration="1000">
        Tech Skills
      </h2>
      <div className="relative w-5/6 items-center justify-center overflow-hidden rounded-lg bg-background my-12 " data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
        <IconCloud iconSlugs={slugs} />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <HyperText className="font-popins text-md text-white sm:text-2xl font-light mx-auto text-center my-5" text={`" There's No Place Like 127.0.0.1 "`} />
      </div>
      <div className="w-[40%] h-[1px] border border-gray-400 mx-auto mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"></div>
    </>
  );
}

export default TechStack;
