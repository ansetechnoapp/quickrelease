'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  url: string;
  href1: string;
  article?: string; // Add article content for modal
}

const slides: Slide[] = [
  {
    title: "Débloquer iCloud",
    subtitle: "iPhone, iPad et iPod",
    description: "Service 100% fiable avec garantie de remboursement. Retrouvez l'accès à votre appareil en toute sécurité.",
    buttonText: "Débloquer maintenant",
    url: '/slider-bg.png',
    href1: '/demarrer#unlock',
    article: "Notre service de déblocage iCloud est conçu pour vous aider à retrouver l'accès à votre appareil Apple en toute sécurité. Nous utilisons des méthodes approuvées et légales pour débloquer votre appareil, en respectant toutes les normes de sécurité d'Apple. Notre processus est rapide, fiable et garanti, avec un support client disponible 24/7 pour vous assister à chaque étape.",
  },
  {
    title: "Rapide et Efficace",
    subtitle: "Code en moins d'une heure",
    description: "Notre service express vous garantit un code de déblocage en moins de 60 minutes pour tous vos appareils Apple.",
    buttonText: "Service Express",
    url: '/slider-bg2.png',
    href1: '/demarrer?urgent=true#unlock',
    article: "Notre service express est la solution idéale pour ceux qui ont besoin d'un déblocage rapide. Nous comprenons l'importance d'avoir accès à votre appareil rapidement, c'est pourquoi nous avons optimisé notre processus pour fournir des codes de déblocage en moins de 60 minutes. Notre équipe d'experts travaille de manière efficace tout en maintenant les plus hauts standards de qualité et de sécurité.",
  },
  {
    title: "Sécurité Garantie",
    subtitle: "Service Professionnel",
    description: "Protection des données et confidentialité assurée. Nous respectons votre vie privée à chaque étape du processus.",
    buttonText: "Voir nos garanties",
    url: '/slider-bg3.png',
    href1: '#garanti',
    article: "La sécurité de vos données est notre priorité absolue. Notre service professionnel utilise des protocoles de sécurité avancés pour protéger vos informations personnelles. Nous offrons une garantie complète sur tous nos services de déblocage, avec un remboursement total si nous ne parvenons pas à débloquer votre appareil. Notre équipe de professionnels certifiés assure un service transparent et sécurisé.",
  },
];

const WallpaperHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sync our content with the swiper instance
  useEffect(() => {
    if (swiperInstance && swiperInstance.realIndex !== activeIndex) {
      swiperInstance.slideTo(activeIndex + 1);
    }
  }, [activeIndex, swiperInstance]);

  return (
    <div className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Left side - Content */}
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-full z-10 flex items-center justify-center px-8 md:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg backdrop-blur-md">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-4">
                {slides[activeIndex].subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                {slides[activeIndex].title}
              </h1>
              <p className="text-gray-300 mb-8">
                {slides[activeIndex].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                  onClick={() => window.location.href = slides[activeIndex].href1}>
                  {slides[activeIndex].buttonText}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a 1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="px-6 py-3 bg-transparent border border-gray-400 text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicators */}
        <div className="absolute bottom-8 left-8 md:left-16 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-blue-600 w-20' : 'bg-gray-500'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right side - Image slider with enhanced touch swipe support */}
      <div className="absolute top-0 right-0 w-full md:w-3/5 h-full">
        <Swiper
          modules={[Pagination, EffectFade, Autoplay, Navigation]}
          effect={isMobile ? undefined : "fade"} // Disable fade effect on mobile for better swiping
          autoplay={isAutoplayPaused ? false : { delay: 6000, disableOnInteraction: false }}
          loop={true}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            type: 'bullets',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
          grabCursor={true}
          simulateTouch={true}
          // Enhanced mobile touch parameters
          touchRatio={1.5}
          touchAngle={45}
          longSwipes={true}
          longSwipesRatio={0.2}
          threshold={5}
          resistance={true}
          resistanceRatio={0.85}
          followFinger={true}
          preventInteractionOnTransition={false}
          passiveListeners={true}
          touchMoveStopPropagation={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="touch-manipulation">
              <div
                className="w-full h-full bg-cover bg-center touch-manipulation"
                style={{
                  backgroundImage: `url(${slide.url})`,
                  clipPath: isMobile ? undefined : 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
                }}
                role="img"
                aria-label={slide.title}
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent touch-manipulation"
                style={{ zIndex: 5 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile swipe indicator - only visible on small screens */}
        <div className="absolute bottom-24 right-0 left-0 flex justify-center md:hidden z-20 pointer-events-none">
          <div className="bg-white bg-opacity-20 backdrop-blur-md py-2 px-4 rounded-full text-white text-xs flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Faites glisser
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
          <button
            onClick={() => setIsAutoplayPaused(!isAutoplayPaused)}
            className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition"
            aria-label={isAutoplayPaused ? "Resume slideshow" : "Pause slideshow"}
          >
            {isAutoplayPaused ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>

        {/* Hidden navigation buttons for swiping programmatically */}
        <div className="swiper-button-prev opacity-0 absolute" aria-hidden="true"></div>
        <div className="swiper-button-next opacity-0 absolute" aria-hidden="true"></div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"
              onClick={() => setShowModal(false)}
            />
            <div
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-3xl max-h-[90vh] z-50 overflow-y-auto"
            >
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden mx-auto my-4">
                <div className="relative flex flex-col p-4 sm:p-6 lg:p-8">
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full z-10"
                    aria-label="Close modal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="pr-8 mt-2">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{slides[activeIndex].title}</h2>
                    <p className="text-sm sm:text-base text-blue-600 font-semibold mb-3 sm:mb-4">{slides[activeIndex].subtitle}</p>
                  </div>
                  <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mb-6 overflow-y-auto">
                    <p className="text-gray-600 leading-relaxed">{slides[activeIndex].article}</p>
                  </div>
                  <div className="mt-auto flex flex-col sm:flex-row justify-end gap-3 sticky bottom-0 bg-white pt-4 border-t">
                    <button
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 sm:px-6 sm:py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg transition duration-300 text-sm sm:text-base order-2 sm:order-1"
                    >
                      Fermer
                    </button>
                    <button
                      onClick={() => window.location.href = slides[activeIndex].href1}
                      className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2 text-sm sm:text-base order-1 sm:order-2"
                    >
                      {slides[activeIndex].buttonText}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WallpaperHero;