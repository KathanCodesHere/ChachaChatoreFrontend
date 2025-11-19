// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import GradientText from '../reactbits/GradientText'
const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center px-0 mx-0">
      {/* 🔹 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="https://www.pexels.com/download/video/2311965/" // ✅ Replace with your own hosted video file
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔹 Overlay (dark layer for better text contrast) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🔹 Text Content */}
      <motion.div
        className="relative z-10 px-4 sm:px-12 text-[#f0ecd9] max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={8}
  showBorder={false} className="font-dyna font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight"
>
  Kisse Kahaniyan with <br /> Chacha Ji
</GradientText>

        {/* <h1 className="font-dyna font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-green-500 to-red-600 drop-shadow-lg">
          Kisse Kahaniyan with <br /> Chacha Ji
        </h1> */}

        <p className="mt-6 text-lg sm:text-2xl text-[#f0ecd9]/90 font-comic font-bold">
          Not just food videos. Not just vlogs. This 
          is about people, plates,
          and the untold stories behind them.
        </p>

        {/* 🔹 CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="#stories"
            className="bg-[#e86b40] hover:bg-[#f0ecd9] hover:text-[#e86b40] 
                      text-[#f0ecd9] px-6 py-3 rounded-lg text-base sm:text-lg 
                      font-semibold transition-all duration-300 font-comic inline-block"
          >
            Watch Stories
          </a>
          <a
            href="https://www.youtube.com/@chachachatore"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#f0ecd9] hover:bg-[#f0ecd9] hover:text-[#e86b40] px-6 py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 font-comic"
          >
            Follow the Journey
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
