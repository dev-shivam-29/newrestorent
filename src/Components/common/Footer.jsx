const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">Restaurant</h3>
            <p className="text-gray-400">
              Serving exceptional cuisine since 2015. Your satisfaction is our priority.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="/menu" className="hover:text-orange-500 transition-colors">Menu</a></li>
              <li><a href="/about" className="hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="/offers" className="hover:text-orange-500 transition-colors">Offers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 123 Restaurant Street</li>
              <li>📞 +1 234 567 8900</li>
              <li>📧 info@restaurant.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Mon-Thu: 11AM - 10PM</li>
              <li>Fri-Sat: 11AM - 11PM</li>
              <li>Sunday: 12PM - 9PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
