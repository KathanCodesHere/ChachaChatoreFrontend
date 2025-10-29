// ProductionHome.jsx
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCameraRetro, FaHamburger, FaLaugh, FaPlay } from "react-icons/fa";
import NavBarP from "./NavBarP";
import ScrollImageReveal from "./ScrollImageReveal";

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
      {/* HERO SECTION */}
      <header className="relative min-h-[90vh] bg-[#111] flex flex-col justify-center items-center overflow-hidden text-[#f0ecd9]">
        {/* Floating icons for fun */}
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-24 left-10 text-[#e86b40] text-4xl opacity-60"
        >
          <FaCameraRetro />
        </motion.div>

        <motion.div
          initial={{ y: 10 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute top-1/2 right-16 text-[#ff9966] text-5xl opacity-60"
        >
          <FaHamburger />
        </motion.div>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute bottom-16 left-1/4 text-[#e86b40] text-4xl opacity-60"
        >
          <FaLaugh />
        </motion.div>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="z-10 text-center px-6"
          >
            <h1 className="font-bold text-[4rem] md:text-[6rem] uppercase leading-none font-anton">
              <motion.span
                whileHover={{ color: "#e86b40", scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Chacha
              </motion.span>{" "}
              <motion.span
                whileHover={{ color: "#ff9966", scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Chatore
              </motion.span>{" "}
              <motion.span
                whileHover={{ color: "#e86b40", scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Productions
              </motion.span>
            </h1>

            <p className="mt-6 text-lg max-w-2xl mx-auto text-[#f0ecd9]/80 leading-relaxed">
              A blend of cinematic storytelling, food culture, and humor —
              bringing Desi flavors to the digital world.
            </p>

            <motion.a
              href="#work"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 inline-flex items-center gap-3 bg-[#e86b40] text-[#111] px-6 py-3 rounded-md font-semibold uppercase shadow-md hover:shadow-[#e86b40]/60 transition-all"
            >
              <FaPlay /> Explore Our Work
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </header>

      {/* ABOUT SECTION */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#1b1b1b] text-[#f0ecd9] py-20 px-6 md:px-16"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="/assets/about-photo.jpg"
            alt="Studio behind the scenes"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl shadow-2xl border border-[#e86b40]/20 object-cover h-[400px] w-full"
          />
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-wider text-[#e86b40]">
              Who We Are
            </h2>
            <p className="mt-4 leading-relaxed text-[#f0ecd9]/80">
              We are a team of storytellers, creators, and desi dreamers. Our
              goal is to make brands look *real* and *relatable*. Whether it’s
              cinematic reels, brand films, or event highlights — we serve every
              frame with emotion and spice.
            </p>
            <div className="mt-6 flex gap-3">
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-[#e86b40] text-[#111] font-semibold rounded-md shadow hover:shadow-[#e86b40]/60"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 border border-[#f0ecd9]/40 rounded-md"
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      <ScrollImageReveal/>
      {/* WORK GRID */}
      <motion.section
        id="work"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#111] py-20 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold uppercase tracking-wider text-[#e86b40]">
            Featured Work
          </h3>
          <p className="mt-2 text-[#f0ecd9]/70">
            A glimpse into our creative world — where food meets film.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="relative rounded-xl overflow-hidden group shadow-lg"
              >
                <img
                  src={`/assets/work${i}.jpg`}
                  alt={`Work ${i}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <span className="text-white font-semibold text-lg tracking-wide">
                    View Project
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-[#e86b40] to-[#ff9966] text-[#111] py-20 text-center"
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
    </div>
  );
};

export default ProductionHome;
