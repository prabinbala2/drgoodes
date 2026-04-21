import React from 'react';

export default function DownloadApp() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-script text-2xl text-primary mb-2">Get The App</p>
          <h2 className="font-display text-5xl mb-6">DOWNLOAD OUR APP</h2>
          <p className="text-gray-600 mb-8">Order pizza on-the-go, get exclusive deals, and earn rewards with every order.</p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-8 py-3 rounded-xl flex items-center gap-2">
              <span></span> App Store
            </button>
            <button className="bg-black text-white px-8 py-3 rounded-xl flex items-center gap-2">
              <span>▶</span> Google Play
            </button>
          </div>
        </div>
        <div className="bg-primary rounded-full w-64 h-64 mx-auto flex items-center justify-center">
          <span className="text-white font-display text-6xl">📱</span>
        </div>
      </div>
    </section>
  );
}