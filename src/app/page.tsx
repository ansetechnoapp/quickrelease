// import { FAQ } from "@/components/FAQ";
// import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import Wallpaperhero from "@/components/wallpaperhero";
import { Info } from "@/components/Info";
import FeedbackClient from "@/components/feedbackClient";
import { GARANTIE } from "@/components/Garantie";

export default function Home() {
  return (
    <>

      <Wallpaperhero />
      <Hero />

      <GARANTIE/>
      <HowItWorks />
      {/* <Features /> */}

      

      {/* <Pricing/> */}
      {/* <Testimonials/> */}
      <FeedbackClient />
      <Info />
    </>
  );
}
