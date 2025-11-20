import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { ScrollTrigger } from 'gsap/all';
const ScrollImageReveal = () => {
    const data=[{
        id:1,
        image:"https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        title:"Short-form Masala (Reels & Shorts)",
        desc:"Concept → Shoot → Edit → Upload-ready"
    },
    {
        id:2,
        image:"https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
        title:"Long-form Thali (Brand Films)",
        desc:" Full platter storytelling with scripts, shoots & post-production"
    },
    {
        id:3,
        image:"https://images.unsplash.com/photo-1683721003111-070bcc053d8b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1400",
        title:"Social Media Tandoor",
        desc:" Hot content calendars, growth tactics, and ad guidance to keep you trending"
    },
    {
        id:4,
        image:"https://images.unsplash.com/photo-1618329027137-a520b57c6606?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
        title:"Editing & Motion Garnish",
        desc:"Smooth cuts, subtitles, motion graphics — that perfect finishing tadka"
    },
    {
        id:5,
        image:"https://plus.unsplash.com/premium_photo-1684017834450-21747b64d666?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
        title:"Influencer Zaika",
        desc:"Events, collabs, and activations — bringing real people to the table"
    },
];

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.utils.toArray(".slider .image").forEach((img,i)=>{
            gsap.fromTo(img,{
                clipPath:"inset(0% 100% 0% 0%)"
            },
        {
            clipPath:"inset(0% 0% 0% 0%)",
            duration:1,
            ease:"none",
            scrollTrigger:{
                trigger:img,
                start:"clamp(top bottom)",
                end:"clamp(top top)",
                scrub:true
            }
        })
        })
    })

  return (
    <div id='services' className='bg-black text-[#f0ecd9] py-24 md:py-32 min-h-[400px]'>
        <h2 className='text-3xl  sm:text-5xl font-anton text-center mb-8'>
        <span className='text-[#f0ecd9]'>On the Menu</span> <span className='text-[#e86b40]'>- Our Services</span></h2>
        {data.map((service,i)=>{
            return(
                <div key={i} className="slider flex flex-col md:flex-row border-b border-white/25 p-3">
                    <div className='w-full sm:w-[40%] tracking-wider flex-start md:self-end p-8'>
                        <h1 className='font-bold text-3xl uppercase font-anton text-[#f0ecd9]'>{service.title}</h1>
                        <h5 className='text-[#f0ecd9] font-open'>{service.desc}</h5>
                    </div>
                    <div className= 'w-full md:w-[60%] h-88'>
                        <div className='image w-full h-full bg-cover bg-left' style={{backgroundImage:`url(${service.image})`}}></div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ScrollImageReveal