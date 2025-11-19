import React from "react";

const LatestArticles = () => {
  const cards = [
    {
      title: "HOW CREATIVE AGENCIES SHAPE THE FUTURE OF BRANDS",
      desc: "From strategy to storytelling, modern design agencies build immersive experiences.",
      bg: "#1a1a1a", 
    },
    {
      title: "HOW CREATIVE AGENCIES SHAPE THE FUTURE OF BRANDS",
      desc: "From strategy to storytelling, modern design agencies build immersive experiences.",
      bg: "#1a1a1a", 
    },
    {
     title: "HOW CREATIVE AGENCIES SHAPE THE FUTURE OF BRANDS",
      desc: "From strategy to storytelling, modern design agencies build immersive experiences.",
      bg: "#1a1a1a", 
    },
  ];

  return (
    <div className="w-full py-20 font-sans">

      <h2 className="text-center text-5xl font-anton text-[#f0ecd9] mb-14">
        LATEST<span className="text-[#e86b40]"> ARTICLES</span>
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg h-[320px] flex flex-col justify-between p-6 transition hover:scale-[1.02] duration-300"
            style={{ backgroundColor: item.bg }}
          >
            {/* Content */}
            <div>
              <h3 className="font-anton text-xl mb-3 leading-tight text-[#e86b40]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#f0ecd9] opacity-90">
                {item.desc}
              </p>
            </div>

            {/* Read More */}
            <div className="mt-4 text-sm font-semibold text-[#e86b40] cursor-pointer">
              READ MORE →
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-[#e86b40] text-[#f0ecd9] px-8 py-3 rounded-full hover:bg-[#f0ecd9] hover:text-[#e86b40] transition duration-300">
          VIEW ALL ARTICLES
        </button>
      </div>
    </div>
  );
};

export default LatestArticles;
