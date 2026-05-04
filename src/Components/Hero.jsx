import React from "react";
import { Link } from "react-router-dom"; // ✅ ADD THIS

const Hero = () => {
  return (
    <div className="h-[90vh] bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')] bg-cover bg-center flex items-center justify-center">
      <div className="bg-black/60 p-8 rounded text-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          Welcome to Our Restaurant
        </h1>
        <p className="text-gray-200 mb-6">
          Delicious food, cozy atmosphere & great experience
        </p>

        <Link
          to="/reservation"
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md transition"
        >
          Book a Table
        </Link>
      </div>
    </div>
  );
};

export default Hero;