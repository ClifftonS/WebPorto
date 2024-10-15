import React from "react";
import { projects } from "../data";
import { FaLocationArrow } from "react-icons/fa";
function Projects() {
  return (
    <>
      <h2 className="heading mb-24" data-aos="zoom-in" data-aos-duration="1000">
        Recent Projects
      </h2>
      <div className="flex flex-wrap justify-center gbody">
        {projects
          .sort((a, b) => b.id - a.id)
          .map((project) => (
            <div key={project.id} data-aos="fade-up" data-aos-anchor-placement="top-bottom" className={` items-center flex  justify-center w-full mb-40`}>
              <div className="xl:w-1/2 max-xl:w-[70%] items-start ">
                <div className="mb-5 flex justify-center">
                  <img src={project.img} alt="Project1" height={700} width={700} className={`rounded-lg shadow-2xl shadow-slate-800 transition ease-in-out`} />
                </div>

                <h3 className="secondaryHeading pb-4">{project.title}</h3>
                <p className="text-justify text-white pb-8 font-light text-lg">{project.des}</p>

                <div className="flex flex-row w-full items-center justify-between max-xl:mb-3">
                  <div className="flex items-center">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-gradient-to-r from-slate-900 to-slate-800 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-indigo-500">Live project</p>
                    <FaLocationArrow className="ms-3 animate-pulse" color="#CBACF9" />
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Projects;
