import React from 'react';
import { X } from 'lucide-react';

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            className="w-full h-64 object-cover rounded-t-xl" 
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold text-gray-900">{recipe.name}</h3>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full font-bold">
                Save {recipe.costSavings}
              </span>
            </div>
            <p className="text-gray-600">
              <strong>Recommended Age:</strong> {recipe.ageGroup}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3 text-green-700">📦 Ingredients:</h4>
            <ul className="space-y-2">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3 text-green-700">📝 Instructions:</h4>
            <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>💡 Tip:</strong> Use our feed mixing machines for best results and consistent quality!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
