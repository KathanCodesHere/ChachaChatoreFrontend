import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function RecipeVideos() {
  const fetchURL = "https://chachachatore.com/services/admin/videos/all.php";
  const deleteURL = "https://chachachatore.com/services/admin/videos/delete.php"; // Replace if different
  const token = "09c26f3616fbb069c5b07d797b79ba362a384600";

  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState({ videoTitle: "", videoUrl: "", videoId: "" });
  const [editVideo, setEditVideo] = useState(null);

//get api
  const fetchVideos = async () => {
    try {
      const res = await axios.get(fetchURL, { headers: { Authorization: token } });
      console.log("API VIDEOS:", res.data);

      if (res.data.status === "success") {
        setVideos(res.data.videos || []);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);
//Delete api
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(deleteURL, {
        headers: { Authorization: token, "Content-Type": "application/json" },
        data: { id },
      });
      if (res.data.status === "success") {
        fetchVideos();
      }
    } catch (err) {
      console.error("Delete Error:", err);
    }
  };

  const handleAdd = () => {
    const id = Date.now();
    setVideos([...videos, { id, ...newVideo }]);
    setNewVideo({ videoTitle: "", videoUrl: "", videoId: "" });
    setEditVideo(null);
  };

  const handleEditSave = () => {
    setVideos(videos.map((v) => (v.id === editVideo.id ? editVideo : v)));
    setEditVideo(null);
  };

  return (
    <div className="p-4 sm:p-6 text-white">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#E86B40]">Recipe In Action</h1>
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
          <div key={video.id} className="bg-[#1f1f1f] rounded-xl shadow-md p-4 border border-[#333]">
            {/* SAFE VIDEO URL */}
            {(video.videoUrl || "").includes("youtube") ? (
              <iframe
                className="w-full h-48 sm:h-40 rounded-lg"
                src={video.videoUrl || ""}
                allowFullScreen
                title={video.videoTitle || "Untitled Video"}
              ></iframe>
            ) : (
              <video className="w-full h-48 sm:h-40 rounded-lg" src={video.videoUrl || ""} controls />
            )}

            <h2 className="font-bold text-lg text-[#E86B40] mt-3 break-words">
              {video.videoTitle || "Untitled Video"}
            </h2>

            <p className="text-gray-400 text-xs mt-1 break-all">{video.videoUrl || "No URL"}</p>
            <p className="text-gray-500 text-xs">Video ID: {video.videoId || "N/A"}</p>

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

            <label className="text-sm text-gray-300">Video Title</label>
            <input
              type="text"
              placeholder="Enter Video Title"
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-3 outline-none focus:border-[#E86B40]"
              value={editVideo === "add" ? newVideo.videoTitle : editVideo.videoTitle || ""}
              onChange={(e) =>
                editVideo === "add"
                  ? setNewVideo({ ...newVideo, videoTitle: e.target.value })
                  : setEditVideo({ ...editVideo, videoTitle: e.target.value })
              }
            />

            <label className="text-sm text-gray-300">Video URL</label>
            <input
              type="text"
              placeholder="YouTube Embed / MP4 URL"
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-3 outline-none focus:border-[#E86B40]"
              value={editVideo === "add" ? newVideo.videoUrl : editVideo.videoUrl || ""}
              onChange={(e) =>
                editVideo === "add"
                  ? setNewVideo({ ...newVideo, videoUrl: e.target.value })
                  : setEditVideo({ ...editVideo, videoUrl: e.target.value })
              }
            />

            <label className="text-sm text-gray-300">Video ID</label>
            <input
              type="text"
              placeholder="Enter Video ID"
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-4 outline-none focus:border-[#E86B40]"
              value={editVideo === "add" ? newVideo.videoId : editVideo.videoId || ""}
              onChange={(e) =>
                editVideo === "add"
                  ? setNewVideo({ ...newVideo, videoId: e.target.value })
                  : setEditVideo({ ...editVideo, videoId: e.target.value })
              }
            />

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
