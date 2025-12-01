import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function LatestArticlesAdmin() {
  const fetchURL = "https://chachachatore.com/services/admin/blogs/fetch.php";
  const deleteURL = "https://chachachatore.com/services/admin/blogs/delete.php";
  const addURL = "https://chachachatore.com/services/admin/blogs/add.php";
  const editURL = "https://chachachatore.com/services/admin/blogs/edit.php";

  const token = "09c26f3616fbb069c5b07d797b79ba362a384600";

  const [articles, setArticles] = useState([]);
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(true);

  const titleRef = useRef();
  const descRef = useRef();
  const editID = useRef(null);

  const fetchArticles = async () => {
    try {
      const res = await axios.get(fetchURL, {
        headers: { Authorization: token },
      });
      if (res.data.status === "success") {
        setArticles(res.data.blogs);
      }
    } catch (err) {
      console.log("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const openAdd = () => {
    setModal("add");
    setTimeout(() => {
      titleRef.current.value = "";
      descRef.current.value = "";
    }, 0);
  };

  const openEdit = (article) => {
    editID.current = article.id;
    setModal("edit");
    setTimeout(() => {
      titleRef.current.value = article.blog_title;
      descRef.current.value = article.blog_description;
    }, 0);
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(deleteURL, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        data: { id },
      });
      if (res.data.status === "success") fetchArticles();
    } catch (err) {
      console.log("Delete Error:", err);
    }
  };

  const handleSave = async () => {
    const title = titleRef.current.value.trim();
    const desc = descRef.current.value.trim();

    if (!title || !desc) return;

    try {
      if (modal === "add") {
        await axios.post(
          addURL,
          {
            blog_title: title,
            blog_description: desc,
          },
          { headers: { Authorization: token } }
        );
      } else {
        await axios.post(
          editURL,
          {
            id: editID.current,
            blog_title: title,
            blog_description: desc,
          },
          { headers: { Authorization: token } }
        );
      }

      fetchArticles();
      setModal(null);
    } catch (err) {
      console.log("Save Error:", err);
    }
  };

  if (loading) return <div className="text-white p-4">Loading...</div>;

  return (
    <div className="p-4 sm:p-6 text-white">
      <div className="flex flex-col sm:flex-row justify-between gap-3 items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#E86B40]">
          Latest Articles
        </h1>

        <button
          onClick={openAdd}
          className="appearance-none flex items-center gap-2 px-4 py-2 bg-[#E86B40] text-black rounded-lg font-semibold hover:bg-[#ff8a5c] transition"
        >
          <Plus size={18} /> Add Article
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-[#1f1f1f] rounded-xl shadow-md p-4 border border-[#333] hover:border-[#E86B40] transition"
          >
            <h2 className="font-bold text-lg text-[#E86B40]">
              {article.blog_title}
            </h2>

            <p className="text-gray-400 text-sm mt-1 line-clamp-3">
              {article.blog_description}
            </p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => openEdit(article)}
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

      {modal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="bg-[#222] border border-[#444] w-full max-w-md p-6 rounded-2xl shadow-[0_0_25px_rgba(232,107,64,0.4)]">
            <h2 className="text-xl font-bold text-[#E86B40] mb-4">
              {modal === "add" ? "Add Article" : "Edit Article"}
            </h2>

            <label className="text-sm text-gray-300">Title</label>
            <input
              type="text" ref={titleRef} className="appearance-none w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-4 focus:border-[#E86B40] outline-none" placeholder="Article Title"
            />

            <label className="text-sm text-gray-300">Description</label>
            <textarea ref={descRef} className="appearance-none w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-4 h-28 resize-none focus:border-[#E86B40] outline-none" placeholder="Article Description"></textarea>

            <div className="flex justify-end gap-3">
              <button onClick={() => setModal(null)}
                className="appearance-none px-4 py-2 bg-[#333] text-white rounded hover:bg-[#444]"
              >
                Cancel
              </button>

              <button onClick={handleSave}
                className="appearance-none px-4 py-2 bg-[#E86B40] text-black rounded font-semibold hover:bg-[#ff8a5c]"
              >
                {modal === "add" ? "Add" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
