import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const RecipesInActionAdmin = () => {
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleAddRecipe = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "recipesInAction"), {
        title,
        videoUrl,
      });
      alert(" Recipe Added!");
      setTitle("");
      setVideoUrl("");
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-[#00BFFF]">
        Add Recipe In Action
      </h2>
      <form onSubmit={handleAddRecipe} className="flex flex-col gap-4 w-[400px]">
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 rounded-lg bg-[#242424] text-white"
        />
        <input
          type="text"
          placeholder="YouTube Embed URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="p-3 rounded-lg bg-[#242424] text-white"
        />
        <button
          type="submit"
          className="bg-[#FF007F] py-2 rounded-lg font-bold hover:bg-[#bf0c66]"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipesInActionAdmin;
