import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function ClientsAdmin() {
  const fetchURL = "https://chachachatore.com/services/admin/clients/fetch.php";
  const deleteURL = "https://chachachatore.com/services/admin/clients/delete.php";
  const token = "09c26f3616fbb069c5b07d797b79ba362a384600";

  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({ name: "", review: "", handle: "", image: "" });
  const [editClient, setEditClient] = useState(null);

 //get api
  const fetchClients = async () => {
    try {
      const res = await axios.get(fetchURL, {
        headers: { Authorization: token },
      });
      console.log("API DATA:", res.data);

      if (res.data.status === "success") {
        setClients(res.data.clients || []);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);
//delete api
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(deleteURL, {
        headers: { Authorization: token, "Content-Type": "application/json" },
        data: { id },
      });

      if (res.data.status === "success") {
        fetchClients();
      }
    } catch (err) {
      console.error("Delete Error:", err);
    }
  };
  const handleAdd = () => {
    const id = Date.now();
    setClients([
      ...clients,
      {
        id,
        client_name: newClient.name,
        client_review: newClient.review,
        client_handle: newClient.handle,
        image: newClient.image,
      },
    ]);
    setNewClient({ name: "", review: "", handle: "", image: "" });
    setEditClient(null);
  };
  const handleEditSave = () => {
    setClients(
      clients.map((c) =>
        c.id === editClient.id
          ? { ...c, ...editClient }
          : c
      )
    );
    setEditClient(null);
  };

  return (
    <div className="p-4 sm:p-6 text-white">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold text-[#E86B40]">Clients Admin</h1>
        <button
          onClick={() => setEditClient("add")}
          className="flex items-center gap-2 px-4 py-2 bg-[#E86B40] text-black rounded-lg font-semibold"
        >
          <Plus size={18} /> Add Client
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-[#1f1f1f] rounded-xl p-4 border border-[#333] shadow-md flex flex-col items-center"
          >
            <img
              src={client.image}
              alt={client.client_name}
              className="w-20 h-20 rounded-full mb-3 object-cover"
            />
            <h2 className="font-bold text-lg text-[#00BFFF] text-center">{client.client_name}</h2>
            <p className="text-gray-300 mt-2 text-sm text-center">{client.client_review}</p>
            <p className="text-gray-400 text-xs mt-1 text-center">{client.client_handle}</p>

            <div className="flex gap-6 mt-4">
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center p-4 z-50 overflow-y-auto">
          <div className="bg-[#222] border border-[#444] w-full max-w-md p-6 rounded-2xl shadow-[0_0_30px_rgba(232,107,64,0.4)]">
            <h2 className="text-xl font-bold text-[#E86B40] mb-4 text-center">
              {editClient === "add" ? "Add New Client" : "Edit Client"}
            </h2>

            <label className="block text-gray-300 mb-1">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full mb-3"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    if (editClient === "add") {
                      setNewClient({ ...newClient, image: reader.result });
                    } else {
                      setEditClient({ ...editClient, image: reader.result });
                    }
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            {(editClient === "add" ? newClient.image : editClient.image) && (
              <img
                src={editClient === "add" ? newClient.image : editClient.image}
                className="w-20 h-20 rounded-full mx-auto mb-4 border border-[#555] object-cover"
              />
            )}

            <label className="block text-gray-300 mb-1">Client Name</label>
            <input
              type="text"
              placeholder="Client Name"
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-3"
              value={editClient === "add" ? newClient.name : editClient.client_name}
              onChange={(e) =>
                editClient === "add"
                  ? setNewClient({ ...newClient, name: e.target.value })
                  : setEditClient({ ...editClient, client_name: e.target.value })
              }
            />

            <label className="block text-gray-300 mb-1">Review</label>
            <textarea
              placeholder="Client Review"
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-3"
              value={editClient === "add" ? newClient.review : editClient.client_review}
              onChange={(e) =>
                editClient === "add"
                  ? setNewClient({ ...newClient, review: e.target.value })
                  : setEditClient({ ...editClient, client_review: e.target.value })
              }
            />

            <label className="block text-gray-300 mb-1">Handle</label>
            <input
              type="text"
              placeholder="Client Handle"
              className="w-full bg-[#1b1b1b] text-white border border-[#555] p-2 rounded mb-4"
              value={editClient === "add" ? newClient.handle : editClient.client_handle}
              onChange={(e) =>
                editClient === "add"
                  ? setNewClient({ ...newClient, handle: e.target.value })
                  : setEditClient({ ...editClient, client_handle: e.target.value })
              }
            />

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
