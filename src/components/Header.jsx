import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = ({ cartItemsCount, onCartClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Logo className="w-10 h-10" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-green-700">AgroGlobal</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Poultry & Feed Solutions</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
            <a href="#products" className="text-gray-700 hover:text-green-600 font-medium">Products</a>
            <a href="#recipes" className="text-gray-700 hover:text-green-600 font-medium">Recipes</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
          </nav>

          <button 
            onClick={onCartClick} 
            className="relative p-2 hover:bg-green-50 rounded-full"
          >
            <ShoppingCart size={24} className="text-green-700" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-2">
            <a href="#home" className="block text-gray-700 hover:text-green-600 py-2 font-medium">Home</a>
            <a href="#products" className="block text-gray-700 hover:text-green-600 py-2 font-medium">Products</a>
            <a href="#recipes" className="block text-gray-700 hover:text-green-600 py-2 font-medium">Recipes</a>
            <a href="#contact" className="block text-gray-700 hover:text-green-600 py-2 font-medium">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
