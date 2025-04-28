
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Youtube } from 'lucide-react';

const YoutubePage = () => {
  const videos = [
    {
      id: "eiaVrBXVPZQ",
      title: "Carnatic Flute Performance"
    },
    {
      id: "BmKsX5y0PPA",
      title: "Musical Performance"
    },
    {
      id: "Ra20H0yXSrs",
      title: "Special Performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gokulam-light">
      <Helmet>
        <title>Videos - Gokulam School of Music</title>
      </Helmet>
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-2 bg-gokulam-gold/20 text-gokulam-burgundy rounded-full font-serif">
            Video Gallery
          </span>
          <h1 className="section-title">Our Performances</h1>
          <p className="text-xl text-gokulam-dark/80">
            Experience the divine journey of Carnatic music through our performances
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {videos.map((video) => (
            <div key={video.id} className="glass-card rounded-xl overflow-hidden">
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

        <div className="text-center mt-12">
          <a 
            href="https://www.youtube.com/@gokulamsangeethashaale" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-primary inline-flex items-center gap-2"
          >
            <Youtube size={20} />
            <span>Visit Our YouTube Channel</span>
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default YoutubePage;
