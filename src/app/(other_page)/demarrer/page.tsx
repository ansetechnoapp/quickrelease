'use client';

import { FAQ } from "@/components/FAQ";
import { UnlockForm } from "@/components/UnlockForm";

const DEMARRER = () => {
  const image = '/breatcome-bg.png';  // Votre image de fond

  return (
    <>
      <div className="relative h-screen overflow-hidden mb-12">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="text-center text-white px-4 md:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Débloquer mon Icloud</h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8">Explore the best content on the web</p>
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                Déblocage rapide
              </button>
            </div>
          </div>
        </div>
      </div>
      <UnlockForm />
      <FAQ />
    </>
  );
};

export default DEMARRER;
