import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";
import axios from "axios";

const FeaturedWorkP = () => {
  const [works, setWorks] = useState([]);

  const token = "0dc96383f061db283b145afea58191fd6ffcc483"; 
  const fetchURL = "https://chachachatore.com/services/admin/videos/all.php";

//get api
  const fetchVideos = async () => {
    try {
      const res = await axios.get(fetchURL, {
        headers: { Authorization: token },
      });

      if (res.data.status === "success" && res.data.videos) {
        const mappedWorks = res.data.videos.map((v) => ({
          title: v.video_id || "Untitled",
          category: "Recipe Video",
          gradient: "from-amber-500 to-orange-600",
          poster: "/posters/default.jpg",
          video: v.video_url.includes("youtu.be")
            ? v.video_url.replace("youtu.be/", "www.youtube.com/embed/")
            : v.video_url,
        }));

        setWorks(mappedWorks);
      } else {
        console.log("No videos found");
      }
    } catch (err) {
      console.error("Fetch Videos Error:", err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <section id="stories" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-center font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-[#f0ecd9] leading-none mb-6">
            <span className="text-[#e86b40]">Our Recipe </span>in Action
          </h2>
          <p className="font-open text-[#f0ecd9] text-lg mt-4">
            Each project is crafted with flavor and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 px-2">
          {works.map((work, index) => (
            <div key={index} className="group">
              <div
                className={`relative aspect-3/3 rounded-xl overflow-hidden bg-linear-to-br ${work.gradient}`}
              >
                <video controls muted autoPlay loop
                  src={work.video}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/40 transition"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkP;
