"use client";

import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">UnlockMyDevice</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-800 hover:text-blue-600">Home</a>
          <a href="#about" className="text-gray-800 hover:text-blue-600">About Us</a>
          <a href="#how-it-works" className="text-gray-800 hover:text-blue-600">How It Works?</a>
          <a href="#testimonials" className="text-gray-800 hover:text-blue-600">Testimonials</a>
          <a href="#unlock" className="text-gray-800 hover:text-blue-600">Unlock My iCloud</a>
        </div>
        <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#home" className="block px-6 py-2 text-gray-800 hover:bg-gray-100">Home</a>
          <a href="#about" className="block px-6 py-2 text-gray-800 hover:bg-gray-100">About Us</a>
          <a href="#how-it-works" className="block px-6 py-2 text-gray-800 hover:bg-gray-100">How It Works?</a>
          <a href="#testimonials" className="block px-6 py-2 text-gray-800 hover:bg-gray-100">Testimonials</a>
          <a href="#unlock" className="block px-6 py-2 text-gray-800 hover:bg-gray-100">Unlock My iCloud</a>
        </div>
      )}
    </nav>
  );
}
