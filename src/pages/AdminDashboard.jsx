import React, { useState } from "react";
import FeaturedStoriesAdmin from "../components/admin/FeaturedStoriesAdmin";
import RecipesInActionAdmin from "../components/admin/RecipesInActionAdmin";
import GetInTouchAdmin from "../components/admin/GetInTouchAdmin";
import ClientsAdmin from "../components/admin/ClientsAdmin";
import LatestArticlesAdmin from "@/components/admin/LatestArticlesAdmin";
import { Menu } from "lucide-react";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("featured");
  const [showSidebar, setShowSidebar] = useState(false); // MOBILE SIDEBAR

  return (
    <div className="flex min-h-screen bg-[#1b1b1b] text-[#F0ECD9] relative">

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#E86B40] rounded-lg shadow-lg"
      >
        <Menu size={22} color="#1b1b1b" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-[#1f1f1f] 
        p-6 pt-14 border-r border-[#2c2c2c] shadow-2xl shadow-black/40
        transform transition-transform duration-300 rounded-r-2xl
        ${showSidebar ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 z-40`}
      >
        {/* Title Section */}
        <div className="mb-6 pb-4 border-b border-[#333]">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#E86B40] to-[#ff9d6e] bg-clip-text text-transparent">
            Admin Dashboard
          </h2>
        </div>

        {/* Menu Buttons */}
        <div className="flex flex-col gap-3">
          {[
            ["featured", "Featured Stories"],
            ["recipes", "Our Recipes in Action"],
            ["touch", "Client Enquiries"],
            ["clients", "Clients"],
            ["articles", "Latest Articles"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => {
                setActiveSection(key);
                setShowSidebar(false);
              }}
              className={`text-left py-3 px-4 rounded-xl font-semibold transition-all 
                shadow-sm 
                ${
                  activeSection === key
                    ? "bg-[#E86B40] text-[#1b1b1b] shadow-md shadow-[#E86B40]/40"
                    : "bg-[#262626] text-[#F0ECD9] hover:bg-[#333] hover:shadow-md hover:shadow-black/30"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </aside>

      {/* Dim Background for mobile */}
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed inset-0 bg-black/50 md:hidden"
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto mt-12 md:mt-0">
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
