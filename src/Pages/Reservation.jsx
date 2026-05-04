
// import { useState } from "react";
// import { useLocation } from "react-router-dom";

// const seatingOptions = ["Indoor", "Outdoor", "Private", "Family"];

// const Reservation = () => {

//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const offerFromUrl = params.get("offer");

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     date: "",
//     time: "",
//     guests: 2,
//     seating: "Indoor",
//     specialRequest: offerFromUrl || "",
//   });

//   const [showSuccess, setShowSuccess] = useState(false);
//   const [error, setError] = useState("");

//   const today = new Date().toISOString().split("T")[0];

//   const timeSlots = [
//     "11:00 AM","12:00 PM","01:00 PM",
//     "06:00 PM","07:00 PM","08:00 PM"
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const changeGuests = (val) => {
//     setFormData(prev => ({
//       ...prev,
//       guests: Math.max(1, prev.guests + val),
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.phone || !formData.date || !formData.time) {
//       setError("Please fill all required fields");
//       return;
//     }

//     if (!/^[6-9]\d{9}$/.test(formData.phone)) {
//       setError("Enter valid phone number");
//       return;
//     }

//     setShowSuccess(true);
//   };

//   return (
//     <div className="bg-gradient-to-br from-orange-50 to-white text-gray-800 min-h-screen py-12">
//       <div className="max-w-2xl mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Reservation</h1>
//         <p className="text-gray-600 text-center mb-8">
//           Book your table for an unforgettable dining experience
//         </p>
        
//         {offerFromUrl && (
//           <div className="mb-6 p-4 bg-orange-100 border border-orange-300 rounded-lg">
//             <p className="text-orange-600 text-sm font-semibold">🎉 Special Offer Applied:</p>
//             <p className="text-gray-800 font-semibold">{offerFromUrl}</p>
//           </div>
//         )}
        
//         <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
//           <h2 className="text-2xl font-semibold mb-6 text-gray-800">Reservation Form</h2>
          
//           {error && (
//             <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg text-red-600">
//               {error}
//             </div>
//           )}
          
//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-2 text-gray-700">Name *</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg bg-white border border-gray-300 outline-none focus:border-orange-500 text-gray-800"
//                 placeholder="Your name"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium mb-2 text-gray-700">Phone *</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg bg-white border border-gray-300 outline-none focus:border-orange-500 text-gray-800"
//                 placeholder="Your phone number"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg bg-white border border-gray-300 outline-none focus:border-orange-500 text-gray-800"
//                 placeholder="Your email (optional)"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium mb-2 text-gray-700">Date *</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 min={today}
//                 className="w-full p-3 rounded-lg bg-white border border-gray-300 outline-none focus:border-orange-500 text-gray-800"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium mb-2 text-gray-700">Time *</label>
//               <select
//                 name="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg bg-white border border-gray-300 outline-none focus:border-orange-500 text-gray-800"
//               >
//                 <option value="">Select time</option>
//                 {timeSlots.map((slot) => (
//                   <option key={slot} value={slot}>{slot}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium mb-2 text-gray-700">Guests</label>
//               <div className="flex items-center gap-4">
//                 <button
//                   type="button"
//                   onClick={() => changeGuests(-1)}
//                   className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-semibold"
//                 >
//                   -
//                 </button>
//                 <span className="text-xl font-semibold text-gray-800 w-8 text-center">{formData.guests}</span>
//                 <button
//                   type="button"
//                   onClick={() => changeGuests(1)}
//                   className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-semibold"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium mb-2 text-gray-700">Seating Preference</label>
//               <select
//                 name="seating"
//                 value={formData.seating}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg bg-white border border-gray-300 outline-none focus:border-orange-500 text-gray-800"
//               >
//                 {seatingOptions.map((option) => (
//                   <option key={option} value={option}>{option}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
          
//           <div className="mt-4">
//             <label className="block text-sm font-medium mb-2 text-gray-700">Special Request</label>
//             <textarea
//               name="specialRequest"
//               value={formData.specialRequest}
//               onChange={handleChange}
//               rows="3"
//               className="w-full p-3 rounded-lg bg-white border border-gray-300 outline-none focus:border-orange-500 text-gray-800"
//               placeholder="Any special requests or allergies"
//             />
//           </div>
          
//           <button
//             type="submit"
//             className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
//           >
//             Reserve Table
//           </button>
//         </form>
        
//         {showSuccess && (
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl text-center">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
// //               </div>
// //               <h2 className="text-2xl font-bold text-gray-800 mb-2">Reservation Confirmed!</h2>
// //               <p className="text-gray-600 mb-6">
// //                 We've received your reservation request. We'll contact you shortly to confirm.
// //               </p>
// //               <button
// //                 onClick={() => setShowSuccess(false)}
// //                 className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
// //               >
// //                 Close
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Reservation;
// import { useState } from "react";
// import { useLocation } from "react-router-dom";

// const seatingOptions = ["Indoor", "Outdoor", "Private", "Family"];

// const Reservation = () => {

//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const offerFromUrl = params.get("offer");

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     date: "",
//     time: "",
//     guests: 2,
//     seating: "Indoor",
//     specialRequest: offerFromUrl || "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [error, setError] = useState("");
//   const [activeFAQ, setActiveFAQ] = useState(null);

//   const today = new Date().toISOString().split("T")[0];

//   const timeSlots = ["11:00 AM","12:00 PM","01:00 PM","06:00 PM","07:00 PM","08:00 PM"];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const changeGuests = (val) => {
//     setFormData(prev => ({
//       ...prev,
//       guests: Math.max(1, prev.guests + val),
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.phone || !formData.date || !formData.time) {
//       setError("Please fill all required fields");
//       return;
//     }

//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setShowSuccess(true);
//     }, 1500);
//   };

//   const faqs = [
//     { q: "Can I cancel my reservation?", a: "Yes, you can cancel anytime before your booking." },
//     { q: "Do you accept large groups?", a: "Yes, please contact us for large bookings." },
//     { q: "Timing policy?", a: "Arrive 10 minutes early for smooth seating." }
//   ];

//   return (
//     <div className="bg-gradient-to-br from-orange-50 to-white min-h-screen">

//       {/* HERO */}
//       <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-16">
//         <h1 className="text-5xl font-bold mb-4">Reserve Your Table 🍽️</h1>
//         <p>Experience fine dining like never before</p>
//       </div>

//       <div className="max-w-3xl mx-auto px-4 py-12">

//         {/* FORM */}
//         <form onSubmit={handleSubmit}
//           className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">

//           <h2 className="text-2xl font-bold mb-6">Reservation Form</h2>

//           {error && <p className="text-red-500 mb-4">{error}</p>}

//           <div className="grid md:grid-cols-2 gap-4">

//             <input name="name" placeholder="Full Name *"
//               onChange={handleChange}
//               className="p-3 border rounded-lg focus:border-orange-500"/>

//             <input name="phone" placeholder="Phone *"
//               onChange={handleChange}
//               className="p-3 border rounded-lg focus:border-orange-500"/>

//             <input type="date" name="date" min={today}
//               onChange={handleChange}
//               className="p-3 border rounded-lg focus:border-orange-500"/>

//             <select name="time" onChange={handleChange}
//               className="p-3 border rounded-lg focus:border-orange-500">
//               <option>Select Time</option>
//               {timeSlots.map(t => <option key={t}>{t}</option>)}
//             </select>

//           </div>

//           {/* Guests */}
//           <div className="flex items-center gap-4 mt-4">
//             <button type="button" onClick={() => changeGuests(-1)}
//               className="bg-gray-200 w-10 h-10 rounded-lg">-</button>

//             <span className="text-xl">{formData.guests}</span>

//             <button type="button" onClick={() => changeGuests(1)}
//               className="bg-gray-200 w-10 h-10 rounded-lg">+</button>
//           </div>

//           <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
//             {loading ? "Booking..." : "Reserve Table"}
//           </button>
//         </form>

//         {/* STEPS */}
//         <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
//           <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
//             📅 Choose Date
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
//             ⏰ Select Time
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
//             ✅ Confirm Booking
//           </div>
//         </div>

//         {/* HOURS */}
//         <div className="mt-16 bg-white p-6 rounded-xl shadow text-center">
//           <h2 className="font-bold text-xl mb-2">Opening Hours</h2>
//           <p>Mon-Fri: 11AM - 10PM</p>
//           <p>Sat-Sun: 10AM - 11PM</p>
//         </div>

//         {/* FAQ */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-bold text-center mb-6">FAQs</h2>

//           {faqs.map((f, i) => (
//             <div key={i} className="bg-white p-4 rounded-xl shadow mb-3 cursor-pointer"
//               onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}>
//               <h3 className="font-semibold">{f.q}</h3>
//               {activeFAQ === i && <p className="text-gray-600 mt-2">{f.a}</p>}
//             </div>
//           ))}
//         </div>

//       </div>

//       {/* SUCCESS MODAL */}
//       {showSuccess && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-xl text-center">
//             <h2 className="text-2xl font-bold mb-2">🎉 Booking Confirmed</h2>
//             <p>
//               Table for {formData.guests} on {formData.date} at {formData.time}
//             </p>
//             <button onClick={() => setShowSuccess(false)}
//               className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg">
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default Reservation;
import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

const seatingOptions = [
  { name: "Indoor", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9" },
  { name: "Outdoor", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
  { name: "Private", img: "https://images.unsplash.com/photo-1541542684-4a9c7b8c8f3c" },
  { name: "Family", img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1" },
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
  const offerFromUrl = params.get("offer");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: 2,
    seating: "Indoor",
    specialRequest: offerFromUrl || "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const today = new Date().toISOString().split("T")[0];

  const availableSlots = useMemo(() => {
    if (formData.date !== today) return allTimeSlots;
    const now = new Date().getHours();
    return allTimeSlots.filter(t => parseInt(t) > now);
  }, [formData.date, today]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Required";
    if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = "Invalid";
    if (!formData.date) newErrors.date = "Select date";
    if (!formData.time) newErrors.time = "Select time";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const changeGuests = (val) => {
    setFormData(prev => ({
      ...prev,
      guests: Math.max(1, prev.guests + val),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
    }, 1500);
  };

  const faqs = [
    { q: "Can I cancel?", a: "Yes, before booking time." },
    { q: "Large groups?", a: "Contact us directly." },
    { q: "Event booking?", a: "Private events available." },
    { q: "Arrival time?", a: "Arrive 10 mins early." }
  ];

  return (
    <div className="bg-amber-50 text-gray-800">

      {/* HERO */}
      <div className="h-[75vh] bg-cover bg-center relative"
        style={{backgroundImage:"url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0')"}}>
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl font-bold">Reserve Your Table</h1>
          <p className="mt-4 text-lg">Luxury dining experience awaits</p>
        </div>
      </div>

      <div className="w-full px-6 py-16">

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 text-center">
          {["Choose Date","Select Time","Confirm Booking"].map((step,i)=>(
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-3xl text-orange-500 font-bold">{i+1}</h3>
              <p className="mt-2">{step}</p>
            </div>
          ))}
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* FORM */}
          <form onSubmit={handleSubmit}
            className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border">

            <h2 className="text-2xl font-bold mb-6">Reservation Form</h2>

            <input name="name" placeholder="Name"
              onChange={handleChange}
              className="w-full p-3 border rounded mb-2"/>
            <p className="text-red-500 text-sm">{errors.name}</p>

            <input name="phone" placeholder="Phone"
              onChange={handleChange}
              className="w-full p-3 border rounded mb-2"/>
            <p className="text-red-500 text-sm">{errors.phone}</p>

            <input type="date" name="date" min={today}
              onChange={handleChange}
              className="w-full p-3 border rounded mb-2"/>
            <p className="text-red-500 text-sm">{errors.date}</p>

            <select name="time" onChange={handleChange}
              className="w-full p-3 border rounded mb-2">
              <option>Select Time</option>
              {availableSlots.map(t=>(
                <option key={t}>{formatTime(t)}</option>
              ))}
            </select>

            {/* Guests */}
            <div className="flex items-center gap-4 my-4">
              <button type="button" onClick={()=>changeGuests(-1)}
                className="px-3 py-1 bg-gray-200 rounded">-</button>
              <span>{formData.guests}</span>
              <button type="button" onClick={()=>changeGuests(1)}
                className="px-3 py-1 bg-gray-200 rounded">+</button>
            </div>

            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl shadow hover:scale-105 transition">
              {loading ? "Booking..." : "Reserve Table"}
            </button>

          </form>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* SEATING */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-4">Seating Options</h3>
              <div className="grid grid-cols-2 gap-4">
                {seatingOptions.map((s)=>(
                  <div key={s.name} className="relative group rounded-xl overflow-hidden">
                    <img src={s.img} className="h-32 w-full object-cover"/>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold group-hover:bg-black/60">
                      {s.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HOURS */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
              <p>Mon - Thu: 11 AM - 10 PM</p>
              <p className="text-orange-500">Fri - Sun: 11 AM - 11 PM</p>
            </div>

          </div>

        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl text-center font-bold mb-6">FAQ</h2>
          {faqs.map((f,i)=>(
            <div key={i} onClick={()=>setActiveFAQ(i)}
              className="bg-white p-5 rounded-xl shadow mb-3 cursor-pointer">
              <div className="flex justify-between">
                <span>{f.q}</span>
                <span>{activeFAQ===i?"−":"+"}</span>
              </div>
              {activeFAQ===i && <p className="mt-2 text-gray-600">{f.a}</p>}
            </div>
          ))}
        </div>

      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold">Booking Confirmed 🎉</h2>
            <button onClick={()=>setShowSuccess(false)}
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Reservation;

