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
      url: "/anonymous/2.png",
      UrlProfil: "/anonymous/2.png",
      name: "Sophie Laurent",
      deviceunluck: "iPhone 15 Pro",
      desc: "Un service exceptionnel ! J'ai pu déverrouiller mon iPhone en moins d'une heure. L'équipe est très professionnelle et le processus est sécurisé. Je recommande vivement !",
      rate: 5,
    },
    {
      url: "/anonymous/1.jpg",
      UrlProfil: "/anonymous/1.jpg",
      name: "Marc Dubois",
      deviceunluck: "iPad Pro 12.9-inch (2023)",
      desc: "En tant que propriétaire d'entreprise, j'apprécie particulièrement l'efficacité et la fiabilité de ce service. Mon Samsung a été débloqué rapidement et sans complication.",
      rate: 5,
    },
    {
      url: "/anonymous/4.jpg",
      UrlProfil: "/anonymous/4.jpg",
      name: "Emma Martin",
      deviceunluck: "MacBook Pro 14-inch (2023) ",
      desc: "En tant que professionnelle de l'informatique, je suis impressionnée par la sécurité et l'efficacité du processus. Le support client est réactif et compétent.",
      rate: 5,
    },
    {
      url: "/anonymous/3.png",
      UrlProfil: "/anonymous/3.png",
      name: "Thomas Bernard",
      deviceunluck: "iPad Air (2023)",
      desc: "Service très professionnel et fiable. J'ai pu récupérer l'accès à mon appareil rapidement. La confidentialité et la sécurité sont au rendez-vous.",
      rate: 5,
    },
    {
      url: "/anonymous/2.png",
      UrlProfil: "/anonymous/2.png",
      name: "Marie Dupont",
      deviceunluck: "AirPods Pro 2nd Generation ",
      desc: "En tant que médecin, j'ai besoin d'un accès constant à mon téléphone. Ce service m'a permis de résoudre rapidement un problème critique. Très satisfaite !",
      rate: 5,
    },
    {
      url: "/anonymous/5.png",
      UrlProfil: "/anonymous/5.png",
      name: "Lucas Moreau",
      deviceunluck: "Mac mini (M2) ",
      desc: "Service client exceptionnel et résultats rapides. J'ai pu déverrouiller mon appareil sans perdre de temps. Un service que je n'hésiterai pas à utiliser à nouveau si nécessaire.",
      rate: 5,
    },
    {
      url: "/anonymous/4.jpg",
      UrlProfil: "/anonymous/4.jpg",
      name: "Julie Petit",
      deviceunluck: "iMac 24-inch (2023)",
      desc: "Processus simple et efficace. L'équipe est très professionnelle et le service est fiable. Je recommande sans hésitation !",
      rate: 5,
    },
    {
      url: "/anonymous/3.png",
      UrlProfil: "/anonymous/3.png",
      name: "Pierre Durand",
      deviceunluck: "HomePod mini",
      desc: "En tant qu'ingénieur, j'apprécie particulièrement la précision et l'efficacité du service. Mon appareil a été débloqué rapidement et de manière sécurisée.",
      rate: 5,
    }
  ];

  return (
    <div id="feedback" className="h-[75vh] flex flex-col items-center justify-center px-4 my-20 bg-[url('/bg-shape.png')] bg-cover bg-no-repeat">
      {/* Header Section */}
      <div className="text-center space-y-3 mb-12">
        <h3 className="text-lg font-semibold text-gray-700">Retour clients</h3>
        <h1 className="text-xl md:text-lg font-bold text-gray-900 ">
        Nous avons plus de 1250 clients mondiaux qui nous disent qu&apos;ils sont satisfaits
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
                          <span className="text-sm text-gray-600">device unlock : {client.deviceunluck}</span>
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