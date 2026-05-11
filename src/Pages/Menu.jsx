import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("starters");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoaded] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");
  const [vegFilter, setVegFilter] = useState("all");
  const [spiceFilter, setSpiceFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setSelectedItem(item);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity } : item,
        ),
      );
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Add custom styles for animations
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes scale-in {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      @keyframes slide-up {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      .animate-fade-in {
        animation: fade-in 0.3s ease-out;
      }
      .animate-scale-in {
        animation: scale-in 0.3s ease-out;
      }
      .animate-slide-up {
        animation: slide-up 0.5s ease-out;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const categories = [
    { id: "starters", name: "Starters", icon: "", count: 8 },
    { id: "main", name: "Main Course", icon: "", count: 8 },
    { id: "desserts", name: "Desserts", icon: "", count: 8 },
    { id: "beverages", name: "Beverages", icon: "", count: 8 },
    { id: "combos", name: "Combos", icon: "", count: 5 },
  ];

  const menuItems = {
    starters: [
      {
        id: 1,
        name: "Truffle Bruschetta",
        description:
          "Toasted bread with truffle oil, tomatoes, and fresh basil",
        price: 299,
        image: "/assets/bruschetta.jpg",
        tags: ["vegetarian", "gluten-free"],
        isChefSpecial: true,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 2,
        name: "Caesar Salad",
        description: "Romaine lettuce, parmesan, croutons, caesar dressing",
        price: 199,
        image: "/assets/caesar-salad.jpg",
        tags: ["vegetarian"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 3,
        name: "Spinach Artichoke Dip",
        description: "Creamy dip served with tortilla chips",
        price: 249,
        image: "/assets/spinach-dip.jpg",
        tags: ["vegetarian"],
        isChefSpecial: true,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 9,
        name: "Garlic Bread",
        description: "Toasted bread with garlic butter and herbs",
        price: 149,
        image: "/assets/pizza.jpg",
        tags: ["vegetarian"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 10,
        name: "Mushroom Soup",
        description: "Creamy mushroom soup with croutons",
        price: 179,
        image: "/assets/images/menupizza.jpg",
        tags: ["vegetarian", "gluten-free"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 11,
        name: "Stuffed Mushrooms",
        description: "Mushrooms stuffed with cheese and herbs",
        price: 229,
        image: "/assets/images/menupizza.jpg",
        tags: ["vegetarian"],
        isChefSpecial: true,
        isVegetarian: true,
        spiceLevel: "medium",
      },
      {
        id: 12,
        name: "Spring Rolls",
        description: "Crispy vegetable spring rolls with sweet chili sauce",
        price: 189,
        image: "/assets/images/menupizza.jpg",
        tags: ["vegetarian"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "medium",
      },
      {
        id: 13,
        name: "Nachos",
        description: "Loaded nachos with cheese, jalapenos and salsa",
        price: 259,
        image: "/assets/images/menupizza.jpg",
        tags: ["vegetarian"],
        isChefSpecial: true,
        isVegetarian: true,
        spiceLevel: "hot",
      },
    ],
    main: [
      {
        id: 4,
        name: "Wagyu Burger",
        description: "Premium beef with special sauce, lettuce, tomato",
        price: 599,
        image: "/assets/wagyu-burger.jpg",
        tags: ["non-vegetarian"],
        isChefSpecial: true,
        offer: "20% OFF on weekdays",
        isVegetarian: false,
        spiceLevel: "medium",
      },
      {
        id: 5,
        name: "Truffle Pizza",
        description: "Wood-fired pizza with black truffle and mozzarella",
        price: 399,
        image: "/assets/images/menupizza.jpg",
        tags: ["vegetarian"],
        isChefSpecial: true,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 6,
        name: "Grilled Salmon",
        description: "Atlantic salmon with lemon butter sauce and vegetables",
        price: 699,
        image: "/assets/grilled-salmon.jpg",
        imageFit: "contain",
        tags: ["non-vegetarian", "gluten-free"],
        isChefSpecial: false,
        isVegetarian: false,
        spiceLevel: "mild",
      },
      {
        id: 7,
        name: "Lobster Pasta",
        description: "Fresh pasta with lobster in creamy sauce",
        price: 799,
        image: "/assets/lobster-pasta.jpg",
        tags: ["non-vegetarian"],
        isChefSpecial: true,
        isVegetarian: false,
        spiceLevel: "mild",
      },
      {
        id: 8,
        name: "Palak Paneer",
        description: "Spinach curry with cottage cheese and Indian spices",
        price: 299,
        image: "/assets/palak-paneer.jpg",
        imageFit: "contain",
        tags: ["vegetarian", "vegan"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "medium",
      },
      {
        id: 9,
        name: "Grilled Chicken",
        description: "Herb-crusted chicken with roasted vegetables",
        price: 449,
        image: "/assets/images/menupizza.jpg",
        tags: ["non-vegetarian"],
        isChefSpecial: true,
        isVegetarian: false,
        spiceLevel: "medium",
      },
      {
        id: 14,
        name: "Veggie Delight Pizza",
        description: "Wood-fired pizza with seasonal vegetables",
        price: 349,
        image: "/assets/images/menupizza.jpg",
        tags: ["vegetarian"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 15,
        name: "Butter Chicken",
        description: "Creamy tomato curry with tender chicken pieces",
        price: 399,
        image: "/assets/images/menupizza.jpg",
        tags: ["non-vegetarian"],
        isChefSpecial: true,
        offer: "15% OFF",
        isVegetarian: false,
        spiceLevel: "hot",
      },
    ],
    desserts: [
      {
        id: 20,
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center",
        price: 299,
        image: "/assets/lava-cake.jpg",
        tags: ["vegetarian"],
        isChefSpecial: true,
        offer: "Buy 1 Get 1 Free",
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 21,
        name: "Tiramisu",
        description: "Classic Italian coffee-flavored dessert",
        price: 249,
        image: "/assets/tiramisu.jpg",
        tags: ["vegetarian"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 22,
        name: "Fruit Tart",
        description: "Fresh seasonal fruits on vanilla custard tart",
        price: 199,
        image: "/assets/fruit-tart.jpg",
        tags: ["vegetarian", "gluten-free"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 23,
        name: "Ice Cream Sundae",
        description: "Vanilla ice cream with chocolate sauce and nuts",
        price: 179,
        image: "/assets/images/menupizza.jpg",
        tags: ["vegetarian"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 24,
        name: "Cheesecake",
        description: "New York style cheesecake with berry compote",
        price: 279,
        image: "/assets/images/menupizza.jpg",
        tags: ["vegetarian"],
        isChefSpecial: true,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 25,
        name: "Gulab Jamun",
        description: "Traditional Indian sweet dumplings in sugar syrup",
        price: 149,
        image: "/assets/images/menupizza.jpg",
        tags: ["vegetarian"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 26,
        name: "Brownie",
        description: "Chocolate brownie with vanilla ice cream",
        price: 189,
        image: "/assets/images/menupizza.jpg",
        tags: ["vegetarian"],
        isChefSpecial: true,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 27,
        name: "Panna Cotta",
        description: "Italian custard with caramel sauce",
        price: 219,
        image: "/assets/images/menupizza.jpg",
        tags: ["vegetarian"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "mild",
      },
    ],
    beverages: [
      {
        id: 28,
        name: "Craft Cocktail",
        description: "Signature mix with premium spirits",
        price: 399,
        image: "/assets/craft-cocktail.jpg",
        tags: ["alcoholic"],
        isChefSpecial: true,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 29,
        name: "Fresh Juice",
        description: "Seasonal fresh fruits juice",
        price: 149,
        image: "/assets/fresh-juice.jpg",
        tags: ["non-alcoholic", "vegan"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 30,
        name: "Wine Selection",
        description: "Premium wines from around the world",
        price: 599,
        image: "/assets/wine.jpg",
        tags: ["alcoholic"],
        isChefSpecial: false,
        offer: "Happy Hour 5-7 PM",
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 31,
        name: "Mojito",
        description: "Fresh mint and lime cocktail",
        price: 299,
        image: "/assets/images/menupizza.jpg",
        tags: ["alcoholic"],
        isChefSpecial: true,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 32,
        name: "Lemonade",
        description: "Fresh squeezed lemonade with mint",
        price: 129,
        image: "/assets/images/menupizza.jpg",
        tags: ["non-alcoholic", "vegan"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 33,
        name: "Beer",
        description: "Craft beer selection",
        price: 249,
        image: "/assets/images/menupizza.jpg",
        tags: ["alcoholic"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 34,
        name: "Smoothie",
        description: "Mixed fruit smoothie with yogurt",
        price: 169,
        image: "/assets/images/menupizza.jpg",
        tags: ["non-alcoholic", "vegan"],
        isChefSpecial: true,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 35,
        name: "Whiskey Sour",
        description: "Classic whiskey cocktail with lemon",
        price: 349,
        image: "/assets/images/menupizza.jpg",
        tags: ["alcoholic"],
        isChefSpecial: false,
        offer: "25% OFF",
        isVegetarian: true,
        spiceLevel: "mild",
      },
    ],
    combos: [
      {
        id: 36,
        name: "Date Night Combo",
        description: "2 main courses, 1 dessert, 2 beverages",
        price: 999,
        image: "/assets/images/menupizza.jpg",
        tags: ["non-vegetarian"],
        isChefSpecial: true,
        offer: "Save ₹200",
        isVegetarian: false,
        spiceLevel: "medium",
      },
      {
        id: 37,
        name: "Veggie Delight Combo",
        description: "2 veg main courses, 1 dessert, 2 juices",
        price: 799,
        image: "/assets/images/menupizza.jpg",
        tags: ["vegetarian"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 38,
        name: "Family Feast",
        description: "4 main courses, 2 desserts, 4 beverages",
        price: 1999,
        image: "/assets/images/menupizza.jpg",
        tags: ["mixed"],
        isChefSpecial: true,
        offer: "Save ₹500",
        isVegetarian: false,
        spiceLevel: "medium",
      },
      {
        id: 39,
        name: "Kids Special",
        description: "1 main course, 1 dessert, 1 juice",
        price: 399,
        image: "/assets/images/menupizza.jpg",
        tags: ["vegetarian"],
        isChefSpecial: false,
        isVegetarian: true,
        spiceLevel: "mild",
      },
      {
        id: 40,
        name: "Executive Lunch",
        description: "1 starter, 1 main course, 1 beverage",
        price: 599,
        image: "/assets/images/menupizza.jpg",
        tags: ["vegetarian"],
        isChefSpecial: true,
        isVegetarian: true,
        spiceLevel: "mild",
      },
    ],
  };

  const currentItems = menuItems[selectedCategory] || [];

  // Apply filters
  const filteredItems = currentItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesVeg =
      vegFilter === "all" ||
      (vegFilter === "veg" && item.isVegetarian) ||
      (vegFilter === "non-veg" && !item.isVegetarian);
    const matchesSpice =
      spiceFilter === "all" || item.spiceLevel === spiceFilter;
    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "under-300" && item.price < 300) ||
      (priceFilter === "300-500" && item.price >= 300 && item.price <= 500) ||
      (priceFilter === "above-500" && item.price > 500);

    return matchesSearch && matchesVeg && matchesSpice && matchesPrice;
  });

  // Apply sorting
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "price-low-high") return a.price - b.price;
    if (sortBy === "price-high-low") return b.price - a.price;
    if (sortBy === "popular")
      return (b.isChefSpecial ? 1 : 0) - (a.isChefSpecial ? 1 : 0);
    return 0;
  });

  const chefRecommendations =
    sortedItems.filter((item) => item.isChefSpecial).length >= 4
      ? sortedItems.filter((item) => item.isChefSpecial).slice(0, 4)
      : sortedItems.slice(0, 4);

  return (
    <div className="bg-amber-50 text-gray-800 min-h-screen">
      {/* Cart Button */}
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={() => setShowCart(!showCart)}
          className="relative bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-2xl shadow-lg transition-all duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>

          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center font-semibold">
              {getTotalItems()}
            </span>
          )}
        </button>
      </div>

      {/* CLEAN PREMIUM CART SIDEBAR */}
      {showCart && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setShowCart(false)}
            className="fixed inset-0 z-40 bg-black/60"
          ></div>

          {/* Sidebar */}
          <div className="fixed right-0 top-0 z-50 h-full w-full sm:w-[400px] bg-[#111111] shadow-2xl flex flex-col">
            {/* Header */}
            <div className="border-b border-white/10 px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-orange-400 font-bold">
                    Smart Restaurant
                  </p>

                  <h2 className="mt-2 text-3xl font-black text-white">
                    Your Cart
                  </h2>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setShowCart(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-red-500"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="text-6xl mb-4">🛒</div>

                  <h3 className="text-2xl font-bold text-white">
                    Your Cart is Empty
                  </h3>

                  <p className="mt-2 text-gray-400">Add delicious dishes now</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex gap-4">
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-24 rounded-2xl object-cover"
                      />

                      {/* Content */}
                      <div className="flex flex-1 flex-col justify-between">
                        {/* Top */}
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-lg font-bold text-white">
                              {item.name}
                            </h4>

                            <p className="text-sm text-gray-400">
                              Premium Dish
                            </p>
                          </div>

                          {/* Remove */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            ✕
                          </button>
                        </div>

                        {/* Bottom */}
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-2xl font-black text-orange-400">
                            ₹{item.price}
                          </span>

                          {/* Quantity */}
                          <div className="flex items-center gap-3">
                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-orange-500">
                              -
                            </button>

                            <span className="font-bold text-white">1</span>

                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white hover:bg-orange-600">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-white/10 p-5">
                {/* Total */}
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Total Amount</p>

                    <h3 className="text-4xl font-black text-white">
                      ₹{getTotalPrice()}
                    </h3>
                  </div>

                  <div className="rounded-xl bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
                    🚚 Free Delivery
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 py-4 text-lg font-bold text-white transition hover:from-orange-600 hover:to-red-600">
                  🛒 Proceed To Checkout
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* Overlay */}
      {showCart && (
        <div
          className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm transition-all duration-300"
          onClick={() => setShowCart(false)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4">
        {/* ULTRA PREMIUM HERO SECTION */}
        <section className="relative mt-8 mb-16 overflow-hidden rounded-[40px] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.25)]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage: `url(/assets/menupizza.jpg)`,
            }}
          />
          {/* Dark Overlay */}
          /*{" "}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          /* Orange Glow
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl"></div>
          Grid Overlay
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          {/* CONTENT */}
          <div className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-6 py-24 text-center md:px-12">
            {/* Top Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-white/10 px-6 py-3 backdrop-blur-xl">
              <span className="text-orange-400 text-lg">🍽️</span>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-300">
                Premium Culinary Experience
              </span>
            </div>

            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-3 text-sm">
                <li>
                  <Link
                    to="/"
                    className="font-medium text-gray-300 transition hover:text-orange-400"
                  >
                    Home
                  </Link>
                </li>

                <li className="text-gray-500">/</li>

                <li className="font-semibold text-orange-400">Menu</li>
              </ol>
            </nav>

            {/* Main Heading */}
            <h1 className="max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl drop-shadow-lg animate-pulse hover:scale-105 transition-all duration-500">
              Discover Our
              <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-orange-600 via-yellow-500 bg-clip-text text-transparent bg-size-200% animate-pulse">
                {" "}
                Premium Menu
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Experience handcrafted dishes prepared with premium ingredients,
              authentic recipes, and unforgettable flavors designed to elevate
              every dining moment into an extraordinary culinary journey.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
              <button className="rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 font-bold text-white shadow-[0_20px_50px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-red-600 hover:shadow-red-500/50 transform hover:-translate-y-1">
                <span className="flex items-center gap-2">
                  🍽️ Explore Dishes
                </span>
              </button>
              <Link
                to="/reservation"
                className="rounded-2xl border-2 border-white/20 bg-white/10 px-8 py-4 font-bold text-orange-600 backdrop-blur-xl transition-all duration-300 hover:bg-orange-50 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  🍽 Reserve Your Table
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {[
                {
                  value: "80+",
                  label: "Premium Dishes",
                },
                {
                  value: "12K+",
                  label: "Happy Guests",
                },
                {
                  value: "4.9★",
                  label: "Guest Rating",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/10 px-8 py-6 backdrop-blur-xl"
                >
                  <h3 className="text-4xl font-black text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="flex h-12 w-7 justify-center rounded-full border border-white/30">
                <div className="mt-2 h-3 w-3 rounded-full bg-orange-400"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Special Offers Banner */}
      <div
        className={`bg-orange-600 text-white p-6 rounded-lg mb-8 text-center transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} hover:scale-105 transition-transform`}
      >
        <h2 className="text-2xl font-bold mb-2 animate-bounce">
          Today's Special Offers
        </h2>
        <p className="text-lg">
          20% OFF on all main course dishes • Happy Hour 5-7 PM on drinks
        </p>
      </div>

      {/* Today's Special / Seasonal Offer */}
      <section className="mb-16">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111114] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
          {/* Glow Effects */}
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl"></div>

          {/* Special Badge */}
          <div className="absolute right-5 top-5 z-20 rounded-full border border-red-400/20 bg-red-500/20 px-4 py-2 backdrop-blur-xl">
            <span className="text-xs font-bold tracking-[0.25em] text-red-300 animate-pulse">
              🔥 TODAY'S SPECIAL
            </span>
          </div>

          <div className="grid md:grid-cols-2">
            {/* Left Content */}
            <div className="relative z-10 flex flex-col justify-center p-8 md:p-12">
              {/* Small Tag */}
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-orange-400/20 bg-white/5 px-4 py-2 backdrop-blur-xl">
                <span className="text-orange-400">🍽️</span>

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-300">
                  Limited Offer
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                Weekend
                <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                  {" "}
                  Feast Combo
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
                Enjoy premium dishes, refreshing beverages, and delicious
                desserts crafted specially for a perfect weekend dining
                experience.
              </p>

              {/* Features */}
              <div className="mt-6 flex flex-wrap gap-3">
                {["2 Main Courses", "1 Starter", "2 Drinks", "1 Dessert"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200 backdrop-blur-xl"
                    >
                      ✨ {item}
                    </div>
                  ),
                )}
              </div>

              {/* Price */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-5xl font-black text-orange-400">
                  ₹1,299
                </span>

                <div className="flex flex-col">
                  <span className="text-xl text-gray-500 line-through">
                    ₹1,599
                  </span>

                  <span className="mt-1 w-fit rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400">
                    Save ₹300
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 px-7 py-4 font-bold text-white shadow-[0_20px_50px_rgba(249,115,22,0.45)] transition-all duration-300 hover:scale-105">
                  Order Combo
                </button>

                <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10">
                  Explore Menu
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="group relative min-h-[420px] overflow-hidden">
              <img
                src="/public/assets/pizza.jpg"
                alt="Weekend Feast Combo"
                className="h-full w-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <p className="text-xs uppercase tracking-[0.3em] text-orange-300">
                  Weekend Feast
                </p>
                <h4 className="mt-2 text-2xl font-black text-white">
                  Special Combo
                </h4>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-300">
                  Premium dishes crafted for your perfect weekend
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Premium Search Section */}
      <section className="mb-16">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0f0f11] shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          {/* Background Glow */}
          <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/10 blur-3xl"></div>

          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="relative z-10 p-8 md:p-10">
            {/* Top Heading */}
            <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-orange-400/20 bg-white/5 px-5 py-2 backdrop-blur-xl">
                  <span className="text-orange-400">🍽️</span>

                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">
                    Premium Search Experience
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                  Find Your
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                    {" "}
                    Favorite Dish
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
                  Search handcrafted dishes, luxury desserts, refreshing
                  beverages, and chef-special combos made with premium
                  ingredients.
                </p>
              </div>

              {/* Floating Badge */}
              <div className="rounded-[24px] border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                <p className="text-xs uppercase tracking-[0.3em] text-orange-300">
                  Collection
                </p>

                <h3 className="mt-2 text-3xl font-black text-white">80+</h3>

                <p className="mt-1 text-sm text-gray-400">Premium Dishes</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="group relative max-w-3xl">
              {/* Glow Border */}
              <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 opacity-0 blur transition-all duration-500 group-focus-within:opacity-100"></div>

              {/* Main Search Box */}
              <div className="relative flex items-center overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl">
                {/* Left Icon */}
                <div className="flex h-20 w-20 items-center justify-center border-r border-white/10 text-orange-400">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                {/* Input */}
                <input
                  type="text"
                  placeholder="Find your favorite dish..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-20 flex-1 bg-transparent px-6 text-lg font-medium text-white placeholder:text-gray-500 outline-none"
                />

                {/* Search Button */}
                <button className="mr-3 rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 px-7 py-4 font-bold text-white shadow-[0_20px_50px_rgba(249,115,22,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_60px_rgba(249,115,22,0.55)]">
                  Find My Favorite
                </button>
              </div>

              {/* Bottom Floating Info */}
              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "🍽️ Weekend Feast",
                  "🔥 Trending Dishes",
                  "🍕 Pizza Specials",
                  "🥤 Premium Drinks",
                  "🍰 Luxury Desserts",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-gray-300 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:scale-105"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Veg/Non-Veg Filter */}
          <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-red-50/30 p-6 shadow-[0_10px_40px_rgba(255,115,0,0.08)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_15px_50px_rgba(255,115,0,0.15)]">
            {/* Decorative Glow */}
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-orange-200/30 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-red-200/20 blur-3xl"></div>

            {/* Heading */}
            <div className="relative z-10 mb-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-xl shadow-lg">
                  🍽
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-gray-900">
                    Food Preference
                  </h3>

                  <p className="text-sm text-gray-500">
                    Choose your favorite category
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="relative z-10 flex flex-wrap gap-4">
              {["all", "veg", "non-veg"].map((option) => (
                <button
                  key={option}
                  onClick={() => setVegFilter(option)}
                  className={`group relative overflow-hidden rounded-2xl px-6 py-3 text-sm font-bold tracking-wide transition-all duration-300 transform hover:scale-105 ${
                    vegFilter === option
                      ? "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white shadow-[0_8px_25px_rgba(255,115,0,0.35)]"
                      : "border border-orange-100 bg-white/90 text-gray-700 shadow-sm hover:border-orange-300 hover:bg-orange-50"
                  }`}
                >
                  {/* Active Shine Effect */}
                  {vegFilter === option && (
                    <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    {option === "all" ? (
                      <>
                        🌟 <span>All Items</span>
                      </>
                    ) : option === "veg" ? (
                      <>
                        🥗 <span>Pure Veg</span>
                      </>
                    ) : (
                      <>
                        🍗 <span>Non-Veg</span>
                      </>
                    )}
                  </span>
                </button>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="relative z-10 mt-5 border-t border-orange-100 pt-4">
              <p className="text-xs text-gray-500">
                Explore dishes crafted specially for your taste 🍕
              </p>
            </div>
          </div>

          {/* Spice Level Filter */}
          <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-red-50/30 p-6 shadow-[0_10px_40px_rgba(255,115,0,0.08)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_15px_50px_rgba(255,115,0,0.15)]">
            <h3 className="text-lg font-extrabold text-gray-900 mb-4">
              Spice Level
            </h3>
            <div className="flex flex-wrap gap-2">
              {["all", "mild", "medium", "hot"].map((option) => (
                <button
                  key={option}
                  onClick={() => setSpiceFilter(option)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    spiceFilter === option
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {option === "all"
                    ? "🌶 All"
                    : option === "mild"
                      ? "🟢🟢⚪ Mild"
                      : option === "medium"
                        ? "🟠🟠⚪ Medium"
                        : "🔴🔴🔴 Hot"}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-red-50/30 p-6 shadow-[0_10px_40px_rgba(255,115,0,0.08)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_15px_50px_rgba(255,115,0,0.15)]">
            <h3 className="text-lg font-extrabold text-gray-900 mb-4">
              Price Range
            </h3>
            <div className="flex flex-wrap gap-2">
              {["all", "under-300", "300-500", "above-500"].map((option) => (
                <button
                  key={option}
                  onClick={() => setPriceFilter(option)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    priceFilter === option
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {option === "all"
                    ? "💰 All"
                    : option === "under-300"
                      ? "💵 Under ₹300"
                      : option === "300-500"
                        ? "💵 ₹300-500"
                        : "💵 Above ₹500"}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-red-50/30 p-6 shadow-[0_10px_40px_rgba(255,115,0,0.08)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_15px_50px_rgba(255,115,0,0.15)]">
            <h3 className="text-lg font-extrabold text-gray-900 mb-4">
              Sort By
            </h3>
            <div className="flex flex-col gap-2">
              {["default", "price-low-high", "price-high-low", "popular"].map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => setSortBy(option)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      sortBy === option
                        ? "bg-orange-500 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {option === "default"
                      ? "🔄 Default"
                      : option === "price-low-high"
                        ? "💵 Price Low → High"
                        : option === "price-high-low"
                          ? "💵 Price High → Low"
                          : "⭐ Popular/Chef Special"}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
            <span className="ml-2 text-sm opacity-75">({category.count})</span>
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {sortedItems.map((item, index) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isLoaded ? "animate-scale-in" : "opacity-0"}`}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className={`w-full h-48 object-cover ${item.imageFit || "object-cover"}`}
              />
              {item.isChefSpecial && (
                <div className="absolute top-2 right-2 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  🏆 Chef's Special
                </div>
              )}
              {item.offer && (
                <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  🎉 {item.offer}
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{item.description}</p>

              {/* Dietary Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-orange-500">
                    ₹{item.price}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    {item.spiceLevel === "mild" && "🟢🟢⚪"}
                    {item.spiceLevel === "medium" && "🟠🟠⚪"}
                    {item.spiceLevel === "hot" && "🔴🔴🔴"}
                  </div>
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chef Recommendations */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-40"></div>

        {/* Heading */}
        <div className="relative text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
            👨‍🍳 Premium Collection
          </span>

          <h2 className="mt-5 text-5xl font-extrabold text-gray-900 tracking-tight">
            Chef’s Recommendations
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Discover handcrafted dishes made with premium ingredients, rich
            flavors, and chef’s special recipes.
          </p>
        </div>

        {/* Cards */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefRecommendations.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-[28px] overflow-hidden bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 ${
                isLoaded ? "animate-scale-in" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-orange-200/30 to-yellow-200/20 blur-2xl"></div>

              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-lg">
                  ⭐ Chef Special
                </div>

                {/* Favorite Button */}
                <button className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-red-500 hover:scale-110 transition-all duration-300 shadow-lg">
                  ❤️
                </button>

                {/* Bottom Info */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-white text-xl font-bold">
                      {item.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-yellow-400 text-sm">⭐ 4.9</span>
                      <span className="text-white/70 text-sm">
                        (120 Reviews)
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/30 shadow-lg">
                    <span className="text-white font-bold text-lg">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  A delicious signature dish prepared with authentic spices,
                  fresh ingredients, and premium quality flavors loved by
                  foodies.
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:scale-[1.03]"
                  >
                    <span className="relative z-10">Add to Cart</span>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-white/20 skew-x-12"></div>
                  </button>

                  <button className="w-14 h-14 rounded-2xl border border-gray-200 bg-white hover:bg-orange-50 hover:border-orange-300 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md">
                    👁️
                  </button>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-[28px] border border-transparent group-hover:border-orange-200 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>
      {/* Ultra Premium Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
          {/* Animated Background Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>

          {/* Modal */}
          <div className="relative w-full max-w-6xl bg-white rounded-[40px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.35)] animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 z-50 w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white hover:bg-red-500 hover:rotate-90 transition-all duration-500 shadow-xl"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Main Layout */}
            <div className="grid lg:grid-cols-2">
              {/* Left Image Section */}
              <div className="relative h-[350px] lg:h-[750px] overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Floating Top Tags */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-3">
                  {selectedItem.isChefSpecial && (
                    <div className="bg-orange-500/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg border border-white/20">
                      👨‍🍳 Chef's Special
                    </div>
                  )}

                  {selectedItem.offer && (
                    <div className="bg-red-500/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg border border-white/20">
                      🎉 {selectedItem.offer}
                    </div>
                  )}
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="bg-white/20 backdrop-blur-xl text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                      ⭐ 4.9 Rating
                    </span>

                    <span className="bg-white/20 backdrop-blur-xl text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                      🔥 Trending
                    </span>

                    <span className="bg-white/20 backdrop-blur-xl text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                      🥗 Healthy
                    </span>
                  </div>

                  <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
                    {selectedItem.name}
                  </h1>

                  <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                    {selectedItem.description}
                  </p>
                </div>
              </div>

              {/* Right Content Section */}
              <div className="relative p-8 lg:p-12 bg-gradient-to-b from-white to-orange-50/40 overflow-y-auto">
                {/* Price Card */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-7 shadow-2xl mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

                  <p className="text-white/80 text-sm uppercase tracking-widest mb-2">
                    Starting Price
                  </p>

                  <div className="flex items-center justify-between">
                    <h2 className="text-5xl font-extrabold">
                      ₹{selectedItem.price}
                    </h2>

                    <div className="bg-white/20 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
                      <span className="text-sm font-semibold">
                        🚚 Free Delivery
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                    <div className="text-3xl mb-3">⏱️</div>
                    <h4 className="font-bold text-gray-800 mb-1">20-30 Min</h4>
                    <p className="text-sm text-gray-500">Fast Delivery</p>
                  </div>

                  <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                    <div className="text-3xl mb-3">🔥</div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      Freshly Made
                    </h4>
                    <p className="text-sm text-gray-500">Hot & Tasty</p>
                  </div>

                  <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                    <div className="text-3xl mb-3">🥬</div>
                    <h4 className="font-bold text-gray-800 mb-1">Organic</h4>
                    <p className="text-sm text-gray-500">Healthy Ingredients</p>
                  </div>

                  <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                    <div className="text-3xl mb-3">💯</div>
                    <h4 className="font-bold text-gray-800 mb-1">Premium</h4>
                    <p className="text-sm text-gray-500">Best Quality</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-5">
                    Dietary Preferences
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {selectedItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-5 py-2 bg-white border border-orange-200 text-orange-600 rounded-full text-sm font-semibold shadow-sm hover:bg-orange-50 hover:scale-105 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm mb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">
                        Quantity
                      </h4>

                      <p className="text-sm text-gray-500">
                        Choose your amount
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <button className="w-12 h-12 rounded-2xl bg-gray-100 hover:bg-orange-100 text-xl font-bold transition-all">
                        -
                      </button>

                      <span className="text-2xl font-bold text-gray-800">
                        1
                      </span>

                      <button className="w-12 h-12 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold transition-all shadow-lg">
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                  <button className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-5 rounded-3xl font-bold text-xl shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                    <span className="relative z-10">🛒 Add To Cart</span>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-1000 bg-white/20 skew-x-12"></div>
                  </button>

                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-white border border-gray-200 hover:border-orange-300 hover:bg-orange-50 text-gray-800 py-4 rounded-2xl font-bold transition-all duration-300 shadow-sm">
                      ❤️ Wishlist
                    </button>

                    <button
                      onClick={() => setSelectedItem(null)}
                      className="bg-black hover:bg-gray-900 text-white py-4 rounded-2xl font-bold transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Final Balanced CTA Section */}
      <section className="mt-20 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-16 sm:px-10 text-center shadow-lg">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
          Ready To Reserve Your Table?
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-orange-100 leading-relaxed">
          Enjoy delicious food, warm ambience, and memorable moments with your
          friends and family.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Reserve Button */}
          <Link
            to="/reservation"
            className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-orange-600 transition-all duration-300 hover:scale-105 hover:bg-orange-100"
          >
            🍽️ Reserve Table
          </Link>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="rounded-2xl border border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-orange-600"
          >
            📞 Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Menu;
