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
        {
            id: 1,
            title: "Station Building and Platform",
            location: "Kodarma Junction, Jharkhand",
            desc: "Platform, FOB, Station Building development",
            category: "Railway Infrastructure",
            status: "In Progress",
            tag: "Flagship Project", // 👈 decorative tag in description
            year: "2024", // 👈 badge in image 
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
                                    ? "bg-orange-600 text-white shadow-md"
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
                                    <span className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full shadow-sm">
                                        {project.year}
                                    </span>
                                    {/* Status Badge */}
                                    <span className="absolute top-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                                        {project.status}
                                    </span>
                                </div>

                                {/* Info */}
                                <div className="p-4"> 
                                     <span className=" bg-orange-600 text-white text-xs px-3 py-1 rounded-full">
                                        {project.category}
                                    </span> 
                                    <h3 className="font-semibold text-lg text-gray-800 mt-4 mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                        <i className="ri-map-pin-2-fill text-orange-600"></i>
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
