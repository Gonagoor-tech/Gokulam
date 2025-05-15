
import { useEffect, useState } from 'react';
import { ChevronDown, Music2 } from 'lucide-react';

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
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gokulam-light via-gokulam-light to-white"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1471927866530-2b87c8b93b16?q=80&w=2000')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gokulam-light via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-16 relative z-10 flex flex-col items-center text-center">
        <div 
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center mb-8">
            <div className="h-[1px] w-12 bg-gokulam-gold/70"></div>
            <span className="px-4 py-1 text-gokulam-burgundy/90 font-serif italic">
              Celebrating 40 Years of Excellence
            </span>
            <div className="h-[1px] w-12 bg-gokulam-gold/70"></div>
          </div>
        </div>
        
        <h1 
          className={`font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gokulam-burgundy transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="block relative">
            <span className="relative z-10">Gokulam</span>
            <span className="absolute -bottom-3 left-0 w-full h-3 bg-gokulam-gold/20 z-0 transform -skew-x-3"></span>
          </span>
          <span className="text-3xl md:text-4xl lg:text-5xl text-gokulam-dark/90 block mt-3">School of Music</span>
        </h1>
        
        <p 
          className={`text-xl md:text-2xl font-light text-gokulam-dark/80 max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          A premier institution nurturing the art of Carnatic flute since 1983, 
          guided by the vision of <span className="italic">Vidwan H.S. Venugopal</span>
        </p>
        
        <div 
          className={`flex flex-col sm:flex-row justify-center items-center gap-5 transition-all duration-1000 delay-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a href="#about" className="button-primary group">
            Discover Our Legacy
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#faculty" className="button-secondary">
            Meet Our Artistes 
          </a>
        </div>
        
        {/* Decorative elements */}
        <div className={`absolute top-1/4 -right-24 w-64 h-64 rounded-full bg-gokulam-gold/5 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 blur-3xl' : 'opacity-0'
        }`}></div>
        <div className={`absolute bottom-1/4 -left-24 w-64 h-64 rounded-full bg-gokulam-burgundy/5 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 blur-3xl' : 'opacity-0'
        }`}></div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gokulam-burgundy hover:text-gokulam-gold transition-colors duration-300 animate-float"
        aria-label="Scroll down to learn more"
      >
        <ChevronDown size={36} strokeWidth={1.5} />
      </a>
      
      {/* Floating music notes decorative element */}
      <div className="absolute top-1/3 left-10 text-gokulam-gold/20 animate-float" style={{animationDelay: '1s'}}>
        <Music2 size={40} />
      </div>
      <div className="absolute bottom-1/3 right-10 text-gokulam-burgundy/20 animate-float" style={{animationDelay: '1.5s'}}>
        <Music2 size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
