import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(180,75,44,0.28),transparent_40%)]"></div>
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 select-none opacity-[0.06]">
        <h2 className="font-logo text-[13vw] whitespace-nowrap m-0 p-0 transform -translate-y-1/4 text-brand-gold">
          D.R.GOODES
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 relative z-10">
        <div className="md:col-span-1">
          <img
            src="/logo1.png"
            alt="dr goodes"
            className="h-16 w-auto sm:h-20"
          />
          <p className="text-sm opacity-70 leading-relaxed font-medium mt-6 max-w-xs">
            Hand-stretched dough, authentic brick-oven heat, premium toppings, and pizzas made to travel just as well as they dine in.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-primary">Discover</h4>
          <ul className="space-y-3 text-sm font-semibold opacity-90">
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#menu" className="hover:text-primary transition-colors">Our Menu</a></li>
            <li><a href="#locations" className="hover:text-primary transition-colors">Locations</a></li>
            <li><a href="#catering" className="hover:text-primary transition-colors">Catering</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-primary">Delivery Partners</h4>
          <ul className="space-y-3 text-sm font-semibold opacity-90">
            <li><a href="https://www.ubereats.com/" className="hover:text-primary transition-colors">Uber Eats</a></li>
            <li><a href="https://www.menulog.com.au/" className="hover:text-primary transition-colors">MenuLog</a></li>
            <li><a href="https://www.doordash.com/" className="hover:text-primary transition-colors">DoorDash</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-primary">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://x.com/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="https://www.instagram.com/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.facebook.com/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm opacity-50 relative z-10 font-medium">
        <p>© {new Date().getFullYear()} dr goodes. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
