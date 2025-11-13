import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const FeaturedStoriesAdmin = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "featuredStories"), {
        title,
        desc,
        videoUrl,
      });
      alert("Story Added Successfully!");
      setTitle("");
      setDesc("");
      setVideoUrl("");
    } catch (error) {
      console.error("Error adding story: ", error);
    }
  };

  return (
    <div className="p-5 bg-[#242424] rounded-xl shadow-lg text-[#f0ecd9]">
      <h2 className="text-2xl font-bold text-[#FF007F] mb-4">
        Add Featured Story
      </h2>
      <form onSubmit={handleAdd} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-[#1b1b1b] px-3 py-2 rounded-lg outline-none"
        />
        <input
          type="text"
          placeholder="Enter description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="bg-[#1b1b1b] px-3 py-2 rounded-lg outline-none"
        />
        <input
          type="text"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="bg-[#1b1b1b] px-3 py-2 rounded-lg outline-none"
        />
        <button
          type="submit"
          className="bg-[#FF007F] py-2 rounded-lg hover:bg-[#bf0c66] transition-all"
        >
          Add Story
        </button>
      </form>
    </div>
  );
};

export default FeaturedStoriesAdmin;
