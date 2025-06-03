'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Unlock, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import FAQ from '@/components/FAQ';
import { Navbar } from '@/components/Navbar';
import { HowItWorks } from '@/components/HowItWorks';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import UnlockForm from '@/components/UnlockForm';
import PageSEO from '@/components/SEO/PageSEO';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';


const Demarrer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { ref: heroRef, inView: heroInView } = useInView();
  const { ref: faqRef } = useInView({ threshold: 0.2 });

  const navItems = [
    { name: "Accueil", icon: "🏠", link: "/" },
    { name: "A propos", icon: "ℹ️", link: "#how-it-works" },
    { name: "faq", icon: "⭐", link: "#faq" },
    { name: "Nous contacter", icon: "ℹ️", link: "#unlock" }, 
  ];
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  // FAQ data for structured data
  const faqData = [
    {
      question: "Combien de temps prend le déblocage ?",
      answer: "Le déblocage de votre iPhone prend généralement moins de 24 heures une fois que nous avons reçu toutes les informations nécessaires."
    },
    {
      question: "Le déblocage est-il permanent ?",
      answer: "Oui, le déblocage que nous effectuons est permanent et ne sera pas annulé par les mises à jour iOS."
    },
    {
      question: "Quels modèles d'iPhone sont supportés ?",
      answer: "Nous supportons tous les modèles d'iPhone, de l'iPhone 5 aux derniers modèles iPhone 15."
    }
  ];

  // Breadcrumb data
  const breadcrumbData = [
    { name: "Accueil", url: "/" },
    { name: "Déblocage iPhone", url: "/demarrer" }
  ];

  return (
    <div className="min-h-screen">
      <PageSEO
        structuredData={[
          serviceSchema,
          faqSchema(faqData),
          breadcrumbSchema(breadcrumbData)
        ]}
      />
      <Navbar navItems={navItems} />
      <main className="bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
          <motion.div
            ref={heroRef}
            className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0">
              <Image
                src="/breatcome-bg.png"
                alt="Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </div>

            <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: heroInView ? 0 : 50, opacity: heroInView ? 1 : 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
                  Débloquer mon Icloud
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8">
                  Simple, rapide et sécurisé
                </p>
                <motion.a
                  href="#unlock"
                  className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Unlock className="w-5 h-5" />
                  Déblocage rapide
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </motion.a>
              </motion.div>
            </div> 
          </motion.div>

        {/* Unlock Form and About Section */}
        <SectionWrapper className="bg-white/80 py-4 md:py-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {/* Unlock Form */}
                <UnlockForm
                  isSubmitting={isSubmitting}
                  setIsSubmitting={setIsSubmitting}
                  setShowSuccess={setShowSuccess}
                />
          </div>
        </SectionWrapper>

        {/* How It Works Section */}
        <SectionWrapper className="bg-gray-50">
          <HowItWorks />
        </SectionWrapper>

        {/* FAQ Section */}
        <SectionWrapper className="bg-gradient-to-b">
          <FAQ ref={faqRef} />
        </SectionWrapper>

        {/* Success Message */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg">
              <p className="text-green-800">
                Votre demande a été envoyée avec succès!
              </p>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Demarrer;