import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { ScrollTrigger } from 'gsap/all';
const ScrollImageReveal = () => {
    const data=[{
        id:1,
        image:"https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        title:"Brand Stratergy",
    },
    {
        id:2,
        image:"https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
        title:"Visual Identity",
    },
    {
        id:3,
        image:"https://images.unsplash.com/photo-1618329027137-a520b57c6606?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
        title:"Content Production",
    },
    {
        id:4,
        image:"https://images.unsplash.com/photo-1758524572081-5a84e02768ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
        title:"Interactive Experiences",
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
    <div className='bg-neutral-950 text-white py-96'>
        {data.map((service,i)=>{
            return(
                <div key={i} className="slider flex flex-col md:flex-row border-b border-white/25 p-3">
                    <div className='w-[40%] text-4xl flex-start md:self-end  p-8'>
                        <h1 className='font-bold uppercase font-anton'>{service.title}</h1>
                    </div>
                    <div className= 'w-[100%] md:w-[60%] h-88'>
                        <div className='image w-full h-full bg-cover bg-left' style={{backgroundImage:`url(${service.image})`}}></div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ScrollImageReveal