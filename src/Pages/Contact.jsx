
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "General Inquiry",
//     message: "",
//   });

//   const [success, setSuccess] = useState(false);

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
//     <div className="bg-amber-50 text-gray-800 min-h-screen">

//       {/* HERO */}
//       <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-20">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
//         <p className="text-orange-100 text-lg">We'd love to hear from you</p>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <div className="grid md:grid-cols-2 gap-12">

//           {/* LEFT - Contact Details */}
//           <div className="space-y-8">

//             {/* CONTACT BOX */}
//             <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold mb-5 text-orange-600">
//                 Contact Details
//               </h2>
//               <div className="space-y-4 text-gray-600">
//                 <p className="flex items-center gap-2">📍 MG Road, Indore</p>
//                 <p className="flex items-center gap-2">📞 +91 8085977623</p>
//                 <p className="flex items-center gap-2">📧 hello@restaurant.com</p>
//                 <div className="border-t border-gray-200 pt-3 mt-4">
//                   <p>Mon - Thu: 11 AM - 10 PM</p>
//                   <p className="text-orange-600">Fri - Sun: 11 AM - 11 PM</p>
//                 </div>
//               </div>
//             </div>

//             {/* MAP */}
//             <div className="bg-white p-3 rounded-2xl border border-gray-200">
//               <iframe
//                 src="https://www.google.com/maps?q=MG+Road+Indore&output=embed"
//                 className="w-full h-64 rounded-xl"
//                 loading="lazy"
//                 title="map"
//               />
//             </div>

//           </div>

//           {/* RIGHT FORM */}
//           <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
//             <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h2>
//             <form onSubmit={handleSubmit} className="space-y-5">

//               <label className="block text-sm font-medium mb-2 text-gray-700">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 outline-none focus:border-orange-500 text-gray-800 transition"
//                 placeholder="Your name"
//               />

//               <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 outline-none focus:border-orange-500 text-gray-800 transition"
//                 placeholder="Your email"
//               />

//               <label className="block text-sm font-medium mb-2 text-gray-700">Subject</label>
//               <select
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 outline-none focus:border-orange-500 text-gray-800 transition"
//               >
//                 <option>General Inquiry</option>
//                 <option>Reservation</option>
//                 <option>Private Event</option>
//               </select>

//               <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="4"
//                 className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 outline-none focus:border-orange-500 text-gray-800 transition"
//                 placeholder="Your message"
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
//               >
//                 Send Message
//               </button>
//             </form>

//             {success && (
//               <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg text-green-600 text-center">
//                 Message sent successfully!
//               </div>
//             )}
//           </div>
//         </div>

//         {/* FAQ */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
//             Support / FAQ
//           </h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             {supportFaq.map((item) => (
//               <div
//                 key={item.q}
//                 className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition"
//               >
//                 <p className="font-semibold text-gray-800">{item.q}</p>
//                 <p className="text-sm text-gray-600 mt-2">{item.a}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* BACK TO HOME */}
//         <div className="mt-16 text-center">
//           <Link
//             to="/"
//             className="inline-block bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
//           >
//             Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const supportFaq = [
    { q: "Is parking available?", a: "Yes, free parking available." },
    { q: "Do you deliver nearby?", a: "Delivery within 8km radius." },
    { q: "Private events?", a: "Yes, select 'Private Event'." },
    { q: "Reservation help?", a: "Call us anytime." },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <div className="bg-amber-50 text-gray-800">

      {/* HERO IMAGE (FULL SCREEN) */}
      <div
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5')",
        }}
      >
        <div className="bg-black/60 w-full h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-lg">We’d love to hear from you</p>
        </div>
      </div>

      {/* MAIN CONTENT FULL WIDTH */}
      <div className="w-full px-6 py-16">

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
                  <p className="text-orange-600">Fri - Sun: 11 AM - 11 PM</p>
                </div>
              </div>
            </div>

            {/* MAP FULL WIDTH */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=MG+Road+Indore&output=embed"
                className="w-full h-72"
                loading="lazy"
                title="map"
              />
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full p-4 rounded-lg border focus:border-orange-500 outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full p-4 rounded-lg border focus:border-orange-500 outline-none"
              />

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border focus:border-orange-500 outline-none"
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
                placeholder="Your message"
                className="w-full p-4 rounded-lg border focus:border-orange-500 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg"
              >
                Send Message
              </button>
            </form>

            {success && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
                Message sent successfully!
              </div>
            )}
          </div>

        </div>

        {/* FULL IMAGE SECTION (extra fill) */}
        <div
          className="mt-16 h-64 bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
          }}
        ></div>

        {/* FAQ */}
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
                <p className="font-semibold">{item.q}</p>
                <p className="text-gray-600 mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BACK BUTTON */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Contact;