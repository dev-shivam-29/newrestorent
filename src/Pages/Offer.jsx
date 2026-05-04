
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import offersData, { events } from "../data/offersData.js";

const Offers = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedOffer, setSelectedOffer] = useState(null);

  /* Countdown Timer */
  useEffect(() => {
    const timer = setInterval(() => {
      const updated = {};
      offersData.forEach((offer) => {
        const diff = offer.endTime - new Date().getTime();
        if (diff > 0) {
          updated[offer.id] = {
            h: Math.floor(diff / (1000 * 60 * 60)),
            m: Math.floor((diff / (1000 * 60)) % 60),
          };
        }
      });
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* Filter + Search */
  const filteredOffers = offersData.filter((offer) => {
    return (
      (filter === "All" || offer.type === filter) &&
      offer.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  // ✅ Always show only 3 offers
  const displayOffers = filteredOffers.slice(0, 3);

  return (
    <>
      <div className="bg-amber-50 text-gray-800">

        {/* Banner */}
        <section className="text-center py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <h1 className="text-5xl font-bold text-white">
            Exclusive Offers
          </h1>
          <p className="text-orange-100 mt-3 text-lg">
            Discover amazing deals & events
          </p>
        </section>

        {/* Image Section */}
        <section
          className="h-64 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')",
          }}
        ></section>

        {/* Main Content */}
        <div className="w-full px-6 py-12">

          {/* Search */}
          <input
            type="text"
            placeholder="Search offers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-6 p-3 rounded-lg bg-white border border-gray-300 outline-none focus:border-orange-500 shadow-sm"
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["All", "Discount", "Special"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full font-semibold ${
                  filter === type
                    ? "bg-orange-500 text-white"
                    : "bg-white border"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Offers Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedOffer(offer)}
              >
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-60 w-full object-cover rounded-t-xl"
                />

                <div className="p-4">
                  <h3 className="font-bold text-lg">{offer.title}</h3>
                  <p className="text-sm text-gray-500">
                    {offer.description}
                  </p>

                  {timeLeft[offer.id] && (
                    <p className="text-orange-500 text-sm mt-2">
                      ⏰ {timeLeft[offer.id].h}h {timeLeft[offer.id].m}m left
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Events Section */}
          <section className="mt-12">
            <h2 className="text-3xl text-center font-bold mb-8">
              Upcoming Events
            </h2>

            {/* ✅ 3 cards per row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-60 w-full object-cover"
                  />

                  <div className="p-5">
                    <h3 className="font-bold text-xl">
                      {event.title}
                    </h3>
                    <p className="text-gray-500">
                      {event.description}
                    </p>

                    <Link
                      to="/reservation"
                      className="block mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 text-center rounded"
                    >
                      Reserve
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Modal */}
      {selectedOffer && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full">

            <h3 className="text-2xl font-bold">
              {selectedOffer.title}
            </h3>

            <p className="text-gray-500 mt-2">
              {selectedOffer.description}
            </p>

            <button
              onClick={() => setSelectedOffer(null)}
              className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Offers;