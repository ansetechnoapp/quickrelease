'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Wallpaperhero = () => {
  const section = [
    { title: "Débloquer iCloud sur iPhone, iPad et iPod", subtitle: "100% fiable", buttonText: "Débloquer mon iCloud", url: '/slider-bg.png' },
    { title: "Obtenez votre code de déblocage en moins d'une heure", subtitle: "Le meilleur service en ligne", buttonText: "Débloquer mon iCloud", url: '/slider-bg2.png' },
    { title: "Profitez d'un service professionnel, sûr et fiable", subtitle: "", buttonText: "Confidentialité", url: 'slider-bg3.png' },
  ];
  return (
    <div className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        // Enable touch drag functionality 
        grabCursor={true}
        draggable={true}
        className="w-full h-full"
      >
        {section.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <div className="text-center text-white">
                <p className="text-xl mb-8  text-yellow-500">{image.subtitle}</p>
                <h1 className="text-5xl font-bold mb-4">{image.title}</h1>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                  {image.buttonText}
                </button>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>



      {/* Navigation buttons - hidden on mobile */}
      <div className="hidden md:block">
        <div className="swiper-button-prev z-20" id="swiper-button-prev"></div>
        <div className="swiper-button-next z-20" id="swiper-button-next"></div>
      </div>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background-color: rgba(0, 0, 0, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
        }

        /* Hide navigation buttons on mobile using CSS as a fallback */
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Wallpaperhero;