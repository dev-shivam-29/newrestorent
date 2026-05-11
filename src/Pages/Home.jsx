import React from "react";
import { Link } from "react-router-dom";
import BounceCards from "../Components/BounceCards";

/* ===== FOOD IMAGES ===== */
const food1 = "/assets/pizza.jpg";
const food2 = "/assets/pasta.jpg";
const banner = "/assets/homebanner.jpg";
const popularDishes = [
  {
    title: "Smoked Tandoori Platter",
    description: "Signature Indian spices with charcoal finish.",
    price: "₹349",
    image: "/assets/tandoori.jpg",
  },
  {
    title: "Creamy Truffle Pasta",
    description: "Handmade pasta with parmesan and truffle aroma.",
    price: "₹299",
    image: "/assets/pasta.jpg",
  },
  {
    title: "Chef's Special Dessert",
    description: "Seasonal dessert curated fresh every evening.",
    price: "₹219",
    image: "/assets/dessert.jpg",
  },
  {
    title: "Loaded Veggie Pizza",
    description: "Stone-baked crust topped with farm-fresh veggies and cheese.",
    price: "₹329",
    image: "/assets/pizza.jpg",
  },
  {
    title: "Peri Peri Fries",
    description: "Crispy fries tossed in smoky peri peri seasoning.",
    price: "₹189",
    image: "/assets/fries.jpg",
  },
  {
    title: "Sushi Signature Roll",
    description: "Fresh sushi roll with creamy sauce and toasted sesame.",
    price: "₹399",
    image: "/assets/sushi.jpg",
  },
];
const signatureImages = popularDishes.slice(0, 4).map((dish) => dish.image);
const signatureTransforms = [
  "rotate(5deg) translate(-120px)",
  "rotate(0deg) translate(-50px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(50px)",
];
const Home = () => {
  return (
    <div className="bg-amber-50 text-gray-800">
      <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <img
          src={banner}
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt="Restaurant Banner"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4">
          <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">
            Fresh & Delicious Food
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Our
            <span className="block text-orange-400">Home</span>
          </h1>

          <p className="mt-5 text-gray-300 text-lg">
            Explore handcrafted dishes made with fresh ingredients and authentic
            taste.
          </p>
        </div>
      </section>

      {/* Quick info strip  */}
      {/* Modern Floating Info Section */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 backdrop-blur-lg bg-white/70 border border-white/40 shadow-xl rounded-2xl overflow-hidden">
            {/* Item */}
            <div className="flex flex-col items-center justify-center py-6 border-r border-gray-200">
              <span className="text-orange-500 text-2xl mb-2">⏰</span>
              <p className="text-xs text-gray-500">Opening Hours</p>
              <p className="font-semibold text-gray-800 text-sm">
                11 AM - 11:30 PM
              </p>
            </div>

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-6 border-r border-gray-200">
              <span className="text-orange-500 text-2xl mb-2">📍</span>
              <p className="text-xs text-gray-500">Location</p>
              <p className="font-semibold text-gray-800 text-sm">Indore</p>
            </div>

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-6 border-r border-gray-200">
              <span className="text-orange-500 text-2xl mb-2">📞</span>
              <p className="text-xs text-gray-500">Contact</p>
              <p className="font-semibold text-gray-800 text-sm">
                +91 8085977623
              </p>
            </div>

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-6">
              <span className="text-orange-500 text-2xl mb-2">🍽️</span>
              <p className="text-xs text-gray-500">Cuisine</p>
              <p className="font-semibold text-gray-800 text-sm">
                Multi-Cuisine
              </p>
            </div>
          </div>
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
              {popularDishes.slice(0, 4).map((dish) => (
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

      {/* Example Image Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              Featured Dishes
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-gray-800">
              Our Popular Items
            </h2>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <img src={food1} alt="food1" className="rounded-xl" />
            <img src={food2} alt="food2" className="rounded-xl" />
          </section>
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
                src="/assets/images/menupizza.jpg"
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
      {/* Next Level Premium Chef Special */}
      <section className="relative overflow-hidden bg-[#fffaf5] py-16">
        {/* Luxury Background Effects */}
        <div className="absolute top-[-120px] left-[-100px] h-[420px] w-[420px] rounded-full bg-orange-300/20 blur-3xl"></div>
        <div className="absolute bottom-[-150px] right-[-120px] h-[500px] w-[500px] rounded-full bg-amber-200/20 blur-3xl"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          {/* Heading */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-5 py-2.5 shadow-lg backdrop-blur-xl">
              <span className="text-orange-500">✨</span>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Chef’s Exclusive Creation
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              A Taste of <span className="text-orange-500">Luxury</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              Indulge in a premium culinary masterpiece crafted with world-class
              ingredients, artistic presentation, and unforgettable gourmet
              flavor.
            </p>
          </div>

          {/* Main Card */}
          <div className="group relative overflow-hidden rounded-[40px] border border-white/40 bg-white/75 shadow-[0_30px_120px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_140px_rgba(0,0,0,0.12)]">
            {/* Top Glow */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-4xl md:text-5xl font-black text-transparent">
              ₹899
            </div>

            {/* Decorative Blur */}
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"></div>

            <div className="grid items-center lg:grid-cols-2">
              {/* LEFT CONTENT */}
              <div className="relative z-10 p-8 md:p-14 lg:p-16 xl:p-20">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xl">
                  🏆 Award Winning Dish
                </div>

                {/* Title */}
                <h3 className="mt-8 text-3xl font-black leading-tight text-gray-900 md:text-4xl">
                  Lobster <br />
                  Truffle Pasta
                </h3>

                {/* Description */}
                <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
                  Handmade fettuccine infused with creamy parmesan sauce,
                  premium Maine lobster, black truffle essence, and aromatic
                  herbs — designed for a refined fine dining experience.
                </p>

                {/* Premium Feature Cards */}
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl border border-orange-100 bg-white/80 p-5 text-center shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="text-4xl">🍝</div>

                    <h4 className="mt-3 font-bold text-gray-800">Handmade</h4>

                    <p className="mt-1 text-sm text-gray-500">Fresh Pasta</p>
                  </div>

                  <div className="rounded-3xl border border-orange-100 bg-white/80 p-5 text-center shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="text-4xl">🦞</div>

                    <h4 className="mt-3 font-bold text-gray-800">Premium</h4>

                    <p className="mt-1 text-sm text-gray-500">Maine Lobster</p>
                  </div>

                  <div className="rounded-3xl border border-orange-100 bg-white/80 p-5 text-center shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="text-4xl">⭐</div>

                    <h4 className="mt-3 font-bold text-gray-800">Top Rated</h4>

                    <p className="mt-1 text-sm text-gray-500">Guest Favorite</p>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
                  {/* Price */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                      Exclusive Price
                    </p>

                    <div className="mt-2 flex items-end gap-3">
                      <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-4xl md:text-5xl font-black text-transparent">
                        ₹899
                      </span>

                      <span className="mb-2 text-base text-gray-400">only</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <button className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-semibold text-white shadow-[0_15px_40px_rgba(249,115,22,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(249,115,22,0.45)]">
                      Order Now
                    </button>

                    <button className="rounded-2xl border border-orange-200 bg-white/90 px-8 py-4 font-semibold text-orange-500 shadow-lg backdrop-blur-xl transition-all duration-300 hover:bg-orange-500 hover:text-white">
                      Explore Dish
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative h-[450px] overflow-hidden lg:h-[760px]">
                {/* Main Image */}
                <img
                  src="/assets/images/menupizza.jpg"
                  alt="Chef Special"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/20 to-black/55"></div>

                {/* Floating Glass Card */}
                <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/70">
                        Customer Satisfaction
                      </p>

                      <h4 className="mt-1 text-3xl font-black text-white">
                        98%
                      </h4>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-white/70">Rating</p>

                      <div className="mt-1 flex items-center gap-1 text-xl text-yellow-300">
                        ⭐⭐⭐⭐⭐
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute top-6 right-6 rounded-3xl bg-white/90 px-5 py-3 shadow-2xl backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
                    Bestseller
                  </p>

                  <h4 className="mt-1 text-2xl font-black text-orange-500">
                    #1 Dish
                  </h4>
                </div>

                {/* Floating Mini Card */}
                <div className="absolute top-1/2 left-6 hidden -translate-y-1/2 rounded-3xl border border-white/20 bg-white/10 px-5 py-4 shadow-2xl backdrop-blur-xl lg:block">
                  <p className="text-sm text-white/70">Served Daily</p>

                  <h4 className="mt-2 text-xl font-bold text-white">
                    12 PM - 11 PM
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ultra Premium Testimonials Section */}
      <section className="relative overflow-hidden bg-[#fffaf5] py-16">
        {/* Luxury Background Effects */}
        <div className="absolute top-[-180px] left-[-120px] h-[450px] w-[450px] rounded-full bg-orange-300/20 blur-3xl"></div>
        <div className="absolute bottom-[-180px] right-[-120px] h-[520px] w-[520px] rounded-full bg-amber-200/20 blur-3xl"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:42px_42px]"></div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          {/* Heading */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-5 py-2.5 shadow-xl backdrop-blur-xl">
              <span className="text-orange-500">💎</span>

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
                Luxury Guest Reviews
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Loved by Our <span className="text-orange-500">Guests</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              Every review reflects the premium dining experience, warm
              hospitality, and unforgettable flavors we proudly serve every day.
            </p>
          </div>

          {/* Review Cards */}
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                name: "Ritika Sharma",
                role: "Food Blogger",
                rating: 5,
                quote:
                  "Food quality top class thi, ambience luxury feel de raha tha and service literally outstanding thi.",
                date: "2 Days Ago",
              },
              {
                name: "Aman Verma",
                role: "Regular Customer",
                rating: 5,
                quote:
                  "Reservation process smooth tha, staff professional tha and dishes beautifully presented thi.",
                date: "1 Week Ago",
              },
              {
                name: "Priya Patel",
                role: "Premium Member",
                rating: 5,
                quote:
                  "Best fine dining experience in Indore. Lobster pasta and desserts absolutely unforgettable the.",
                date: "2 Weeks Ago",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="group relative overflow-hidden rounded-[38px] border border-white/40 bg-white/70 p-6 shadow-[0_25px_100px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_120px_rgba(249,115,22,0.18)]"
              >
                {/* Top Gradient */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300"></div>

                {/* Floating Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-200/30 blur-3xl transition-all duration-500 group-hover:scale-125"></div>

                {/* Quote Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xl text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>

                  <div className="rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold text-orange-500">
                    {review.date}
                  </div>
                </div>

                {/* Big Quote */}
                <div className="mb-5 text-6xl font-black leading-none text-orange-100">
                  “
                </div>

                {/* Review Text */}
                <p className="relative z-10 text-[15px] leading-relaxed text-gray-600 md:text-base">
                  {review.quote}
                </p>

                {/* Divider */}
                <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>

                {/* User Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-xl font-bold text-white shadow-[0_12px_30px_rgba(249,115,22,0.35)]">
                      {review.name.charAt(0)}
                    </div>

                    {/* Name */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        {review.name}
                      </h4>

                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <div className="rounded-2xl bg-green-100 px-3 py-2 text-xs font-semibold text-green-600">
                    ✔ Verified
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Premium Bottom Stats */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            icon: "⭐",
            value: "4.9",
            label: "Average Guest Rating",
          },
          {
            icon: "🍽️",
            value: "12K+",
            label: "Happy Guests Served",
          },
          {
            icon: "❤️",
            value: "98%",
            label: "Positive Feedback",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="group relative overflow-hidden rounded-[36px] border border-white/40 bg-white/70 p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_100px_rgba(249,115,22,0.16)]"
          >
            {/* Glow */}
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-orange-200/30 blur-3xl transition-all duration-500 group-hover:scale-125"></div>

            {/* Icon */}
            <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-3xl shadow-[0_15px_40px_rgba(249,115,22,0.35)] transition-all duration-500 group-hover:scale-110">
              {item.icon}
            </div>

            {/* Value */}
            <h3 className="relative mt-6 text-4xl md:text-5xl font-black text-gray-900">
              {item.value}
            </h3>

            {/* Label */}
            <p className="relative mt-3 text-base text-gray-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      {/* Premium Reservation CTA */}
      <section className="relative overflow-hidden bg-[#fffaf5] py-24">
        {/* Background Blur */}
        <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-orange-200/30 blur-3xl"></div>

        <div className="absolute bottom-[-140px] right-[-140px] h-[420px] w-[420px] rounded-full bg-amber-200/30 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="overflow-hidden rounded-[42px] bg-white shadow-[0_25px_100px_rgba(0,0,0,0.08)]">
            <div className="grid lg:grid-cols-2">
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center p-10 md:p-14 lg:p-20">
                {/* Small Badge */}
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-orange-100 px-5 py-2">
                  <span className="text-orange-500">✨</span>

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                    Book Your Table
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-8 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
                  Enjoy an <br />
                  Unforgettable Dining Experience
                </h2>

                {/* Description */}
                <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
                  Reserve your table today and enjoy premium ambience,
                  handcrafted dishes, and luxury hospitality with your friends
                  and family.
                </p>

                {/* Stats */}
                <div className="mt-10 flex flex-wrap gap-10">
                  <div>
                    <h3 className="text-3xl font-black text-orange-500">
                      12K+
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">Happy Guests</p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-orange-500">
                      4.9★
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">Guest Rating</p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-orange-500">98%</h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Positive Feedback
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-12 flex flex-wrap gap-4">
                  <Link
                    to="/reservation"
                    className="rounded-2xl bg-orange-500 px-8 py-4 font-bold text-white shadow-[0_15px_40px_rgba(249,115,22,0.3)] transition-all duration-300 hover:scale-105 hover:bg-orange-600"
                  >
                    Reserve Table
                  </Link>

                  <Link
                    to="/menu"
                    className="rounded-2xl border border-orange-200 px-8 py-4 font-bold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                  >
                    Explore Menu
                  </Link>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative h-[420px] lg:h-auto">
                <img
                  src="/assets/images/bruschetta.jpg"
                  alt="Restaurant Dining"
                  className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/25"></div>

                {/* Bottom Glass Card */}
                <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/70">
                        Customer Satisfaction
                      </p>

                      <h3 className="mt-1 text-3xl font-black text-white">
                        98%
                      </h3>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-white/70">Reviews</p>

                      <div className="mt-1 text-lg text-yellow-300">
                        ⭐⭐⭐⭐⭐
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute right-6 top-6 rounded-2xl bg-white px-5 py-3 shadow-xl">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                    Since
                  </p>

                  <h4 className="mt-1 text-2xl font-black text-orange-500">
                    2017
                  </h4>
                </div>
              </div>
            </div>
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
