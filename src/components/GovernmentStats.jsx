import React from "react";

export default function GovernmentStats() {
  const stats = [
    {
      value: "₹500+",
      label: "Crores Contract Value",
      subtext: "Government Projects Only",
    },
    {
      value: "50+",
      label: "Projects Completed",
      subtext: "All Government Departments",
    },
    {
      value: "15+",
      label: "Active Contracts",
      subtext: "Currently Executing",
    },
    {
      value: "100%",
      label: "Government Focus",
      subtext: "No Private Contracts",
    },
  ];

  return (
    <section className="bg-orange-500 backdrop-blur-sm py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Government Project Statistics
        </h2>
        <p className="text-lg text-orange-100 mb-16">
          Our proven track record in government construction projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-4xl font-extrabold mb-3 text-white">
                {stat.value}
              </h3>
              <p className="text-xl font-semibold text-orange-200 mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-orange-100 opacity-80">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
