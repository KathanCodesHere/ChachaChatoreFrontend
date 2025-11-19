import React, { useState } from "react";

const GetInTouchAdmin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      const updated = entries.map((entry) =>
        entry.id === editingId ? { ...entry, name, email, message } : entry
      );
      setEntries(updated);
      alert("Entry Updated Successfully!");
      setEditingId(null);
      setName("");
      setEmail("");
      setMessage("");
      return;
    }

    const newEntry = {
      id: Date.now(),
      name,
      email,
      message,
    };

    setEntries([...entries, newEntry]);
    alert("Entry Added Successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleEdit = (entry) => {
    setEditingId(entry.id);
    setName(entry.name);
    setEmail(entry.email);
    setMessage(entry.message);
  };

  const handleDelete = (id) => {
    const updated = entries.filter((entry) => entry.id !== id);
    setEntries(updated);
  };

  return (
    <div className="p-5 bg-[#242424] rounded-xl shadow-lg text-[#F0ECD9]">
      <h2 className="text-2xl font-bold text-[#E86B40] mb-4">
        {editingId ? "Edit Get In Touch Entry" : "Add Get In Touch Entry"}
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-[#1b1b1b] px-3 py-2 rounded-lg outline-none text-[#F0ECD9] placeholder-[#b8b4a7]"
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#1b1b1b] px-3 py-2 rounded-lg outline-none text-[#F0ECD9] placeholder-[#b8b4a7]"
        />
        <textarea
          placeholder="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-[#1b1b1b] px-3 py-2 rounded-lg outline-none text-[#F0ECD9] placeholder-[#b8b4a7] resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-[#E86B40] text-[#1b1b1b] py-2 px-4 rounded-lg font-semibold hover:bg-[#c75a33] transition-all self-start"
        >
          {editingId ? "Update Entry" : "Add Entry"}
        </button>
      </form>

      {/* List of Entries */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#E86B40] mb-2">
          Submitted Entries
        </h3>

        {entries.length === 0 ? (
          <p className="text-sm text-[#b8b4a7]">No entries added yet.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-[#1b1b1b] p-4 rounded-lg border border-[#333] flex flex-col"
              >
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-[#F0ECD9]">{entry.name}</h4>
                  <p className="text-sm text-[#d9d4c4] mt-1">{entry.email}</p>
                  <p className="text-sm text-[#d9d4c4] mt-1">{entry.message}</p>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => handleEdit(entry)}
                    className="bg-[#E86B40] text-[#1b1b1b] py-2 px-4 rounded-lg font-semibold hover:bg-[#c75a33] transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(entry.id)}
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

export default GetInTouchAdmin;
