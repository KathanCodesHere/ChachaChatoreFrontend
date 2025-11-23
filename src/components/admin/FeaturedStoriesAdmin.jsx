import React, { useState } from "react";

// ---- INITIAL STORIES (same as main site) ----
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

  // temp form state
  const [form, setForm] = useState({
    title: "",
    desc: "",
    videoUrl: "",
  });

  // open add modal
  const openAddModal = () => {
    setEditingStory(null);
    setForm({ title: "", desc: "", videoUrl: "" });
    setModalOpen(true);
  };

  // open edit modal
  const openEditModal = (story) => {
    setEditingStory(story);
    setForm({
      title: story.title,
      desc: story.desc,
      videoUrl: story.videoUrl,
    });
    setModalOpen(true);
  };

  // save story
  const saveStory = () => {
    if (editingStory) {
      // UPDATE
      setStories(
        stories.map((s) =>
          s.id === editingStory.id ? { ...editingStory, ...form } : s
        )
      );
    } else {
      // ADD NEW
      const newStory = {
        id: Date.now(),
        ...form,
      };
      setStories([...stories, newStory]);
    }

    setModalOpen(false);
  };

  // delete
  const deleteStory = (id) => {
    setStories(stories.filter((s) => s.id !== id));
  };

  return (
    <div className="p-6 text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[#E86B40]">Featured Stories Admin</h2>
        <button
          onClick={openAddModal}
          className="bg-[#E86B40] px-4 py-2 rounded-lg font-semibold"
        >
          + Add New Story
        </button>
      </div>

      {/* LIST */}
      <div className="grid md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-[#242424] p-4 rounded-xl border border-[#333]"
          >
            <h3 className="text-xl font-bold text-[#00BFFF]">{story.title}</h3>
            <p className="text-sm text-gray-300 mt-1">{story.desc}</p>

            <iframe
              src={story.videoUrl}
              className="w-full h-40 mt-3 rounded-lg"
            ></iframe>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => openEditModal(story)}
                className="px-3 py-1 bg-blue-500 rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={() => deleteStory(story.id)}
                className="px-3 py-1 bg-red-500 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center p-4">
          <div className="bg-[#242424] p-6 rounded-xl w-full max-w-lg">
            <h2 className="text-2xl mb-4">
              {editingStory ? "Edit Story" : "Add New Story"}
            </h2>

            <input
              type="text"
              placeholder="Story Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full p-2 mb-3 bg-[#333] rounded"
            />

            <textarea
              placeholder="Description"
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              className="w-full p-2 mb-3 bg-[#333] rounded"
            />

            <input
              type="text"
              placeholder="YouTube Video URL"
              value={form.videoUrl}
              onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
              className="w-full p-2 mb-3 bg-[#333] rounded"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setModalOpen(false)}
                className="px-3 py-1 bg-gray-500 rounded"
              >
                Cancel
              </button>
              <button
                onClick={saveStory}
                className="px-4 py-1 bg-[#E86B40] rounded"
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
