import React from "react";
import { motion } from "framer-motion";

// ✅ Your story data
const featuredStories = [
  {
    id: 1,
    title: "Indore’s Best Poha-Jalebi Morning",
    desc: "A delicious morning story from the streets of Indore.",
    videoUrl: "https://www.youtube-nocookie.com/embed/YQ8C7KWDlTY?si=fmYw6eRgZyA2Mxde",
  },
  {
    id: 2,
    title: "Street Food Tales from Sarafa Bazaar",
    desc: "Where flavors, lights, and laughter never sleep.",
    videoUrl: "https://www.youtube-nocookie.com/embed/YQ8C7KWDlTY?si=fmYw6eRgZyA2Mxde",
  },
  {
    id: 3,
    title: "Delhi’s Chaat Magic",
    desc: "Exploring spicy, tangy, and sweet street wonders of Delhi.",
    videoUrl: "https://www.youtube-nocookie.com/embed/jfKfPfyJRdk",
  },
  {
    id: 4,
    title: "Mumbai’s Rainy Vada Pav Trail",
    desc: "Because nothing beats chai and vada pav in the rain.",
    videoUrl: "https://www.youtube-nocookie.com/embed/jfKfPfyJRdk",
  },
];

const FeaturedStories = () => {
  return (
    <section
      id="stories"
      className="relative bg-[#1b1b1b] text-[#f0ecd9] py-24 px-4 sm:px-8 md:px-16 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-modak text-[#EE4B2B] mb-3">
          Featured Stories
        </h2>
        <p className="text-lg md:text-xl text-[#f0ecd9]/80 font-open">
          Scroll through the stories that capture the real taste of India.
        </p>
      </motion.div>

      {/* YouTube Shorts Style Grid */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-7xl mx-auto">
        {featuredStories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="relative bg-[#1c1c1c] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(232,107,64,0.15)] 
                       hover:shadow-[0_0_25px_rgba(232,107,64,0.4)] transition-all duration-500 
                       w-[240px] sm:w-[260px] md:w-[280px] aspect-[9/16] flex flex-col group cursor-pointer"
          >
            {/* Video */}
            <div className="relative flex-1 overflow-hidden">
              <iframe
                src={story.videoUrl}
                title={story.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* YouTube Style Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Floating play pulse effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#e86b40] opacity-60"
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                  delay: index * 0.4,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-14 h-14"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>

            {/* Title + Description */}
            <div className="p-3 bg-[#181818] flex flex-col justify-between">
              <h3 className="text-lg font-anton text-[#f0ecd9] truncate mb-1">
                {story.title}
              </h3>
              <p className="text-sm text-[#f0ecd9]/70 font-open line-clamp-2">
                {story.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background YouTube-style light animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#e86b40]/5 via-transparent to-transparent pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="flex justify-center my-4">
        <img src="/images/ccc.gif" alt=""  />
      </div>
    </section>
  );
};

export default FeaturedStories;
