import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader, Lock, Mail, Smartphone, Unlock } from 'lucide-react';
import { motion } from 'framer-motion';

export interface UnlockFormProps {
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const UnlockForm = React.forwardRef<HTMLDivElement, UnlockFormProps>(function UnlockForm({ isSubmitting, setIsSubmitting, setShowSuccess }) {
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<FormData>();
  const [isUrgent, setIsUrgent] = useState(false);
  const [successData, setSuccessData] = useState<FormData | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingFormData, setPendingFormData] = useState<FormData | null>(null);

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

  useEffect(() => {
    if (showConfirmation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showConfirmation]);

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
    setPendingFormData(data);
    setShowConfirmation(true);
  };

  const handleConfirmSubmit = async () => {
    if (!pendingFormData) return;

    setIsSubmitting(true);
    try {
      const emailData: EmailData = {
        to: pendingFormData.email,
        subject: `${isUrgent ? '[URGENT] ' : ''}Demande de déblocage - ${pendingFormData.deviceModel}`,
        text: `
Détails de la demande:
-------------------
Modèle d'appareil: ${pendingFormData.deviceModel}
IMEI: ${pendingFormData.imei}
Email: ${pendingFormData.email}
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

      setSuccessData(pendingFormData);
      setShowSuccess(true);
      reset();
      setShowConfirmation(false);
      setPendingFormData(null);
    } catch (error) {
      console.error('Error:', error);
      alert(error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto md:pt-36" id="unlock">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
              Débloquer Votre Appareil
            </h2>
            {isUrgent && <p className="text-red-500 text-center mb-4">DEMANDE URGENTE</p>}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-1.5 sm:mb-2">
                  <Smartphone className="w-4 h-4" />
                  Modèle d&apos;appareil
                </label>
                <input
                  {...register("deviceModel", { required: "Le modèle d'appareil est requis" })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="e.g., iPhone 12 Pro"
                />
                {errors.deviceModel && (
                  <p className="mt-1 text-red-500 text-xs sm:text-sm">{errors.deviceModel?.message as string}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-1.5 sm:mb-2">
                  <Lock className="w-4 h-4" />
                  Numéro IMEI
                </label>
                <input
                  {...register("imei", {
                    required: "L'IMEI est requis",
                    pattern: {
                      value: /\b([5-9]|[1-9]\d+)\b/,
                      message: "L'IMEI doit contenir 15 chiffres"
                    },
                    min: {
                      value: 5,
                      message: "L'IMEI doit être supérieur ou égal à 5"
                    }
                  })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="Enter 15-digit IMEI number"
                />
                {errors.imei && (
                  <p className="mt-1 text-red-500 text-xs sm:text-sm">{errors.imei.message}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-1.5 sm:mb-2">
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
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="Enter your email"
                  type="email"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-xs sm:text-sm">{errors.email.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
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

      {/* Confirmation Modal */}
      {showConfirmation && pendingFormData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
        >
          <div className="bg-white rounded-xl p-6 sm:p-8 max-w-lg w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
              Confirmer votre demande
            </h2>
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Veuillez vérifier vos informations :</h3>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <p className="text-sm sm:text-base"><span className="font-medium">Modèle :</span> {pendingFormData.deviceModel}</p>
                <p className="text-sm sm:text-base"><span className="font-medium">IMEI :</span> {pendingFormData.imei}</p>
                <p className="text-sm sm:text-base"><span className="font-medium">Email :</span> {pendingFormData.email}</p>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Veuillez vérifier si vos informations sont correctes avant de confirmer ?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button
                onClick={() => {
                  setShowConfirmation(false);
                  setPendingFormData(null);
                }}
                className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors text-sm sm:text-base"
              >
                Modifier
              </button>
              <button
                onClick={handleConfirmSubmit}
                disabled={isSubmitting}
                className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader className="w-4 h-4 animate-spin" />
                    Envoi en cours...
                  </span>
                ) : (
                  'Confirmer et envoyer'
                )}
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <SuccessModal
        isOpen={!!successData}
        onClose={() => setSuccessData(null)}
        formData={successData!}
      />
    </div>
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
    >
      <div className="bg-white rounded-xl p-6 sm:p-8 lg:p-10 max-w-lg w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-green-600 mb-4 sm:mb-6">
          Demande envoyée avec succès !
        </h2>
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold mb-2">Récapitulatif :</h3>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
            <p className="text-sm sm:text-base"><span className="font-medium">Modèle :</span> {formData.deviceModel}</p>
            <p className="text-sm sm:text-base"><span className="font-medium">IMEI :</span> {formData.imei}</p>
            <p className="text-sm sm:text-base"><span className="font-medium">Email :</span> {formData.email}</p>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            Un email de confirmation vous a été envoyé à l&apos;adresse indiquée.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Faire une nouvelle demande
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UnlockForm;


