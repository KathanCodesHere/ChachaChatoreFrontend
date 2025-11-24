import React, { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function LatestArticlesAdmin() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Chacha Chatore: Blogging Ka Naya Street Food Persona",
      desc: "Chacha Chatore ne street-food blogging ko ek nayi pahchan di hai...",
    },
    {
      id: 2,
      title: "Trademark Story: Chacha Chatore Ki Growth aur Brand Journey",
      desc: "Chacha Chatore ek naam nahi, balki ek brand identity ban chuka hai...",
    },
    {
      id: 3,
      title: "Chaat Chatore Franchise Ka Boom",
      desc: "Chaat Chatore jaise franchises ne street food industry ko badal diya...",
    },
  ]);

  const [newArticle, setNewArticle] = useState({ title: "", desc: "" });
  const [editingArticle, setEditingArticle] = useState(null);

  const handleAdd = () => {
    const id = Date.now();
    setArticles([...articles, { id, ...newArticle }]);
    setNewArticle({ title: "", desc: "" });
    setEditingArticle(null);
  };

  const handleDelete = (id) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  const handleEditSave = () => {
    setArticles(
      articles.map((a) => (a.id === editingArticle.id ? editingArticle : a))
    );
    setEditingArticle(null);
  };

  return (
    <div className="p-4 sm:p-6 text-white">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#E86B40]">
          Latest Articles
        </h1>

        <button
          onClick={() => setEditingArticle("add")}
          className="appearance-none flex items-center gap-2 px-4 py-2 bg-[#E86B40] text-black rounded-lg font-semibold hover:bg-[#ff8a5c] transition"
        >
          <Plus size={18} /> Add Article
        </button>
      </div>

      {/* ARTICLE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-[#1f1f1f] rounded-xl shadow-md p-4 border border-[#333] 
            hover:border-[#E86B40] transition"
          >
            <h2 className="font-bold text-lg text-[#E86B40]">{article.title}</h2>

            <p className="text-gray-400 text-sm mt-1 line-clamp-3">
              {article.desc}
            </p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => setEditingArticle(article)}
                className="appearance-none flex items-center gap-1 text-yellow-400 hover:text-yellow-300"
              >
                <Pencil size={16} /> Edit
              </button>

              <button
                onClick={() => handleDelete(article.id)}
                className="appearance-none flex items-center gap-1 text-red-500 hover:text-red-400"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {editingArticle && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="bg-[#222] border border-[#444] w-full max-w-md p-6 rounded-2xl shadow-[0_0_25px_rgba(232,107,64,0.4)]">

            <h2 className="text-xl font-bold text-[#E86B40] mb-4">
              {editingArticle === "add" ? "Add Article" : "Edit Article"}
            </h2>

            {/* TITLE INPUT */}
            <label className="text-sm text-gray-300">Title</label>
            <input
              type="text"
              placeholder="Article Title"
              className="appearance-none w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-4 focus:border-[#E86B40] outline-none"
              value={
                editingArticle === "add"
                  ? newArticle.title
                  : editingArticle.title
              }
              onChange={(e) =>
                editingArticle === "add"
                  ? setNewArticle({ ...newArticle, title: e.target.value })
                  : setEditingArticle({ ...editingArticle, title: e.target.value })
              }
            />

            {/* DESCRIPTION INPUT */}
            <label className="text-sm text-gray-300">Description</label>
            <textarea
              placeholder="Article Description"
              className="appearance-none w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-4 h-28 resize-none focus:border-[#E86B40] outline-none"
              value={
                editingArticle === "add"
                  ? newArticle.desc
                  : editingArticle.desc
              }
              onChange={(e) =>
                editingArticle === "add"
                  ? setNewArticle({ ...newArticle, desc: e.target.value })
                  : setEditingArticle({ ...editingArticle, desc: e.target.value })
              }
            />

            {/* MODAL BUTTONS */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditingArticle(null)}
                className="appearance-none px-4 py-2 bg-[#333] text-white rounded hover:bg-[#444]"
              >
                Cancel
              </button>

              <button
                onClick={
                  editingArticle === "add" ? handleAdd : handleEditSave
                }
                className="appearance-none px-4 py-2 bg-[#E86B40] text-black rounded font-semibold hover:bg-[#ff8a5c]"
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
