import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginURL = "https://chachachatore.com/services/admin/login.php";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(loginURL, { username, password });

      console.log("API RESPONSE:", res.data);

      if (res.data.status === "success") {
        localStorage.setItem("admin_token", res.data.token);

        // alert("Login Successful!");
        navigate("/admin-dashboard"); // redirect
      } else {
        alert(res.data.message || "Wrong username or password");
      }

    } catch (error) {
      console.error(error);
      alert("API Error — Try again!");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1b1b1b]">
      <div className="bg-[#242424] p-10 rounded-2xl shadow-2xl w-96 border border-[#e86b40]/30">

        <h2 className="text-3xl text-center font-bold text-[#e86b40] mb-8">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 bg-[#1b1b1b] text-[#f0ecd9] 
            placeholder-[#b6ac9b] rounded-lg outline-none 
            focus:border focus:border-[#e86b40]"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-[#1b1b1b] text-[#f0ecd9] 
            placeholder-[#b6ac9b] rounded-lg outline-none 
            focus:border focus:border-[#e86b40]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold text-[#1b1b1b] bg-[#e86b40] 
            hover:bg-[#f0ecd9] hover:text-[#e86b40] transition duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
