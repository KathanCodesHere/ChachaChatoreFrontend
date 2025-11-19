import React from "react";
import { Link } from "react-router-dom";

const ChachaChatoreInfluencer = () => {
  return (
    <div className="w-full h-[35vh] flex flex-col items-center justify-center text-center px-6">
      
      <h2 className="text-4xl font-bold text-[#e86b40] mb-3 tracking-wide">
        
      </h2>

      <p className="text-[#f0ecd9] text-lg max-w-xl mb-6">
      Discover creative production services crafted for high-quality visuals and branding.
      </p>

      <Link
        to="/production"
        className="bg-[#e86b40] text-[#f0ecd9] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#f0ecd9] hover:text-[#e86b40] transition-all"
      >
        SWITCH TO PRODUCTION PAGE
      </Link>

    </div>
  );
};

export default ChachaChatoreInfluencer;
