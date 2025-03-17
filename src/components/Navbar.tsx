"use client";

import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { Menu, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { MobileNav } from "./MobileNav";

// Define types
interface NavItem {
  name: string;
  icon: string;
  link: string;
}

interface NavbarProps {
  navItems: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  // Handle scroll events with useCallback for performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
    // Close mobile menu on scroll
    if (isMenuOpen) setIsMenuOpen(false);
  }, [isMenuOpen]);

  // Toggle mobile menu
  // const toggleMenu = useCallback(() => {
  //   setIsMenuOpen(prev => !prev);
  // }, []);

  // Close mobile menu
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle item hover
  const handleItemHover = useCallback((itemName: string) => {
    setActiveItem(itemName);
  }, []);

  const handleItemLeave = useCallback(() => {
    setActiveItem("");
  }, []);

  // Scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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

  // Render navigation link or anchor based on link type
  const renderNavLink = (item: NavItem) => {
    const isHashLink = item.link.includes('#');
    const linkClasses = `
      group relative text-gray-600 hover:text-blue-600 
      transition-colors duration-300 font-medium
      ${activeItem === item.name ? "text-blue-600" : ""}
    `;

    const linkContent = (
      <>
        <span className="relative z-10">{item.name}</span>
        <span
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left
          transition-transform duration-300 ${activeItem === item.name ? "scale-x-100" : "scale-x-0"}
          group-hover:scale-x-100`}
        />
      </>
    );

    return isHashLink ? (
      <a
        key={item.name}
        href={item.link}
        className={linkClasses}
        onMouseEnter={() => handleItemHover(item.name)}
        onMouseLeave={handleItemLeave}
        aria-current={activeItem === item.name ? "page" : undefined}
      >
        {linkContent}
      </a>
    ) : (
      <Link
        key={item.name}
        href={item.link}
        className={linkClasses}
        onMouseEnter={() => handleItemHover(item.name)}
        onMouseLeave={handleItemLeave}
        aria-current={activeItem === item.name ? "page" : undefined}
      >
        {linkContent}
      </Link>
    );
  };



  return (
    <div className="fixed w-full top-0 z-50">
      {/* Top Bar with slide-down animation */}
      <div
        className={`bg-blue-600 text-white transform transition-all duration-300 
          ${isScrolled ? "h-0 opacity-0 hidden" : "h-auto opacity-100"}`}
        aria-hidden={isScrolled}
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
                  href="mailto:contact@deblocage-device.com"
                  className="hover:text-blue-200 transition-colors text-xs md:text-base"
                >
                  contact@deblocage-device.com
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
        className={`bg-white transition-all duration-500 ${isScrolled ? "shadow-lg" : "shadow-sm"}`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Animated Logo */}
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform">
              <span
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent
                hover:from-blue-500 hover:to-blue-300 transition-all duration-300"
              >
                DébloquerMonICloud
              </span>
            </div>

            {/* Desktop Navigation with hover animations */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(renderNavLink)}

              <Button
                onClick={closeMenu}
                className="bg-blue-600 text-white hover:bg-zinc-950 dark:bg-white"
              >
                <Link href="/demarrer">Débloquer mon iCloud</Link>
                <FaArrowRight className="ml-2" />
              </Button>
            </div>

            <div className="flex justify-between space-x-10 items-center md:hidden z-50">

              {/* Bouton pour ouvrir/fermer le menu */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                aria-label="Toggle menu"
              >
                {!isMenuOpen && (
                  <Menu
                    size={24}
                    className="transform rotate-180 transition-transform duration-300"
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        <div onClick={() => setIsMenuOpen(false)}
          className={`fixed inset-0 bg-black/75 h-screen ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
          <MobileNav isMenuOpen={isMenuOpen} navItems={navItems} onClose={() => setIsMenuOpen(false)} />
        </div>

      </nav>
    </div>
  );
}