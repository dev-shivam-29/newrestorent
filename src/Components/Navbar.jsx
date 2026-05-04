import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300 ${
          isScrolled ? "shadow-xl shadow-gray-900/50" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/30">
                <span className="text-white font-bold text-xl">SR</span>
              </div>
              <span className="text-2xl font-bold text-orange-500">
                Smart Restaurant
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { to: "/", label: "Home" },
                { to: "/menu", label: "Menu" },
                { to: "/about", label: "About" },
                { to: "/reservation", label: "Reservations" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
                { to: "/offers", label: "Offers / Events" },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `transition-colors ${
                      isActive ? "text-orange-500" : "text-gray-300 hover:text-orange-500"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                {showMenu ? (
                  <FaTimes className="text-2xl" />
                ) : (
                  <FaBars className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 animate-fade-in">
            <div className="px-4 py-4 space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/menu", label: "Menu" },
                { to: "/about", label: "About" },
                { to: "/reservation", label: "Reservations" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
                { to: "/offers", label: "Offers / Events" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setShowMenu(false)}
                  className="block text-gray-300 hover:text-orange-500 py-2 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
