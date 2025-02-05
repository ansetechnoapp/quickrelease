"use client"

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "Connaître l'évolution de l'iPhone d'Apple depuis sa création",
    date: "15",
    month: "JAN",
    image: "/iphone1.jpg",
  },
  {
    id: 2,
    title: "Les avancées technologiques des smartphones en 2024",
    date: "20",
    month: "FEB",
    image: "/iphone2.jpg",
  },
  {
    id: 3,
    title: "L'impact de l'iPhone sur le marché mondial",
    date: "10",
    month: "MAR",
    image: "/iphone3.jpg",
  },
];

export function Info() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-20">
      {/* Section Titre & Bouton */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="text-left">
          <h5 className="text-gray-500 text-lg">Derniers articles</h5>
          <h1 className="md:text-3xl font-bold text-[#09415E]">
            L&apos;actualité de nos partenaires
          </h1>
        </div>
        <button className="hidden md:block bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-[#072E45] transition">
          Plus d&apos;articles
        </button>
      </div>

      {/* Grid des Articles */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.8, ease: "easeOut" },
                },
              }}
              className="group h-[607px] w-full md:w-[410px] p-4"
            >
              <div className="w-full">
                {/* Image avec hover */}
                <div className="relative w-full h-[300px] overflow-hidden">
                  <Image
                    src={article.image}
                    alt="Iphone"
                    width={410}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-150 ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 w-[62px] rounded-lg h-[70px] bg-yellow-500 group-hover:bg-[#09415E] flex flex-col items-center justify-center text-white">
                    <h1 className="text-lg font-bold">{article.date}</h1>
                    <p className="text-sm">{article.month}</p>
                  </div>
                </div>

                {/* Contenu de l'article */}
                <div className="bg-gray-300 hover:bg-white w-full h-[277px] p-4 shadow-md">
                  <h3 className="font-bold text-[#09415E] mt-5 text-left leading-[26px]">
                    <a href="">{article.title}</a>
                  </h3>

                  <p className="text-gray-700 text-sm mt-4 text-left leading-[26px]">
                    L’iPhone d’Apple était une innovation majeure dans l’industrie de la téléphonie mobile.
                  </p>

                  <div className="flex mt-5 items-center space-x-2 text-[#09415E] hover:border-b-2 border-[#09415E] w-fit">
                    <a href="" className="flex items-center space-x-2">
                      <span className="font-medium">Lire plus</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Info;
