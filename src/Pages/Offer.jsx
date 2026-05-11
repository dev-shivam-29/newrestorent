import { Link } from "react-router-dom";
import { useState } from "react";
import offersData, { events } from "../data/offersData.js";

const Offers = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedOffer, setSelectedOffer] = useState(null);

  const filteredOffers = offersData.filter((offer) => {
    return (
      (filter === "All" || offer.type === filter) &&
      offer.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  const displayOffers = filteredOffers.slice(0, 3);

  return (
    <div className="bg-amber-50 text-gray-800 min-h-screen">

      {/* OFFER BANNER */}
      <section className="text-center py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">
          Offers & Events
        </h1>
        <p className="text-orange-100 mt-3">
          Exclusive deals, festive menus & live events
        </p>
      </section>

      {/* SEARCH */}
      <div className="px-6 mt-8">
        <input
          type="text"
          placeholder="Search offers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-xl border outline-none focus:border-orange-500 bg-white"
        />
      </div>

      {/* FILTER */}
      <div className="flex gap-3 px-6 mt-5 flex-wrap">
        {["All", "Discount", "Special"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-5 py-2 rounded-full font-semibold ${
              filter === type
                ? "bg-orange-500 text-white"
                : "bg-white border"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* OFFERS SECTION */}
      <section className="px-6 mt-10">
        <h2 className="text-2xl font-bold mb-6">Current Offers</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayOffers.map((offer) => (
            <div
              key={offer.id}
              onClick={() => setSelectedOffer(offer)}
              className="bg-white rounded-xl shadow hover:shadow-lg cursor-pointer overflow-hidden"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg">{offer.title}</h3>
                <p className="text-gray-500 text-sm">
                  {offer.description}
                </p>

                <p className="text-orange-500 mt-2 text-sm font-semibold">
                  {offer.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section className="px-6 mt-14">
        <h2 className="text-2xl font-bold mb-6">
          Upcoming Events
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg">{event.title}</h3>
                <p className="text-gray-500 text-sm">
                  {event.description}
                </p>

                <Link
                  to="/reservation"
                  className="inline-block mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg"
                >
                  Reserve Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mt-16 bg-orange-500 text-white text-center py-12 px-6">
        <h2 className="text-2xl font-bold">
          Don’t Miss Our Latest Offers
        </h2>

        <p className="mt-2 text-orange-100">
          Book your table now and enjoy premium dining experience
        </p>

        <Link
          to="/reservation"
          className="inline-block mt-6 bg-white text-orange-600 px-6 py-3 rounded-xl font-bold"
        >
          Reserve Table
        </Link>
      </section>

      {/* MODAL */}
      {selectedOffer && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center"
          onClick={() => setSelectedOffer(null)}
        >
          <div
            className="bg-white p-6 rounded-xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold">
              {selectedOffer.title}
            </h3>

            <p className="text-gray-500 mt-2">
              {selectedOffer.description}
            </p>

            <button
              onClick={() => setSelectedOffer(null)}
              className="mt-5 w-full bg-red-500 text-white py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;