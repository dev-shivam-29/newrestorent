import React, { useState } from "react";
import { Link } from "react-router-dom";

import pizzaImg from "/public/assets/pizza.jpg";
import menupizzaImg from "/public/assets/menupizza.jpg";

const About = () => {
  const [activeValue, setActiveValue] = useState(null);

  const values = [
    {
      title: "Fresh Ingredients",
      image: pizzaImg,
      description: "Sourced daily for authentic taste and freshness.",
    },
    {
      title: "Hospitality",
      image: menupizzaImg,
      description: "Warm service that makes every guest feel at home.",
    },
    {
      title: "Quality",
      image: pizzaImg,
      description: "Consistent standards in every dish and every detail.",
    },
    {
      title: "Ambience",
      image: menupizzaImg,
      description: "Elegant atmosphere for memorable dining moments.",
    },
    {
      title: "Sustainability",
      image: pizzaImg,
      description: "Responsible practices for a better tomorrow.",
    },
  ];

  const milestones = [
    { year: "2014", title: "Launch", note: "Started as a small family kitchen." },
    { year: "2018", title: "Growth", note: "Became a popular local restaurant." },
    { year: "2021", title: "Expansion", note: "Opened second branch." },
    { year: "2025", title: "Premium Dining", note: "Started chef experiences." },
  ];

  return (
    <div className="bg-amber-50 text-gray-800 min-h-screen">

      {/* HERO */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <img
          src={pizzaImg}
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt="Restaurant story"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-2xl mx-auto">
            Our story, passion and journey
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src={pizzaImg}
            alt="story"
            className="rounded-3xl h-[380px] w-full object-cover shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>

            <p className="text-gray-600 leading-relaxed mb-3">
              We started as a small kitchen with a big dream — to serve food made with heart.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Today we continue with better quality, warm service and unforgettable taste.
            </p>
          </div>

        </div>
      </section>

      {/* CHEF */}
      <section className="bg-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold">Founder & Head Chef</h2>
        <img
          src={menupizzaImg}
          className="w-32 h-32 mx-auto mt-6 rounded-full object-cover border-4 border-orange-500 shadow-lg hover:scale-105 transition duration-300"
          alt="chef"
        />
        <h3 className="mt-5 text-xl font-bold">Chef Marco Rodriguez</h3>
        <p className="text-orange-500 italic mt-2">
          "Every plate should feel personal, warm, and memorable."
        </p>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          15+ years experience in creating modern and traditional flavors with passion for excellence.
        </p>
      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Values
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {values.map((item) => (
            <div
              key={item.title}
              onClick={() => setActiveValue(item)}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                Click to view details
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {activeValue && (
        <div
          onClick={() => setActiveValue(null)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl transform transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {activeValue.title}
              </h2>
              <button
                onClick={() => setActiveValue(null)}
                className="text-gray-400 hover:text-gray-600 text-sm font-medium"
              >
                ✕
              </button>
            </div>
            <img
              src={activeValue.image}
              className="rounded-lg mt-4 h-52 w-full object-cover shadow-lg"
              alt="value"
            />
            <p className="text-gray-600 mt-4">
              {activeValue.description}
            </p>

            <button
              onClick={() => setActiveValue(null)}
              className="mt-5 w-full bg-orange-500 text-white py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* MILESTONES */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Journey
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {milestones.map((m, index) => (
            <div
              key={m.year}
              className="relative group p-6 border rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-4 left-4 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div className="text-center">
                <p className="text-orange-500 font-bold text-lg">{m.year}</p>
                <h3 className="font-semibold text-xl mt-2">{m.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{m.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Experience Our Story</h2>
        <p className="text-orange-100 mt-4 text-lg max-w-2xl mx-auto">
          Join us for an unforgettable dining experience where passion meets perfection
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/reservation"
            className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <span className="flex items-center">
              🍽 Reserve Your Table
            </span>
          </Link>
          <Link
            to="/menu"
            className="border-2 border-white bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <span className="flex items-center">
              🍽 View Our Menu
            </span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;