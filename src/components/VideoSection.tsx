
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface VideoProps {
  videoId: string;
  title: string;
}

const VideoSection = () => {
  const [latestVideo, setLatestVideo] = useState<VideoProps>({
    videoId: "1NuitfE6FF0",
    title: "Bengaluru Ganesha Utsava - Featured Performance"
  });
  
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
      
      <div className="max-w-4xl mx-auto mb-16">
        <div className="rounded-xl overflow-hidden shadow-xl">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src={`https://www.youtube.com/embed/${latestVideo.videoId}`}
              title={latestVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        <h3 className="font-serif text-xl font-medium mt-4 text-center">{latestVideo.title}</h3>
      </div>
      
      {/* View more link to Gallery page */}
      <div className="text-center mt-8">
        <Link 
          to="/gallery" 
          className="px-6 py-3 bg-gokulam-burgundy text-white rounded-md hover:bg-gokulam-burgundy/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
        >
          View More Performances
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default VideoSection;
