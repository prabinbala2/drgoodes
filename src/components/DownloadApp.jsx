import React from 'react';

export default function DownloadApp() {
  const photos = [
    {
      src: '/johnny-gio-burrata-queen.webp',
      alt: 'dr goodes burrata pizza fresh from the oven',
      className: 'md:col-span-2 md:row-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
      alt: 'pepperoni pizza close-up',
      className: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=900&q=80',
      alt: 'pizza slices on a wooden table',
      className: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=900&q=80',
      alt: 'brick oven pizza with basil and mozzarella',
      className: 'md:col-span-2',
    },
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-script text-2xl text-primary mb-2">From The Kitchen</p>
            <h2 className="font-display text-5xl uppercase text-brand-ink">Photos</h2>
            <p className="mt-4 text-brand-ink/70 text-sm sm:text-base leading-relaxed">
              A quick look at the pizzas, burrata finishes, bubbling cheese, and late-night favourites coming out of the oven at dr goodes.
            </p>
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Pizza Moments
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-4 auto-rows-[220px]">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`group relative overflow-hidden rounded-[28px] border border-brand-ink/10 bg-brand-cream shadow-[12px_12px_0_rgba(17,17,17,0.08)] ${photo.className}`.trim()}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/35 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
