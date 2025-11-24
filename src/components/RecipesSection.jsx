import React from 'react';
import RecipeCard from './RecipeCard';
import { recipes } from '../data/recipes';

const RecipesSection = ({ onViewRecipe }) => {
  return (
    <section id="recipes" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">Homemade Feed Recipes</h3>
        <p className="text-center text-gray-600 mb-10">Save money with these proven formulas</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map(recipe => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              onViewRecipe={onViewRecipe} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
