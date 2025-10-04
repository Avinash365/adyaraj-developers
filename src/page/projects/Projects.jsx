"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "remixicon/fonts/remixicon.css";

export default function Projects() {
    // Tabs
    const tabs = ["Ongoing Projects", "Completed Projects"];

    const iconMap = {
        railway: "ri-train-line",
        medical: "ri-hospital-line",
        educational: "ri-book-2-line",
        infrastructure: "ri-building-2-line",
    };

    // Project Data

const projects = [
  // Ongoing Projects
  {
    id: 1,
    title: "Station Building and Platform",
    location: "Kodarma Junction, Jharkhand",
    desc: "Platform, FOB, Station Building development",
    category: "Railway Infrastructure",
    status: "In Progress",
    tag: "Flagship Project",
    year: "2024",
    type: "Ongoing Projects",
    iconClass: iconMap["railway"],
    image: "/images/news/image.png",
  },
  {
    id: 2,
    title: "Residential School",
    location: "Belatandi, Ram Nagar, West Champaran",
    desc: "720 Bedded SC ST residential school complex",
    category: "Educational",
    status: "In Progress",
    tag: "Government Initiative",
    year: "2023",
    type: "Ongoing Projects",
    iconClass: iconMap["educational"],
    image: "/images/news/image.png",
  },
  {
    id: 3,
    title: "Hospital Surgical Block",
    location: "DMCH, Darbhanga, Bihar",
    desc: "Advanced surgical block with modern facilities",
    category: "Healthcare",
    status: "In Progress",
    tag: "Healthcare Boost",
    year: "2025",
    type: "Ongoing Projects",
    iconClass: iconMap["medical"],
    image: "/images/news/image.png",
  },
  {
    id: 4,
    title: "Fly Over ROB",
    location: "Level Crossing No. 2, Chhaoni, Bettiah, Bihar",
    desc: "ROB construction for seamless traffic movement",
    category: "Transport Infrastructure",
    status: "In Progress",
    tag: "Urban Connectivity",
    year: "2024",
    type: "Ongoing Projects",
    iconClass: iconMap["bridge"],
    image: "/images/news/image.png",
  },
  {
    id: 5,
    title: "Indoor & Outdoor Stadium",
    location: "Dr. RAU, Pusa, Samastipur, Bihar",
    desc: "Indoor and Outdoor Stadium with modern sports facilities",
    category: "Sports Infrastructure",
    status: "In Progress",
    tag: "Sports Development",
    year: "2025",
    type: "Ongoing Projects",
    iconClass: iconMap["stadium"],
    image: "/images/news/image.png",
  },

  // Completed Projects
  {
    id: 6,
    title: "Para Medical College",
    location: "Katihar, Bihar",
    desc: "ANM GNM & Para Medical College construction",
    category: "Educational",
    status: "Completed",
    tag: "Healthcare Education",
    year: "2022",
    type: "Completed Projects",
    iconClass: iconMap["educational"],
    image: "/images/news/image.png",
  },
  {
    id: 7,
    title: "GM Bungalow",
    location: "Dighaghat, Patna, Bihar",
    desc: "Construction of ECR GM bungalow",
    category: "Residential",
    status: "Completed",
    tag: "Railway Housing",
    year: "2021",
    type: "Completed Projects",
    iconClass: iconMap["housing"],
    image: "/images/news/image.png",
  },
  {
    id: 8,
    title: "Officers Club",
    location: "CAO Administrative Office Campus, Mahendrughat, Patna, Bihar",
    desc: "Construction of Officers Club with modern amenities",
    category: "Recreational",
    status: "Completed",
    tag: "Employee Welfare",
    year: "2020",
    type: "Completed Projects",
    iconClass: iconMap["club"],
    image: "/images/news/image.png",
  },
  {
    id: 9,
    title: "Tools Room",
    location: "Patliputra, Patna, Bihar",
    desc: "Indo Danish Tools Room development",
    category: "Industrial",
    status: "Completed",
    tag: "Skill Development",
    year: "2019",
    type: "Completed Projects",
    iconClass: iconMap["industry"],
    image: "/images/news/image.png",
  },
  {
    id: 10,
    title: "East Central Railway Officers Quarter",
    location: "Dighaghat & SSR Hospital Campus, Patna, Bihar",
    desc: "Officers Quarter (G+7) Type IV & V construction",
    category: "Residential",
    status: "Completed",
    tag: "Railway Housing",
    year: "2020",
    type: "Completed Projects",
    iconClass: iconMap["housing"],
    image: "/images/news/image.png",
  },
  {
    id: 11,
    title: "Super Specialty Hospital",
    location: "Patna, Bihar",
    desc: "Hospital with modern facilities for specialized healthcare",
    category: "Healthcare",
    status: "Completed",
    tag: "Medical Excellence",
    year: "2021",
    type: "Completed Projects",
    iconClass: iconMap["medical"],
    image: "/images/news/image.png",
  },
  {
    id: 12,
    title: "Water Canal Project",
    location: "Various Districts, Bihar",
    desc: "Construction of water canal for irrigation and supply",
    category: "Water Infrastructure",
    status: "Completed",
    tag: "Rural Development",
    year: "2022",
    type: "Completed Projects",
    iconClass: iconMap["water"],
    image: "/images/news/image.png",
  },
  {
    id: 13,
    title: "Electrical and Fire Job Fittings",
    location: "Patna, Bihar",
    desc: "Modern and disciplined electrical & fire safety installations",
    category: "Safety Infrastructure",
    status: "Completed",
    tag: "Safety First",
    year: "2021",
    type: "Completed Projects",
    iconClass: iconMap["safety"],
    image: "/images/news/image.png",
  },
  {
    id: 14,
    title: "Community Hall",
    location: "Anjuman Islamia Hall, Ashok Raj Path, Patna, Bihar",
    desc: "Community hall development with modern facilities",
    category: "Community",
    status: "Completed",
    tag: "Social Welfare",
    year: "2019",
    type: "Completed Projects",
    iconClass: iconMap["community"],
    image: "/images/news/image.png",
  },
  {
    id: 15,
    title: "Women ITI",
    location: "Bhagalpur & Darbhanga, Bihar",
    desc: "Women Industrial Training Institute construction",
    category: "Educational",
    status: "Completed",
    tag: "Women Empowerment",
    year: "2022",
    type: "Completed Projects",
    iconClass: iconMap["educational"],
    image: "/images/news/image.png",
  },
  {
    id: 16,
    title: "Horticulture College",
    location: "Piprakothi, Motihari, Bihar",
    desc: "Horticulture College construction",
    category: "Educational",
    status: "Completed",
    tag: "Agriculture Development",
    year: "2021",
    type: "Completed Projects",
    iconClass: iconMap["educational"],
    image: "/images/news/image.png",
  },
  {
    id: 17,
    title: "Well Furnished Auditorium",
    location: "Hajipur, Bihar",
    desc: "Modern auditorium with latest design and facilities",
    category: "Recreational",
    status: "Completed",
    tag: "Cultural Development",
    year: "2020",
    type: "Completed Projects",
    iconClass: iconMap["auditorium"],
    image: "/images/news/image.png",
  },
  {
    id: 18,
    title: "GM Building",
    location: "Hajipur, Bihar",
    desc: "GM building constructed with modern facilities",
    category: "Administrative",
    status: "Completed",
    tag: "Infrastructure Upgrade",
    year: "2021",
    type: "Completed Projects",
    iconClass: iconMap["building"],
    image: "/images/news/image.png",
  },
];



    const [activeTab, setActiveTab] = useState("Ongoing Projects");

    const filteredProjects = projects.filter((p) => p.type === activeTab);

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Our Notable <span className="text-orange-600">Projects</span>
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm">
                        Delivering excellence across infrastructure, education, healthcare, and more.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full font-medium shadow-sm transition ${activeTab === tab
                                    ? "bg-orange-500 text-white shadow-md"
                                    : "bg-white text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                            >
                                {/* Image */}
                                <div className="relative h-44">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full"
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-3 left-3 p-2 rounded-full shadow-md bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                                        <i className={`${project.iconClass} text-white text-2xl`}></i>
                                    </div>
                                    {/* Year Badge (instead of year tag) */}
                                    {/* <span className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full shadow-sm">
                                        {project.year}
                                    </span> */}
                                    {/* Status Badge */}
                                    <span className="absolute top-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                                        {project.status}
                                    </span>
                                </div>

                                {/* Info */}
                                <div className="p-4"> 
                                     <span className=" bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                                        {project.category}
                                    </span> 
                                    <h3 className="font-semibold text-lg text-gray-800 mt-4 mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                        <i className="ri-map-pin-2-fill text-orange-500"></i>
                                        {project.location}
                                    </p>
                                    <p className="text-gray-600 text-sm mt-2">{project.desc}</p>

                                    
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
