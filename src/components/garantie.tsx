"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function GARANTIE() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Permet de rejouer l'animation à chaque scroll
    threshold: 0.5, // Déclenche l'animation quand 10% du composant est visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const steps = [
    {
      imageUrl: "/work-icon.png",
      number: "1",
      title: "Renseignez vos informations",
      description:
        "Saisissez l'IMEI de votre appareil ainsi que vos informations personnelles dans notre formulaire sécurisé. Cela nous permet de traiter votre demande rapidement.",
    },
    {
      imageUrl: "/work-icon2.png",
      number: "2",
      title: "Effectuez le paiement",
      description:
        "Procédez au paiement sécurisé via notre plateforme. Nous acceptons plusieurs moyens de paiement pour votre convenance.",
    },
    {
      imageUrl: "/work-icon3.png",
      number: "3",
      title: "Déblocage instantané",
      description:
        "Recevez les instructions de déblocage par email. Votre appareil sera débloqué en quelques minutes après confirmation du paiement.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
      }}
      className="w-full py-16 px-4 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-[#09415E] text-lg font-medium mb-2">
            Processus simplifié
          </h3>
          <h1 className="text-[#00187B] text-4xl font-bold mb-4">
            Garantie d'une satisfaction rapide
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En quelques clics, vous profitez d'un appareil débloqué et prêt à
            l'emploi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: 80 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1.5, delay: index * 0.3, ease: "easeOut" },
                },
              }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative">
                <div
                  className="w-[110px] h-[110px] rounded-lg flex items-center justify-center shadow-lg drop-shadow-lg drop-shadow-[#00187B]
                  relative z-10 group"
                >
                  {/* Background animé qui apparaît uniquement au hover */}
                  <div className="absolute inset-0 bg-[#2F6DFF] scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg"></div>

                  {/* Contenu au-dessus du fond */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative w-8 h-8 group">
                      <div className="absolute inset-0 bg-transparent group-hover:bg-white transition duration-300 rounded-md"></div>
                      <img
                        src={step.imageUrl}
                        alt={step.number}
                        className="w-8 h-8 relative z-10"
                      />
                    </div>
                    <div className="w-[26px] h-[26px] bg-[#FFFF00] rounded-full ml-3 absolute top-1/2 left-12 -translate-y-1/2">
                      <span className="text-[#00187B] text-2xl font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-xl font-semibold my-6 text-[#09415E]">
                {step.title}
              </h2>
              <p className="text-gray-600 max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
