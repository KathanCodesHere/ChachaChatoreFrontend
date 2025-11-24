import React, { useState } from "react";

const initialStories = [
  {
    id: 1,
    title: "Indore’s Best Poha-Jalebi Morning",
    desc: "A delicious morning story from the streets of Indore.",
    videoUrl: "https://www.youtube-nocookie.com/embed/YQ8C7KWDlTY?si=fmYw6eRgZyA2Mxde",
  },
  {
    id: 2,
    title: "Street Food Tales from Sarafa Bazaar",
    desc: "Where flavors, lights, and laughter never sleep.",
    videoUrl: "https://www.youtube-nocookie.com/embed/YQ8C7KWDlTY?si=fmYw6eRgZyA2Mxde",
  },
  {
    id: 3,
    title: "Delhi’s Chaat Magic",
    desc: "Exploring spicy, tangy, and sweet street wonders of Delhi.",
    videoUrl: "https://www.youtube-nocookie.com/embed/jfKfPfyJRdk",
  },
  {
    id: 4,
    title: "Mumbai’s Rainy Vada Pav Trail",
    desc: "Because nothing beats chai and vada pav in the rain.",
    videoUrl: "https://www.youtube-nocookie.com/embed/jfKfPfyJRdk",
  },
];

const FeaturedStoriesAdmin = () => {
  const [stories, setStories] = useState(initialStories);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingStory, setEditingStory] = useState(null);

  const [form, setForm] = useState({
    title: "",
    desc: "",
    videoUrl: "",
  });

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

  const deleteStory = (id) => {
    setStories(stories.filter((s) => s.id !== id));
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

      {/* LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-[#242424] p-4 rounded-xl border border-[#333]"
          >
            <h3 className="text-lg sm:text-xl font-bold text-[#00BFFF] break-words">
              {story.title}
            </h3>

            <p className="text-sm text-gray-300 mt-1 break-words">{story.desc}</p>

            <iframe
              src={story.videoUrl}
              className="w-full h-48 sm:h-40 mt-3 rounded-lg"
            ></iframe>

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
