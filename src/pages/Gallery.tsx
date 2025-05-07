
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AspectImage from '@/components/ui/AspectImage';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryHorizontal, Video } from "lucide-react";

const GalleryPage = () => {
  // Define images for the gallery
  const images = [
    {
      src: "/lovable-uploads/728f54ed-6f58-4356-b228-93d52d39b788.png",
      alt: "Vidwan H S Venugopal in performance with another musician",
      description: "A classical musical performance"
    },
    {
      src: "/lovable-uploads/19e9906b-8a37-485a-bdda-e2807f39753a.png", 
      alt: "Award ceremony with Vidwan H S Venugopal",
      description: "Awards and recognition ceremony"
    },
    {
      src: "/lovable-uploads/d9da594a-895d-4882-96c4-13a0584ce0ba.png",
      alt: "Award presentation to Vidwan H S Venugopal",
      description: "Receiving prestigious recognition"
    },
    {
      src: "/lovable-uploads/793fa99c-f5b4-458e-94f5-cdcf658dfd48.png",
      alt: "Honoring ceremony for Vidwan H S Venugopal",
      description: "Achievement celebration"
    },
    {
      src: "/lovable-uploads/f6e3b422-2023-4434-9e47-f4053c4fae64.png",
      alt: "Performance with disciples",
      description: "Classical music performance with students"
    }
  ];
  
  // Define videos for the gallery
  const videos = [
    {
      id: "u-E3UHNqRTc",
      title: "Carnatic Flute Performance"
    },
    {
      id: "wqxWst-PBjg",
      title: "Classical Recital"
    },
    {
      id: "OX7D-8VN4Ww",
      title: "Special Performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gokulam-light">
      <Helmet>
        <title>Gallery - Gokulam School of Music</title>
      </Helmet>
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-2 bg-gokulam-gold/20 text-gokulam-burgundy rounded-full font-serif">
            Media Gallery
          </span>
          <h1 className="section-title">Our Journey in Images & Videos</h1>
          <p className="text-xl text-gokulam-dark/80">
            Capturing the essence of Carnatic music through performances, awards, and special moments
          </p>
        </div>
        
        <Tabs defaultValue="photos" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="photos" className="flex items-center gap-2">
                <GalleryHorizontal className="h-4 w-4" />
                <span>Photos</span>
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                <span>Videos</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="photos" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className="glass-card overflow-hidden rounded-xl">
                  <AspectImage
                    src={image.src}
                    alt={image.alt}
                    aspectRatio={4/3}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-600">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="videos" className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="glass-card rounded-xl overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-medium mb-2">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
