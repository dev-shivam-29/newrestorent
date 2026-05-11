import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Glow Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        
        {/* Tagline */}
        <span className="inline-block mb-4 px-4 py-1 text-xs tracking-widest uppercase text-orange-400 border border-orange-400/40 rounded-full backdrop-blur-sm">
          Fine Dining Experience
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Discover the Taste of
          <span className="block text-orange-500">Luxury Dining</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          Indulge in handcrafted dishes, elegant ambience, and unforgettable
          flavors curated by our expert chefs.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          
          <Link
            to="/reservation"
            className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 transition-all duration-300"
          >
            Reserve Table
          </Link>

          <Link
            to="/menu"
            className="px-8 py-3 border border-white/40 text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Explore Menu
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 flex justify-center gap-10 text-white">
          <div>
            <p className="text-2xl font-bold text-orange-400">400+</p>
            <p className="text-sm text-gray-300">Happy Guests</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-400">80+</p>
            <p className="text-sm text-gray-300">Dishes</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-400">9+</p>
            <p className="text-sm text-gray-300">Years</p>
          </div>
        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;