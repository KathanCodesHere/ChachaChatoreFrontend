import React from 'react'
import ChromaGrid from '../reactbits/ChromaGrid';
const Testimonials = () => {
    const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Client 1",
    subtitle: "Working with Chacha Chatore Productions was like mixing fun with professionalism. Our campaign didn’t just reach people — it connected.",
    handle: "@client1",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Client 2",
    subtitle: "Working with Chacha Chatore Productions was like mixing fun with professionalism. Our campaign didn’t just reach people — it connected.",
    handle: "@client2",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Client 3",
    subtitle: "Working with Chacha Chatore Productions was like mixing fun with professionalism. Our campaign didn’t just reach people — it connected.",
    handle: "@client3",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(165deg,#F59E0B,#000)",
    url: "https://github.com/sarahjohnson"
  },
];
  return (
    <div className='py-10 bg-[#1b1b1b]'>
        <h2 className="text-center font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-white leading-none mb-6">
              People Who’ve    
              <span className="text-[#e86b40] block mt-2">Tasted</span>Our Work
            </h2>
        <div className='py-10 relative'>
        
        <ChromaGrid 
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out" className='py-20'/>
    </div>
    </div>
  )
}

export default Testimonials