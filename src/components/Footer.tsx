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
              <div className="flex flex-row items-center space-x-4">
                {" "}
                {/* Conteneur principal avec flex en ligne */}
                <div
                  className="border w-[30px] h-[30px] rounded-full flex items-center justify-center"
                  style={{

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
                    aria-label="Facebook"
                    className="transition duration-300 ease-in-out hover:bg-blue-600 hover:border-blue-600 p-1 rounded-full"
                  >
                    <path d="M22 12h-4v10h-5V12H9V8h4V6c0-3 2-5 5-5h3v4h-3c-1 0-2 .5-2 1.5v3.5h4l-1 4h-3v10h-5v-10h-5V8h5V6c0-4 2.5-6 6-6h3v4h-3c-1 0-2 .5-2 1.5v3.5h4l-1 4h-3z" />
                  </svg>
                </div>
                <div
                  className="border w-[30px] h-[30px] rounded-full flex items-center justify-center"
                  style={{
        
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
                    aria-label="Twitter"
                    className="transition duration-300 ease-in-out hover:bg-blue-400 hover:border-blue-400 p-1 rounded-full"
                  >
                    <path d="M23 3a10.7 10.7 0 0 1-3.1.9A4.4 4.4 0 0 0 22.4.3a8.8 8.8 0 0 1-2.8 1.1A4.4 4.4 0 0 0 16.6 0c-2.5 0-4.4 2-4.4 4.4 0 .3 0 .7.1 1-3.6-.2-6.9-1.9-9.1-4.5a4.3 4.3 0 0 0-.6 2.2C2.9 4.8 5.4 7.7 8.7 8.4c-1 .3-2-.1-2.8-.7-.1 2.5 1.8 4.8 4.4 5.3a4.3 4.3 0 0 1-1.9.1c.5 1.6 2 2.7 3.8 2.7a8.7 8.7 0 0 1-5.4 1.9c3.3 2.1 7.3 3.3 11.5 2.9A10.9 10.9 0 0 0 23 3z" />
                  </svg>
                </div>
                <div
                  className="border w-[30px] h-[30px] rounded-full flex items-center justify-center"
                  style={{
              
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
                    aria-label="LinkedIn"
                    className="transition duration-300 ease-in-out hover:bg-blue-700 hover:border-blue-700 p-1 rounded-full"
                  >
                    <path d="M16 8.1c0 1.7-1.2 2.9-2.9 2.9-1.7 0-2.9-1.2-2.9-2.9 0-1.7 1.2-2.9 2.9-2.9 1.7 0 2.9 1.2 2.9 2.9zM16.6 3.4C15.7 2.5 14.4 2 13 2c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.7-.5 3.6-1.4 2.1-1.7 3-4.2 3-6.6 0-1.4-.4-2.8-1.0-4zM18.5 15.6h-4.1v-5.6c0-1.3-.2-2.4-1.6-2.4s-1.8 1.3-1.8 2.4v5.6H7.2V9.3h4.1v1.9c0-1.5 1.2-2.6 2.6-2.6s2.5 1.1 2.5 2.6v5.6z" />
                  </svg>
                </div>
                <div
                  className="border w-[30px] h-[30px] rounded-full flex items-center justify-center"
                  style={{
                    // backgroundColor: "#193089",
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
                    aria-label="Pinterest"
                    className="transition duration-300 ease-in-out hover:bg-red-600 hover:border-red-600 p-1 rounded-full"
                  >
                    <path d="M12 2c-5.5 0-10 4.5-10 10 0 4.4 2.8 8.2 6.8 9.5-.1-.7-.2-1.7.1-2.4 1.2-2.1 1.5-3.8 1.5-3.8s.2-.7.6-1.2c-.2-.3-.6-.5-1-.6-1.1-.3-2.4-.6-3.6-1.2-2.7-1.2-2.4-2.8-1.3-3.3.7-.4 1.2-.2 2.1-.6 1.1-.4 1.1-.9 1.3-1.5-.4-.3-.8-.5-1.3-.5-1.4 0-2.7.9-3.1 2.2-.5 1.4-.2 3 1.1 3.5 1.3.5 2.9.4 4.3-.3 2.4-1.1 3.7-3.5 3.7-6.1 0-4.4-3.6-8-8-8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Déblocage Rapide</h3>
              <ul className="space-y-5">
                {[
                  "Accueil",
                  "À Propos",
                  "Comment ça marche ?",
                  "Témoignages",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center text-gray-400 hover:text-yellow-500 text-sm md:text-base"
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
                        className="mr-2"
                        aria-label="Icone de flèche droite"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Blog</h3>
              <p className="text-gray-400 text-sm md:text-base"></p>
              <a
                href="#"
                className="flex items-center text-gray-400 hover:text-yellow-500 text-sm md:text-base"
              >
                Actualités
              </a>
            </div>

            {/* Section 4 */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-4">
                {/* Section Adresse */}
                <div className="text-gray-400 text-sm md:text-base flex items-center">
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

                {/* Section Téléphone */}
                <div className="text-gray-400 text-sm md:text-base flex items-center">
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

                {/* Section Email */}
                <div className="text-gray-400 text-sm md:text-base flex items-center">
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
      <div className="h-14 bg-[#00197D]  w-full">
        <p className="text-center text-gray-400 text-sm md:text-base py-4">
          &copy; {new Date().getFullYear()} Déblocage Rapide. Tous droits
          réservés.
        </p>
      </div>
    </div>
  );
}
