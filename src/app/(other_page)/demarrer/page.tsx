'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Lock, Unlock, Smartphone, Mail, ChevronDown, Loader } from 'lucide-react';
import { Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import FAQ from '@/components/FAQ';
import { Navbar } from '@/components/Navbar';
import { HowItWorks } from '@/components/HowItWorks';

const Demarrer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { ref: heroRef, inView: heroInView } = useInView();
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.2 });
  const { ref: faqRef } = useInView({ threshold: 0.2 });

  const navItems = [
    { name: "Accueil", icon: "🏠", link: "/" },
    { name: "A propos", icon: "ℹ️", link: "#unlock" },
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

  return (
    <div>
      <Navbar navItems={navItems} />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden "
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

        <HowItWorks />


        {/* FAQ Section */}
        <FAQ ref={faqRef} />
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
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<FormData>();
  const [isUrgent, setIsUrgent] = useState(false);
  const [successData, setSuccessData] = useState<FormData | null>(null);

  useEffect(() => {
    // Get IMEI and urgent from URL parameters
    const params = new URLSearchParams(window.location.search);
    const imeiParam = params.get('imei');
    const urgentParam = params.get('urgent');

    if (imeiParam) {
      setValue('imei', imeiParam);
    }
    setIsUrgent(urgentParam === 'true');
  }, [setValue]);

  interface FormData {
    deviceModel: string;
    imei: string;
    email: string;
  }

  interface EmailData {
    to: string;
    subject: string;
    text: string;
    sendConfirmation: boolean;
  } 

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const emailData: EmailData = {
        to: data.email,
        subject: `${isUrgent ? '[URGENT] ' : ''}Demande de déblocage - ${data.deviceModel}`,
        text: `
Détails de la demande:
-------------------
Modèle d'appareil: ${data.deviceModel}
IMEI: ${data.imei}
Email: ${data.email}
${isUrgent ? 'DEMANDE URGENTE' : ''}
        `.trim(),
        sendConfirmation: true
      };

      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send email');
      }

      setSuccessData(data);
      setShowSuccess(true); // Use the setShowSuccess prop to display the success message
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error('Error:', error);
      alert(error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      ref={ref}
      className="px-4 h-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto flex flex-col md:flex-row gap-12 justify-between py-20 px- ">
        {/* About Section */}
        <div className="w-full md:w-1/2">
          <AboutSection />
        </div>

        {/* Unlock Form */}
        <div className="w-full md:w-1/2">
          <div id="unlock" className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Débloquer Votre Appareil
            </h2>
            {isUrgent && <p className="text-red-500 text-center mb-4">DEMANDE URGENTE</p>}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <Smartphone className="w-4 h-4" />
                  Modèle d&apos;appareil
                </label>
                <input
                  {...register("deviceModel", { required: "Le modèle d'appareil est requis" })}
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
                  Numéro IMEI
                </label>
                <input
                  {
                  ...register("imei", {
                    required: "L'IMEI est requis",
                    pattern: {
                      value: /\b([5-9]|[1-9]\d+)\b/,
                      message: "L'IMEI doit contenir 15 chiffres"
                    },
                    min: {
                      value: 5,
                      message: "L'IMEI doit être supérieur ou égal à 5"
                    }
                  })
                  }
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
                  Adresse Email
                </label>
                <input
                  {...register("email", {
                    required: "L'email est requis",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Adresse email invalide"
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
                    <span>Demarrer</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      <SuccessModal
        isOpen={!!successData}
        onClose={() => setSuccessData(null)}
        formData={successData!}
      />
    </motion.section>

  );
});

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    deviceModel: string;
    imei: string;
    email: string;
  };
}

const SuccessModal = ({ isOpen, onClose, formData }: SuccessModalProps) => {
  if (!isOpen || !formData) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
    >
      <div className="bg-white rounded-xl p-8 max-w-lg w-full mx-4">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          Demande envoyée avec succès !
        </h2>
        <div className="space-y-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Récapitulatif :</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p><span className="font-medium">Modèle :</span> {formData.deviceModel}</p>
            <p><span className="font-medium">IMEI :</span> {formData.imei}</p>
            <p><span className="font-medium">Email :</span> {formData.email}</p>
          </div>
          <p className="text-sm text-gray-600">
            Un email de confirmation vous a été envoyé à l&apos;adresse indiquée.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Faire une nouvelle demande
          </button>
        </div>
      </div>
    </motion.div>
  );
};

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
