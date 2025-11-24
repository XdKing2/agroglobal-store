import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-green-600 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Reduce Farming Costs by 40%</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Quality poultry, homemade feed recipes, and affordable feed-making machines
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#products" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
            >
              Shop Products
            </a>
            <a 
              href="#recipes" 
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition border-2 border-white"
            >
              View Recipes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
