// import React from "react";
// import { Link } from "react-router-dom";
// import aboutHero from "../assets/images/pizza.jpg";
// import chefProfile from "../assets/images/pizza.jpg";
// import ambienceDining from "../assets/images/bruschetta.jpg";
// import ambienceTerrace from "../assets/images/caesar-salad.jpg";
// import freshIngredientsImg from "../assets/images/bruschetta.jpg";
// import hospitalityImg from "../assets/images/caesar-salad.jpg";
// import qualityImg from "../assets/images/pizza.jpg";
// import ambienceValueImg from "../assets/images/dessert.jpg";
// import sustainabilityImg from "../assets/images/fresh-juice.jpg";

// const About = () => {
//   const [activeValue, setActiveValue] = React.useState(null);
//   const values = [
//     {
//       title: "Fresh Ingredients",
//       image: freshIngredientsImg,
//       description: "Sourced daily for authentic taste and freshness.",
//     },
//     {
//       title: "Hospitality",
//       image: hospitalityImg,
//       description: "Warm service that makes every guest feel at home.",
//     },
//     {
//       title: "Quality",
//       image: qualityImg,
//       description: "Consistent standards in every dish and every detail.",
//     },
//     {
//       title: "Ambience",
//       image: ambienceValueImg,
//       description: "Elegant atmosphere for memorable dining moments.",
//     },
//     {
//       title: "Sustainability",
//       image: sustainabilityImg,
//       description: "Responsible practices for a better tomorrow.",
//     },
//   ];
//   const milestones = [
//     {
//       year: "2014",
//       title: "Launch Year",
//       note: "Started as a 30-seat family kitchen.",
//     },
//     {
//       year: "2018",
//       title: "City Recognition",
//       note: "Awarded one of the top dining spots.",
//     },
//     {
//       year: "2021",
//       title: "Second Branch",
//       note: "Expanded with a new branch across town.",
//     },
//     {
//       year: "2025",
//       title: "Culinary Events",
//       note: "Hosted seasonal chef-table experiences.",
//     },
//   ];
//   const ambienceShowcase = [
//     { image: ambienceDining, caption: "Live kitchen corner and warm lights" },
//     { image: ambienceTerrace, caption: "Elegant seating for family dinners" },
//     { image: ambienceDining, caption: "Casual lounge for quick bites" },
//     { image: ambienceTerrace, caption: "Dessert bar with cozy evening vibe" },
//   ];
//   const signatureImages = ambienceShowcase.map((item) => item.image);
//   const signatureTransforms = [
//     "rotate(6deg) translate(-140px)",
//     "rotate(2deg) translate(-60px)",
//     "rotate(-2deg) translate(60px)",
//     "rotate(-6deg) translate(140px)",
//   ];
//   const quickLinks = [
//     { label: "Home", to: "/" },
//     { label: "Menu", to: "/menu" },
//     { label: "About", to: "/about" },
//     { label: "Reservation", to: "/reservation" },
//     { label: "Contact", to: "/contact" },
//   ];

// const About = () => {
//   const [activeValue, setActiveValue] = React.useState(null);
  
//   return (
//     <div className="bg-amber-50 text-gray-800 min-h-screen">
//       {/* BRAND STORY */}
//       <section className="grid md:grid-cols-2 gap-10 px-6 md:px-10 py-20 max-w-6xl mx-auto items-center">
//         <img
//           src={aboutHero}
//           className="w-full h-[350px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-300"
//           alt="Restaurant story"
//         />
//         <div>
//           <h2 className="text-3xl font-bold text-gray-800">Our Journey</h2>
//           <p className="text-gray-600 leading-relaxed">
//             We started as a small neighborhood kitchen with one promise: serve
//             food made with heart. Over the years, we have grown into a trusted
//             dining destination while keeping our original taste, quality, and
//             family-first values alive in every dish.
//           </p>
//         </div>
//       </section>

//       {/* FOUNDER / CHEF */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <p className="text-sm font-semibold uppercase tracking-wider text-orange-600 mb-3">
//             Meet Our
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//             Founder & Head Chef
//           </h2>
//           <img
//             src={chefProfile}
//             className="rounded-full w-32 h-32 mx-auto object-cover shadow-lg border-4 border-orange-500 hover:scale-105 transition duration-300"
//             alt="Founder chef portrait"
//           />
//           <h3 className="text-2xl font-bold mt-5 text-gray-800">Chef Marco Rodriguez</h3>
//           <p className="text-orange-500 mt-3 italic">
//             "Every plate should feel personal, warm, and memorable."
//           </p>
//           <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
//             Founder and head chef with 15+ years of experience, known for
//             blending modern presentation with comforting, familiar flavors.
//           </p>
//         </div>
//       </section>

//       {/* VALUES */}
//       <div className="max-w-6xl mx-auto py-16 px-6">
//         <h2 className="text-3xl text-center font-semibold mb-10 text-gray-800">Our Values</h2>
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//           {values.map((item) => (
//             <button
//               key={item.title}
//               onClick={() => setActiveValue(item)}
//               className="bg-white p-4 rounded-xl shadow-md text-center cursor-pointer hover:shadow-xl transition"
//             >
//               <p className="text-base md:text-lg font-semibold">{item.title}</p>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* VALUES POPUP */}
//       {activeValue && (
//         <div
//           className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
//           onClick={() => setActiveValue(null)}
//         >
//           <div
//             className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl border border-gray-200"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-start justify-between gap-4">
//               <h3 className="text-2xl font-bold text-orange-500">
//                 {activeValue.title}
//               </h3>
//               <button
//                 onClick={() => setActiveValue(null)}
//                 className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 transition"
//               >
//                 Close
//               </button>
//             </div>
//             <img
//               src={activeValue.image}
//               alt={activeValue.title}
//               className="mt-4 h-64 w-full rounded-xl object-cover"
//             />
//             <p className="mt-4 text-gray-500">{activeValue.description}</p>
//           </div>
//         </div>
//       )}

