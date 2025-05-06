
import { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface VideoProps {
  videoId: string;
  title: string;
}

const VideoSection = () => {
  const [latestVideo, setLatestVideo] = useState<VideoProps>({
    videoId: "1NuitfE6FF0",
    title: "Bengaluru Ganesha Utsava - Featured Performance"
  });
  
  // Added actual videos from the Gokulam Sangeetha Shaale YouTube channel
  const featuredVideos: VideoProps[] = [
    {
      videoId: "k_xLC7FaBAU",
      title: "Dr K. Vishnudev - Ashtapathi at Sri Rama Temple"
    },
    {
      videoId: "WzB-8DQu3uY",
      title: "Srivatsa Shankar - Flute Recital"
    },
    {
      videoId: "eiaVrBXVPZQ",
      title: "Carnatic Flute Solo Performance"
    },
    {
      videoId: "BmKsX5y0PPA", 
      title: "Musical Performance"
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
      
      {/* Featured Videos Carousel */}
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="font-serif text-2xl font-medium text-gokulam-burgundy mb-8 text-center">More Performances</h3>
        
        <Carousel className="w-full mb-12">
          <CarouselContent>
            {featuredVideos.map((video, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="glass-card h-full overflow-hidden rounded-xl p-1">
                  <div className="aspect-video relative">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                  <h4 className="font-serif text-lg font-medium mt-3 mb-2 text-center px-2">{video.title}</h4>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 lg:-left-12" />
          <CarouselNext className="right-0 lg:-right-12" />
        </Carousel>
      </div>
      
      <div className="text-center mt-12">
        <a 
          href="https://www.youtube.com/@gokulamsangeethashaale" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gokulam-burgundy text-white rounded-md hover:bg-gokulam-burgundy/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
        >
          Visit Our YouTube Channel
        </a>
      </div>
    </section>
  );
};

export default VideoSection;
