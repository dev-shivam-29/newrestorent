
// import { useState, useMemo } from "react";
// import { useLocation } from "react-router-dom";

// const seatingOptions = [
//   {
//     name: "Indoor",
//     img: "/images/indoor.jpg",
//     desc: "Cozy air-conditioned seating",
//     tag: "Comfort"
//   },
//   {
//     name: "Outdoor",
//     img: "/images/outdoor.jpg",
//     desc: "Open sky & fresh vibes",
//     tag: "Popular"
//   },
//   {
//     name: "Private",
//     img: "/images/private.jpg",
//     desc: "Perfect for couples",
//     tag: "Premium"
//   },
//   {
//     name: "Family",
//     img: "/images/family.jpg",
//     desc: "Spacious & comfortable",
//     tag: "Best Choice"
//   }
// ];

// const allTimeSlots = ["11:00","12:00","13:00","18:00","19:00","20:00"];

// const formatTime = (t) => {
//   const [h, m] = t.split(":");
//   const hour = parseInt(h);
//   return `${hour > 12 ? hour - 12 : hour}:${m} ${hour >= 12 ? "PM" : "AM"}`;
// };

// const Reservation = () => {

//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const offerFromUrl = params.get("offer");

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     date: "",
//     time: "",
//     guests: 2,
//     seating: "Indoor",
//     specialRequest: offerFromUrl || "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   const today = new Date().toISOString().split("T")[0];

//   const availableSlots = useMemo(() => {
//     if (formData.date !== today) return allTimeSlots;
//     const now = new Date().getHours();
//     return allTimeSlots.filter(t => parseInt(t) > now);
//   }, [formData.date, today]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const changeGuests = (val) => {
//     setFormData(prev => ({
//       ...prev,
//       guests: Math.max(1, prev.guests + val),
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setShowSuccess(true);
//     }, 1000);
//   };

//   return (
//     <div className="bg-amber-50 text-gray-800">

//       {/* HERO */}
//       <div className="h-[60vh] bg-cover bg-center relative"
//         style={{backgroundImage:"url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0')"}}>
//         <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white">
//           <h1 className="text-5xl font-bold">Reserve Your Table</h1>
//         </div>
//       </div>

//       <div className="px-6 py-12 grid lg:grid-cols-2 gap-10">

//         {/* FORM */}
//         <form onSubmit={handleSubmit}
//           className="bg-white p-6 rounded-2xl shadow">

//           <input name="name" placeholder="Name"
//             onChange={handleChange}
//             className="w-full p-3 border rounded mb-3"/>

//           <input name="phone" placeholder="Phone"
//             onChange={handleChange}
//             className="w-full p-3 border rounded mb-3"/>

//           <input type="date" name="date"
//             min={today}
//             onChange={handleChange}
//             className="w-full p-3 border rounded mb-3"/>

//           <select name="time"
//             onChange={handleChange}
//             className="w-full p-3 border rounded mb-4">
//             <option>Select Time</option>
//             {availableSlots.map(t=>(
//               <option key={t}>{formatTime(t)}</option>
//             ))}
//           </select>

//           {/* Guests */}
//           <div className="flex justify-between mb-4">
//             <span>Guests</span>
//             <div className="flex gap-3">
//               <button type="button" onClick={()=>changeGuests(-1)}>-</button>
//               <span>{formData.guests}</span>
//               <button type="button" onClick={()=>changeGuests(1)}>+</button>
//             </div>
//           </div>

//           <button className="w-full bg-orange-500 text-white py-3 rounded">
//             {loading ? "Booking..." : "Reserve"}
//           </button>
//         </form>

//         {/* SEATING */}
//         <div className="bg-white p-6 rounded-2xl shadow">
//           <h3 className="text-xl font-bold mb-5">Choose Your Seating</h3>

//           <div className="grid grid-cols-2 gap-4">
//             {seatingOptions.map((s) => {
//               const isActive = formData.seating === s.name;

//               return (
//                 <div
//                   key={s.name}
//                   onClick={() =>
//                     setFormData({ ...formData, seating: s.name })
//                   }
//                   className={`cursor-pointer rounded-xl overflow-hidden
//                   ${isActive ? "ring-4 ring-orange-500" : ""}`}
//                 >

