import React, { useState, useEffect } from "react";
import axios from "axios";

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const token = "09c26f3616fbb069c5b07d797b79ba362a384600";
  const fetchURL = "https://chachachatore.com/services/admin/blogs/fetch.php";

  const DEFAULT_BORDER_COLOR = "#1a1a1a";

  const fetchArticles = async () => {
    try {
      const res = await axios.get(fetchURL, { headers: { Authorization: token } });
      if (res.data.status === "success" && res.data.blogs) {
        setArticles(res.data.blogs);
        setExpanded(Array(res.data.blogs.length).fill(false));
      } else {
        console.log("No articles found");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const toggleExpand = (index) => {
    const updated = [...expanded];
    updated[index] = !updated[index];
    setExpanded(updated);
  };

  return (
    <div className="w-full py-20 font-sans bg-black">
      <h2 className="text-center font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-[#f0ecd9] leading-none mb-6">
        <span className="text-[#e86b40]">Latest </span>Articles
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg p-6 transition-all duration-300 overflow-hidden bg-[#1a1a1a] border-2 hover:scale-105`}
            style={{
              borderColor: DEFAULT_BORDER_COLOR,
              boxShadow: `0 0 15px ${DEFAULT_BORDER_COLOR}50`,
            }}
          >
            <h3 className="font-anton text-xl mb-3 leading-tight text-[#e86b40] h-12 overflow-hidden text-ellipsis">
              {article.blog_title}
            </h3>

            <div
              className={`relative transition-all duration-500 ${
                expanded[index] ? "max-h-full" : "max-h-[180px] overflow-hidden"
              }`}
            >
              <p className="text-[#f0ecd9] text-sm font-opensans leading-relaxed opacity-90">
                {article.blog_description}
              </p>

              {!expanded[index] && (
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
              )}
            </div>

            <div
              onClick={() => toggleExpand(index)}
              className="flex justify-end mt-4 text-sm font-semibold font-opensans text-[#e86b40] cursor-pointer select-none"
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
