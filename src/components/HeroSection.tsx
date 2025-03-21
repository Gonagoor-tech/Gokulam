
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-gokulam-light to-white"
    >
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block px-4 py-1 mb-6 bg-gokulam-gold/20 text-gokulam-burgundy rounded-full font-serif">
              Celebrating 40 Years of Excellence
            </span>
          </div>
          
          <h1 
            className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gokulam-burgundy transition-all duration-1000 delay-500 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Gokulam School of Music
          </h1>
          
          <p 
            className={`text-xl md:text-2xl font-light mb-10 text-gokulam-dark/80 max-w-3xl mx-auto transition-all duration-1000 delay-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            A premier institution nurturing the art of Carnatic flute since 1983, 
            guided by the vision of Vidwan H.S. Venugopal
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-1000 delay-900 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a 
              href="#about" 
              className="px-8 py-3 bg-gokulam-burgundy text-white rounded-md hover:bg-gokulam-burgundy/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discover Our Legacy
            </a>
            <a 
              href="#faculty" 
              className="px-8 py-3 border border-gokulam-burgundy text-gokulam-burgundy rounded-md hover:bg-gokulam-burgundy/10 transition-all duration-300"
            >
              Meet Our Faculty
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gokulam-burgundy hover:text-gokulam-gold transition-colors duration-300 animate-float"
        aria-label="Scroll down to learn more"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
