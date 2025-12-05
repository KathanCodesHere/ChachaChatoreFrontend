import React, { useState, useRef, useEffect } from "react";

export default function TheWay() {
  const [stories, setStories] = useState([
    { id: 1, title: "Story 1", desc: "Description 1", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, title: "Story 2", desc: "Description 2", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingStory, setEditingStory] = useState(null);

  const titleRef = useRef();
  const descRef = useRef();
  const videoRef = useRef();

  const openAddModal = () => {
    setEditingStory(null);
    setModalOpen(true);
  };

  const openEditModal = (story) => {
    setEditingStory(story);
    setModalOpen(true);
  };

  // Populate input fields when modal opens or editingStory changes
  useEffect(() => {
    if (modalOpen && editingStory) {
      titleRef.current.value = editingStory.title;
      descRef.current.value = editingStory.desc;
      videoRef.current.value = editingStory.videoUrl;
    }

    if (modalOpen && !editingStory) {
      titleRef.current.value = "";
      descRef.current.value = "";
      videoRef.current.value = "";
    }
  }, [modalOpen, editingStory]);

  const saveStory = (e) => {
    e.preventDefault();
    // UI only - no API
    setModalOpen(false);
  };

  const deleteStory = (id) => {
    // UI only - no API
  };

  return (
    <div className="p-4 text-white">
      <div className="flex flex-col sm:flex-row justify-between mb-6 items-start sm:items-center gap-3">
        <h2 className="text-3xl font-bold text-[#E86B40]">
          The Way I Tell Stories
        </h2>

        <button
          onClick={openAddModal}
          className="bg-[#E86B40] px-4 py-2 rounded-lg text-black hover:bg-[#ff9d6e] transition"
        >
          + Add Story
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div key={story.id} className="bg-[#242424] p-4 rounded-xl border flex flex-col">
            <h3 className="text-xl font-bold text-[#00BFFF]">{story.title}</h3>
            <p className="text-sm text-gray-300">{story.desc}</p>

            <div className="w-full h-40 mt-2">
              <iframe
                src={story.videoUrl}
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                onClick={() => openEditModal(story)}
                className="px-3 py-1 bg-yellow-500 rounded-lg flex-1"
              >
                Edit
              </button>

              <button
                onClick={() => deleteStory(story.id)}
                className="px-3 py-1 bg-red-500 rounded-lg flex-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center p-4 z-50">
          <form
            onSubmit={saveStory}
            className="bg-[#222] border w-full max-w-lg p-6 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-[#E86B40] mb-4 text-center">
              {editingStory ? "Edit Story" : "Add New Story"}
            </h2>

            <input
              type="text"
              placeholder="Title"
              ref={titleRef}
              className="w-full bg-[#1b1b1b] p-2 rounded mb-2 text-white"
            />

            <textarea
              placeholder="Description"
              ref={descRef}
              className="w-full bg-[#1b1b1b] p-2 rounded mb-2 text-white"
            />

            <input
              type="text"
              placeholder="YouTube URL"
              ref={videoRef}
              className="w-full bg-[#1b1b1b] p-2 rounded mb-4 text-white"
            />

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-600 rounded w-full sm:w-auto"
              >
                Cancel
              </button>

              <button type="submit" className="px-4 py-2 bg-[#E86B40] rounded text-black w-full sm:w-auto">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
