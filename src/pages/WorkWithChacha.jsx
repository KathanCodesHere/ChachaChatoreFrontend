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
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const filteredJobs = allJobs.filter((job) => {
    let matchFilter = true;
    if (filter === "Remote") matchFilter = job.location.toLowerCase().includes("remote");
    if (filter === "Department") matchFilter = true;

    if (selectedTypes.length > 0) {
      return matchFilter && selectedTypes.includes(job.type);
    }
    return matchFilter;
  });

  const jobTypes = ["Full-Time", "Part-Time", "Freelancer"];

  return (
    <div className="w-full bg-black text-[#f0ecd9] py-16 px-6 md:px-20 flex flex-col min-h-screen">

      {/* Page Title */}
      <div className="flex flex-col gap-2 mb-10">
        <span className="px-4 py-1 border rounded-full text-sm w-fit border-[#e86b40] text-[#e86b40]">Careers</span>
        <h1 className="text-4xl md:text-6xl font-semibold text-[#e86b40]">Work With Chacha Chatore</h1>
      </div>

      {/* Perks Section */}
      <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#e86b40] mb-12">Our Perks & Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {perks.map((p, index) => (
          <div key={index} className="flex gap-4 items-start bg-[#1a1a1a] p-6 rounded-xl hover:shadow-lg transition">
            <div className="text-4xl">{p.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-[#f0ecd9]">{p.title}</h3>
              <p className="text-sm opacity-80">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-10 relative">
        <div className="flex gap-3 flex-wrap">
          {["All Roles", "Remote", "Department"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm ${
                filter === f ? "bg-[#e86b40] text-black" : "border border-[#e86b40] text-[#e86b40]"
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
            className="flex items-center gap-1 px-5 py-2 rounded-full border border-[#e86b40] text-[#e86b40] text-sm"
          >
            Filter by <ChevronDown size={16} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-[#1a1a1a] border border-[#e86b40] rounded-lg p-4 flex flex-col gap-2 z-50">
              {jobTypes.map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
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
            className="flex justify-between items-center w-full border border-[#e86b40] rounded-xl px-6 py-4 hover:shadow-lg transition bg-[#1a1a1a]"
          >
            <h3 className="text-lg font-medium text-[#f0ecd9]">{job.title}</h3>
            <div className="flex gap-10 text-sm opacity-70">
              <span>{job.type}</span>
              <span>{job.location}</span>
            </div>
          </div>
        ))}
        {filteredJobs.length === 0 && (
          <p className="text-center text-sm opacity-60 mt-4">No jobs found for this filter.</p>
        )}
      </div>

      {/* Back Button at the bottom */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-[#e86b40] text-black rounded-full font-semibold hover:bg-[#f0ecd9] hover:text-[#e86b40] transition"
        >
          &larr; Back
        </button>
      </div>
    </div>
  );
}
