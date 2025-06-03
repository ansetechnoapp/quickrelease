"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export function Garanti() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, // Reduced to trigger animation earlier
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
    // Remove the isMobile condition to ensure animations work on mobile too
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
        hidden: { opacity: 0.8 },
        visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
      }}
      className="w-full py-12 md:py-24 px-4 md:px-12 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      <div id="garanti" className="max-w-7xl mx-auto">
        {/* Enhanced header section with animated underline */}
        <motion.div 
          className="text-center mb-10 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block mb-3">
            <h3 className="text-[#09415E] text-lg md:text-xl font-medium mb-2 tracking-wide">
              Processus simplifié
            </h3>
            <motion.div 
              className="h-1 w-16 md:w-24 bg-gradient-to-r from-[#2F6DFF] to-[#00187B] rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
          
          <h2 className="text-[#00187B] text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Garantie d&apos;une satisfaction <span className="text-[#2F6DFF]">rapide</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            En quelques clics, vous profitez d&apos;un appareil débloqué et prêt à
            l&apos;emploi.
          </p>
        </motion.div>

        {/* Mobile steps indicator (visible only on mobile) */}
        <div className="flex justify-center mb-8 md:hidden">
          <div className="flex space-x-2">
            {[1, 2, 3].map((step) => (
              <div 
                key={step} 
                className="w-8 h-2 rounded-full bg-gray-200 overflow-hidden"
              >
                <motion.div
                  className="h-full bg-[#2F6DFF]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: (step - 1) * 0.3, duration: 0.5 }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical progress line (visible only on mobile) */}
        <div className="relative md:hidden mx-auto w-0.5 bg-gray-200  left-1/2 transform -translate-x-1/2" style={{ height: 'calc(100% - 200px)', top: '180px', zIndex: 0 }}>
          <motion.div 
            className="absolute top-0 left-0 w-full bg-[#2F6DFF]" 
            style={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        {/* Improved step cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 relative">
          {/* Connecting line between steps (visible only on desktop) */}
          <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#2F6DFF] via-[#00187B] to-[#2F6DFF] z-0" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: index * 0.3, ease: "easeOut" },
                },
              }}
              // Use different animations for mobile and desktop
              whileHover={!isMobile ? { y: -8 } : {}}
              whileTap={isMobile ? { scale: 0.98 } : {}}
              transition={{ type: "spring", stiffness: 400 }}
              className="group flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 border border-gray-100"
            >
              {/* Enhanced icon container */}
              <div className="relative mb-6 md:mb-8">
                <motion.div
                  whileHover={!isMobile ? { scale: 1.05 } : {}}
                  whileTap={isMobile ? { scale: 0.95 } : {}}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br from-[#f8f9ff] to-[#f0f4ff] relative z-10 group overflow-hidden"
                >
                  {/* Active state for mobile (triggers on view rather than hover) */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#2F6DFF] to-[#1a46b0] rounded-2xl"
                    initial={{ scale: 0 }}
                    variants={{
                      hidden: { scale: 0 },
                      visible: { 
                        scale: isMobile ? 1 : 0, 
                        transition: { 
                          delay: index * 0.5 + 0.8,
                          duration: 0.5,
                          ease: "easeOut" 
                        } 
                      }
                    }}
                  />
                  
                  {/* Animated background on hover (desktop only) */}
                  {!isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2F6DFF] to-[#1a46b0] scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl" />
                  )}
                  
                  {/* Radial glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-700 bg-radial-glow" />

                  {/* Content above the background */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 group transition-all duration-300 p-2">
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/90 transition duration-300 rounded-xl" />
                      <Image
                        src={step.imageUrl}
                        alt={`Étape ${step.number} - ${step.title} - Processus de déblocage iPhone`}
                        className={`w-full h-full relative z-10 ${isMobile ? 'brightness-0 invert' : 'group-hover:filter group-hover:brightness-0 group-hover:contrast-200'} transition-all duration-300`}
                        width={48}
                        height={48}
                      />
                    </div>
                    
                    {/* Enhanced numbered badge */}
                    <motion.div 
                      whileHover={!isMobile ? { scale: 1.1, rotate: 5 } : {}}
                      whileTap={isMobile ? { scale: 1.2 } : {}}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] bg-[#ffc703] rounded-full absolute -right-2 -top-2 border-2 border-[#00187B] flex items-center justify-center shadow-lg"
                    >
                      <span className="text-[#00187B] text-sm md:text-base font-bold font-sans">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              
              {/* Content section with improved typography */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#09415E] group-hover:text-[#2F6DFF] transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-700 leading-relaxed max-w-xs transition-colors duration-300">
                {step.description}
              </p>

              {/* Added subtle indicator that shows on mobile and hover on desktop */}
              <motion.div 
                initial={{ width: 0 }}
                variants={{
                  hidden: { width: 0 },
                  visible: { 
                    width: isMobile ? "30%" : 0, 
                    transition: { 
                      delay: index * 0.5 + 1.2,
                      duration: 0.5 
                    } 
                  }
                }}
                whileHover={{ width: "30%" }}
                className="h-0.5 bg-[#2F6DFF] rounded-full mt-5"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Added CTA button */}
        <motion.div 
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <button 
          className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#2F6DFF] to-[#00187B] text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-sm md:text-base"
          onClick={()=> location.href="/demarrer"}>
            Commencer maintenant
          </button>
        </motion.div>
      </div>

      {/* Adding a style tag for the radial glow effect */}
      <style jsx global>{`
        .bg-radial-glow {
          background: radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
        }
      `}</style>
    </motion.section>
  );
}
