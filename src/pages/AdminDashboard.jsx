import React, { useState } from "react";
import FeaturedStoriesAdmin from "../components/admin/FeaturedStoriesAdmin";
import RecipesInActionAdmin from "../components/admin/RecipesInActionAdmin";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("featured");

  return (
    <div className="flex min-h-screen bg-[#1b1b1b] text-[#f0ecd9]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#242424] p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-[#FF007F] mb-6">
          Admin Dashboard
        </h2>
        <button
          onClick={() => setActiveSection("featured")}
          className={`text-left py-2 px-3 rounded-lg font-semibold transition-all ${
            activeSection === "featured"
              ? "bg-[#FF007F] text-white"
              : "hover:bg-[#333]"
          }`}
        >
          Featured Stories
        </button>
        <button
          onClick={() => setActiveSection("recipes")}
          className={`text-left py-2 px-3 rounded-lg font-semibold transition-all ${
            activeSection === "recipes"
              ? "bg-[#FF007F] text-white"
              : "hover:bg-[#333]"
          }`}
        >
          Our Recipes in Action
        </button>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activeSection === "featured" && <FeaturedStoriesAdmin />}
        {activeSection === "recipes" && <RecipesInActionAdmin />}
      </main>
    </div>
  );
};

export default AdminDashboard;
