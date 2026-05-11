
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "General Inquiry",
//     message: "",
//   });

//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const supportFaq = [
//     { q: "Is parking available?", a: "Yes, free parking available." },
//     { q: "Do you deliver nearby?", a: "Delivery within 8km radius." },
//     { q: "Private events?", a: "Yes, select 'Private Event'." },
//     { q: "Reservation help?", a: "Call us anytime." },
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.message) {
//       alert("Fill all fields");
//       return;
//     }

//     setSuccess(true);
//     setFormData({
//       name: "",
//       email: "",
//       subject: "General Inquiry",
//       message: "",
//     });
//   };

//   return (
//     <div className="bg-amber-50 text-gray-800">

//       {/* HERO IMAGE (FULL SCREEN) */}
//       <div
//         className="h-[60vh] bg-cover bg-center relative overflow-hidden"
//         style={{
//           backgroundImage: `url(/public/assets/pizza.jpg)`,
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 flex flex-col justify-center items-center text-white px-6">
//           {/* Animated Content */}
//           <div className="relative z-10 max-w-4xl px-4">
//             <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg animate-pulse">
//               Contact Us
//             </h1>
//             <p className="mt-3 text-xl md:text-2xl text-orange-100 max-w-2xl mx-auto">
//               Get in touch with us for any inquiries or reservations
//             </p>
//           </div>
//         </div>
//       </div>
//         <div className="bg-black/60 w-full h-full flex flex-col justify-center items-center text-white">
//           <h1 className="text-5xl font-bold mb-3">Contact Us</h1>
//           <p className="text-lg">We're here to help with your dining needs and make every experience memorable</p>
//         </div>
//       </div>

//       {/* MAIN CONTENT FULL WIDTH */}
//       <div className="w-full px-6 py-16">

//         <div className="grid lg:grid-cols-2 gap-10">

//           {/* LEFT SIDE */}
//           <div className="space-y-8">

//             {/* CONTACT DETAILS */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg">
//               <h2 className="text-2xl font-bold mb-6 text-orange-600">
//                 Contact Details
//               </h2>

//               <div className="space-y-4 text-gray-600 text-lg">
//                 <p>📍 MG Road, Indore</p>
//                 <p>📞 +91 8085977623</p>
//                 <p>📧 hello@restaurant.com</p>

//                 <div className="border-t pt-4 mt-4">
//                   <p>Mon - Thu: 11 AM - 10 PM</p>
//                   <p className="text-orange-600">Fri - Sun: 11 AM - 11 PM</p>
//                 </div>
//               </div>
//             </div>

//             {/* MAP FULL WIDTH */}
//             <div className="rounded-2xl overflow-hidden shadow-lg">
//               <iframe
//                 src="https://www.google.com/maps?q=MG+Road+Indore&output=embed"
//                 className="w-full h-72"
//                 loading="lazy"
//                 title="map"
//               />
//             </div>

//           </div>

//           {/* RIGHT FORM */}
//           <div className="bg-white p-10 rounded-2xl shadow-lg">
//             <h2 className="text-3xl font-bold mb-6">Send us a message</h2>

//             <form onSubmit={handleSubmit} className="space-y-5">

//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your name"
//                 className="w-full p-4 rounded-lg border focus:border-orange-500 outline-none"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your email"
//                 className="w-full p-4 rounded-lg border focus:border-orange-500 outline-none"
//               />

//               <select
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full p-4 rounded-lg border focus:border-orange-500 outline-none"
//               >
//                 <option>General Inquiry</option>
//                 <option>Reservation</option>
//                 <option>Private Event</option>
//               </select>

//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="5"
//                 placeholder="Your message"
//                 className="w-full p-4 rounded-lg border focus:border-orange-500 outline-none"
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg"
//               >
//                 Send Message
//               </button>
//             </form>

//             {success && (
//               <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
//                 Message sent successfully!
//               </div>
//             )}
//           </div>

//         </div>

//         {/* FULL IMAGE SECTION (extra fill) */}
//         <div
//           className="mt-16 h-64 bg-cover bg-center rounded-2xl"
//           style={{
//             backgroundImage: `url(/assets/menupizza.jpg)`,
//           }}
//         ></div>

//         {/* FAQ */}
//         <div className="mt-16">
//           <h2 className="text-3xl text-center font-bold mb-8">
//             Support / FAQ
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {supportFaq.map((item) => (
//               <div
//                 key={item.q}
//                 className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//               >
//                 <p className="font-semibold">{item.q}</p>
//                 <p className="text-gray-600 mt-2">{item.a}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* BACK BUTTON */}
//         <div className="mt-16 text-center">
//           <Link
//             to="/"
//             className="bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300"
//           >
//             Back to Home
//           </Link>
//         </div>

//       </div>
//     </div>

//   );
// };

// export default Contact;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportFaq = [
    { q: "Is parking available?", a: "Yes, free parking available." },
    { q: "Do you deliver nearby?", a: "Delivery within 8km radius." },
    { q: "Private events?", a: "Yes, select 'Private Event'." },
    { q: "Reservation help?", a: "Call us anytime." },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Fill all fields");
      return;
    }

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    });
  };

  return (
    <div className="bg-amber-50 text-gray-800 min-h-screen">

      {/* HERO SECTION */}
      <div
        className="h-[60vh] bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url(/assets/pizza.jpg)`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 flex flex-col justify-center items-center text-white px-6">

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              Contact Us
            </h1>

            <p className="text-xl md:text-2xl text-orange-100 max-w-2xl mx-auto">
              Get in touch with us for any inquiries or reservations
            </p>
          </div>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full px-6 py-16 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* CONTACT DETAILS */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-orange-600">
                Contact Details
              </h2>

              <div className="space-y-4 text-gray-600 text-lg">
                <p>📍 MG Road, Indore</p>
                <p>📞 +91 8085977623</p>
                <p>📧 hello@restaurant.com</p>

                <div className="border-t pt-4 mt-4">
                  <p>Mon - Thu: 11 AM - 10 PM</p>
                  <p className="text-orange-600">
                    Fri - Sun: 11 AM - 11 PM
                  </p>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=MG+Road+Indore&output=embed"
                className="w-full h-72"
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-10 rounded-2xl shadow-lg">

            <h2 className="text-3xl font-bold mb-6">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-orange-500 outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-orange-500 outline-none"
              />

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-orange-500 outline-none"
              >
                <option>General Inquiry</option>
                <option>Reservation</option>
                <option>Private Event</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-orange-500 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-lg text-lg font-semibold"
              >
                Send Message
              </button>

            </form>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
                Message sent successfully!
              </div>
            )}

          </div>

        </div>

        {/* IMAGE SECTION */}
        <div
          className="mt-16 h-64 bg-cover bg-center rounded-2xl shadow-lg"
          style={{
            backgroundImage: `url(/assets/menupizza.jpg)`,
          }}
        ></div>

        {/* FAQ SECTION */}
        <div className="mt-16">

          <h2 className="text-3xl text-center font-bold mb-8">
            Support / FAQ
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

            {supportFaq.map((item) => (
              <div
                key={item.q}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="font-semibold text-lg">
                  {item.q}
                </p>

                <p className="text-gray-600 mt-2">
                  {item.a}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* BACK BUTTON */}
        <div className="mt-16 text-center">

          <Link
            to="/"
            className="bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Back to Home
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Contact;