import { useState } from 'react';
import { Link } from 'react-router-dom';
import AspectImage from './ui/AspectImage';
import { ChevronDown, ChevronUp, Music, ArrowRight, Award, Calendar } from 'lucide-react';

const AboutFounder = () => {
  const [expandedBio, setExpandedBio] = useState(false);
  
  return (
    <section id="about" className="section-container relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gokulam-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gokulam-burgundy/10 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="animate-slide-up">
            <div className="flex items-center mb-4">
              <div className="h-[1px] w-12 bg-gokulam-gold mr-4"></div>
              <span className="text-sm uppercase tracking-wider text-gokulam-gold font-medium">About Our Founder</span>
            </div>
            
            <h2 className="section-title mb-3">Vidwan H.S. Venugopal</h2>
            
            <h3 className="font-serif text-lg md:text-xl italic text-gokulam-dark/70 mb-8">
              Carnatic Flautist | Music Educator | Founder - Gokulam School of Music
            </h3>
            
            <div className={`prose prose-lg max-w-none text-gokulam-dark/80 ${expandedBio ? '' : 'line-clamp-5'}`}>
              <p className="mb-4">
                Born on December 25, 1959, to H.S. Jayalakshmi and H.S. Sreenivasamurthy, 
                Vidwan Hemmige Srinivasa Murthy Venugopal stands as a towering figure in the 
                world of Carnatic music. His initial tutelage under Vid. A.V. Prakash in Mysore, 
                followed by advanced guidance under Vid. M.S. Srinivasa Murthy in Bangalore, 
                laid the foundation for a remarkable career spanning almost five decades.
              </p>
              
              <p className="mb-4">
                Venugopal is uniquely distinguished as both a soloist and an accompanying artist, 
                revered for his profound artistry and enduring contributions to the Indian 
                classical music landscape. As a solo flautist, he has graced numerous prestigious 
                platforms across India and internationally, captivating audiences with his 
                mellifluous renditions.
              </p>
              
              <p className="mb-4">
                His illustrious performances include a memorable recital at the Durbar Hall of 
                the Mysore Palace in 1991 and a distinguished concert at the Raj Bhavan, 
                witnessed by Her Excellency Dr. Rama Devi, the former Governor of Karnataka.
              </p>
              
              {expandedBio && (
                <>
                  <p className="mb-4">
                    His repertoire extends to acclaimed events such as the Ugadi Music Festival, 
                    Unity Concerts for National Integration in New Delhi organized by the Madras 
                    Telugu Academy, and performances under the aegis of the Department of 
                    Kannada and Culture, Government of Karnataka, and the Indian Council for 
                    Cultural Relations.
                  </p>
                  
                  <p className="mb-4">
                    As an accompanying artist, Vidwan Venugopal has added immense value to the 
                    performances of numerous renowned artists across diverse dance forms such as 
                    Bharatanatyam, Kathak, Mohiniyattam, Kathakali, Kuchipudi, Yakshagana, and 
                    Kavya Vachana. His versatility and ability to seamlessly integrate with these 
                    art forms make him one of the rare artists in the country.
                  </p>
                  
                  <p className="mb-4">
                    Over the years, Vidwan Venugopal has been honored with numerous prestigious accolades, 
                    including the 'Karnataka Kalashree' by Sangeetha Nrithya Academy of Government of Karnataka, 
                    the 'Hamsa Puraskar' by Hamsa Jyothi, the title of 'Sunada Vinoda' by Sri Shirdi Sai 
                    Baba Mandir, the Kempegowda Award by BBMP, and 'Venu Brahma' by Shri Naadabrahma Sangeetha Sabha.
                  </p>
                </>
              )}
            </div>
            
            <div className="mt-6 flex items-center justify-between">
              <button 
                onClick={() => setExpandedBio(!expandedBio)}
                className="flex items-center text-gokulam-burgundy hover:text-gokulam-gold transition-colors duration-300 font-medium"
              >
                {expandedBio ? (
                  <>Read Less <ChevronUp className="ml-1 w-4 h-4" /></>
                ) : (
                  <>Read More <ChevronDown className="ml-1 w-4 h-4" /></>
                )}
              </button>
              
              <Link 
                to="/founder" 
                className="flex items-center text-gokulam-gold hover:text-gokulam-burgundy transition-colors duration-300 font-medium"
              >
                <Award className="mr-1 w-4 h-4" /> View Awards & Full Biography <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -top-3 -right-3 w-full h-full border-2 border-gokulam-gold/30 rounded-2xl"></div>
            <div className="rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02] relative z-10 bg-white">
              <Link to="/founder">
                <AspectImage 
                  src="/lovable-uploads/1dcbffd1-ec55-4eb2-9311-4857ff5b75fa.png" 
                  alt="Vidwan H.S. Venugopal" 
                  aspectRatio={3/4}
                />
              </Link>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gokulam-burgundy/10 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-24 text-center relative z-10">
        <h2 className="decorated-heading section-title">Our Legacy</h2>
        <p className="text-xl max-w-3xl mx-auto mb-16 text-gokulam-dark/80">
          For 40 years, Gokulam School of Music has been a beacon of Carnatic flute education in Bangalore, 
          nurturing over 150 students and producing accomplished musicians who continue to enrich 
          the classical music tradition.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div className="glass-card p-10 rounded-2xl animate-float-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gokulam-gold/10 mb-6">
              <Music className="text-gokulam-gold w-8 h-8" />
            </div>
            <div className="text-5xl font-serif font-bold text-gokulam-burgundy mb-4">40+</div>
            <h3 className="text-xl font-serif font-medium mb-3">Years of Excellence</h3>
            <p className="text-gokulam-dark/70">Dedicated to preserving and advancing the art of Carnatic flute</p>
          </div>
          
          <div className="glass-card p-10 rounded-2xl animate-float-shadow" style={{animationDelay: '0.2s'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gokulam-gold/10 mb-6">
              <Music className="text-gokulam-gold w-8 h-8" />
            </div>
            <div className="text-5xl font-serif font-bold text-gokulam-burgundy mb-4">150+</div>
            <h3 className="text-xl font-serif font-medium mb-3">Active Students</h3>
            <p className="text-gokulam-dark/70">Learning and mastering the nuances of flute playing</p>
          </div>
          
          <div className="glass-card p-10 rounded-2xl animate-float-shadow" style={{animationDelay: '0.4s'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gokulam-gold/10 mb-6">
              <Music className="text-gokulam-gold w-8 h-8" />
            </div>
            <div className="text-5xl font-serif font-bold text-gokulam-burgundy mb-4">15</div>
            <h3 className="text-xl font-serif font-medium mb-3">Kalaarnava Festivals</h3>
            <p className="text-gokulam-dark/70">Celebrating the diversity of Indian classical arts</p>
          </div>
          
          <div className="glass-card p-10 rounded-2xl animate-float-shadow" style={{animationDelay: '0.6s'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gokulam-gold/10 mb-6">
              <Calendar className="text-gokulam-gold w-8 h-8" />
            </div>
            <div className="text-5xl font-serif font-bold text-gokulam-burgundy mb-4">31+</div>
            <h3 className="text-xl font-serif font-medium mb-3">Gokulashtami Festivals</h3>
            <p className="text-gokulam-dark/70">Celebrating divine music in honor of Lord Krishna</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
