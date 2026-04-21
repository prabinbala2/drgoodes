import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row lg:items-center">

        {/* Left Side: Story & Buttons */}
        <div className="max-w-xl pr-6 relative z-30">
          <h2 className="font-display text-5xl lg:text-7xl mb-4 text-primary leading-none uppercase flex flex-col items-start gap-1 tracking-wider">
            <span>HOME OF</span>
            <span className="font-script text-6xl lg:text-[90px] lowercase leading-none -mt-4 text-primary transform -rotate-2" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}>
              Dat pizza guy.
            </span>
          </h2>

          <p className="text-gray-800 mb-6 font-medium text-sm lg:text-base leading-relaxed tracking-wide">
            dr goodes is built around the good stuff: slow-fermented dough, proper brick-oven heat, rich sauces, premium cheese, and toppings that don&apos;t hold back. Every pizza is stretched, dressed, and fired to order.
          </p>

          <p className="text-gray-800 mb-10 font-medium text-sm lg:text-base leading-relaxed tracking-wide">
            From burrata-loaded crowd favourites to classic pepperoni and signature house specials, we make pizzas that land big whether you&apos;re dining in, grabbing takeaway, or ordering late-night delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="border-2 border-primary text-primary px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
              Find your store
            </button>
            <button className="bg-primary text-white border-2 border-primary px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center gap-2 justify-center">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
              Order Now
            </button>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative mx-auto max-w-[520px]">
            <div className="absolute -inset-5 rounded-[36px] bg-primary/12 blur-2xl"></div>
            <div className="relative overflow-hidden rounded-[32px] border border-brand-ink/10 bg-brand-cream p-3 shadow-[18px_18px_0_rgba(17,17,17,0.12)]">
              <img
                src="/johnny-gio-burrata-queen.webp"
                alt="dr goodes Burrata Queen pizza"
                className="h-[420px] w-full rounded-[24px] object-cover sm:h-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
