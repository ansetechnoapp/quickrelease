import { FAQ } from "@/components/FAQ";
import Features from "@/components/Features";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { UnlockForm } from "@/components/UnlockForm";
import Wallpaperhero from "@/components/wallpaperhero";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Wallpaperhero/>
   <Hero/>
   <HowItWorks/>
   <Features/>
   <Pricing/>
   <Testimonials/>
   <UnlockForm/> 
   <FAQ/>
   <Footer/>
   </>
  );
}
