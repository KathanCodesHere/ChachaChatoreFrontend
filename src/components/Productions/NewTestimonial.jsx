import React, { useState, useEffect } from "react";
import axios from "axios";

const Testimonials = () => {
  const [clients, setClients] = useState([]);
  const token = "09c26f3616fbb069c5b07d797b79ba362a384600";
  const fetchURL = "https://chachachatore.com/services/admin/clients/fetch.php";

  const DEFAULT_BORDER_COLOR = "#f0ecd9/40";

  // Fetch clients from backend
  const fetchClients = async () => {
    try {
      const res = await axios.get(fetchURL, { headers: { Authorization: token } });
      if (res.data.status === "success" && res.data.clients) {
        setClients(res.data.clients);
      } else {
        console.log("No clients found");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="py-20 bg-black">
      {/* Heading */}
      <h2 className="text-center font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-[#f0ecd9] leading-none mb-6">
        People Who’ve
        <span className="text-[#e86b40] block mt-2">Tasted</span>Our Work
      </h2>

      {/* Grid Section */}
      <div className="py-10 relative flex flex-wrap justify-center gap-10 px-6">
        {clients.map((client) => (
          <div
            key={client.id}
            className="w-80 bg-[#222] border-2 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 flex flex-col items-center"
            style={{
              borderColor: DEFAULT_BORDER_COLOR,
              boxShadow: `0 0 15px ${DEFAULT_BORDER_COLOR}50`,
            }}
          >
            <img
              src={client.image}
              alt={client.client_name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 object-cover"
              style={{ borderColor: DEFAULT_BORDER_COLOR }}
            />

            {/* Fixed height for name */}
            <h3 className="text-[#e86b40] font-semibold text-xl mb-2 h-8 overflow-hidden text-ellipsis whitespace-nowrap text-center">
              {client.client_name}
            </h3>

            {/* Fixed height for review */}
            <p className="text-[#ccc] text-sm mb-3 h-14 overflow-hidden text-ellipsis text-center">
              {client.client_review}
            </p>

            <a
              href={client.client_handle || "#"}
              target="_blank"
              rel="noreferrer"
              className="text-[#e86b40] font-bold hover:underline text-center"
            >
              {client.client_handle}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
