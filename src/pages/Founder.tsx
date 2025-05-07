
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/founder/HeroSection";
import BiographySection from "@/components/founder/BiographySection";
import TimelineSection from "@/components/founder/TimelineSection";
import TestimonialsSection from "@/components/founder/TestimonialsSection";
import { Helmet } from "react-helmet-async";

const Founder = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Vidwan H.S. Venugopal - Founder | Gokulam School of Music</title>
        <meta name="description" content="Learn about Vidwan H.S. Venugopal, renowned Carnatic flautist, music educator, and founder of Gokulam School of Music. Explore his journey, achievements, and contributions to classical music." />
      </Helmet>
      
      <Navbar />
      
      <div className="pt-24 pb-16">
        <HeroSection />
        <BiographySection />
        <TimelineSection />
        <TestimonialsSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Founder;
