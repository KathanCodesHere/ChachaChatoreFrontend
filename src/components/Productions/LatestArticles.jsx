import React, { useState } from "react";

const LatestArticles = () => {
  const cards = [
    {
      title: "Chacha Chatore: Blogging Ka Naya Street Food Persona",
      fullDesc:
        "Chacha Chatore ne street-food blogging ko ek nayi pahchan di hai — ek aisi personality jo na sirf khane ko dikhati hai, balki uske peeche chhupi kahaniyon ko bhi capture karti hai. Har reel, har clip ek aisa moment ban kar nikalta hai jisme taste ke saath-saath local culture aur emotions bhi blend ho jaate hain. Unka content sirf food showcase nahi, balki ek raw, unfiltered storytelling hai jo asli India ka swad aur zindagi ki simplicity dono ko ek saath laati hai. Iss persona ka style grounded, funny, aur relatable hai — bilkul aise jaise koi apna dost street par khana try kar raha ho.",
      bg: "#1a1a1a",
    },
    {
      title: "Trademark Story: Chacha Chatore Ki Growth aur Brand Journey",
      fullDesc:
        "Chacha Chatore ek naam nahi, balki ek brand identity ban chuka hai — jiska trademark Vineet Vyas ke naam registered hai. Is branding ke peeche ek clear vision dikhai deta hai: street food ko ek organised, creative, aur marketable format me lana. Trademark registration brand ki authenticity, recognition, aur long-term growth ka pehla solid step tha. Yeh journey dikhati hai ki kaise ek local idea ko national identity banaya ja sakta hai jab usme passion aur strategy dono equal hoti hain. Chacha Chatore ki brand journey ek reminder hai ki Indian food culture ko global-level tak le jana possible hai.",
      bg: "#1a1a1a",
    },
    {
      title: "Chaat Chatore Franchise Ka Boom: Street Food Meets Organized Business",
      fullDesc:
        "Chaat Chatore jaise franchises ne street food industry ko ek naye professional era me introduce kiya hai — ek aisa model jisme hygiene, branding, SOPs aur scalable business ek saath chal rahe hain. Yeh expansion Indian fast-food landscape ko reshape kar raha hai, jahan traditional recipes ko modern packaging aur business structure ke saath joda ja raha hai. Yeh trend sirf food lovers ko options nahi deta, balki foodpreneurs ke liye bhi ek booming opportunity create karta hai. Iss franchise success se inspire hokar bohot si local identities, including Chacha Chatore, future me similar expansion explore kar sakti hain.",
      bg: "#1a1a1a",
    },
  ];

  const [expanded, setExpanded] = useState(Array(cards.length).fill(false));

  const toggleExpand = (index) => {
    const updated = [...expanded];
    updated[index] = !updated[index];
    setExpanded(updated);
  };

  return (
    <div className="w-full py-20 font-sans">
      <h2 className="text-center font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-[#f0ecd9] leading-none mb-6">
        <span className="text-[#e86b40]">Latest </span>articles
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {cards.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.bg }}
            className={`rounded-xl shadow-lg p-6 transition-all duration-500 overflow-hidden ${
              expanded[index] ? "h-auto" : "h-[320px]"
            }`}
          >
            <h3 className="font-anton text-xl mb-3 leading-tight text-[#e86b40]">
              {item.title}
            </h3>

            {/* Content Area with Mask Fade */}
            <div
              className={`relative transition-all duration-500 ${
                expanded[index] ? "max-h-full" : "max-h-[180px] overflow-hidden"
              }`}
            >
              <p className="text-m leading-relaxed font-opensans text-[#f0ecd9] opacity-90">
                {item.fullDesc}
              </p>

              {/* Fade Mask (visible only when not expanded) */}
              {!expanded[index] && (
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
              )}
            </div>

            {/* Toggle Button */}
            <div
              onClick={() => toggleExpand(index)}
              className="mt-4 text-sm font-semibold font-opensans text-[#e86b40] cursor-pointer"
            >
              {expanded[index] ? "READ LESS ←" : "READ MORE →"}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 font-opensans font-bold">
        <button className="bg-[#e86b40] text-[#f0ecd9] px-8 py-3 rounded-full hover:bg-[#f0ecd9] hover:text-[#e86b40] transition duration-300 cursor-pointer">
          View All Articles
        </button>
      </div>
    </div>
  );
};

export default LatestArticles;
