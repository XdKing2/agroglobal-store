import React from 'react';
import RecipeCard from './RecipeCard';
import { recipes } from '../data/recipes';

const RecipesSection = ({ onViewRecipe, user, onAuthClick }) => {
  const handleRecipeClick = (recipe) => {
    if (!user) {
      // Show auth modal if user is not logged in
      onAuthClick();
    } else {
      // Show contact requirement modal
      onViewRecipe(recipe);
    }
  };

  return (
    <section id="recipes" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Homemade Feed Recipes
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Save 35-40% on feed costs with our proven recipes. Contact us to get the complete formula!
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔒</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Premium Recipe Access</h4>
              <p className="text-gray-700 mb-3">
                Our detailed feed recipes are available to registered customers. Each recipe includes:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Complete ingredient list with exact measurements
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Step-by-step preparation instructions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Nutritional breakdown and benefits
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Cost analysis and savings calculator
                </li>
              </ul>
              {!user && (
                <button
                  onClick={onAuthClick}
                  className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Sign Up to Access Recipes
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map(recipe => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              onView={handleRecipeClick}
              isLocked={!user}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
          <h4 className="text-2xl font-bold mb-3">Need Custom Feed Formulation?</h4>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our experts can create a custom feed recipe tailored to your specific needs, 
            flock size, and budget. Contact us for personalized consultation.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Contact Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
