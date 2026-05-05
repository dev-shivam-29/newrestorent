import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
const seatingOptions = [
  { name: "Indoor", img: "/images/indoor.jpg", desc: "Cozy air-conditioned seating" },
  { name: "Outdoor", img: "/images/outdoor.jpg", desc: "Open sky & fresh vibes" },
  { name: "Private", img: "/images/private.jpg", desc: "Perfect for couples" },
  { name: "Family", img: "/images/family.jpg", desc: "Spacious & comfortable" }
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
    setFormData({...formData, [e.target.name]: e.target.value});
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

  const faqs = [
    { q: "Can I cancel my booking?", a: "Yes, you can cancel your booking up to 2 hours before your reservation time." },
    { q: "Do you accommodate large groups?", a: "For groups larger than 8 people, please contact us directly for special arrangements." },
    { q: "Can we book for private events?", a: "Absolutely! We offer private event bookings. Contact us for details and availability." },
    { q: "What's the recommended arrival time?", a: "Please arrive 10-15 minutes before your reservation time." }
  ];

  return (
    <div className="bg-amber-50 text-gray-800 min-h-screen">

      {/* HERO HEADER */}
      <div className="h-[60vh] bg-cover bg-center relative"
        style={{backgroundImage:"url('/images/about-hero.jpg')"}}>
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold">Reserve Your Table</h1>
          <p className="mt-3 text-lg">Book your perfect dining experience</p>
        </div>
      </div>

      <div className="px-6 py-12 max-w-7xl mx-auto">

        {/* BOOKING STEPS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {["Choose Date","Select Time","Confirm"].map((s,i)=>(
            <div key={i} className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-2xl text-orange-500 font-bold">{i+1}</h3>
              <p className="mt-2 text-gray-700">{s}</p>
            </div>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 mb-12">

          {/* FORM */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-3">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Reservation Details</h2>

            <input name="name" placeholder="Full Name" onChange={handleChange}
              className="w-full p-3 border rounded"/>

            <input name="phone" placeholder="Phone Number" onChange={handleChange}
              className="w-full p-3 border rounded"/>

            <input name="email" placeholder="Email Address" onChange={handleChange}
              className="w-full p-3 border rounded"/>

            <input type="date" name="date" min={today}
              onChange={handleChange}
              className="w-full p-3 border rounded"/>

            <select name="time" onChange={handleChange}
              className="w-full p-3 border rounded">
              <option value="">Select Time</option>
              {availableSlots.map(t => (
                <option key={t} value={t}>{formatTime(t)}</option>
              ))}
            </select>

            {/* Guests Counter */}
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
              <span className="font-semibold">Number of Guests</span>
              <div className="flex gap-3 items-center">
                <button type="button" onClick={()=>changeGuests(-1)}
                  className="bg-orange-500 text-white w-8 h-8 rounded flex items-center justify-center">−</button>
                <span className="w-8 text-center font-bold">{formData.guests}</span>
                <button type="button" onClick={()=>changeGuests(1)}
                  className="bg-orange-500 text-white w-8 h-8 rounded flex items-center justify-center">+</button>
              </div>
            </div>

            {/* Seating Selection */}
            <div>
              <label className="block font-semibold mb-3">Preferred Seating</label>
              <select name="seating" value={formData.seating} onChange={handleChange}
                className="w-full p-3 border rounded">
                {seatingOptions.map(s => (
                  <option key={s.name} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>

            {/* Special Request */}
            <textarea name="specialRequest" placeholder="Special Requests (optional)"
              onChange={handleChange}
              className="w-full p-3 border rounded" rows="3"></textarea>

            <button className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 font-semibold">
              Reserve Table
            </button>
          </form>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* SEATING OPTIONS */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold mb-4">Seating Options</h3>
              <div className="grid grid-cols-2 gap-4">
                {seatingOptions.map(s => (
                  <div key={s.name}
                    onClick={()=>setFormData({...formData, seating:s.name})}
                    className={`cursor-pointer rounded-lg overflow-hidden border transition ${
                      formData.seating===s.name?"border-orange-500 border-2":"border-gray-200 hover:shadow"}`}>
                    <img src={s.img}
                      alt={s.name}
                      onError={(e)=> e.target.src="/images/indoor.jpg"}
                      className="h-32 w-full object-cover"/>
                    <div className="p-2">
                      <h4 className="font-semibold">{s.name}</h4>
                      <p className="text-sm text-gray-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* OPENING HOURS */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span className="font-semibold">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span className="font-semibold text-orange-500">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">10:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FAQ SECTION */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((item, i) => (
              <div key={i} className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-bold text-gray-800 mb-2">{item.q}</h4>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-orange-500 mb-2">Booking Confirmed! 🎉</h2>
            <p className="text-gray-600 mb-6">We look forward to your visit!</p>
            <button onClick={()=>setShowSuccess(false)}
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Reservation;