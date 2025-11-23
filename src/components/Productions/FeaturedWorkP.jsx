import { Play } from "lucide-react";
// import { useState } from "react";

const works = [
  {
    title: "Street Chai Chronicles",
    category: "Documentary Series",
    gradient: "from-amber-500 to-orange-600",
    poster: "https://images.unsplash.com/photo-1676286255143-d46e4f3b1fdd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXQlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    video: "/videos/road.mp4",
  },
  {
    title: "Midnight Biryani Diaries",
    category: "Brand Film",
    gradient: "from-red-500 to-pink-600",
    poster: "/posters/biryani.jpg",
    video: "/videos/road.mp4",
  },
  {
    title: "Spice Route Stories",
    category: "Short Film",
    gradient: "from-yellow-500 to-amber-600",
    poster: "/posters/spice.jpg",
    video: "/videos/road.mp4",
  },
];

const FeaturedWorkP = () => {
//   const [activeVideoIndex, setActiveVideoIndex] = useState(null);

//   const handlePlay = (index) => {
//     setActiveVideoIndex(index);
//   };

  return (
    <section id="stories" className="py-24 md:py-32 bg-neutral-900 relative overflow-hidden">

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

                {/* {activeVideoIndex === index ? ( */}
                  // ✅ SHOW VIDEO WHEN ACTIVE
                  <video controls muted autoPlay loop   
                    src={work.video}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                 {/* ) : (  */}
                //   ✅ SHOW POSTER + PLAY BUTTON WHEN NOT ACTIVE
                  {/* <>
                    <img
                      src={work.poster}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-70 transition"
                    /> */}

                    {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <button
                        onClick={() => handlePlay(index)}
                        className="w-20 h-20 rounded-full border-4 border-white/40 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md transition"
                      >
                        <Play className="w-10 h-10" />
                      </button>

                      <h3 className="mt-6 text-2xl font-bold drop-shadow">
                        {work.title}
                      </h3>
                      <span className="text-sm opacity-90">{work.category}</span>
                    </div> */}
                   {/* </> */}
                 {/* )}   */}

                {/* Hover border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/40 transition"></div>
              </div>

            </div>
          ))} 

        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkP