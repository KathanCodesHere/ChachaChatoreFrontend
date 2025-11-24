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

  return (
    <div className="p-6 text-[#FFF8E7] bg-[#121212] min-h-screen">

      {/* HEADER */}
      <div className="bg-[#E86B40] p-6 rounded-xl mb-6 shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#FFF8E7] uppercase tracking-wider">
          Client Enquiries
        </h1>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse rounded-lg bg-[#1f1f1f]">
          <thead>
            <tr className="bg-[#E86B40]">
              <th className="px-4 py-3 text-left text-[#FFF8E7] border border-[#E86B40]">Email</th>
              <th className="px-4 py-3 text-left text-[#FFF8E7] border border-[#E86B40]">Subject</th>
              <th className="px-4 py-3 text-left text-[#FFF8E7] border border-[#E86B40]">Message</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id} className="hover:bg-[#E86B4020] transition-colors">
                <td className="px-4 py-3 border border-[#E86B40]">{msg.email}</td>
                <td className="px-4 py-3 border border-[#E86B40]">{msg.subject}</td>
                <td className="px-4 py-3 border border-[#E86B40]">{msg.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
