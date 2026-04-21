import React from 'react';
import { REVIEWS } from '../mock/mock';

function StarRating({ stars }) {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < stars ? 'text-[#FFB800] text-lg' : 'text-gray-500 text-lg'}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-16 px-6 bg-white overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {REVIEWS.slice(0, 4).map((review) => (
            <div key={review.id} className="flex flex-col items-center">
              
              {/* Speech Bubble Card */}
              <div className="bg-[#3a416a] text-white rounded-lg p-6 w-full relative mb-12 flex-1 shadow-lg">
                <StarRating stars={review.stars} />
                <p className="text-sm leading-relaxed opacity-90 line-clamp-4">
                  "{review.body}"
                </p>

                {/* Speech Bubble Tail pointing down */}
                <div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0" 
                  style={{
                    borderLeft: '16px solid transparent',
                    borderRight: '16px solid transparent',
                    borderTop: '16px solid #3a416a'
                  }}
                ></div>
              </div>
              
              {/* Reviewer Details (Outside the bubble, under the tail) */}
              <div className="text-center flex flex-col items-center gap-1 w-full">
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
                    {/* Fake Google Logo */}
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <span className="font-bold text-foreground text-xs">{review.author}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="text-[10px] text-gray-500">{review.daysAgo}</span>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
        {/* Buttons below reviews */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <button className="border-2 border-primary text-primary px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm">
            Find your store
          </button>
          <button className="bg-primary text-white border-2 border-primary px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-sm">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
            Order Now
          </button>
        </div>
        
      </div>
    </section>
  );
}