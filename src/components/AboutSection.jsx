import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaPizzaSlice,
  FaHamburger,
  FaCameraRetro,
  FaVideo,
  FaAppleAlt,
  FaIceCream,
  FaFilm,
  FaMicrophone,
} from "react-icons/fa";

const floatingIcons = [
  { id: 1, icon: <FaPizzaSlice />, top: "10%", left: "15%", delay: 0 },
  { id: 2, icon: <FaHamburger />, top: "20%", right: "10%", delay: 1 },
  { id: 3, icon: <FaCameraRetro />, top: "70%", left: "8%", delay: 0.5 },
  { id: 4, icon: <FaVideo />, bottom: "15%", right: "18%", delay: 0.8 },
  { id: 5, icon: <FaAppleAlt />, top: "50%", left: "45%", delay: 0.3 },
  { id: 6, icon: <FaIceCream />, bottom: "20%", left: "10%", delay: 1.2 },
  { id: 7, icon: <FaFilm />, top: "35%", right: "25%", delay: 1 },
  { id: 8, icon: <FaMicrophone />, bottom: "5%", right: "40%", delay: 0.6 },
];

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative bg-[#1b1b1b] text-[#7DF9FF] py-28 px-6 md:px-16 overflow-hidden"
    >
      {/* Floating Animated Icons */}
      {floatingIcons.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-[#40cfe8] text-3xl sm:text-4xl opacity-30"
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left: Image with parallax */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687"
              alt="Chacha Chatore"
              className="rounded-2xl shadow-[0_0_25px_#7DF9FF] w-full max-w-sm md:max-w-md object-cover"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#e86b40]/10 rounded-2xl blur-xl group-hover:bg-[#7DF9FF]/20 transition-all duration-500"></div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden md:block w-[2px] bg-[#7DF9FF] h-96 rounded-full mx-auto origin-top shadow-[0_0_15px_#e86b40]"
        />

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left font-open"
        >
          <h2 className="text-6xl font-modak text-[#FFFF00]  mb-6 uppercase tracking-wide">
            Who is CHACHA CHATORE?
          </h2>
          <h2 className="text-6xl font-modak text-[#FFFF00]  mb-6 uppercase tracking-wide">
           चाचा चटोरे
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#f0ecd9]/90">
            I’m not just a <span className="text-[#7DF9FF] font-semibold">food blogger</span>.
            I’m a storyteller — from <span className="text-[#7DF9FF] font-semibold">gali ke thelas</span>{" "}
            to five-star platters, I capture the soul of flavor.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-[#f0ecd9]/80">
            Every plate carries a memory — laughter, rain, chai pe charcha, and
            that perfect jalebi crunch that takes you home.
          </p>
          <p className="text-lg leading-relaxed text-[#f0ecd9]/75">
            Through every reel, bite, and story — my goal is simple:
            <span className="text-[#7DF9FF] font-semibold"> connect people, places, and plates.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
