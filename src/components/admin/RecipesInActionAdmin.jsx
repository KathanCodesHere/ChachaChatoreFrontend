import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function RecipeVideos() {
  const fetchURL = "https://chachachatore.com/services/admin/videos/all.php";
  const deleteURL = "https://chachachatore.com/services/admin/videos/delete.php";
  const addURL = "https://chachachatore.com/services/admin/videos/add.php";
  const editURL = "https://chachachatore.com/services/admin/videos/edit.php";

  const token = "09c26f3616fbb069c5b07d797b79ba362a384600";

  const [videos, setVideos] = useState([]);
  const [modal, setModal] = useState(null);
  const editID = useRef(null);
  const titleRef = useRef();
  const urlRef = useRef();
  const videoIdRef = useRef();

  // get api 
  const fetchVideos = async () => {
    try {
      const res = await axios.get(fetchURL, { headers: { Authorization: token } });

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
  // Delete api 
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

  // OPEN ADD MODAL
  const openAdd = () => {
    setModal("add");
    setTimeout(() => {
      titleRef.current.value = "";
      urlRef.current.value = "";
      videoIdRef.current.value = "";
    }, 0);
  };

  // OPEN EDIT MODAL
  const openEdit = (video) => {
    editID.current = video.id;
    setModal("edit");
    setTimeout(() => {
      titleRef.current.value = video.video_title;
      urlRef.current.value = video.video_url;
      videoIdRef.current.value = video.video_id;
    }, 0);
  };

  // Add api
  const handleAdd = async () => {
    const title = titleRef.current.value.trim();
    const url = urlRef.current.value.trim();
    const vid = videoIdRef.current.value.trim();

    if (!title || !url || !vid) return;

    try {
      await axios.post(
        addURL,
        {
          video_title: title,
          video_url: url,
          video_id: vid,
        },
        { headers: { Authorization: token } }
      );

      fetchVideos();
      setModal(null);
    } catch (err) {
      console.error("Add Error:", err);
    }
  };

  // Edit api
  const handleEditSave = async () => {
    const title = titleRef.current.value.trim();
    const url = urlRef.current.value.trim();
    const vid = videoIdRef.current.value.trim();

    if (!title || !url || !vid) return;

    try {
      await axios.post(
        editURL,
        {
          id: editID.current,
          video_title: title,
          video_url: url,
          video_id: vid,
        },
        { headers: { Authorization: token } }
      );

      fetchVideos();
      setModal(null);
    } catch (err) {
      console.error("Edit Error:", err);
    }
  };

  return (
    <div className="p-4 sm:p-6 text-white">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#E86B40]">Recipe In Action</h1>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-4 py-2 bg-[#E86B40] text-black rounded-lg font-semibold w-full sm:w-auto"
        >
          <Plus size={18} /> Add Video
        </button>
      </div>

      {/* VIDEO CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {videos.map((video) => (
          <div key={video.id} className="bg-[#1f1f1f] rounded-xl shadow-md p-4 border border-[#333]">
            {(video.video_url || "").includes("youtube") ? (
              <iframe
                className="w-full h-48 sm:h-40 rounded-lg"
                src={video.video_url}
                allowFullScreen
              ></iframe>
            ) : (
              <video className="w-full h-48 sm:h-40 rounded-lg" src={video.video_url} controls />
            )}

            <h2 className="font-bold text-lg text-[#E86B40] mt-3 break-words">
              {video.video_title}
            </h2>

            <p className="text-gray-400 text-xs mt-1 break-all">{video.video_url}</p>
            <p className="text-gray-500 text-xs">Video ID: {video.video_id}</p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 mt-3">
              <button
                onClick={() => openEdit(video)}
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
      {modal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="bg-[#222] border border-[#444] w-full max-w-md p-6 rounded-2xl shadow-[0_0_30px_rgba(232,107,64,0.4)]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#E86B40] mb-4">
              {modal === "add" ? "Add New Video" : "Edit Video"}
            </h2>

            <label className="text-sm text-gray-300">Video Title</label>
            <input type="text" ref={titleRef} className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-3 outline-none focus:border-[#E86B40]"
            />

            <label className="text-sm text-gray-300">Video URL</label>
            <input type="text" ref={urlRef} className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-3 outline-none focus:border-[#E86B40]"
            />

            <label className="text-sm text-gray-300">Video ID</label>
            <input type="text" ref={videoIdRef} className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-4 outline-none focus:border-[#E86B40]"
            />

            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => setModal(null)}
                className="px-4 py-2 rounded bg-[#333] text-white hover:bg-[#444] w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                onClick={modal === "add" ? handleAdd : handleEditSave}
                className="px-4 py-2 bg-[#E86B40] text-black font-semibold rounded hover:bg-[#ff8a5c] w-full sm:w-auto"
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
