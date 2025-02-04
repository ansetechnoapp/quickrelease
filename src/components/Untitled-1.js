import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative bg-[url('/images/footer-bg.jpg')] bg-cover bg-center bg-no-repeat text-white py-8">
      {/* Image animée avec Framer Motion */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full bg-[url('/images/footer-shape.png')] bg-contain bg-top bg-no-repeat pointer-events-none"
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <p className="text-center text-gray-400 mt-8">&copy; 2025 UnlockMyDevice. All rights reserved.</p>
      </div>
    </footer>
  );
}
