"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

interface NavItem {
  name: string;
  icon: string;
  link: string;
}

interface MobileNavProps {
  isMenuOpen: boolean;
  navItems: NavItem[];
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isMenuOpen,
  navItems,
  onClose
}) => {
  // Ref for the first focusable element in the menu
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Focus trap implementation for accessibility
  useEffect(() => {
    if (isMenuOpen) {
      // Focus the first element when menu opens
      setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 100);

      // Handle keyboard navigation for focus trapping
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isMenuOpen, onClose]);

  // Component for both regular links and hash links
  const NavLink = ({ item, index }: { item: NavItem, index: number }) => {
    const isHashLink = item.link.includes('#');

    const linkStyles = {
      animationDelay: `${index * 50}ms`,
      transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
      opacity: isMenuOpen ? 1 : 0,
      transition: `transform 0.3s ease ${index * 0.05}s, opacity 0.3s ease ${index * 0.05}s`
    };

    const linkContent = (
      <div className="flex items-center w-full">
        <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 mr-3">
          <span className="text-xl">{item.icon}</span>
        </span>
        <span className="font-medium">{item.name}</span>
      </div>
    );

    const linkClassName = "flex items-center p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200";

    return isHashLink ? (
      <a
        key={item.name}
        href={item.link}
        className={linkClassName}
        style={linkStyles}
        onClick={onClose}
      >
        {linkContent}
      </a>
    ) : (
      <Link
        key={item.name}
        href={item.link}
        className={linkClassName}
        style={linkStyles}
        onClick={onClose}
      >
        {linkContent}
      </Link>
    );
  };

  return (
    <div
      className={`ml-28 md:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {/* Header with logo and close button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex-shrink-0">
          <Image
            src="/footer-logo2.png"
            alt="Logo"
            className="h-10 w-auto transition-all duration-300 hover:scale-105"
            width={40}
            height={40}
          />
        </div>

        <button
          ref={firstFocusableRef}
          onClick={onClose}
          className="p-6 rounded-full bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-all duration-200"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
      </div>

      {/* Menu content */}
      <div className="flex flex-col h-full pt-6 pb-6 px-4 overflow-y-auto">
        <nav className="space-y-1 mb-6">
          {navItems.map((item, index) => (
            <NavLink key={item.name} item={item} index={index} />
          ))}
        </nav>

        <div className="mt-5">
          <h4 className="font-semibold p-2 text-xl">Contact Info</h4>
          <div className="m-5">
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-600" />
                <a href={`tel:+${process.env.NEXT_PUBLIC_NUMBER}`}>
                  {process.env.NEXT_PUBLIC_NUMBER}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-600" />
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL2}`}>
                  {process.env.NEXT_PUBLIC_EMAIL2}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={20} className="text-blue-600" />
                <span>Disponible 24/7</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-600" />
                <span>123 Rue Exemple, Paris</span>
              </li>
            </ul>
          </div>
        </div>

        <Button
          onClick={onClose}
          className="bg-blue-600 text-white hover:bg-zinc-950 dark:bg-white"
        >
          <Link href="/demarrer">Débloquer mon iCloud</Link>
          <div className="ml-2">🔓</div>
        </Button>
      </div>
    </div>
  );
};