"use client";

import Image from "next/image";
import { useState } from "react";

// Icon Map (CSS class names)
const iconMap = {
  railway: "ri-train-line",
  medical: "ri-hospital-line",
  educational: "ri-book-2-line",
  infrastructure: "ri-building-2-line",
};

// Featured News Card
function NewsCardLeftSide({ date, title, description, type }) {
  const iconClass = iconMap[type] || "ri-building-2-line";

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300 h-full">
      <div className="relative w-full h-64">
        <Image
          src="/images/news/image.png"
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4 p-3 rounded-full shadow-md bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
          <i className={`${iconClass} text-white text-2xl`}></i>
        </div>
      </div>
      <div className="p-6 flex flex-col h-full">
        <p className="text-gray-500 text-sm">{date}</p>
        <h3 className="text-2xl font-semibold text-gray-900 mt-2">{title}</h3>
        <p className="text-gray-700 mt-3 leading-relaxed flex-1">{description}</p>
      </div>
    </div>
  );
}

// News List Item
function NewsCardRightSide({ date, title, type, onClick, active }) {
  const iconClass = iconMap[type] || "ri-building-2-line";

  return (
    <div
      className={`flex gap-4 items-center p-3 rounded-xl cursor-pointer transition-colors ${
        active ? "bg-orange-50 border-l-4 border-orange-500" : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gray-100 flex items-center justify-center">
        <i className={`${iconClass} text-orange-500 text-xl`}></i>
      </div>
      <div className="flex-1">
        <p className="text-gray-500 text-xs">{date}</p>
        <h4 className="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
          {title}
        </h4>
      </div>
    </div>
  );
}

// Latest News Section
export default function LatestNews() {
  const newsData = [
    {
      type: "railway",
      date: "March 15, 2024",
      title: "New Railway Station Building Completed in Darbhanga",
      description:
        "Successfully completed the construction of a modern railway station building with all passenger amenities and safety features. This milestone project showcases our expertise in railway infrastructure development.",
    },
    {
      type: "medical",
      date: "Excellence Award",
      title: "Healthcare Infrastructure Project Recognized",
      description:
        "Received state recognition for excellence in hospital construction and healthcare facility development.",
    },
    {
      type: "infrastructure",
      date: "Bridge Project",
      title: "Major 2.5km Bridge Construction Contract Awarded",
      description:
        "Secured a new government contract to connect rural areas to the main highway network.",
    },
    {
      type: "educational",
      date: "Educational Complex Progress",
      title: "Residential School in Muzaffarpur Achieves 60% Completion",
      description: "",
    },
    {
      type: "infrastructure",
      date: "Jan 12, 2024",
      title: "New Equipment Investment for Enhanced Efficiency",
      description:
        "Invested in the latest construction machinery and technology to improve project delivery speed and quality standards.",
    },
    {
      type: "railway",
      date: "Feb 28, 2024",
      title: "Railway Electrification Project Completed",
      description:
        "Electrified 120km stretch of railway track to enhance efficiency and reduce carbon footprint.",
    },
    {
      type: "educational",
      date: "School Expansion",
      title: "New Classroom Blocks Added to Residential School",
      description: "Enhanced learning facilities with modern classrooms and labs.",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedNews = newsData[selectedIndex];

  return (
    <section className="px-6 py-16 ">
      
      {/* Heading */}
        <div className="text-center mb-12">
    
          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            Latest News &{" "}
            <span className="text-orange-600">Projects</span>
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Stay updated with our latest projects, achievements, and industry developments
          </p>
        </div>

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-10">
        {/* Left: Featured News */}
        <div className="lg:w-2/3 h-full">
          <NewsCardLeftSide {...selectedNews} />
        </div>

        {/* Right: News List */}
        <div className="lg:w-1/3 flex flex-col gap-3 max-h-[400px] overflow-y-auto hide-scrollbar">
          {newsData.map((news, idx) => (
            <NewsCardRightSide
              key={idx}
              {...news}
              onClick={() => setSelectedIndex(idx)}
              active={selectedIndex === idx}
            />
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}
