import React, { useState, useEffect } from "react";
import axios from "axios";

const FeaturedWorkP = () => {
  const [works, setWorks] = useState([]);

  const token = "0dc96383f061db283b145afea58191fd6ffcc483";
  const fetchURL = "https://chachachatore.com/services/admin/videos/all.php";

  const fetchVideos = async () => {
    try {
      const res = await axios.get(fetchURL, {
        headers: { Authorization: token },
      });

      if (res.data.status === "success" && res.data.videos) {
        const mappedWorks = res.data.videos.map((v) => {
          const isYT = v.video_url.includes("youtu");

          return {
            title: v.video_id || "Untitled",
            category: "Recipe Video",
            video: isYT
              ? v.video_url
                  .replace("watch?v=", "embed/")
                  .replace("youtu.be/", "www.youtube.com/embed/")
              : v.video_url,

            youtubeOriginal: isYT
              ? v.video_url
              : null,
          };
        });

        setWorks(mappedWorks);
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

        {/* ========== GRID ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {works.map((work, index) => (
            <div key={index} className="group space-y-3">
              
              {/* IF YOUTUBE */}
              {work.youtubeOriginal ? (
                <>
                  <iframe
                    src={work.video}
                    title={work.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[450px] rounded-xl"
                  ></iframe>

                 
                </>
              ) : (
                /* NORMAL VIDEO */
                <video
                  controls
                  muted
                  autoPlay
                  loop
                  src={work.video}
                  className="w-full h-[450px] rounded-xl"
                ></video>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkP;
