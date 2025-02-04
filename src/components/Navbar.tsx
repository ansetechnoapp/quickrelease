"use client";
import Link from "next/link";
import { MapPin } from "lucide-react"; // Importer l'icône MapPin
import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";
import Button from "./ui/Button";
import { FaArrowRight } from "react-icons/fa6";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      // Close mobile menu on scroll
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", icon: "🏠" },
    { name: "About Us", icon: "ℹ️" },
    { name: "How It Works?", icon: "🔄" },
    { name: "Testimonials", icon: "⭐" },
  ];

  return (
    <div className="fixed w-full top-0 z-50">
      {/* Top Bar with slide-down animation */}
      <div
        className={`bg-blue-600 text-white transform transition-all duration-300 ${
          isScrolled ? "h-0 opacity-0" : "h-auto opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-center md:justify-start space-x-6">
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform">
                <Phone size={16} className="animate-pulse" />
                <a
                  href="tel:+33756904053"
                  className="hover:text-blue-200 transition-colors md:text-base text-xs"
                >
                  +33 7 56 90 40 53
                </a>
              </div>
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform">
                <Mail size={16} className="animate-pulse" />
                <a
                  href="mailto:icloud@deblocage-rapide.com"
                  className="hover:text-blue-200 transition-colors text-xs md:text-base"
                >
                  icloud@deblocage-rapide.com
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center md:justify-end mt-2 md:mt-0">
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform">
                <Clock size={16} className="animate-pulse" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white transition-all duration-500 ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Animated Logo */}
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform">
              <span
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent
                hover:from-blue-500 hover:to-blue-300 transition-all duration-300"
              >
                UnlockMyDevice
              </span>
            </div>

            {/* Desktop Navigation with hover animations */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`group relative text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium
                    ${activeItem === item.name ? "text-blue-600" : ""}`}
                  onMouseEnter={() => setActiveItem(item.name)}
                  onMouseLeave={() => setActiveItem("")}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left
                    transition-transform duration-300 ${
                      activeItem === item.name ? "scale-x-100" : "scale-x-0"
                    }
                    group-hover:scale-x-100`}
                  />
                </a>
              ))}
              <Button
                onClick={() => setIsMenuOpen(false)}
                icon={<FaArrowRight className="ml-2" />}
              >
                {" "}
                <Link href="/other_page/demarrer">Unlock My iCloud</Link>
              </Button>
            </div>

            <div className="flex justify-between space-x-10 items-center mb-8 md:hidden z-50">
             
              {/* Bouton pour ouvrir/fermer le menu */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="ml-16 p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X
                    size={24}
                    className="transform rotate-0 transition-transform duration-300"
                  />
                ) : (
                  <Menu
                    size={24}
                    className="transform rotate-180 transition-transform duration-300"
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`ml-32  md:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
           {/* Logo visible uniquement lorsque le menu est ouvert */}
           <div className="mt-10 left-0 flex-shrink-0">
                {isMenuOpen && (
                  <img
                    src="/footer-logo.png"
                    alt="Logo"
                    className="w-32 h-auto"
                  />
                )}
              </div>

          <div className="flex flex-col h-full pt-20 pb-6 px-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center space-x-3 px-4 py-4 text-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}

            <div className="mt-5">
              <h4 className="font-semibold p-2 text-xl">Contact Info</h4>
              <div className="m-5">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Phone size={20} className="text-blue-600" />
                    <span>+33 7 56 90 40 53</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail size={20} className="text-blue-600" />
                    <span>icloud@deblocage-rapide.com</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Clock size={20} className="text-blue-600" />
                    <span>Disponible 24/7</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <MapPin size={20} className="text-blue-600" />{" "}
                    {/* Utiliser MapPin à la place de Location */}
                    <span>123 Rue Exemple, Paris</span>
                  </li>
                </ul>
              </div>
            </div>

            <Button onClick={() => setIsMenuOpen(false)} icon={<div>🔓</div>}>
              {" "}
              <Link href="/other_page/demarrer">Unlock My iCloud</Link>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
