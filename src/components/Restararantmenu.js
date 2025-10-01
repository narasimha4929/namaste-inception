import React from "react";
import { useParams } from "react-router";
import useResturantMenu from "../../utils/useResturantMenu";

const Restararantmenu = () => {
  const { resid } = useParams();
  const recipe = useResturantMenu(resid);

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-5">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-red-500 rounded-full animate-spin"></div>
        <p className="text-lg text-gray-600">Loading delicious recipe...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white p-8 rounded-3xl shadow-lg mb-8 flex justify-between items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <h1 className="text-4xl font-bold text-gray-800">{recipe.name}</h1>
          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 px-5 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110">
            <span className="text-2xl">⭐</span>
            <span className="text-xl font-bold text-gray-800">
              {recipe.rating}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          {/* Image Section */}
          <div className="relative mb-8 rounded-2xl overflow-hidden group">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full font-semibold text-red-500 shadow-lg transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-110">
              {recipe.cuisine}
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              <span className="text-4xl">⏱️</span>
              <div>
                <p className="text-sm text-gray-600 font-medium">Prep Time</p>
                <p className="text-xl font-bold text-gray-800">
                  {recipe.prepTimeMinutes} mins
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              <span className="text-4xl">🍳</span>
              <div>
                <p className="text-sm text-gray-600 font-medium">Cook Time</p>
                <p className="text-xl font-bold text-gray-800">
                  {recipe.cookTimeMinutes} mins
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              <span className="text-4xl">👥</span>
              <div>
                <p className="text-sm text-gray-600 font-medium">Servings</p>
                <p className="text-xl font-bold text-gray-800">
                  {recipe.servings}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              <span className="text-4xl">📊</span>
              <div>
                <p className="text-sm text-gray-600 font-medium">Difficulty</p>
                <p className="text-xl font-bold text-gray-800">
                  {recipe.difficulty}
                </p>
              </div>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-3">
              <span className="text-3xl">🥗</span>
              Ingredients
            </h3>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:-translate-x-2 hover:shadow-md cursor-pointer"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    ✓
                  </span>
                  <span className="text-gray-700 font-medium">
                    {ingredient}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-3">
              <span className="text-3xl">📝</span>
              Instructions
            </h3>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-4 p-5 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:shadow-md hover:-translate-y-1 cursor-pointer group"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed pt-2">
                    {instruction}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restararantmenu;
