import React, { useState, useEffect } from "react";
import axios from "axios";

const FeaturedStoriesAdmin = () => {
  const [stories, setStories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingStory, setEditingStory] = useState(null);

  const [form, setForm] = useState({
    title: "",
    desc: "",
    videoUrl: "",
  });
//get api
  const fetchStories = async () => {
    try {
      const res = await axios.get("https://chachachatore.com/services/stories.php");
      if (res.data.status === "success") {
        setStories(res.data.data);
      } else {
        alert(res.data.message || "Failed to fetch stories.");
      }
    } catch (error) {
      console.error("Error fetching stories:", error);
      alert("Error fetching stories");
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const openAddModal = () => {
    setEditingStory(null);
    setForm({ title: "", desc: "", videoUrl: "" });
    setModalOpen(true);
  };

  const openEditModal = (story) => {
    setEditingStory(story);
    setForm({
      title: story.title,
      desc: story.desc,
      videoUrl: story.videoUrl,
    });
    setModalOpen(true);
  };

  const saveStory = () => {
    if (!form.title || !form.videoUrl) {
      alert("Title and Video URL are required.");
      return;
    }

    if (editingStory) {
      setStories(
        stories.map((s) =>
          s.id === editingStory.id ? { ...editingStory, ...form } : s
        )
      );
    } else {
      const newStory = {
        id: Date.now(),
        ...form,
      };
      setStories([...stories, newStory]);
    }

    setModalOpen(false);
  };
//delete api
  const deleteStory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this story?")) return;

    try {
      const res = await axios.delete(`https://chachachatore.com/services/stories.php`, {
        data: { id }, 
      });

      if (res.data.status === "success") {
        setStories(stories.filter((s) => s.id !== id));
      } else {
        alert(res.data.message || "Failed to delete story.");
      }
    } catch (error) {
      console.error("Error deleting story:", error);
      alert("Error deleting story");
    }
  };

  return (
    <div className="p-4 sm:p-6 text-white">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#E86B40]">Featured Stories Admin</h2>
        <button
          onClick={openAddModal}
          className="bg-[#E86B40] px-4 py-2 rounded-lg font-semibold text-black hover:bg-[#ff8a5c] w-full sm:w-auto"
        >
          + Add New Story
        </button>
      </div>

      {/* STORIES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-[#242424] p-4 rounded-xl border border-[#333] flex flex-col h-full"
          >
            {/* Scrollable content */}
            <div className="flex-1 overflow-hidden">
              <h3 className="text-lg sm:text-xl font-bold text-[#00BFFF] break-words mb-2">
                {story.title}
              </h3>
              <p className="text-sm text-gray-300 break-words mb-3 line-clamp-4">
                {story.desc}
              </p>
              <div className="w-full h-40 sm:h-36">
                <iframe
                  src={story.videoUrl}
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
            {/* Buttons fixed at bottom */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => openEditModal(story)}
                className="px-3 py-1 bg-yellow-500 rounded-lg text-black w-full"
              >
                Edit
              </button>
              <button
                onClick={() => deleteStory(story.id)}
                className="px-3 py-1 bg-red-500 rounded-lg w-full"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="bg-[#222] border border-[#444] w-full max-w-lg p-6 rounded-2xl shadow-[0_0_30px_rgba(232,107,64,0.4)]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#E86B40] mb-4 text-center">
              {editingStory ? "Edit Story" : "Add New Story"}
            </h2>
            <label className="block text-gray-300 mb-1">Title</label>
            <input
              type="text"
              placeholder="Story Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-3 outline-none focus:border-[#E86B40]"
            />
            <label className="block text-gray-300 mb-1">Description</label>
            <textarea
              placeholder="Description"
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-3 outline-none focus:border-[#E86B40]"
            />
            <label className="block text-gray-300 mb-1">YouTube Video URL</label>
            <input
              type="text"
              placeholder="YouTube Video URL"
              value={form.videoUrl}
              onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-4 outline-none focus:border-[#E86B40]"
            />
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded bg-[#333] text-white hover:bg-[#444] w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                onClick={saveStory}
                className="px-4 py-2 bg-[#E86B40] text-black font-semibold rounded hover:bg-[#ff8a5c] w-full sm:w-auto"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedStoriesAdmin;
