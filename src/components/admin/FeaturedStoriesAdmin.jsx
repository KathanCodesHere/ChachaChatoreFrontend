import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const FeaturedStoriesAdmin = () => {
  const [stories, setStories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingStory, setEditingStory] = useState(null);

  const titleRef = useRef();
  const descRef = useRef();
  const videoRef = useRef();

  const API_URL = "https://chachachatore.com/services/stories.php";

  const fetchStories = async () => {
    try {
      const res = await axios.get(API_URL);
      if (res.data.status === "success") {
        setStories(res.data.data);
      }
    } catch (e) {}
  };

  useEffect(() => {
    fetchStories();
  }, []);

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

  const saveStory = async (e) => {
    e.preventDefault();

    const data = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      videoUrl: videoRef.current.value,
    };

    if (editingStory) {
      try {
        await axios.put(API_URL, { id: editingStory.id, ...data });
        setModalOpen(false);
        fetchStories();
      } catch (e) {}
      return;
    }

    try {
      await axios.post(API_URL, data);
      setModalOpen(false);
      fetchStories();
    } catch (e) {}
  };

  const deleteStory = async (id) => {
    try {
      const res = await axios.delete(API_URL, {
        data: { id: Number(id) },
      });
      if (res.data.status === "success") {
        setStories(stories.filter((s) => s.id !== id));
      }
    } catch (e) {}
  };

  const openAddModal = () => {
    setEditingStory(null);
    setModalOpen(true);
  };

  const openEditModal = (story) => {
    setEditingStory(story);
    setModalOpen(true);
  };

  return (
    <div className="p-4 text-white">
      <div className="flex justify-between mb-6">
        <h2 className="text-3xl font-bold text-[#E86B40]">Featured Stories Admin</h2>
        <button onClick={openAddModal} className="bg-[#E86B40] px-4 py-2 rounded-lg text-black">
          + Add Story
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div key={story.id} className="bg-[#242424] p-4 rounded-xl border">
            <h3 className="text-xl font-bold text-[#00BFFF]">{story.title}</h3>
            <p className="text-sm text-gray-300">{story.desc}</p>

            <div className="w-full h-40 mt-2">
              <iframe src={story.videoUrl} className="w-full h-full rounded-lg"></iframe>
            </div>

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

      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center p-4">
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

            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-600 rounded"
              >
                Cancel
              </button>

              <button type="submit" className="px-4 py-2 bg-[#E86B40] rounded text-black">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FeaturedStoriesAdmin;
