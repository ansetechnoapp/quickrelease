"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <div className="flex flex-col">
      <footer className="relative text-white w-full py-8">
        {/* Image de fond */}
        <img
          src="/footer-bg.png"
          alt="Icône d'abonnement"
          className="absolute bg-contain w-full h-full top-0 left-0"
        />

        {/* Conteneur noir devant l'image */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#040404] opacity-90"></div>

        {/* Barre supérieure - Version responsive */}
        {/* <div className="w-full flex justify-center absolute z-50 top-0">
          <div className="flex flex-col md:flex-row bg-[url('/subscribe-bg.png')] bg-cover bg-center w-full md:w-[90%] 
          lg:w-[1140px] h-auto md:h-[130px] items-center p-4 md:px-6 md:space-x-6  md:space-y-0 relative justify-between">


            
            <div className="md:mr-0 w-full md:w-auto ">
              <div className="flex flex-wrap flex-col md:flex-row items-center md:space-x-9 space-y-4 md:space-y-0">
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
                  <p className="text-sm md:text-lg font-bold text-[#00197B] break-words">
                    Commencer le processus
                  </p>
                  <h1 className="text-sm md:text-base text-[#00197B] break-words">
                    Débloquer mon iCloud
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row w-full md:w-auto  md:space-y-0  ">
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
        </div> */}
        <div className="w-full flex justify-center absolute z-50 top-0">
          <div className="flex flex-col md:flex-row bg-[url('/subscribe-bg.png')] bg-cover bg-center w-full md:w-[90%] lg:w-[1140px] h-auto md:h-[130px] items-center p-4 md:px-6 md:space-x-6 md:space-y-0 relative justify-between">

            {/* Left Section */}
            <div className="w-full md:w-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="bg-white rounded-full w-[70px] h-[70px] flex justify-center items-center">
                <Image
                  src="/subscribe-icon.png"
                  alt="Icône d'abonnement"
                  width={34}
                  height={34}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm md:text-lg font-bold text-[#00197B] break-words">
                  Commencer le processus
                </p>
                <h1 className="text-sm md:text-base text-[#00197B] break-words">
                  Débloquer mon iCloud
                </h1>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 md:gap-0">
              <input
                type="text"
                placeholder="Numero IMEI"
                className="h-12 md:h-[56px] w-full md:w-[316px] border border-gray-300 px-4 py-2 text-black rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#00197D]"
                required
              />
              <button className="h-12 md:h-[56px] w-full md:w-[126px] bg-[#00197D] text-white px-4 py-2 rounded-r-lg hover:bg-[#00155e] transition-colors">
                Débloquer
              </button>
            </div>

          </div>
        </div>
        {/* Contenu principal responsive */}
        <div className="mx-auto px-4 md:px-6 relative z-10 mt-20 md:mt-40">
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
              <p className="text-gray-400 mt-4 text-sm md:text-base break-words">
                Déblocage rapide, la plateforme 100% fiable pour votre déblocage
                sécurisé et rapide.
              </p>
              <div className="flex flex-wrap flex-row items-center space-x-4">
                {/* Icons... (rest of the social icons remain unchanged) */}
              </div>
            </div>

            {/* Section 2 */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4 break-words">Déblocage Rapide</h3>
              <ul className="space-y-5">
                {[
                  "Accueil",
                  "À Propos",
                  "Comment ça marche ?",
                  "Témoignages",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex flex-wrap items-center text-gray-400 hover:text-yellow-500 text-sm md:text-base"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 flex-shrink-0"
                        aria-label="Icone de flèche droite"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <span className="break-words">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4 break-words">Blog</h3>
              <p className="text-gray-400 text-sm md:text-base break-words"></p>
              <a
                href="#"
                className="flex flex-wrap items-center text-gray-400 hover:text-yellow-500 text-sm md:text-base"
              >
                <span className="break-words">Actualités</span>
              </a>
            </div>

            {/* Section 4 */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4 break-words">Contact</h3>
              <div className="space-y-4">
                {/* Contact items with flex-wrap */}
                <div className="text-gray-400 text-sm md:text-base flex flex-wrap items-center">
                  <div
                    className="border w-[30px] h-[30px] rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "#193089",
                      borderColor: "#193089",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Icône de localisation"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="flex flex-col ml-2">
                    <h1 className="font-bold text-white">Adresse:</h1>
                    <h6>Paris, France</h6>
                  </div>
                </div>
                <div className="text-gray-400 text-sm md:text-base flex flex-wrap items-center">
                  <div
                    className="border w-[30px] h-[30px] rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "#193089",
                      borderColor: "#193089",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Icône de téléphone"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="flex flex-col ml-2">
                    <h1 className="font-bold text-white">Tél:</h1>
                    <h6>+33 6 12 34 56 78</h6>
                  </div>
                </div>
                <div className="text-gray-400 text-sm md:text-base flex flex-wrap items-center">
                  <div
                    className="border w-[30px] h-[30px] rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "#193089",
                      borderColor: "#193089",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Icône de mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="flex flex-col ml-2">
                    <h1 className="font-bold text-white">Email:</h1>
                    <h6>support@unlockmydevice.com</h6>
                  </div>
                </div>
              </div>
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
      <div className="h-14 bg-[#00197D] w-full">
        <p className="text-center text-gray-400 text-sm md:text-base py-4 break-words">
          &copy; {new Date().getFullYear()} Déblocage Rapide. Tous droits
          réservés.
        </p>
      </div>
    </div>
  );
}