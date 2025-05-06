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
      <div className="bg-gokulam-light py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-gokulam-burgundy mb-6">Watch More Performances</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Explore our collection of performances, interviews, and educational content
          </p>
          <Link to="/youtube" className="inline-flex items-center gap-2 px-6 py-3 bg-gokulam-burgundy text-white rounded-md hover:bg-gokulam-burgundy/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span className="rounded-full bg-white/20 p-1">
              <Youtube size={20} />
            </span>
            <span>Visit YouTube Gallery</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
