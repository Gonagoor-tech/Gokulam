
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import AboutFounder from "@/components/AboutFounder";
import Faculty from "@/components/Faculty";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Since the Navbar component now handles visibility directly, we don't need any special logic here
  
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <AboutFounder />
      <div id="artists">
        <Faculty />
      </div>
      <VideoSection />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
