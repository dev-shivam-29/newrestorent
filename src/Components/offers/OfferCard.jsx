const OfferCard = ({ offer, onView, onGrab }) => {
  return (
    <div className="bg-[#161616] rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 border border-orange-500/20 hover:shadow-orange-500/20">
      
      <div className="relative">
        <img src={offer.image} className="h-56 w-full object-cover" />
        
        {/* Discount Badge */}
        <span className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {offer.discount}
        </span>
        
        {/* Popular Badge */}
        {offer.popular && (
          <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 text-xs rounded">
            🔥 Popular
          </span>
        )}
      </div>

      <div className="p-4">
        <h2 className="font-bold text-lg text-white">{offer.title}</h2>
        <p className="text-gray-400 text-sm mt-1">{offer.description}</p>

        <div className="flex items-center justify-between mt-3">
          <p className="text-orange-400 text-sm">🍽 {offer.type}</p>
          <p className="text-sm text-gray-400">⭐ {offer.rating}</p>
        </div>

        <div className="flex gap-2 mt-4">
          <button 
            onClick={onView} 
            className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white px-3 py-2 rounded transition"
          >
            View Details
          </button>
          <button 
            onClick={onGrab} 
            className="flex-1 bg-orange-600 hover:bg-orange-500 text-white px-3 py-2 rounded transition"
          >
            Grab Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
