// ProductionHome.jsx
import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import NavBarP from "./NavBarP";
import ScrollImageReveal from "./Productions/ScrollImageReveal";
import HeroProductions from "./Productions/HeroProductions";
import AboutP from "./Productions/AboutP";
import Works from "./Productions/Works";
import Footer from "./ChachaComponents/Footer";
import CurvedLoop from "./reactbits/CurvedLoop";
import  WhyUs from "./Productions/WhyUs";
import CTA from "./Productions/CTA";

// 🔥 Adds a glowing cursor trail that follows the mouse
const CursorGlow = () => {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className =
      "fixed top-0 left-0 w-20 h-20 bg-[#e86b40]/20 rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out z-50";
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
  return (
    <div className="bg-[#111] mt-[0.1px] pt-3">
      <CursorGlow />
      <NavBarP />
      <HeroProductions/>
      <CurvedLoop 
  marqueeText="Chacha Chatore ✦ Productions ✦ Creative ✦ Camera ✦ Editing ✦ "
  speed={2}
  curveAmount={200}
  direction="left"
  interactive={true}
  className="custom-text-style text-[8rem] sm:text-5xl"
/>
      <AboutP/>
      <ScrollImageReveal/>
      
      {/* WORK GRID */}
      {/* <Works/> */}
      <WhyUs/>
      {/* CTA SECTION */}
      <CTA/>
      <Footer/>
    </div>
  );
};

export default ProductionHome;
