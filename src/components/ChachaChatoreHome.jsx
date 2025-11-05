import React,{useEffect} from 'react'
import NavBarc from './NavBarc'
import NavBarP from './NavBarP'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import StorySection from './StorySection'
import FeaturedStories from './FeaturedStories'
import CommunityCollaborations from './CommunityCollaborations'
import CallToActionSection from './CallToActionSection'
import Footer from './Footer'
import AllTextsSection from './AllTextsSection'
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
      <CommunityCollaborations/>
      <CallToActionSection/>
      <Footer/>
    </div>
  )
}

export default ChachaChatoreHome