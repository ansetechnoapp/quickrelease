'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Core Swiper CSS
import 'swiper/css/pagination'; // Pagination CSS
import 'swiper/css/navigation'; // Navigation CSS

const Wallpaperhero = () => {
  const images = [
    'https://cdn.futura-sciences.com/sources/images/dossier/773/01-intro-773.jpg',
    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    'https://cdn.futura-sciences.com/sources/images/AI-creation.jpg',
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Swiper for scrolling wallpaper */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero content */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-xl mb-8">Explore the best content on the web</p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Custom navigation buttons */}
      <div className="swiper-button-prev z-20" id="swiper-button-prev"></div>
      <div className="swiper-button-next z-20" id="swiper-button-next"></div>

      {/* Add the custom styles for navigation buttons */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white; /* Change color to white */
          background-color: rgba(0, 0, 0, 0.5); /* Add a background */
          width: 40px; /* Increase size */
          height: 40px;
          border-radius: 50%; /* Make them circular */
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px; /* Adjust arrow size */
        }
      `}</style>
    </div>
  );
};

export default Wallpaperhero;
