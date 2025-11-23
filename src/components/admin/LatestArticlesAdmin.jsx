import React, { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function LatestArticlesAdmin() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Chacha Chatore: Blogging Ka Naya Street Food Persona",
      desc:
        "Chacha Chatore ne street-food blogging ko ek nayi pahchan di hai — ek aisi personality jo na sirf khane ko dikhati hai, balki uske peeche chhupi kahaniyon ko bhi capture karti hai...",
      bg: "#1a1a1a",
    },
    {
      id: 2,
      title: "Trademark Story: Chacha Chatore Ki Growth aur Brand Journey",
      desc:
        "Chacha Chatore ek naam nahi, balki ek brand identity ban chuka hai — jiska trademark Vineet Vyas ke naam registered hai. Is branding ke peeche ek clear vision dikhai deta hai...",
      bg: "#1a1a1a",
    },
    {
      id: 3,
      title: "Chaat Chatore Franchise Ka Boom: Street Food Meets Organized Business",
      desc:
        "Chaat Chatore jaise franchises ne street food industry ko ek naye professional era me introduce kiya hai — ek aisa model jisme hygiene, branding, SOPs aur scalable business ek saath chal rahe hain...",
      bg: "#1a1a1a",
    },
  ]);

  const [newArticle, setNewArticle] = useState({ title: "", desc: "" });
  const [editingArticle, setEditingArticle] = useState(null);

  // ADD ARTICLE
  const handleAdd = () => {
    const id = Date.now();
    setArticles([...articles, { id, ...newArticle }]);
    setNewArticle({ title: "", desc: "" });
    setEditingArticle(null);
  };

  // DELETE ARTICLE
  const handleDelete = (id) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  // SAVE EDIT
  const handleEditSave = () => {
    setArticles(
      articles.map((a) => (a.id === editingArticle.id ? editingArticle : a))
    );
    setEditingArticle(null);
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Latest Articles</h1>
        <button
          onClick={() => setEditingArticle("add")}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          <Plus size={18} /> Add Article
        </button>
      </div>

      {/* ARTICLE CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-[#1f1f1f] rounded-xl shadow-md p-3 border border-[#333]"
          >
            <h2 className="font-bold text-lg text-[#E86B40]">{article.title}</h2>
            <p className="text-gray-400 text-sm mt-1 truncate">{article.desc}</p>

            {/* EDIT + DELETE */}
            <div className="flex gap-4 mt-3">
              <button
                onClick={() => setEditingArticle(article)}
                className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300"
              >
                <Pencil size={16} /> Edit
              </button>

              <button
                onClick={() => handleDelete(article.id)}
                className="flex items-center gap-1 text-red-500 hover:text-red-400"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {editingArticle && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-[#222] border border-[#444] w-96 p-6 rounded-2xl shadow-[0_0_25px_rgba(232,107,64,0.4)]">
            <h2 className="text-xl font-bold text-[#E86B40] mb-4">
              {editingArticle === "add" ? "Add Article" : "Edit Article"}
            </h2>

            <input
              type="text"
              placeholder="Article Title"
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-3 focus:border-[#E86B40] outline-none"
              value={
                editingArticle === "add" ? newArticle.title : editingArticle.title
              }
              onChange={(e) =>
                editingArticle === "add"
                  ? setNewArticle({ ...newArticle, title: e.target.value })
                  : setEditingArticle({ ...editingArticle, title: e.target.value })
              }
            />

            <textarea
              placeholder="Article Description"
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-4 focus:border-[#E86B40] outline-none"
              value={
                editingArticle === "add" ? newArticle.desc : editingArticle.desc
              }
              onChange={(e) =>
                editingArticle === "add"
                  ? setNewArticle({ ...newArticle, desc: e.target.value })
                  : setEditingArticle({ ...editingArticle, desc: e.target.value })
              }
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditingArticle(null)}
                className="px-3 py-1 rounded bg-[#333] text-white hover:bg-[#444]"
              >
                Cancel
              </button>
              <button
                onClick={editingArticle === "add" ? handleAdd : handleEditSave}
                className="px-4 py-1 bg-[#E86B40] text-black font-semibold rounded hover:bg-[#ff8a5c]"
              >
                {editingArticle === "add" ? "Add" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
