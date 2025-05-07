
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import AboutFounder from "@/components/AboutFounder";
import Faculty from "@/components/Faculty";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // We're removing the previous useEffect for smooth scrolling as it's now handled in Navbar component
  
  return (
    <div className="min-h-screen">
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