//       {/* MILESTONE TIMELINE */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl text-center font-semibold mb-10 text-gray-800">
//             Milestones
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             {milestones.map((item) => (
//               <div
//                 key={item.year}
//                 className="rounded-2xl bg-white p-5 border border-gray-200 shadow-md hover:shadow-xl transition duration-300"
//               >
//                 <p className="text-orange-500 font-bold text-xl">{item.year}</p>
//                 <p className="text-lg font-semibold mt-2 text-gray-800">{item.title}</p>
//                 <p className="text-gray-500 mt-2">{item.note}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* AMBIENCE SHOWCASE */}
//       <div className="max-w-6xl mx-auto px-6 py-20">
//         <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Our Ambience</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {ambienceShowcase.map((item, index) => (
//             <div key={index} className="group relative overflow-hidden rounded-xl">
//               <img
//                 src={item.image}
//                 alt={item.caption}
//                 className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
//                 <p className="text-white p-4 text-sm font-medium">{item.caption}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* CTA */}
//       <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-center py-12 px-6 shadow-lg">
//         <h2 className="text-2xl font-semibold text-white">Experience our story in person</h2>
//         <p className="text-orange-100 mt-2">
//           Reserve your table today and enjoy our signature dining experience.
//         </p>
//         <Link
//           to="/reservation"
//           className="inline-block bg-white text-orange-600 px-6 py-2 mt-4 rounded-lg shadow hover:bg-orange-50 hover:scale-105 transition duration-300"
//         >
//           Reserve Your Table
//         </Link>
//       </section>
//     </div>
//   );
// };
// }

// export default About;
import React, { useState } from "react";
import { Link } from "react-router-dom";

import aboutHero from "../assets/images/pizza.jpg";
import chefProfile from "../assets/images/pizza.jpg";
import ambienceDining from "../assets/images/bruschetta.jpg";
import ambienceTerrace from "../assets/images/caesar-salad.jpg";
import freshIngredientsImg from "../assets/images/bruschetta.jpg";
import hospitalityImg from "../assets/images/caesar-salad.jpg";
import qualityImg from "../assets/images/pizza.jpg";
import ambienceValueImg from "../assets/images/dessert.jpg";
import sustainabilityImg from "../assets/images/fresh-juice.jpg";

const About = () => {
  const [activeValue, setActiveValue] = useState(null);

  const values = [
    {
      title: "Fresh Ingredients",
      image: freshIngredientsImg,
      description: "Sourced daily for authentic taste and freshness.",
    },
    {
      title: "Hospitality",
      image: hospitalityImg,
      description: "Warm service that makes every guest feel at home.",
    },
    {
      title: "Quality",
      image: qualityImg,
      description: "Consistent standards in every dish and every detail.",
    },
    {
      title: "Ambience",
      image: ambienceValueImg,
      description: "Elegant atmosphere for memorable dining moments.",
    },
    {
      title: "Sustainability",
      image: sustainabilityImg,
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
      
      {/* BRAND STORY */}
      <section className="grid md:grid-cols-2 gap-10 px-6 md:px-10 py-20 max-w-6xl mx-auto items-center">
        <img
          src={aboutHero}
          alt="Restaurant story"
          className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold">Our Journey</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            We started as a small neighborhood kitchen with one promise: serve
            food made with heart.
          </p>
        </div>
      </section>

      {/* CHEF */}
      <section className="py-20 px-6 bg-white text-center">
        <img
          src={chefProfile}
          alt="Chef"
          className="rounded-full w-32 h-32 mx-auto object-cover border-4 border-orange-500"
        />
        <h3 className="text-2xl font-bold mt-5">Chef Marco Rodriguez</h3>
        <p className="text-orange-500 italic mt-2">
          "Every plate should feel personal."
        </p>
      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl text-center font-bold mb-10">Our Values</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {values.map((item) => (
            <button
              key={item.title}
              onClick={() => setActiveValue(item)}
              className="bg-white p-4 rounded-xl shadow"
            >
              {item.title}
            </button>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {activeValue && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center"
          onClick={() => setActiveValue(null)}
        >
          <div
            className="bg-white p-6 rounded-xl max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-orange-500">
              {activeValue.title}
            </h3>

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
          <h2 className="text-3xl text-center font-bold mb-10">Milestones</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {milestones.map((item) => (
              <div key={item.year} className="bg-white shadow rounded-xl p-5">
                <p className="text-orange-500 font-bold">{item.year}</p>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIENCE */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl text-center font-bold mb-8">Our Ambience</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ambienceShowcase.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={item.caption}
                className="rounded-xl h-48 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-center py-12">
        <h2 className="text-2xl font-bold text-white">
          Experience our story in person
        </h2>

        <Link
          to="/reservation"
          className="inline-block mt-4 bg-white text-orange-500 px-6 py-3 rounded-lg"
        >
          Reserve Your Table
        </Link>
      </section>
    </div>
  );
};

export default About;
