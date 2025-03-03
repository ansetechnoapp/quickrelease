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
      UrlProfil: "/client-2.png",
      name: "Robert T.",
      activity: "Founder",
      desc: "Franchement, super service ! Mon téléphone était bloqué, et en moins d’une heure, tout était réglé. Rapide et efficace, je recommande à 100 % !",
      rate: 4,
    },
    {
      url: "/client-3.png",
      UrlProfil: "/client-3.png",
      name: "Anna R.",
      activity: "CEO",
      desc: "J’étais sceptique au début, mais j’ai tenté le coup… Et je ne regrette pas ! Mon appareil a été déverrouillé sans aucun souci, et en plus, le service client est top.",
      rate: 5,
    },
    {
      url: "/client-2.png",
      UrlProfil: "/client.png",
      name: "James L.",
      activity: "Manager",
      desc: "J’avais peur que ce soit compliqué, mais en fait, tout s’est fait super facilement. Explications claires, procédure rapide… Bref, parfait !",
      rate: 5,
    },
    {
      url: "/client-3.png",
      UrlProfil: "/client.png",
      name: "James L.",
      activity: "Manager",
      desc: "J’ai pu récupérer l’accès à mon téléphone sans galérer. Service rapide et sérieux, rien à redire. Merci encore !",
      rate: 4,
    },
    {
      url: "/client-3.png",
      UrlProfil: "/client.png",
      name: "James L.",
      activity: "Manager",
      desc: "Très bon service, j’ai pu déverrouiller mon appareil sans problème. Juste un peu plus long que prévu, mais sinon nickel.",
      rate: 3,
    },
    {
      url: "/client-3.png",
      UrlProfil: "/client.png",
      name: "James L.",
      activity: "Manager",
      desc: "Super efficace ! J’ai suivi les instructions, et en quelques minutes, mon téléphone était débloqué. Je garde précieusement cette adresse !",
      rate: 5,
    },
    {
      url: "/client-3.png",
      UrlProfil: "/client.png",
      name: "James L.",
      activity: "Manager",
      desc: "Service fiable et sécurisé, mon téléphone fonctionne parfaitement après le déblocage. Un léger retard dans le traitement, mais rien de bien méchant.",
      rate: 4,
    },
    {
      url: "/client-3.png",
      UrlProfil: "/client.png",
      name: "James L.",
      activity: "Manager",
      desc: "J’avais peur de tomber sur une arnaque, mais pas du tout ! Tout s’est bien passé, et mon téléphone est enfin utilisable à nouveau. Je recommande les yeux fermés.",
      rate: 5,
    }
  ];

  return (
    <div id="feedback" className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[url('/bg-shape.png')] bg-cover bg-no-repeat">
      {/* Header Section */}
      <div className="text-center space-y-3 mb-12">
        <h3 className="text-lg font-semibold text-gray-700">Retour clients</h3>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        Nous avons plus de 1250 clients mondiaux qui nous disent qu'ils sont satisfaits
        </h1>
      </div>

      {/* Swiper Container */}
      {/* <div className="w-full max-w-6xl"> */}
      <div className="w-full">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          navigation={false}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={18}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2 }, // Shows a bit of previous and next slides
          }}
          className="w-full"
        >
          {section.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform transform hover:scale-105">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:max-h-72 my-10">
                  {/* Image Section */}
                  <div className="flex justify-center items-center">
                    <div className="hidden md:flex items-center justify-center bg-gray-100 rounded max-w-52">
                      <Image
                        src={client.url}
                        alt="Client feedback"
                        width={200}
                        height={200}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    {/* Client Info */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center">
                          <Image
                            src={client.UrlProfil}
                            alt={client.name}
                            width={56}
                            height={56}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-gray-900">{client.name}</p>
                          <span className="text-sm text-gray-600">{client.activity}</span>
                        </div>
                      </div>
                      {/* Testimonial */}
                      <p className="text-gray-700 leading-relaxed break-words whitespace-normal">
                        {client.desc}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="mt-6">
                      <div className="flex items-center space-x-1">
                        {Array(client.rate)
                          .fill(0)
                          .map((_, i) => (
                            <span key={i} className="text-2xl text-[#5C30FD]">
                              ★
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>
    </div>
  );
};

export default FeedbackClient;