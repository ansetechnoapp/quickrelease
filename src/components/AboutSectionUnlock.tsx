import { Shield, Zap } from "lucide-react";

export const AboutSectionUnlock = () => {
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
        </div>
    );
};
