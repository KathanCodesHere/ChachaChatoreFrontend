// ProductionHome.jsx
import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import NavBarP from "./NavBarP";
import ScrollImageReveal from "./Productions/ScrollImageReveal";
import HeroProductions from "./Productions/HeroProductions";
import AboutP from "./Productions/AboutP";
// import Works from "./Productions/Works";
import Footer from "./ChachaComponents/Footer";
import CurvedLoop from "./reactbits/CurvedLoop";
import  WhyUs from "./Productions/WhyUs";
import CTA from "./Productions/CTA";
import HeroP from "./Productions/HeroP";
//import Testimonials from "./Productions/Testimonials";
import FeaturedWorkP from "./Productions/FeaturedWorkP";
import NewTestimonial from "./Productions/NewTestimonial";
import ExploreProductionHouse from "./ExploreProductionHouse";
import LatestArticles from "./Productions/LatestArticles";
import Brands from "./Productions/brands";

// 🔥 Adds a glowing cursor trail that follows the mouse
const CursorGlow = () => {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className =
      "fixed top-0 left-0 w-20 h-20 bg-[#e86b40] rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out z-50";
    document.body.appendChild(glow);

    const handleMove = (e) => {
      glow.style.transform = `translate(${e.clientX - 40}px, ${
        e.clientY - 40
      }px)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  return null;
};

const ProductionHome = () => {
   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", 
    });
  }, []);

  return (
    <div className="bg-black py-1">
      {/* for glowing cursor */}
      <CursorGlow />

      {/* this is the navbar */}
      <NavBarP />

      {/* hero with heading productions */}
      <HeroProductions/>

      {/* this is infinite text */}
      <CurvedLoop 
  marqueeText="✦lights ✦ camera ✦ action ✦ digital growth ✦ chacha chatore productions✦ storytelling ✦ creative agency "
  speed={2}
  curveAmount={200}
  direction="left"
  interactive={true}
  className=" text-[8rem] sm:text-5xl bg-black"
/>

    {/* this is another hero */}
      <HeroP/>

      {/* About section */}
      <AboutP/>

      {/* Services section */}
      <ScrollImageReveal/>

      
      {/* WORK GRID */}
      {/* <Works/> */}

      <WhyUs/>

      <FeaturedWorkP/> 
      <ExploreProductionHouse/>
      {/* Testimonials here */}
      {/*<Testimonials/> */}
      {/* NewTestimonials here */}
      <NewTestimonial/>
      <Brands/>
      <LatestArticles/>
      {/* CTA SECTION */}
      <CTA/>
      <Footer/>
    </div>
  );
};

export default ProductionHome;
