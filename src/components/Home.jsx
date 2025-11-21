import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Orb from "./reactbits/Orb";

const Home = () => {
  const leftLidRef = useRef(null);
  const rightLidRef = useRef(null);

  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  // INFINITE FLOATING MOTION ON LOAD
  useEffect(() => {
    gsap.to(leftLidRef.current, {
      y: "-=10",
      x: "-=5",
      rotate: "-=2",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(rightLidRef.current, {
      y: "-=10",
      x: "+=5",
      rotate: "+=2",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  // LEFT LID CLICK
  const moveLeftLid = () => {
    gsap.killTweensOf(leftLidRef.current); // stop infinite motion
    if (!isLeftOpen) {
      gsap.to(leftLidRef.current, {
        x: -150,
        y: -80,
        rotate: -45,
        duration: 0.7,
        ease: "power3.out",
      });
      setIsLeftOpen(true);
    } else {
      gsap.to(leftLidRef.current, {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 0.7,
        ease: "power3.out",
      });
      setIsLeftOpen(false);
    }
  };

  // RIGHT LID CLICK
  const moveRightLid = () => {
    gsap.killTweensOf(rightLidRef.current); // stop infinite motion
    if (!isRightOpen) {
      gsap.to(rightLidRef.current, {
        x: 150,
        y: -80,
        rotate: 45,
        duration: 0.7,
        ease: "power3.out",
      });
      setIsRightOpen(true);
    } else {
      gsap.to(rightLidRef.current, {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 0.7,
        ease: "power3.out",
      });
      setIsRightOpen(false);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between relative">
      {/* Background ORB */}
      <div className="w-[98%] h-full absolute">
        <Orb hoverIntensity={0.25} rotateOnHover={true} hue={0} />
      </div>

      {/* Heading */}
      <section className="py-10">
        <h1 className="text-4xl text-center sm:text-5xl tracking-wide font-bold text-[#e86b40] uppercase font-anton">
          Chacha's World
        </h1>
      </section>

      {/* Main Content */}
      <div className="flex justify-center gap-1 mt-10">
        <div className="md:w-1/3 relative">

          {/* LEFT LINK */}
          {isLeftOpen && (
            <Link
              to="/chacha"
              className="absolute -left-38 -rotate-90 -top-15 md:-rotate-17 md:-top-15 md:-left-25"
            >
              <h2 className="font-anton font-bold text-white uppercase text-2xl md:text-4xl mt-50">
                Chacha Chatore
              </h2>
            </Link>
          )}

          {/* RIGHT LINK */}
          {isRightOpen && (
            <Link
              to="/production"
              className="absolute -right-38 rotate-90 -top-15 md:rotate-17 md:-top-1 md:-right-30"
            >
              <h2 className="font-anton font-bold text-white uppercase text-2xl md:text-4xl text-right mt-50">
                Chacha Production
              </h2>
            </Link>
          )}

          {/* LEFT LID */}
          <div
            className="absolute w-35 h-30 left-[-25px] bottom-50 md:w-36 md:h-36 md:-left-28 md:top-10 lg:w-50 lg:h-50 lg:-left-20 lg:top-24 cursor-pointer"
            ref={leftLidRef}
            onClick={moveLeftLid}
          >
            <img
              src="/images/lid.png"
              alt="left lid"
              className="w-full h-full object-contain"
            />
          </div>

          {/* RIGHT LID */}
          <div
            className="absolute w-35 h-30 right-[-20px] bottom-45 
            md:w-36 md:h-36 md:-right-28 md:top-10 
            lg:w-50 lg:h-50 lg:-right-20 lg:top-30 cursor-pointer"
            ref={rightLidRef}
            onClick={moveRightLid}
          >
            <img
              src="/images/lid.png"
              alt="right lid"
              className="w-full h-full object-contain"
            />
          </div>

          {/* CENTER IMAGE */}
          <img src="/images/Srk.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
