"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutUs" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Careers", href: "/careers" },
    { name: "Feedback", href: "/feedback" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 shadow-md">
      {/* 🔶 Top Orange Strip */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[10px] sm:text-sm font-medium">
  <div className="max-w-7xl mx-auto flex justify-center px-2 py-1">
    <div className="flex gap-3 sm:gap-6 text-center">
      <span className="flex items-center gap-1 text-[6px] md:text-[12px]">
        <i className="ri-government-line"></i> GOVERNMENT CONTRACTS EXCLUSIVELY
      </span>
      <span className="flex items-center gap-1 text-[6px] md:text-[12px]">
        <i className="ri-shield-check-line"></i> CLASS A LICENSED
      </span>
      <span className="flex items-center gap-1 text-[6px] md:text-[12px]">
        <i className="ri-file-list-3-line"></i> GeM REGISTERED
      </span>
    </div>
  </div>
</div>


      {/* 🔶 Main Navbar */}
      <div className="backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo + Company Name */}
            <div className="flex items-center space-x-2">
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-gray-800">
                  Adyaraj Developers
                </span>
                <span className="text-xs text-gray-500">
                  Private Limited
                </span>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center text-gray-700 hover:text-orange-600 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Get Quote Button */}
            <div className="hidden md:block">
              <a
                href="/quote"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md shadow-md transition"
              >
                <i className="ri-file-edit-line mr-1"></i> Tender Info
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 hover:text-orange-600 focus:outline-none transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          navLinks={navLinks}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </div>
    </nav>
  );
}
