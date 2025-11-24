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

  const [editMessage, setEditMessage] = useState(null);

  // ---- SAVE EDIT ----
  const handleEditSave = () => {
    setMessages(messages.map((msg) => (msg.id === editMessage.id ? editMessage : msg)));
    setEditMessage(null);
  };

  // ---- DELETE MESSAGE ----
  const handleDelete = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>

      {/* HEADER */}
      <div
        style={{
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #1e1e1e, #3b3b3b)",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            color: "#E86B40",
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Get In Touch
        </h1>
      </div>

      {/* TABLE */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "600px",
            background: "#1f1f1f",
          }}
        >
          <thead>
            <tr style={{ background: "#2a2a2a" }}>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Subject</th>
              <th style={thStyle}>Message</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td style={tdStyle}>{msg.email}</td>
                <td style={tdStyle}>{msg.subject}</td>
                <td style={tdStyle}>{msg.message}</td>

                <td style={{ ...tdStyle, textAlign: "center" }}>
                  <button
                    onClick={() => setEditMessage(msg)}
                    style={{ ...btnTextYellow }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(msg.id)}
                    style={{ ...btnTextRed, marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EDIT MODAL */}
      {editMessage && (
        <div style={overlayStyle}>
          <div style={modalStyle}>

            <h2
              style={{
                color: "#E86B40",
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              Edit Message
            </h2>

            {/* EMAIL */}
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              style={inputStyle}
              value={editMessage.email}
              onChange={(e) => setEditMessage({ ...editMessage, email: e.target.value })}
            />

            {/* SUBJECT */}
            <label style={labelStyle}>Subject</label>
            <input
              type="text"
              style={inputStyle}
              value={editMessage.subject}
              onChange={(e) => setEditMessage({ ...editMessage, subject: e.target.value })}
            />

            {/* MESSAGE */}
            <label style={labelStyle}>Message</label>
            <textarea
              style={{ ...inputStyle, height: "80px" }}
              value={editMessage.message}
              onChange={(e) => setEditMessage({ ...editMessage, message: e.target.value })}
            />

            {/* BUTTONS */}
            <div style={{ marginTop: "20px", textAlign: "right" }}>
              <button
                onClick={() => setEditMessage(null)}
                style={cancelBtn}
              >
                Cancel
              </button>

              <button
                onClick={handleEditSave}
                style={saveBtn}
              >
                Save
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- INLINE STYLES ---------- */

const thStyle = {
  padding: "12px",
  color: "#E86B40",
  border: "1px solid #333",
  textAlign: "left",
};

const tdStyle = {
  padding: "12px",
  color: "white",
  border: "1px solid #333",
};

const btnTextYellow = {
  color: "yellow",
  cursor: "pointer",
  border: "none",
  background: "transparent",
  fontWeight: "bold",
};

const btnTextRed = {
  color: "red",
  cursor: "pointer",
  border: "none",
  background: "transparent",
  fontWeight: "bold",
};

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 50,
};

const modalStyle = {
  width: "90%",
  maxWidth: "400px",
  background: "#222",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #444",
};

const labelStyle = {
  color: "white",
  marginBottom: "5px",
  display: "block",
  fontSize: "14px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  background: "#1b1b1b",
  color: "white",
  border: "1px solid #555",
  marginBottom: "12px",
  outline: "none",
};

const cancelBtn = {
  padding: "8px 14px",
  background: "#444",
  border: "none",
  color: "white",
  borderRadius: "6px",
  marginRight: "10px",
  cursor: "pointer",
};

const saveBtn = {
  padding: "8px 14px",
  background: "#E86B40",
  border: "none",
  color: "black",
  borderRadius: "6px",
  cursor: "pointer",
};
