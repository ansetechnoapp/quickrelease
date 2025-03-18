import React from 'react';
import { Shield, Zap, Unlock } from "lucide-react";
import { motion } from 'framer-motion';

export const AboutSectionUnlock: React.FC = () => {
    return (
        <div className="w-full lg:max-w-md mx-auto px-4 lg:px-0">
            {/* Header */}
            <div className="text-center lg:text-left mb-12 lg:mb-16">
                <h3 className="text-blue-600 font-semibold tracking-wide uppercase mb-3 lg:mb-4">
                    A PROPOS
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                    Débloquez votre iCloud<br />
                    <span className="text-gray-600">en toute confidentialité</span>
                </h2>
            </div>

            <div className="space-y-8">
                {/* Features Grid */}
                <div className="grid gap-10 lg:gap-12">
                    {/* Feature 1 */}
                    <div className="flex gap-5 lg:gap-6">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 lg:mb-3">
                                Rapidité garantie
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Grâce à notre expertise et nos outils performants, nous traitons vos demandes de déblocage en un temps record, pour que vous puissiez profiter rapidement de votre appareil débloqué.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex gap-5 lg:gap-6">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                                <Shield className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 lg:mb-3">
                                Processus sécurisé et fiable
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Nous utilisons des méthodes conformes aux normes Apple pour garantir un déblocage sans risques, tout en assurant la confidentialité de vos données personnelles.
                            </p>
                        </div>
                    </div>
                </div>

                {/* How it works section */}
                <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                    <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center gap-2">
                        <Unlock className="w-5 h-5" />
                        Comment ça marche
                    </h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                        <li>Entrez les détails de votre appareil dans le formulaire</li>
                        <li>Vérifiez vos informations avant de soumettre</li>
                        <li>Recevez la confirmation par email</li>
                        <li>Votre appareil sera débloqué dans les plus brefs délais</li>
                    </ol>
                </div>

                {/* Important notes section */}
                <motion.div
                    className="bg-yellow-50 rounded-lg p-5 border border-yellow-100"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ scale: 1.02, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <h3 className="text-lg font-semibold text-yellow-700 mb-3">
                        À noter
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Le déblocage est permanent et ne sera pas affecté par les mises à jour</li>
                        <li>Nous traitons habituellement les demandes dans un délai de 24 à 48 heures</li>
                        <li>Un email de confirmation vous sera envoyé une fois le processus terminé</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutSectionUnlock;
