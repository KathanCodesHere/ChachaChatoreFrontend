import React, { useState } from "react";

export default function GetInTouch() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      email: "user1@example.com",
      subject: "Collaboration Request",
      message: "Hi, I want to collaborate with you on a project.",
    },
    {
      id: 2,
      email: "user2@example.com",
      subject: "Feedback",
      message: "Love your content! Keep it up!",
    },
    {
      id: 3,
      email: "user3@example.com",
      subject: "Event Inquiry",
      message: "Can you cover our local street food event?",
    },
  ]);

  // DELETE MESSAGE
  const handleDelete = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-[#E86B40]">Get in Touch</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-[#1f1f1f] rounded-xl shadow-md p-4 border border-[#333] relative"
          >
            <h2 className="text-lg font-semibold text-[#00BFFF]">
              {msg.subject}
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              <span className="font-semibold text-gray-200">Email:</span> {msg.email}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              <span className="font-semibold text-gray-200">Message:</span> {msg.message}
            </p>

            {/* DELETE BUTTON */}
            <button
              onClick={() => handleDelete(msg.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-400 font-semibold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
