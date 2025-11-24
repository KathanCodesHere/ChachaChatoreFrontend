import React from "react";
import { Link } from "react-router-dom";

const ExploreProductionHouse = () => {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-center text-center px-6">
      
          <h2 className="text-center font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-[#f0ecd9] leading-none mb-6">
              <span className="text-[#e86b40]">How We Build </span>Our Brand
          </h2>

      <p className="text-[#f0ecd9] text-lg max-w-xl mb-6 text-opensans text-bold">
         From small beginnings to a growing digital presence, our journey shows how consistent content, 
         smart strategy, and authentic storytelling can turn an idea into a recognized brand. 
         Explore the process behind our growth.

      </p> 
 
      <Link
        to="/chacha"
        className="bg-[#e86b40] text-[#f0ecd9] text-anton px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#f0ecd9] hover:text-[#e86b40] transition-all"
      >
        See Our Influencer Journey
      </Link>

    </div>
  );
};

export default ExploreProductionHouse;
