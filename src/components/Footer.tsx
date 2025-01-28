"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <div>
      <footer className="relative bg-[url('/footer-bg.png')] bg-cover bg-center bg-no-repeat text-white w-full py-8">
        {/* Barre supérieure - Version responsive */}
        <div className="w-full flex justify-center absolute z-50 top-0">
          <div className="flex flex-col md:flex-row bg-[url('/subscribe-bg.png')] bg-cover bg-center w-full md:w-[90%] lg:w-[1140px] h-auto md:h-[130px] items-center p-4 md:px-6 md:space-x-6 space-y-4 md:space-y-0">
            <div className="md:mr-0 lg:mr-80 w-full md:w-auto">
              <div className="flex flex-col md:flex-row items-center md:space-x-9 space-y-4 md:space-y-0">
                <div className="bg-white rounded-full w-[70px] h-[70px] flex justify-center items-center">
                  <Image
                    src="/subscribe-icon.png"
                    alt="Icône d'abonnement"
                    width={34}
                    height={34}
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
                <div className="text-center md:text-left mt-2">
                  <p className="text-sm md:text-lg font-bold text-[#00197B]">
                    Commencer le processus
                  </p>
                  <h1 className="text-sm md:text-base text-[#00197B]">
                    Débloquer mon iCloud
                  </h1>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-2">
              <input
                type="text"
                placeholder="Numero IMEI"
                className="h-12 md:h-[56px] w-full md:w-[316px] border border-gray-300 px-4 py-2 text-black"
                required
              />
              <button className="h-12 md:h-[56px] w-full md:w-[126px] bg-[#00197D] text-white px-4 py-2">
                Débloquer
              </button>
            </div>
          </div>
        </div>

        {/* Contenu principal responsive */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 mt-20 md:mt-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Section 1 */}
            <div className="text-center md:text-left">
              <div className="w-[150px] md:w-[188px] h-[40px] md:h-[50px] mx-auto md:mx-0">
                <Image
                  src="/footer-logo.jpg"
                  alt="Logo"
                  width={188}
                  height={50}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm md:text-base">
                Déblocage rapide, la plateforme 100% fiable pour votre déblocage
                sécurisé et rapide.
              </p>
            </div>

            {/* Section 2 */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Déblocage Rapide</h3>
              <ul className="space-y-2">
                {['Accueil', 'À Propos', 'Comment ça marche ?', 'Témoignages'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Blog</h3>
              <p className="text-gray-400 text-sm md:text-base">Actualités</p>
            </div>

            {/* Section 4 */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Adresse: Paris, France
              </p>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                Email: support@unlockmydevice.com
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                Tél: +33 6 12 34 56 78
              </p>
            </div>
          </div>
        </div>

        {/* Animation */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-48 md:h-[245px] bg-[url('/footer-shape.jpg')] bg-cover bg-no-repeat opacity-50"
        />

        
      </footer>
      {/* Copyright */}
      <div className="h-14 bg-[#00197D]  w-full">
          <p className="text-center text-gray-400 text-sm md:text-base py-4">
            &copy; {new Date().getFullYear()} Déblocage Rapide. Tous droits réservés.
          </p>
        </div>
    </div>
  );
}