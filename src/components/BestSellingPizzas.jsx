import React from 'react';
import { BEST_SELLING_PIZZAS } from '../mock/mock';

export default function BestSellingPizzas() {
  return (
    <section className="py-20 px-6 bg-white" id="menu">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl text-primary tracking-widest uppercase">
            BEST SELLING PIZZAS STRAIGHT FROM THE BRICK OVEN
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 w-full max-w-5xl">
          {BEST_SELLING_PIZZAS.slice(0, 3).map((pizza) => (
            <div key={pizza.id} className="flex flex-col items-center text-center group cursor-pointer">
              {/* Floating pizza image, no card background */}
              <div className="mb-6 w-full aspect-square relative drop-shadow-xl group-hover:-translate-y-2 transition-transform duration-300">
                <img 
                  src={pizza.image} 
                  alt={pizza.name} 
                  className="w-full h-full object-contain rounded-full" 
                />
              </div>
              
              {/* Slim capsule pill for the name */}
              <div className="border border-foreground text-foreground px-6 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-white shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                {pizza.name}
              </div>
            </div>
          ))}
        </div>
        
        {/* Slider Navigation Dots placeholder */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <button className="w-10 h-2 bg-primary rounded-full"></button>
          <button className="w-8 h-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"></button>
        </div>
        
      </div>
    </section>
  );
}