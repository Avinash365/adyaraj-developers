"use client";
import Image from "next/image";

export default function AboutCompany() { 
  const currentYear = new Date().getFullYear();
  const foundingYear = 2005;
  const yearsOfExcellence = currentYear - foundingYear;

  // ========= CONFIG VARIABLES =========
  const company = {
    badge: "About Our Company",
    title: "Building Trust Through",
    highlight: "Excellence & Innovation",
    description1:
      "M/s Adyaraj Developers Pvt. Ltd. was established in 2005 by Mr. Jitendra Kumar Roy, the Managing Director, along with Co-founder Mr. Amrendra Kumar Amar. Backed by a team of skilled and dedicated professionals with extensive experience in various aspects of construction, we are committed to 'designing, developing, and delivering' high-quality, durable projects.",
    description2:
      "Since our inception, we have continuously innovated at every stage of development. Our journey has been marked by consistently exceeding customer expectations, building a reputation of trust and delivering true value across diverse public interest projects.",
    button: "Learn More About Us",
    image: "/images/governmentPartner/image.png",
    badgeYears: `${yearsOfExcellence}+`,
    badgeText: "Years of Excellence",
  };

  const leadership = [
    { name: "Mr. Jitendra Kumar Roy", role: "Managing Director", color: "text-orange-600", image: "/" },
    { name: "Mr. Amrendra Kumar Amar", role: "Co-founder", color: "text-blue-600", image: "/" },
  ];

  const stats = [
    { icon: "ri-target-2-line", color: "text-orange-600", value: "100%", label: "Quality Commitment" },
    { icon: "ri-user-star-line", color: "text-blue-600", value: "50+", label: "Expert Team" },
    { icon: "ri-medal-2-line", color: "text-yellow-600", value: "ISO", label: "Certified" },
    { icon: "ri-bar-chart-line", color: "text-orange-600", value: "697%", label: "Growth Rate" },
  ];
  // ====================================

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div className="space-y-6">
          <span className="bg-white/10 backdrop-blur-md border border-white/30 text-orange-600 font-medium px-4 py-2 rounded-full text-sm shadow-sm">
            {company.badge}
          </span>

          <h2 className="text-4xl text-black font-bold mt-4 leading-snug">
            {company.title} <span className="text-orange-600">{company.highlight}</span>
          </h2>

          <p className="text-gray-600 mt-4">{company.description1}</p>
          <p className="text-gray-600 mt-4">{company.description2}</p>

          {/* Leadership */}
          <div className="mt-6 border rounded-xl p-4">
            <h3 className="font-semibold text-lg mb-3 text-black">Leadership</h3>
            {leadership.map((leader, idx) => (
              <div className="flex items-center mb-3" key={idx}>
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-100 object-cover mr-3"
                />
                <div>
                  <div className="font-bold text-base text-gray-900">{leader.name}</div>
                  <div className="text-xs text-gray-600">{leader.role}</div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-medium rounded-xl px-6 py-3">
            {company.button}
          </button>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Top Image with Badge */}
          <div className="relative">
            <Image
              src={company.image}
              alt="Team discussion"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <div className="absolute -left-6 -bottom-6 bg-orange-500 text-white px-5 py-4 rounded-xl shadow-lg text-center">
              <p className="text-2xl font-bold">{company.badgeYears}</p>
              <p className="text-sm">{company.badgeText}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl shadow-md border p-6 text-center hover:shadow-lg transition"
              >
                <i className={`${stat.icon} ${stat.color} text-3xl`}></i>
                <p className="mt-2 text-xl font-bold text-black">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
