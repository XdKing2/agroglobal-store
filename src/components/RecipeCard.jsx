import React from 'react';
import { Lock, TrendingDown } from 'lucide-react';

const RecipeCard = ({ recipe, onView, isLocked }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      {/* Image with Lock Overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className="w-full h-full object-cover"
        />
        {isLocked && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <Lock size={32} className="mx-auto mb-2" />
              <p className="text-sm font-semibold">Login to View</p>
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <TrendingDown size={16} />
          Save {recipe.costSavings}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2 text-gray-900">{recipe.name}</h4>
        <p className="text-sm text-gray-600 mb-3">
          Age Group: <span className="font-semibold text-gray-900">{recipe.ageGroup}</span>
        </p>
        
        {/* Preview Info */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Main Ingredients Preview:</p>
          <div className="flex flex-wrap gap-2">
            {recipe.ingredients.slice(0, 3).map((ingredient, idx) => (
              <span 
                key={idx} 
                className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium"
              >
                {ingredient.split('(')[0].trim()}
              </span>
            ))}
            {recipe.ingredients.length > 3 && (
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                +{recipe.ingredients.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onView(recipe)}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            isLocked
              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isLocked ? (
            <span className="flex items-center justify-center gap-2">
              <Lock size={16} />
              Login to View Full Recipe
            </span>
          ) : (
            'Request Full Recipe'
          )}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
