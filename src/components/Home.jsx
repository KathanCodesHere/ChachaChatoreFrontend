import React, { useRef,useState } from "react";
import { Link } from "react-router-dom";
import HomeCards from "../components/HomeCards";
import { gsap } from "gsap";
import Orb from "./reactbits/Orb";
const Home = () => {
  const lidRef = useRef(null);
  const [isLidOpen,setisLidOpen]=useState(false);
  const moveLid = () => {
    if(!isLidOpen){
      gsap.to(lidRef.current, {
        x: -150,       // Move 200px to the right
        y: -80,
        rotate:-45,
        duration: 0.7,
        ease: "power3.out",
      });
      setisLidOpen(true);
    }
      else{
        gsap.to(lidRef.current, {
        x: 0,       // Move 200px to the right
        y: 0,
        rotate:0,
        duration: 0.7,
        ease: "power3.out",
      });
        setisLidOpen(false);
      }
    
    
  };  

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between relative">
      {/* Heading Section */}
       <div  className="w-[98%] h-full absolute">
  <Orb
    hoverIntensity={0.25}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
</div>
      <section className="py-10">
        <h1 className="text-4xl text-center sm:text-5xl tracking-wide font-bold text-[#e86b40] uppercase font-anton">
          Chacha's World
        </h1>
      </section>

      {/* Fullscreen Cards Section */}
      {/* <HomeCards /> */}
      <div className="flex justify-center gap-1 mt-10">
        <div className="md:w-1/3 relative ">
          {isLidOpen && <Link to='/chacha' className="absolute -left-38 -rotate-90 -top-15 md:-rotate-17 md:-top-15 md:-left-25">
            <h2 className="font-anton font-bold text-white uppercase text-2xl md:text-4xl mt-50">Chacha Chatore</h2>
          </Link>}
          

        <div className="absolute h-38 -left-38 -top-15 md:rotate-0 md:top-28 md:-left-25" ref={lidRef} onClick={moveLid}>
          <img src="/images/lid.png" alt="" className="w-full h-full"/>
        </div>
          <img src="/images/Srk.png" alt="" />
        </div>
        
      </div>
      
    </div>
  );
};

export default Home;
