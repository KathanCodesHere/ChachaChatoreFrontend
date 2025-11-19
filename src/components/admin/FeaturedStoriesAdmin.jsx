import React, { useState } from "react";

const FeaturedStoriesAdmin = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [stories, setStories] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      const updated = stories.map((story) =>
        story.id === editingId
          ? { ...story, title, desc, videoUrl }
          : story
      );
      setStories(updated);
      alert("Story Updated Successfully!");
      setEditingId(null);
      setTitle("");
      setDesc("");
      setVideoUrl("");
      return;
    }

    const newStory = {
      id: Date.now(),
      title,
      desc,
      videoUrl,
    };
    setStories([...stories, newStory]);
    alert("Story Added Successfully!");
    setTitle("");
    setDesc("");
    setVideoUrl("");
  };

  const handleDelete = (id) => {
    const updated = stories.filter((story) => story.id !== id);
    setStories(updated);
  };

  const handleEdit = (story) => {
    setEditingId(story.id);
    setTitle(story.title);
    setDesc(story.desc);
    setVideoUrl(story.videoUrl);
  };

  return (
    <div className="p-5 bg-[#242424] rounded-xl shadow-lg text-[#F0ECD9]">
      <h2 className="text-2xl font-bold text-[#E86B40] mb-4">
        {editingId ? "Edit Featured Story" : "Add Featured Story"}
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-[#1b1b1b] px-3 py-2 rounded-lg outline-none text-[#F0ECD9] placeholder-[#b8b4a7]"
        />
        <input
          type="text"
          placeholder="Enter description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="bg-[#1b1b1b] px-3 py-2 rounded-lg outline-none text-[#F0ECD9] placeholder-[#b8b4a7]"
        />
        <input
          type="text"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="bg-[#1b1b1b] px-3 py-2 rounded-lg outline-none text-[#F0ECD9] placeholder-[#b8b4a7]"
        />
        <button
          type="submit"
          className="bg-[#E86B40] text-[#1b1b1b] py-2 px-4 rounded-lg font-semibold hover:bg-[#c75a33] transition-all self-start"
        >
          {editingId ? "Update Story" : "Add Story"}
        </button>
      </form>

      {/* List of Stories */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#E86B40] mb-2">
          Added Stories
        </h3>

        {stories.length === 0 ? (
          <p className="text-sm text-[#b8b4a7]">No stories added yet.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {stories.map((story) => (
              <div
                key={story.id}
                className="bg-[#1b1b1b] p-4 rounded-lg border border-[#333] flex flex-col"
              >
                {/* Story Info */}
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-[#F0ECD9]">{story.title}</h4>
                  <p className="text-sm text-[#d9d4c4] mt-1">{story.desc}</p>
                  <p className="text-sm font-semibold text-[#E86B40] mt-1">{story.videoUrl}</p>
                </div>

                {/* Buttons Below */}
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => handleEdit(story)}
                    className="bg-[#E86B40] text-[#1b1b1b] py-2 px-4 rounded-lg font-semibold hover:bg-[#c75a33] transition-all"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(story.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedStoriesAdmin;
