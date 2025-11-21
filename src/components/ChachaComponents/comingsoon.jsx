import React from "react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen w-full bg-[#1b1b1b] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src="https://static.vecteezy.com/system/resources/previews/023/809/530/large_2x/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      {/* Content */}
      <div className="relative text-center px-4">
        <h3 className="text-[#f0ecd9] font-dyna font-semibold tracking-[0.3em] mb-3 text-lg md:text-5xl">
          FOODCAST INDIA
        </h3>
        <h1 className="text-[#e86b40] font-comic font-bold tracking-[0.4em] mb-8 text-3xl md:text-5xl">
          COMING SOON
        </h1>

      </div>
    </div>
  );
}
