import React from "react";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
const HeroP = () => {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black"
    >
      {/*Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-fallback.jpg" // optional fallback image
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6">
        <h1 className="font-bold text-[4rem] md:text-[6rem] uppercase leading-none font-anton">
        <span className="text-[#f0ecd9]">Stories With</span>{" "}<br></br>
        <span className="text-[#e86b40]">Tandoori Tadka</span>  
        </h1>
      <p className="text-[#f0ecd9] text-lg md:text-2xl max-w-3xl mx-auto mb-10 font-open-sans">
      We don’t just create content. We serve stories — hot, authentic, and scroll-stopping.
      </p>


        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
       <a href="#work" 
       className=" 
          group relative inline-flex items-center gap-3 
          px-10 py-4 text-xl font-semibold text-[#f0ecd9] rounded-xl
          bg-gradient-to-r from-[#ff7a3d] to-[#ff501a] 
          transition-all duration-300 
          hover:scale-110 hover:shadow-[0_0_35px_rgba(255,100,50,0.9)]
      ">
        <Play className="w-6 h-6 fill-white" />
        <span>See Our Work</span>
      </a>
        <Link to="/workwithchacha">
            <button
              className="
                border-2 border-[#e86b40] text-[#f0ecd9] 
                px-8 py-3 text-xl rounded-md 
                transition-all duration-300 
                hover:bg-[#e86b40] hover:text-[#f0ecd9]
              "
            >
              Work With Us
          </button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroP;
