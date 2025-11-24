import React, { useState } from 'react';
import { ShoppingCart, Menu, X, User, Search, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const Header = ({ cartItemsCount, onCartClick, user, onAuthClick, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-green-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <div className="flex gap-4 items-center">
              <a href="tel:+263773039058" className="flex items-center gap-1 hover:text-green-200">
                <Phone size={14} />
                <span className="hidden sm:inline">+1 (234) 567-890</span>
              </a>
              <a href="mailto:agroglobalzw@gmail.com" className="flex items-center gap-1 hover:text-green-200">
                <Mail size={14} />
                <span className="hidden sm:inline">agroglobalzw@gmail.com</span>
              </a>
            </div>
            <div className="text-xs">
              {user ? (
                <span>Welcome, {user.name}!</span>
              ) : (
                <span>Free delivery on orders over $200</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2 hover:bg-gray-100 rounded"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <Logo className="w-10 h-10" />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-green-700">AgroGlobal</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Poultry & Feed Solutions</p>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 font-medium transition">Home</a>
            <a href="#products" className="text-gray-700 hover:text-green-600 font-medium transition">Products</a>
            <a href="#recipes" className="text-gray-700 hover:text-green-600 font-medium transition">Recipes</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition">Contact</a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            {/* Search Icon */}
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full">
              <Search size={20} className="text-gray-600" />
            </button>

            {/* User Account */}
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
                >
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden md:block text-sm font-medium">{user.name}</span>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border">
                    <div className="px-4 py-2 border-b">
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <a href="#orders" className="block px-4 py-2 hover:bg-gray-50">My Orders</a>
                    <a href="#recipes" className="block px-4 py-2 hover:bg-gray-50">My Recipes</a>
                    <a href="#settings" className="block px-4 py-2 hover:bg-gray-50">Settings</a>
                    <button 
                      onClick={() => {
                        onLogout();
                        setShowUserMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={onAuthClick}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-100 rounded-lg transition"
              >
                <User size={20} />
                <span className="hidden md:inline font-medium">Login</span>
              </button>
            )}

            {/* Shopping Cart */}
            <button 
              onClick={onCartClick} 
              className="relative p-2 hover:bg-green-50 rounded-full transition"
            >
              <ShoppingCart size={24} className="text-green-700" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-1">
            <a href="#home" className="block text-gray-700 hover:text-green-600 hover:bg-green-50 py-2 px-3 rounded font-medium">Home</a>
            <a href="#products" className="block text-gray-700 hover:text-green-600 hover:bg-green-50 py-2 px-3 rounded font-medium">Products</a>
            <a href="#recipes" className="block text-gray-700 hover:text-green-600 hover:bg-green-50 py-2 px-3 rounded font-medium">Recipes</a>
            <a href="#about" className="block text-gray-700 hover:text-green-600 hover:bg-green-50 py-2 px-3 rounded font-medium">About</a>
            <a href="#contact" className="block text-gray-700 hover:text-green-600 hover:bg-green-50 py-2 px-3 rounded font-medium">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
