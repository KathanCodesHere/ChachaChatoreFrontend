import React from "react";

const AboutP = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-6xl border-2 border-white rounded-2xl p-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">

          {/* Left Box */}
          <div
            className="border-2 border-white rounded-xl p-6 flex flex-col justify-between 
                        transition-all duration-500 hover:-translate-y-2 
                        hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] cursor-pointer active:scale-95"
          >
            <p className="font-open-sans text-sm leading-7"style={{ color:"#fff4e5" }}>
              Born out of the same passion for storytelling,
              Chacha Chatore Productions is
              the professional arm that helps brands, creators, and businesses
              tell their own kahaniyan.
            </p>
            <div className="mt-6 overflow-hidden rounded-lg border-2 border-white">
              <img
                src="/images/about-left.png"
                alt="About Left"
                className="h-48 w-full object-cover transform transition-transform duration-700 hover:scale-110 hover:brightness-110"
              />
            </div>
          </div>

        {/* Center Heading */}
        <div className="flex flex-col items-center justify-center text-center px-4">
          <h2
            className="
              font-anton 
              text-4xl md:text-6xl lg:text-7xl 
              text-[#fff5eb] 
              cursor-pointer
            "
          >
            What is Chacha Chatore
            Productions?
          </h2>
        </div>

          {/* Right Box */}
          <div
            className="border-2 border-white rounded-xl p-6 flex flex-col justify-between 
                        transition-all duration-500 hover:-translate-y-2 
                        hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] cursor-pointer active:scale-95"
          >
            <p className="font-open-sans text-sm leading-7">
              We blend the authenticity of street storytelling with polished
              production — so your brand feels relatable and premium at the same
              time.
            </p>
            <div className="mt-6 overflow-hidden rounded-lg border-2 border-white">
              <img
                src="/images/about-right.png"
                alt="About Right"
                className="h-48 w-full object-cover transform transition-transform duration-700 hover:scale-110 hover:brightness-110"
              />
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div
          className="border-2 border-white rounded-full px-8 py-4 mt-16 flex items-center justify-center 
                      hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer active:scale-95"
        >
          <p className="text-center text-base md:text-lg font-open-sans">
            Think of us as your creative kitchen — where raw ideas become
            sizzling stories, ready to serve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutP;
