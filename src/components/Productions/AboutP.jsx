import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
const AboutP = () => {
  return (
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
  )
}

export default AboutP