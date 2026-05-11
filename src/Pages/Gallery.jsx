
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryData = [
    {
      title: "🍔 Food Gallery",
      type: "food",
      images: [
        "/public/assets/pizza.jpg",
        "/public/assets/menupizza.jpg",
        "/public/assets/pasta.jpg",
        "/public/assets/burger.jpg",
        "/public/assets/salad.jpg",
        "/public/assets/soup.jpg",
      ],
    },
    {
      title: "🏠 Ambience Gallery",
      type: "ambience",
      images: [
        "/public/assets/ambience-dining.jpg",
        "/public/assets/ambience-terrace.jpg",
        "/public/assets/ambience-2.jpg",
        "/public/assets/ambience-3.jpg",
        "/public/assets/luxury-dining.jpg",
      ],
    },
    {
      title: "🎉 Event Moments",
      type: "events",
      images: [
        "/public/assets/party.jpg",
        "/public/assets/celebration.jpg",
        "/public/assets/catering.jpg",
        "/public/assets/wedding.jpg",
      ],
    },
  ];

  // ✅ ESC key close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const renderImages = (images, type) =>
    images.map((img, index) => (
      <div
        key={index}
        className="relative group cursor-pointer overflow-hidden rounded-md"
        onClick={() => setSelectedImage(img)}
      >
        <img
          src={img}
          alt={`${type}-image-${index}`} // ✅ better alt
          loading="lazy" // ✅ performance
          className="h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <p className="text-white text-sm">View Image</p>
        </div>
      </div>
    ));

  return (
    <div className="bg-amber-50 text-gray-800 min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 md:px-6 lg:px-8 py-20 text-center">
        <p className="text-orange-100 uppercase text-xs tracking-widest font-semibold">
          Gallery
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
          Moments at Smart Restaurant
        </h1>

        <p className="mt-4 text-orange-100 max-w-xl mx-auto text-lg">
          Explore our finest dishes, ambience, and special moments.
        </p>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        {galleryData.map((section) => (
          <div key={section.title} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {renderImages(section.images, section.type)}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 p-12 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Book a Dining Experience
          </h3>
          <p className="mt-3 text-orange-100 text-lg">
            Reserve your table for special moments.
          </p>

          <Link
            to="/reservation"
            className="inline-block mt-6 rounded-lg bg-white px-8 py-3 font-semibold text-orange-600 hover:bg-orange-50 transition shadow-md"
          >
            Book Experience
          </Link>
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className="max-h-[90%] max-w-full rounded-xl"
            onClick={(e) => e.stopPropagation()} // ✅ fix close bug
          />

          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;