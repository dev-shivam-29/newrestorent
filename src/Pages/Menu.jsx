import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bruschettaImg from "../assets/images/bruschetta.jpg";
import caesarSaladImg from "../assets/images/caesar-salad.jpg";
import spinachDipImg from "../assets/images/spinach-dip.jpg";
import wagyuBurgerImg from "../assets/images/wagyu-burger.jpg";
import pizzaImg from "../assets/images/pizza.jpg";
import grilledSalmonImg from "../assets/images/grilled-salmon.jpg";
import lobsterPastaImg from "../assets/images/lobster-pasta.jpg";
import palakPaneerImg from "../assets/images/palak-paneer.jpg";
import lavaCakeImg from "../assets/images/lava-cake.jpg";
import tiramisuImg from "../assets/images/tiramisu.jpg";
import fruitTartImg from "../assets/images/fruit-tart.jpg";
import craftCocktailImg from "../assets/images/craft-cocktail.jpg";
import freshJuiceImg from "../assets/images/fresh-juice.jpg";
import wineImg from "../assets/images/wine.jpg";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("starters");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");
  const [vegFilter, setVegFilter] = useState("all");
  const [spiceFilter, setSpiceFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
        image: bruschettaImg,
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
        image: caesarSaladImg,
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
        image: spinachDipImg,
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
        image: bruschettaImg,
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
        image: caesarSaladImg,
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
        image: spinachDipImg,
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
        image: bruschettaImg,
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
        image: caesarSaladImg,
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
        image: wagyuBurgerImg,
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
        image: pizzaImg,
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
        image: grilledSalmonImg,
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
        image: lobsterPastaImg,
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
        image: palakPaneerImg,
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
        image: wagyuBurgerImg,
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
        image: pizzaImg,
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
        image: grilledSalmonImg,
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
        image: lavaCakeImg,
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
        image: tiramisuImg,
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
        image: fruitTartImg,
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
        image: lavaCakeImg,
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
        image: tiramisuImg,
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
        image: fruitTartImg,
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
        image: lavaCakeImg,
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
        image: tiramisuImg,
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
        image: craftCocktailImg,
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
        image: freshJuiceImg,
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
        image: wineImg,
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
        image: craftCocktailImg,
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
        image: freshJuiceImg,
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
        image: wineImg,
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
        image: freshJuiceImg,
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
        image: craftCocktailImg,
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
        image: wagyuBurgerImg,
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
        image: pizzaImg,
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
        image: grilledSalmonImg,
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
        image: lavaCakeImg,
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
        image: bruschettaImg,
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
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesVeg = vegFilter === "all" || (vegFilter === "veg" && item.isVegetarian) || (vegFilter === "non-veg" && !item.isVegetarian);
    const matchesSpice = spiceFilter === "all" || item.spiceLevel === spiceFilter;
    const matchesPrice = priceFilter === "all" || (priceFilter === "under-300" && item.price < 300) || (priceFilter === "300-500" && item.price >= 300 && item.price <= 500) || (priceFilter === "above-500" && item.price > 500);
    
    return matchesSearch && matchesVeg && matchesSpice && matchesPrice;
  });
  
  // Apply sorting
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "price-low-high") return a.price - b.price;
    if (sortBy === "price-high-low") return b.price - a.price;
    if (sortBy === "popular") return (b.isChefSpecial ? 1 : 0) - (a.isChefSpecial ? 1 : 0);
    return 0;
  });
  
  const chefRecommendations =
    sortedItems.filter((item) => item.isChefSpecial).length >= 4
      ? sortedItems.filter((item) => item.isChefSpecial).slice(0, 4)
      : sortedItems.slice(0, 4);

  return (
    <div className="bg-amber-50 text-gray-800 min-h-screen">
      {/* Cart Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setShowCart(!showCart)}
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-105 relative"
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
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </button>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 overflow-y-auto border-l border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Your Cart</h3>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="p-4">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                Your cart is empty
              </p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="mb-4 bg-gray-50 rounded-lg p-3 border border-gray-200"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-500">₹{item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
                      >
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded text-gray-700"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded text-gray-700"
                      >
                        +
                      </button>
                      <span className="ml-auto font-semibold text-gray-800">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-800">Total:</span>
                    <span className="text-xl font-bold text-gray-800">
                      ₹{getTotalPrice()}
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Overlay */}
      {showCart && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setShowCart(false)}
        />
      )}
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Hero Section */}
        <section className="relative overflow-hidden rounded-2xl mb-12 mt-8">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
          <div className="relative z-10 px-8 py-20 text-center">
            {/* Breadcrumbs */}
            <nav className="flex justify-center mb-6">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li>
                  <Link to="/" className="hover:text-orange-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-orange-500">Menu</span>
                </li>
              </ol>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Menu
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our carefully crafted dishes featuring fresh ingredients, authentic flavors, and culinary excellence. From traditional favorites to innovative creations, there's something for every palate.
            </p>
          </div>
        </section>

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
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-900/30 to-amber-900/30 border border-orange-500/20">
            <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🔥 Today's Special
            </div>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-300">Weekend Feast Combo</h3>
                <p className="text-gray-300 mb-4">
                  Complete meal for 2 people with 2 main courses, 1 starter, 2 beverages, and 1 dessert. Perfect for sharing with family and friends.
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-orange-400">₹1,299</span>
                  <span className="text-gray-400 line-through ml-2">₹1,599</span>
                  <span className="text-green-400 ml-2">Save ₹300</span>
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Order Special Combo
                </button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop"
                  alt="Weekend Special"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <div className="mb-8 bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for dishes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-1/3 p-3 rounded-lg bg-gray-50 border border-gray-300 outline-none focus:border-orange-500 text-gray-800"
              />
              <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Filter Options */}
        <div className="mb-8 bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">Filter Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Veg/Non-Veg Filter */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-800">Veg/Non-Veg</label>
                <div className="flex gap-2">
                  {['all', 'veg', 'non-veg'].map((option) => (
                    <button
                      key={option}
                      onClick={() => setVegFilter(option)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        vegFilter === option
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {option === 'all' ? '🌱 All' : option === 'veg' ? '🌱 Veg' : '🍖 Non-Veg'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Spice Level Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Spice Level</label>
                <div className="flex gap-2">
                  {['all', 'mild', 'medium', 'hot'].map((option) => (
                    <button
                      key={option}
                      onClick={() => setSpiceFilter(option)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        spiceFilter === option
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {option === 'all' ? '🌶 All' : option === 'mild' ? '🟢🟢⚪ Mild' : option === 'medium' ? '🟠🟠⚪ Medium' : '🔴🔴🔴 Hot'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <div className="flex gap-2">
                  {['all', 'under-300', '300-500', 'above-500'].map((option) => (
                    <button
                      key={option}
                      onClick={() => setPriceFilter(option)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        priceFilter === option
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {option === 'all' ? '💰 All' : option === 'under-300' ? '💵 Under ₹300' : option === '300-500' ? '💵 ₹300-500' : '💵 Above ₹500'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <label className="block text-sm font-medium mb-2">Sort By</label>
                <div className="flex flex-col gap-2">
                  {['default', 'price-low-high', 'price-high-low', 'popular'].map((option) => (
                    <button
                      key={option}
                      onClick={() => setSortBy(option)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        sortBy === option
                          ? 'bg-orange-500 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {option === 'default' ? '🔄 Default' : option === 'price-low-high' ? '💵 Price Low → High' : option === 'price-high-low' ? '💵 Price High → Low' : '⭐ Popular/Chef Special'}
                    </button>
                  ))}
                </div>
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
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
              <span className="ml-2 text-sm bg-orange-100 px-2 py-1 rounded-full text-orange-600 font-medium">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedItems.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-6xl mb-4">😢</div>
              <p className="text-xl text-gray-600">No items found</p>
              <p className="text-sm text-gray-500 mt-2">Try adjusting your filters or search terms</p>
            </div>
          ) : 
            sortedItems.map((item, index) => (
            <div
              key={item.id}
              className={`rounded-xl border border-gray-200 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedItem(item)}
            >
              {/* Item Image */}
              <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
                {item.isChefSpecial && (
                  <div className="absolute top-2 right-2 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Chef's Special
                  </div>
                )}
                {item.offer && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.offer}
                  </div>
                )}
              </div>

              {/* Item Details */}
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <div className="flex items-center gap-2">
                    {/* Veg/Non-Veg Marker */}
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        item.isVegetarian ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      <span className="text-white text-xs font-bold">
                        {item.isVegetarian ? "🌱" : "🍖"}
                      </span>
                    </div>
                    {/* Spice Level */}
                    <div className="flex gap-0.5">
                      {item.spiceLevel === "mild" && (
                        <>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        </>
                      )}
                      {item.spiceLevel === "medium" && (
                        <>
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        </>
                      )}
                      {item.spiceLevel === "hot" && (
                        <>
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{item.description}</p>

                {/* Dietary Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 text-gray-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price and Order Button */}
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-90 text-white px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chef Specials Section */}
        <div className="mt-16 bg-[#151515] border border-white/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Chef's Recommendations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {chefRecommendations.map((item) => (
              <div key={item.id} className="flex gap-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-32 w-32 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-300 mb-2">{item.description}</p>
                  <p className="text-orange-600 font-bold">₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-700 to-orange-500 py-14 text-center mt-16 rounded-2xl">
          <h2 className="text-3xl font-bold">Ready to Order?</h2>
          <p className="text-orange-100 mt-3">
            Book your table and enjoy premium dining
          </p>
        </section>

        {/* Food Item Detail Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500 scale-95 animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {selectedItem.name}
                  </h2>
                  <span className="text-3xl font-bold text-orange-600">
                    ₹{selectedItem.price}
                  </span>
                </div>

                <p className="text-lg text-gray-600 mb-6">
                  {selectedItem.description}
                </p>

                {/* Dietary Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Special Badges */}
                <div className="flex gap-4 mb-6">
                  {selectedItem.isChefSpecial && (
                    <div className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">
                      🏆 Chef's Special
                    </div>
                  )}
                  {selectedItem.offer && (
                    <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                      🎉 {selectedItem.offer}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Order Now
                  </button>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-orange-700 to-orange-500 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Dine With Us?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Reserve your table for an unforgettable dining experience or contact us for private events and special occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservation"
              className="bg-white text-orange-700 hover:bg-orange-50 px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
            >
              Reserve Table Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-700 px-8 py-3 rounded-lg font-bold transition-all"
            >
              Private Dining Inquiry
            </Link>
          </div>
          <div className="mt-6 flex justify-center gap-8 text-sm text-orange-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 8085977623</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>MG Road, Indore</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
