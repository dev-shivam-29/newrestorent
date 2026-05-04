
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryData = [
    {
      title: "🍔 Food Gallery",
      type: "food",
      images: [
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200",
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200",
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1200",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200",
      ],
    },
    {
      title: "🏠 Ambience Gallery",
      type: "ambience",
      images: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200",
        "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1200",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
      ],
    },
    {
      title: "🎉 Event Moments",
      type: "events",
      images: [
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200",
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200",
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200",
        "https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=1200",
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