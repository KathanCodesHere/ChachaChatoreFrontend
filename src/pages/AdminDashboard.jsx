import React, { useState } from "react";
import FeaturedStoriesAdmin from "../components/admin/FeaturedStoriesAdmin";
import RecipesInActionAdmin from "../components/admin/RecipesInActionAdmin";
import GetInTouchAdmin from "../components/admin/GetInTouchAdmin"; 
import ClientsAdmin from "../components/admin/ClientsAdmin";
import LatestArticlesAdmin from "@/components/admin/LatestArticlesAdmin";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("featured");

  return (
    <div className="flex min-h-screen bg-[#1b1b1b] text-[#F0ECD9]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#242424] p-6 flex flex-col gap-4 border-r border-[#333]">
        <h2 className="text-2xl font-bold text-[#E86B40] mb-6">
          Admin Dashboard
        </h2>

        {/* Sidebar Buttons */}
        <button
          onClick={() => setActiveSection("featured")}
          className={`text-left py-2 px-3 rounded-lg font-semibold transition-all ${
            activeSection === "featured"
              ? "bg-[#E86B40] text-[#1b1b1b]"
              : "hover:bg-[#333] text-[#F0ECD9]"
          }`}
        >
          Featured Stories
        </button>

        <button
          onClick={() => setActiveSection("recipes")}
          className={`text-left py-2 px-3 rounded-lg font-semibold transition-all ${
            activeSection === "recipes"
              ? "bg-[#E86B40] text-[#1b1b1b]"
              : "hover:bg-[#333] text-[#F0ECD9]"
          }`}
        >
          Our Recipes in Action
        </button>

        <button
          onClick={() => setActiveSection("touch")}
          className={`text-left py-2 px-3 rounded-lg font-semibold transition-all ${
            activeSection === "touch"
              ? "bg-[#E86B40] text-[#1b1b1b]"
              : "hover:bg-[#333] text-[#F0ECD9]"
          }`}
        >
          Get In Touch
        </button>

        <button
          onClick={() => setActiveSection("clients")}
          className={`text-left py-2 px-3 rounded-lg font-semibold transition-all ${
            activeSection === "clients"
              ? "bg-[#E86B40] text-[#1b1b1b]"
              : "hover:bg-[#333] text-[#F0ECD9]"
          }`}
        >
          Clients
        </button>

        <button
          onClick={() => setActiveSection("articles")}
          className={`text-left py-2 px-3 rounded-lg font-semibold transition-all ${
            activeSection === "articles"
              ? "bg-[#E86B40] text-[#1b1b1b]"
              : "hover:bg-[#333] text-[#F0ECD9]"
          }`}
        >
          Latest Articles
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activeSection === "featured" && <FeaturedStoriesAdmin />}
        {activeSection === "recipes" && <RecipesInActionAdmin />}
        {activeSection === "touch" && <GetInTouchAdmin />}
        {activeSection === "clients" && <ClientsAdmin />}
        {activeSection === "articles" && <LatestArticlesAdmin />}
      </main>
    </div>
  );
};

export default AdminDashboard;
