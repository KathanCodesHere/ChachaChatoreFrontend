import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const works = [
  {
    id: 1,
    title: "Brand Story Campaign",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    id: 2,
    title: "Restaurant Ad Film",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  {
    id: 3,
    title: "Photography Showcase",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
  },
  {
    id: 4,
    title: "Social Media Rebranding",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
  },
  {
    id: 5,
    title: "Brand Story Campaign",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    id: 6,
    title: "Restaurant Ad Film",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  {
    id: 7,
    title: "Photography Showcase",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
  },
  {
    id: 8,
    title: "Social Media Rebranding",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
  },
  {
    id: 9,
    title: "Social Media Rebranding",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
  },
];

export default function WorksPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-black text-[#f0ecd9] font-opensans">

      {/* Back Button */}
      <div className="px-6 md:px-12 py-6">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-[#e86b40] text-black rounded-full font-semibold hover:bg-[#f0ecd9] hover:text-[#e86b40] transition"
        >
          &larr; Back
        </button>
      </div>

      {/* Hero Section */}
      <section className="w-full py-16 md:py-10 flex flex-col items-center justify-center text-center px-6 md:px-10">
        <h2 className="text-center font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-[#f0ecd9] leading-none mb-6">
            <span className="text-[#e86b40]">explore </span>our work      
        </h2>

        <p className="font-opensans text-bold max-w-2xl text-[#f0ecd9]">
          A curated collection of creative stories, brand films, photography, and digital campaigns crafted by our agency.
        </p>
      </section>

      {/* Works Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-6 md:px-12 pb-24">
        {works.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden shadow-lg bg-white group border border-[#e86b40]/30"
          >
            <div className="w-full h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>
            

            <div className="p-4 md:p-5">
              <h3 className="text-xl font-anton text-bold text-[#e86b40]">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
       {/* Back Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="px-7 py-3 bg-[#e86b40] text-black rounded-full font-semibold font-opensans hover:bg-[#f0ecd9] hover:text-[#e86b40] transition-all"
        >
          ← Back 
        </button>
      </div>
      </section>
    </div>
  );
}
