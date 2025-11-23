import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const works = [
  { id: 1, title: "Brand Story Campaign", desc: "Sitting by the lake, relaxed and smiling.", image: "/assets/photo1.jpg" },
  { id: 2, title: "Restaurant Ad Film", desc: "Holding platters of colorful food in a busy restaurant.", image: "/assets/photo2.jpg" },
  { id: 3, title: "Playful Mealtime", desc: "Dining indoors with a playful cartoon cutout.", image: "/assets/photo3.jpg" },
  { id: 4, title: "Sab Pe Bhaari Shoot", desc: "Individual in elegant attire holding a bold 'Sab Pe Bhaari' signboard.", image: "/assets/photo4.jpg" },
  { id: 5, title: "Local Landmark Visit", desc: "Full-of-energy pose with arms outstretched against the ‘Namkin Cluster’ mural.", image: "/assets/photo5.jpg" },
  { id: 6, title: "Culinary Delight Experience", desc: "Crafting cohesive visual branding.", image: "/assets/photo6.jpg" },
  { id: 7, title: "Vibrant Gujarati Vibes", desc: "Sitting at a table with a giant, colorful dish.", image: "/assets/photo7.jpg" },
  { id: 8, title: "Chalti Ka Naam Yaari", desc: "Capturing friendship vibes... ", image: "/assets/photo8.jpg" },
  { id: 9, title: "Cool & Tangy", desc: "Delicious Nimbu Pani paired with traditional Jaljeera for a refreshing treat.", image: "/assets/photo9.jpg" },
];

export default function WorksPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-[#f0ecd9] font-opensans">

      {/* Top Back Button */}
      <div className="px-6 md:px-12 py-6">
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="px-5 py-2 bg-[#e86b40] text-black rounded-full font-semibold hover:bg-[#f0ecd9] hover:text-[#e86b40] transition"
        >
          ← Back
        </button>
      </div>

      {/* Hero Section */}
      <section className="w-full pt-6 pb-10 flex flex-col items-center justify-center text-center px-6 md:px-10">
        <h2 className="text-center font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-[#f0ecd9] leading-none mb-4">
          <span className="text-[#e86b40]">explore </span>our work
        </h2>
        <p className="font-opensans max-w-2xl text-[#f0ecd9]/90">
          A curated collection of creative stories, brand films, photography, and digital campaigns crafted by our agency.
        </p>
      </section>

      {/* Works Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-6 md:px-12 pb-24">
        {works.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden shadow-lg bg-white group border border-[#e86b40]/30"
          >
            <div className="w-full aspect-[3/2] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="p-4 md:p-5">
              <h2 className="text-xl uppercase font-anton font-bold text-[#e86b40]">
                {item.title}
              </h2>
              {item.desc && (
                <p className="text-[#5a523a] mt-2 font-bold font-opensans">{item.desc}</p>
              )}
            </div>
          </motion.div>
        ))}

        {/* Bottom Back Button */}
        <div className="mt-12 flex justify-center col-span-full">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="px-7 py-3 bg-[#e86b40] text-black rounded-full font-semibold font-opensans hover:bg-[#f0ecd9] hover:text-[#e86b40] transition-all"
          >
            ← Back
          </button>
        </div>
      </section>
    </div>
  );
}
