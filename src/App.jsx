import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductsSection from './components/ProductsSection';
import RecipesSection from './components/RecipesSection';
import RecipeModal from './components/RecipeModal';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    ).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const handleCheckout = () => {
    alert('Order placed! We will contact you shortly. (Demo)');
    setCart([]);
    setShowCart(false);
  };

  const openRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header 
        cartItemsCount={getTotalItems()} 
        onCartClick={() => setShowCart(true)} 
      />
      <Hero />
      <Features />
      <ProductsSection onAddToCart={addToCart} />
      <RecipesSection onViewRecipe={openRecipe} />
      <Contact />
      <Footer />

      {showCart && (
        <Cart
          cart={cart}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
        />
      )}

      {selectedRecipe && (
        <RecipeModal 
          recipe={selectedRecipe} 
          onClose={closeRecipe} 
        />
      )}
    </div>
  );
}

export default App;
