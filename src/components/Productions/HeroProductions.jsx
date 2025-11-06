import React from 'react'

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

import { FaCameraRetro, FaHamburger, FaLaugh, FaPlay } from "react-icons/fa";
const HeroProductions = () => {
  return (
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
  )
}

export default HeroProductions