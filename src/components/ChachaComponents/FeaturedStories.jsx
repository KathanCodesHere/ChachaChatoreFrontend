import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FeaturedStories = () => {
  const [featuredStories, setFeaturedStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch(
          "https://chachachatore.com/services/stories.php"
        );

        const data = await res.json();
        console.log("API RESPONSE:", data);

        if (data.status === "success" && Array.isArray(data.data)) {
          setFeaturedStories(data.data);
        } else {
          setFeaturedStories([]);
        }
      } catch (error) {
        console.error("API ERROR:", error);
      }
    };

    fetchStories();
  }, []);

  return (
    <section
      id="stories"
      className="relative bg-[#1b1b1b] text-[#f0ecd9] py-20 px-4 sm:px-8 md:px-16 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-dyna font-medium text-[#00BFFF] mb-3">
          Featured Stories
        </h2>
        <p className="text-xl md:text-2xl text-[#f0ecd9]/80 font-comic font-semibold">
          Scroll through the stories that capture the real taste of India.
        </p>
      </motion.div>

      {/* Grid */}
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
                       w-[90vw] sm:w-[260px] md:w-[290px] aspect-9/16 flex flex-col group cursor-pointer"
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

              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>

            {/* Title + Description */}
            <div className="p-3 bg-[#181818] flex flex-col justify-between">
              <h3 className="text-lg font-anton text-[#00BFFF] truncate mb-1">
                {story.title}
              </h3>
              <p className="text-md font-comic text-[#f0ecd9]/70 line-clamp-2">
                {story.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-10 mb-8">
        <img
          src="/assets/chachayt.gif"
          alt=""
          className="w-[500px] md:w-[600px] lg:w-[700px] object-contain"
        />
      </div>
    </section>
  );
};

export default FeaturedStories;
