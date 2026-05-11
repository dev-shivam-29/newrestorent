import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
const seatingOptions = [
  { name: "Indoor", img: "/assets/ambience-dining.jpg", desc: "Cozy air-conditioned seating" },
  { name: "Outdoor", img: "/assets/ambience-terrace.jpg", desc: "Open sky & fresh vibes" },
  { name: "Private", img: "/assets/ambience-2.jpg", desc: "Perfect for couples" },
  { name: "Family", img: "/assets/ambience-3.jpg", desc: "Spacious & comfortable" }
  
];

const allTimeSlots = ["11:00","12:00","13:00","18:00","19:00","20:00"];

const formatTime = (t) => {
  const [h, m] = t.split(":");
  const hour = parseInt(h);
  return `${hour > 12 ? hour - 12 : hour}:${m} ${hour >= 12 ? "PM" : "AM"}`;
};

const Reservation = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: 2,
    seating: "Indoor",
    specialRequest: params.get("offer") || ""
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const availableSlots = useMemo(() => {
    if (formData.date !== today) return allTimeSlots;
    const now = new Date().getHours();
    return allTimeSlots.filter(t => parseInt(t) > now);
  }, [formData.date, today]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const changeGuests = (val) => {
    setFormData(prev => ({
      ...prev,
      guests: Math.max(1, prev.guests + val)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  // ✅ FIXED FAQ (missing tha)
  const faqs = [
    { q: "Can I cancel my booking?", a: "Yes, up to 2 hours before reservation." },
    { q: "Large groups allowed?", a: "Yes, contact us for arrangements." },
    { q: "Private events?", a: "Yes, available on request." },
    { q: "Arrival time?", a: "Please arrive 10–15 minutes early." }
  ];

  return (
    <div className="bg-amber-50 text-gray-800 min-h-screen">

      {/* HERO */}
      <div
        className="h-[60vh] bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(/assets/menubackground.jpg)` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 flex flex-col justify-center items-center text-white px-6">
          {/* Animated Content */}
          <div className="relative z-10 max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg animate-fade-in">
              Reserve Your Table
            </h1>
            <p className="mt-3 text-orange-100 text-lg animate-slide-up">
              Book your perfect dining experience with ease
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {["Choose Date", "Select Time", "Confirm Booking"].map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <div className="text-orange-500 text-3xl font-black">
                {i + 1}
              </div>
              <p className="mt-2 font-semibold">{s}</p>
            </div>
          ))}
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl p-8 space-y-4"
          >
            <h2 className="text-2xl font-bold">Reservation Details</h2>

            <input name="name" placeholder="Full Name" onChange={handleChange}
              className="w-full p-3 rounded-xl border" />

            <input name="phone" placeholder="Phone Number" onChange={handleChange}
              className="w-full p-3 rounded-xl border" />

            <input name="email" placeholder="Email Address" onChange={handleChange}
              className="w-full p-3 rounded-xl border" />

            <input type="date" name="date" min={today}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border" />

            <select name="time" onChange={handleChange}
              className="w-full p-3 rounded-xl border">
              <option value="">Select Time</option>
              {availableSlots.map(t => (
                <option key={t} value={t}>{formatTime(t)}</option>
              ))}
            </select>

            {/* GUESTS */}
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
              <span>Guests</span>
              <div className="flex items-center gap-3">
                <button type="button" onClick={() => changeGuests(-1)}
                  className="w-8 h-8 bg-orange-500 text-white rounded-full">-</button>
                <span>{formData.guests}</span>
                <button type="button" onClick={() => changeGuests(1)}
                  className="w-8 h-8 bg-orange-500 text-white rounded-full">+</button>
              </div>
            </div>

            {/* SEATING */}
            <select name="seating" value={formData.seating}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border">
              {seatingOptions.map(s => (
                <option key={s.name} value={s.name}>{s.name}</option>
              ))}
            </select>

            <textarea name="specialRequest"
              placeholder="Special Requests"
              onChange={handleChange}
              className="w-full p-3 rounded-xl border"
              rows="3"
            />

            <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold">
              Reserve Table
            </button>
          </form>

          {/* RIGHT */}
          <div className="space-y-6">

            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="font-bold mb-4">Seating Options</h3>

              <div className="grid grid-cols-2 gap-4">
                {seatingOptions.map(s => (
                  <div
                    key={s.name}
                    onClick={() => setFormData({ ...formData, seating: s.name })}
                    className="cursor-pointer border rounded-xl overflow-hidden"
                  >
                    <img src={s.img} className="h-24 w-full object-cover" />
                    <div className="p-2">
                      <p className="font-semibold">{s.name}</p>
                      <p className="text-xs text-gray-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="font-bold mb-4">Opening Hours</h3>
              <p>11 AM - 11 PM (Daily)</p>
            </div>

          </div>
        </div>

        {/* FAQ */}
        <div className="mt-14 bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8">FAQs</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold">{f.q}</p>
                <p className="text-sm text-gray-500">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SUCCESS */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-orange-500">
              Booking Confirmed 🎉
            </h2>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;