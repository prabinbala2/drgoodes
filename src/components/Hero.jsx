import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full mt-[72px] h-[70vh] min-h-[500px] overflow-visible bg-background px-4 sm:px-6 lg:px-8 pb-4 pt-4">
      <div className="relative w-full h-full overflow-hidden rounded-[20px] rounded-br-[120px] shadow-lg border border-brand-ink/10">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <iframe
            src="https://player.vimeo.com/video/1155803167?background=1&autoplay=1&loop=1&muted=1"
            className="absolute top-1/2 left-1/2 w-[200vw] h-[200vw] max-w-none transform -translate-x-1/2 -translate-y-1/2 aspect-video pointer-events-none"
            style={{ width: '150vh', minWidth: '100%', minHeight: '100%', height: '56.25vw' }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="dr goodes pizza reel"
          ></iframe>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/5 via-brand-ink/10 to-brand-ink/35"></div>

        <div className="absolute top-6 left-6 z-10 max-w-md rounded-[22px] bg-brand-cream/88 p-5 shadow-[12px_12px_0_rgba(17,17,17,0.12)] backdrop-blur-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.45em] text-primary">dr goodes</p>
          <h1 className="m-0 font-display text-3xl uppercase leading-[0.92] text-brand-ink sm:text-5xl">
            Fresh Dough. Hot Ovens. Big Flavour.
          </h1>
          <p className="mb-0 mt-3 text-sm font-medium leading-relaxed text-brand-ink/70 sm:text-base">
            Hand-stretched pizzas, creamy burrata finishes, crispy pepperoni, and neighbourhood favourites made for dine-in, pick-up, and delivery.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-transparent overflow-hidden py-4 z-10 pointer-events-none">
          <div className="marquee-track flex whitespace-nowrap text-white" style={{ animationDuration: '40s' }}>
            {[...Array(6)].map((_, i) => (
              <span key={i} className="font-display text-4xl sm:text-6xl tracking-widest uppercase mr-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                DELIVERY - PICK UP - BRICK OVEN PIZZA - BURRATA - PEPPERONI -
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute -bottom-[480px] -right-[30px] w-[380px] h-[380px] rounded-full bg-primary/14 blur-3xl"></div>
    </section>
  );
}
