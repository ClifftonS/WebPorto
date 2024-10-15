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
        // setShowButton(true);
        setShowLinkdock(false);
      } else {
        // setShowButton(false);
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
        <div className="container flex flex-col justify-center items-center text-center py-10 border border-red-500">
          <Main2 />
        </div>
      </Mainbg>

      <div className="bg-black w-full h-24"></div>
      <Techbg>
        <div className="container flex flex-col justify-center items-center text-center py-10 border border-blue-500">
          <TechStack />
        </div>
      </Techbg>
      <div className="bg-black w-full h-24"></div>
      <Techbg>
        <div className="container flex flex-col justify-center items-center text-center py-10 border border-purple-500">
          <Experience />
        </div>
      </Techbg>
      <div className="bg-black w-full h-24"></div>
      <Techbg>
        <div className="container flex flex-col justify-center items-center text-center py-10 border border-yellow-500">
          <Projects />
        </div>
      </Techbg>
      <div className="bg-black w-full h-24"></div>
      <BackgroundBeamsWithCollision>
        <Footer />
      </BackgroundBeamsWithCollision>
      {showLinkdock && (
        <div className="fixed right-8 bottom-5  border border-yellow-500">
          <Linkdock />
        </div>
      )}
      {/* {showButton && (
        <div className="fixed right-8 bottom-5 z-99 ">
          <button onClick={topFunction} id="myBtn" className="text-white">
            Top
          </button>
        </div>
      )} */}
    </>
  );
}

export default App;
