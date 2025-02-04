import { FAQ } from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { UnlockForm } from "@/components/UnlockForm";
import Wallpaperhero from "@/components/wallpaperhero";
import Image from "next/image";

export default function Home() {
  return (
   <>
   
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
