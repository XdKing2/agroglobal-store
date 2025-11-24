import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-10 h-10" />
              <h5 className="font-bold text-lg">AgroGlobal</h5>
            </div>
            <p className="text-gray-400">
              Empowering farmers with affordable poultry and feed solutions
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#products" className="hover:text-white">Products</a></li>
              <li><a href="#recipes" className="hover:text-white">Feed Recipes</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Contact Info</h5>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +263773039058</li>
              <li>✉️ agroglobalzw@gmail.com</li>
              <li>📍(Location cooming soon)</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AgroGlobal.All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
