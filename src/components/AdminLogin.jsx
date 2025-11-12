import React, { useState } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      alert("Login Successful!");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1b1b1b]">
      <div className="bg-[#242424] p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-3xl text-[#FF007F] font-bold text-center mb-6 cursor-pointer">
          Admin Login
        </h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-lg bg-[#1b1b1b] text-[#f0ecd9] outline-none cursor-pointer"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded-lg bg-[#1b1b1b] text-[#f0ecd9] outline-none cursor-pointer"
          />
          <button
            type="submit"
            className="bg-[#FF007F] text-[#f0ecd9] py-3 rounded-lg font-bold hover:bg-[#bf0c66] transition-all cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
    