import React from 'react'

import { motion, AnimatePresence } from "framer-motion";
const Works = () => {
  return (
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
  )
}

export default Works