import React, { useState, useEffect } from 'react';
import DrGoodesLogo from './DrGoodesLogo';

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About D.R.GOODES', href: '#about' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Our Locations', href: '#locations' },
  { label: 'Catering', href: '#' },
  { label: 'FAQs', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact Us', href: '#' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-background/95 text-foreground py-3 px-6 shadow-[0_12px_30px_rgba(17,17,17,0.08)] backdrop-blur-md z-50 border-b border-brand-ink/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div
            className="flex items-center gap-3 cursor-pointer group flex-1"
            onClick={() => setIsMenuOpen(true)}
          >
            <div className="flex flex-col gap-[5px] w-6">
              <span className="w-full h-[2px] bg-foreground transition-all group-hover:bg-primary"></span>
              <span className="w-full h-[2px] bg-foreground transition-all group-hover:bg-primary"></span>
              <span className="w-full h-[2px] bg-foreground transition-all group-hover:bg-primary"></span>
            </div>
            <span className="font-bold text-sm uppercase tracking-widest hidden sm:block group-hover:text-primary transition-colors select-none">
              Menu
            </span>
          </div>

          <div className="flex-1 flex justify-center">
            <a href="/" className="transition-transform duration-300 hover:scale-[1.02]">
              <DrGoodesLogo compact />
            </a>
          </div>

          <div className="flex-1 flex justify-end">
            <button className="bg-primary text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-md flex items-center gap-2 whitespace-nowrap border border-brand-ink/10">
              <svg className="w-4 h-4 fill-current hidden sm:block" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
              Order Pizza
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute top-0 left-0 h-full w-[300px] max-w-[80vw] bg-background shadow-2xl transition-transform duration-300 flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-brand-ink/10 flex justify-between items-center bg-brand-cream/80">
            <DrGoodesLogo />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 hover:text-primary transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-6 py-4 border-b border-brand-ink/5 uppercase tracking-widest text-sm font-bold text-foreground hover:text-primary hover:bg-brand-cream/40 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
