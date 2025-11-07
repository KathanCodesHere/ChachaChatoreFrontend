import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <section className="bg-[#1b1b1b] text-[#f0ecd9] py-24 px-6 md:px-16" id='contact'>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Section - Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-6xl font-dyna font-medium text-[#A020F0] mb-10">
             Want to be part of the next story?
          </h2>
          <p className="text-lg md:text-xl font-comic font-bold text-[#f0ecd9]/90 mb-12 leading-relaxed">
            Every city has its flavors. Every person has their story.<br/> Let’s share it with the world.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#A020F0] text-[#f0ecd9] font-comic  px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#7101b7] transition-all duration-300"
            >
              Watch Reels
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="border-2 font-comic border-[#A020F0] text-[#A020F0] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#A020F0] hover:text-[#f0ecd9] transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 bg-[#242424] p-8 rounded-2xl shadow-lg w-full"
        >
          <h3 className="font-dyna text-3xl md:text-4xl uppercase text-center  text-[#A020F0] mb-6">
            Get in Touch
          </h3>

          <div className="flex flex-col gap-5 font-comic">
            <div>
              <label className="block mb-2 text-[#f0ecd9]/80 font-bold text-xl">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-[#1b1b1b] border border-[#A020F0]/40 text-[#f0ecd9] focus:outline-none focus:ring-2 focus:ring-[#A020F0]"
              />
            </div>

            <div>
              <label className="block mb-2 text-xl font-bold text-[#f0ecd9]/80">Subject</label>
              <input
                type="text"
                placeholder="Enter a title"
                className="w-full px-4 py-3 rounded-md bg-[#1b1b1b] border border-[#A020F0]/40 text-[#f0ecd9] focus:outline-none focus:ring-2 focus:ring-[#A020F0]"
              />
            </div>

            <div>
              <label className="block mb-2 text-xl font-bold text-[#f0ecd9]/80">Message</label>
              <textarea
                placeholder="Write your message..."
                rows="5"
                className="w-full px-4 py-3 rounded-md bg-[#1b1b1b] border border-[#A020F0]/40 text-[#f0ecd9] focus:outline-none focus:ring-2 focus:ring-[#A020F0] resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#A020F0" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mt-4 bg-[#be63f7] text-[#f0ecd9] px-8 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-300"
              type="submit"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default CallToActionSection;
