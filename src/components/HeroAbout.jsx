import React from 'react';

export default function HeroAbout() {
  return (
    <section className="relative w-full bg-[#E8E8E8] pt-[72px] overflow-hidden flex flex-col min-h-screen">
      
      {/* Container for Desktop Split Layout */}
      <div className="relative w-full max-w-[1600px] mx-auto min-h-[800px] flex flex-col lg:flex-row">
        
        {/* Left Side: Text Content */}
        <div className="relative w-full lg:w-[45%] flex flex-col justify-end pb-24 px-6 lg:pl-16 lg:pr-8 pt-[400px] lg:pt-[450px] z-20">
          
          {/* Marquee Ticker (Absolute positioned to cut across left and right) */}
          <div className="absolute top-[350px] lg:top-[380px] left-0 w-[200%] md:w-[150%] z-30 pointer-events-none">
            <div className="marquee-track flex whitespace-nowrap text-white text-opacity-95" style={{ animationDuration: '30s' }}>
              {[...Array(8)].map((_, i) => (
                <span 
                  key={i} 
                  className="font-display text-[50px] sm:text-[60px] lg:text-[70px] tracking-widest uppercase mr-8"
                  style={{
                    WebkitTextStroke: '1px rgba(0,0,0,0.1)',
                    textShadow: '2px 2px 8px rgba(0,0,0,0.3), -1px -1px 2px rgba(255,255,255,0.4)',
                    color: '#ffffff'
                  }}
                >
                  DELIVERY - PICK UP - BRICK OVEN PIZZA - PIZZA WITH LOVE - 
                </span>
              ))}
            </div>
          </div>
          
          {/* About Text Content */}
          <div className="max-w-xl relative z-40 mt-12 bg-[#E8E8E8]/80 lg:bg-transparent p-4 lg:p-0 rounded-xl backdrop-blur-sm lg:backdrop-blur-none">
            <h2 className="font-display text-5xl lg:text-7xl mb-4 text-primary leading-none uppercase flex flex-col items-start gap-1 tracking-wider">
              <span>HOME OF</span>
              <span className="font-script text-6xl lg:text-[85px] lowercase leading-none -mt-4 text-primary transform -rotate-2" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}>
                Dat pizza guy.
              </span>
            </h2>
            
            <p className="text-gray-800 mb-6 font-medium text-xs sm:text-sm lg:text-base leading-relaxed tracking-wide opacity-90">
              Our slowly-fermented, hand-stretched dough is carefully prepared daily. Baked in our signature authentic brick ovens at searing temperatures, it results in that unmistakable flavor, perfect char, and airy crust that defines the true dr goodes experience.
            </p>

            <p className="text-gray-800 mb-10 font-medium text-xs sm:text-sm lg:text-base leading-relaxed tracking-wide opacity-90">
              We're passionate about bringing the best pizza directly to you. Premium ingredients, authentic recipes, and a lot of heart goes into every single pizza we serve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="border-2 border-foreground text-foreground px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-white transition-all">
                Find your store
              </button>
              <button className="bg-primary text-white border-2 border-primary px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Massive Video background */}
        {/* On desktop, it's pinned to the right and top, pulling down and curving at the bottom left */}
        <div className="absolute top-0 right-0 w-full lg:w-[65%] h-[400px] lg:h-full z-10 overflow-hidden lg:rounded-bl-[350px] shadow-2xl">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover object-center scale-105"
          >
            {/* You can replace this with the original video URL if you have it! */}
            <source src="https://cdn.pixabay.com/vimeo/310344211/pizza-20790.mp4?width=1280&hash=8edb1d3d66649a46320a0f269a924619bd131ee6" type="video/mp4" />
          </video>
          {/* Subtle gradient to ensure the white text overlays pop even if video is bright */}
          <div className="absolute inset-0 bg-black/10 lg:bg-transparent lg:bg-gradient-to-l from-transparent to-black/20"></div>
        </div>

      </div>
    </section>
  );
}
