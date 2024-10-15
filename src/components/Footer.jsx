import React from "react";
import { CoolMode } from "./ui/cool-mode";
import { social } from "../data";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="max-w-full mx-auto pt-16 pb-10 relative border border-blue-500">
      <div className=" mx-auto sm:px-10 px-5 mt-48 flex flex-col items-center">
        <h2 className="heading pb-5" data-aos="zoom-in" data-aos-duration="1000">
          Interested in My Personal Website?
        </h2>
        <p className="text-white md:mt-5 my-5 text-center max-md:mx-5  lg:max-w-[45vw]" data-aos="zoom-in" data-aos-duration="1000">
          Get in touch today, and contact me through the button below.
        </p>

        <div className=" max-sm:w-full" data-aos="fade-up" data-aos-duration="1000">
          <Contact />
        </div>
        <div className="relative justify-center mt-10" data-aos="fade-up" data-aos-duration="1000">
          <CoolMode
            options={{
              particle: "/flower.png",
            }}
          >
            <button className="text-white border border-white p-2 rounded-xl">Give 🌸</button>
          </CoolMode>
        </div>
      </div>

      <div className="flex mt-48 flex-row justify-between items-center max-w-7xl mx-auto sm:px-10 px-5 gbody " data-aos="fade-up" data-aos-duration="500" data-aos-anchor-placement="bottom-bottom">
        <p className="md:text-base text-white text-sm md:font-normal font-light">Copyright &copy; 2024 Cliff</p>

        <div className="flex items-center gap-3">
          {social.map((item) => (
            <a key={item.id} href={item.link} target="_blank" className="w-8 h-8 z-10 cursor-pointer text-white flex justify-center items-center rounded-full border">
              <item.img />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
