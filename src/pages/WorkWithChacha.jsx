import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WorkWithChacha() {
  const navigate = useNavigate();

  const allJobs = [
    { title: "Food Videographer", type: "Full-Time", location: "Mumbai / On-site" },
    { title: "Content Writer", type: "Freelancer", location: "Remote" },
    { title: "Social Media Manager", type: "Part-Time", location: "Hybrid / Remote" },
  ];

  const perks = [
    { title: "Flexible Working Hours", icon: "🕒", desc: "Your creativity matters more than timing." },
    { title: "Remote Friendly", icon: "🌍", desc: "Work from anywhere!" },
    { title: "Compensation", icon: "💰", desc: "Fair pay based on skill, role, and contribution." },
    { title: "Fun Team & Perks", icon: "🍔", desc: "Food shoots, tasting days & events!" },
  ];

  const [filter, setFilter] = useState("All Roles");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const filteredJobs = allJobs.filter((job) => {
    let matchFilter = true;
    if (filter === "Remote") matchFilter = job.location.toLowerCase().includes("remote");

    if (selectedTypes.length > 0) {
      return matchFilter && selectedTypes.includes(job.type);
    }
    return matchFilter;
  });

  const jobTypes = ["Full-Time", "Part-Time", "Freelancer"];

  return (
    <div className="w-full bg-black text-[#f0ecd9] py-16 px-6 md:px-20 flex flex-col min-h-screen">

      {/* Page Title */}
      <div className="flex flex-col items-center text-center gap-2 mb-14">
        {/* <span className="px-4 py-1 border rounded-full text-sm border-[#e86b40] text-[#e86b40] font-open">
          Careers
        </span> */}
        <h1 className="text-4xl md:text-6xl font-anton text-[#f0ecd9] leading-tight">
          Work With <span className="text-[#e86b40]">Chacha Chatore</span>
        </h1>
      </div>

      {/* Perks Section */}
      <h2 className="text-3xl md:text-5xl font-anton text-[#f0ecd9] mb-10">
        Our Perks <span className="text-[#e86b40]">& Benefits</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {perks.map((p, i) => (
          <div
            key={i}
            className="flex gap-4 items-start bg-[#1a1a1a] p-6 rounded-2xl border border-[#2b2b2b] hover:border-[#e86b40] transition-all"
          >
            <div className="text-4xl">{p.icon}</div>
            <div>
              <h3 className="text-xl font-bold font-open text-[#f0ecd9]">{p.title}</h3>
              <p className="text-sm opacity-80 font-open">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-12 relative">
        <div className="flex gap-3 flex-wrap">
          {["All Roles", "Remote", "Department"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-open transition-all ${
                filter === f
                  ? "bg-[#e86b40] text-black font-semibold"
                  : "border border-[#e86b40] text-[#e86b40]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 px-5 py-2 rounded-full border border-[#e86b40] text-[#e86b40] text-sm font-open"
          >
            Filter by <ChevronDown size={16} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-[#1a1a1a] border border-[#e86b40] rounded-lg p-4 flex flex-col gap-2 z-50 shadow-lg">
              {jobTypes.map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer font-open">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => toggleType(type)}
                    className="accent-[#e86b40]"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Job Cards */}
      <div className="flex flex-col gap-4 flex-1">
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between md:items-center max-w-2xl border border-[#e86b40] rounded-2xl px-6 py-5 hover:bg-[#111] transition-all bg-[#1a1a1a]"
          >
            <h3 className="text-lg md:text-xl font-opensans font-semibold text-[#f0ecd9]">
              {job.title}
            </h3>

            <div className="flex gap-6 text-sm opacity-70 font-opensans mt-2 md:mt-0">
              <span>{job.type}</span>
              <span>{job.location}</span>
            </div>
          </div>
        ))}

        {filteredJobs.length === 0 && (
          <p className="text-center text-sm opacity-60 mt-4 font-opensans">No jobs found.</p>
        )}
      </div>

      {/* Back Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="px-7 py-3 bg-[#e86b40] text-black rounded-full font-semibold font-opensans hover:bg-[#f0ecd9] hover:text-[#e86b40] transition-all"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
