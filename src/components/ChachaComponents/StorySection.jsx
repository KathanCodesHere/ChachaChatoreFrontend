import React from "react";
import { motion } from "framer-motion";

const storyPoints = [
  {
    id: 1,
    title: "Street-side vibes",
    desc: "Relatable, unfiltered, raw.",
    video: "https://www.youtube.com/shorts/51OCVGigWLQ",
  },
  {
    id: 2,
    title: "Desi humor",
    desc: "A little spice, a little satire.",
    video: "https://www.youtube.com/watch?v=GUv-nBm8-ds"
  },
  {
    id: 3,
    title: "Heart of India",
    desc: "Celebrating local culture with global relatability.",
    video: "https://www.youtube.com/watch?v=q_-vr4mO1xg",
  },
  {
    id: 4,
    title: "Beyond food",
    desc: "People, places, history, and the quirks that make them unique.",
    video: "https://www.youtube.com/shorts/Iyti-cNVgxs",
  },
];

const StorySection = () => {
  return (
    <section className="relative bg-[#1b1b1b] text-[#f0ecd9] py-24 px-6 md:px-16 overflow-hidden">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-6xl font-dyna font-medium text-[#FF10F0] mb-6">
          The Way I Tell Stories
        </h2>
      </div>

      {/* Vertical Line */}
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[3px] bg-[#FF10F0]/60 h-full rounded-full shadow-[0_0_10px_#e86b40]" />

        {/* Story Points */}
        <div className="flex flex-col items-center space-y-20">
          {storyPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.4 }}
              className="relative flex flex-col items-center text-center w-full max-w-lg md:max-w-3xl"
            >
              {/* Connector Dot */}
              <div className="w-7 h-7 rounded-full bg-[#FF10F0] border-2 border-[#f0ecd9] shadow-[0_0_10px_#e86b40] mb-8" />

              {/* Text */}
              <div className="bg-[#242424] p-8 mb-4 rounded-2xl shadow-lg w-full">
                <h3 className="text-2xl md:text-4xl font-medium font-dyna text-[#10ff24] mb-3">
                  {point.title}
                </h3>
                <p className="text-base sm:text-2xl font-semibold font-comic">{point.desc}</p>
              </div>

             {/* Rounded Square for YouTube Video */}
              <motion.div
                className="w-64 h-50 md:w-80 md:h-64 rounded-2xl border-4 border-[#FF10F0] shadow-[0_0_15px_#e86b40] overflow-hidden mt-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <iframe
                  src={point.video
                    .replace("shorts/", "embed/")
                    .replace("watch?v=", "embed/")}
                  title={point.title}
                  className="w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Closing Line */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center text-xl md:text-2xl font-semibold font-comic mt-20 italic text-[#f0ecd9]/90 max-w-2xl mx-auto"
      >
        Because food is never just food — it’s an emotion, a memory, a story
        waiting to be shared.
      </motion.p>
      <div className="flex justify-center">
          <img src="/images/Cc.gif" alt="" />
      </div>  
    </section>
  );
};

export default StorySection;
