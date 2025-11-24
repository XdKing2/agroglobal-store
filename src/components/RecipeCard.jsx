import React from 'react';
import { ChevronRight } from 'lucide-react';

const RecipeCard = ({ recipe, onViewRecipe }) => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border border-green-100">
      <img 
        src={recipe.image} 
        alt={recipe.name} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-gray-900">{recipe.name}</h4>
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            Save {recipe.costSavings}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Age:</strong> {recipe.ageGroup}
        </p>
        <button
          onClick={() => onViewRecipe(recipe)}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-medium flex items-center justify-center gap-2"
        >
          View Recipe <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
