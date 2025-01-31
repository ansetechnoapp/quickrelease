"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FeedbackClient = () => {
  const section = [
    {
      url: "/client-2.png",
      UrlProfil: "/client.png",
      name: "Robert T.",
      activity: "Founder",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      rate: 5,
    },
    {
      url: "/client-3.png",
      UrlProfil: "/client.png",
      name: "Anna R.",
      activity: "CEO",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      rate: 4,
    },
    {
      url: "/client-2.png",
      UrlProfil: "/client.png",
      name: "James L.",
      activity: "Manager",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      rate: 5,
    },
  ];

  return (
    <div className="relative h-screen flex flex-col items-center justify-center px-4 bg-[url('/bg-shape.png')] bg-cover bg-no-repeat">
      <h3 className="text-lg font-semibold text-gray-700">Clients Feedback</h3>
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        We’ve 1250+ Global Clients Say Us
      </h1>

      <div className="w-full  h-[351px]">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: true }} // 3s entre chaque slide
          loop={false} // Assure une boucle infinie
          loopAdditionalSlides={1} // Évite les problèmes avec peu de slides
          navigation={false}
          pagination={{ clickable: true }}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 1.8 },
          }}
          className="w-full"
        >
          {section.map((client, index) => (
            <SwiperSlide
              key={index}
              className="transition-opacity duration-300 swiper-slide-active:opacity-100"
            >
              <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg">
                {/* Image principale */}
                <div
                  className="w-full md:w-1/2 rounded-lg pl-6 pr-6"
                  style={{ backgroundColor: "#696969" }}
                >
                  <Image
                    src={client.url}
                    alt="Client feedback"
                    width={100}
                    height={160}
                    className="w-full h-64 object-container rounded-lg"
                  />
                </div>

                {/* Infos Client */}
                <div className="md:w-1/2 p-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={client.UrlProfil}
                      alt={client.name}
                      width={50}
                      height={50}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{client.name}</p>
                      <span className="text-sm text-gray-500">
                        {client.activity}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">{client.desc}</p>

                  {/* Affichage des étoiles */}
                  <div className="mt-2 flex space-x-1 text-blue-400">
                    {Array(client.rate)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeedbackClient;
