import React from "react";

const brands = [
  {
    id: 1,
    name: "Milwaukee",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Milwaukee_Tool_logo.svg",
  },
  {
    id: 2,
    name: "Village Roadshow",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/28/Village_Roadshow_Pictures_logo.svg",
  },
  {
    id: 3,
    name: "State University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Seal_of_Arizona_State_University.svg",
  },
  {
    id: 4,
    name: "Macquarie",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/Macquarie_Group_logo.svg",
  },
  {
    id: 5,
    name: "Bausch + Lomb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bausch%2B_Lomb_logo.svg",
  },
  {
    id: 6,
    name: "Brother",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Brother_logo.svg",
  },
  {
    id: 7,
    name: "Smeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Smeg_logo.svg",
  },
];

const ClientsSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          <span className="text-blue-500">Clients</span> & Reviews
        </h2>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center rounded-full border border-gray-500 bg-transparent hover:scale-105 transition-transform duration-300"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-w-[70%] max-h-[70%] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
