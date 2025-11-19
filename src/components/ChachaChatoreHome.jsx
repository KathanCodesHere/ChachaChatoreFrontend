import React,{useEffect} from 'react'
import NavBarP from './NavBarP'
import HeroSection from './ChachaComponents/HeroSection'
import AboutSection from './ChachaComponents/AboutSection'
import StorySection from './ChachaComponents/StorySection'
import FeaturedStories from './ChachaComponents/FeaturedStories'
import CommunityCollaborations from './ChachaComponents/CommunityCollaborations'
import CallToActionSection from './ChachaComponents/CallToActionSection'
import Footer from './ChachaComponents/Footer'
import AllTextsSection from './ChachaComponents/AllTextsSection'
import ComingSoon from './ChachaComponents/comingsoon'
import ChachaChatoreInfluencer from './ChachaChatoreInfluencer'
// 🔥 Adds a glowing cursor trail that follows the mouse
const CursorGlow = () => {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className =
      "fixed top-0 left-0 w-20 h-20 bg-[#e86b40]/20 rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out z-50";
    document.body.appendChild(glow);

    const handleMove = (e) => {
      glow.style.transform = `translate(${e.clientX - 40}px, ${
        e.clientY - 40
      }px)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  return null;
};
const ChachaChatoreHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-[#1b1b1b]  py-1'>
      {/* <NavBarc/> */}
      <CursorGlow />
      <NavBarP/>
      <HeroSection/>
      <AllTextsSection/>
      <AboutSection/>
      <StorySection/>
      <FeaturedStories/>
      <ChachaChatoreInfluencer/>
      <CommunityCollaborations/>
      <ComingSoon/>
      <CallToActionSection/>
      <Footer/>
    </div>
  )
}

export default ChachaChatoreHome