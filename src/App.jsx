import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import { Mainbg } from "./components/Mainbg";
import Main2 from "./components/Main2";
import TechStack from "./components/TechStack";
import Techbg from "./components/Techbg";
import Experience from "./components/Experience";
import Linkdock from "./components/Linkdock";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Projects";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [showLinkdock, setShowLinkdock] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 20) {
        setShowLinkdock(false);
      } else {
        setShowLinkdock(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Mainbg>
        <div className="container flex flex-col justify-center items-center text-center py-10 ">
          <Main2 />
        </div>
      </Mainbg>

      <div className="bg-black w-full h-24"></div>
      <Techbg>
        <div className="container flex flex-col justify-center items-center text-center py-10">
          <TechStack />
        </div>
      </Techbg>
      <div className="bg-black w-full h-24"></div>
      <Techbg>
        <div className="container flex flex-col justify-center items-center text-center py-10">
          <Experience />
        </div>
      </Techbg>
      <div className="bg-black w-full h-24"></div>
      <div className="bg-black ">
        <div className="container flex flex-col justify-center items-center text-center py-10">
          <Projects />
        </div>
      </div>
      <BackgroundBeamsWithCollision>
        <Footer />
      </BackgroundBeamsWithCollision>
      {showLinkdock && (
        <div className="fixed right-8 bottom-5">
          <Linkdock />
        </div>
      )}
    </>
  );
}

export default App;
