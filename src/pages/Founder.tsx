
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/founder/HeroSection";
import BiographySection from "@/components/founder/BiographySection";
import TimelineSection from "@/components/founder/TimelineSection";
import TestimonialsSection from "@/components/founder/TestimonialsSection";
import TeachingPhilosophySection from "@/components/founder/TeachingPhilosophySection";

const Founder = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <HeroSection />
        <BiographySection />
        <TimelineSection />
        <TestimonialsSection />
        <TeachingPhilosophySection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Founder;
