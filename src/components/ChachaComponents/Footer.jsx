import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className="bg-black  text-[#f0ecd9] py-12 px-6 md:px-16 border-t border-[#e86b40]/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8"
      >
        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-2xl font-bold font-comic">
          <Link
            to="herop"
            className="hover:text-[#e86b40] hover:cursor-pointer transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="stories"
            className="hover:text-[#e86b40] hover:cursor-pointer transition-colors duration-300"
          >
            Stories
          </Link>
          <Link
            to="comm"
            className="hover:text-[#e86b40] hover:cursor-pointer transition-colors duration-300"
          >
            Collaborations
          </Link>
          <Link
            to="contact"  
            className="hover:text-[#e86b40] hover:cursor-pointer transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl">
          <motion.a
            href="https://www.instagram.com/chachachatore/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="hover:text-[#e86b40] transition-colors"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@chachachatore"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="hover:text-[#e86b40] transition-colors"
          >
            <FaYoutube />
          </motion.a>
          <motion.a
            href="mailto:Vineet.projection@gmail.com"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="hover:text-[#e86b40] transition-colors"
          >
            <FaEnvelope />
          </motion.a>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[#f0ecd9]/80 text-base md:text-xl italic font-comic max-w-xl leading-relaxed"
        >
          “Not just food — <span className="text-[#e86b40]">kahaniyan</span> jo dil aur pet dono bhar dein.”
        </motion.p>

        {/* Copyright */}
        <p className="text-sm text-[#f0ecd9]/60 mt-4 font-open ">
          © {new Date().getFullYear()} Chacha Chatore. All rights reserved.
        </p>
      </motion.div>
      
    </footer>
  );
};

export default Footer;
