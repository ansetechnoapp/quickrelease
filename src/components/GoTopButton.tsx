"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoveUp } from "lucide-react";

export default function GoTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: "-100vh" }} // Démarre complètement hors écran (tout en haut)
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : "-150vh", // Disparaît légèrement vers le haut
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 bg-[#09415E] text-white p-3 rounded-full z-[9990] shadow-lg hover:bg-yellow-500 transition"
    >
      {/* Effet d'expansion du cercle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 0, 2], opacity: [1, 0.85, 0] }}
        transition={{
          duration: 1.5, // durée réduite pour un effet plus rapide
          repeat: Infinity,
          ease: "linear", // transition linéaire pour une pulsation constante
        }}
        className="absolute inset-0 w-full h-full bg-[#FFFF00] rounded-full"
      />

      <MoveUp size={24} />
    </motion.button>
  );
}
