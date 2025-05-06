
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutFounder from "@/components/AboutFounder";
import Faculty from "@/components/Faculty";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || "");
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80, // Account for navbar height
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutFounder />
      <div id="educators">
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
