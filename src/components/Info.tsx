"use client"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { memo } from "react";

// Move articles data outside component to prevent recreation on re-renders
const articles = [
  {
    id: 1,
    title: "Que vous souhaitiez une batterie qui dure plusieurs jours ou la meilleure offre, nous vous conseillons pour votre prochain iPhone.",
    date: "15",
    month: "JAN",
    image: "/247288_iPhone_Buying_Guides_2_CVirginia.webp",
    href:`https://www.theverge.com/23618862/best-iphone-camera-battery-screen-guide?utm_source=chatgpt.com`,
  },
  {
    id: 2,
    title: "L’iPhone 13 reconditionné est à saisir de toute urgence à moins de 360 euros sur Cdiscount",
    date: "20",
    month: "FEB",
    image: "/MjAyNTAxZmU5YWM5YzJjZTgwZjdjY2VlMTc5ZGViMmQ1MDU5ZWM.jpg",
    href:`https://www.ouest-france.fr/shopping/high-tech/smartphone/liphone-13-reconditionne-est-a-saisir-de-toute-urgence-a-moins-de-360-euros-sur-cdiscount-8f1bfc70-cf63-11ef-8aa9-6a8073542db7`,
  },
  {
    id: 3,
    title: "Meilleures offres iPhone mars 2025 FR : Acheter des modèles d'iPhone 16, y compris l'iPhone 16e",
    date: "10",
    month: "MAR",
    image: "/RW-COMP-Best-iPhone-deals.webp", 
    href:`https://www.thesun.co.uk/shopping/25328176/best-iphone-deals/?utm_source=chatgpt.com`,
  },
];

// Separate article card into its own memoized component
interface Article {
  id: number;
  title: string;
  date: string;
  month: string;
  image: string;
  href: string; // Added href property
}

interface ArticleCardProps {
  article: Article;
  index: number;
}

const ArticleCard = memo(({ article, index }: ArticleCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group h-full max-w-[410px] md:max-w-[350px] p-4"
    >
      <div className="w-full">
        <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
          <Image
            src={article.image}
            alt={article.title}
            width={410}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            priority={index === 0}
          />
          <motion.div 
            className="absolute bottom-2 left-2 w-[62px] rounded-lg h-[70px] bg-yellow-500 flex flex-col items-center justify-center text-white"
            whileHover={{ backgroundColor: "#09415E" }}
          >
            <h1 className="text-lg font-bold">{article.date}</h1>
            <p className="text-sm">{article.month}</p>
          </motion.div>
        </div>

        <div className="bg-gray-300 hover:bg-white w-full h-auto min-h-[277px] p-6 shadow-md transition-colors duration-300 rounded-lg mt-4">
          <h3 className="font-bold text-[#09415E] text-xl text-left leading-[26px]">
            <a href={article.href} className="hover:text-yellow-500 transition-colors duration-300" target="_blank">
              {article.title}
            </a>
          </h3>

          <p className="text-gray-700 text-sm mt-4 text-left leading-[26px]">
            L&apos;iPhone d&apos;Apple était une innovation majeure dans l&apos;industrie de la téléphonie mobile.
          </p>

          <motion.div 
            className="flex mt-5 items-center space-x-2 text-[#09415E] w-fit"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <a href={article.href} className="flex items-center space-x-2 group" target="_blank">
              <span className="font-medium group-hover:text-yellow-500 transition-colors duration-300">
                Lire plus
              </span>
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
                className="group-hover:translate-x-2 transition-transform duration-300"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
});

ArticleCard.displayName = 'ArticleCard';

export function Info() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16">
        <div className="text-left mb-6 md:mb-0">
          <h5 className="text-gray-500 text-lg mb-2">Derniers articles</h5>
          <h1 className="text-2xl md:text-3xl font-bold text-[#09415E]">
            L&apos;actualité de nos partenaires
          </h1>
        </div>
        <a href="https://www.openboxmobile.com/fr/connaitre-levolution-de-liphone-dapple-depuis-sa-creation_331.html?idb=32" target="_blank">
        <motion.button 
          className="hidden md:block bg-yellow-500 text-white px-8 py-3 rounded-full"
          whileHover={{ backgroundColor: "#072E45", scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Plus d&apos;articles
        </motion.button>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {articles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Info;