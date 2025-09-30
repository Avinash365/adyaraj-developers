'use client';

import Link from 'next/link';

export default function GalleryHero() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-orange-500 via-yellow-400 to-orange-600 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/gallery/1.jpg"
          alt="Construction Site Gallery"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-yellow-900/60 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-8">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-xl mb-8 text-yellow-100 max-w-2xl mx-auto">
            Explore the progress and innovation in our construction projects. From residential complexes to commercial landmarks, witness quality and excellence in action!
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-sm text-yellow-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">20+</div>
              <div className="text-sm text-yellow-200">Active Sites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">10</div>
              <div className="text-sm text-yellow-200">Years of Experience</div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Link href="#projects" className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap">
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-orange-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-32 left-32 w-20 h-20 bg-red-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
    </div>
  );
}
