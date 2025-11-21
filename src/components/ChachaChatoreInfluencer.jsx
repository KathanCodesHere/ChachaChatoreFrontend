import React from "react";
import { Link } from "react-router-dom";

const ChachaChatoreInfluencer = () => {
  return (
    <div className="w-full h-[40vh] flex flex-col items-center justify-center text-center px-6">
      
      <h2 className="text-4xl font-dyna font-semibold text-[#e86b40] mb-3 tracking-wide">
         Your Story. Our Production. Unlimited Growth.
      </h2>

      <p className="text-[#f0ecd9] font-comic font-bold max-w-xl mb-6">
      Build your influence with powerful, cinematic video content crafted by our expert production team. 
      We produce impactful visuals that elevate your brand and help you grow faster than ever.
      </p>

      <Link
        to="/production"
        className="bg-[#e86b40] text-[#f0ecd9] px-8 py-3 rounded-full font-comic font-bold hover:bg-[#f0ecd9] hover:text-[#e86b40] transition-all"
      >
         Produce With Us
      </Link>

    </div>
  );
};

export default ChachaChatoreInfluencer;
