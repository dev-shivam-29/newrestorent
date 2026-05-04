import { Link } from "react-router-dom";
import BounceCards from "../Components/BounceCards";
import tandooriImg from "../assets/images/tandoori.jpg";
import pastaImg from "../assets/images/pasta.jpg";
import dessertImg from "../assets/images/dessert.jpg";
import pizzaImg from "../assets/images/pizza.jpg";
import friesImg from "../assets/images/fries.jpg";
import sushiImg from "../assets/images/sushi.jpg";
const highlights = [
  { label: "Daily Guests", value: "400+" },
  { label: "Fresh Dishes", value: "80+" },
  { label: "Years of Trust", value: "9+" },
];
const popularDishes = [
  {
    title: "Smoked Tandoori Platter",
    description: "Signature Indian spices with charcoal finish.",
    price: "₹349",
    image: tandooriImg,
  },
  {
    title: "Creamy Truffle Pasta",
    description: "Handmade pasta with parmesan and truffle aroma.",
    price: "₹299",
    image: pastaImg,
  },
  {
    title: "Chef's Special Dessert",
    description: "Seasonal dessert curated fresh every evening.",
    price: "₹219",
    image: dessertImg,
  },
  {
    title: "Loaded Veggie Pizza",
    description: "Stone-baked crust topped with farm-fresh veggies and cheese.",
    price: "₹329",
    image: pizzaImg,
  },
  {
    title: "Peri Peri Fries",
    description: "Crispy fries tossed in smoky peri peri seasoning.",
    price: "₹189",
    image: friesImg,
  },
  {
    title: "Sushi Signature Roll",
    description: "Fresh sushi roll with creamy sauce and toasted sesame.",
    price: "₹399",
    image: sushiImg,
  },
];
const testimonials = [
  {
    name: "Ritika Sharma",
    quote:
      "Food quality top class thi, staff super friendly and ambience perfect for family dinner.",
  },
  {
    name: "Aman Verma",
    quote:
      "Reservation process smooth tha and service genuinely fast. Definitely coming again.",
  },
];
const signatureImages = popularDishes.slice(0, 4).map((dish) => dish.image);
const signatureTransforms = [
  "rotate(5deg) translate(-120px)",
  "rotate(0deg) translate(-50px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(50px)",
];
const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "Reservation", to: "/reservation" },
];
const openingTimings = [
  { day: "Mon - Thu", time: "11:00 AM - 10:30 PM" },
  { day: "Fri - Sat", time: "11:00 AM - 11:30 PM" },
  { day: "Sunday", time: "12:00 PM - 10:00 PM" },
];
const galleryImages = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=900&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=900&fit=crop",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=900&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&h=900&fit=crop",
];
const galleryTransforms = [
  "rotate(6deg) translate(-150px)",
  "rotate(2deg) translate(-70px)",
  "rotate(-2deg) translate(70px)",
  "rotate(-6deg) translate(150px)",
];
const Home = () => {
  return (
    <div className="bg-amber-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="hero-bg-layer absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop)",
          }}
        />
        <video
          className="hero-video-layer absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop"
        >
          <source
            src="https://videos.pexels.com/video-files/3195650/3195650-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-bg-layer-delay absolute inset-0 bg-black/55" />
        <div className="hero-vignette absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-20 text-center">
          <span className="inline-flex rounded-full border border-orange-400/60 bg-orange-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-orange-200">
            Premium Dining Experience
          </span>
          <p className="mt-5 text-4xl font-black lowercase tracking-tight text-white md:text-5xl">
            smart restaurant
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            India&apos;s #1
            <span className="block bg-gradient-to-r from-orange-300 to-amber-500 bg-clip-text text-transparent">
              taste that feels memorable
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-200 md:text-lg">
            Experience culinary excellence with our handcrafted dishes, warm
            hospitality, and elegant ambience.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/reservation" className="hero-store-btn">
              <span className="block text-[10px] uppercase tracking-wider text-gray-300">
                Book Your
              </span>
              <span className="mt-0.5 block text-base font-semibold text-white">
                Perfect Table
              </span>
            </Link>
            <Link to="/menu" className="hero-store-btn">
              <span className="block text-[10px] uppercase tracking-wider text-gray-300">
                Explore Our
              </span>
              <span className="mt-0.5 block text-base font-semibold text-white">
                Full Menu
              </span>
            </Link>
          </div>
          <div className="mt-12 hidden w-full max-w-3xl gap-4 sm:grid-cols-3 md:grid">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
              >
                <p className="text-2xl font-bold text-orange-300">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-gray-200">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm font-medium text-orange-100/90">
            Scroll down to explore ↓
          </p>
        </div>
      </section>
      {/* Quick info strip  */}
      <section className="bg-amber-50 py-6 border-y border-amber-100">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-around text-center text-sm text-gray-700 gap-4">
          <p className="flex items-center gap-2">🕒 11:00 AM - 11:30 PM</p>
          <p className="flex items-center gap-2">📍 Indore, India</p>
          <p className="flex items-center gap-2">📞 +91 8085977623</p>
          <p className="flex items-center gap-2">🍽️ Multi-Cuisine</p>
        </div>
      </section>
      {/* Signature Dishes Section */}
      <section className="bg-amber-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              Our Signature
            </p>
            <h2 className="mt-2 text-4xl font-bold text-gray-800">
              Popular Dishes
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Crafted with passion, served with love. Our most loved dishes that
              keep guests coming back.
            </p>
          </div>
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left Side - Bounce Cards */}
            <div className="mx-auto flex w-full justify-center overflow-visible">
              <BounceCards
                className="custom-bounceCards custom-bounceCards--signature"
                images={signatureImages}
                containerWidth={800}
                containerHeight={280}
                animationDelay={0.5}
                animationStagger={0.1}
                easeType="elastic.out(1, 0.5)"
                transformStyles={signatureTransforms}
                enableHover={true}
              />
            </div>
            {/* Right Side - Dish Names */}
            <div className="space-y-4">
              {popularDishes.slice(0, 4).map((dish, index) => (
                <div
                  key={dish.title}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {dish.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {dish.description}
                      </p>
                      <p className="mt-2 text-lg font-bold text-orange-500">
                        {dish.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Menu Category Preview */}
      <section className="mx-auto max-w-6xl px-4 py-20 bg-white">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Explore Our
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl text-gray-800">
            Menu Categories
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Discover our diverse menu featuring cuisines from around the world
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Starters",
              count: "8 dishes",
              icon: "🥗",
              color: "from-green-500 to-green-600",
            },
            {
              name: "Main Course",
              count: "8 dishes",
              icon: "🍽️",
              color: "from-orange-500 to-orange-600",
            },
            {
              name: "Desserts",
              count: "8 dishes",
              icon: "🍰",
              color: "from-pink-500 to-pink-600",
            },
            {
              name: "Beverages",
              count: "8 dishes",
              icon: "🍹",
              color: "from-blue-500 to-blue-600",
            },
          ].map((category) => (
            <Link
              key={category.name}
              to="/menu"
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className={`h-16 w-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {category.name}
              </h3>
              <p className="text-gray-500">{category.count}</p>
              <p className="mt-4 text-sm text-orange-500 group-hover:text-orange-600 transition-colors">
                View Menu →
              </p>
            </Link>
          ))}
        </div>
      </section>
      {/* About Teaser Section */}
      <section className="bg-amber-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                Our Story
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl text-gray-800">
                A Legacy of Excellence
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                For over 9 years, Smart Restaurant has been serving exceptional
                culinary experiences in the heart of Indore. Our journey began
                with a simple vision: to create a dining destination where every
                meal tells a story and every guest feels like family.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                From our carefully sourced ingredients to our expertly crafted
                dishes, every detail reflects our commitment to quality and
                innovation. Our team of passionate chefs brings together global
                flavors with local traditions to create unforgettable dining
                moments.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
              >
                Discover Our Full Story
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1100&h=900&fit=crop"
                alt="Restaurant interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">9+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Chef Special Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 bg-white">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Chef's Masterpiece
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl text-gray-800">
            Today's Featured Dish
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Experience our chef's signature creation, crafted with the finest
            ingredients
          </p>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 shadow-lg">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12">
              <div className="mb-4">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  🏆 Chef's Special
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                Lobster Truffle Pasta
              </h3>
              <p className="text-gray-600 mb-6">
                Indulge in our signature dish featuring fresh Maine lobster,
                handmade fettuccine, and black truffle in a creamy parmesan
                sauce. A true culinary masterpiece that showcases our chef's
                expertise.
              </p>
              <div className="mb-6">
                <p className="text-4xl font-bold text-orange-500">₹899</p>
                <p className="text-sm text-gray-500">Market Price</p>
              </div>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Order Now
                </button>
                <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  View Details
                </button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop"
                alt="Chef's Special"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-amber-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              What Our Guests Say
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-gray-800">
              Customer Reviews
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Don't just take our word for it - hear from our satisfied guests
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Ritika Sharma",
                rating: 5,
                quote:
                  "Food quality top class thi, staff super friendly and ambience perfect for family dinner.",
                date: "2 days ago",
              },
              {
                name: "Aman Verma",
                rating: 5,
                quote:
                  "Reservation process smooth tha and service genuinely fast. Definitely coming again.",
                date: "1 week ago",
              },
              {
                name: "Priya Patel",
                rating: 5,
                quote:
                  "Best dining experience in Indore! The lobster pasta was absolutely divine.",
                date: "2 weeks ago",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-orange-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-600 mb-4">"{review.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-500">Verified Guest</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Reservation CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-white mb-4">
            Ready for Your Perfect Dining Experience?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Book your table today and let us create unforgettable memories for
            you and your loved ones.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/reservation"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Reserve Your Table
            </Link>
            <Link
              to="/menu"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold text-orange-500 mb-4">
                Address
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Smart Restaurant
                <br />
                MG Road, Indore, Madhya Pradesh
                <br />
                India - 411001
              </p>
              <p className="text-gray-300 mt-2">+91 8085977623</p>
            </div>
            {/* Social */}
            <div>
              <h3 className="text-lg font-semibold text-orange-500 mb-4">
                Social
              </h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-orange-500 hover:text-orange-500 transition"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M13.5 8.5V6.8c0-.8.5-.9.9-.9h2V2.5h-2.8c-3.4 0-4.2 2.5-4.2 4.2v1.8H7v3.6h2.4V22h4.1v-9.9h2.8l.4-3.6h-3.2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-orange-500 hover:text-orange-500 transition"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 1.9A3.6 3.6 0 0 0 3.9 7.5v9a3.6 3.6 0 0 0 3.6 3.6h9a3.6 3.6 0 0 0 3.6-3.6v-9a3.6 3.6 0 0 0-3.6-3.6h-9z" />
                    <path d="M12 7.1A4.9 4.9 0 1 1 7.1 12 4.9 4.9 0 0 1 12 7.1zm0 1.9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" />
                    <circle cx="17.4" cy="6.6" r="1.1" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-orange-500 hover:text-orange-500 transition"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M18.9 3h2.9l-6.3 7.2L23 21h-5.9l-4.6-6-5.3 6H4.3l6.7-7.6L1 3h6l4.2 5.5L18.9 3zm-1 16.3h1.6L6.1 4.6H4.4l13.5 14.7z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold text-orange-500 mb-4">
                Links
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link to="/" className="hover:text-orange-500 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="hover:text-orange-500 transition">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-orange-500 transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reservation"
                    className="hover:text-orange-500 transition"
                  >
                    Reservation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-orange-500 transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* Timings */}
            <div>
              <h3 className="text-lg font-semibold text-orange-500 mb-4">
                Timings
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Mon - Thu</span>
                  <span className="text-gray-400">11 AM - 10 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Fri - Sun</span>
                  <span className="text-orange-500">11 AM - 11 PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
            Copyright {new Date().getFullYear()} Smart Restaurant. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
