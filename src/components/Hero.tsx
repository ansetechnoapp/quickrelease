"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export function Hero() {
  const controls = useAnimation();
  const [showModal, setShowModal] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, // Permet de rejouer l'animation à chaque scroll
    threshold: 0.01, // Déclenche l'animation quand 20% du composant est visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { scale: 0.5, opacity: 50 },
        visible: { scale: 1, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
      }}
      className="bg-gray-50 py-16"
      id="about"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { x: -80, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 1.8, delay: 0.3, ease: "easeOut" } },
          }}
          className="flex flex-col items-start text-left space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Déverrouillez votre appareil en toute simplicité !
          </h1>
          <p className="text-lg text-gray-600">
          Des services de déverrouillage rapides, sécurisés et sans tracas pour tous vos appareils. Commencez dès maintenant et découvrez un processus fluide.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onClick={() => window.location.href = '/demarrer#unlock'}
            >
            Commencer
            </button>
            <button
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
              onClick={() => setShowModal(true)}
            >
              Apprendre encore plus
            </button>
            {showModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                <h2 className="text-2xl font-bold mb-4">En savoir plus</h2>
                <p className="text-gray-600 mb-4">
                Découvrez des informations détaillées sur nos services de déverrouillage. Nous nous engageons à fournir des solutions rapides, sécurisées et fiables pour tous vos appareils.
                </p>
                <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => setShowModal(false)}
                >
                Fermer
                </button>
              </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { x: 80, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 1.8, delay: 0.6, ease: "easeOut" } },
          }}
          className="grid place-items-center md:place-items-end"
        >
          <Image
            src="/iphone image handle.png"
            alt="Device unlocking illustration"
            className="w-full max-w-md md:max-w-lg"
            width={600}
            height={600}
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
