// ProductionHome.jsx
import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import NavBarP from "./NavBarP";
import ScrollImageReveal from "./ScrollImageReveal";
import HeroProductions from "./Productions/HeroProductions";
import AboutP from "./Productions/AboutP";
import Works from "./Productions/Works";
import Footer from "./ChachaComponents/Footer";
import FeaturedP from "./Productions/FeaturedP";
import CurvedLoop from "./reactbits/CurvedLoop";

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
      <AboutP/>
      <ScrollImageReveal/>
      <CurvedLoop 
  marqueeText="Chacha Chatore ✦ Productions ✦ Creative ✦ Camera ✦ Editing ✦ "
  speed={2}
  curveAmount={0}
  direction="left"
  interactive={true}
  className="custom-text-style text-5xl"
/>
      {/* WORK GRID */}
      {/* <Works/> */}
      {/* <FeaturedP/> */}
      {/* CTA SECTION */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-linear-to-r from-[#e86b40] to-[#ff9966] text-[#111] py-10 text-center"
      >
        <h2 className="text-4xl font-bold uppercase">Let’s Cook Stories Together</h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#111]/80">
          Whether you’re a brand, creator, or storyteller — we’ll bring your
          vision to life with a cinematic twist.
        </p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.1 }}
          className="mt-8 inline-block bg-[#111] text-[#f0ecd9] px-8 py-3 rounded-md font-semibold uppercase shadow-lg hover:shadow-black/50 transition-all"
        >
          Get In Touch
        </motion.a>
      </motion.section>

      <Footer/>
    </div>
  );
};

export default ProductionHome;
