// import { FAQ } from "@/components/FAQ";
// import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import Wallpaperhero from "@/components/wallpaperhero";
import { Info } from "@/components/Info";
import FeedbackClient from "@/components/feedbackClient";
import { Garanti } from "@/components/Garanti";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  const navItems = [
    { name: "Accueil", icon: "🏠", link: "/" },
    { name: "A propos", icon: "ℹ️", link: "#about" },
    { name: "comment sa marche?", icon: "🔄", link: "#how-it-works" },
    { name: "Avis", icon: "⭐", link: "#feedback" },
  ];
  return (
    <>
      <Navbar navItems={navItems} />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Wallpaperhero />
        <div className="px-20">
          <Hero />

          <Garanti />
          <HowItWorks />
          {/* <Features /> */}



          {/* <Pricing/> */}
          {/* <Testimonials/> */}
        </div>
        <FeedbackClient />
        <Info />

      </div>

    </>
  );
}
