import React, { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function ClientsAdmin() {
  const [clients, setClients] = useState([
    {
      id: 1,
      image: "https://i.pravatar.cc/300?img=1",
      name: "Rohan Mehra",
      review:
        "Working with Chacha Chatore Productions was like mixing fun with professionalism. Our campaign didn’t just reach people — it connected.",
      handle: "@RohanMehra",
    },
    {
      id: 2,
      image: "https://i.pravatar.cc/300?img=2",
      name: "Vikram Singh",
      review:
        "Chacha Chatore’s creative team made our brand story come alive. Their approach is fresh, engaging, and truly memorable.",
      handle: "@VikramSingh",
    },
    {
      id: 3,
      image: "https://i.pravatar.cc/300?img=3",
      name: "Priya Iyer",
      review:
        "From concept to execution, Chacha Chatore Productions exceeded our expectations. They made the process smooth and enjoyable.",
      handle: "@PriyaIyer",
    },
  ]);

  const [newClient, setNewClient] = useState({
    name: "",
    review: "",
    handle: "",
    image: "",
  });

  const [editClient, setEditClient] = useState(null);

  // ---- ADD CLIENT ----
  const handleAdd = () => {
    const id = Date.now();
    setClients([...clients, { id, ...newClient }]);
    setNewClient({ name: "", review: "", handle: "", image: "" });
    setEditClient(null);
  };

  // ---- DELETE CLIENT ----
  const handleDelete = (id) => {
    setClients(clients.filter((c) => c.id !== id));
  };

  // ---- SAVE EDIT ----
  const handleEditSave = () => {
    setClients(clients.map((c) => (c.id === editClient.id ? editClient : c)));
    setEditClient(null);
  };

  return (
    <div className="p-6 text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#E86B40]">Clients Admin</h1>

        <button
          onClick={() => setEditClient("add")}
          className="flex items-center gap-2 px-4 py-2 bg-[#E86B40] text-black rounded-lg font-semibold"
        >
          <Plus size={18} /> Add Client
        </button>
      </div>

      {/* CLIENT CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-[#1f1f1f] rounded-xl shadow-md p-4 border border-[#333] w-full"
          >
            <img
              src={client.image}
              alt={client.name}
              className="w-16 h-16 rounded-full mb-2"
            />
            <h2 className="font-bold text-lg text-[#00BFFF]">{client.name}</h2>
            <p className="text-gray-300 mt-1">{client.review}</p>
            <p className="text-gray-400 text-sm mt-1">{client.handle}</p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 mt-3">
              <button
                onClick={() => setEditClient(client)}
                className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300"
              >
                <Pencil size={16} /> Edit
              </button>

              <button
                onClick={() => handleDelete(client.id)}
                className="flex items-center gap-1 text-red-500 hover:text-red-400"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {editClient && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-[#222] border border-[#444] w-96 p-6 rounded-2xl shadow-[0_0_30px_rgba(232,107,64,0.4)]">

            <h2 className="text-xl font-bold text-[#E86B40] mb-4">
              {editClient === "add" ? "Add New Client" : "Edit Client"}
            </h2>

            {/* IMAGE */}
            <input
              type="text"
              placeholder="Image URL"
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-3 outline-none focus:border-[#E86B40]"
              value={editClient === "add" ? newClient.image : editClient.image}
              onChange={(e) =>
                editClient === "add"
                  ? setNewClient({ ...newClient, image: e.target.value })
                  : setEditClient({ ...editClient, image: e.target.value })
              }
            />

            {/* NAME */}
            <input
              type="text"
              placeholder="Client Name"
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-3 outline-none focus:border-[#E86B40]"
              value={editClient === "add" ? newClient.name : editClient.name}
              onChange={(e) =>
                editClient === "add"
                  ? setNewClient({ ...newClient, name: e.target.value })
                  : setEditClient({ ...editClient, name: e.target.value })
              }
            />

            {/* REVIEW */}
            <textarea
              placeholder="Client Review"
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-3 outline-none focus:border-[#E86B40]"
              value={editClient === "add" ? newClient.review : editClient.review}
              onChange={(e) =>
                editClient === "add"
                  ? setNewClient({ ...newClient, review: e.target.value })
                  : setEditClient({ ...editClient, review: e.target.value })
              }
            />

            {/* HANDLE */}
            <input
              type="text"
              placeholder="Client Handle"
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-4 outline-none focus:border-[#E86B40]"
              value={editClient === "add" ? newClient.handle : editClient.handle}
              onChange={(e) =>
                editClient === "add"
                  ? setNewClient({ ...newClient, handle: e.target.value })
                  : setEditClient({ ...editClient, handle: e.target.value })
              }
            />

            {/* BUTTONS */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditClient(null)}
                className="px-3 py-1 rounded bg-[#333] text-white hover:bg-[#444]"
              >
                Cancel
              </button>

              <button
                onClick={editClient === "add" ? handleAdd : handleEditSave}
                className="px-4 py-1 bg-[#E86B40] text-black font-semibold rounded hover:bg-[#ff8a5c]"
              >
                {editClient === "add" ? "Add" : "Save"}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
