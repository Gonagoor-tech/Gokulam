
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AspectImage from '@/components/ui/AspectImage';
import { Card, CardContent } from "@/components/ui/card";

const GalleryPage = () => {
  // Define images for the gallery with their descriptions
  const images = [
    {
      src: "/lovable-uploads/f38dae38-94dd-4407-9749-9342c67bca55.png",
      alt: "Two musicians embracing at an event",
      description: "AN EMOTIONAL MOMENT"
    },
    {
      src: "/lovable-uploads/0a92f052-4930-4c4e-9cb1-141093e411e0.png", 
      alt: "Classical music ensemble with flutist at center",
      description: "FROM THE PAGES OF HISTORY, AN OLD AND MEMORABLE PHOTOGRAPH OF YOUNG GURU VIDWAN SHRI H S VENUGOPAL SIR PERFORMING AT A CONCERT. YOUNG VIDUSHI VARIJASHREE VENUGOPAL IS ALSO SEEN, ALONG WITH EMINENT ACCOMPANYING ARTISTES"
    },
    {
      src: "/lovable-uploads/7c48e79e-f9dd-46b7-bb1d-7f7c0c67de39.png",
      alt: "Musicians in traditional attire performing",
      description: "GURU VIDWAN SHRI H S VENUGOPAL SIR PERFORMING FOR YAKSHAGANA OF DR MANTAPA PRABHAKARA UPADHYA SIR, DURING THE FIRST KALAARNAVA IN THE YEAR 2007, AT JSS AUDITORIUM, EMINENT YAKSHAGANA BHAAGAVATHARU ARE SEEN ON THE STAGE"
    },
    {
      src: "/lovable-uploads/03fbcb7a-e1f5-4be9-888f-1aef05d806a1.png",
      alt: "Classical dance performance with musicians",
      description: "ANOTHER IMAGE FEATURING DR MANTAPA PRABHAKARA UPADHYA AND ALL THE BHAAGAVATHARU DURING KALAARNAVA 2007, IN THE MOST MAGNIFICENT - 'STHREE VESHA', A CLASSIC YAKSHAGANA PERFORMANCE"
    },
    {
      src: "/lovable-uploads/5c04ad6c-5cb5-4ad6-8744-d7e7bb712507.png",
      alt: "Award ceremony with distinguished guests",
      description: "GURU VIDWAN SHRI H S VENUGOPAL SIR WITH PARAMA GURU VIDWAN DR N RAMANI SIR, EMINENT FLAUTIST & MUSICIAN, ALONG WITH VIDUSHI VARIJASHREE VENUGOPAL"
    },
    {
      src: "/lovable-uploads/728f54ed-6f58-4356-b228-93d52d39b788.png",
      alt: "Vidwan H S Venugopal in performance with another musician",
      description: "GURU VIDWAN SHRI H S VENUGOPAL SIR WITH VIDWAN SHRI S P BALASUBRAMANYAM SIR DURING KALAARNAVA 2016"
    },
    {
      src: "/lovable-uploads/19e9906b-8a37-485a-bdda-e2807f39753a.png", 
      alt: "Award ceremony with Vidwan H S Venugopal",
      description: "GURU VIDWAN SHRI H S VENUGOPAL SIR BEING CONFERRED WITH THE TITLE AND AWARD - 'KARNATAKA KALASHREE' BY KARNATAKA SANGEETHA NRUTYA ACADEMY, GOVERNMENT OF KARNATAKA"
    },
    {
      src: "/lovable-uploads/d9da594a-895d-4882-96c4-13a0584ce0ba.png",
      alt: "Award presentation to Vidwan H S Venugopal",
      description: "GURU VIDWAN SHRI H S VENUGOPAL SIR BEING FELICITATED BY PADMASHREE DR SUDHA MURTHY AT GOKHALE INSTITUTE OF PUBLIC AFFAIRS, DURING THE KAVYA VACHANA, VADANA - VACHANA - VYAKHYAYANA PROGRAM"
    },
    {
      src: "/lovable-uploads/793fa99c-f5b4-458e-94f5-cdcf658dfd48.png",
      alt: "Honoring ceremony for Vidwan H S Venugopal",
      description: "GURU VIDWAN SHRI H S VENUGOPAL SIR BEING HONOURED BY DR SHRI GURURAJ KARAJAGI SIR AT AN EVENT"
    },
    {
      src: "/lovable-uploads/f6e3b422-2023-4434-9e47-f4053c4fae64.png",
      alt: "Performance with disciples",
      description: "HONOURING SHRI HARIHARAN SIR, EMINENT SINGER AND MUSICIAN AND HIS MOTHER, BY GURU DAMPATIGALU AND VIDUSHI VARIJASHREE VENUGOPAL, OTHER EMINENT ARTISTES ARE SEEN ON THE DIAZ"
    }
  ];

  return (
    <div className="min-h-screen bg-gokulam-light">
      <Helmet>
        <title>Gallery - Gokulam School of Music</title>
      </Helmet>
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 md:py-28" id="gallery-top">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-2 bg-gokulam-gold/20 text-gokulam-burgundy rounded-full font-serif">
            Media Gallery
          </span>
          <h1 className="section-title">Our Journey in Images</h1>
          <p className="text-xl text-gokulam-dark/80">
            Capturing the essence of Carnatic music through performances, awards, and special moments
          </p>
        </div>
        
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
                <p className="font-serif text-sm md:text-base leading-tight tracking-wide text-gokulam-burgundy font-medium">
                  {image.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
