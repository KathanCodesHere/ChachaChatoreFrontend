import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/admin-dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1b1b1b]">
      <div className="bg-[#242424] p-10 rounded-2xl shadow-2xl w-96 border border-[#e86b40]/30">
        
        <h2 className="text-3xl text-center font-bold text-[#e86b40] mb-8">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Email */}
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-[#1b1b1b] text-[#f0ecd9] placeholder-[#b6ac9b] rounded-lg 
            outline-none focus:border focus:border-[#e86b40]"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-[#1b1b1b] text-[#f0ecd9] placeholder-[#b6ac9b] rounded-lg 
            outline-none focus:border focus:border-[#e86b40]"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-[#1b1b1b] bg-[#e86b40] 
            hover:bg-[#f0ecd9] hover:text-[#e86b40] transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
