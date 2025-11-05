import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "./reactbits/Particles";
gsap.registerPlugin(ScrollTrigger);

const AllTextsSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // animation starts when section is 80% into viewport
          end: "top 30%",   // optional end position
          toggleActions: "play none none reverse", // play when enter, reverse when leave
        },
      }
    );
  }, []);

  const text = "Chacha Chatore";

  return (
    <div className="py-15 px-5 relative">
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={500}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
      <div className="other py-50 sm:py-50 ">
        <div className="flex items-center justify-center">
            <h2 className="text-white text-4xl sm:text-8xl font-dyna font-semibold uppercase text-center tracking-wider">
            Hey
            </h2>
            <div className="w-44 ">
                <img src="https://i.pinimg.com/originals/5d/65/e0/5d65e0d64fdee50d84e9212e4d6785fd.gif" alt="" className="w-full h-full object-cover"/>
            </div>
            
        </div>
        
        <div
          className="text-[#EE4B2B] text-4xl sm:text-8xl font-dyna font-semibold  uppercase text-center tracking-wider"
          ref={textRef}
        >
          {text.split("").map((char, index) => (
            <span key={index} className="inline-block letter">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        <h2 className="text-white text-4xl sm:text-8xl font-dyna font-semibold uppercase text-center tracking-wider mt-4">
          Here
        </h2>
      </div>
    </div>
  );
};

export default AllTextsSection;
