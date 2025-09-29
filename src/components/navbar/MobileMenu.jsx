"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ navLinks, menuOpen, setMenuOpen }) {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden backdrop-blur-md bg-white/30 shadow-lg rounded-b-lg"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 
                           hover:text-orange-500 hover:bg-white/20 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