//                   <img
//                     src={s.img}
//                     alt={s.name}
//                     onError={(e) => (e.target.src = "/images/indoor.jpg")}
//                     className="h-36 w-full object-cover"
//                   />

//                   <div className="p-3">
//                     <h4 className="font-bold">{s.name}</h4>
//                     <p className="text-sm text-gray-500">{s.desc}</p>
//                   </div>

//                 </div>
//               );
//             })}
//           </div>
//         </div>

//       </div>

//       {/* SUCCESS */}
//       {showSuccess && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded">
//             <h2>Booking Confirmed 🎉</h2>
//             <button onClick={()=>setShowSuccess(false)}>Close</button>
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
    specialRequest: params.get("offer") || "",
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
      guests: Math.max(1, prev.guests + val),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const faqs = [
    { q: "Can I cancel?", a: "Yes, before booking time." },
    { q: "Large groups?", a: "Contact us directly." },
    { q: "Event booking?", a: "Private events available." },
    { q: "Arrival time?", a: "Arrive 10 mins early." }
  ];

  return (
    <div className="bg-amber-50 text-gray-800 min-h-screen">

      {/* HERO */}
      <div className="h-[60vh] bg-cover bg-center relative"
        style={{backgroundImage:"url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0')"}}>
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold">Reserve Your Table</h1>
          <p className="mt-3 text-lg">Book your perfect dining experience</p>
        </div>
      </div>

      <div className="px-6 py-12 max-w-7xl mx-auto">

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {["Choose Date","Select Time","Confirm"].map((s,i)=>(
            <div key={i} className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-2xl text-orange-500 font-bold">{i+1}</h3>
              <p>{s}</p>
            </div>
          ))}
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-10">
          

          {/* FORM */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-3">

            <input name="name" placeholder="Name" onChange={handleChange}
              className="w-full p-3 border rounded"/>

            <input name="phone" placeholder="Phone" onChange={handleChange}
              className="w-full p-3 border rounded"/>

            <input name="email" placeholder="Email" onChange={handleChange}
              className="w-full p-3 border rounded"/>

            <input type="date" name="date" min={today}
              onChange={handleChange}
              className="w-full p-3 border rounded"/>

            <select name="time" onChange={handleChange}
              className="w-full p-3 border rounded">
              <option>Select Time</option>
              {availableSlots.map(t=>(
                <option key={t}>{formatTime(t)}</option>
              ))}
            </select>

            {/* Guests */}
            <div className="flex justify-between items-center">
              <span>Guests</span>
              <div className="flex gap-3">
                <button type="button" onClick={()=>changeGuests(-1)}>-</button>
                <span>{formData.guests}</span>
                <button type="button" onClick={()=>changeGuests(1)}>+</button>
              </div>
            </div>

            <textarea name="specialRequest" placeholder="Special Request"
              onChange={handleChange}
              className="w-full p-3 border rounded"/>

            <button className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600">
              Reserve Table
            </button>
          </form>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* SEATING */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold mb-4">Seating Options</h3>

              <div className="grid grid-cols-2 gap-4">
                {seatingOptions.map(s => (
                  <div key={s.name}
                    onClick={()=>setFormData({...formData, seating:s.name})}
                    className={`cursor-pointer rounded-lg overflow-hidden border 
                    ${formData.seating===s.name?"border-orange-500":"hover:shadow"}`}>

                    <img src={s.img}
                      alt={s.name}
                      onError={(e)=>e.target.src="/images/indoor.jpg"}
                      className="h-32 w-full object-cover"/>

                    <div className="p-2">
                      <h4 className="font-semibold">{s.name}</h4>
                      <p className="text-sm text-gray-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HOURS */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-2">Opening Hours</h3>
              <p>Mon–Thu: 11 AM – 10 PM</p>
              <p className="text-orange-500">Fri–Sun: 11 AM – 11 PM</p>
            </div>

          </div>

        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4 text-center">FAQ</h2>
          {faqs.map((f,i)=>(
            <div key={i} className="bg-white p-4 rounded shadow mb-2">
              <strong>{f.q}</strong>
              <p className="text-sm text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>

      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded text-center">
            <h2 className="text-xl font-bold">Booking Confirmed 🎉</h2>
            <button onClick={()=>setShowSuccess(false)}
              className="mt-3 bg-orange-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Reservation;
