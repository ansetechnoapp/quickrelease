'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Lock, Unlock, Smartphone, Mail, ChevronDown, Loader } from 'lucide-react';
import { Shield, Zap } from 'lucide-react';
import FAQ from '@/components/FAQ';
import { Navbar } from '@/components/Navbar';

const Demarrer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [showSuccess, setShowSuccess] = useState(false);
  const { ref: heroRef, inView: heroInView } = useInView();
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.2 });
  const { ref: faqRef, inView: faqInView } = useInView({ threshold: 0.2 });

  const navItems = [
    { name: "Accueil", icon: "🏠", link: "/" },
    { name: "A propos", icon: "ℹ️", link: "#unlock" },
    { name: "faq", icon: "⭐", link: "#faq" },
    { name: "Nous contacter", icon: "ℹ️", link: "#unlock" },
  ];

  return (
    <div>
      <Navbar navItems={navItems} />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: heroInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0">
            <img
              src="/breatcome-bg.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          </div>

          <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: heroInView ? 0 : 50, opacity: heroInView ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Débloquer mon Icloud
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Simple, rapide et sécurisé
              </p>
              <motion.a
                href="#unlock"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
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
        {/* <div className='flex flex-row'>
       
<AboutSection /> */}
        {/* Unlock Form Section */}
        <UnlockForm
          ref={formRef}
          inView={formInView}
          isSubmitting={isSubmitting}
          setIsSubmitting={setIsSubmitting}
          setShowSuccess={setShowSuccess}
        />
        {/* </div> */}

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

        {/* FAQ Section */}
        <FAQ ref={faqRef} inView={faqInView} />
      </div>
    </div>

  );
};

interface UnlockFormProps {
  inView: boolean;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const UnlockForm = React.forwardRef<HTMLDivElement, UnlockFormProps>(function UnlockForm({ inView, isSubmitting, setIsSubmitting, setShowSuccess }, ref) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  interface FormData {
    deviceModel: string;
    imei: string;
    email: string;
  }

  interface EmailData {
    to: string;
    subject: string;
    text: string;
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const emailData: EmailData = {
        to: data.email,
        subject: `Unlock Request for ${data.deviceModel}`,
        text: `Device Model: ${data.deviceModel}\nIMEI: ${data.imei}\nEmail: ${data.email}`,
      };

      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) throw new Error('Failed to send email');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      ref={ref}
      id="unlock"
      className="px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto flex flex-col md:flex-row gap-12 justify-between py-20 px-6 ">
        {/* About Section */}
        <div className="w-full md:w-1/2">
          <AboutSection />
        </div>

        {/* Unlock Form */}
        <div className="w-full md:w-1/2">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Unlock Your Device
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <Smartphone className="w-4 h-4" />
                  Device Model
                </label>
                <input
                  {...register("deviceModel", { required: "Device model is required" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="e.g., iPhone 12 Pro"
                />
                {errors.deviceModel && (
                  <p className="mt-1 text-red-500 text-sm">{errors.deviceModel?.message as string}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <Lock className="w-4 h-4" />
                  IMEI Number
                </label>
                <input
                  {...register("imei", {
                    required: "IMEI is required",
                    pattern: {
                      value: /^\d{15}$/,
                      message: "IMEI must be 15 digits"
                    }
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter 15-digit IMEI number"
                />
                {errors.imei && (
                  <p className="mt-1 text-red-500 text-sm">{errors.imei.message}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  type="email"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Unlock className="w-5 h-5" />
                    Submit Request
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>

  );
});



export default Demarrer;


const AboutSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-blue-600 font-semibold tracking-wide uppercase mb-4">
          A PROPOS
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Débloquez votre iCloud<br />
          <span className="text-gray-600">en toute confidentialité</span>
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid gap-12">
        {/* Feature 1 */}
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Rapidité garantie
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Grâce à notre expertise et nos outils performants, nous traitons vos demandes de déblocage en un temps record, pour que vous puissiez profiter rapidement de votre appareil débloqué.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Processus sécurisé et fiable
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Nous utilisons des méthodes conformes aux normes Apple pour garantir un déblocage sans risques, tout en assurant la confidentialité de vos données personnelles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};