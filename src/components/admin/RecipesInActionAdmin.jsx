import React, { useState } from "react";

const RecipesInActionAdmin = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ title: "", link: "" });

  const handleAddRecipe = () => {
    if (!newRecipe.title || !newRecipe.link) return;

    setRecipes([...recipes, { ...newRecipe, id: Date.now() }]);
    setNewRecipe({ title: "", link: "" });
  };

  const handleDelete = (id) => {
    setRecipes(recipes.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#e86b40] mb-6">
        Recipes in Action Admin
      </h2>

      {/* Add Recipe */}
      <div className="bg-[#242424] p-6 rounded-lg mb-6">
        <input
          type="text"
          placeholder="Recipe Title"
          className="w-full mb-3 p-3 bg-[#1b1b1b] rounded"
          value={newRecipe.title}
          onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
        />

        <input
          type="text"
          placeholder="Video/Image Link"
          className="w-full mb-3 p-3 bg-[#1b1b1b] rounded"
          value={newRecipe.link}
          onChange={(e) => setNewRecipe({ ...newRecipe, link: e.target.value })}
        />

        <button
          onClick={handleAddRecipe}
          className="bg-[#e86b40] text-[#1b1b1b] px-5 py-2 rounded font-bold"
        >
          Add Recipe
        </button>
      </div>

      {/* List */}
      <div className="grid gap-4">
        {recipes.length === 0 && (
          <p className="text-gray-400">No recipes added yet.</p>
        )}

        {recipes.map((item) => (
          <div
            key={item.id}
            className="bg-[#242424] p-5 rounded-lg flex justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#e86b40]">{item.title}</h3>
              <p className="text-sm">{item.link}</p>
            </div>

            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-400 hover:text-red-200"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesInActionAdmin;
