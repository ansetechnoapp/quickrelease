// import { FAQ } from "@/components/FAQ";
// import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Wallpaperhero from "@/components/wallpaperhero";
import { Info } from "@/components/Info";
import FeedbackClient from "@/components/feedbackClient";
import { Garanti } from "@/components/Garanti";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  const navItems = [
    { name: "A propos", icon: "ℹ️", link: "#about" },
    { name: "comment sa marche?", icon: "🔄", link: "#garanti" },
    { name: "Avis", icon: "⭐", link: "#feedback" },
  ];
  return (
    <>
      <Navbar navItems={navItems} /> 
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Wallpaperhero />
        <div className="md:container mx-auto px-4 md:px-20">
          <Hero />

          <Garanti />
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
