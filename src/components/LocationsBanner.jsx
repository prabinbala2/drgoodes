import React from 'react';

export default function LocationsBanner() {
  return (
    <section className="w-full flex-col flex" id="locations">
      {/* Top Graphic: Oven baking pizzas */}
      <div className="w-full h-48 sm:h-64 md:h-80 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?w=1600&auto=format&fit=crop" 
          alt="Baking Pizzas in Brick Oven" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Maroon Banner below it */}
      <div className="bg-primary w-full py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-widest uppercase text-center m-0">
            CHECK OUT OUR LOCATIONS HERE
          </h2>
          <button className="bg-white text-foreground border-2 border-white px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-white transition-colors shadow-sm flex items-center justify-center gap-2 whitespace-nowrap">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 fill-current text-primary" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Find your nearest store
          </button>
        </div>
      </div>
    </section>
  );
}