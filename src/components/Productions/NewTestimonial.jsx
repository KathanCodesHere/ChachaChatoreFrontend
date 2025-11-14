import React from "react";
import ChromaGrid from "../reactbits/ChromaGrid";

const Testimonials = () => {
  const items = [
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Client 1",
      subtitle:
        "Working with Chacha Chatore Productions was like mixing fun with professionalism. Our campaign didn’t just reach people — it connected.",
      handle: "@client1",
      borderColor: "#f0ecd9 ",
      url: "https://github.com/sarahjohnson",
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "Client 2",
      subtitle:"Working with Chacha Chatore Productions was like mixing fun with professionalism. Our campaign didn’t just reach people — it connected.",
      handle: "@client2",
      borderColor: "#f0ecd9",
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "Client 3",
      subtitle: "Working with Chacha Chatore Productions was like mixing fun with professionalism. Our campaign didn’t just reach people — it connected.",
      handle: "@client3",
      borderColor: "#f0ecd9/40 ",
      url: "https://github.com/sarahjohnson",
    },
  ];

  return (
    <div className="py-20 bg-black">
      {/* Heading */}
      <h2 className="text-center font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-[#f0ecd9] leading-none mb-6">
        People Who’ve
        <span className="text-[#e86b40] block mt-2">Tasted</span>Our Work
      </h2>

      {/* Grid Section */}
      <div className="py-10 relative flex flex-wrap justify-center gap-10 px-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-80 bg-[#222] border-2 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105"
            style={{
              borderColor: item.borderColor,
              boxShadow: `0 0 15px ${item.borderColor}50`,
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2"
              style={{ borderColor: item.borderColor }}
            />
            <h3 className="text-[#f0ecd9] font-semibold text-xl mb-2">
              {item.title}
            </h3>
            <p className="text-[#ccc] text-sm mb-3">{item.subtitle}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-[#e86b40] font-bold hover:underline"
            >
              {item.handle}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
