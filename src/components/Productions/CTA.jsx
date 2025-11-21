import { Mail, Phone, Instagram } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="bg-black text-[#f0ecd9] py-24 md:py-32 min-h-screen flex flex-col items-center justify-center relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-12 animate-fade-in-up">
            <h2 className="font-anton uppercase text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#f0ecd9] leading-none mb-6">
              Let's Cook
              <span className="text-[#e86b40] block mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Something Together</span>
            </h2>
            
            <p className="text-md sm:text-lg md:text-2xl max-w-3xl mx-auto font-open text-[#f0ecd9]">
             Whether it’s a 15-second reel or a full-fledged brand film, we’re here to serve stories that your audience won’t forget
            </p>
          </div>
          
          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in animation-delay-200">
            <a
              href="mailto:hello@chachachatore.com"
              className="menu-card flex flex-col items-center justify-center p-8 group hover:scale-105 transition-transform border-white border"
            >
              <Mail className="w-12 h-12 text-[#e86b40] mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-anton text-[#f0ecd9] text-xl mb-2">Email karo </span>
              <span className="font-open text-sm text-muted-foreground">(Professional waala)</span>
              <span className="font-open text-xs text-[#f0ecd9] mt-1">Vineet.projection@gmail.com</span>
            </a>
            
            <a
              href="tel:+919876543210"
              className="menu-card flex flex-col items-center justify-center p-8 group hover:scale-105 transition-transform border-white border"
            >
              <Phone className="w-12 h-12 text-[#e86b40] mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-anton text-[#f0ecd9] text-xl mb-2">Call karo </span>
              <span className="font-open text-sm text-muted-foreground">(Urgent hai toh)</span>
              <span className="font-open text-xs text-[#f0ecd9] mt-1">+91 98765 43210</span>
            </a>
            
            <a
              href="https://instagram.com/chachachatore"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-card flex flex-col items-center justify-center p-8 group hover:scale-105 transition-transform border-white border"
            >
              <Instagram className="w-12 h-12 text-[#e86b40] mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-anton text-[#f0ecd9] text-xl mb-2">Slide into DMs </span>
              <span className="font-open text-sm dont-open text-muted-foreground">(Cool kids only)</span>
              <span className="font-open text-xs text-[#f0ecd9] mt-1">@chachachatore</span>
            </a>
          </div>
          
          {/* Primary CTA Button */}
          <div className="animate-fade-in animation-delay-400">
            <a href="#work" className="btn-street font-open font-medium hover:text-[#e86b40] text-xl px-12 py-3 text-[#f0ecd9] border-white border">
              See Our Work
            </a>
          </div>
          
          {/* Tagline */}
          <div className="mt-16 pt-12 border-t-2 border-dashed border-border animate-fade-in animation-delay-600">
            <p className="font-display text-xl md:text-3xl text-muted-foreground italic">
              "15-second reel ya 15-minute film — sab kuch banta hai! We serve stories that stick. "
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;