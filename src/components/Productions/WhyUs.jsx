import { Heart, Target, Package, Zap } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Creator-first approach",
    description: "We know what works on reels, shorts, and trends.",
  },
  {
    icon: Target,
    title: "Local authenticity",
    description: "Pure local tadka — deep Indore roots, real connections.",
  },
  {
    icon: Package,
    title: "End-to-end kitchen",
    description: "One-stop kitchen — everything in-house, no middlemen, no delays.",
  },
  {
    icon: Zap,
    title: "Fast turnarounds",
    description: "Because content ka zamaana slow nahi hota",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-black py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-anton leading-12 sm:leading-20 text-[#f0ecd9] text-3xl md:text-7xl mb-6 animate-fade-in-up">
            Why Choose <span className="text-[#e86b40]">Chacha Chatore Productions?</span>
          </h2>
        </div>
        
        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated Icon Container */}
                <div className="relative inline-block mb-6">
                  {/* Background Circle */}
                  <div className="absolute inset-0 bg-[#e86b40] rounded-full blur-xl group-hover:bg-[#eba993d4] group-hover:blur-lg transition-colors"></div>
                  
                  {/* Icon */}
                  <div className="relative w-24 h-24 mx-auto flex items-center justify-center rounded-full border-4  bg-card group-hover:border-[#e97c58d1]  transition-all group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-10 h-10 text-[#e86b40] group-hover:scale-110 transition-transform" />
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#f34004] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#f34004] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                {/* Title */}
                <h3 className="font-anton uppercase text-xl md:text-3xl text-[#f0ecd9] mb-3 group-hover:text-[#e86b40] transition-colors">
                  {reason.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#f0ecd9] text-sm sm:text-md font-open leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Accent */}
        <div className="flex items-center justify-center gap-4 mt-16 animate-fade-in animation-delay-600">
          <div className="h-0.5 w-24 bg-linear-to-r from-transparent to-[#f0ecd9]"></div>
          <span className="font-open text-xs sm:text-sm tracking-widest text-center text-[#f0ecd9]">STREET TO STUDIO</span>
          <div className="h-0.5 w-24 bg-linear-to-l from-transparent to-white"></div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
