import React, { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function RecipeVideos() {
  const [videos, setVideos] = useState([
    {
      id: 1,
      videoTitle: "Street Chai Chronicles",
      videoUrl: "/videos/road.mp4",
      videoId: "VID001",
    },
    {
      id: 2,
      videoTitle: "Midnight Biryani Diaries",
      videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
      videoId: "VID002",
    },
    {
      id: 3,
      videoTitle: "Spice Route Stories",
      videoUrl: "/videos/road.mp4",
      videoId: "VID003",
    },
  ]);

  const [newVideo, setNewVideo] = useState({
    videoTitle: "",
    videoUrl: "",
    videoId: "",
  });

  const [editVideo, setEditVideo] = useState(null);

  // ---- ADD VIDEO ----
  const handleAdd = () => {
    const id = Date.now();
    setVideos([...videos, { id, ...newVideo }]);
    setNewVideo({ videoTitle: "", videoUrl: "", videoId: "" });
    setEditVideo(null);
  };

  // ---- DELETE VIDEO ----
  const handleDelete = (id) => {
    setVideos(videos.filter((v) => v.id !== id));
  };

  // ---- SAVE EDIT ----
  const handleEditSave = () => {
    setVideos(videos.map((v) => (v.id === editVideo.id ? editVideo : v)));
    setEditVideo(null);
  };

  return (
    <div className="p-4 sm:p-6 text-white">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#E86B40]">
          Recipe In Action
        </h1>

        <button
          onClick={() => setEditVideo("add")}
          className="flex items-center gap-2 px-4 py-2 bg-[#E86B40] text-black rounded-lg font-semibold w-full sm:w-auto"
        >
          <Plus size={18} /> Add Video
        </button>
      </div>

      {/* VIDEO CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-[#1f1f1f] rounded-xl shadow-md p-4 border border-[#333]"
          >
            {/* AUTO-DETECT VIDEO TYPE */}
            {video.videoUrl.includes("youtube") ? (
              <iframe
                className="w-full h-48 sm:h-40 rounded-lg"
                src={video.videoUrl}
                allowFullScreen
                title={video.videoTitle}
              ></iframe>
            ) : (
              <video
                className="w-full h-48 sm:h-40 rounded-lg"
                src={video.videoUrl}
                controls
              ></video>
            )}

            {/* TITLE */}
            <h2 className="font-bold text-lg text-[#E86B40] mt-3 break-words">
              {video.videoTitle}
            </h2>

            <p className="text-gray-400 text-xs mt-1 break-all">
              {video.videoUrl}
            </p>
            <p className="text-gray-500 text-xs">Video ID: {video.videoId}</p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 mt-3">
              <button
                onClick={() => setEditVideo(video)}
                className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300"
              >
                <Pencil size={16} /> Edit
              </button>

              <button
                onClick={() => handleDelete(video.id)}
                className="flex items-center gap-1 text-red-500 hover:text-red-400"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {editVideo && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="bg-[#222] border border-[#444] w-full max-w-md p-6 rounded-2xl shadow-[0_0_30px_rgba(232,107,64,0.4)]">

            <h2 className="text-xl sm:text-2xl font-bold text-[#E86B40] mb-4">
              {editVideo === "add" ? "Add New Video" : "Edit Video"}
            </h2>

            {/* VIDEO TITLE */}
            <label className="text-sm text-gray-300">Video Title</label>
            <input
              type="text"
              placeholder="Enter Video Title"
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-3 outline-none focus:border-[#E86B40]"
              value={editVideo === "add" ? newVideo.videoTitle : editVideo.videoTitle}
              onChange={(e) =>
                editVideo === "add"
                  ? setNewVideo({ ...newVideo, videoTitle: e.target.value })
                  : setEditVideo({ ...editVideo, videoTitle: e.target.value })
              }
            />

            {/* VIDEO URL */}
            <label className="text-sm text-gray-300">Video URL</label>
            <input
              type="text"
              placeholder="YouTube Embed / MP4 URL"
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-3 outline-none focus:border-[#E86B40]"
              value={editVideo === "add" ? newVideo.videoUrl : editVideo.videoUrl}
              onChange={(e) =>
                editVideo === "add"
                  ? setNewVideo({ ...newVideo, videoUrl: e.target.value })
                  : setEditVideo({ ...editVideo, videoUrl: e.target.value })
              }
            />

            {/* VIDEO ID */}
            <label className="text-sm text-gray-300">Video ID</label>
            <input
              type="text"
              placeholder="Enter Video ID"
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-4 outline-none focus:border-[#E86B40]"
              value={editVideo === "add" ? newVideo.videoId : editVideo.videoId}
              onChange={(e) =>
                editVideo === "add"
                  ? setNewVideo({ ...newVideo, videoId: e.target.value })
                  : setEditVideo({ ...editVideo, videoId: e.target.value })
              }
            />

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => setEditVideo(null)}
                className="px-4 py-2 rounded bg-[#333] text-white hover:bg-[#444] w-full sm:w-auto"
              >
                Cancel
              </button>

              <button
                onClick={editVideo === "add" ? handleAdd : handleEditSave}
                className="px-4 py-2 bg-[#E86B40] text-black font-semibold rounded hover:bg-[#ff8a5c] w-full sm:w-auto"
              >
                {editVideo === "add" ? "Add" : "Save"}
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
