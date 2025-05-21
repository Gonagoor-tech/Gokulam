
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Youtube, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VideoSection = () => {
  const videos = [
    {
      id: "ophoR16PaGU",
      title: "Carnatic Flute Performance"
    },
    {
      id: "UjYh3Diy_Rw",
      title: "Classical Recital"
    },
    {
      id: "CaGm1nVajFE",
      title: "Special Performance"
    }
  ];
  
  useEffect(() => {
    // In a real implementation, this would fetch the latest videos from the YouTube API
    console.log("Fetching latest videos from YouTube channel");
  }, []);
  
  return (
    <section id="media" className="section-container bg-muted">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block px-3 py-1 mb-2 bg-gokulam-gold/20 text-gokulam-burgundy rounded-full font-serif">
          Media Gallery
        </span>
        <h2 className="section-title">Watch Our Performances</h2>
        <p className="text-xl text-gokulam-dark/80">
          Experience the artistry and mastery of Carnatic flute through our recordings
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <CardContent className="p-4">
                <h3 className="font-serif text-base font-medium">{video.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Updated link to YouTube channel */}
      <div className="text-center mt-8">
        <a 
          href="https://www.youtube.com/@gokulamsangeethashaale" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gokulam-burgundy text-white rounded-md hover:bg-gokulam-burgundy/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
        >
          Visit Our YouTube Channel
          <Youtube size={16} />
        </a>
      </div>
    </section>
  );
};

export default VideoSection;
