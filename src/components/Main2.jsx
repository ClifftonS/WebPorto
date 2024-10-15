import React from "react";
import profileimg from "../assets/profileimg.png";
import { Typewriter } from "react-simple-typewriter";
import { TextRevealCard } from "./ui/text-reveal-card";
import { Highlight } from "./ui/hero-highlight";
import { IoPaperPlane } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function Main2() {
  useGSAP(() => {
    gsap.to(".profil", {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  });
  return (
    <>
      <h1 className="font-semibold text-white text-xl md:text-2xl lg:text-4xl w-5/12 text-left ms-4 ">
        <Typewriter words={["Hello World"]} loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
      </h1>
      <div className="relative mt-8 lg:right-0 ">
        <img src={profileimg} alt="image" className="relative z-10 mx-auto w-full max-w-xs lg:max-w-sm" />
        <span className="profil absolute -bottom-28 left-1/2 -translate-x-1/2 lg:-bottom-20 scale-[0.6] lg:scale-75">
          <svg width={600} height={600} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#F5F5DC"
              d="M24.2,-25.1C36.1,-12.2,53.8,-6.1,62.1,8.3C70.3,22.6,69.1,45.3,57.2,51C45.3,56.7,22.6,45.4,4.8,40.5C-13,35.7,-26,37.3,-37.8,31.6C-49.6,26,-60.3,13,-61.7,-1.3C-63,-15.6,-55,-31.3,-43.1,-44.1C-31.3,-57,-15.6,-67.1,-4.8,-62.4C6.1,-57.6,12.2,-38,24.2,-25.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </span>
      </div>
      <h2 className="mt-7 text-2xl relative z-20 md:text-3xl lg:text-4xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        I&apos;m <Highlight>Cliffton Soenarto</Highlight>
      </h2>
      <h2 className="mt-2 text-2xl relative z-20 md:text-3xl lg:text-4xl font-bold text-center text-black dark:text-white font-sans tracking-tight">Welcome to My Personal Website</h2>

      <TextRevealCard className="bg-transparent mb-4" text="Enthusiast of being a" revealText="Developer"></TextRevealCard>

      <a href="/Cliff Resume.pdf" className="max-sm:w-full max-xs:px-5" target="_blank">
        <button className="relative inline-flex lg:w-60 md:h-12 md:w-48 w-32 h-8 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <span className="me-2 text-lg">Resume</span>
            <IoPaperPlane size={16} />
          </span>
        </button>
      </a>
    </>
  );
}

export default Main2;
