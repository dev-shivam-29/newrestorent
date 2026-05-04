import React, { useState } from "react";
import { Link } from "react-router-dom";

import aboutHero from "../assets/images/about-hero.jpg";
import chefProfile from "../assets/images/chef-profile.jpg";
import freshIngredients from "../assets/images/fresh-ingredients.jpg";
import hospitality from "../assets/images/hospitality.jpg";
import quality from "../assets/images/quality.jpg";
import ambience from "../assets/images/ambience.jpg";
import sustainability from "../assets/images/fresh-juice.jpg";
import ambienceDining from "../assets/images/ambience-dining.jpg";
import ambienceTerrace from "../assets/images/ambience-terrace.jpg";

const About = () => {
  const [activeValue, setActiveValue] = useState(null);

  const values = [
    {
      title: "Fresh Ingredients",
      image: freshIngredients,
      description: "Sourced daily for authentic taste and freshness.",
    },
    {
      title: "Hospitality",
      image: hospitality,
      description: "Warm service that makes every guest feel at home.",
    },
    {
      title: "Quality",
      image: quality,
      description: "Consistent standards in every dish and every detail.",
    },
    {
      title: "Ambience",
      image: ambience,
      description: "Elegant atmosphere for memorable dining moments.",
    },
    {
      title: "Sustainability",
      image: sustainability,
      description: "Responsible practices for a better tomorrow.",
    },
  ];

  const milestones = [
    {
      year: "2014",
      title: "Launch Year",
      note: "Started as a 30-seat family kitchen.",
    },
    {
      year: "2018",
      title: "City Recognition",
      note: "Awarded one of the top dining spots.",
    },
    {
      year: "2021",
      title: "Second Branch",
      note: "Expanded with a new branch across town.",
    },
    {
      year: "2025",
      title: "Culinary Events",
      note: "Hosted seasonal chef-table experiences.",
    },
  ];

  const ambienceShowcase = [
    { image: ambienceDining, caption: "Live kitchen corner and warm lights" },
    { image: ambienceTerrace, caption: "Elegant seating for family dinners" },
    { image: ambienceDining, caption: "Casual lounge for quick bites" },
    { image: ambienceTerrace, caption: "Dessert bar with cozy evening vibe" },
  ];

  return (
    <div className="bg-amber-50 text-gray-800 min-h-screen">
      
      {/* HERO */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-orange-100 text-lg">Our story, values, and journey</p>
      </div>

      {/* BRAND STORY */}
      <section className="grid md:grid-cols-2 gap-10 px-6 md:px-10 py-20 max-w-6xl mx-auto items-center">
        <img
          src={aboutHero}
          alt="Restaurant story"
          className="w-full h-[350px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-300"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
          <p className="text-gray-600 leading-relaxed">
            We started as a small neighborhood kitchen with one promise: serve
            food made with heart. Over the years, we have grown into a trusted
            dining destination while keeping our original taste, quality, and
            family-first values alive in every dish.
          </p>
        </div>
      </section>

      {/* CHEF */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-600 mb-3">
            Meet Our
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Founder & Head Chef
          </h2>
          <img
            src={chefProfile}
            alt="Chef"
            className="rounded-full w-32 h-32 mx-auto object-cover border-4 border-orange-500 hover:scale-105 transition duration-300 shadow-lg"
          />
          <h3 className="text-2xl font-bold mt-5 text-gray-800">Chef Marco Rodriguez</h3>
          <p className="text-orange-500 italic mt-3">
            "Every plate should feel personal, warm, and memorable."
          </p>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Founder and head chef with 15+ years of experience, known for
            blending modern presentation with comforting, familiar flavors.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl text-center font-bold mb-10 text-gray-800">Our Values</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {values.map((item) => (
            <button
              key={item.title}
              onClick={() => setActiveValue(item)}
              className="bg-white p-4 rounded-xl shadow-md border border-gray-200 text-center cursor-pointer hover:shadow-xl transition"
            >
              <p className="text-base md:text-lg font-semibold text-gray-800">{item.title}</p>
            </button>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {activeValue && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
          onClick={() => setActiveValue(null)}
        >
          <div
            className="bg-white p-6 rounded-xl max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-bold text-orange-500">
                {activeValue.title}
              </h3>
              <button
                onClick={() => setActiveValue(null)}
                className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 transition"
              >
                Close
              </button>
            </div>
            <img
              src={activeValue.image}
              alt={activeValue.title}
              className="mt-4 w-full h-64 object-cover rounded-lg"
            />
            <p className="mt-4 text-gray-600">
              {activeValue.description}
            </p>
          </div>
        </div>
      )}

      {/* MILESTONES */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl text-center font-bold mb-10 text-gray-800">Milestones</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {milestones.map((item) => (
              <div key={item.year} className="bg-white shadow-md border border-gray-200 rounded-xl p-5 hover:shadow-lg transition">
                <p className="text-orange-500 font-bold text-xl">{item.year}</p>
                <h3 className="font-semibold text-lg text-gray-800 mt-2">{item.title}</h3>
                <p className="text-gray-500 mt-2">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIENCE */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl text-center font-bold mb-8 text-gray-800">Our Ambience</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ambienceShowcase.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.caption}
                className="rounded-xl h-48 w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <p className="text-white p-4 text-sm font-medium">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-center py-12 px-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white">
          Experience our story in person
        </h2>
        <p className="text-orange-100 mt-2">
          Reserve your table today and enjoy our signature dining experience.
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <Link
            to="/reservation"
            className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition"
          >
            Reserve Now
          </Link>
          <Link
            to="/menu"
            className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition"
          >
            View Menu
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
