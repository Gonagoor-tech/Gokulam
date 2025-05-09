
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AspectImage from '@/components/ui/AspectImage';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { GalleryHorizontal, Video } from "lucide-react";

const GalleryPage = () => {
  // Define images for the gallery - including newly uploaded images
  const images = [
    {
      src: "/lovable-uploads/f38dae38-94dd-4407-9749-9342c67bca55.png",
      alt: "Two musicians embracing at an event",
      description: "Recognition ceremony"
    },
    {
      src: "/lovable-uploads/0a92f052-4930-4c4e-9cb1-141093e411e0.png", 
      alt: "Classical music ensemble with flutist at center",
      description: "Traditional music session"
    },
    {
      src: "/lovable-uploads/7c48e79e-f9dd-46b7-bb1d-7f7c0c67de39.png",
      alt: "Musicians in traditional attire performing",
      description: "Classical concert performance"
    },
    {
      src: "/lovable-uploads/03fbcb7a-e1f5-4be9-888f-1aef05d806a1.png",
      alt: "Classical dance performance with musicians",
      description: "Dance and music collaboration"
    },
    {
      src: "/lovable-uploads/5c04ad6c-5cb5-4ad6-8744-d7e7bb712507.png",
      alt: "Award ceremony with distinguished guests",
      description: "Felicitation event"
    },
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
  
  // Videos section is kept as is
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
                <Card key={index} className="glass-card overflow-hidden rounded-xl">
                  <AspectImage
                    src={image.src}
                    alt={image.alt}
                    aspectRatio={4/3}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-600">{image.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="videos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Card key={index} className="glass-card overflow-hidden rounded-xl">
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
                    <h3 className="font-serif text-lg font-medium">{video.title}</h3>
                  </CardContent>
                </Card>
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
