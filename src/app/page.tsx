'use client';
import React, { useEffect } from 'react';
import Hero from "@/components/Hero";
import Wallpaperhero from "@/components/wallpaperhero";
import { Info } from "@/components/Info";
import FeedbackClient from "@/components/feedbackClient";
import { Garanti } from "@/components/Garanti";
import { Navbar } from "@/components/Navbar";
import {SectionWrapper} from "@/components/ui/SectionWrapper";
import UnlockForm from '@/components/UnlockForm';
import { motion } from 'framer-motion';
import PageSEO from '@/components/SEO/PageSEO';
import { serviceSchema, localBusinessSchema } from '@/lib/structured-data';

export default function Home() {
  const navItems = [
    { name: "A propos", icon: "ℹ️", link: "#about" },
    { name: "comment sa marche?", icon: "🔄", link: "#garanti" },
    { name: "Service", icon: "🔓", link: "#service" },
    { name: "Avis", icon: "⭐", link: "#feedback" },
  ];
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
    useEffect(() => {
      if (showSuccess) {
        const timer = setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }, [showSuccess]);
  return (
    <>
      <PageSEO
        structuredData={[serviceSchema, localBusinessSchema]}
      />
      <Navbar navItems={navItems} />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Wallpaperhero />
        <div className="md:container mx-auto px-4 md:px-20">
          <Hero />
          <Garanti />
          
          {/* Example of using components separately in a section */}
          <SectionWrapper  className="py-20">
            <h2 id="service"  className="text-4xl font-bold text-center mb-12">Notre Service</h2>
            
            <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
              {/* Left side component */}
              <div className="w-full lg:w-5/12 lg:px-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">À propos du service</h3>
                  <p className="text-gray-700 mb-4">
                    Notre service de déblocage est rapide, fiable et sécurisé. Nous utilisons les dernières 
                    technologies pour garantir un résultat optimal.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Service rapide en moins de 24h</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Compatible avec tous les modèles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Support client 7j/7</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Right side component */}
              <div className="w-full lg:w-7/12 pt-6 lg:pt-0">
                <UnlockForm
                  isSubmitting={isSubmitting}
                  setIsSubmitting={setIsSubmitting}
                  setShowSuccess={setShowSuccess}
                />
              </div>
            </div>
          </SectionWrapper>
        </div>
        <FeedbackClient />
        <Info />
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
    </>
  );
}
