import React from 'react';

export default function WantDelivery() {
  return (
    <section className="py-20 px-6 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-6xl mb-6 uppercase tracking-wider">WE WANT TO DELIVER TO YOU</h2>
        <p className="text-lg md:text-xl mb-10 opacity-90 font-medium">Enter your postcode to see if we deliver to your area</p>
        <div className="flex gap-2 max-w-lg mx-auto">
          <input 
            type="text" 
            placeholder="Postcode" 
            className="flex-1 px-8 py-4 rounded text-foreground bg-white text-lg font-bold border-none outline-none focus:ring-4 focus:ring-white/30"
          />
          <button className="bg-foreground text-white px-10 py-4 rounded font-bold uppercase tracking-wider hover:bg-black transition-colors text-lg">
            Check
          </button>
        </div>
      </div>
    </section>
  );
}